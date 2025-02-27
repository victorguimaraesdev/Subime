import Banner from "./components/Banner";
import Header from "./components/Header";
import GlobalStyle from "./styles/Global";
import { Cards } from "./components/Cards";
function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Banner />
      <Cards />
    </>
  );
}

export default App;
