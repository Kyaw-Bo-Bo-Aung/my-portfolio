import Card from "./Card"
import myanmaritc from "../images/myanmaritc.jpg"
import udemy from "./../images/udemy.png"
import aprogrammer from "./../images/aprogrammer.jpg"
import creativecoder from "./../images/creative-coder.jpg"

function Course() {
    return(
        <div>
            <h2 className="section-header">Certified courses</h2>
            <Card
                key="mitc"
                certificate="PHP web developer bootcamp"
                school="Myanmar IT Consulting"
                duration="Batch-19"
                img={myanmaritc}
            />
            <Card
                key="udemy-js"
                certificate="Javascript basic to advanced"
                school="Ed Yoda Digital University"
                duration="Udemy online course"
                img={udemy}
            />
            <Card
                key="udemy-full"
                certificate="Complete web development bootcamp"
                school="Dr. Angela Yu"
                duration="Udemy online course"
                img={udemy}
            />
            <Card
                key="aprogrammer"
                certificate="Fundamental web development"
                school="A programmer"
                duration="Batch-4"
                img={aprogrammer}
            />
            <Card
                key="creative-coder"
                certificate="Php + Deep Dive Laravel"
                school="Creative Coder Myanmar"
                img={creativecoder}
            />
        </div>
    )
}
export default Course