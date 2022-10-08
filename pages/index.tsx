import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import SEO from '../components/SEO';
import { movieData } from '../types/movieData';

const Home = ({ movies }: any) => {
    console.log(movies)
    const router = useRouter();
    const onClick = (id: any) => {
        console.log(id)
        router.push({
            pathname: `/movies/${id}`,
            query: {
                id,
                title: "ss",
            }
        })
    }

    return (
        <div>
            <SEO>Home</SEO>
            <div className='movie-wrap'>
                <div className='movie-box'>
                    {movies.map((movie: movieData) => (
                        <Link href={`/movies/${movie.audiAcc}`} key={movie.rnum} style={{ cursor: 'pointer' }}>
                            <a onClick={() => onClick(movies.audiAcc)}>
                                <picture>
                                    <img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FWddvk%2FbtqAqhHHM3k%2F6hAu4NLbmUqKfR2SVJ4bM1%2Fimg.png' alt='영화이미지' />
                                </picture>
                                <br />
                                <span>{movie.movieNm.length >= 15 ? `${movie.movieNm.slice(0, 15)}...` : movie.movieNm}</span>
                            </a>
                        </Link>
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

                a {
                    text-decoration: none;
                    color:black;
                }

                img {
                    border-radius: 4px;
                    width: 200px;
                    height: 300px;
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