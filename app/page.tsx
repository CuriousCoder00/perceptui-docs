"use client";

import { motion } from "framer-motion";
import ReleasedComponent from "@/components/released-component";
import { componentsData, features } from "@/lib/data";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ScrollArea } from "@/components/ui/scroll-area";
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
    <div className="min-h-screen bg-zinc-950 relative overflow-hidden z-[1000]">
      <Header />
      <div className="flex flex-col items-center justify-center px-5 min-h-dvh opacity-100 ">
        <motion.div
          variants={stagger}
          className="absolute top-0 -right-60 bottom-0 -left-96 glare-image opacity-20 blur-md "
        />
        <motion.div
          initial={{ opacity: 0, y: -20, x: 60 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-1 -right-96 bottom-0 -left-48 bg-opacity-40 mix-blend-color-dodge blur-md light-rays animate-rays"
        />
        <main className="mx-auto px-4 max-w-[1200px] relative flex flex-col z-30 gap-10">
          <motion.section
            className="text-center pt-40 flex justify-center items-center flex-col"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 sm:text-5xl tracking-tight lg:text-6xl lg:w-[900px]  relative"
              variants={fadeIn}
            >
              Build Beautiful UIs <span className="text-primary">Faster</span>
              <span
                className="absolute inset-0 animate-glow bg-gradient-to-r from-blue-500/60 to-pink-500/60 blur-2xl"
                aria-hidden="true"
              ></span>
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground"
              variants={fadeIn}
            >
              A modern, customizable, and accessible component library for React
              applications
            </motion.p>
          </motion.section>
          <motion.section
            initial="initial"
            animate="animate"
            variants={stagger}
            className="z-40"
          >
            <motion.div
              className="flex flex-col gap-2 mx-auto md:max-w-[700px]"
              variants={fadeIn}
            >
              <ReleasedComponent
                isReleased
                name="Fully customizable components library"
                link="/docs/"
              />
              <ReleasedComponent
                isReleased
                link="/docs/hover-effects/getting-started"
                name="Hover Effects with Amazing Animations"
              />
              <ReleasedComponent
                isReleased
                link="/templates/"
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
              <div className="flex items-center justify-between">
                <span className="text-slate-400 font-bold">Components </span>
                <span className="text-slate-400 text-sm">
                  Total Components Released:{" "}
                  {componentsData.length -
                    componentsData.filter((c) => c.isReleased === false).length}
                </span>
              </div>
              <ScrollArea className="max-h-48 overflow-y-auto z-10 flex flex-col gap-4 px-2">
                {componentsData.map((component, index) => (
                  <ReleasedComponent
                    key={index}
                    isReleased={component.isReleased}
                    isComponent={!component.isComponent}
                    isNew={component.isNew}
                    name={component.name}
                  />
                ))}
              </ScrollArea>
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
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </main>
      </div>

      <Footer />
    </div>
  );
}
