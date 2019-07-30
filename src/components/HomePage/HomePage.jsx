import React from 'react';
import './homepage.styles.scss';

const HomePage = () => {
    return (
        <div className="homepage-container">
            <div className="category-list">
                <div className="item-list">
                    <div className="content">
                        <h1 className="title">CLASSIC</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
                <div className="item-list">
                    <div className="content">
                        <h1 className="title">SPORTS</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
                <div className="item-list">
                    <div className="content">
                        <h1 className="title">DAY-DATE</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
                <div className="item-list">
                    <div className="content">
                        <h1 className="title">MENS</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
                <div className="item-list">
                    <div className="content">
                        <h1 className="title">WOMEN</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;