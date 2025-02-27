import GlobalStyle from "./styles/Global";
import Banner from "./components/Banner";
import Header from "./components/Header";
import { Selection } from "./components/Selection/Selection";
import { Cards } from "./components/Cards";
function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Banner />
      <Cards />
      <Selection />
    </>
  );
}

export default App;
