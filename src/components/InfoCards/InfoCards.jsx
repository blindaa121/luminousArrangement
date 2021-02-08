import React from 'react';
import './InfoCards.css'

const InfoCards = () => {
    return (
        <div className="info-cards-container">
            <div className="info-card-content">
                <h1>1</h1>
                <span className="info-card-title">Your Investment Portfolio made easy.</span>
                <p className="info-card-desc">At Luminous Arrangement, we understand that balancing
                a portfolio can be daunting at times. Our engineers work 24/7 around the clock, to provide
                our customers with the latest cutting-edge technology with a simple goal in mind.
                Make investments simple and effective.</p>
            </div>
            <div className="info-card-content">
                <h1>2</h1>
                <span className="info-card-title">Yeah it's cool to take risks, but be smart.</span>
                <p className="info-card-desc">Our talented team of Lumineers carefully designed and composed
                the perfect combination of risk factors and investment categories in order to fit the needs of any investor.
                Choose any of our risk levels, without feeling risky.</p>
            </div>
            <div className="info-card-content">
                <h1>3</h1>
                <span className="info-card-title">Wait so you really took that risk?</span>
                <p className="info-card-desc">When we say we've got you covered, we mean it. So you've selected your risk level, 
                but maybe you placed your money where it shouldn't be. Fret not, our state-of-the-art algorithm will properly
                allocate the money for you. You should follow it. </p>
            </div>
            <div className="info-card-content">
                <h1>4</h1>
                <span className="info-card-title">Congratulations! Sit back & enjoy the ride.</span>
                <p className="info-card-desc">Give yourself a pat on the back, you've worked hard for your money. Now it's time
                for your money to work for you. </p>
            </div>
        </div>
    )
}

export default InfoCards