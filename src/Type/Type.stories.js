// import

import React from 'react';

import {GlobalBaseStyles, GlobalStyleVars} from '../GlobalStyles';
import {ThemeProvider} from '../useTheme';

import {GlobalTypeStyles} from './GlobalTypeStyles';
import {GlobalTypeVarStyles} from './GlobalTypeVarStyles';
import {Type} from './Type';

// export

export default {
  title: 'Type',
  component: Type,
  argTypes: {
    useVars: {control: 'boolean'},
  },
};

const Template = ({useVars}) => (
  <Type>
    <GlobalBaseStyles />
    <GlobalStyleVars />
    {useVars ? (<GlobalTypeVarStyles />) : (<GlobalTypeStyles />)}

    <h1>A Heading</h1>
    <p>A Paragraph.</p>
    <button className="blue">Go</button>
    <button className="red">Cancel</button>
  </Type>
);

export const Primary = Template.bind({});
Primary.args = {
  useVars: false,
};
