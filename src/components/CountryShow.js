const CountryShow = ({country}) => {
    if (country !== false ) {
    return (
        <div>
       
         <h3>{country.name.common}</h3>
        <p>Capital: {country.capital}</p>
        <h3>Languages: </h3>
        <ul>
            { 
            //   Object.keys(country.languages).map(langauge => <li key={langauge}>{country.languages[langauge]}</li>)
              Object.values(country.languages).map((langauge, i) => <li key={i}>{langauge}</li>)
            }
        </ul> 
        <img src={country.flags.png} alt={country.name.common}/> 
       
    </div>
    )
    }
}

export default CountryShow;