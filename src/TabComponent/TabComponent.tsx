import * as React from 'react';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import Box from '@mui/material/Box';
import { Paper } from "@mui/material";
import AboutMe from "./AboutMe.tsx";
import TrafficChart from "../graphs/TrafficChart.tsx";

function CustomTabPanel({ children, value, index }: {
    children?: React.ReactNode,
    index: number,
    value: number,
}) {

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
        >
            {value === index && (
                <Paper sx={{ p: 3, height: '100%' }}>
                    {children}
                </Paper>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function TabComponent() {
    const [value, setValue] = React.useState(0);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', height: '98%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="About Me" {...a11yProps(0)} />
                    <Tab label="Site Analytics" {...a11yProps(1)} />
                    <Tab label="¯\_(ツ)_/¯" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <Box sx={{ overflow: 'auto', height: '100%' }}>
                <CustomTabPanel value={value} index={0}>
                    <AboutMe />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <TrafficChart />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    ¯\_(ツ)_/¯
                </CustomTabPanel>
            </Box>
        </Box>
    );
}
