// Write your code here
import {Chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard'

import CourseTimelineCard from '../CourseTimelineCard'

import {
  ProjectAndCourseContainer,
  TimelineViewContainer,
  HeadingContainer,
  MainHeading,
  CCBPHeading,
} from './styledComponents'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimelineView = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={item.id} projectDetails={item} />
    }
    return <CourseTimelineCard key={item.id} courseDetails={item} />
  }

  return (
    <ProjectAndCourseContainer>
      <TimelineViewContainer>
        <HeadingContainer>
          <MainHeading>
            MY JOURNEY OF <br />
            <CCBPHeading>CCBP 4.0</CCBPHeading>
          </MainHeading>
        </HeadingContainer>
        <Chrono
          theme={{secondary: 'white'}}
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
        >
          {timelineItemsList.map(eachItem => renderTimelineView(eachItem))}
        </Chrono>
      </TimelineViewContainer>
    </ProjectAndCourseContainer>
  )
}

export default TimelineView
