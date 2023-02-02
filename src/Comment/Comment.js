import "./App.css";
import { useEffect, useState } from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Profile from "../Profile";

const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function App() {
  const [checkIn, setCheckIn] = useState();
  const [ckeckOut, setCheckOut] = useState();
  const [values, setValue] = useState();

  const [data, setData] = useState([]);
  const [formValidate, setFormValidate] = useState(false);
  const [state, setState] = useState({
    Name: "",
    Email: "",
    PassWord: "",
    confirmPassword: ""
  });
  const [validation, setValidation] = useState({
    Name: "",
    Email: "",
    PassWord: "",
    confirmPassword: ""
  });

  const handleCheckIn = (date) => {
    setCheckIn(date);
    setCheckOut(null);
  };

  const handleCheckOut = (date) => {
    setCheckOut(date);
  };

  useEffect(() => {
    var In = moment(checkIn);
    var Out = moment(ckeckOut);
    var DiffDate = values;
    DiffDate = Out.diff(In, "day");
    setValue(DiffDate);
  }, [checkIn, ckeckOut]);

  function handleChange(event) {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  }

  // function handleBlur(event) {
  //   const { name } = event.target;
  //   validateField(name);
  // }

  const handleSubmit = (e) => {
    // e.preventDefault();
    // setData([...data, state]);
    // setState({
    //   ...state,
    //   Name: "",
    //   Email: "",
    //   PassWord: "",
    //   confirmPassword: ""
    // });
    e.preventDefault();
    validateField()
    // let formFileds = ["Name", "Email"];
    // let isValid = true;
    // formFileds.forEach((field) => {
    //   isValid = validateField(field) && isValid;
    // });
    // if (isValid) setFormValidate(true);
    // else setFormValidate(false);

    return formValidate;
  };
  function validateField(name) {
    let formErrors = {};
    let formIsValid = true;
    if (!state.Name) {
      formIsValid = false;
      formErrors["Name"] = "Name is required.";
    }
    //first Name validation
    // if (!state.Name.trim()) {
    //   errors.Name = "First name is required";
    // } else {
    //   errors.Name = "";
    // }
    // if (name === "Name") isValid = validateFirstName();
    // else if (name === "Email") isValid = validateEmailAddress();
    // return isValid;
    setValidation(
     { ...validation,
      Name:formErrors.Name
    }
    );
  }

  // function validateFirstName() {
  //   let firstNameError = "";
  //   const value = state.Name;
  //   if (value === "") {
  //     firstNameError = "First Name is required";
  //     console.log(firstNameError);

  //     setValidation({
  //       ...validation,
  //       Name: firstNameError
  //     });
  //   }
  //   return firstNameError === "";
  // }

  // function validateEmailAddress() {
  //   let emailAddressError = "";
  //   const value = state.Email;
  //   if (value === "") emailAddressError = "Email Address is required";
  //   // else if (!emailValidator.test(value))
  //   //   emailAddressError = "Email is not valid";

  //   setValidation({
  //     ...validation,
  //     Email: emailAddressError
  //   });
  //   return emailAddressError === "";
  // }
  // useEffect(() => {
  //   // validateFirstName();s
  // }, []);
  return (
    <div>
      <div className="pickerDiv">
        <h3 style={{ textAlign: "center", color: "black", fontSize: "20px" }}>
          Please Select
        </h3>
        <div>
          <label>Check-In</label>
          <DatePicker
            selected={checkIn}
            minDate={new Date()}
            onChange={handleCheckIn}
          />
        </div>
        <div>
          <label>Check-Out</label>
          <DatePicker
            selected={ckeckOut}
            minDate={checkIn}
            onChange={handleCheckOut}
          />
        </div>
        <div className="userDiv">
          {!values == "" && <p>Hotel booked {values} Days</p>}
          {checkIn && ckeckOut && (
            <div className="summary">
              <p>
                You book a hotel from
                {moment(checkIn).format("LL")} to{" "}
                {moment(ckeckOut).format("LL")}.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="main">
        <h3>User-details</h3>
        {formValidate ? (
          <div className="details">
            <h3>Thanks for signing up, find your details below:</h3>
            <div>First Name: {state.Name}</div>
            <div>Email Address: {state.Email}</div>
            {/* <div>Email Address: {this.state.emailAddress}</div> */}
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="Name"
              onChange={(e) => handleChange(e)}
              value={state.Name}
            />
            <br />
            {validation.Name && (
              <div className="errorMsg">{validation.Name}</div>
            )}
            <input
              type="text"
              placeholder="Email Address"
              name="Email"
              value={state.Email}
              onChange={(e) => handleChange(e)}
            />
            <br />
            {validation.Email && (
              <div className="errorMsg">{validation.Email}</div>
            )}
            <input
              type="password"
              placeholder="PassWord"
              name="PassWord"
              value={state.PassWord}
              onChange={(e) => handleChange(e)}
            />
            <br />
            {validation.PassWord && (
              <div className="errorMsg">{validation.PassWord}</div>
            )}
            <input
              type="password"
              placeholder="Confirm Password"
              name="passwordConfirmation"
              value={state.confirmPassword}
              onChange={(e) => handleChange(e)}
            />
            <br />
            {validation.confirmPassword && (
              <div className="errorMsg">{validation.confirmPassword}</div>
            )}
            <button>Signup</button>
          </form>
        )}
      </div>
       <Profile/>
      <table></table>
    </div>
  );
}
