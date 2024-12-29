import './Programs.css'
import { programsData } from '../../data/programsData.jsx'
import RightArrow from '../../assets/rightArrow.png'
const Programs = () => {
    return (
        <div className="programs" id="programs">
            {/* header */}
            <div className="programs-header">
                <span className="stroke-text">Explore our</span>
                <span> Programs</span>
                <span className="stroke-text">  to shape you</span>
            </div>

            <div className="program-categories">
                {programsData.map((program) => (
                    <div key={program.id} className="category">
                        <span> {program.image}</span>
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className="join-now">
                            <span>Join Now</span>
                            <img src={RightArrow} alt="arrow mark img" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Programs

