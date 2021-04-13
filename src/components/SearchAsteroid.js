import React, { useEffect, useState } from "react";
//form validation with formik==================
// import { useFormik } from "formik";

//material ui components
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { Alert } from "@material-ui/lab";

//Router 
import { navigate } from "@reach/router";

//custom modules
import { AsteroidDetailsAction } from "../redux/Actions/ActionForConfirmId";
import { GetAllAsteroid } from "../redux/Actions/ActionForRandomId";

//css files
import "./style.css";

// ----------------------- form validation -----------------------
// const validate = (values) => {
//   const validationerrors = {};
//   if (!/^[0-9]{10}$/i.test(values.inputvalues)) {
//     validationerrors.inputvalues = "Please enter valid Astroid Id";
//   } else {
//     return null;
//   }
//   return validationerrors;
// };

// ----------------------- End form validation -----------------------

// Default Function start here --------
const SearchAsteroidDetails = () => {
  const [aestroid, setAestroid] = useState("");
  const [error, setError] = useState(false);
  const [errormsg, setErrormsg] = useState("");
  const [allAsteroids, setAllAsteroids] = useState([]);

  const dispatch = useDispatch();

  //------------------ form validation with formik ----------------------------
  // const formik = useFormik({
  //   initialValues: {
  //     inputvalues: "",
  //   },
  //   validate,
  //   onSubmit: (values) => {
  //     setTimeout(() => {
  //       console.log("input values", values);
  //       // {values}
  //     }, 500);
  //   },
  // });
  //------------------End form validation with formik ----------------------------

  //-----------------event handling for Aestroid ID with arrow function --------------
  // const aestroidChange = (e) => {
  //   setAestroid(e.target.value);
  //   // console.log(e.target.value)
  // };

  //---------- Getting Aestroid ID ( Auth Verification   ) ---------
  const submittingId = () => {
    if (aestroid !== "") {
      dispatch(AsteroidDetailsAction(aestroid))
        .then((res) => {
          console.log("submitting id by dispatch", res);
          //move on the dashboard(astroid details )=============
          navigate("/astroid-details");
        })
        .catch((e) => {
          // if( e.response.data.code === 404){
          //   setError(true);
          //   setErrormsg('Astroid Id not Found');
          // }else{
          //   setError(true);
          //   setErrormsg('Internal server error ');

          // }
          console.log("error---", e);
          setError(true);
          setErrormsg("Astroid Id not Found");
        });
    }
  };

  // -----------------get for all random id using hooks-------------------
  useEffect(() => {
    dispatch(GetAllAsteroid())
      .then((res) => {
        console.log("response -----", res);
        setAllAsteroids(res.near_earth_objects);
        // navigate("/astroid-details");
      })
      .catch((e) => {
        console.log("error msg ------", e);
        // setRandomastroid(e.response.data.error_message);
      });
  }, []);

  //-----------------allAsteroids mapping -------------------
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  const RandomID = async () => {
    const id = allAsteroids.map(({ id }) => id);
    console.log("RandomID id-----", id);
    const randomIndex = Math.ceil(
      Math.abs(getRandomArbitrary(0, id.length - 1))
    );
    console.log("randomIndex-----", randomIndex);
    dispatch(AsteroidDetailsAction(id[randomIndex]));
    navigate("/astroid-details");
  };

  //----------------- form valiation with formik--------------------

  return (
    <div style={{ paddingTop: "155px" }}>
      <div className="frame">
        <ul className="links">
          <li className="signin-active">
            <h5 className="btn headingTitle">Nasa Assignment 01</h5>
          </li>
        </ul>

        {/*======================== Form  ================== */}
        {/* <form onSubmit={formik.handleSubmit}> */}
        <div className="form-signin">
          <label htmlFor="astroidId">Astroid Id</label>
          <input
            className="form-styling"
            type="number"
            name="astroidId"
            placeholder="Please Enter Astroid Id"
            value={aestroid}
            // data={formik.values.mobileno}
            // onClick={formik.handleChange}
            // onBlur={formik.handleBlur}
            onChange={(e) => setAestroid(e.target.value)}
          />

          {/* ---------------- form validation -------------------- */}
          {/* {formik.touched.inputvalues && formik.errors.inputvalues ? (
              <div className="error">{formik.errors.inputvalues}</div>
            ) : null} */}

          {/*--------------------- authentication verification --------------- */}
          {error && (
            <Alert
              className="errormsg"
              severity="error"
              style={{ borderRadius: "99px", color: "red" }}
            >
              {errormsg}
            </Alert>
          )}

          {/* ====================== Submit Button ==================*/}
          <div className="btn-animate">
            <Button
              type="submit"
              color="primary"
              disabled={aestroid === "" || aestroid.length < 3}
              onClick={submittingId}
            >
              Submit
            </Button>
          </div>

          {/* ===================== Random Button ================ */}
          <div className="btn-animate">
            <Button type="submit" color="primary" onClick={RandomID}>
              Random
            </Button>
          </div>
        </div>
        {/* </form> */}
      </div>
    </div>
  );
};
export default SearchAsteroidDetails;
