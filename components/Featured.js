import Center from "./Center";
import styled from "styled-components";

const Bg = styled.div `
    background-color:#4CAF50 ;
    color:#fff;
    `;

const Title = styled.h1 `
  margin:0;
  font-weight:normal;
`;

export default function Featured() {
    return (
      <Bg>
        <Center>
        <Title>Pro anywhere</Title>
        <p>EcoCommerce es 
            un marketplace en línea que conecta a consumidores conscientes con productos sostenibles.
             La plataforma permite a los usuarios registrar cuentas, explorar un catálogo de productos ecológicos y realizar compras de manera segura, todo mientras filtran productos por categorías básicas. 
             El objetivo principal es ofrecer una experiencia de compra simple y eficiente, enfocada en promover la sostenibilidad.</p>
        </Center>
      </Bg>
    );
  }