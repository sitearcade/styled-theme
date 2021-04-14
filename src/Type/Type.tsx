// import

import type {ElementType, HTMLAttributes, PropsWithChildren, Ref} from 'react';

// types

type Props = PropsWithChildren<{
  html?: string;
  className?: string;
  as?: ElementType;
  forwardRef?: Ref<Element>;
  trim?: boolean | 'top' | 'end';
}> & HTMLAttributes<HTMLElement>;

// component

export function Type(props: Props) {
  const {
    html, children, className, forwardRef,
    as: El = 'div', trim = true,
    ...rest
  } = props;

  const content = html ?
    {dangerouslySetInnerHTML: {__html: html}} :
    typeof children === 'string' ?
      {dangerouslySetInnerHTML: {__html: children}} :
      {children};

  return (
    <El
      {...rest}
      ref={forwardRef}
      className={[
        'Type',
        trim && trim !== 'end' && 'trimTop',
        trim && trim !== 'top' && 'trimEnd',
        className?.trim(),
      ].filter(Boolean).join(' ')}
      {...content}
    />
  );
}
