import "../components/SearchResults.css";
const SearchResults = ({results}) => {
    

  return (
    <>
    <div className="image">
      {results.map((result, id) => {
              return <div key={id}><img src={result.image} alt="hello" />
              </div>;
              
          })}
        </div><div className='results'>
          {results.map((result, id) => {
              return <div className="dev" key={id}>{result.title}</div>;
          })}
      </div>
      
        </>
  )
}

export default SearchResults
