"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Boxes, Code, Palette, Zap } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Percept UI
          </Link>
          <div className="space-x-4">
            <Link href="/docs" className="text-sm font-medium hover:underline">
              Docs
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
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              View Components
            </Button>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
