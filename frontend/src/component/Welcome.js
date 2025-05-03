import { Grid, Typography } from "@material-ui/core";
import "../css/welcome.css";

const Welcome = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      className="welcome"

      style={{
        minHeight: "95vh",
        minWidth:"48vh",
        marginRight: "10px",
        paddingTop: "3rem",
        paddingLeft:"1rem",
        color: "",
        fontFamily:"serif",
        fontStyle:"italic",
     
      }}
    >
      <Grid item>
        <Typography variant="h3" style={{ textAlign: "center", paddingTop:"20px" , color:"maroon"}}>Welcome to JobHub...!</Typography>
      </Grid>
    </Grid>
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;