import List from "./List"

function Card(props) {
    return(
        <div className="card">
            {props.img && <img src={props.img} alt="" />}
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
            </div>
        </div>
    )
}

export default Card