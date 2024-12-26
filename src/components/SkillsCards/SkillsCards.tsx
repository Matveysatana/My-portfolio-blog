import { skills } from 'store/skils'
import './SkillsCards.css'
import { ISkills } from 'types/skils-type'
import { ImageDefiner } from 'utils/image-definer'



const SkillsCards = () => {
    return (
        <div className="skills-container">
        {skills.map((skill: ISkills) => (
          <div key={skill.id} className="skill-card">
            <div className="skill-image">
              {ImageDefiner(skill.name)}
            </div>
            <h3 className="skill-name">{skill.name}</h3>
            <p className="skill-description">{skill.description}</p>
            <div className="skill-progress">
              <div
                className="skill-fill"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
            <span className="skill-percentage">{skill.percentage}%</span>
          </div>
        ))}
      </div>
    )

}


export default SkillsCards;