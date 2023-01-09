import { Global } from '@emotion/react';
import { baseStyle } from './_base';
import { normalizeStyle } from './_normalize';
import { themeStyle } from './_theme';

export function GlobalStyle() {
  return (
    <>
      <Global styles={normalizeStyle} />
      <Global styles={themeStyle} />
      <Global styles={baseStyle} />
    </>
  );
}
