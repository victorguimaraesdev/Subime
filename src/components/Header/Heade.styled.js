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
  flex-direction: row;
  gap: 20px;
  img {
    width: 32px;
    height: 32px;
  }
  h4 {
    margin-top: 5px;
    color: var(--supp);
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
