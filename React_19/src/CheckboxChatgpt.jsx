import { useState } from 'react';

const CheckboxChatgpt = () => {
  const options = ['JS', 'React', 'CSS', 'HTML','Redux'];
  const [selectedTechs, setSelectedTechs] = useState([]);

  const handleChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedTechs([...selectedTechs, value]);
    } else {
      setSelectedTechs(selectedTechs.filter((item) => item !== value));
    }
  };

  // 🔘 Select All
  const handleSelectAll = () => {
    setSelectedTechs(options);
  };

  // 🔘 Clear All
  const handleClearAll = () => {
    setSelectedTechs([]);
  };

  return (
    <>
      <h2>📦 Technology Checkboxes</h2>

      {/* Render checkboxes dynamically */}
      {options.map((tech) => (
        <label key={tech}>
          <input
            type="checkbox"
            value={tech}
            checked={selectedTechs.includes(tech)}
            onChange={handleChange}
          />
          {tech}
        </label>
      ))}

      <br />
      <br />

      {/* Action buttons */}
      <button onClick={handleSelectAll}>✅ Select All</button>
      <button onClick={handleClearAll} style={{ marginLeft: '10px' }}>
        ❌ Clear All
      </button>

      <hr />

      {/* Display selected values */}
      <h3>✅ Selected ({selectedTechs.length}):</h3>
      {selectedTechs.length > 0 ? (
        <ul>
          {selectedTechs.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      ) : (
        <p>No technologies selected.</p>
      )}
    </>
  );
};

export default CheckboxChatgpt;
