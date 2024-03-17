import Header from "./Header/header.js";
import Footer from "./Footer/footer.js";
import BackToHome from "../FeatureButton/backToHome.js";

function HeaderOnly({ children }) {
  return (
    <div>
      <Header></Header>
      <div className="">
        {children}
        <BackToHome></BackToHome>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default HeaderOnly;
