import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Child from "../../assets/image1.png";
import People from "../../assets/image2.png";
import "./home.css";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="image">
          <img src={Child} alt="" />
        </div>
        <div className="home">
        <div className="support">
          <div className="left">
            <h1> OUR SUPPORT</h1>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <p>OUR INITIATIVE FOR THE</p>
            <p className="one"> &nbsp;&nbsp;&nbsp;RWANDAN YOUTH</p>
          </div>
          <div className="image2">
            <img src={People} alt="" />
          </div>
        </div>
        <div className="counselling">
            <div>
                <h1> COUNSELLING</h1>
                <p>Choose Best Carrer For You. Understand The Map Of Your Life, Reduce Mental Stress Know Professional Development Gap</p>
            </div>
            <div>
                <h1> YOUTH EMPOWERMENT</h1>
                <p>Developing The Confidence And Strength To Set Realistic Goals And Fulfill Potential In Youth And Optimize One's Potential.</p>
            </div>
             <div>
                <h1> YOUTH UNITY</h1>
                <p>Upgrading  Quality, Strengthning And Empowerment Of Youth's For Nation Building. Social Awareness Through Seminars And Expert Lectures</p>
            </div>
        </div>
        </div>
        <div className="mentors">
            <div>
                <h1>ABOUT MENTORS</h1>
                <p>MENTORS ARE HERE TO HELP YOU</p>
            </div>
            <div className="mentor">
                <div className="user-mentors">
                    <div className="image3">
                    <img src={People} alt="" />
                    </div>
                    <div className="name">
                        ISHIMWE ERIC
                    </div>
                </div>
                <div className="user-mentors">
                    <div className="image3">
                    <img src={People} alt="" />
                    </div>
                    <div className="name">
                        ISHIMWE ERIC
                    </div>
                </div>
                <div className="user-mentors">
                    <div className="image3">
                    <img src={People} alt="" />
                    </div>
                    <div className="name">
                        ISHIMWE ERIC
                    </div>
                </div>
            </div>
            <div className="down">
                Join Us In Our Community That Serves as a great way to learn, Network And Most Importantly, Provide Critical Resource To Youth Experiencing  All Those Issues
            </div>
        </div>
        <div className="vision">
            <div>
           <h1> OUR VISIONS </h1>
            </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
