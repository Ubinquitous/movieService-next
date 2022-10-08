import React, { useEffect, useState } from 'react';
import SEO from '../components/SEO';
import { movieData } from '../types/movieData';

const Index = () => {
    const [movies, setMovies] = useState([]);

    const getMovies = () => {
        (async () => {
            const data = await (await fetch(`/api/movies`)).json();
            setMovies(data.boxOfficeResult.weeklyBoxOfficeList)
            console.log(data.boxOfficeResult.weeklyBoxOfficeList);
        })();
    };

    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div>
            <SEO>Home</SEO>
            {!movies && <h4>Loading</h4>}
            <div className='movie-wrap'>
                <div className='movie-box'>
                    {movies.map((movie: movieData) => (
                        <div key={movie.rnum}>
                            <picture>
                                <img src='https://www.kgnews.co.kr/data/photos/20220835/art_1661933622713_f74df6.jpg' alt='영화이미지' />
                            </picture>
                            <br />
                            <span>{movie.movieNm.length >= 15 ? `${movie.movieNm.slice(0, 15)}...` : movie.movieNm}</span>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                .movie-wrap {
                    display: grid;
                    place-items:center;
                }

                .movie-box {
                    display: grid;
                    grid-template-columns: repeat(5, minmax(100px, 1fr));
                    grid-gap: 20px;
                    width: 80%;
                    padding-top: 30px;
                    place-items: center;
                }

                img {
                    border-radius: 4px;
                    width: 200px;
                    height: auto;
                }
            `}</style>
        </div>
    );
};

export default Index;