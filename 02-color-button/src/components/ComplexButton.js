import React from 'react';
import { useState } from 'react';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1'); // regex find cap letters, put space in front
}

export default function ComplexButton() {
  const COMPLEX_COLORS = ['MediumVioletRed', 'MidnightBlue'];
  const [complexBtnColorIndex, setComplexBtnColorIndex] = useState(0);

  const changeComplexBtnColor = () =>
    setComplexBtnColorIndex((prevState) => (prevState === 0 ? 1 : 0));

  return (
    <div style={{ marginBottom: 15 }}>
      <button
        onClick={changeComplexBtnColor}
        style={{
          backgroundColor: COMPLEX_COLORS[complexBtnColorIndex],
          color: '#FFF',
          padding: 10,
          borderRadius: 5,
        }}
      >
        {`Change to ${
          complexBtnColorIndex === 0
            ? replaceCamelWithSpaces(COMPLEX_COLORS[complexBtnColorIndex + 1])
            : replaceCamelWithSpaces(COMPLEX_COLORS[complexBtnColorIndex - 1])
        }`}
      </button>
    </div>
  );
}
