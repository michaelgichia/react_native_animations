import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from './Button';
import CenterView from './CenterView';
import Welcome from './Welcome';
import {
  OpacityAnimations,
  TransformAnimations,
  ScaleAnimations,
  WidthHeightAnimations,
  AbsolutePosition,
  WidthHeightInterpolation,
} from './TimingAnimations';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <Button onPress={action('clicked-text')}>
      <Text>Hello Button</Text>
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ));

storiesOf('Timing animations', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('animating opacity', () => <OpacityAnimations />)
  .add('animating translateY', () => <TransformAnimations />)
  .add('animating scale', () => <ScaleAnimations />)
  .add('animating width and height', () => <WidthHeightAnimations />)
  .add('animating top, right, bottom and left', () => <AbsolutePosition />)
  .add('interpolating width and height', () => <WidthHeightInterpolation />);
