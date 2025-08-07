import type { Meta, StoryObj } from "@storybook/react";
import MyButton from "../components/MyButton";

const meta: Meta<typeof MyButton> = {
  title: "Components/MyButton",
  component: MyButton,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    primary: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof MyButton>;

export const Primary: Story = {
  args: {
    label: "Aceptar",
    primary: true,
  },
};

export const Secondary: Story = {
  args: {
    label: "Cancelar",
    primary: false,
  },
};
