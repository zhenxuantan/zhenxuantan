import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import StyledChip from "./StyledChip";
import Link from "./Link";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { nusStats, sweeBook, ourFoodChapter } from "./Items";
import MailIcon from "@mui/icons-material/Mail";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import ProjectExperience from "./ProjectExperience";

function App() {
  const theme = createTheme({
    Chip: {
      label: {
        fontSize: "4rem",
      },
    },
  });
  const skills = [
    "Python",
    "C",
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "ReactJS",
    "VueJS",
    "JavaFX",
    "Firebase",
  ];

  AOS.init();
  return (
    <div className="App-body">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="page1">
          <Grid
            container
            justifyContent="center"
            direction="column"
            alignItems="center"
          >
            <Grid container item xs={1} spacing={2} data-aos="fade-left">
              <Grid item xs={4} className="alignRight">
                <Typography variant="text">Hi, I'm</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="text">
                  <span className="yellow">Zhen Xuan</span>,
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              item
              xs={1}
              spacing={2}
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <Grid item xs={4} className="alignRight">
                <Typography variant="text">a</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="text">
                  <span className="yellow">CS Student</span>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              item
              xs={1}
              spacing={2}
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              <Grid item xs={4} className="alignRight">
                <Typography variant="text">and a</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="text">
                  <span className="yellow">web developer</span>.
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={4} />
          </Grid>
        </div>
        <div className="page2" data-aos="fade-left">
          <h1
            className="skillsHeader"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Skills
          </h1>
          <Grid
            container
            style={{
              paddingTop: "5vmin",
              paddingRight: "5vmin",
            }}
            spacing={2}
          >
            {skills.map((skill) => (
              <StyledChip label={skill} key={skill} />
            ))}
          </Grid>
        </div>
        <ProjectExperience
          first={true}
          title="Our Food Chapter - Ourai (2021 Dec - Current)"
          items={ourFoodChapter}
          description={
            <>
              Ourai is a marketing tech (MarTech) web application by{" "}
              <span style={{ color: "#F4B841" }}>Our Food Chapter</span>.
              <br />
              <br />
              It helps F&B owners to churn out social media posts at just few
              clicks away. This allows them to save time and resources in
              pandemic-stricken Singapore.
              <br />
              <br /> For this project, I have learnt VueJS in one day and have
              brought knowledge about Firebase, Javascript, HTML and CSS that I
              have learnt from NUStats into the project.
            </>
          }
        />
        <ProjectExperience
          first={false}
          title="NUS Module - Software Engineering (2021 Sep - Nov)"
          items={sweeBook}
          description={
            <>
              CS2103T Software Engineering is a module taught in NUS where
              students are required to team up in groups of 5 to augment an
              existing brownfield project for the better while still keeping to
              the Command-Line Interface (CLI) requirement. <br />
              <br /> Weekly meetings are held between members and code
              collaborating via GitHub is heavily used. Tech stack used are Java
              and JavaFX. <br />
              <br /> Skills learnt includes different software design patterns,
              SDLC process models (agile processes like Scrum) and the usage of
              UML Diagrams.
            </>
          }
        />
        <ProjectExperience
          first={false}
          title="Orbital (2021 May - Aug)"
          items={nusStats}
          description={
            <>
              Orbital is a independent software development project where
              students pair up to create an application on their own. <br />
              <br /> I have learnt ReactJS, HTML, CSS, Javascript and Firebase
              for this and has come up with NUStats. <br />
              <br /> NUStats is a social media web application that allows users
              to gather information from their target audience through polls.
            </>
          }
        />

        <div className="page5" data-aos="fade-left">
          <Grid container spacing={3} direction="column">
            <Grid item>
              <h1
                className="skillsHeader"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                Contact Me
              </h1>
            </Grid>
            <Link
              icon={<MailIcon style={{ height: "7vmin", width: "7vmin" }} />}
              link="mailto:tanzhenxuan@gmail.com"
              text="tanzhenxuan@gmail.com"
            />
            <Link
              icon={
                <TelegramIcon style={{ height: "7vmin", width: "7vmin" }} />
              }
              link="https://t.me/zhenxuant"
              text="zhenxuant"
            />
            <Link
              icon={<GitHubIcon style={{ height: "7vmin", width: "7vmin" }} />}
              link="https://github.com/zhenxuantan"
              text="zhenxuantan"
            />
          </Grid>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
