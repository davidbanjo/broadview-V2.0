"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { binatec_hero, cac_hero, greenbelt_hero, mixfits_hero, sonivox_hero } from "../../assets/portfolioAssets/assets/assets";

function InfiniteScroll() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden fade-up">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
        pauseOnHover="true"
      />
    </div>
  );
}

export default InfiniteScroll

const testimonials = [
  {
    // quote:
    //   "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "GreenBelt Tree Care",
    title: "Website Design",
    url: greenbelt_hero
  },
  {
    // quote:
    //   "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "Binatec Agency",
    title: "Web Development",
    url: binatec_hero
  },
  {
    // quote: "All that we see or seem is but a dream within a dream.",
    name: "Canadian Adventure Charters",
    title: "UI/UX Design",
    url: cac_hero
  },
  {
    // quote:
    //   "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Sonivox",
    title: "Website Development",
    url: sonivox_hero
  },
  {
    // quote:
    //   "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Mixfits Tech Creations",
    title: "Website Development",
    url: mixfits_hero
  },
];
