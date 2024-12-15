import React from "react";
import "./SubCategoriesPageComponent.css"
import Image from "../../../../assets/FakeNewsImg3.jpg";

const SubCategoriesPageComponent = () => {
  return (
    <div className="SubCategoriesPageComponentMainContainer">
      <div className="SubCategoriesComponentSubContainerLeft">
        <h3>Israel and the Israel-Hamas war</h3>
        <p>
          View the latest news and videos, including politics and breaking news
          headlines on the Israel-Hamas war.
        </p>
        <p className="SubCategoriesComponentSubContainerLeftLastPara">www.cnn.com</p>
      </div>
      <div className="SubCategoriesComponentSubContainerRight">
        <img src={Image} alt="" />
      </div>
    </div>
  );
};

export default SubCategoriesPageComponent;
