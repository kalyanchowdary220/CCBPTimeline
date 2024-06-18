// Write your code here

import {AiFillClockCircle} from 'react-icons/ai'

import {
  CourseTimelineContainer,
  CourseHeading,
  CourseDurationCon,
  Duration,
  DescriptionContainer,
  TagListContainer,
  CourseTagItem,
  CourseTag,
} from './styledComponents'

const CourseTimelineCard = props => {
  const {courseDetails} = props

  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <>
      <CourseTimelineContainer>
        <CourseHeading>{courseTitle}</CourseHeading>
        <CourseDurationCon>
          <AiFillClockCircle />
          <Duration>{duration}</Duration>
        </CourseDurationCon>
      </CourseTimelineContainer>
      <DescriptionContainer>{description}</DescriptionContainer>
      <TagListContainer>
        {tagsList.map(eachTag => (
          <CourseTagItem key={eachTag.id}>
            <CourseTag>{eachTag.name}</CourseTag>
          </CourseTagItem>
        ))}
      </TagListContainer>
    </>
  )
}

export default CourseTimelineCard
