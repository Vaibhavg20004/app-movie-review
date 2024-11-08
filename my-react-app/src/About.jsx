import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
    return (
        <div className="aboutpage">
            <header className="aboutpage__navbar">
                <h1 className="navbar__logo">MovieMood</h1>
                <nav>
                    <a href="/">Home</a>
                    <a href="#about">About</a>
                    <a href="#reviews">Reviews</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>

            <div className="aboutpage__banner">
                <h2>About MovieMood</h2>
                <p>Discover the mood and sentiment of every movie you watch!</p>
            </div>

            <div className="aboutpage__content">
                <h3>Our Mission</h3>
                <p>
                    MovieMood is designed to enhance your movie-watching experience by providing
                    reviews with mood-based filtering and sentiment analysis. Whether you're looking for a
                    light-hearted comedy or a serious drama, our platform helps you find movies that suit
                    your current mood.
                </p>

                <h3>Features</h3>
                <ul>
                    <li>AI-powered sentiment analysis on movie reviews</li>
                    <li>Filter movies based on mood categories</li>
                    <li>Spoiler-free reviews and audience ratings</li>
                    <li>Community-driven feedback and recommendations</li>
                </ul>

                <h3>Our Vision</h3>
                <p>
                    We aim to make movie discovery more intuitive and engaging by focusing on the emotional
                    impact of each film. MovieMood combines technology with creativity to bring you a unique
                    approach to choosing your next movie.
                </p>
            </div>
        </div>
    );
};

export default AboutPage;
