import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    contact: "",
    email: "",
    mes: "",
  });

  const InputEvent = (e) => {
    const { name, value } = e.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `I Am ${data.fullname}.My Contact No Is ${data.contact} & Email is ${data.email},My Messages ${data.mess}`
    );
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center ">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Full Name :
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter Your Full Name ?"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Contact Number :
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="contact"
                  value={data.contact}
                  onChange={InputEvent}
                  placeholder="Enter Your Mobile Number"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Messages
                </label>
                <textarea
                  className="form-control"
                  rows="1"
                  name="mes"
                  value={data.mes}
                  onChange={InputEvent}
                  placeholder="Message Here"
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">
                  Submit Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
