import './style.css';
import * as React from 'react';
import { CheckboxGroup } from './checkbox-group';

export default function App() {
  const techCheckboxes = ['Java', 'C#', 'JavaScript'];
  const [selectedCheckboxes, setSelectedCheckboxes] = React.useState({
    tech: [],
    xyz: []
  });
  function handleCheckbox(name, values) {
    setSelectedCheckboxes({
      ...selectedCheckboxes,
      [name]: values
    });
  }

  console.log(selectedCheckboxes);

  return (
    <div className="App">
      <CheckboxGroup
        name="tech"
        onChange={handleCheckbox}
        checkboxes={techCheckboxes}
      />

      <CheckboxGroup
        name="xyz"
        onChange={handleCheckbox}
        checkboxes={['x', 'y', 'z']}
      />
    </div>
  );
}
