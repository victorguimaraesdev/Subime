import { Container } from "./Banner-styles";
import { Text } from "./Banner-styles";
import { ImgBanner } from "./Banner-styles";

const Banner = () => {
  return (
    <Container>
      <ImgBanner>
        <img src="assets\img\Banner\canecaEX3.png" alt="Home img" />
      </ImgBanner>
      <Text>
        <h1>Sua caneca do seu jeito!</h1>
        <p>Transforme seu café em uma experiência única!</p>
        <p>
          Seja para presentear alguém especial, divulgar sua marca ou
          simplesmente deixar sua rotina mais estilosa, nossas canecas
          personalizadas são a escolha perfeita!
        </p>
        <button>Saiba mais</button>
      </Text>
    </Container>
  );
};
export default Banner;
