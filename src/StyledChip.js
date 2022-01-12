import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";

export default function StyledChip(props) {
  return (
    <Grid item>
      <Chip
        style={{
          fontSize: "5vmin",
          fontFamily: "Poppins",
          fontWeight: 500,
          height: "10vmin",
          paddingTop: "1vmin",
          paddingBottom: "1vmin",
          backgroundColor: "rgba(242, 175, 41, 0.3)",
          color: "white",
        }}
        label={props.label}
        data-aos="fade-right"
        data-aos-duration="1000"
      />
    </Grid>
  );
}
