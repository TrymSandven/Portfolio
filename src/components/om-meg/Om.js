import React from 'react'
import './Om.css'
import Feature from './Skill';
import { featureList } from './data';

import bilde from '../../assets/om-meg.jpg'
import { BsFillBookmarkStarFill } from 'react-icons/bs';



const Features = () => {
  return (
    <section id="features">
      <div className="container features">
        <div className="u-title">
          <BsFillBookmarkStarFill color="orangered" size={30} />
          <h2>Om meg</h2>
          <p className="u-text-small">
          Nyutdanna utviklar frå UiB med interesse for maskinlæring og webutvikling. Eg har erfaring med å jobbe med data og å lage nettsider. Eg er ein god teamspelar som likar å jobbe med andre. Eg er fleksibel og likar å lære nye ting.
          </p>
        </div>
        <div className="features-content">
          <div className="features-left">
            <img src={bilde} alt="phone" />
          </div>
          <div className="features-right">
            {featureList.map((feature) => (
              <Feature
                key={feature.id}
                icon={feature.icon}
                heading={feature.heading}
                text={feature.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;