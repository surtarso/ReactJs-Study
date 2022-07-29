import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 200px;
  margin: 25px;

  h1 {
    font-size: 36px;
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: darkmagenta;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: bold;
  }

  h4 {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  position: center;
  align-items: center;
  div {
    margin: 10px;
    text-align: center;
    font-weight: bold;
    color: whitesmoke;
  }
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;

  h3 {
    margin-right: 8px;
  }

  a {
    font-size: 18px;
    color: #225ed8;
    font-weight: bold;
  }
`;

export const WrapperImage = styled.img`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: center;
  border-radius: 50%;
  // width: 250px;
  height: 40%;
  margin: 35px;
`;
