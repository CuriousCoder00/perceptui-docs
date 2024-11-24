import { Boxes, Code, Palette, Zap } from "lucide-react";

export const componentsData = [
  {
    name: "Spinner",
    isNew: true,
  },
  {
    name: "Slider",
    isNew: true,
  },
  {
    name: "Radio",
    isNew: true,
  },
  {
    name: "Checkbox",
    isNew: true,
  },
  {
    name: "Alert",
    isNew: false,
  },
  {
    name: "Avatar",
    isNew: false,
  },
  {
    name: "Badge",
    isNew: false,
  },
  {
    name: "Button",
    isNew: false,
  },
  {
    name: "Input",
    isNew: false,
  },
  {
    name: "Label",
    isNew: false,
  },
];

export const features = [
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
