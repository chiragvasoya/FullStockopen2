
const Total = ({total}) => {
    let sum = 0;
    total.forEach(course => {
        sum = sum + course.exercises;
    });
    return (
        <p>Total number of {sum} exercises </p>
    )
}

export default Total;