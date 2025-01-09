import React from 'react'
import NavBarForAll from './NavBarForAll';
import './HomePagecss/about.css'
import Footer from './Footer';

function AboutPage() {
  return (
    <div>
    {/* Hero Section */}
    <section className="hero-section">
        <div className="hero-text">
            <h1>About Us</h1>
            <p>We are passionate about delivering the best plants for your home and garden.</p>
        </div>
    </section>

    {/* About Company Section */}
    <section className="about-section container">
        <h2>Who We Are</h2>
        <p>
            Rynco Orchids is a leading provider of exquisite and rare orchids. With a passion for 
            nature and a commitment to sustainability, we aim to bring the best of nature to your home. 
            Established in 2018, we have quickly grown into one of the most trusted names in plant care 
            and distribution.
        </p>
    </section>

    {/* Mission Section */}
    <section className="mission-section container">
        <h2>Our Mission</h2>
        <p>
            Our mission is to provide high-quality plants while promoting eco-friendly and 
            sustainable practices. We believe in nurturing a greener planet, one plant at a time.
        </p>
    </section>

    {/* Core Values Section */}
    <section className="values-section container">
        <h2>Our Core Values</h2>
        <ul>
            <li><strong>Quality:</strong> We provide only the best plants and flowers.</li>
            <li><strong>Sustainability:</strong> We are committed to eco-friendly practices.</li>
            <li><strong>Customer Satisfaction:</strong> Our customers are our top priority.</li>
        </ul>
    </section>


    <Footer/>
</div>
  )
}

export default AboutPage

