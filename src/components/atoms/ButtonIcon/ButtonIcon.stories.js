import React from 'react';
import styled from 'styled-components';
import { storiesOf, addDecorator } from '@storybook/react';
import bulbIcon from 'assets/icons/bulb.svg';
import logOutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import plusIcon from 'assets/icons/plus.svg';
import ButtonIcon from './ButtonIcon';

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background-color: ${({ theme }) => theme.note};
`;

storiesOf('ButtonIcon', module)
  .addDecorator(story => <YellowBackground>{story()}</YellowBackground>)
  .add('Bulb_Button', () => <ButtonIcon icon={bulbIcon} />)
  .add('Bulb_Button_Active', () => <ButtonIcon icon={bulbIcon} active />)
  .add('LogOut_Button', () => <ButtonIcon icon={logOutIcon} />)
  .add('LogOut_Button_Active', () => <ButtonIcon icon={logOutIcon} active />)
  .add('Pen_Button', () => <ButtonIcon icon={penIcon} />)
  .add('Pen_Button_Active', () => <ButtonIcon icon={penIcon} active />)
  .add('Plus_Button', () => <ButtonIcon icon={plusIcon} />)
  .add('Plus_Button_Active', () => <ButtonIcon icon={plusIcon} active />)
  .add('Twitter_Button', () => <ButtonIcon icon={twitterIcon} />)
  .add('Twitter_Button_Active', () => <ButtonIcon icon={twitterIcon} active />);
