import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.header `
  padding: 10px;
  border: 2px solid blue;
  border-radius: 4px;
`;

const Logo = styled(Link) `
    color:#000;
    text-decoration:none;
`

export default function Header() {
    return (
        <StyledHeader>
            <Logo href={'/'}> Eco-Ecommerce</Logo>
            <nav>
                <Link href={'/'}>Home</Link>
                <Link href={'/products'}>Todos los productos</Link>
                <Link href={'categories'} >Categorias</Link>
                <Link href={'account'}>Cuenta</Link>
                <Link href={'cart'}>Carrito</Link>
            </nav>
        </StyledHeader>
    )
}