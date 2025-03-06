import GlobalStyle from "./styles/Global";
import Banner from "./components/Banner";
import Header from "./components/Header";
import { Selection } from "./components/Selection/Selection";
import { Cards } from "./components/Cards";
import { Redes } from "./components/Redes/Redes";
function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Banner />
      <Cards />
      <Selection />
      <Redes />
    </>
  );
}

export default App;
