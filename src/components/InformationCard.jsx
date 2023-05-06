import React from 'react'

const InformationCard = ({ img, title, texts, alt }) => {
  return (
    <div className='information-card'>
        <div className="information-card--title">
            <div className="information-card--logo">
                <img src={`/icons/${img}`} alt={alt} />
            </div>
            <h3 className="information-card--text">{title}</h3>
        </div>
        {texts && texts.map((text, index) => <p key={index} className="information-card--content">{text}</p>)}
    </div>
  )
}

export default InformationCard