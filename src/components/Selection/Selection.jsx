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
            <img src="assets\img\Selection\Mockups\mk1.jpg" alt="" />
            <h2>Enfermeira Querida</h2>
            <h3>Caneca de porcelana 325ml</h3>
            <h4> R$ 29,99 </h4>
          </Card>
          <Card>
            <img src="assets\img\Selection\Mockups\mk2.jpg" alt="" />
            <h2>Naquele Que Me Fortalece</h2>
            <h3>Caneca de porcelana 325ml</h3>
            <h4> R$ 29,99 </h4>
          </Card>
          <Card>
            <img src="assets\img\Selection\Mockups\mk3.jpg" alt="" />
            <h2>Levanta e Agacha</h2>
            <h3>Caneca de porcelana 325ml</h3>
            <h4> R$ 29,99 </h4>
          </Card>
          <Card>
            <img src="assets\img\Selection\Mockups\mk4.jpg" alt="" />
            <h2>Os Divertidamente</h2>
            <h3>Caneca de porcelana 325ml</h3>
            <h4> R$ 29,99 </h4>
          </Card>
          <Card>
            <img src="assets\img\Selection\Mockups\mk5.jpg" alt="" />
            <h2>Naruto Classico Mangá </h2>
            <h3>Caneca de porcelana 325ml</h3>
            <h4> R$ 29,99 </h4>
          </Card>
          <Card>
            <img src="assets\img\Selection\Mockups\mk7.jpg" alt="" />
            <h2>Deus Te Quer Sorrindo</h2>
            <h3>Caneca de porcelana 325ml</h3>
            <h4> R$ 29,99 </h4>
          </Card>
          <Card>
            <img src="assets\img\Selection\Mockups\mk8.jpg" alt="" />
            <h2>Mulheres Poderosas </h2>
            <h3>Caneca de porcelana 325ml</h3>
            <h4> R$ 29,99 </h4>
          </Card>
          <Card>
            <img src="assets\img\Selection\Mockups\mk9.jpg" alt="" />
            <h2>Seja Linda Como Você </h2>
            <h3>Caneca de porcelana 325ml</h3>
            <h4> R$ 29,99 </h4>
          </Card>
          <Card>
            <img src="assets\img\Selection\Mockups\mk6.jpg" alt="" />
            <h2>Naruto Shippuden </h2>
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
            <img src="assets\img\Selection\Camisetas\Mockups\mk1.jpg" alt="" />
            <h2>Jesus Cristo </h2>
            <h3>100% poliéster [sublimação]</h3>
            <h4> R$ 40,00 </h4>
          </Card>
          <Card>
            <img src="assets\img\Selection\Camisetas\Mockups\mk2.jpg" alt="" />
            <h2>Leão de Judá </h2>
            <h3>100% poliéster [sublimação]</h3>
            <h4> R$ 40,00 </h4>
          </Card>
          <Card>
            <img src="assets\img\Selection\Camisetas\Mockups\mk3.jpg" alt="" />
            <h2>Rainha e Princesa </h2>
            <h3>100% poliéster [sublimação]</h3>
            <h4> R$ 40,00 </h4>
          </Card>
          <Card>
            <img src="assets\img\Selection\Camisetas\Mockups\mk5.jpg" alt="" />
            <h2>Doritos Radical</h2>
            <h3>100% poliéster [sublimação]</h3>
            <h4> R$ 40,00 </h4>
          </Card>
          <Card>
            <img src="assets\img\Selection\Camisetas\Mockups\mk6.jpg" alt="" />
            <h2>Leão De Judá Walk</h2>
            <h3>100% poliéster [sublimação]</h3>
            <h4> R$ 40,00 </h4>
          </Card>
          <Card>
            <img src="assets\img\Selection\Camisetas\Mockups\mk4.jpg" alt="" />
            <h2>Noiva e Noivo</h2>
            <h3>100% poliéster [sublimação]</h3>
            <h4> R$ 35,00 </h4>
          </Card>
          <Card>
            <img src="assets\img\Selection\Camisetas\Mockups\mk7.jpg" alt="" />
            <h2>Jesus Salva</h2>
            <h3>100% poliéster [sublimação]</h3>
            <h4> R$ 35,00 </h4>
          </Card>
          <Card>
            <img src="assets\img\Selection\Camisetas\Mockups\mk8.jpg" alt="" />
            <h2>Sonic & Tails </h2>
            <h3>100% poliéster [sublimação]</h3>
            <h4> R$ 35,00 </h4>
          </Card>
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
            <img src="assets\img\Card\presenteCard3.JPG" alt="" />
            <h2>Almofadas Minecraft!</h2>
            <h3>100% algodão no DTF</h3>
            <h4> R$ 29,99 </h4>
          </Card>
          <Card>
            <img src="assets\img\Card\presenteCard3.JPG" alt="" />
            <h2>Almofadas Minecraft!</h2>
            <h3>100% algodão no DTF</h3>
            <h4> R$ 29,99 </h4>
          </Card>
          <Card>
            <img src="assets\img\Card\presenteCard3.JPG" alt="" />
            <h2>Almofadas Minecraft!</h2>
            <h3>100% algodão no DTF</h3>
            <h4> R$ 29,99 </h4>
          </Card>
          <Card>
            <img src="assets\img\Card\presenteCard3.JPG" alt="" />
            <h2>Almofadas Minecraft!</h2>
            <h3>100% algodão no DTF</h3>
            <h4> R$ 29,99 </h4>
          </Card>
          <Card>
            <img src="assets\img\Card\presenteCard3.JPG" alt="" />
            <h2>Almofadas Minecraft!</h2>
            <h3>100% algodão no DTF</h3>
            <h4> R$ 29,99 </h4>
          </Card>
          <Card>
            <img src="assets\img\Card\presenteCard3.JPG" alt="" />
            <h2>Almofadas Minecraft!</h2>
            <h3>100% algodão no DTF</h3>
            <h4> R$ 29,99 </h4>
          </Card>
        </ContainerCarrosel>
        <Button onClick={() => scrollRight(carrosselRef3)}>
          <img src="assets\img\Selection\Cards\avancar.png" alt="" />
        </Button>
      </ContainerMaster>
    </Container>
  );
};
