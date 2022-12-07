import Header from './Header';
import Content from './Content';

const Course = ({courses}) => {
 
    return (
      <div>
         
          {  courses.map(course => 
              <>
             <Header key={course.id+'header'} name={course.name} />
             <Content key={course.id+'content'} contents={course.parts} />
             </>)
          }
            
      </div>
    )
  }

export default Course;