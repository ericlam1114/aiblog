import React from "react";
import { useState } from "react";
import { BsFacebook, BsYoutube, BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import axios from "axios";
import Image from "next/image";


const Hero = () => {
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
    <div className=" container mx-auto h-screen flex flex-col md:flex-row md:-mt-20 justify-between items-center  ">
      <div className="flex flex-col gap-5 md:gap-0 lg:gap-5">
        <p className="text-lg font-medium bg-amber-100 text-yellow-700 uppercase px-3 flex justify-center rounded-3xl py-2 w-48">
          TOp 10 Themes
        </p>
        <p className="text-5xl md:lg:text-6xl font-bold">
        Themes That <br/>Elevate Brands{" "}
        </p>
        <p className="text-base">
          Join over 100 subscribers getting top <strong>site themes</strong> for
          personal <strong>brands</strong> straight to their inbox once a week.<br />
          
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-5">
            <input
              placeholder="Enter your email..."
              type="email"
              value={email}
              onChange={handleInputChange}
              className="border border-gray-200 rounded-xl focus:outline-none focus:shadow-xl shadow-sm px-4"
            />
            <button className="px-6 py-3 rounded-2xl hover:scale-95 duration-300 transition text-black-800 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 shadow-xl font-medium">
              Subscribe{" "}
            </button>
          </div>
        </form>
        <div className="flex gap-5">
          <a href="https://twitter.com/ericlamcrypto" target="_blank" rel="noreferrer">
            {" "}
            <BsTwitter className="text-4xl rounded-xl text-yellow-700 bg-amber-100 px-2 py-2 hover:scale-95 duration-300 transition cursor-pointer" />
          </a>
          {/* <RiInstagramFill className="text-4xl rounded-xl text-cyan-700 bg-cyan-100 px-2 py-2 hover:scale-95 duration-300 transition cursor-pointer"/> */}
          {/* <BsYoutube className="text-4xl rounded-xl text-cyan-700 bg-cyan-100 px-2 py-2 hover:scale-95 duration-300 transition cursor-pointer"/> */}
        </div>
      </div>
      <Image src="/headerimage.png" className="w-full max-w-sm lg:max-w-lg" alt="themes that elevate brands" width={500} height={500}/>
    </div>
  );
};

export default Hero;