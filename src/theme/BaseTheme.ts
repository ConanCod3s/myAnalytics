import {createTheme} from "@mui/material";

const componentOverrides = {
    MuiTypography: {
        styleOverrides: {
            root: {
                fontWeight: 900,
            },
        },
    },
};

const BaseTheme = {
    typography: {
        fontSize: 16,
        fontWeight: 900,
        fontFamily: ["Inter", "serif"].join(","),
    },

};

const lightTheme = createTheme({
    ...BaseTheme,
    palette: {
        mode: "light",
        primary: {
            light: '#ffffff',  // White for light theme
            main: '#212529',   // Dark blue for light theme
            dark: '#000000',   // Black for light theme (can be adjusted)
        },
        secondary: {
            light: '#e0e0e0',  // Light gray for light theme
            main: '#808080',  // Gray for light theme
            dark: '#505050',  // Dark gray for light theme
        },

    },
    components: {
        ...componentOverrides,
    },
});

const darkTheme = createTheme({
    ...BaseTheme,
    palette: {
        mode: "dark",
        primary: {
            light: '#212529',   // Dark blue for dark theme
            main: '#ffffff',  // White for dark theme
            dark: '#000000',   // Black for dark theme
        },
        secondary: {
            light: '#505050',  // Dark gray for dark theme
            main: '#808080',  // Gray for dark theme
            dark: '#e0e0e0',  // Light gray for dark theme
        },
    },
    components: {
        ...componentOverrides,
    },
});

export {lightTheme, darkTheme};
