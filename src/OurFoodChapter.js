import Grid from "@mui/material/Grid";
import Carousel from "react-material-ui-carousel";
import Typography from "@mui/material/Typography";
import Basic from "./Pictures/OurFoodChapterDesign.png";
import Advanced from "./Pictures/OurFoodChapterAdvanced.png";

export default function ProjectExperience(props) {
  var items = [
    {
      desc: "Simple poster designing",
      picture: Basic,
    },
    {
      desc: "Advanced settings",
      picture: Advanced,
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
          NUS Social Impact Catalyst - OurAI (2021 Dec - Current)
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
            OurAI is a marketing tech (MarTech) web application by{" "}
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
