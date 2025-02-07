import styled from "styled-components";
import { useDarkMode } from "../context/useDarkMode";

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
  const { isDarkMode } = useDarkMode();

  return (
    <StyledLogo>
      <Img src="/logo-light-1.png" alt="Logo" />
      <span style={{ color: `${isDarkMode ? "white" : "black"}` }}>
        HorizonStay
      </span>
    </StyledLogo>
  );
}

export default Logo;
