import React from "react";
import "./ThirdHome.css";
import Img from "../../../assets/ThirdSectionTitle.png";
import FakeNewsCards from "../Atoms/Cards/FakeNewsCards/FakeNewsCards";
import FakeData from "../../Data/TrendingNewsData.json";
import NotAvailable from '../../../assets/noImageAvailable.png';
import Img1 from '../../../assets/FakeNewsImg1.jpg';
import Img2 from '../../../assets/FakeNewsImg2.avif';
import Img3 from '../../../assets/FakeNewsImg3.jpg';
import Img4 from '../../../assets/FakeNewsImg4.webp';
import Img5 from '../../../assets/FakeNewsImg5.webp';
import Img6 from '../../../assets/FakeNewsImg6.jpg';

const ThirdHome = () => {
  return (
    <div className="ThirdHomeContainer">
      <div className="ThirdHomeContainerTitle">
        <img src={Img} alt="" />
        <p>Trending Fake News</p>
      </div>
      <div id="FakeNewsCardsMainContainer">
        <FakeNewsCards
          Title={FakeData.News.FakeNews[0].TITLE}
          Image={Img1}
        />
        <FakeNewsCards
          Title={FakeData.News.FakeNews[1].TITLE}
          Image={Img2}
        />
        <FakeNewsCards
          Title={FakeData.News.FakeNews[6].TITLE}
          Image={Img3}
        />
        <FakeNewsCards
          Title={FakeData.News.FakeNews[3].TITLE}
          Image={Img4}
        />
        <FakeNewsCards
          Title={FakeData.News.FakeNews[4].TITLE}
          Image={Img5}
        />
        <FakeNewsCards
          Title={FakeData.News.FakeNews[5].TITLE}
          Image={Img6}
        />
      </div>
    </div>
  );
};

export default ThirdHome;
