import { createMuiTheme } from '@material-ui/core/styles'
import color from './color'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: color.primaryColor,
      light: color.lightPrimaryColor,
      // dark: color.backgroundColor,
      contrastText: color.white
    },
    secondary: {
      main: color.darkTextColor,
      light: color.lightPrimaryColor,
      dark: color.backgroundColor,
      contrastText: color.primaryColor
    },
    error: {
      main: color.errorColor,
      light: color.errorColor,
      dark: color.errorColor,
      contrastText: color.primaryColor
    }
  },
  typography: {
    useNextVariants: true,
    fontSize: 14,
    htmlFontSize: 16,
    fontFamily: [
      'sans-serif',
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  }
})

export default theme
