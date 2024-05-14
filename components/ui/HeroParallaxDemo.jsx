import React from "react";
import { HeroParallax } from "./HeroParallax";
import { products } from "./hero-parallax-demo";
import Spotlight from "./Spotlight";

export function HeroParallaxDemo() {
  return<>
  <HeroParallax products={products}/>
  </> 
}
