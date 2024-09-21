import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";
import { useContext } from "react";
import { CartContext } from "./CartContext";

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
    const {cartProducts} = useContext(CartContext);
    return (
      <StyledHeader>
        <Center>
          <Wrapper>
            <Logo href={'/'}>Ecommerce</Logo>
            <StyledNav>
              <NavLink href={'/'}>Home</NavLink>
              <NavLink href={'/products'}>Productos</NavLink>
              <NavLink href={'/categories'}>Categorias</NavLink>
              <NavLink href={'/account'}>Cuenta</NavLink>
              <NavLink href={'/cart'}>Carrito ({cartProducts.length})</NavLink>
            </StyledNav>
          </Wrapper>
        </Center>
      </StyledHeader>
    );
  }