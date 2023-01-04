import React from 'react'

function Features() {
  return (
    <section id='features'>
      <div className='container features'>
        <div className='u-title'>
          <BsFillBookmarkStarFill color='#FF4500' size={30}/>
          <h2>Om meg</h2>
          <p className='u-text-small u-text-dark'>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
        </div>
        <div className='features-content'>
          <div className='features-left'>
            <img src={bilde} alt='bilde av meg'/>
          <div/>
          <div className='features-right'>
            {
              featureList.map((feature) => (
                <Feature key={feature.id} icon={feature.icon} heading={feature.heading} text={feature.text}/>
              ))            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
