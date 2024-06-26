import { useState } from "react";
import Card from "./Card";
import SkillSet from "./SkillSet";
import { Html, Css, Bootstrap, ReactPng, Jquery, Js, Php, Laravel, Mongodb, Mysql, Java, NodeJS, Spring, NextJs, PostgreSQL, Docker, Vue} from "./../icons/icons.js"
import { ChatApp, Delicopter, Dingar, JobFinder, Shop } from './../portfolios/portfolios'

function Portfolio() {
    const [skillSets] = useState([
        { name: 'Java', img: Java },
        { name: 'PHP', img: Php },
        { name: 'Node.js', img: NodeJS },
        { name: 'Laravel', img: Laravel },
        { name: 'Spring', img: Spring },
        { name: 'React', img: ReactPng },
        { name: 'Vue', img: Vue },
        { name: 'Next.js', img: NextJs },
        { name: 'MySQL', img: Mysql },
        { name: 'PostgreSQL', img: PostgreSQL },
        { name: 'MongoDB', img: Mongodb },
        { name: 'Docker', img: Docker },
        { name: 'HTML', img: Html },
        { name: 'CSS', img: Css },
        { name: 'Bootstrap', img: Bootstrap },
        { name: 'JS', img: Js },
        { name: 'Jquery', img: Jquery },
    ]);

    const [portfolios] = useState([
        {
            title: 'Dingar - Digital Wallet',
            url: 'http://dingar.infinityfreeapp.com',
            img: Dingar,
            lists: [
                'Bootstarp, PHP, Laravel, MySQL and other plugins',
                'Laravel DB transaction, multi auth, database notification',
                'Includes: Admin dashboard, QR scanner, transaction history, notification, account checker',
                'credit and debit user\'s wallet', 
                'payment and receive with QR',
                'contact checker',
                'transaction history',
                'notification',
                'admin dashboard',
                'user management',
                'wallet management',
                'transaction tracking'
            ],
            link: 'http://dingar.infinityfreeapp.com/'
        },
        {
            title: 'Chat Application',
            url: 'https://vue-firebase-blog-51b22.web.app',
            languages: 'VueJs, Firebase',
            img: ChatApp,
            lists: [
                'VueJS, VueRouter',
                'Firestore, FirebaseAuth, FirebaseHosting, Realtime database',
                'Register, Login, Middleware',
            ],
            link: 'https://vue-firebase-blog-51b22.web.app/'
        },
        {
            title: 'Delivery Service',
            url: 'http://delicopter.000.pe',
            languages: 'PHP, MySQL',
            img: Delicopter,
            lists: [
                'PHP, Laravel, Blade, Eloquent ORM, Role based authentication',
                'Check delivery condition with status',
                'Admin dashboard, delivery form filter, delivery status detail, detail history',
            ],
            link: 'http://delicopter.000.pe/'
        },
        {
            title: 'JobFinder - Online Job Portal',
            url: 'https://github.com/Kyaw-Bo-Bo-Aung/job-finder-frontend',
            img: JobFinder,
            lists: [
                'ReactJs, ContextAPI',
                'Job List from third-party APIs',
                'Calling backend service with Axios, RestAPI'
            ],
            link: 'https://github.com/Kyaw-Bo-Bo-Aung/job-finder-frontend'
        },
        {
            title: 'E-commerce Shop',
            url: 'https://github.com/Kyaw-Bo-Bo-Aung/shop.git',
            img: Shop,
            lists: [
                'Pure PHP, MySQL',
                'Shoping Card, Check Out',
                'Admin dashboard, Product Management, Stock Management'
            ],
            link: 'https://github.com/Kyaw-Bo-Bo-Aung/shop.git'
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
                <h1 className="section-header">Portfolios</h1>
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