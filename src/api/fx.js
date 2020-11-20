// export

export const linear = ({theme: {fx}}, s = 0, d = 0) =>
  `${s * fx.speed}s linear ${d * fx.delay}s`;

export const easeIn = ({theme: {fx}}, s = 0, d = 0) =>
  `${s * fx.speed}s ease-in ${d * fx.delay}s`;

export const easeOut = ({theme: {fx}}, s = 0, d = 0) =>
  `${s * fx.speed}s ease-out ${d * fx.delay}s`;

export const easeInOut = ({theme: {fx}}, s = 0, d = 0) =>
  `${s * fx.speed}s ease-in-out ${d * fx.delay}s`;

export const shadow = ({theme: {fx}}, b = 0, s = 0) =>
  `${b * fx.blur}rem ${s * fx.spread}rem`;

export const outset = ({theme: {fx}}, b = 0, s = 0) =>
  `0 0 ${b * fx.blur}rem ${s * fx.spread}rem`;

export const inset = ({theme: {fx}}, b = 0, s = 0) =>
  `inset 0 0 ${b * fx.blur}rem ${s * fx.spread}rem`;

export const outline = ({theme: {fx}}, b = 0, s = 0) =>
  `0 0 ${b * fx.blur}rem ${s * fx.spread}rem`;

