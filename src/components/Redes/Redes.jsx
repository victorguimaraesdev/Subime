import { Container, ContainerRedes } from "./Redes.sytle";

export const Redes = () => {
  return (
    <Container>
      <ContainerRedes>
        <img src="assets\img\RedesSociais\instagramIcon.png" alt="" />
        <h1>Instagram</h1>
        <p>Acompanhe nosso trabalho em nosso Instagram!</p>
        <a href="https://www.instagram.com/canecas_personalizadasublime/">
          <button>Acessar</button>
        </a>
      </ContainerRedes>
      <ContainerRedes>
        <img src="assets\img\RedesSociais\youtubeIcon.png" alt="" />
        <h1>YouTube</h1>
        <p>Acompanhe nosso canal no YouTube!</p>
        <a href="https://www.youtube.com/@SUBLIMETV-v1h">
          <button>Acessar</button>
        </a>
      </ContainerRedes>
      <ContainerRedes>
        <img src="assets\img\RedesSociais\whatsappIcon.png" alt="" />
        <h1>WhatsApp</h1>
        <p>Fale com a gente pelo WhatsApp e personalise seu pedido!</p>
        <a href="https://api.whatsapp.com/send/?phone=5515998522101&text&type=phone_number&app_absent=0/">
          <button>Acessar</button>
        </a>
      </ContainerRedes>
    </Container>
  );
};
