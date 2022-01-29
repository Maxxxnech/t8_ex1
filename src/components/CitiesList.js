import React from "react";

export default function CitiesList({cities, handleClick}) {
  return (
    <ul>
      {cities.map((city, i) => (
        <li onClick={()=>(handleClick(i))} key={city.name}>{city.name} ({city.description})</li>
      ))}
    </ul>
  );
}
