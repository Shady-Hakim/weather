import './App.css';
import Home from './pages/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff', // Change this color to your desired primary color
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <header className='App-header'>
          <Home />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
