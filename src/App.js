import logo from './logo.svg';
import './App.css';
import Map from './components/Map/Map';
import { Slidebar } from './components/SideBar/Sidebar';
import { createTheme } from './theme';
import {CssBaseline, ThemeProvider} from '@material-ui/core';
import axios from 'axios';
import {useState, useEffect} from 'react'
import { AppStateStore } from './state';
import WrappedMap from './NearbySearch';
import { apiKey } from './utils';
const theme = createTheme();

function App() {

  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    axios.get('/eventdata.json')
    .then(response => {
      setJsonData(response.data)
    }).catch(error => console.error('Error loading JSON data:', error));
    
  }, []);

  if (jsonData == null) {
    return <div>Loading JSON data...</div>;
  }

  return (
    <ThemeProvider theme={theme}>
      <AppStateStore jsonData={jsonData}>
        <CssBaseline>
          <div className="App">
              <Map/>
              <Slidebar/>
          </div>
        </CssBaseline>
      </AppStateStore>
    </ThemeProvider>
    
  );
}

export default App;
