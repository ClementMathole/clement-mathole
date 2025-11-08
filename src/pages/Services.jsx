import { useNavigate } from "react-router-dom";
import mobileIcon from '../assets/mobile.png';
import webIcon from '../assets/world-wide-web.png';
import apiIcon from '../assets/api.png';

const ServiceCard = ({ icon, title, description }) => (
  <article className="service-card" role="article">
    <img src={icon} alt={`${title} icon`} />
    <h3>{title}</h3>
    <p>{description}</p>
  </article>
);

const Services = () => {
  const navigate = useNavigate();

  return (
    <>
    <section id="services" aria-labelledby="services-heading">
      <div className="section-content-services">
        <p className="section-subtitle">Development solutions tailored to your goals.</p>
        <div className="grid-services">
          <div className="first-row">
            <h1 id="services-heading" className="gradient-text">Services</h1>
            <div className="cards-wrapper">
              <ServiceCard
                icon={webIcon}
                title="Web Applications"
                description="Modern, responsive, and SEO-friendly web applications using ASP.NET Core MVC, React.js and Joomla."
              />
              <ServiceCard
                icon={mobileIcon}
                title="Cross-Platform Mobile Development"
                description="Cross-platform applications with Flutter for Android and iOS that offer seamless user experience."
              />
            </div>
          </div>
          
          <div className="second-row">
            <ServiceCard
              icon={apiIcon}
              title="Backend Development"
              description="Developing robust, scalable APIs and backend systems using C# (.NET) and SQL databases."
            />
          </div>
        </div>
      </div>
    </section>
    <section id='highlight'>
      <p>Portfolio</p>
      <h3>Explore my work</h3>
      <button onClick={() => navigate("/portfolio")}>Explore</button>
    </section>
    </>
  );
};

export default Services;