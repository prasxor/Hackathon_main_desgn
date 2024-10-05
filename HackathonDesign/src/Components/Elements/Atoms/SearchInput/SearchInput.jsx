import './SearchInput.css'

const SearchInput = () => {
  return (
    <div className='SearchInputContainer'>
      <form action="#" className='SearchInputContainerForm'>
        <input type="text" className='SearchInputContainerFormInput' placeholder='Paste News or article'/>
        <button className='SearchInputContainerFormBtn' type='submit'>Search</button>
      </form>
    </div>
  )
}

export default SearchInput
