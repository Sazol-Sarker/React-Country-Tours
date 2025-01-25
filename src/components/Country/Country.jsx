import './Country.css'
const Country = ({country}) => {
    const {name,flags,population,area}=country;
    // console.log(name.common);
     console.log(country);
    return (
        <div className="country">
            <h4>Country Name: {name?.common}</h4>
        <img src={flags.png} alt="Flag of country" />
        <p>Population: {population}</p>
        <p>Area: {area} sq. km</p>
        
        
        </div>
    );
};

export default Country;