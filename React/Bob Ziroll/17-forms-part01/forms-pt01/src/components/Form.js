import React from "react";

export default function Form() {
  let [formData, setFormData] = React.useState({
    fname: "",
    lname: "",
    email: "",
  });

  function handleChange(event) {
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target.value);
    setFormData((prev) => {
      return {
        ...prev,
        // ES6 Syntax here
        [event.target.name]: event.target.value,
      };
    });
  }

  console.log(formData);

  return (
    <div>
      <form className="my-form">
        <input
          type="text"
          onChange={handleChange}
          placeholder="First Name"
          //   Make this the same as the object property name
          name="fname"
        />
        <input
          type="text"
          onChange={handleChange}
          placeholder="Last Name"
          //   Make this the same as the object property name
          name="lname"
        />
        <input
          type="email"
          onChange={handleChange}
          placeholder="Email"
          //   Make this the same as the object property name
          name="email"
        />
      </form>
    </div>
  );
}
