// import

import {render} from '@sitearcade/jest-preset/tools';
import React from 'react';

import {Type} from './Type';

// vars

const paraStr = '<p>test</p>';
const paraDom = <p>test</p>;

// test

describe('<Type>', () => {
  it('handles "html" prop, string "children", or standard "children"', () => {
    const {container: htmlStr} = render(<Type html={paraStr} />);

    expect(htmlStr.querySelector('p')).toHaveTextContent('test');

    const {container: childStr} = render(<Type>{paraStr}</Type>);

    expect(childStr.querySelector('p')).toHaveTextContent('test');

    const {container: childDom} = render(<Type>{paraDom}</Type>);

    expect(childDom.querySelector('p')).toHaveTextContent('test');
  });
});
