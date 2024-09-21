import styled, {css} from "styled-components";

export const ButtonStyle = css`
    background-color: #D7CCC8;
    border:0;
    padding: 5px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-size:1rem;
    display:inline-flex;
    align-items: center;
    text-decoration:none;
    svg{
    height: 30px;
    }
`;

export const StyledButton = styled.button`
  ${ButtonStyle}

`;

export default function Button({children,...rest}) {
    return (
      <StyledButton {...rest}>{children}</StyledButton>
    );
  }