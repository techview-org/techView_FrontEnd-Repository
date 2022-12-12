import React from 'react';
export default function Dropdown () {
  return (
    <>
      <label for='categories'>Filter</label>
      <select name='categories'>
        <option>Behavioral</option>
        <option>Technical</option>
        <option>Code 75</option>
      </select>
    </>
  )
}
