import React from 'react';
import CardForMovies from './CardForMovies';

const movieProps = [
    {title:"Movies in Data Base", colorBorde:"primary", cantidad:21, icon:"fa-film"},
    {title:"Total awards", colorBorde:"success", cantidad:79, icon:"fa-award"},
    {title:"Actors quantity", colorBorde:"warning", cantidad:49, icon:"fa-user"},
];

function ContentRowMovies() {
    return (
        <div className="row">

            {movieProps.map((movie, index) => (
                //Aquí deberás utilizar el componente CardForMovies y pasarle las props necesarias
                //No olvides remplazar el div tag con tu código
                <div></div>
            ))}

        </div>
    );
}

export default ContentRowMovies;