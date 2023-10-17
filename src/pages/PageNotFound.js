import { Link } from "react-router-dom";
import  PageNotFoundImage from "../assets/images/pagenotfound.png";
import { Button } from "../components/Button";
import { useEffect } from "react";
export const PageNotFound = () => {
  useEffect(()=>{
    document.title=`Page not Found /cinemate`
  });
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
      <div className="flex flex-col items-center my-4">
         <p className="text-7xl text-center text-grey-700 font-bold my-10 dark:text-white ">404, OOPS!!!</p>
          <div className=" justify-center">
            <img className="max-w-lg" src={PageNotFoundImage} alt="404 page not found" />
          </div>
      </div>
     
      <div className="flex justify-center my-4 dark:text-white">
        <Link to="/">
       <Button>Back to Cinemate</Button>
        </Link>
      </div>
    </section>
    </main>
  )
}
