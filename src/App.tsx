import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AuthRoutes from './authorization/AuthRoutes'
// import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF5733',
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#E0C2FF',
      light: '#F5EBFF',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#47008F',
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AuthRoutes></AuthRoutes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
