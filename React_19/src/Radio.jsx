import { useState } from 'react';

export function Radio() {
  const [gender, setGender] = useState('Male');
  const [city, setCity] = useState('Nawada');
  function handleChange(event) {
    setGender(event.target.value);
  }
  return (
    <>
      <h2>Radio & Dropdown</h2>
      <h3>Select Gender </h3>
      <label>
        <input
          type="radio"
          value="Male"
          onChange={handleChange}
          checked={gender == 'Male'}
          name="gender"
        />{' '}
        Male
      </label>
      <label>
        <input
          type="radio"
          value="Female"
          onChange={handleChange}
          checked={gender == 'Female'}
          name="gender"
        />{' '}
        Female
      </label>
      <h2>Selected Gender : {gender} </h2>
      <hr />
      <h2> Select City</h2>
      <select
        defaultValue={'Nawada'}
        onChange={() => setCity(event.target.value)}
      >
        <option value="Patna">Patna</option>
        <option value="Gaya">Gaya</option>
        <option value="Nawada">Nawada</option>
        <option value="Biharsharif">Biharsharif</option>
        <option value="Delhi">Delhi</option>
      </select>
      <h2>Selected City : {city} </h2>
    </>
  );
}
