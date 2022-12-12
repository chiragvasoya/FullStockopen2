import { useState } from "react";
import CountryShow from "./CountryShow";

const CountryList = ({countries, searchCount}) => {

    const [countryShow, setCountryShow] = useState(false);
    const [countryData, setCountryData] = useState({});

    const handleCountryShow = (e) => {
      
        let countryToShow = e.target.value;
        countries.forEach(country => {
            if (country.name.common === countryToShow) {
                setCountryData(country);
            }
        });
      
        setCountryShow(true);
   
    }

    if (searchCount === 0) {
        return (
            <div>Enter values in searchbox.</div>
        )
    }
    else if ( searchCount > 10) {
        return (
            <div>Too many results. Further add to searchbox</div>
        )
    }
    else if ( searchCount === 1) {
       
        return (
            <div>
                { countries.map((country, i) => <CountryShow key={'country'+i} country={country} /> )}
            </div>
        )
    }
    return (
        <>
        <ul>
        { countries.map(country => <>
              <li key={country.cca3}>{ country.name.common }  <button onClick={handleCountryShow} value={country.name.common} >Show</button></li>
             
              </> )  }
      </ul>
       <CountryShow country={countryShow ? countryData : false } /> 
      </>
    )
}

export default CountryList;