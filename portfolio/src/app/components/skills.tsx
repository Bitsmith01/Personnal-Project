"use client";
import React from "react";
import { motion } from "framer-motion";
import Skill from "./competence";
import js from "@/app/Image/JavaScript-logo.png";
import nxt from "@/app/Image/Rlogical-Blog-Images-thumbnail.webp"
import react from "@/app/Image/React_(web_framework)-Logo.wine.png"
import laravel from "@/app/Image/ab8b5ea6637ebd8e5755c838d952b8c1.jpg"
import vue from "@/app/Image/what-is-vue-3.png"
import php from "@/app/Image/php.png"
import sql from "@/app/Image/sql.png"
import mongo from "@/app/Image/MongoDB-Emblem.jpg"
import taill from "@/app/Image/Sans titre.png"
import html from "@/app/Image/images.png"
import css from "@/app/Image/css.jpeg"

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left xl-flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl-space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase md:tracking-[20px] tracking-[2px] text-gray-500 text-2xl md:mb-24 mb-24">
        SKILLS
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[0px] md:tracking-[3px] px-2 md:px-0 text-gray-500 text-sm">
        Hover Over a skill for Currency Proficiency
      </h3>

      <div className="grid grid-cols-4 gap-2">
        <Skill imageSrc={js} />
        <Skill imageSrc={nxt} />
        <Skill imageSrc={react} />
        <Skill imageSrc={laravel} />
        <Skill imageSrc={vue} />
        <Skill imageSrc={php} />
        <Skill imageSrc={sql} />
        <Skill imageSrc={mongo} />
        <Skill imageSrc={taill} />
        <Skill imageSrc={html} />
        <Skill imageSrc={css} />
      </div>
    </motion.div>
  );
}

export default Skills;
