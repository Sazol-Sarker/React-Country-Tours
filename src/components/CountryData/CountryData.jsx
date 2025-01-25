const CountryData = ({ country }) => {
  // console.log(country);
  return (
    <div>
      <p>Country Name:{country.name.common}</p>
      <p>Region: {country.region}</p>
      <p>Start Of Week : {country.startOfWeek}</p>
    </div>
  );
};

export default CountryData;
