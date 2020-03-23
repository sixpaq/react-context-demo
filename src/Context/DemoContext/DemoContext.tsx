import * as React from 'react';

import { IDemoContext } from './IDemoContext';
import { IDemoContextProps } from './IDemoContextProps';
import { IDemoContextState } from './IDemoContextState';

export const DemoContext = React.createContext<IDemoContext>({
  name: undefined,
  setName: () => {},
});

export class DemoContextProvider extends React.Component<IDemoContextProps, IDemoContextState> {
  constructor(props: IDemoContextProps) {
    super(props);

    this.state = {
      name: undefined,
    };

    this.setName = this.setName.bind(this);
  }

  setName(name: string) {
    this.setState({
      name,
    });
  }

  render() {
    const { name } = this.state;
    const { children } = this.props;

    return (
      <DemoContext.Provider
        value={{
          name: name,
          setName: this.setName,
        }}
      >
        {children}
      </DemoContext.Provider>
    );
  }
}

export const useDemoContext = () => {
  return React.useContext(DemoContext);
}
