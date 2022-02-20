import { useState, useEffect } from "react";


function Contact() {
  const initialValues = { name: "", email: "", txtArea:"", subject: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors,isSubmit]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Please enter name and minimum of 4 characters!";
    } else if(formValues.name.length < 4) {
        errors.name = "Please enter minimum 4 characters"
    }
    if (!values.txtArea) {
        errors.txtArea = "Please enter text!"
      } else if(formValues.txtArea.length < 12) {
          errors.txtArea = "Please enter minimum 12 characters"
      }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (formValues.subject === "") {
        errors.subject = "Please enter subject!";
      }
    return errors;
  };

  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="text-success">Signed in successfully</div>
      ) : (
        <pre></pre>
      )}

      <form onSubmit={handleSubmit} className="contact-form">
      <h1 className="pt-5 container-header">Contact Us</h1>
      <h3>Send us a message</h3>
        <div className="form-group pb-3">
            <input type="text" className="form-control" placeholder="Name" name="name" value={formValues.name} onChange={handleChange}/>
            <p className="text-danger">{formErrors.name}</p>
        </div>
        <div className="form-group pb-3">
            <input type="email" className="form-control" placeholder="Email" name="email" value={formValues.email} onChange={handleChange}/>
            <p className="text-danger">{formErrors.email}</p>
        </div>
        <div className="form-group pb-3">
            <select className="form-control select-placeholder" name="subject" value={formValues.subject} onChange={handleChange} >
                <option value="">Select a subject</option>
                <option value="general">General</option>
                <option value="accounts">Accounts</option>
                <option value="staff">Staff</option>
            </select>
            <p className="text-danger">{formErrors.subject}</p>
        </div>
        <div className="form-group pb-3">
            <textarea minLength="4" className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message" name="txtArea" value={formValues.txtArea} onChange={handleChange}></textarea>
            <p className="text-danger">{formErrors.txtArea}</p>
        </div>
        <button id="contact-send" className="fluid ui button btn btn-contact">Submit</button>
      </form>
    </div>
  );
}

export default Contact;