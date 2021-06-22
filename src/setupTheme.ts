// import

import {setup} from 'goober';
import {prefix} from 'goober/prefixer';
import {shouldForwardProp as forward} from 'goober/should-forward-prop';
import {createElement} from 'react';

import {useTheme} from './useTheme/useTheme';

// export

export const forwardProps =
  forward((prop: string) => !prop.startsWith('$') && prop !== 'as');

export const setupTheme = () =>
  setup(createElement, prefix, useTheme, forwardProps);
