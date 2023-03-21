import { Button } from './Button';
import { getMeta } from './metaFunction';

// This works 👇
// const meta = {
//   title: 'Example/Button',
//   component: Button,
//   tags: ['autodocs'],
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// };

// This doesn't 👇
const meta = getMeta('Button', Button);

export default meta;

export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    label: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
