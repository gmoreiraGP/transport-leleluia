import styled from "styled-components";

export const Logo = styled.div`
  grid-area: logo;
  height: 80px;
  width: auto;
`;

export const LogoImage = styled.img`
  height: 100%;
`;

export const Header = styled.header`
  grid-area: header;
  display: grid;
  grid-template-areas: "logo . menu";
  justify-content: space-between;
  align-items: center;
  align-self: baseline;
  width: 100vw;
  padding: 20px;
  border-bottom: 2px solid ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.background};
`;
