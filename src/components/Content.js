import Part from './Part';
import Total from './Total'

const Content = ({contents}) => {
   
   
    return (
        <div>
           { contents.map(content => <Part key={content.id} name={content.name} exercises={content.exercises} /> ) }
            <Total total={contents} />
        </div>
    );
}

export default Content;