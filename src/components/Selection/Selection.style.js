import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 800px;
  margin-top: 30px;
`;
export const ContainerMaster = styled.div`
  display: flex;
  align-items: center;
  height: 400px;
  width: 1200px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const Icon = styled.div`
  height: 90px;
  width: 120px;
  margin-right: 30px;
  img {
    height: 100%;
    width: 100%;
    rotate: -10deg;
  }
`;
export const ContainerCarrosel = styled.div`
  display: flex;
  gap: 20px;
  height: 100%;
  width: 100%;
  scroll-behavior: smooth;
  overflow-x: hidden;
`;
export const Card = styled.div`
  display: flex;
  background-color: var(--transparent);
  align-items: center;
  flex-direction: column;
  min-height: 100%;
  min-width: 250px;
  overflow: hidden;
  border-radius: 20px;
  img {
    height: 150px;
    width: 100%;
    border-bottom: 2px solid var(--primary2);
  }
  h2 {
    color: var(--supp);
    margin-top: 5px;
    font-size: 17px;
  }
  h3 {
    color: var(--supp2);
    font-size: 12px;
  }
  h4 {
    color: var(--primary2);
    font-size: 30px;
  }
  :hover {
    cursor: pointer;
  }
`;
export const Button = styled.div`
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
`;
