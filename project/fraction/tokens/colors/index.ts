import { colors } from "./light"
import { colorsDark } from "./dark"
import { createVariables, VariableScope } from "../utils/variables"

export type Color =
  | "border"
  | "borderHighlight"
  | "toolbarIcon"
  | "translucent"

  // Page
  | "pageBackground"
  | "pageColor"

  // Navigation
  | "navBackground"
  | "navBorder"
  | "navColor"

  // Button
  | "buttonBackground"
  | "buttonColor"
  | "buttonHoverBackground"
  | "buttonFocusOutline"
  | "buttonPrimaryBackground"
  | "buttonPrimaryColor"
  | "buttonPrimaryHoverBackground"
  | "buttonPrimaryFocusOutline"
  | "buttonSecondaryBackground"
  | "buttonSecondaryColor"
  | "buttonSecondaryHoverBackground"
  | "buttonSecondaryFocusOutline"
  | "buttonSuccessBackground"
  | "buttonSuccessColor"
  | "buttonSuccessHoverBackground"
  | "buttonSuccessFocusOutline"
  | "buttonDangerBackground"
  | "buttonDangerColor"
  | "buttonDangerHoverBackground"
  | "buttonDangerFocusOutline"
  | "buttonIconColor"
  | "buttonIconHoverColor"

  // Footer
  | "footerBackground"
  | "footerCookiesLink"
  | "footerCopyrightLink"
  | "footerIcon"
  | "footerIconHover"
  | "footerLink"

  // Input
  | "inputBackground"
  | "inputBackgroundTransparent"
  | "inputDisabledColor"
  | "inputHoverBackground"
  | "inputColor"
  | "inputPlaceholderColor"
  | "inputFocusBorder"
  | "inputDangerFocusBorder"
  | "inputDangerColor"

  // List
  | "listActiveBackground"
  | "listColor"
  | "listBorder"

  // Sheet
  | "sheetBackground"
  | "sheetColor"

  // Tint
  | "danger"
  | "dangerDark"
  | "primary"
  | "primaryColor"
  | "primaryDark"
  | "primaryLight"
  | "secondary"
  | "secondaryColor"
  | "secondaryDark"
  | "secondaryLight"
  | "success"
  | "successDark"
  | "tertiary"
  | "vibrant"

  // Search
  | "searchBackground"
  | "selection"
  | "selectionBackground"
  | "selectionBackgroundFaint"
  | "sidebarLink"

  // Text
  | "textHeadline"
  | "textBody"
  | "textDimmed"
  | "textLight"

  // Tooltip
  | "tooltipBackground"

  // Overlay
  | "overlayColor"

export type Colors = Record<Color, string>

export const [colorsVariables, colorsValues] = createVariables(
  colors,
  VariableScope.Color
)

export const [colorsVariablesDark, colorsValuesDark] = createVariables(
  colorsDark,
  VariableScope.Color
)

export * from "./light"
export * from "./dark"
export * from "./palette"
