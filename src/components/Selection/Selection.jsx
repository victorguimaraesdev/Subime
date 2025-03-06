import { useRef } from "react";
import {
  Card,
  Container,
  ContainerCarrosel,
  ContainerMaster,
  Icon,
  Button,
} from "./Selection.style";

export const Selection = () => {
  // Criamos refs para cada carrossel
  const carrosselRef1 = useRef(null);
  const carrosselRef2 = useRef(null);
  const carrosselRef3 = useRef(null);

  // Função para rolar para a esquerda
  const scrollLeft = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  // Função para rolar para a direita
  const scrollRight = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <Container>
      <ContainerMaster>
        <Icon>
          <img src="assets\img\Selection\iconeCaneca.png" alt="Icone" />
        </Icon>
        <Button onClick={() => scrollLeft(carrosselRef1)}>
          <img src="assets\img\Selection\Cards\voltar.png" alt="" />
        </Button>
        <ContainerCarrosel ref={carrosselRef1}>
          <Card>
            <img src="assets\img\Selection\Cards\caneca2.jpg" alt="" />
            <h2>Caneca Olá Madrinha!</h2>
            <h3>Caneca de porcelana 325ml</h3>
            <h4> R$ 29,99 </h4>
          </Card>
          <Card>
            <img src="assets\img\Selection\Cards\caneca3.jpg" alt="" />
            <h2>Caneca Olá Padrinho!</h2>
            <h3>Caneca de porcelana 325ml</h3>
            <h4> R$ 29,99 </h4>
          </Card>
          <Card>
            <img src="assets\img\Selection\Cards\caneca6.jpg" alt="" />
            <h2>Caneca Querida Filha</h2>
            <h3>Caneca de porcelana 325ml</h3>
            <h4> R$ 29,99 </h4>
          </Card>
          <Card>
            <img src="assets\img\Selection\Cards\caneca5.jpg" alt="" />
            <h2>Caneca Stitch Amigos</h2>
            <h3>Caneca de porcelana 325ml</h3>
            <h4> R$ 29,99 </h4>
          </Card>
          <Card>
            <img src="assets\img\Selection\Cards\caneca4.jpg" alt="" />
            <h2>Caneca Eu Te Amo </h2>
            <h3>Caneca de porcelana 325ml</h3>
            <h4> R$ 29,99 </h4>
          </Card>
        </ContainerCarrosel>
        <Button onClick={() => scrollRight(carrosselRef1)}>
          <img src="assets\img\Selection\Cards\avancar.png" alt="" />
        </Button>
      </ContainerMaster>

      <ContainerMaster>
        <Icon>
          <img src="assets\img\Selection\iconeCamiseta.png" alt="Icone" />
        </Icon>
        <Button onClick={() => scrollLeft(carrosselRef2)}>
          <img src="assets\img\Selection\Cards\voltar.png" alt="" />
        </Button>
        <ContainerCarrosel ref={carrosselRef2}>
          <Card>
            <img src="assets\img\Selection\Cards\camisa1.jpg" alt="" />
            <h2>Camiseta Toy Story </h2>
            <h3>100% algodão no DTF</h3>
            <h4> R$ 29,99 </h4>
          </Card>
          <Card>
            <img src="assets\img\Selection\Cards\camisa2.jpg" alt="" />
            <h2>A Fé Move Montanhas</h2>
            <h3>100% algodão no DTF</h3>
            <h4> R$ 29,99 </h4>
          </Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </ContainerCarrosel>
        <Button onClick={() => scrollRight(carrosselRef2)}>
          <img src="assets\img\Selection\Cards\avancar.png" alt="" />
        </Button>
      </ContainerMaster>

      <ContainerMaster>
        <Icon>
          <img src="assets\img\Selection\iconePresente.png" alt="Icone" />
        </Icon>
        <Button onClick={() => scrollLeft(carrosselRef3)}>
          <img src="assets\img\Selection\Cards\voltar.png" alt="" />
        </Button>
        <ContainerCarrosel ref={carrosselRef3}>
          <Card>
            <img src="assets\img\Selection\Cards\presente1.jpg" alt="" />
            <h2>Almofadas Minecraft!</h2>
            <h3>100% algodão no DTF</h3>
            <h4> R$ 29,99 </h4>
          </Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </ContainerCarrosel>
        <Button onClick={() => scrollRight(carrosselRef3)}>
          <img src="assets\img\Selection\Cards\avancar.png" alt="" />
        </Button>
      </ContainerMaster>
    </Container>
  );
};
