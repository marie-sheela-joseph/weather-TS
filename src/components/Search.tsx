import './Search.css'
interface Props{
    searchText:string,
     handleSearchTextChange:(e:React.ChangeEvent<HTMLInputElement>)=>void, 
     handleSearchSubmit:(e:React.FormEvent<HTMLFormElement>)=>void
}

const Search:React.FC<Props>=({ searchText, handleSearchTextChange, handleSearchSubmit})=>{
return (
    <form onSubmit={(e) => handleSearchSubmit(e)}>
            <div>
                <label
                    htmlFor="searchText">Enter city</label>
                <input
                    value={searchText}
                    onChange={(e) => handleSearchTextChange(e)}
                    id="searchText" />
            </div>
            <button>SUBMIT</button>
        </form>
);
}
export default Search;