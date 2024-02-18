import styled from "styled-components";
import LogoRight from "/logo-light.png";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src={LogoRight} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
