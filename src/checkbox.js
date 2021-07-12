import React from 'react';

export function Checkbox({ name, label, checked, index, onChange }) {
  function handleCheck() {
    onChange(index);
  }
  return (
    <div>
      <label>
        <input
          name={name}
          type="checkbox"
          checked={checked}
          onChange={handleCheck}
        />
        <span
          style={{
            marginLeft: '10px'
          }}
        >
          {label}
        </span>
      </label>
    </div>
  );
}
