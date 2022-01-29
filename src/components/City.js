import React from "react";

export default function City({city, onChange}) {

  function handleChange(e) {
    onChange(e.target.value)
  }

  return (
    <div>
      <h3>{city.name}</h3>
      <textarea value={city.description} onChange={handleChange} />
    </div>
  );
}
