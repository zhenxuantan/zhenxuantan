import Grid from "@mui/material/Grid";
import Carousel from "react-material-ui-carousel";
import Typography from "@mui/material/Typography";
import Find from "./Pictures/SweeBookFind.png";
import Sort from "./Pictures/SweeBookSort.png";
import Start from "./Pictures/SweeBookUI.png";

export default function ProjectExperience(props) {
  var items = [
    {
      desc: "User interface",
      picture: Start,
    },
    {
      desc: "Sorting tasks",
      picture: Sort,
    },
    {
      desc: "Finding contacts",
      picture: Find,
    },
  ];
  return (
    <>
      <Grid item data-aos="fade-right" data-aos-duration="2000">
        <Typography
          variant="h3"
          style={{
            fontSize: "2rem",
            fontWeight: 500,
            fontFamily: `"Poppins"`,
            height: "5rem",
            paddingBottom: "1rem",
            color: "white",
          }}
        >
          NUS Module - Software Engineering (2021 Sep - Nov)
        </Typography>
      </Grid>
      <Grid
        container
        item
        direction="row"
        spacing={6}
        data-aos="fade-right"
        data-aos-duration="3000"
      >
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
