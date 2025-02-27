import styled from "styled-components";

export const Container = styled.div`
  margin-top: 75px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const ImgBanner = styled.div`
  margin-left: 120px;
  img {
    height: 600px;
    width: 600px;
  }
`;

export const Text = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.4);
  gap: 5px;
  height: 300px;
  width: 800px;
  color: var(--primary2);
  border-radius: 20px;
  h1 {
    font-size: 50px;
  }
  p {
    margin-bottom: 10px;
    color: #d3d3d3;
    width: 600px;
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
