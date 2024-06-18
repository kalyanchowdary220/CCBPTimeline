/* Write your CSS here */
import styled from 'styled-components'

export const ProjectDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
`

export const ProjectImgAndDurationCon = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1px;
`

export const ProjectImg = styled.img`
  height: 250px;
  width: 100%;
`
export const ProjectTitle = styled.h1`
  color: #1e293b;
  font-weight: 600;
  font-size: 25px;
`
export const TimeAndDurationContainer = styled.div`
  display: flex;
  align-items: center;
`
export const DurationContainer = styled.p`
  color: #1e293b;
  font-weight: 600;
`
export const DescriptionPara = styled.p`
  color: #171f46;
  font-size: 17px;
  font-family: 'roboto';
`
export const VisitLink = styled.a`
  font-family: 'roboto';
  font-size: 17px;
`
