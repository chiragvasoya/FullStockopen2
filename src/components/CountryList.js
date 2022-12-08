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
    return (
        <ul>
        { countries.map(country => <li key={country.cca3}>{ country.name.common }</li> )  }
      </ul>
    )
}

export default CountryList;