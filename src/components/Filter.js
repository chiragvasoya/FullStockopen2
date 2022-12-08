import Input from './Input';

const Filter = ({value, handleChange}) => {
    return (
        <>
        Filter: <Input value={value} handleChange={handleChange} />
        </>
    )
}

export default Filter;