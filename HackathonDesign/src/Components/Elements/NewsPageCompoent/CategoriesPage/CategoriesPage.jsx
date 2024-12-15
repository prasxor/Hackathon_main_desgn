import React from 'react'
import "./CategoriesPage.css"
import SubCategoriesPageComponent from '../SubCategoriesPageComponent/SubCategoriesPageComponent'

const CategoriesPage = ({titleContent}) => {
  return (
    <div className='CategoriesMainContainer'>
      <div className='CategoriesSubContainerTop'>
        <h2>{titleContent}</h2>
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
