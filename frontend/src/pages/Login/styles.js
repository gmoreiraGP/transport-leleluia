import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas: "wrapper box";
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  transform: translateX(20px);
`;

export const Main = styled.div`
  grid-area: main;

  justify-self: center;
  align-self: center;
  padding: 20px;
`;

export const Wrapper = styled.div`
  grid-area: wrapper;
  border: none;
  border-radius: 20px;
  position: relative;

  img {
    border-radius: 20px;
    width: 100%;
    max-width: 1200px;
  }
`;
export const Box = styled.div`
  grid-area: box;
  width: 100%;
  max-width: 1200px;
  height: 80%;
  padding: 20px;
  transform: translateX(-40px);

  background: ${props => props.theme.colors.text};
  color: ${props => props.theme.colors.background};

  border: none;
  border-radius: 20px;

  display: grid;
  grid-template-areas: "typography" "form";
`;
export const Typography = styled.div`
  grid-area: typography;
  text-align: center;
  align-self: center;
  padding: 5px;

  h1 {
    margin: 0 0 10px 0;
  }
`;

export const WrapperForm = styled.div`
  grid-area: form;
  align-self: center;
  width: 80%;
  height: 100%;
  justify-self: center;
  padding: 10px;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input,
    button {
      margin: 5px;
    }

    input {
      width: calc(100% - 4px);
      background: transparent;
      border: none;
      border-bottom: 2px solid ${props => props.theme.colors.primary};
      padding: 5px;

      &:focus,
      &:active,
      &:hover {
        background: transparent;
      }
    }

    button {
      width: 100%;
      background: ${props => props.theme.colors.primary};
      border: 4px solid ${props => props.theme.colors.primary};
      border-radius: 10px;
      padding: 10px;
      color: ${props => props.theme.colors.text};
      font-weight: bold;
      text-transform: uppercase;
      text-align: center;
      letter-spacing: 2px;

      :hover {
        background: ${props => props.theme.colors.background};
        border: 4px solid ${props => props.theme.colors.background};
      }
    }
  }
`;
