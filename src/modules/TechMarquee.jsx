import React from 'react';
import reactIcon from '../assets/techMarquee/physics.png';
import javaScript from '../assets/techMarquee/js.png';
import csharp from '../assets/techMarquee/c-sharp.png';
import html from '../assets/techMarquee/html.png';
import figma from '../assets/techMarquee/figma.png';
import dart from '../assets/techMarquee/icons8-dart-48.png';
import firbase from '../assets/techMarquee/icons8-firebase-48.png';
import vscode22 from '../assets/techMarquee/icons8-visual-studio-48.png';
import sql from '../assets/techMarquee/programing.png';
import git from '../assets/techMarquee/git.png';
import css from '../assets/techMarquee/css.png';
import joomla from '../assets/techMarquee/joomla.png';
import flutter from '../assets/techMarquee/icons8-flutter-48.png'

import styles from './TechMarquee.module.css';

const TechMarquee = () => {
  const techs = [
    { icon: csharp},
    { icon: javaScript},
    { icon: dart},
    { icon: sql},
    { icon: html},
    { icon: css},
    { icon: firbase},
    { icon: flutter},
    { icon: reactIcon},
    { icon: git},
    { icon: figma},
    { icon: vscode22},
    { icon: joomla}
  ];

  const duplicatedTechs = [...techs, ...techs];

  return (
    <div className={styles.techMarquee}>
      <div className={styles.marqueeWrapper}>
        <ul className={styles.techList} role="list">
          {duplicatedTechs.map((tech, index) => (
            <li key={index} className={styles.techItem}>
              <div className={styles.techIcon}>
                <img src={tech.icon} width={40} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TechMarquee;