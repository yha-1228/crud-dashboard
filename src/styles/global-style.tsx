import { Global } from '@emotion/react';
import { base } from './_base';
import { normalize } from './_normalize';
import { vars } from './_vars';

export function GlobalStyle() {
  return (
    <>
      <Global styles={normalize} />
      <Global styles={vars} />
      <Global styles={base} />
    </>
  );
}
