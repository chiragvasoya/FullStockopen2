import { useState, useEffect } from "react";
import axios from 'axios';
import CountryList from './components/CountryList';

const App = () => {
  
  const [countries, setCountries] = useState([]);
  const [countrySearch, setCountrySearch] = useState('');

  const searchBox = countrySearch ? countries.filter(({ name }) => name.common.toLowerCase().match(countrySearch.toLocaleLowerCase())) : '';

  const searchCount = searchBox.length;
  
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
          .then(response => {
            setCountries(response.data);
          });
  }, []);


  const handleSearch = (event) => {
    setCountrySearch(event.target.value);
  }
 
  

  return (
      <div>
          <h2>Find List</h2>
          <div>
            <input value={countrySearch} onChange={handleSearch} />
          </div>
          <CountryList countries={searchBox} searchCount={searchCount} />
      </div> 
  )
}

export default App;
