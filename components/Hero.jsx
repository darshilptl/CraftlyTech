"use client";
import React from "react";
import { HeroParallax } from "./ui/HeroParallax";
import { Navbar } from "./Navbar";

export function HeroParallaxDemo() {
  return<HeroParallax products={products} />;
}

export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "/images/WD_5.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
    "/images/AD_6.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
    "/images/WD_6.jpg",
  },
  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
    "/images/WD_10.jpg",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
    "/images/WD_12.jpg",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
    "/images/AD_7.jpg",
  },
  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
    "/images/WD_7.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
    "/images/WD_12.jpg",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "/images/WD_8.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
    "/images/WD_14.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
    "/images/2.jpg",
  },
  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
    "/images/AD_8.jpg",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
    "/images/WD_14.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
    "/images/WD_2.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
    "/images/GD_3.jpg",
  },
];
