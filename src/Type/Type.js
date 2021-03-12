// import

import pt from 'prop-types';
import * as R from 'ramda';

// component

export function Type(props) {
  const {html, children, className, as: El = 'div', forwardRef, trim = true, ...rest} = props;

  const content = html ? {dangerouslySetInnerHTML: {__html: html}} :
    R.type(children) === 'String' ? {dangerouslySetInnerHTML: {__html: children}} :
    {children};

  const cls = [
    'Type',
    trim && trim !== 'end' && 'trimTop',
    trim && trim !== 'top' && 'trimEnd',
    className && className.trim(),
  ].filter(Boolean).join(' ');

  return (
    <El {...rest} ref={forwardRef} className={cls} {...content} />
  );
}

Type.propTypes = {
  as: pt.oneOfType([pt.string, pt.elementType]),
  children: pt.node,
  className: pt.string,
  forwardRef: pt.object,
  html: pt.string,
  trim: pt.oneOf([true, false, 'top', 'end']),
};
