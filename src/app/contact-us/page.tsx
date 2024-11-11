"use client";
import Header from "../components/header";
import React, { FormEvent } from 'react';
import Swal from 'sweetalert2';

const contact = () => {
  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "a9cb1dda-a89b-436c-b2b4-c8db7930fcda"); // Use env variables for sensitive data

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success"
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error: unknown) {
      console.error(error); // Log error for debugging
      Swal.fire({
        title: "Error!",
        text: "Something went wrong, please try again later.",
        icon: "error"
      });
    }
  };

  return (
    <div>
      <Header />
      <section className="contact02">
        <form onSubmit={onSubmit}>
          <h2>Contact Form</h2>
          <div className="input-box">
            <label>Full Name</label>
            <input
              type="text"
              className="field"
              placeholder="Enter your Name"
              name="name"
              required
            />
          </div>
          <div className="input-box">
            <label>Email Address</label>
            <input
              type="email"
              className="field"
              placeholder="Enter your Email"
              name="email"
              required
            />
          </div>
          <div className="input-box">
            <label>Your Message</label>
            <textarea
              name="message"
              className="field mess"
              placeholder="Write your message"
              required
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default contact;
