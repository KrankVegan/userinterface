import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import Header from "@/components/Header";
import Table from "@/components/Table";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Input from "@/components/Input"; 

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.2fr .8fr;
  gap: 40px;
  margin-top: 40px;
`;

const Box = styled.div`
  background-color:#FFFFF0;
  border-radius: 10px;
  padding:30px;
`;


const ProductInfoCell = styled.td`
  border-top: 1px solid rgba(0,0,0,.1);
`;

const ProductImageBox = styled.div`
  width: 100px;
  height: 100px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display:flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img{
    max-width: 80px;
    max-height: 80px;
  }
`;



export default function CartPage() {
    const {cartProducts, addProduct, removeProduct, clearCart} = useContext(CartContext);
    const [products, setProducts] = useState([]);
    const [name,setName] = useState('');
    const [address,setAddress] = useState('');
    const [city,setCity] = useState('');
    const [email,setEmail] = useState('');
    const [isSuccess,setIsSuccess] = useState(false);
    
    useEffect(() => {
        if (cartProducts.length > 0) {
          axios.post('/api/cart', {ids:cartProducts})
            .then(response => {
              setProducts(response.data);
            })
        } else {
          setProducts([]);
        }
      }, [cartProducts]);

      useEffect(() => {
        if (typeof window === 'undefined') {
          return;
        }
        if (window?.location.href.includes('success')) {
          setIsSuccess(true);
          clearCart();
        }
      }, []);
    

      function moreOfThisProduct(id) {
        addProduct(id);
      }
      function lessOfThisProduct(id) {
        removeProduct(id);
      }

      async function goToPayment() {
        const response = await axios.post('/api/checkout', {
          name,email,city,address,
          cartProducts,
        });
        if (response.data.url) {
          window.location = response.data.url;
        }
      }

    let total = 0;
    for(const productId of cartProducts) {
        const price = products.find(p => p._id === productId)?.price || 0;
        total += price;
    }

    if (isSuccess) {
      return (
        <>
          <Header />
          <Center>
            <ColumnsWrapper>
              <Box>
                <h1>Gracias por tu compra!</h1>
                <p>Haz ayudado al medio ambiente con tu compra :).</p>
              </Box>
            </ColumnsWrapper>
          </Center>
        </>
      );
    }

  return (
    <>
      <Header />
      <Center>
        <ColumnsWrapper>
            <Box>
                <h2>Carrito</h2>
                {!cartProducts?.length && (
                    <div>Tu Carrito Esta Vacio</div>
                )}
                {products?.length > 0 && (
                    <Table>
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => (
                                <tr key={product._id}>
                                    <ProductInfoCell>
                                        <ProductImageBox>
                                            <img src={product.images[0]} alt=""/> 
                                        </ProductImageBox>
                                        {product.title}
                                    </ProductInfoCell>
                                    <td>
                                        <button 
                                        onClick={() => lessOfThisProduct(product._id)}>-</button>
                                        {cartProducts.filter(id => id === product._id).length}
                                        <button 
                                        onClick={() => moreOfThisProduct(product._id)}
                                        >+</button>
                                    </td> 
                                    <td>${cartProducts.filter(id => id === product._id).length * product.price}</td>
                                    
                                </tr>
                                ))} 
                            <tr>
                                <td></td>
                                <td>TOTAL:</td>
                                <td>${total}</td>
                            </tr>
                        </tbody>
                    </Table>
                )}
            </Box>
            {!!cartProducts?.length && (
                <Box>
                    <h2>Informacion de Pedido</h2>
                    
                        <Input type="text" name="address" placeholder="Dirección" value={address} onChange={ev => setAddress(ev.target.value)}/>
                        <Input type="text" name="name" placeholder="Nombre" value={name} onChange={ev => setName(ev.target.value)}/>
                        <Input type="text" name="city" placeholder="Ciudad" value={city} onChange={ev => setCity(ev.target.value)}/>
                        <Input type="text" name="email" placeholder="Email" value={email} onChange={ev => setEmail(ev.target.value)}/>                    
                        <Button type="submit" onClick={goToPayment}>Accion de Pago</Button>
                </Box>
                )}
        </ColumnsWrapper>
      </Center>
    </>
  );
}