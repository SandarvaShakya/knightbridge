const Heading = ({ icon, title, alt, className }) => {
    return (
        <div className={`title-container ${className}`}>
            {icon && <div className="icon">
                <img src={`/icons/${icon}`} alt={alt} />
            </div>}
            <h2 className="title">{ title }</h2>
        </div>
    )
}

export default Heading