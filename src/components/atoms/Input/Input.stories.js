import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './Input';

storiesOf('Input', module)
  .add('Login', () => <Input placeholder="Login" />)
  .add('Search', () => <Input placeholder="search" search />);
