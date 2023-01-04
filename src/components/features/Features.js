import React from 'react'
import './Features.css'
import Feature from './Feature';
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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae veniam dolorum repellendus obcaecati minus voluptas neque dolore similique.
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