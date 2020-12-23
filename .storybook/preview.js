// import

import { addDecorator } from '@storybook/react';
import { withPerformance } from 'storybook-addon-performance';
import {ThemeProvider} from '../src/useTheme';

// vars

const theme = {};

// config

addDecorator(withPerformance);

addDecorator((Story) => (
  <ThemeProvider theme={theme}>
    <Story />
  </ThemeProvider>
));

// export

export const parameters = {
  actions: { 
    argTypesRegex: '^on[A-Z].*',
  },
};
