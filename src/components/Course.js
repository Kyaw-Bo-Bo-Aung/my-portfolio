import Card from "./Card"
import { myanmaritc, udemy, aprogrammer, creativecoder, turing } from "./../images/images.js"


function Course() {
    return(
        <div>
            <h2 className="section-header">Courses & Trainings</h2>
            <Card
                key="turing-programming-training-center"
                certificate="JavaEE, Spring Boot"
                school="Turing Programming Training Center"
                img={turing}
            />
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