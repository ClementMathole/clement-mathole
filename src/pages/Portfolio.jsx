import csharp from '../assets/techMarquee/c-sharp.png';
import jwt from '../assets/techMarquee/icons8-jwt-48.png';
import firebase from '../assets/techMarquee/icons8-firebase-48.png';
import jquery from '../assets/techMarquee/jquery.png';
import sqlServer from '../assets/techMarquee/database.png';
import flutter from '../assets/techMarquee/icons8-flutter-48.png';
import linkIcon from '../assets/link.png';

const highlight = [
  {
    logo: [csharp, jwt, sqlServer],
    title: 'AuthenticationAPI',
    descriptions: 'Provides authentication and authorization solution with JWT, refresh tokens, email confirmation, rate limiting, and account lockout.',
    link: 'https://github.com/ClementMathole/AuthenticationAPI',
    linkIcon: linkIcon
  },
  {
    logo: [csharp, firebase, jquery],
    title: 'Skills Audit System',
    descriptions: 'A complete Skills Audit and Employee Management System, designed to streamline the process of tracking, validating, and reporting employee competencies.',
    link: 'https://github.com/ClementMathole/CapableZA',
    linkIcon: linkIcon
  },
  {
    logo: [flutter, firebase],
    title: 'Smart Product Tracker',
    descriptions: 'A Flutter mobile app that lets users track product expiry dates and receive real-time notifications. Powered by Gemini AI, it provides nutritional data for each product, combining mobile development with AI integration.',
    link: '',
    linkIcon: linkIcon
  },
  {
    logo: [csharp, sqlServer],
    title: 'Image Processing Pipeline API',
    descriptions: 'A backend service designed to handle image uploads, background image processing, and retrieval of processed images. It follows Clean Architecture principles for maintainability and scalability, relying solely on a SQL Server database.',
    link: 'https://github.com/ClementMathole/ImageProcessingPipeline',
    linkIcon: linkIcon,
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <p>Portfolio</p>
      <h3 >Explore some of my <span className="gradient-text">work</span></h3>
      <div className="highlights-grid">
        {highlight.map((project, index) => (
          <div key={index} className="highlight-card">
            {project.logo.length > 0 && (
              <div className="logos">
                {project.logo.map((logo, logoIndex) => (
                  <img key={logoIndex} src={logo} alt="Tech logo" className="logo" width={30}/>
                ))}
              </div>
            )}
            {project.title && <h3 id='title'>{project.title}</h3>}
            {project.descriptions && <p>{project.descriptions}</p>}
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                <img src={linkIcon} width={20} />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
