import {
  Container,
  ContainerCarrosel,
  ContainerMaster,
  Icon,
} from "./Selection.style";

export const Selection = () => {
  return (
    <Container>
      <ContainerMaster>
        <Icon>
          <img
            src="../../../assets/img/Selection/iconeCaneca.png"
            alt="Icone"
          />
        </Icon>
        <ContainerCarrosel></ContainerCarrosel>
      </ContainerMaster>
      <ContainerMaster>
        <Icon>
          <img
            src="../../../assets/img/Selection/iconeCamiseta.png"
            alt="Icone"
          />
        </Icon>
        <ContainerCarrosel></ContainerCarrosel>
      </ContainerMaster>
      <ContainerMaster>
        <Icon>
          <img
            src="../../../assets/img/Selection/iconePresente.png"
            alt="Icone"
          />
        </Icon>
        <ContainerCarrosel></ContainerCarrosel>
      </ContainerMaster>
    </Container>
  );
};
