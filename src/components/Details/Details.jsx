import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export function Details(){

    const history = useHistory()
    const movies = useSelector(store => store.movies);


  const handleBack = () => {
   history.push("/")
  }



  return (
    <main>
    <button onClick={handleBack}>Back to Movies</button>

    
        
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}/>
                            <p>{movie.description}</p>
                        </div>
                    );
                })}
            </section>
        </main>

  )

}