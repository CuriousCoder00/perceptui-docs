"use client";

import { motion } from "framer-motion";
import ReleasedComponent from "@/components/released-component";
import { componentsData, features } from "@/lib/data";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Component() {
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
      <Header />
      <main className="mx-auto px-4 max-w-[1200px]">
        <motion.section
          className="text-center pt-40 py-10"
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
          <motion.p className="text-xl text-muted-foreground" variants={fadeIn}>
            A modern, customizable, and accessible component library for React
            applications
          </motion.p>
        </motion.section>
        <motion.section
          initial="initial"
          animate="animate"
          variants={stagger}
          className="z-40 my-5"
        >
          <motion.div
            className="flex flex-col gap-4 mx-auto md:max-w-[700px]"
            variants={fadeIn}
          >
            <ReleasedComponent
              isReleased
              name="Fully customizable components library"
              link="/docs/"
            />
            <ReleasedComponent
              isReleased={false}
              name="Templates for popular frameworks"
            />
            <ReleasedComponent
              isReleased={false}
              name="Framer components for prototyping"
            />
          </motion.div>
        </motion.section>
        <motion.section
          initial="initial"
          animate="animate"
          variants={stagger}
          className="z-40 mb-6"
        >
          <motion.div
            className="flex flex-col gap-4 mx-auto md:max-w-[700px]"
            variants={fadeIn}
          >
            <span className="text-slate-400">Components</span>
            {componentsData.map((component, index) => (
              <ReleasedComponent
                key={index}
                isComponent
                isNew={component.isNew}
                name={component.name}
              />
            ))}
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
      <Footer />
      <div className="fixed inset-0 h-full w-full bg-transparent bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-0"></div>
    </div>
  );
}
