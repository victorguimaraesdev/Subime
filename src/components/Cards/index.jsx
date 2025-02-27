import { Container, Card } from "./Card.style";

export const Cards = () => {
  return (
    <Container>
      <Card>
        <img src="../../../assets/img/Card/canecaCard2.jpg" alt="Server img" />
        <h1> Canecas personalizadas</h1>
        <p>
          Nada como começar o dia com um café do seu jeito! Nossas canecas
          personalizadas são perfeitas para expressar sua criatividade, divulgar
          sua marca ou presentear alguém especial! Com designs exclusivos, você
          transforma até o momento mais simples em algo único e cheio de
          personalidade.
        </p>
      </Card>
      <Card>
        <img
          src="../../../assets/img/Card/camisetasCard.jpg"
          alt="Server img"
        />
        <h1> Camisetas personalizadas</h1>
        <p>
          Transforme seu visual com camisetas exclusivas feitas sob medida para
          você! Seja para destacar sua marca, criar presentes incríveis ou
          simplesmente expressar sua personalidade, nossas camisetas
          personalizadas são a escolha perfeita.
        </p>
      </Card>
      <Card>
        <img
          src="../../../assets/img/Card/presenteCard3.jpg"
          alt="Server img"
        />
        <h1> Presentes personalizados</h1>
        <p>
          Surpreenda quem você ama com um presente único e cheio de significado!
          Nossos presentes personalizados são perfeitos para qualquer ocasião,
          trazendo um toque especial e personalizado que torna cada momento
          ainda mais memorável.
        </p>
      </Card>
    </Container>
  );
};
