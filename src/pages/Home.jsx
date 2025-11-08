import { useNavigate } from "react-router-dom";
import meImage from '../assets/clement.png';
import emailIcon from '../assets/email.png';

const Home = () => {
    const navigate = useNavigate();

    return(
        <>
            <section id="home">
                <div className="section-content-home">
                    <img src={meImage} alt="Clement Mathole" width={100}/>
                    <p>Hi I'm Clement</p>
                    <h1>Full Stack <span className="gradient-text">Software</span> <br /> Developer/ <span className="gradient-text">Engineer</span> </h1>
                    <p>I design, build, and deploy seamless digital experiences brusing modern technologies. From responsive <br />front-ends to efficient back-end systems, I bring ideas to life through clean code and intuitive design.</p>
                    <div className="action-btns">
                        <button id='my-work' onClick={() => navigate("/portfolio")}>My Work</button>
                        <button id='l-connect'>Let’s Connect <img src={emailIcon} alt="mail icon" width={18}/></button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;