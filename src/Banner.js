import React, { useState, useEffect } from 'react'
import axios from './axios'
import requests from './request'
import './Banner.css'

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ])
        }
        fetchData();
    }, [])

    function trucate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str
    }

    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`
            }}>

            <div className="banner__content">
                <h1 className="banner__title" >
                    {movie?.title || movie?.name || movie?.original_name} 
                </h1>

                <div className="banner-buttons">
                    <button className="banner__button">
                        Play
                    </button>
                    <button className="banner__button">
                        My List
                    </button>
                </div>

                <h2 className="banner__desc">
                    {trucate(movie?.overview, 200)}
                </h2>

                <p className="vote">
                    {movie?.vote_average}
                </p>

            </div>
            <div className="banner--fadeBottom"></div>
        </header>
    )
}

export default Banner
