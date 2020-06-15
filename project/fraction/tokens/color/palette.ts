import { createVariables, Scope } from "../utils"

export const paletteTokens: Record<string, string> = {
  transparent: "transparent",
  white: "hsl(0, 0%, 100%)",
  white95: "hsla(0, 0%, 100%, 0.95)",
  white90: "hsla(0, 0%, 100%, 0.9)",
  white80: "hsla(0, 0%, 100%, 0.8)",
  white70: "hsla(0, 0%, 100%, 0.7)",
  white60: "hsla(0, 0%, 100%, 0.6)",
  white50: "hsla(0, 0%, 100%, 0.5)",
  white40: "hsla(0, 0%, 100%, 0.4)",
  white30: "hsla(0, 0%, 100%, 0.3)",
  white20: "hsla(0, 0%, 100%, 0.2)",
  white15: "hsla(0, 0%, 100%, 0.15)",
  white12: "hsla(0, 0%, 100%, 0.12)",
  white10: "hsla(0, 0%, 100%, 0.1)",
  white07: "hsla(0, 0%, 100%, 0.07)",
  white05: "hsla(0, 0%, 100%, 0.05)",
  white02: "hsla(0, 0%, 100%, 0.02)",
  black: "hsl(0, 0%, 0%)",
  black95: "hsla(0, 0%, 0%, 0.95)",
  black90: "hsla(0, 0%, 0%, 0.9)",
  black80: "hsla(0, 0%, 0%, 0.8)",
  black70: "hsla(0, 0%, 0%, 0.7)",
  black60: "hsla(0, 0%, 0%, 0.6)",
  black50: "hsla(0, 0%, 0%, 0.5)",
  black40: "hsla(0, 0%, 0%, 0.4)",
  black30: "hsla(0, 0%, 0%, 0.3)",
  black20: "hsla(0, 0%, 0%, 0.2)",
  black15: "hsla(0, 0%, 0%, 0.15)",
  black12: "hsla(0, 0%, 0%, 0.12)",
  black10: "hsla(0, 0%, 0%, 0.1)",
  black07: "hsla(0, 0%, 0%, 0.07)",
  black05: "hsla(0, 0%, 0%, 0.05)",
  black02: "hsla(0, 0%, 0%, 0.02)",
  gray06: "hsl(0, 0%, 6%)",
  gray08: "hsl(0, 0%, 8%)",
  gray14: "hsl(0, 0%, 14%)",
  gray24: "hsl(0, 0%, 24%)",
  gray37: "hsl(0, 0%, 37%)",
  gray54: "hsl(0, 0%, 54%)",
  gray70: "hsl(0, 0%, 70%)",
  gray83: "hsl(0, 0%, 83%)",
  gray92: "hsl(0, 0%, 92%)",
  gray97: "hsl(0, 0%, 97%)",
  gray99: "hsl(0, 0%, 99%)",
  oceanLightest: "hsl(208, 100%, 90%)",
  oceanLighter: "hsl(212, 100%, 59%)",
  oceanLight: "hsl(214, 100%, 54%)",
  ocean: "hsl(216, 100%, 50%)",
  oceanDark: "hsl(218, 100%, 47%)",
  oceanDarker: "hsl(220, 100%, 43%)",
  oceanDarkest: "hsl(224, 100%, 18%)",
  blueLightest: "hsl(196, 100%, 90%)",
  blueLighter: "hsl(200, 100%, 59%)",
  blueLight: "hsl(202, 100%, 54%)",
  blue: "hsl(204, 100%, 50%)",
  blueDark: "hsl(206, 100%, 47%)",
  blueDarker: "hsl(208, 100%, 43%)",
  blueDarkest: "hsl(212, 100%, 20%)",
  skyLightest: "hsl(188, 100%, 89%)",
  skyLighter: "hsl(192, 100%, 59%)",
  skyLight: "hsl(194, 100%, 54%)",
  sky: "hsl(196, 100%, 50%)",
  skyDark: "hsl(198, 100%, 47%)",
  skyDarker: "hsl(200, 100%, 43%)",
  skyDarkest: "hsl(204, 100%, 20%)",
  tealLightest: "hsl(172, 73%, 88%)",
  tealLighter: "hsl(176, 88%, 64%)",
  tealLight: "hsl(178, 80%, 56%)",
  teal: "hsl(180, 73%, 50%)",
  tealDark: "hsl(182, 73%, 47%)",
  tealDarker: "hsl(184, 73%, 43%)",
  tealDarkest: "hsl(188, 73%, 18%)",
  greenLightest: "hsl(166, 80%, 88%)",
  greenLighter: "hsl(162, 76%, 58%)",
  greenLight: "hsl(161, 92%, 45%)",
  green: "hsl(160, 100%, 40%)",
  greenDark: "hsl(159, 100%, 37%)",
  greenDarker: "hsl(158, 100%, 33%)",
  greenDarkest: "hsl(152, 100%, 14%)",
  yellowLightest: "hsl(52, 100%, 88%)",
  yellowLighter: "hsl(48, 100%, 61%)",
  yellowLight: "hsl(46, 100%, 56%)",
  yellow: "hsl(44, 100%, 50%)",
  yellowDark: "hsl(42, 100%, 46%)",
  yellowDarker: "hsl(40, 100%, 42%)",
  yellowDarkest: "hsl(36, 100%, 20%)",
  orangeLightest: "hsl(41, 100%, 90%)",
  orangeLighter: "hsl(37, 100%, 61%)",
  orangeLight: "hsl(35, 100%, 56%)",
  orange: "hsl(33, 100%, 50%)",
  orangeDark: "hsl(31, 100%, 46%)",
  orangeDarker: "hsl(30, 100%, 42%)",
  orangeDarkest: "hsl(26, 100%, 20%)",
  redLightest: "hsl(337, 100%, 94%)",
  redLighter: "hsl(341, 100%, 71%)",
  redLight: "hsl(343, 100%, 66%)",
  red: "hsl(345, 100%, 60%)",
  redDark: "hsl(347, 82%, 54%)",
  redDarker: "hsl(349, 72%, 46%)",
  redDarkest: "hsl(353, 100%, 18%)",
  pinkLightest: "hsl(328, 100%, 94%)",
  pinkLighter: "hsl(332, 100%, 75%)",
  pinkLight: "hsl(334, 100%, 71%)",
  pink: "hsl(336, 100%, 67%)",
  pinkDark: "hsl(338, 80%, 60%)",
  pinkDarker: "hsl(338, 59%, 51%)",
  pinkDarkest: "hsl(346, 100%, 18%)",
  purpleLightest: "hsl(265, 100%, 94%)",
  purpleLighter: "hsl(260, 100%, 74%)",
  purpleLight: "hsl(259, 100%, 71%)",
  purple: "hsl(258, 100%, 67%)",
  purpleDark: "hsl(257, 80%, 60%)",
  purpleDarker: "hsl(256, 62%, 52%)",
  purpleDarkest: "hsl(252, 69%, 20%)",
}

export const [palette, paletteDeclarations] = createVariables(
  paletteTokens,
  Scope.Palette
)