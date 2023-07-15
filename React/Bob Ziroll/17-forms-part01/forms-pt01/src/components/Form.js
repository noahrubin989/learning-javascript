// youtu.be/bMknfKXIFA8?t=30958

import React from "react";

export default function Form() {
  let [formData, setFormData] = React.useState({
    fname: "",
    lname: "",
    email: "",
    comments: "",
    isFriendly: true,
    employmentStatus: "",
    favColor: "",
  });

  function handleChange(event) {
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target.value);
    setFormData((prev) => {
      let { name, value, type, checked } = event.target;
      return {
        ...prev,
        // ES6 Syntax here with the square brackets
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    // won't refresh and re-render app with all state defaults
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div>
      <form className="my-form" onSubmit={handleSubmit}>
        {/* ==================== Plain input ==================== */}
        <input
          type="text"
          onChange={handleChange}
          placeholder="First Name"
          //   Make this the same as the object property name
          name="fname"
          //   Best practice to set the value to current value of particular property
          //   Research "controlled components"
          value={formData.fname}
        />
        <input
          type="text"
          onChange={handleChange}
          placeholder="Last Name"
          //   Make this the same as the object property name
          name="lname"
          //   Best practice to set the value to current value of particular property
          //   Research "controlled components"
          value={formData.lname}
        />
        <input
          type="email"
          onChange={handleChange}
          placeholder="Email"
          //   Make this the same as the object property name
          name="email"
          //   Best practice to set the value to current value of particular property
          //   Research "controlled components"
          value={formData.email}
        />
        {/* ==================== Text area input ==================== */}
        <textarea
          onChange={handleChange}
          //   Make this the same as the object property name
          name="comments"
          value={formData.comments}
        />
        <br />
        {/* ==================== Checkbox    input ==================== */}
        <input
          type="checkbox"
          id="isFriendly"
          checked={formData.isFriendly}
          onChange={handleChange}
          name="isFriendly"
        />
        <label htmlFor="isFriendly">Are you friendly?</label>
        {/* ==================== Radio input ==================== */}
        <fieldset>
          {/* Setting the name to the name="employmentStatus" ensures only one option 
          is selected at a time AND so our state can change */}
          <legend>Current employment status</legend>
          <input
            type="radio"
            id="unemployed"
            name="employmentStatus"
            value="unemployed"
            checked={formData.employmentStatus === "unemployed"}
            onChange={handleChange}
          />
          <label htmlFor="unemployed">Unemployed</label>
          <br />
          <input
            type="radio"
            id="employed"
            name="employmentStatus"
            value="employed"
            checked={formData.employmentStatus === "employed"}
            onChange={handleChange}
          />
          <label htmlFor="employed">Employed</label>
          <br />
          <input
            type="radio"
            id="student"
            name="employmentStatus"
            value="student"
            checked={formData.employmentStatus === "student"}
            onChange={handleChange}
          />
          <label htmlFor="student">Student</label>
        </fieldset>
        {/* ==================== Select Box ==================== */}
        <select
          value={formData.favColor}
          onChange={handleChange}
          name="favColor"
          id="favColor"
        >
          {/* So that we have an option for a """ value */}
          <option value="">-- Choose --</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
        {/* ==================== Submit ==================== */}
        {/* The button element must be inside of the form to act as a submit button */}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
