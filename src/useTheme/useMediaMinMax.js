// import

import {useMediaMatch} from '@sitearcade/react-hooks';

import {useThemeApi} from './useTheme';

// export

export function useMediaMinMax(min, max) {
  return useMediaMatch(useThemeApi().media(min, max).replace('@media ', ''));
}
