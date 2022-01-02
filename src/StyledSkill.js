import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import "./StyledSkill.css";

export default function StyledSkill(props) {
  return (
    <Grid item>
      <Chip
        style={{
          fontSize: "3rem",
          fontWeight: 500,
          fontFamily: `"Poppins"`,
          height: "5rem",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          backgroundColor: "rgba(242, 175, 41, 0.3)",
          color: "white",
        }}
        componentsProps={{ icon: { className: "icon" } }}
        icon={props.logo}
        label={props.label}
        data-aos="fade-right"
        data-aos-duration="1000"
      />
    </Grid>
  );
}
