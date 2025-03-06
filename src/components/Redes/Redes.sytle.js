import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-top: 30px;
`;

export const ContainerRedes = styled.div`
  display: flex;
  width: 350px;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border: 2px solid var(--supp);
  padding: 25px;
  text-align: center;
  border-radius: 20px;
  img {
    width: 50px;
    height: 50px;
  }
  button {
    transition: 0.5s;
    font-size: 19px;
    margin-top: 20px;
    height: 50px;
    width: 200px;
    background-color: var(--primary2);
    color: var(--supp);
    border-radius: 20px;
    border: 2px solid var(--primary2);
    &:hover {
      cursor: pointer;
      border: 2px solid white;
      scale: 1.1;
    }
  }
`;
