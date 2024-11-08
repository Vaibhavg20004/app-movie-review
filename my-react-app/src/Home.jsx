import React from 'react';
import './Home.css';

const movies = [
    { id: 1, title: 'Movie 1', imgUrl: 'path_to_image1.jpg' },
    { id: 2, title: 'Movie 2', imgUrl: 'path_to_image2.jpg' },
    { id: 3, title: 'Movie 3', imgUrl: 'path_to_image3.jpg' },
    // Add more movies here
];

const categories = [
    { name: 'Trending', movies },
    { name: 'New Releases', movies },
    { name: 'Top Rated', movies },
    // Add more categories if needed
];

const HomePage = () => {
    return (
        <div className="homepage">
            <header className="homepage__navbar">
                <h1 className="navbar__logo">MovieMood</h1>
                <nav>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#reviews">Reviews</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>

            <div className="homepage__banner">
                <h2>Find the Mood of Your Movie</h2>
                <p>Explore reviews based on mood and sentiment analysis</p>
                <button>Explore Now</button>
            </div>

            {categories.map((category, index) => (
                <div key={index} className="category">
                    <h3>{category.name}</h3>
                    <div className="category__carousel">
                        {category.movies.map((movie) => (
                            <div key={movie.id} className="movie__card">
                                <img src={movie.imgUrl} alt={movie.title} />
                                <h4>{movie.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HomePage;
