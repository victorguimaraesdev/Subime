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
          <img
            src="../../../assets/img/Selection/iconeCaneca.png"
            alt="Icone"
          />
        </Icon>
        <Button onClick={() => scrollLeft(carrosselRef1)}>
          <img src="assets\img\Selection\Cards\voltar.png" alt="" />
        </Button>
        <ContainerCarrosel ref={carrosselRef1}>
          <Card>
            <img src="assets\img\Selection\Cards\caneca2.jpg" alt="" />
            <h2>Caneca Olá Madrinha!</h2>
            <h3>- R$ 29,99 -</h3>
          </Card>
          <Card>
            <img src="assets\img\Selection\Cards\caneca3.jpg" alt="" />
            <h2>Caneca Olá Padrinho!</h2>
            <h3>- R$ 29,99 -</h3>
          </Card>
          <Card>
            <img src="assets\img\Selection\Cards\caneca6.jpg" alt="" />
            <h2>Caneca Querida Filha</h2>
            <h3>- R$ 29,99 -</h3>
          </Card>
          <Card>
            <img src="assets\img\Selection\Cards\caneca5.jpg" alt="" />
            <h2>Caneca Stitch Calmo</h2>
            <h3>- R$ 29,99 -</h3>
          </Card>
          <Card>
            <img src="assets\img\Selection\Cards\caneca4.jpg" alt="" />
            <h2>Xicara Mamãe da Noiva</h2>
            <h3>- R$ 29,99 -</h3>
          </Card>
        </ContainerCarrosel>
        <Button onClick={() => scrollRight(carrosselRef1)}>
          <img src="assets\img\Selection\Cards\avancar.png" alt="" />
        </Button>
      </ContainerMaster>

      {/* Segunda linha de produtos */}
      <ContainerMaster>
        <Icon>
          <img
            src="../../../assets/img/Selection/iconeCamiseta.png"
            alt="Icone"
          />
        </Icon>
        <Button onClick={() => scrollLeft(carrosselRef2)}>
          <img src="assets\img\Selection\Cards\voltar.png" alt="" />
        </Button>
        <ContainerCarrosel ref={carrosselRef2}>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </ContainerCarrosel>
        <Button onClick={() => scrollRight(carrosselRef2)}>
          <img src="assets\img\Selection\Cards\avancar.png" alt="" />
        </Button>
      </ContainerMaster>

      {/* Terceira linha de produtos */}
      <ContainerMaster>
        <Icon>
          <img
            src="../../../assets/img/Selection/iconePresente.png"
            alt="Icone"
          />
        </Icon>
        <Button onClick={() => scrollLeft(carrosselRef3)}>
          <img src="assets\img\Selection\Cards\voltar.png" alt="" />
        </Button>
        <ContainerCarrosel ref={carrosselRef3}>
          <Card></Card>
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
