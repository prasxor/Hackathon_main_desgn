import "./MainHome.css";
import RealText from "../../../assets/RealText.png";
import FakeText from "../../../assets/FakeText.png";
import SearchInput from "../../Elements/Atoms/SearchInput/SearchInput";


const MainHome = () => {
  return (
    <div className="mainHomeContainer">
      <div className="mainHomeTopContent">
        <div className="mainHomeTopFirstTitle">
          <img src={RealText} alt="" />
          <h2>Or</h2>
          <img src={FakeText} alt="" />
        </div>
        <div className="mainHomeTopSecondTitle">
          <h1>Uncover the Facts!</h1>
        </div>
        <div className="mainHomeTopThirdTitle">
          <p>
            We help users determine the authenticity of news articles by
            providing fact-checking tools and resources.
          </p>
        </div>
      </div>
      <div className="mainHomeBottomInput">
        <SearchInput btnTitle={'Search'} searchPlaceholder={"Paste News or article"} />
      </div>
    </div>
  );
};

export default MainHome;
