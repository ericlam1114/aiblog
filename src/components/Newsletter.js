import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

import axios from "axios";




function Newsletter() {
    const [formData, setFormData] = useState({});
  const [email, setEmail] = useState("");

  const handleInputChange = (event) => {
    setEmail(event.target.value);
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      // appendSpreadsheet(formData)
      // setEmail('');
      // console.log(email);

      const data = {
        Email: email,
      };

      axios
        .post(
          "https://sheet.best/api/sheets/d72fe0c5-266c-42ae-90d2-a70757956234",
          data
        )
        .then((response) => console.log(response));
      alert("email submitted successfully");
      setEmail("");
    } catch (err) {
      console.error(err);
      alert("Error subscribing. Please try again later.");
    }
  };
  return (
      <div >
              <h5 className='flex justify-center pb-2'>The Newsletter</h5>
      <form onSubmit={handleSubmit} >
  <div className="flex gap-5 justify-center mb-4">
    <input
      placeholder="Enter your email..."
      type="email"
      value={email}
      onChange={handleInputChange}
      className="border border-gray-200 rounded-xl focus:outline-none focus:shadow-xl shadow-sm px-4"
    />
    <button className="px-6 py-3 rounded-2xl hover:scale-95 duration-300 transition text-black-800 bg-yellow-500 hover:bg-yellow-900 shadow-xl font-medium">
      Subscribe{" "}
    </button>
  </div>
</form> 
</div>
);
}

export default Newsletter;