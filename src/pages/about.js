import React from "react";
import creatorImage from "../../public/mark.png";
import Image from "next/image";


function About() {
    const creatorName = "Mark"
  return (
    <>
    <section className="py-16 ">
  <div className="container mx-auto flex flex-wrap items-center">
    <div className="w-full md:w-1/2">
      <Image width={500} height={500} src={creatorImage} alt="Creator" className="rounded-full h-100 w-100 object-cover mx-auto md:mx-0 md:mr-6" />
    </div>
    <div className="w-full md:w-1/2">
      <h3 className="text-3xl font-bold mb-2 text-gray-800">About the Creator</h3>
      <p className="mb-4 text-gray-800">{creatorName} is a highly experienced web developer and designer with a passion for creating beautiful, user-friendly websites. He has a degree in computer science and over 5 years of professional experience in the industry.</p>
      <p className="mb-4 text-gray-800">{creatorName} has worked with a variety of clients and industries, and has a proven track record of delivering successful projects on time and within budget. He is skilled in several programming languages including HTML, CSS, JavaScript, and more.</p>
      <p className="mb-4 text-gray-800">{creatorName} is dedicated to staying up to date with the latest web development trends and technologies, and is constantly seeking out new ways to improve his skills and deliver the best possible results for his clients.</p>
    </div>
  </div>
</section>


    </>
  );
}



export default About;
