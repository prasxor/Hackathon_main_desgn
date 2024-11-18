import React, { useRef, useState } from "react";
import "./ThirdHome.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import FakeNewsCards from "../Atoms/Cards/FakeNewsCards/FakeNewsCards";
import KeyHighlights from "../Atoms/KeyHighlights/KeyHighlights";
import KeyHighlightBtn from "../Atoms/Button/KeyHighlightsBtn/KeyHighlightBtn";
import RefreshBtn from "../../../assets/RefreshBtn.svg";
import leftArrow from "../../../assets/left_Arrow_card.png";
import rightArrow from "../../../assets/Right_Arrow_card.png";
import FakeNewsData from "../../Data/FakeNewsData.json";

const ThirdHome = () => {
  const swiperRef = useRef(null);

  const [startIndex, setStartIndex] = useState(0);

  const displayedNews = FakeNewsData.FakeNews.slice(startIndex, startIndex + 10);


  const handleRefreshClick = () => {
    setStartIndex((prevIndex) => {
      const nextIndex = prevIndex + 10;
      return nextIndex >= FakeNewsData.FakeNews.length ? 0 : nextIndex;
    });
    if (swiperRef.current) swiperRef.current.swiper.slideTo(0);
  };

  const handlePrevClick = () => {
    if (swiperRef.current) swiperRef.current.swiper.slidePrev();
  };

  const handleNextClick = () => {
    if (swiperRef.current) swiperRef.current.swiper.slideNext();
  };

  return (
    <div className="ThirdHomeContainer">
      <div className="ThirdHomeContainerKeyHightlights">
        <KeyHighlights text={"Trending"} />
      </div>
      <div className="ThirdHomeContainerTitle">
        <KeyHighlightBtn
          image={RefreshBtn}
          text="Refresh"
          onClick={handleRefreshClick}
        />
        <p>Fake News</p>
        <KeyHighlightBtn text={"View All"} />
      </div>
      <div className="FakeNewsCardsMainContainer">
        {/* Left Arrow */}
        <div
          className="FakeNewsCardsMainContainerLeft"
          onClick={handlePrevClick}
        >
          <img src={leftArrow} alt="Left Arrow" />
        </div>

        {/* Swiper Container */}
        <div id="FakeNewsCardsMainContainerSub">
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            ref={swiperRef}
          >
            {displayedNews.map((news, index) => (
              <SwiperSlide key={index}>
                <FakeNewsCards
                  Title={news.title}
                  Image={news.image}
                  Para={news.SUMMARY}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right Arrow */}
        <div
          className="FakeNewsCardsMainContainerRight"
          onClick={handleNextClick}
        >
          <img src={rightArrow} alt="Right Arrow" />
        </div>
      </div>
    </div>
  );
};

export default ThirdHome;



// import React, { useRef, useState } from "react";
// import "./ThirdHome.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import FakeNewsCards from "../Atoms/Cards/FakeNewsCards/FakeNewsCards";
// import FakeNewsData from "../../Data/TrendingNewsData.json";
// import KeyHighlights from "../Atoms/KeyHighlights/KeyHighlights";
// import KeyHighlightBtn from "../Atoms/Button/KeyHighlightsBtn/KeyHighlightBtn";
// import RefreshBtn from "../../../assets/RefreshBtn.svg";
// import Img1 from "../../../assets/FakeNewsImg1.jpg";
// import Img2 from "../../../assets/FakeNewsImg2.avif";
// import Img3 from "../../../assets/FakeNewsImg3.jpg";
// import Img4 from "../../../assets/FakeNewsImg4.webp";
// import Img5 from "../../../assets/FakeNewsImg5.webp";
// import Img6 from "../../../assets/FakeNewsImg6.jpg";
// import leftArrow from "../../../assets/left_Arrow_card.png";
// import rightArrow from "../../../assets/Right_Arrow_card.png";

// const ThirdHome = () => {
//   const swiperRef = useRef(null);

//   // Array of images to pass dynamically
//   const images = [Img1, Img2, Img3, Img4, Img5, Img6];

//   const handlePrevClick = () => {
//     swiperRef.current.swiper.slidePrev();
//   };

//   const handleNextClick = () => {
//     swiperRef.current.swiper.slideNext();
//   };

//   return (
//     <div className="ThirdHomeContainer">
//       <div className="ThirdHomeContainerKeyHightlights">
//         <KeyHighlights text={"Trending"} />
//       </div>
//       <div className="ThirdHomeContainerTitle">
//         <KeyHighlightBtn
//         image={RefreshBtn}
//         text="Refresh"
//       />
//         <p>Fake News</p>
//         <KeyHighlightBtn text={"View All"} />
//       </div>
//       <div className="FakeNewsCardsMainContainer">
//         {/* Left Arrow */}
//         <div
//           className="FakeNewsCardsMainContainerLeft"
//           onClick={handlePrevClick}
//         >
//           <img src={leftArrow} alt="Left Arrow" />
//         </div>

//         {/* Swiper Container */}
//         <div id="FakeNewsCardsMainContainerSub">
//           <Swiper
//             spaceBetween={20}
//             slidesPerView={3}
//             onSlideChange={() => console.log("slide change")}
//             onSwiper={(swiper) => console.log(swiper)}
//             ref={swiperRef}
//           >
//             {FakeNewsData.News.FakeNews.map((news, index) => (
//               <SwiperSlide key={index}>
//                 <FakeNewsCards
//                   Title={news.TITLE}
//                   Image={images[index % images.length]}
//                   Para={
//                     "We send you timely email notifications about trending fake news stories relevant to your interests, helping you stay informed and vigilant"
//                   }
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         {/* Right Arrow */}
//         <div
//           className="FakeNewsCardsMainContainerRight"
//           onClick={handleNextClick}
//         >
//           <img src={rightArrow} alt="Right Arrow" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ThirdHome;
