import "./Link.css";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Link(props) {
  return (
    <Grid
      container
      item
      direction="row"
      spacing={3}
      style={{ fontSize: "5vmin", padding: 0, margin: 0 }}
    >
      <Grid item>{props.icon}</Grid>
      <Grid item>
        <div>
          <a
            href={props.link}
            className="link"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Typography variant="text">{props.text}</Typography>
          </a>
        </div>
      </Grid>
    </Grid>
  );
}
