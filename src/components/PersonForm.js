import Input from './Input';
import Button from './Button';

const PersonForm = ({formEvent, personVal, handlePerson, numberVal, handleNumber}) => {
    return (
        <form onSubmit={formEvent}>
        <div>
            Name: <Input value={personVal} handleChange={handlePerson} />
           
        </div>
        <div>
            Number: <Input value={numberVal} handleChange={handleNumber} />
        </div>
        <div>
             <Button name="Add New" type="submit" />
          
       </div>
        </form>

    )
}

export default PersonForm;