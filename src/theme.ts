'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'light',
  },
  components: {
    // Example override
    // MuiAlert: {
    //   styleOverrides: {
    //     root: {
    //       variants: [
    //         {
    //           props: { severity: 'info' },
    //           style: {
    //             backgroundColor: '#60a5fa',
    //           },
    //         },
    //       ],
    //     },
    //   },
    // },
  },
});

export default theme;