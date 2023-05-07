const Heading = ({ icon, title, alt }) => {
    return (
        <div className="title-container">
            <div className="icon">
            <img src={`/icons/${icon}`} alt={alt} />
            </div>
            <h2 className="title">{ title }</h2>
        </div>
    )
}

export default Heading