import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import StyledChip from "./StyledChip";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import NUStats from "./NUStats";
import SweeBook from "./SweeBook";
import OurFoodChapter from "./OurFoodChapter";
import MailIcon from "@mui/icons-material/Mail";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";

function App() {
  const textStyle = {
    fontFamily: `"Poppins"`,
    fontSize: "4rem",
    fontWeight: 600,
  };
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
          <Grid container justifyContent="center" direction="column">
            <Grid container item xs={1} spacing={2} data-aos="fade-left">
              <Grid item xs={4} className="alignRight">
                <Typography variant="h1" style={textStyle}>
                  Hi, I'm
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h1" style={textStyle}>
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
                <Typography variant="h1" style={textStyle}>
                  a
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h1" className="yellow" style={textStyle}>
                  CS Student
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
                <Typography variant="h1" style={textStyle}>
                  and a
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h1" style={textStyle}>
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
              paddingTop: "10rem",
              paddingRight: "10rem",
            }}
            spacing={2}
          >
            {skills.map((skill) => (
              <StyledChip label={skill} key={skill} />
            ))}
          </Grid>
        </div>
        <div className="page3" data-aos="fade-left">
          <h1
            className="skillsHeader"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Project Experiences
          </h1>
          <Grid
            container
            style={{
              paddingTop: "10rem",
              paddingRight: "10rem",
            }}
            spacing={2}
          >
            <NUStats />
          </Grid>
        </div>
        <div className="page4" data-aos="fade-left">
          <Grid
            container
            style={{
              paddingTop: "10rem",
              paddingRight: "10rem",
            }}
            spacing={2}
          >
            <SweeBook />
          </Grid>
        </div>
        <div className="page4" data-aos="fade-left">
          <Grid
            container
            style={{
              paddingTop: "10rem",
              paddingRight: "10rem",
            }}
            spacing={2}
          >
            <OurFoodChapter />
          </Grid>
        </div>
        <div className="page5" data-aos="fade-left">
          <h1
            className="skillsHeader"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Contact Me
          </h1>
          <Grid
            container
            style={{
              paddingTop: "10rem",
              paddingRight: "10rem",
              fontSize: "3rem",
              paddingLeft: "0.8rem",
            }}
            spacing={2}
            direction="column"
          >
            <Grid
              container
              item
              direction="row"
              spacing={3}
              style={{ fontSize: "2.5rem" }}
            >
              <Grid item>
                <MailIcon style={{ transform: "scale(2)" }} />
              </Grid>
              <Grid item>
                <div>
                  <a
                    href="mailto:tanzhenxuan@gmail.com"
                    className="link"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    tanzhenxuan@gmail.com
                  </a>
                </div>
              </Grid>
            </Grid>
            <Grid
              container
              item
              direction="row"
              spacing={3}
              style={{ fontSize: "2.5rem" }}
            >
              <Grid item>
                <TelegramIcon style={{ transform: "scale(2)" }} />
              </Grid>
              <Grid item>
                <div>
                  <a
                    href="https://t.me/zhenxuant"
                    className="link"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    zhenxuant
                  </a>
                </div>
              </Grid>
            </Grid>
            <Grid
              container
              item
              direction="row"
              spacing={3}
              style={{ fontSize: "2.5rem" }}
            >
              <Grid item>
                <GitHubIcon style={{ transform: "scale(2)" }} />
              </Grid>
              <Grid item>
                <div>
                  <a
                    href="https://github.com/zhenxuantan"
                    className="link"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    zhenxuantan
                  </a>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
