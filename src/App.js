// Importing necessary dependencies and components
import './App.css';
import Home from './pages/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Creating a custom MUI theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#fff', // Setting the main color for the primary palette
    },
  },
});

/**
 * App is the main component rendering the application.
 * It wraps the Home component within a ThemeProvider to apply the custom MUI theme.
 *
 * @returns {JSX.Element} - The main application component.
 */
function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Main application container */}
      <div className='App'>
        {/* Application header containing the Home component */}
        <header className='App-header'>
          <Home />
        </header>
      </div>
    </ThemeProvider>
  );
}

// Exporting the App component as the default export
export default App;
