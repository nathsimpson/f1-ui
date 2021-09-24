import React from 'react';

import { Totem } from './index';

export default {
  component: Totem,
  title: 'Components/Totem',
}

export const Primary = () => <Totem>Sebastian Vettel</Totem>;


export const Group = () => (
<div>
  <Totem team="mclaren">RIC</Totem>
  <Totem team="alphatauri">GAS</Totem>
  <Totem team="redbull">VER</Totem>
  <Totem team="mercedes">RUS</Totem>
  <Totem team="ferrari">LEC</Totem>
</div>);
