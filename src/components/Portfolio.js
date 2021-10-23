import { useState } from "react";
import Card from "./Card";
import SkillSet from "./SkillSet";
import Html from "./../icons/html.png"
import Css from "./../icons/css.png"
import Bootstrap from "./../icons/bootstrap.png"
import ReactPng from "./../icons/react.png"
import Js from "./../icons/js.png"
import Php from "./../icons/php.png"
import Laravel from "./../icons/laravel.png"
import Mysql from "./../icons/mysql.png"
import Mongodb from "./../icons/mongodb.png"
import Jquery from "./../icons/jquery.png"

function Portfolio() {
    const [skillSets, setSkillSets] = useState([
        { name: 'HTML', img: Html },
        { name: 'CSS', img: Css },
        { name: 'Bootstrap', img: Bootstrap },
        { name: 'JS', img: Js },
        { name: 'Jquery', img: Jquery },
        { name: 'React', img: ReactPng },
        { name: 'PHP', img: Php },
        { name: 'MySQL', img: Mysql },
        { name: 'MongoDB', img: Mongodb },
    ]);

    const [portfolio, setPortfolio] = useState([
        { name: 'HTML', img: Html },
        { name: 'CSS', img: Css },
        { name: 'Bootstrap', img: Bootstrap },
        { name: 'JS', img: Js },
        { name: 'Jquery', img: Jquery },
        { name: 'React', img: ReactPng },
        { name: 'PHP', img: Php },
        { name: 'MySQL', img: Mysql },
        { name: 'MongoDB', img: Mongodb },
    ])
    return(
        <div id="portfolio">
            <div>
                <h1 className="section-header">Skills</h1>
                <div className="row">
                    {skillSets.map((skillSet,index) => (
                        <SkillSet 
                        key={index}
                        img= {skillSet.img}
                        name= {skillSet.name} />
                    ))
                    }
                </div>
            </div>

            <div>
                <h1 className="section-header">Portfolio</h1>
                <div className="row">
                    
                </div>
            </div>
        </div>
    )
}

export default Portfolio