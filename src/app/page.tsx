"use client";
import React from "react";
import Header from "./components/header";
import About from "@/app/components/about";
import Skills from "@/app/components/skills";
import Jumbotron from "@/app/components/jumbotron";
import Experience from "@/app/components/experience";
import Project from "@/app/components/project";
import Contact from "@/app/components/contact";
import Footer from "@/app/components/footer";

export default function Home() {
  return (
    <div className="max-w-2xl md:max-w-6xl mx-auto">
      <Header/>
      <Jumbotron/>
      <About/>
      <Experience/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}
