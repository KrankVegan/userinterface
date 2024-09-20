import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";

const StyledHeader = styled.header `
  padding: 10px;
  background-color: #4CAF50;
`;

const Logo = styled(Link) `
    color:#fff;
    text-decoration:none;
`

const Wrapper = styled.div `
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
`;


const StyledNav = styled.nav`
    display: flex;
    gap: 10px;
`;

const NavLink = styled(Link) `
color:#fff;
text-decoration:none;
`;

export default function Header() {
    return (
        <StyledHeader>
            <Center>
            <Wrapper>
            <Logo href={'/'}> Eco-Ecommerce</Logo>
                <StyledNav>
                    <NavLink href={'/'}>Home</NavLink>
                    <NavLink href={'/products'}>Todos los productos</NavLink>
                    <NavLink href={'categories'} >Categorias</NavLink>
                    <NavLink href={'account'}>Cuenta</NavLink>
                    <NavLink href={'cart'}>Carrito (0)</NavLink>
                </StyledNav>
            </Wrapper>
            </Center>
        </StyledHeader>
    )
}