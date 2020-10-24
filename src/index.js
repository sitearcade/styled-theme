/* eslint-disable no-duplicate-imports */

// import

import {api, curryArgs} from './api';

// export

export default curryArgs(api);
export * from './api';
export * from './styled';
