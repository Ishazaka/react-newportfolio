import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl , link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
       
        <img alt='blogs' src={imgUrl} />
        <div className="proj-txtx">
        <a rel="noreferrer noopener" target='_blank' href={link} style={{color: 'white'}} > 
          <h4>{title}</h4>
          <span>{description}</span>
        </a>
        </div>
      </div>
    </Col>
  )
}
