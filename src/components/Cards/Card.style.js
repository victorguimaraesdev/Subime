import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 470px;
  gap: 160px;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  width: 300px;
  height: 470px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.1);
  img {
    width: 100%;
    height: 150px;
    border-radius: 20px 20px 0px 0px;
  }
  h1 {
    color: var(--primary2);
    font-size: 30px;
    margin-left: 10px;
  }
  p {
    margin-top: 10px;
    color: var(--supp2);
    margin-left: 10px;
  }
  &:hover {
    transition: all 0.3s ease-in-out;
    transform: scale(1.1);
    border: 2px solid var(--primary2);
  }
`;
