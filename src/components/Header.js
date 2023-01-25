import React from "react";
import Head from "next/head";
import Link from "next/link";



function Header() {
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
   

      <nav className="flex items-center justify-between bg-black p-4">
        <div>
            <img src='/logo.png' alt='logo' className="h-8" />
        </div>
        <Link legacyBehavior href="/">
            <a className="font-bold text-blue">Home</a>
        </Link>
      </nav>
    </div>
  );
}

export default Header;