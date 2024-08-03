import Drivers from "@/components/Drivers/Drivers";
import Feature from "@/components/Feature/Feature";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Feature />
      <Drivers />
    </div>
  );
};

export default page;
