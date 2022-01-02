import Grid from "@mui/material/Grid";
import Carousel from "react-material-ui-carousel";
import Typography from "@mui/material/Typography";
import Creator from "./Pictures/NUStatsCreator.png";
import Phone from "./Pictures/NUStatsPhone.png";
import Poll from "./Pictures/NUStatsPoll.png";
import ProfilePic from "./Pictures/NUStatsProfile.png";
import ProfilePage from "./Pictures/NUStatsProfilePage.png";
import Results from "./Pictures/NUStatsResults.png";
import Sort from "./Pictures/NUStatsSort.png";

export default function ProjectExperience(props) {
  var items = [
    {
      desc: "Creating polls of varying number of options",
      picture: Creator,
    },
    {
      desc: "Phone interface",
      picture: Phone,
    },
    {
      desc: "Answering and liking polls",
      picture: Poll,
    },
    {
      desc: "Changing profile picture",
      picture: ProfilePic,
    },
    {
      desc: "Viewing other's profile page, followers and polls",
      picture: ProfilePage,
    },
    {
      desc: "Sorting, filtering and seeing poll results",
      picture: Results,
    },
    {
      desc: "Ways to sort the polls in the feed",
      picture: Sort,
    },
  ];
  return (
    <>
      <Grid item data-aos="fade-right" data-aos-duration="3000">
        <Typography
          variant="h3"
          style={{
            fontSize: "2rem",
            fontWeight: 500,
            fontFamily: `"Poppins"`,
            height: "5rem",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            color: "white",
          }}
        >
          Orbital (2021 May - Aug)
        </Typography>
      </Grid>
      <Grid container item direction="row" spacing={6}>
        <Grid item lg={6} container direction="column">
          <Grid item>
            <Carousel style={{ height: "100%" }}>
              {items.map((item, i) => (
                <Item key={i} item={item} />
              ))}
            </Carousel>
          </Grid>
        </Grid>
        <Grid lg={6} item container>
          <Typography
            variant="body2"
            style={{
              fontSize: "1.25rem",
              fontWeight: 400,
              fontFamily: `"Poppins"`,
              height: "5rem",
              color: "white",
              textAlign: "justify",
            }}
          >
            Orbital is a independent software development project where students
            pair up to create an application on their own. <br />
            <br /> I have learnt ReactJS, HTML, CSS, Javascript and Firebase for
            this and has come up with NUStats. <br />
            <br /> NUStats is a social media web application that allows users
            to gather information from their target audience through polls.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

function Item(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={props.item.picture}
        alt={props.item.desc}
        style={{ maxHeight: "20rem" }}
      />
      <p
        style={{
          fontSize: "1.25rem",
        }}
      >
        {props.item.desc}
      </p>
    </div>
  );
}
