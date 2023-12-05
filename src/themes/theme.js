import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import { lime, purple } from '@mui/material/colors';


const theme = createTheme({
    palette: {
      primary: {
        main:"#12deda"
      },
      secondary:{ 
        main: "#170738"
      }
    },
});

export default theme;