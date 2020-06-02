import { createVariablesFromArray, Scope } from "../utils"

export const width: number[] = [
  0,
  300,
  400,
  500,
  600,
  700,
  800,
  900,
  1000,
  1200,
  1400,
]

export const [widthVariables, widthValues] = createVariablesFromArray(
  width,
  Scope.Width,
  (variable) => `${variable}px`
)
