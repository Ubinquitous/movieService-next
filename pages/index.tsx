import React, { useEffect, useState } from 'react';
import SEO from '../components/SEO';
import { movieData } from '../types/movieData';

const Home = ({ movies }: any) => {

    console.log(movies)
    return (
        <div>
            <SEO>Home</SEO>
            <div className='movie-wrap'>
                <div className='movie-box'>
                    {movies.map((movie: movieData) => (
                        <div key={movie.rnum}>
                            <picture>
                                <img src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif' alt='영화이미지' />
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

export async function getServerSideProps() {
    const data = await (await fetch(`http://localhost:3000/api/movies`)).json();
    const movies = data.boxOfficeResult.weeklyBoxOfficeList
    return {
        props: {
            movies,
        }
    }
}

export default Home;