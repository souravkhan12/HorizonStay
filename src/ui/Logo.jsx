import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="/logo-light-1.png" alt="Logo" />
      <span>HorizonStay</span>
    </StyledLogo>
  );
}

export default Logo;
