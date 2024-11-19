"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Boxes, Code, Palette, Zap } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGithub } from "react-icons/fa6";

export default function Component() {
  const router = useRouter();
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
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-950 relative">
      <header className="fixed top-0 px-4 py-6 bg-black w-full md:px-12 shadow-lg border-b z-50">
        <nav className="flex justify-between items-center w-full">
          <Link href="/" className="text-2xl font-bold">
            Percept UI
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/docs" className="font-medium hover:underline">
              Docs
            </Link>
            <Link href="/components" className="font-medium hover:underline">
              Framer Components
            </Link>
            <Link href="/templates" className="font-medium hover:underline">
              Templates
            </Link>
            <Link
              href="https://github.com/perceptui/ui"
              className="text-sm font-medium hover:underline"
            >
              <FaGithub className="h-6 w-6" />
            </Link>
          </div>
        </nav>
      </header>

      <main className="mx-auto px-4 max-w-[1200px]">
        <motion.section
          className="text-center pt-40 py-20"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            variants={fadeIn}
          >
            Build Beautiful UIs <span className="text-primary">Faster</span>
          </motion.h1>
          <motion.p
            className="text-xl mb-8 text-muted-foreground"
            variants={fadeIn}
          >
            A modern, customizable, and accessible component library for React
            applications
          </motion.p>
          <motion.div
            className="flex items-center justify-center gap-4 sm:flex-row flex-col w-full z-40"
            variants={fadeIn}
          >
            <Button
              className="sm:w-auto w-full z-40"
              size="lg"
              onClick={() => router.push("/docs")}
            >
              Get Started With Docs
            </Button>
            <Button
              className="sm:w-auto w-full z-40"
              size="lg"
              variant="outline"
              onClick={() => router.push("/framer")}
            >
              View Components
            </Button>
          </motion.div>
        </motion.section>
        <motion.section
          initial="initial"
          animate="animate"
          variants={stagger}
          className="z-40 mb-6"
        >
          <motion.div
            className="flex flex-col gap-4 mx-auto md:max-w-[700px] p-4 border"
            variants={fadeIn}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-center">
              New Updates
            </h1>
            <div className="z-40 flex items-center justify-between border-l-4 px-5 py-2 rounded-sm bg-zinc-950 border gap-3 relative">
              <div className="flex justify-between items-center w-full">
                <h1 className="text-xl font-bold">Input</h1>
              </div>
              <motion.div className=" self-end" variants={fadeIn}>
                <Button disabled size="sm" variant="link" className="mr-4">
                  Coming Soon {"> >"}
                </Button>
              </motion.div>
            </div>
            <div className="z-40 flex items-center justify-between border-l-4 px-5 py-2 rounded-sm bg-zinc-950 border gap-3 relative">
              <div className="flex justify-between items-center w-full">
                <h1 className="text-xl font-bold">Avatar</h1>
              </div>
              <motion.div className=" self-end" variants={fadeIn}>
                <Button
                  size="sm"
                  variant="link"
                  className="mr-4"
                  onClick={() => router.push("/docs/components/avatar")}
                >
                  Go To Avatar {">>"}
                </Button>
              </motion.div>
            </div>
            <div className="z-40 flex items-center justify-between border-l-4 px-5 py-2 rounded-sm bg-zinc-950 border gap-3 relative">
              <div className="flex justify-between items-center w-full">
                <h1 className="text-xl font-bold">Button</h1>
              </div>
              <motion.div className=" self-end" variants={fadeIn}>
                <Button
                  size="sm"
                  variant="link"
                  className="mr-4"
                  onClick={() => router.push("/docs/components/button")}
                >
                  Go To Button {"> >"}
                </Button>
              </motion.div>
            </div>
            <div className="z-40 flex items-center justify-between border-l-4 px-5 py-2 rounded-sm bg-zinc-950 border gap-3 relative">
              <div className="flex justify-between items-center w-full">
                <h1 className="text-xl font-bold">Badge</h1>
              </div>
              <motion.div className=" self-end" variants={fadeIn}>
                <Button
                  size="sm"
                  variant="link"
                  className="mr-4"
                  onClick={() => router.push("/docs/components/badge")}
                >
                  Go To Badge {"> >"}
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>
        <motion.section
          initial="initial"
          animate="animate"
          variants={stagger}
          className="z-40"
        >
          <motion.div
            className="flex flex-col gap-4 mx-auto md:max-w-[700px] p-4 border"
            variants={fadeIn}
          >
            <div className="z-40 flex flex-col items-start justify-center border-l-4 p-5 rounded-sm bg-zinc-950 border gap-3">
              <div className="flex justify-between items-center w-full">
                <h1 className="text-xl font-bold">
                  Fully customizable components library
                </h1>
                <span className="bg-blue-600 text-xs p-1 rounded-xl px-3 font-bold animate-pulse hidden md:flex items-center justify-center">
                  Live now
                </span>
              </div>
              <p className="text-zinc-400 px-3 flex flex-col items-start justify-start">
                Our library comes with a wide range of components that are fully
                customizable to match your brand
                <span className="text-sky-600 border px-3 py-1 text-xs animate-pulse flex md:hidden items-center justify-center self-end border-sky-600 rounded-md mt-4">
                  Live Now
                </span>
              </p>
              <motion.div className="mt-3 self-end" variants={fadeIn}>
                <Button
                  size="lg"
                  className="mr-4"
                  onClick={() => router.push("/docs")}
                >
                  Go To Components {">>"}
                </Button>
              </motion.div>
            </div>
            <div className="z-40 flex flex-col items-start justify-center border-l-4 p-5 rounded-sm bg-zinc-950 border gap-3">
              <div className="flex justify-between items-center w-full">
                <h1 className="text-xl font-bold">
                  Templates for popular frameworks
                </h1>
                <span className="bg-red-600 text-xs p-1 rounded-xl px-3 font-bold animate-pulse hidden md:flex items-center justify-center">
                  Coming Soon
                </span>
              </div>
              <p className="text-zinc-400 px-3 flex flex-col items-start justify-start">
                We are working on templates that will help you get started with
                your project faster. Stay tuned!
                <span className="text-red-600 border px-3 py-1 text-xs animate-pulse flex md:hidden items-center justify-center self-end border-red-600 rounded-md mt-4">
                  Coming Soon
                </span>
              </p>
            </div>
            <div className="z-40 flex flex-col items-start justify-center border-l-4 p-5 rounded-sm bg-zinc-950 border gap-3">
              <div className="flex justify-between items-center w-full">
                <h1 className="text-xl font-bold">
                  Framer components for prototyping
                </h1>
                <span className="bg-red-600 text-xs p-1 rounded-xl px-3 font-bold animate-pulse hidden md:flex items-center justify-center">
                  Coming Soon
                </span>
              </div>
              <p className="text-zinc-400 px-3 flex flex-col items-start justify-start">
                We are working on components that will help you build beautiful
                prototypes with Framer. Stay tuned!
                <span className="text-red-600 border px-3 py-1 text-xs animate-pulse flex md:hidden items-center justify-center self-end border-red-600 rounded-md mt-4">
                  Coming Soon
                </span>
              </p>
            </div>
          </motion.div>
        </motion.section>
        <motion.section
          className="py-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2
            className="text-3xl font-bold mb-12 text-center"
            variants={fadeIn}
          >
            Why Choose Our UI Library?
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-12 ">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-zinc-950 z-40 p-6 rounded-lg shadow-lg border"
                variants={fadeIn}
              >
                {feature.icon}
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      <footer className="bg-zinc-950 py-6 mt-20">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground z-40">
          © {new Date().getFullYear()} Percept UI. All rights reserved.
        </div>
      </footer>
      <div className="fixed inset-0 h-full w-full bg-transparent bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-0"></div>
    </div>
  );
}

const features = [
  {
    icon: <Boxes className="h-10 w-10 mb-4 text-primary" />,
    title: "100+ Components",
    description: "A wide range of pre-built, customizable components",
  },
  {
    icon: <Palette className="h-10 w-10 mb-4 text-primary" />,
    title: "Themeable",
    description: "Easily customize to match your brand",
  },
  {
    icon: <Zap className="h-10 w-10 mb-4 text-primary" />,
    title: "Fast & Lightweight",
    description: "Optimized for performance and small bundle size",
  },
  {
    icon: <Code className="h-10 w-10 mb-4 text-primary" />,
    title: "Developer Friendly",
    description: "Well-documented with TypeScript support",
  },
];
