import React from 'react';

export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  views: string;
  category: 'Review' | 'Lesson' | 'Cover' | 'Original';
  url: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: React.ReactNode;
}

export enum ThemeColor {
  PURPLE = 'purple',
  BLUE = 'blue',
  RED = 'red',
  PINK = 'pink'
}