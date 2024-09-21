
import styled from "styled-components";
import Button from "./Button";
import Link from "next/link";


const ProductWrapper = styled.div `
    margin-top: 5px;
}
`;

const Box = styled(Link)`
    background-color:#FFFFF0  ;
    padding: 20px;
    height: 120px;
    text-align: center;
    display: flex;
    align-items:center;
    justify-content:center;
    border-radius: 10px;
    img{
        max-width: 100%;
        max-height: 150px;
    }
`;

const Title = styled(Link) `
    font-weight:normal;
    font-size:1.1rem;
    color:inherit;
    text-decoration:none;
`;


const ProductInfoBox = styled.div `
margin-top: 10px

`;

const PriceRow = styled.div`
    display:flex;
    align-items: center;
    justify-content:space-between;
    margin-top:5px;

`;


const Price = styled.div`
    font-size:1.4rem;
    font-weight:bold;
`;

export default function ProductBox({_id,title,description,price,images}) {

    const url = '/products/' + _id;    
    return (
        <ProductWrapper>
            <Box href={url}> 
                <div>
                <img src={images[0]} alt="" />
                </div>
            </Box>
            <ProductInfoBox>
                <Title href={url}>
                    {title}
                </Title>
                <PriceRow>
                <Button>Añadir a Carrito</Button>
                    <Price>
                    ${price}
                    </Price>
                </PriceRow>
            </ProductInfoBox>
        </ProductWrapper>
    );
}