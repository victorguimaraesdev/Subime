import { Container, Contato2 } from "./Heade.style";
import { LogoImg } from "./Heade.style";
import { Menu } from "./Heade.style";
import { Contato } from "./Heade.style";

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
      <a href="https://api.whatsapp.com/send/?phone=5515998522101&text&type=phone_number&app_absent=0">
        <Contato>
          <Contato2>
            <img src="assets\img\RedesSociais\whatsappIcon.png" alt="" />
          </Contato2>
          <h3>C O N T A T O</h3>
        </Contato>
      </a>
    </Container>
  );
}
export default Header;
