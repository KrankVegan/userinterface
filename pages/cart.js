import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import Header from "@/components/Header";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

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

export default function CartPage() {
    const {cartProducts} = useContext(CartContext);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        if(cartProducts.length > 0) {
            axios.post('api/cart', {ids:cartProducts})
            .then(responde => {
                setProducts(responde.data);
            })
        }
    }, [cartProducts])
  return (
    <>
      <Header />
      <Center>
        <ColumnsWrapper>
            <Box>
                {!cartProducts?.length && (
                    <div>Tu Carrito Esta Vacio</div>
                )}
                {products?.length > 0 && (
                    <>
                        <h2>Carrito</h2>
                        {products.map(product => (
                            <div>{product.title}:
                            {cartProducts.filter(id => id === product._id).length}</div>
                        ))}
                    </>
                )}
            </Box>
            {!!cartProducts?.length && (
                <Box>
                    <h2>Informacion de Pedido</h2>
                    <input type="text" placeholder="Dirección"/>
                    <Button>Accion de Pago</Button>
                </Box>
                )}
        </ColumnsWrapper>
      </Center>
    </>
  );
}