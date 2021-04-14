// import

import {findByText, fireEvent} from '@testing-library/dom';
import React, {useState, useCallback} from 'react';

import {ThemeProvider} from '../useTheme';

import {GlobalStyles} from './GlobalStyles';

// export

export default {
  title: 'GlobalStyles',
  component: GlobalStyles,
  argTypes: {
    green: {control: 'color'},
  },
};

const Template = (args) => {
  const [overrides, setOverrides] = useState({});
  const onClick = useCallback(() => setOverrides((v) => (v.green ? {} : {green: '#99ff99'})), []);

  return (
    <ThemeProvider theme={{color: {...args, ...overrides}}}>
      <GlobalStyles />
      <div style={{padding: '3rem', background: 'var(--green)'}}>Test div.</div>
      <button className="button" type="button" onClick={onClick}>Toggle color</button>
    </ThemeProvider>
  );
};

export const Basic = Template.bind({});

Basic.args = {
  green: '#66ff00',
};

Basic.story = {
  parameters: {
    performance: {
      interactions: [
        {
          name: 'Update theme.color.green',
          async run({container}) {
            fireEvent.click(container.querySelector('.button'));
            await findByText(container, 'Toggle color');
          },
        },
      ],
    },
  },
};
