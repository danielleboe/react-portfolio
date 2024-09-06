import { useState } from 'react';
import '../styles/contact.css'; // Importing styles 

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const [formErrors, setFormErrors] = useState({
//     name: false,
//     email: false,
//     message: false
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const validateForm = () => {
//     const errors = {
//       name: !formData.name,
//       email: !formData.email || !/\S+@\S+\.\S+/.test(formData.email),
//       message: !formData.message
//     };
//     setFormErrors(errors);
//     return !Object.values(errors).includes(true);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       // Handle form submission logic here
//       console.log('Form data:', formData);
//       // You might want to reset the form here
//     }
//   };

//   return (
//     <section>
//       <h2>Contact Me</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           {formErrors.name && <p className="error">Name is required</p>}
//         </div>

//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           {formErrors.email && <p className="error">Valid email is required</p>}
//         </div>

//         <div className="form-group">
//           <label htmlFor="message">Message:</label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           ></textarea>
//           {formErrors.message && <p className="error">Message is required</p>}
//         </div>

//         <button type="submit">Send</button>
//       </form>
//     </section>
//   );
// };

// export default Contact;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Invalid email format";
    }
    if (!formData.message) formErrors.message = "Message is required";
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert("There was an error sending the message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("There was an error sending the message.");
    }
  };

  return (
    <form onSubmit={handleSubmit} id="contactForm">
      <div className="field">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleChange}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>

      <div className="field">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleChange}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      <div className="field">
        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleChange}
        />
        {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
      </div>

      <button type="submit" id="messageButton">Send Message</button>
    </form>
  );
};

export default Contact;
