import Part from './Part';
import Total from './Total'

const Content = ({contents}) => {
   

    const total = contents.reduce((previousVal, currentVal) => 
        previousVal + currentVal.exercises, 0);
    
    
   
   
    // const array1 = [1, 2, 3, 4, 10];
    // // const initialVal  = 0;

    // const newTotal = array1.reduce((s, p) =>  s + p);
    
    // console.log(newTotal);
    
   
    return (
        <div>
           { contents.map(content => <Part key={content.id} name={content.name} exercises={content.exercises} /> ) }
            <Total total={total} />
        </div>
    );
}

export default Content;