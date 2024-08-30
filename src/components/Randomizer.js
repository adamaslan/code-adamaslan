import React, { useState } from 'react';

const Randomizer = () => {
  // State to hold the list of names and the current input name
  const [names, setNames] = useState([]);
  const [nameInput, setNameInput] = useState('');

  // Function to randomize names using Fisher-Yates algorithm
  const randomizeNames = () => {
    const shuffledNames = [...names];
    for (let i = shuffledNames.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledNames[i], shuffledNames[j]] = [shuffledNames[j], shuffledNames[i]];
    }
    setNames(shuffledNames);
  };

  // Function to handle form submission and add a new name to the table
  const handleSubmit = (event) => {
    event.preventDefault();
    if (nameInput.trim()) {
      setNames([...names, nameInput.trim()]);
      setNameInput(''); // Clear input after adding
    }
  };

  // Function to clear the table
  const clearTable = () => {
    setNames([]);
  };

  return (
    <div>
      {/* Form to add new names */}
      <h2>Randomize a Table</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          placeholder="Enter a name"
          style={{ fontSize: '2.2rem', padding: '0.5rem', width: '15rem' }} // Responsive font and input box
        />
        <button type="submit" style={{ fontSize: '2.2rem', padding: '0.5rem 1rem' }}>Add Name</button>
      </form>
      
      {/* Table to display names */}
      <table id="nameTable" style={{ marginTop: '1rem', width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ fontSize: '2.2rem', padding: '0.5rem' }}>Number</th>
            <th style={{ fontSize: '2.2rem', padding: '0.5rem' }}>Name</th>
          </tr>
        </thead>
        <tbody>
          {names.map((name, index) => (
            <tr key={index}>
              <td style={{ fontSize: '2.2rem', padding: '0.5rem' }}>{index + 1}</td>
              <td style={{ fontSize: '2.2rem', padding: '0.5rem' }}>{name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Button to randomize names */}
      <button
        onClick={randomizeNames}
        disabled={names.length === 0}
        style={{ fontSize: '2.2rem', padding: '0.5rem 1rem', marginTop: '1rem' }}
      >
        Randomize Names
      </button>

      {/* Button to clear the table */}
      <button
        onClick={clearTable}
        disabled={names.length === 0}
        style={{ fontSize: '2.2rem', padding: '0.5rem 1rem', marginTop: '0.5rem' }}
      >
        Clear Table
      </button>
    </div>
  );
};

export default Randomizer;
