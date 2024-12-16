import React from 'react'
import { useLocation } from "react-router-dom";
import "./CategoriesPage.css"
import SubCategoriesPageComponent from '../SubCategoriesPageComponent/SubCategoriesPageComponent'

const CategoriesPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const title = queryParams.get("title");
  return (
    <div className='CategoriesMainContainer'>
      <div className='CategoriesSubContainerTop'>
        <h2>{title}</h2>
      </div>
      <div className='CategoriesSubContainerBottom'>
        <SubCategoriesPageComponent/>
        <SubCategoriesPageComponent/>
        <SubCategoriesPageComponent/>
        <SubCategoriesPageComponent/>
        <SubCategoriesPageComponent/>
        <SubCategoriesPageComponent/>
        <SubCategoriesPageComponent/>
        <SubCategoriesPageComponent/>
      </div>
    </div>
  )
}

export default CategoriesPage
