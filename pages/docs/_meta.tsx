import { Title } from "@/components/title";

export default {
  "--": {
    type: "separator",
    title: "Overview",
    theme: {
      footer: false,
    },
  },
  index: {
    title: "Getting started",
    theme: {
      footer: false,
    },
  },
  "---": {
    type: "separator",
    title: "Layouts",
    theme: {
      footer: false,
    },
  },
  "aspect-ratio": {
    title: <Title title="Aspect Ratio" isNew />,
    theme: {
      footer: false,
    },
  },
  flex: {
    title: <Title title="Flex" isNew />,
    theme: {
      footer: false,
    },
  },
  components: {
    title: "Components",
    theme: {
      footer: false,
    },
  },
  "hover-effects": {
    title: "Hover Effects",
    theme: {
      footer: false,
    },
  },
};
