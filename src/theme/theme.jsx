import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#534F69',
            contrastText: '#ffff',
        },
        background: {
            default: '#f5f5f5',
        },
        text: { primary: '#696969' },
    },
});

export default theme;