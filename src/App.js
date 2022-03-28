import Banner from "./components/banner/Banner";
import Content from "./components/content/Content";
import Copyright from "./components/content/copyright/Copyright";
import Footer from "./components/content/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Content></Content>
      <Footer></Footer>
      <Copyright></Copyright>
    </div>
  );
}

export default App;
