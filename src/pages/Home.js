import React from 'react';
import './Home.css';
import galleryImage1 from './images/galleryImage1.png';
import galleryImage2 from './images/galleryImage2.jpg';
import MapComponent from './MapComponent';


const Home = () => {
  return (
    <div className="home-page">
      <header className="header">
        <div className="header-content">
          <h1>Welcome to INSET University</h1>
          <p>Your gateway to a bright future with quality education.</p>
        </div>
      </header>

<div class="logo-section">
    <h1 class="animated-logo">INSET University</h1>
</div>


      <section className="mission-vision">
        <div className="container">
          <div className="vision">
            <h2>Our Vision</h2>
            <p>
              At INSET University, our vision is to be a leading institution that provides high-quality education
              and fosters a culture of innovation and excellence. We strive to empower our students to become
              leaders and innovators in their fields.
            </p>
          </div>
          <div className="mission">
            <h2>Our Mission</h2>
            <p>
              Our mission is to deliver a comprehensive and cutting-edge education that meets the needs of our
              diverse student body. We are committed to fostering an inclusive learning environment that promotes
              academic success and personal growth.
            </p>
          </div>
        </div>
      </section>

      <section className="about-university">
        <h2>About Us</h2>
        <div className="info-container">
          <div className="info-item">
          <img src={galleryImage2} alt="building Image 1" />
            <p>
              INSET University offers state-of-the-art facilities and resources to enhance the learning experience
              for our students. Our campus is equipped with modern classrooms, libraries, and research centers.
            </p>
          </div>
          <div className="info-item">
          <img src={galleryImage1} alt="Gallery Image 1" />
            <p>
              Our vibrant campus life includes a range of extracurricular activities, clubs, and events that
              enrich the student experience. We believe in a balanced approach to education that includes both
              academic and personal development.
            </p>
          </div>
        </div>
      </section>

      <section className="additional-info">
        <h2>What's New</h2>
        <div className="info-grid">
          <div className="info-box">
            <h3>New Programs</h3>
            <p>Explore our new programs designed to meet the evolving needs of the industry.</p>
          </div>
          <div className="info-box">
            <h3>Events</h3>
            <p>Stay updated with the latest events and activities happening on campus.</p>
          </div>
          <div className="info-box">
            <h3>Admissions</h3>
            <p>Learn more about the admission process and how to apply to INSET University.</p>
          </div>
          <div className="info-box">
            <h3>Admissions</h3>
            <p>Learn more about the admission process and how to apply to INSET University.</p>
          </div>
          <div className="info-box">
            <h3>Admissions</h3>
            <p>Learn more about the admission process and how to apply to INSET University.</p>
          </div>
        </div>
      </section>
          
            {/* قسم معرض الصور */}
            <section className="gallery-section">
                <h2>معرض الصور</h2>
                <div className="gallery-grid">
                    <div className="gallery-item">
                    <img src={galleryImage1} alt="Gallery Image 1" />

                        <div className="overlay">
                            <div className="text">Image 1 Description</div>
                        </div>
                    </div>
                    <div className="gallery-item">
                    <img src={galleryImage1} alt="Gallery Image 1" />

                        <div className="overlay">
                            <div className="text">Image 2 Description</div>
                        </div>
                    </div>
                    <div className="gallery-item">
                    <img src={galleryImage1} alt="Gallery Image 1" />

                        <div className="overlay">
                            <div className="text">Image 3 Description</div>
                        </div>
                    </div>
                    <div className="gallery-item">
                    <img src={galleryImage1} alt="Gallery Image 1" />

                        <div className="overlay">
                            <div className="text">Image 4 Description</div>
                        </div>
                    </div>
                </div>
            </section>



             {/* قسم موقعنا */}
    <div>
      <h1>موقعنا</h1>
      <MapComponent />
    </div>

    </div>
  );
};

export default Home;
