import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import { useState, useEffect } from 'react';
import axios from 'axios';



const App = () => {
  
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newSearch, setNewSearch] = useState('');
  // const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    axios.get(' http://localhost:3001/persons')
          .then(response => {
            setPersons(response.data);
          })
  }, []);
     
 const filtered = newSearch ? persons.filter(({name}) => name.toLowerCase().match(newSearch.toLowerCase())) : persons;


  const handleNewPerson = (event) => {
    setNewPerson(event.target.value);
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  }

  const handleSearch = (event) => {
    setNewSearch(event.target.value);
  }

  
  const addPerson = (event) => {
    event.preventDefault();
    
    const matchExist = persons.find(({name}) => name === newPerson);
    
    if (matchExist != null) {
      alert(`${newPerson} already in a list`);
    }
    else {
      const personObject = {
        name: newPerson,
        number: newNumber,
        id: persons.length + 1,
      };
      setPersons(persons.concat(personObject));
      
    }
   
    setNewPerson("");
    setNewNumber("");
  }

 
  

  return (
      <div>
        <h2>Find list</h2>
        
           <Filter value={newSearch} handleChange={handleSearch} />

         
        <h2>Add New</h2>
         <PersonForm formEvent={addPerson} personVal={newPerson} handlePerson={handleNewPerson} numberVal={newNumber} handleNumber={handleNewNumber}  />
       
        <h2>List</h2>
        <Persons persons={filtered}/>
        {/* <table>
          <tbody>
        { filtered.map(filter => <Person key={filter.id} person={filter}  /> )  }
         </tbody>
        </table> */}
      </div> 
  )
}

export default App;
