// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import * as React from "react";

export const NavBarButtonContext = React.createContext(
  "PLEASE_RENDER_INSIDE_PROVIDER"
);

export function useNavBarButton() {
  return React.useContext(NavBarButtonContext);
}

export default NavBarButtonContext;
/* prettier-ignore-end */
