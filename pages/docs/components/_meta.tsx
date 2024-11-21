import { Title } from "@/components/title";

export default {
  "--": {
    type: "separator",
    title: "Components",
    theme: {
      footer: false,
    },
  },
  alert: { title: <Title title="Alert" /> },
  avatar: { title: <Title title="Avatar" /> },
  badge: { title: <Title title="Badge" /> },
  button: { title: <Title title="Button" /> },
  checkbox: { title: <Title isNew title="Checkbox" /> },
  input: { title: <Title title="Input" /> },
  label: { title: <Title title="Label" /> },
  radio: { title: <Title isNew title="Radio" /> },
  slider: { title: <Title isNew title="Slider" /> },
  spinner: { title: <Title isNew title="Spinner" /> },
};
