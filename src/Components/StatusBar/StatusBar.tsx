import * as React from 'react';
import { IStatusBarProps } from './IStatusBarProps';
import { useDemoContext } from '../../Context/DemoContext';

import './StatusBar.scss';

export const StatusBar: React.SFC<IStatusBarProps> = () => {
  // Get name propertyfrom the context which holds the selected name in DemoContext
  const { name } = useDemoContext();

  return (
    <div className="statusbar">
      <div className="statusbar-name">{name}</div>
    </div>
  );
}
