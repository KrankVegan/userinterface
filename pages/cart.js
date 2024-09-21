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
    const {cartProducts} = useContext(CartContext);
    const [products, setProducts] = useState([]);

    const [name,setName] = useState('');
    const [address,setAddress] = useState('');
    const [city,setCity] = useState('');
    const [email,setEmail] = useState('');
    useEffect(() => {
        if(cartProducts.length > 0) {
            axios.post('api/cart', {ids:cartProducts})
            .then(responde => {
                setProducts(responde.data);
            })
        }
    }, [cartProducts])

    let total = 0;
    for(const productId of cartProducts) {
        const price = products.find(p => p._id === productId)?.price || 0;
        total += price;
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
                                <tr>
                                    <ProductInfoCell>
                                        <ProductImageBox>
                                            <img src={product.images[0]} alt=""/>
                                        </ProductImageBox>
                                        {product.title}
                                    </ProductInfoCell>
                                    <td>{cartProducts.filter(id => id === product._id).length}</td>
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
                    <Input type="text" placeholder="Dirección" value={address} onChange={ev => setAddress(ev.target.value)}/>
                    <Input type="text" placeholder="Nombre" value={name} onChange={ev => setName(ev.target.value)}/>
                    <Input type="text" placeholder="Ciudad" value={city} onChange={ev => setCity(ev.target.value)}/>
                    <Input type="text" placeholder="Email" value={email} onChange={ev => setEmail(ev.target.value)}/>                    
                    <Button type="submit">Accion de Pago</Button>
                </Box>
                )}
        </ColumnsWrapper>
      </Center>
    </>
  );
}