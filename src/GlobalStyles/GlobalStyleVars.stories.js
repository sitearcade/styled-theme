// import

import React from 'react';

import {ThemeProvider} from '../useTheme';

import {GlobalStyleVars} from './GlobalStyleVars';

// export

export default {
  title: 'GlobalStyleVars',
  component: GlobalStyleVars,
  argTypes: {
    green: {control: 'color'},
  },
};

const Template = (args) => (
  <ThemeProvider theme={{color: args}}>
    <GlobalStyleVars />
    <div style={{padding: '3rem', background: 'var(--green)'}}>Test div.</div>
  </ThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  green: '#66ff00',
};
