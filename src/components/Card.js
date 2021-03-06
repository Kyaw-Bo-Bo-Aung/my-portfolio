import List from "./List"

function Card(props) {
    return(
        <div className="card">
            {props.img && <img className="card-img" src={props.img} alt="" />}
            <div>
                {props.certificate && <h3 className="card-title">{props.certificate}</h3>}
                {props.school && <p>{props.school}</p>}
                {props.duration && <p className="font-secondary">{props.duration}</p>}
                {props.lists && <ul className="card-list">
                    {props.lists.map((list,index) =>
                        (
                            <List key={index} content={list} />
                        ))}
                </ul>}
                {props.link && 
                    <a href={props.link} target="_blank" className="portfolio-btn">
                        Demo
                    </a>}
            </div>
        </div>
    )
}

export default Card