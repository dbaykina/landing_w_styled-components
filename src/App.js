import logo from "./logo.svg";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { Container } from "./Components/Styles/Container.styled";
import Header from "./Components/Header";
import GlobalStyles from "./Components/Styles/Global";
import content from "./content";
import Card from "./Components/Card";
import Footer from "./Components/Footer";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default App;
