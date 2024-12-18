import React from 'react'
import BottomBtn from '../Atoms/Button/BottomBtn/BottomBtn'

const NewsSearch = ({searchPlaceholder, btnTitle}) => {
  return (
    <div className="SearchInputContainerBtn">
      <form
        action="#"
        className="SearchInputContainerFormBtn"
      >
        <input
          type="email"
          className="SearchInputContainerFormInputBtn"
          placeholder={searchPlaceholder}
        />
        <BottomBtn title={btnTitle} />{" "}
      </form>
    </div>
  )
}

export default NewsSearch
