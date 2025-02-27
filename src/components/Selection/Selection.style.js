import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  height: 500px;
  border: 2px solid red;
  margin-top: 30px;
`;
export const ContainerMaster = styled.div`
  display: flex;
  align-items: center;
  height: 200px;
  width: 1200px;
  border: solid 2px white;
`;

export const Icon = styled.div`
  height: 100px;
  width: 100px;
  border: 2px solid red;
  img {
    height: 100%;
    width: 100%;
  }
`;
export const ContainerCarrosel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 1000px;
  border: 2px solid blue;
`;
