import { useState } from "react";
import Card from "./Card";
import SkillSet from "./SkillSet";
import { Html, Css, Bootstrap, ReactPng, Jquery, Js, Php, Laravel, Mongodb, Mysql} from "./../icons/icons.js"
import { Delicopter, Dingar, Mcq, Shop } from './../portfolios/portfolios'

function Portfolio() {
    const [skillSets] = useState([
        { name: 'HTML', img: Html },
        { name: 'CSS', img: Css },
        { name: 'Bootstrap', img: Bootstrap },
        { name: 'JS', img: Js },
        { name: 'Jquery', img: Jquery },
        { name: 'React', img: ReactPng },
        { name: 'PHP', img: Php },
        { name: 'Laravel', img: Laravel },
        { name: 'MySQL', img: Mysql },
        { name: 'MongoDB', img: Mongodb },
    ]);

    const [portfolios] = useState([
        {
            title: 'Emoney web application',
            url: 'dingar.kyawboboaung.me',
            img: Dingar,
            lists: [
                'Backend: PHP, Laravel',
                'Frontend: Bootstrap',
                'Database: MySQL'
            ]
        },
        {
            title: 'Ecommerce',
            url: 'shop.kyawboboaung.me',
            languages: 'PHP, MySQL',
            img: Shop,
            lists: [
                'Backend: PHP pure',
                'Frontend: Bootstrap',
                'Database: MySQL'
            ]
        },
        {
            title: 'Delivery web application',
            url: 'delicopter.kyawboboaung.me',
            languages: 'PHP, MySQL',
            img: Delicopter,
            lists: [
                'Backend: PHP, Laravel',
                'Frontend: Bootstrap',
                'Database: MySQL'
            ]
        },
        {
            title: 'Online MCQs system',
            url: 'mcq.kyawboboaung.me',
            img: Mcq,
            lists: [
                'Backend: PHP pure',
                'Frontend: Bootstrap',
                'Database: MySQL'
            ]
        },
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
            {portfolios && portfolios.map((portfolio, index) =>
                (
                    <Card
                        key={index}
                        certificate={portfolio.title}
                        duration={portfolio.url}
                        lists={portfolio.lists}
                        img={portfolio.img}
                    />
                )
            )}
            </div>
        </div>
    )
}

export default Portfolio