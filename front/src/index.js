import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createTheme, ThemeProvider} from "@mui/material";


const theme = createTheme({
        palette:{
            primary: {
                main: '#EEEEEE',
                contrastText : '#EEEEEE',
            },
            secondary: {
                main: '#1C658C',
            },

        }
    }

)


ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>, document.getElementById('root')
);

reportWebVitals();
