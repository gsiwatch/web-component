import { React } from 'react';
import { DemoComponent } from '../../../dist/collection/components/demo-component/demo.component';


export default {
  title: 'Demo/MyComponent',
  component: DemoComponent,
  argTypes: {
    label: { type: 'text', description: 'The text which is shown as label' },
    name: {
      type: 'text',
      description:
        'Is needed to reference the form data after the form is submitted',
    },
    disabled: {
      type: 'boolean',
      description: 'If true, the button is displayed as disabled',
    },
  },
};

const defaultArgs = {
  disabled: false,
};

const Template = args => {
  return <gs-demo {...args}></gs-demo>;
};

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
