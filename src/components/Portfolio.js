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
                'Bootstarp, PHP, Laravel, MySQL and other plugins',
                'Laravel DB transaction, multi auth, database notification',
                'Includes: Admin dashboard, QR scanner, transaction history, notification, account checker',
            ],
            link: 'https://damp-ridge-02132.herokuapp.com/'
        },
        {
            title: 'Ecommerce',
            url: 'shop.kyawboboaung.me',
            languages: 'PHP, MySQL',
            img: Shop,
            lists: [
                'Bootstrap,PHP pure, MySQL',
                'Concepts: session for authentication, local storage for shopping cart, database management system for ecommerce project',
                'Includes: Admin dashboard, authentication filter, products filter, shopping cart, order history'
            ],
            link: 'https://crud-project-assignment.000webhostapp.com/'
        },
        {
            title: 'Delivery web application',
            url: 'delicopter.kyawboboaung.me',
            languages: 'PHP, MySQL',
            img: Delicopter,
            lists: [
                'PHP, Laravel, Bootstrap, MySQL and spatie/laravel permission',
                'Concepts: Check delivery condition with status, spatie for role and permission',
                'Includes: Admin dashboard, delivery form filter, delivery status detail, history',
            ],
            link: 'https://delicopter.herokuapp.com/'
        },
        // {
        //     title: 'Online MCQs system',
        //     url: 'mcq.kyawboboaung.me',
        //     img: Mcq,
        //     lists: [
        //         'Bootstrap, PHP pure,  MySQL',
        //         'Concepts: session for authentication, manage multiple input, mcq db management',
        //         'Includes: Teacher dashboard, student management, pass/fail result'
        //     ],
        //     link: 'https://mcq.kyawboboaung.me/'
        // },
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
                            link={portfolio.link}
                        />
                    )
                )}
            </div>
        </div>
    )
}

export default Portfolio