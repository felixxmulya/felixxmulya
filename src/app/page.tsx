"use client";
import React from "react";
import Header from "../components/header";
import About from "@/components/about";
import Skills from "@/components/skills";
import Jumbotron from "@/components/jumbotron";
import Experience from "@/components/experience";
import Project from "@/components/project";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

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
