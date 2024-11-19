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
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <header className="px-4 py-6 bg-black w-full md:px-12 shadow-lg border-b">
        <nav className="flex justify-between items-center w-full">
          <Link href="/" className="text-2xl font-bold">
            Percept UI
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/docs" className="font-medium hover:underline">
              Docs
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

      <main className="container mx-auto px-4">
        <motion.section
          className="py-20 text-center"
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
          <motion.div variants={fadeIn}>
            <Button
              size="lg"
              className="mr-4"
              onClick={() => router.push("/docs")}
            >
              Get Started With Docs
            </Button>
            <Button size="lg" variant="outline">
              View Components
            </Button>
          </motion.div>
        </motion.section>
        <motion.section initial="initial" animate="animate" variants={stagger}>
          <motion.div
            className="flex flex-col gap-4 mx-auto md:max-w-[700px] p-4 border"
            variants={fadeIn}
          >
            <div className="flex flex-col items-start justify-center border-l-4 p-2 rounded-sm bg-slate-900">
              <div className="flex justify-between items-center w-full">
                <h1 className="text-xl font-bold">
                  Fully customizable components library
                </h1>
                <span className="bg-blue-600 text-xs p-1 rounded-xl px-3 font-bold animate-pulse">
                  Live now
                </span>
              </div>
              <p className="text-slate-400">
                Our library comes with a wide range of components that are fully
                customizable to match your brand
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
            <div className="flex flex-col items-start justify-center border-l-4 p-2 rounded-sm bg-slate-900">
              <div className="flex justify-between items-center w-full">
                <h1 className="text-xl font-bold">
                  Templates for popular frameworks
                </h1>
                <span className="bg-red-600 text-xs p-1 rounded-xl px-3 font-bold animate-pulse">
                  Coming soon
                </span>
              </div>
              <p className="text-slate-400">
                We are working on templates that will help you get started with
                your project faster. Stay tuned!
              </p>
            </div>
            <div className="flex flex-col items-start justify-center border-l-4 p-2 rounded-sm bg-slate-900">
              <div className="flex justify-between items-center w-full">
                <h1 className="text-xl font-bold">
                  Framer components for prototyping
                </h1>
                <span className="bg-red-600 text-xs p-1 rounded-xl px-3 font-bold animate-pulse">
                  Coming soon
                </span>
              </div>
              <p className="text-slate-400">
                We are working on components that will help you build beautiful
                prototypes with Framer. Stay tuned!
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
            {[
              {
                icon: <Boxes className="h-10 w-10 mb-4 text-primary" />,
                title: "100+ Components",
                description:
                  "A wide range of pre-built, customizable components",
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
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-card p-6 rounded-lg shadow-lg"
                variants={fadeIn}
              >
                {feature.icon}
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="py-20 text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2 className="text-3xl font-bold mb-6" variants={fadeIn}>
            Ready to Get Started?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 text-muted-foreground"
            variants={fadeIn}
          >
            Join thousands of developers building amazing UIs with our library
          </motion.p>
        </motion.section>
      </main>

      <footer className="bg-muted py-6 mt-20">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Percept UI. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
