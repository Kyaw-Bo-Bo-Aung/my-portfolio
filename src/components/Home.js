import Banner from './Banner';
import Contact from './Contact';
import Course from './Course';
import Education from './Education';
import Portfolio from './Portfolio';

function Home() {
    return(
        <div>
            <Banner />
            <Portfolio />
            <Education />
            <Course />
            <Contact />
        </div>
    )
}

export default Home