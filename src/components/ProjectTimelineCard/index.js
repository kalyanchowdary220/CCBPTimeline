// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import {
  ProjectDetailsContainer,
  ProjectImgAndDurationCon,
  ProjectImg,
  ProjectTitle,
  TimeAndDurationContainer,
  DurationContainer,
  DescriptionPara,
  VisitLink,
} from './styledComponents'

const ProjectTimelineCard = props => {
  const {projectDetails} = props

  const {
    projectUrl,
    imageUrl,
    projectTitle,
    description,
    duration,
  } = projectDetails

  return (
    <ProjectDetailsContainer>
      <ProjectImg src={imageUrl} alt="project" />
      <ProjectImgAndDurationCon>
        <ProjectTitle>{projectTitle}</ProjectTitle>
        <TimeAndDurationContainer>
          <AiFillCalendar />
          <DurationContainer>{duration}</DurationContainer>
        </TimeAndDurationContainer>
      </ProjectImgAndDurationCon>
      <DescriptionPara>{description}</DescriptionPara>
      <VisitLink href={projectUrl}>Visit</VisitLink>
    </ProjectDetailsContainer>
  )
}

export default ProjectTimelineCard
