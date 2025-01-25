import { useState } from "react";
import { useEffect } from "react";
import Country from "../Country/Country";

const Countries = () => {
    // place for all states 
    const [countries,setCountries]=useState([])

    //api call
    const url='https://restcountries.com/v3.1/all';
    
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    return (
        <div>
            <h3>Total COuntries: {countries.length}</h3>
        {
            countries.map(country=><Country key={country.cca3} country={country}></Country>)
        }
        
        </div>
    );
};

export default Countries;