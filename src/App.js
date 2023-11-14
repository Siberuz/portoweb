import "./App.css";
import CustomBanner from "./Components/Banner";

import CustomNavbar2 from "./Components/Navbar2";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomSkills from "./Components/Skills";
import CustomProject from "./Components/Project";
import CustomFooter from "./Components/Footer";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Fairuz.</title>
        <link rel="canonical" href="http://siberuz.github.io/portoweb" />
      </Helmet>
      <CustomNavbar2 />
      <CustomBanner />
      <CustomSkills />
      <CustomProject />
      <CustomFooter />
    </>
  );
}

export default App;
