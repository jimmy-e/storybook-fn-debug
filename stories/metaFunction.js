export const getMeta = (title, component) => ({
  title: `Example/${title}`,
  component: component,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
});
