import { Button, Container, Grid } from '@mui/material';
// import {AppInit} from "./firebase/FirebaseConfig.ts";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./theme/BaseTheme";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import TabComponent from "./TabComponent/TabComponent.tsx";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
signInWithEmailAndPassword(auth, 'conancod3s@gmail.com', 'abc123')
    .then((userCredential) => {
        // Signed in
        console.log(userCredential.user)
        return userCredential.user
        // ...
    })
    .catch((error) => {
        console.log('Auth Error', error)
    });

function App() {
    const [theme, swapMode] = useState<boolean>(true)

    return (
        <ThemeProvider theme={theme ? lightTheme : darkTheme}>
            <CssBaseline />
            <Container
                maxWidth='xl'
                sx={{
                    p: 4,
                    height: '100vh'
                }}>
                <Grid container direction={'column'} sx={{ height: '100%', justifyContent: 'space-between' }}>
                    <Grid item xs={11} sm={11} md={11} lg={11} xl={11} sx={{
                        overflow: 'hidden'
                    }}>
                        <TabComponent />
                    </Grid>
                    <Grid item>
                        <Button
                            variant={'outlined'}
                            onClick={() => swapMode(!theme)}
                        >Swap!</Button>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    )
}

export default App
