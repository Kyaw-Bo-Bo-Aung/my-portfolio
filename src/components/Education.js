import Card from "./Card";
import ytu from "./../images/ytu.png"

function Education() {
    return(
        <div id="education">
            <h2 className="section-header">Education</h2>
            <div>
                <Card
                key="ytu"
                img={ytu}
                certificate="Bachelor of Engineering"
                school="Yangon Technological University (YTU)"
                duration="(2013 Dec - 2020 Mar)"
                lists={
                    [
                        'Second batch COE student',
                        'Specialize in electrical power engineering',
                        'Good at maths and programming subjects',
                        'Excellent in group working and problem solving'
                    ]
                } />
            </div>
        </div>
    )
}

export default Education;