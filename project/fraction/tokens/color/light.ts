import { paletteTokens as palette } from "./palette"
import { transparent } from "../utils"
import { Color } from "."

export const colorTokens: Color = {
  primary: palette.blue,
  wireframe: transparent(palette.red, 0.08),
  overlay: palette.black50,
  border: palette.black05,
  page: palette.white,
  pageColor: palette.black,
  selection: transparent(palette.blueLight, 0.99),
  selectionFaint: transparent(palette.blueLight, 0.4),
  selectionColor: palette.white,
  navigation: palette.white,
  navigationBorder: palette.black05,
  navigationColor: palette.black,
  navigationHamburger: palette.black60,
  footerColor: palette.black80,
  footerHeadingColor: palette.black,
  footerSecondaryColor: palette.black60,
}
