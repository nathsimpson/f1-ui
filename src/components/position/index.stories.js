import React from 'react';

import { Position } from './index';

export default {
  component: Position,
  title: 'Components/Position',
}

const Template = (args) => <Position {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: '5',
};
