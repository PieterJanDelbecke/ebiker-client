import { Global, css } from "@emotion/react";
import reset from "./reset";

export default () => (
  <Global
    styles={css`
      /* ${reset} */
      margin: 0px;
    `}
  />
);
