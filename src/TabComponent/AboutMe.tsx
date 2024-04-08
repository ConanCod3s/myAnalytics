import {Typography, Box, Container, Grid, List} from '@mui/material';

interface ExperienceType {
    position: string,
    startDate: string,
    endDate: string,
    primary: string,
    secondary: string
}

const experience: ExperienceType[] = [
    {
        position: "Software Engineer",
        startDate: "June 2022",
        endDate: "Present",
        primary: "Fully built out new applications based on React.js and Material UI framework.",
        secondary: "UI/UX Lead for a team that built out an AI/ML analytic capability with React.js to facilitate discovery, analysis, and correlation of enriched data. " +
            "While incorporating AWS capabilities to support web-based applications and utilizing Jenkins and Jest "+
            "we were able to accomplish continuous deployments and near-zero downtime. " +
            "This was accomplished by using Agile Application Development methodology which achieved rapid delivery and innovation in a robust DevSecOps environment."

    },
    {
        position: "Software Engineer",
        startDate: "August 2020",
        endDate: "June 2022",
        primary: "Deployed a Serverless React.js Application on AWS: Successfully launched a serverless React.js application, leveraging AWS Lambda, AWS RDS (PostgreSQL), and S3 hosting.",
        secondary: "Implemented a DevSecOps approach with a focus on fully automated testing and deployments, " +
            "while enhancing the application with a wide range of data visualizations, including time series analysis, charting, and grid analysis."

    },
    {
        position: "Software Engineer",
        startDate: "June 2019",
        endDate: "August 2020",
        primary: "Launched an Angular 8/JavaScript Workflow Tracking Application: Spearheaded the development and deployment.",
        secondary: "Set up and configured GitHub repositories to streamline code version control and AWS cloud environments for optimal performance"

    },
    {
        position: "Analyst/Special Projects Team",
        startDate: "January 2016",
        endDate: "June 2019",
        primary: "Responsible for the research and authentication of information pulled from multiple databases.",
        secondary: "Utilized expertise in VBA to create macros for spreadsheets to expedite workflow." +
            "Troubleshot and found unique solutions to attain information from datasets."
    },
    {
        position: "Remote Operations Center Subject Matter Expert",
        startDate: "November 2014",
        endDate: "January 2016",
        primary: "Responsible for analyzing and preparing reports based on information and intelligence collected.",
        secondary: "Utilized LINUX and operational GUIs to analyze signals while directing troubleshooting procedures on signal issues."
    },
    {
        position: "Remote Operations Center Shift Lead, US Army",
        startDate: "April 2014",
        endDate: "January 2016",
        primary: "Immediate supervisor responsible for training all new joint service members.",
        secondary: "Military expert in my work center for all Digital Network Intelligence systems and ensured that new operators met the standards and requirements."
    },
    {
        position: "US Army Signals Collection Analyst, US Army",
        startDate: "October 2013",
        endDate: "January 2016",
        primary: "Proficient in the detection, acquisition, location, and identification of foreign electronic intelligence.",
        secondary: "Overlooked intelligence analyst to ensure proper information processing." +
            "which drove mission success through the exploitation of voice and non-voice communications."
    }
];

const skills: string[] = [
    'Material UI'
    , `Java`
    , `Flutter`
    , `DART`
    , `SQL`
    , `JavaScript`
    , `Angular.js`
    , `Angular8`
    , `React.js`
    , `Redux`
    , `VBA`
    , `Bootstrap`
    , `Jest`
    , `Python`
    , `C#`
    , `Unity`
    , `GitHub`
    , `Agile`
    , `Firebase`
    , `AWS (S3, EC2, CloudWatch)`
    , `Jenkins`
]
const AboutMe = () => {
    return (
        <Container maxWidth="md">
            <Typography variant="h4" component="h1" gutterBottom>
                Joshua Cohen
            </Typography>
            <Box mt={3}>
                <Typography variant="body1">
                    A results-driven Software Engineer with experience in developing scalable web
                    applications, enhancing cloud infrastructure, and pioneering AI/ML analytic solutions. Proficient in
                    an array of programming languages and technologies, including React.js, Angular, AWS, and Python,
                    with a strong foundation in Agile methodologies and DevSecOps practices.
                </Typography>
            </Box>
            <Box mt={3}>
                <Typography variant="h6">Experience</Typography>
                {experience.map((obj: ExperienceType) => (
                    <Box sx={{p: 2}}>
                        <Grid container direction={'row'} sx={{justifyContent: 'space-between', paddingBottom: 1}}>
                            <Grid item>
                                <Typography>{obj.position}</Typography>
                            </Grid>
                            <Grid item>
                                <Typography>{`${obj.startDate} - ${obj.endDate}`}</Typography>
                            </Grid>
                        </Grid>
                        <Typography variant="body1" sx={{paddingLeft: 2}}>{obj.secondary}</Typography>
                    </Box>
                ))}
            </Box>
            <Box mt={3}>
                <List>
                    <Typography variant="h6">Education</Typography>
                    <Grid container sx={{justifyContent:'space-between'}}>
                        {[`Associates of Computer Science`, `University of Maryland Global Campus`].map((obj: string) => (
                            <Typography sx={{p:2}}>{obj}</Typography>
                        ))}
                    </Grid>
                </List>
                <Typography variant="body1"></Typography>
            </Box>
            <Box mt={3}>
                <List>
                    <Typography variant="h6">Skills</Typography>
                   <Grid container sx={{justifyContent:'space-around'}}>
                       {skills.map((obj: string) => (
                           <Typography sx={{p:2}}>{obj}</Typography>
                       ))}
                   </Grid>
                </List>

            </Box>
        </Container>
    );
};

export default AboutMe;
