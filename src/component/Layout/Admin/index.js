import SideBar from "./SideBar/sideBar";
import BackToHome from "../FeatureButton/backToHome.js";

function HeaderOnly({ children }) {
  return (
    <div>
      <SideBar></SideBar>
      <div className="">
        {children}
        <BackToHome></BackToHome>
      </div>
    </div>
  );
}

export default HeaderOnly;
