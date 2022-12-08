const CountryList = ({countries, searchCount}) => {
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
                { countries.map(country => <>
                 <h3>{country.name.common}</h3>
                <p>Capital: {country.capital}</p>
                <h3>Languages: </h3>
                <ul>
                    { 
                    //   Object.keys(country.languages).map(langauge => <li key={langauge}>{country.languages[langauge]}</li>)
                      Object.values(country.languages).map((langauge, i) => <li key={i}>{langauge}</li>)
                    }
                </ul> 
                <img src={country.flags.png} /> 
                </>
                )}
            </div>
        )
    }
    return (
        <ul>
        { countries.map(country => <li key={country.cca3}>{ country.name.common }</li> )  }
      </ul>
    )
}

export default CountryList;