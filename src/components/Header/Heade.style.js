import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 25px 140px;
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
  color: var(--secundary);
  border-bottom: 1px solid var(--gold);
  z-index: 5;
`;
export const LogoImg = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 200px;
    height: 80px;
  }
`;
export const Contato = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: var(--supp);
  gap: 0px;
  img {
    width: 32px;
    height: 32px;
  }
  h3 {
    margin-top: 2px;
    color: var(--supp);
    font-size: 10px;
  }
  &:hover {
    cursor: pointer;
    transition: 0.5s;
    transform: scale(1.2);
  }
`;
export const Menu = styled.nav`
  position: absolute;
  right: 630px;
  ul {
    display: flex;
    gap: 50px;
    li {
      cursor: pointer;
      a {
        img {
          width: 32px;
          height: 32px;
          &:hover {
            transition: 0.5s;
            transform: scale(1.5);
          }
        }
        &:hover {
          transition: 0.5s;
        }
      }
    }
  }
`;
export const Contato2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  /* border: 2px solid var(--supp); */
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.9);
  img {
    /* margin-top: 5px; */
    width: 32px;
    height: 32px;
  }
  /* &:hover {
    border: 2px solid var(--supp);
    cursor: pointer;
    transition: 0.5s;
    transform: scale(1.2);
  } */
`;
