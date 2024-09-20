import styled from "styled-components";

const StyledButton = styled.button`
    background-color: #D7CCC8;
    border:0;
    padding: 5px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-size:1rem;
    display:inline-flex;
    align-items: center;

    svg{
    height: 30px;
    }
`

export default function Button({children,...rest}) {
    return (
      <StyledButton {...rest}>{children}</StyledButton>
    );
  }