import React from 'react';
import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

import UserInputSection from './userInput';
import PlayerNameSection from './playerNames';
import PlayeGamingOrderSection from './playerGamingOrder';
import StartGameSection from './startGame';

import 'antd/dist/antd.css';

const TimelineSection = () => {
  return (
    <Timeline mode="alternate" style={{ marginTop: '2rem' }}>
      <Timeline.Item>
        Welcome to Great Learning As India’s largest professional learning company and a global footprint in 140+ countries, we’re on a mission to make
        professionals and students around the globe proficient and future-ready. In the last 6 years, we have been able to deliver 30 million+ hours of learning
        to professionals world wide with thousands of them being able to achieve successful career progression in leading companies such as Microsoft, Amazon,
        Adobe, American Express, Deloitte, IBM, Accenture, McKinsey and more
      </Timeline.Item>
      <Timeline.Item color="green">
        <UserInputSection />
      </Timeline.Item>
      <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
        <PlayerNameSection />
      </Timeline.Item>
      <Timeline.Item color="red">
        <PlayeGamingOrderSection />
      </Timeline.Item>
      <Timeline.Item>
        <StartGameSection />
      </Timeline.Item>
      <Timeline.Item color="orange">
        The "Game of Dice" is a multiplayer game where N players roll a 6 faced dice in a round-robin fashion. Each time a player rolls the dice their points
        increase by the number (0 to 6) achieved by the roll.
      </Timeline.Item>
    </Timeline>
  );
};

export default TimelineSection;
