import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import { Badge } from "./ui/badge";
const Hero = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <motion.section
      className="text-start flex justify-center items-start flex-col min-h-[90dvh] z-50 md:px-24 px-4 max-w-[900px] text-pretty gap-4"
      initial="initial"
      animate="animate"
      variants={stagger}
    >
      <motion.div variants={fadeIn} className="flex items-center mb-5">
        <Badge
          variant={"default"}
          className="bg-sky-600/30 text-sky-600 rounded-sm p-1 px-6 text-sm"
        >
          New Release
        </Badge>
      </motion.div>
      <motion.h1
        className="text-4xl md:text-6xl font-bold sm:text-5xl tracking-tight lg:text-6xl relative z-50"
        variants={fadeIn}
      >
        Build Beautiful UIs <span className="text-primary">Faster</span>
        <span
          className="absolute inset-0 animate-glow bg-gradient-to-r from-sky-500/70 to-purple-500/70 blur-2xl"
          aria-hidden="true"
        ></span>
      </motion.h1>
      <motion.p className="text-xl text-muted-foreground" variants={fadeIn}>
        A modern, customizable, and accessible component library for React
        applications. Packed with beautiful components and templates to help you
        build faster
      </motion.p>
      <motion.div
        variants={fadeIn}
        className="flex items-center justify-start w-full gap-4 z-50 mt-5"
      >
        <Button
          asChild
          className="rounded-sm bg-sky-600 hover:bg-sky-700 text-white text-base px-8 py-6"
        >
          <Link href="/docs/components/alert">Start Building</Link>
        </Button>
        <Button
          variant={"ghost"}
          className="rounded-sm border-2 text-sky-400 hover:text-sky-400 hover:bg-transparent cursor-text text-sm px-8 py-6 font-mono bg-sky-400/5"
        >
          {">"}_ {"  "}npm install @perceptui/ui
        </Button>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
