import Drivers from "@/components/Drivers/Drivers";
import Feature from "@/components/Feature/Feature";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Passengers from "@/components/Passengers/Passengers";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Feature />
      <Drivers />
      <Passengers />
      <Footer/>
    </div>
  );
};

export default page;
