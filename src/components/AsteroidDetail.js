//npm package
import React from "react";
import { useSelector } from "react-redux";

//material ui package
import { List, ListItem, ListItemText, Button } from "@material-ui/core";


//css modules
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "595px",
    background: "#2c6660",
    padding: " 1%",
    margin: "10%",
    marginLeft: "33%",
  },
  urlButton: {
    background: "white",
    /* padding: 1%; */
    paddingLeft: "56px",
    paddingRight: "48px",
    paddingTop: "13px",
    paddingBottom: "8px",
  },
  hazardousButton: {
    background: "white",
    /* padding: 1%; */
    paddingLeft: "26px",
    paddingRight: "38px",
    paddingTop: "13px",
    paddingBottom: "8px",
    textAlign: "left",
  },
  ButtonMain: {
    marginLeft: "216px",
  },
}));

// USerDeatils function start here---------

const AsteroidIdDetail = () => {
  const classes = useStyles();
  const details = useSelector((state) => {
    return state;
  });


  return (
    <List className={classes.root}>
      <h2>Asteroid Id</h2>
      
      <ListItem>
        <ListItemText>Id:</ListItemText>
        <ListItemText>{details.id}</ListItemText>
      </ListItem>

      <ListItem>
        <ListItemText>Name:</ListItemText>
        <ListItemText>{details.name}</ListItemText>
      </ListItem>

      <ListItem>
        <ListItemText>Nasa Jpl URL:</ListItemText>
        <ListItemText className={classes.ButtonMain}>
          <Button
            variant="contained"
            type="submit"
            className={classes.urlButton}
            onClick={() => window.open(`${details.nasa_jpl_url}`, "_blank")}
          >
            GO TO URL
          </Button>
        </ListItemText>
      </ListItem>

      <ListItem>
        <ListItemText>Is_potentially_hazardous_asteroid:</ListItemText>
        <ListItemText>
          {details.is_potentially_hazardous_asteroid ? (
            <Button variant="contained" className={classes.hazardousButton}>
              Hazardous
            </Button>
          ) : (
            <Button variant="contained" className={classes.hazardousButton}>
              Not Hazardous
            </Button>
          )}
        </ListItemText>
      </ListItem>

    </List>
  );
};
export default AsteroidIdDetail;
