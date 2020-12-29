// import

import {findByText, fireEvent} from '@testing-library/dom';
import * as R from 'ramda';
import React, {useState, useCallback} from 'react';

import {GlobalStyles} from '../GlobalStyles';
import {arcadeTheme} from '../arcadeTheme';
import {ThemeProvider} from '../useTheme';

import {GlobalTypeStyles} from './GlobalTypeStyles';
import {Type} from './Type';
import {TypographyTest} from './TypographyTest';

// export

export default {
  title: 'Type',
  component: Type,
  argTypes: {
    useType: {control: 'boolean'},
  },
};

function Template(args) {
  const [theme, setTheme] = useState(arcadeTheme);
  const onClick = useCallback(() => setTheme((v) => (
    v.color.green === '#99ff99' ? arcadeTheme :
    R.mergeDeepRight(arcadeTheme, {color: {green: '#99ff99'}})
  )), []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <GlobalTypeStyles />

      <button className="button" type="button" onClick={onClick}>Toggle color</button>

      <Type {...args} />
    </ThemeProvider>
  );
}

export const Basic = Template.bind({});

Basic.args = {
  children: (<p>A <em>simple</em>, <strong>solid</strong> test case.</p>),
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
            fireEvent.click(container.querySelector('.button'));
            await findByText(container, 'Toggle color');
          },
        },
      ],
    },
  },
};

export const WithContent = Template.bind({});

WithContent.args = {
  children: (<TypographyTest />),
};

WithContent.story = {...Basic.story};

export const Buttons = Template.bind({});

Buttons.args = {
  children: (
    <>
      <h1>Buttons</h1>
      <h2>{'<input>'} Types</h2>

      <input type="button" value="button" />
      <input type="submit" value="submit" />
      <input type="reset" value="reset" />
      <input disabled type="button" value="disabled" />

      <h2>{'<button>'} Types</h2>

      <button type="button">button</button>
      <button type="submit">submit</button>
      <button type="reset">reset</button>
      <button disabled type="button">disabled</button>

      <h2>{'<button>'} Color Classes</h2>

      <button type="button">none</button>
      <button className="red" type="button">red</button>
      <button className="orange" type="button">orange</button>
      <button className="yellow" type="button">yellow</button>
      <button className="green" type="button">green</button>
      <button className="blue" type="button">blue</button>
      <button className="purple" type="button">purple</button>
      <button className="gray" type="button">gray</button>

      <h2>{'<a class="button">'} Color Classes</h2>

      <a className="button">none</a>
      <a className="button red">red</a>
      <a className="button orange">orange</a>
      <a className="button yellow">yellow</a>
      <a className="button green">green</a>
      <a className="button blue">blue</a>
      <a className="button purple">purple</a>
      <a className="button gray">gray</a>
    </>
  ),
};

Buttons.story = {...Basic.story};
