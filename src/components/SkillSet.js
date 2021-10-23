
function SkillSet(props){
    return(
        <div className="skill-set">
            <img alt="" src={props.img}></img>
            <span>{props.name}</span>
        </div>
    )
}

export default SkillSet