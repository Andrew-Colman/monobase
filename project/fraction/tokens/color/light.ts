import { palette } from "./palette"
import { rgba } from "../utils"
import { Color } from "."

export const color: Color = {
  border: palette.light54,
  borderHighlight: "rgba(0, 0, 0, 0.05)",
  buttonBackground: palette.light58,
  buttonColor: palette.black,
  buttonDangerBackground: palette.red,
  buttonDangerColor: palette.white,
  buttonDangerFocusOutline: "rgba(255, 255, 255, 0.06)",
  buttonDangerHoverBackground: palette.redDark,
  buttonFocusOutline: "rgba(0, 0, 0, 0.04)",
  buttonHoverBackground: palette.light62,
  buttonIconColor: palette.dark20,
  buttonIconHoverColor: palette.dark30,
  buttonPrimaryBackground: palette.blue,
  buttonPrimaryColor: palette.white,
  buttonPrimaryFocusOutline: "rgba(0, 0, 0, 0.04)",
  buttonPrimaryHoverBackground: palette.blueDark,
  buttonSecondaryBackground: palette.deepBlue,
  buttonSecondaryColor: palette.white,
  buttonSecondaryFocusOutline: "rgba(0, 0, 0, 0.04)",
  buttonSecondaryHoverBackground: palette.deepBlueDark,
  buttonSuccessBackground: palette.green,
  buttonSuccessColor: palette.white,
  buttonSuccessFocusOutline: "rgba(0, 0, 0, 0.04)",
  buttonSuccessHoverBackground: palette.greenDark,
  danger: palette.red,
  dangerDark: palette.redDark,
  footerBackground: palette.white,
  footerCookiesLink: palette.dark50,
  footerCopyrightLink: palette.dark40,
  footerIcon: palette.dark30,
  footerIconHover: palette.blue,
  footerLink: palette.dark80,
  inputBackground: palette.light58,
  inputBackgroundTransparent: rgba(palette.light58, 0),
  inputColor: palette.dark100,
  inputDangerColor: palette.red,
  inputDangerFocusBorder: palette.red,
  inputDisabledColor: palette.light80,
  inputFocusBorder: palette.blue,
  inputHoverBackground: palette.light56,
  inputPlaceholderColor: palette.light92,
  listActiveBackground: palette.light56,
  listBorder: palette.light52,
  listColor: palette.dark80,
  navigationBackground: palette.white,
  navigationBorder: "rgba(0, 0, 0, 0.05)",
  navigationColor: palette.dark100,
  navigationHamburger: palette.dark60,
  overlayColor: "rgba(0, 0, 0, 0.25)",
  pageBackground: palette.white,
  pageColor: palette.black,
  primary: palette.blue,
  primaryColor: palette.white,
  primaryDark: palette.blueDark,
  primaryLight: palette.blueLight,
  searchBackground: palette.dark100,
  secondary: palette.light58,
  secondaryColor: palette.dark70,
  secondaryDark: palette.light54,
  secondaryLight: palette.dark60,
  selection: palette.white,
  selectionBackground: "rgba(0, 170, 255, 0.99)",
  selectionBackgroundFaint: "rgba(0, 170, 255, 0.4)",
  sheetBackground: palette.white,
  sheetColor: palette.dark100,
  sidebarLink: palette.dark100,
  success: palette.green,
  successDark: palette.greenDark,
  tertiary: palette.purple,
  textBody: palette.dark100,
  textDimmed: palette.dark20,
  textHeadline: palette.black,
  textLight: palette.dark60,
  toolbarIcon: palette.light100,
  tooltipBackground: palette.light100,
  wireframe: rgba(palette.red, 0.08),
  translucent: "rgba(255, 255, 255, .6)",
  vibrant: "rgba(255, 255, 255, .9)",
}
