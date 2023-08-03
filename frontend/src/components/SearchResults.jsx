import "../components/SearchResults.css";
import {useNavigate} from "react-router-dom";
const SearchResults = ({results}) => {
    const navigate =useNavigate();
    

  return (
    <>
    <div className="image">
      {results.map((result, id) => {
              return <div key={id}><img src={result.image} alt="hello" />
              </div>;
              
          })}
        </div><div className='results'>
          {results.map((result, id) => {
              return <div className="dev" onClick={()=>navigate("/Product")} key={id}>{result.title}</div>;
          })}
      </div>
      
        </>
  )
}

export default SearchResults
