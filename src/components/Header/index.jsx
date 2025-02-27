import { Container } from "./Heade.styled";
import { LogoImg } from "./Heade.styled";
import { Menu } from "./Heade.styled";
import { Contato } from "./Heade.styled";

function Header() {
  return (
    <Container>
      <LogoImg>
        <img src="assets/img/headerIcon/Logo.png" alt="logo-minecraft" />
      </LogoImg>
      <Menu>
        <ul>
          <li>
            <a href="#">
              <img src="assets/img/headerIcon/iconeHome.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/img/headerIcon/iconeCaneca.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/img/headerIcon/iconeCamiseta.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/img/headerIcon/iconePresente.png" alt="" />
            </a>
          </li>
        </ul>
      </Menu>
      <Contato>
        <img src="assets/img/headerIcon/iconeHeadset.png" alt="" />
        <h4>(15) 99852-2101</h4>
      </Contato>
    </Container>
  );
}
export default Header;
