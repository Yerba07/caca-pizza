import styled from "styled-components";
import Header from "./features/header/Header";
import Hero from "./features/hero/Hero";
import Products from "./features/products/Products";

function App() {
  return (
    <Main>
      <Header />
      <Hero />
      <Products />
    </Main>
  );
}

const Main = styled.main`
  width: 1050px;
  margin: 0 auto;
`;

export default App;
