import Center from "./Center";
import styled from "styled-components";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Bg = styled.div `
    background-color:#5CBF60  ;
    color:#fff;
    padding: 50px 0;
    `;

const Title = styled.h1 `
  margin:0;
  font-weight:normal;
  font-size:3rem;
`;

const Desc = styled.p `
  color: #fff;
  font-size: .8rem;
`

const Wrapper = styled.div `
  display: grid;
  grid-template-columns: 0.8fr 1.2fr; /* ratio for features image */
  gap: 40px;
  img{
    max-width:100%;
    height: auto; /* Ensures the image maintains its aspect ratio */
  }
  `;

const Column = styled.div `
  display: flex;
  align-items:center;
  flex-direction: column;
`;

const ButtonWrapper = styled.div `
    display: flex;
    gap:10px;
    margin-top:25px;
}
`;

export default function Featured({product}) {
    const {addProduct} = useContext(CartContext);
    function addFeaturedToCart() {
      addProduct(product._id);
    }
    return (
      <Bg>
        <Center>

        <Wrapper>
          <Column>

          <div>
          <Title>{product.title}</Title>
            <Desc>{product.description}</Desc>

            <ButtonWrapper>
            <ButtonLink href={'products/'+ product._id}> Acerca de este Producto</ButtonLink>


            <Button onClick={addFeaturedToCart}> Añadir a Carrito
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>


            </Button>
            </ButtonWrapper>
          </div>
          
          </Column>
          <Column>
            <img src="https://eco-commerce.s3.amazonaws.com/1726752203383.jpg" alt=""/>
          </Column>
        </Wrapper>

        
        </Center>
      </Bg>
    );
  }