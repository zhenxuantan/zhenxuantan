import "./ProjectExperience.css";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Link(props) {
  return (
    <div className="page" data-aos="fade-left">
      {props.first ? (
        <Typography
          variant="text"
          className="mainTitle"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Project Experiences
        </Typography>
      ) : null}
      <Grid container spacing={2}>
        <Grid item data-aos="fade-right" data-aos-duration="2000">
          <Typography variant="text" className="title">
            {props.title}
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
              <Carousel infiniteLoop autoPlay animationHandler={"fade"}>
                {props.items.map((item, i) => (
                  <Item key={i} item={item} />
                ))}
              </Carousel>
            </Grid>
          </Grid>
          <Grid lg={6} item container>
            <Typography variant="text" className="description">
              {props.description}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

function Item(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={props.item.picture}
        alt={props.item.desc}
        style={{ maxHeight: "50vmin" }}
      />
      <p className="legend">{props.item.desc}</p>
    </div>
  );
}
