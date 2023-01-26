import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

import axios from "axios";



function Header() {
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
    <div>
      <Head>
        <title>Elevate Your Online Brand</title>

        <meta name="description" content="Elevate Your Online Brand" key="desc" />
        <meta property="og:title" content="Elevate Your Online Brand" />
        <meta
          property="og:description"
          content="Join over 100 subscribers getting top site themes
          for influencers straight to their inbox once a week."
        />
        <meta
          property="og:image"
          content="https://i.postimg.cc/RVmKrK2y/metapreview.jpg"
        />
      </Head>
   

      <nav className="flex items-center justify-between p-4">
        <Link legacyBehavior href="/">
        <div className="cursor-pointer">
            <Image src='/logo.png' alt='logo' className="h-100" width={100} height={100}/>
        </div>
        </Link>
           
        <form onSubmit={handleSubmit}>
          <div className="flex gap-5">
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
      </nav>
    </div>
  );
}

export default Header;