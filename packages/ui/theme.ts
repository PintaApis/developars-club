import { extendTheme } from "@chakra-ui/react"

const customTheme = {
  colors: {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    gray: {
      50: '#f7fafc',
      900: '#171923',
    },
  },
};

export const theme = extendTheme(customTheme);