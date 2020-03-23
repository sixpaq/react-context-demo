import * as React from 'react';
import { IButtonProps } from './IButtonProps';
import { useDemoContext } from '../../Context/DemoContext';

import './Button.scss';

export const Button: React.SFC<IButtonProps> = ({ name, label }) => {
  // Get setName function to change the selected name in DemoContext
  const { setName } = useDemoContext();

  return (
    <button className="button" onClick={() => setName(name)}>
      {label}
    </button>
  );
}
