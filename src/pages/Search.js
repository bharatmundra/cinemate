import { Card } from "../components/Card"

import { useFetch } from "../hooks/useFetch";
import { UseTitle } from "../hooks/UseTitle";

import { useSearchParams } from "react-router-dom";



export const Search = ({apiPath,title}) => {
  const [searchParams]=useSearchParams();
  const queryTerm=searchParams.get("q");
  const {data:movies}=useFetch(apiPath,queryTerm);
  UseTitle(`search result for ${queryTerm}`);
 
  return (

    <main>
      <section className="py-7">
        <p className="text-3xl text-grey-700 dark:text-white">{movies.length === 0 ? `No result found for ${queryTerm}`:`found for ${queryTerm}`}</p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          
          {movies.map((movie)=>(
            
            <Card key={movie.id} movie={movie}/>

          ))
          }
          </div>
      </section>
    </main>
  )
}
