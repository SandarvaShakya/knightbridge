import React from 'react'

const InformationList = ({ title, infos, customMarker }) => {
    return (
        <div className="information-list">
            <h2 className="information-list--title">
                { title }
            </h2>
            <ul className='information-list--container'>
                {infos && infos.map((info, index) => <li key={index} className={`information-item ${customMarker}`}>{info}</li>)}
            </ul>
    </div>
    )
}

export default InformationList