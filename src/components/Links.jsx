import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { url: '/search', text: '🔎All' },
  { url: '/news', text: '📰News' },
  { url: '/images', text: '📸Images' },
  { url: '/videos', text: '📺Videos' },
];

export const Links = () => (
  <div className="flex justify-center items-center">
    {links.map(({ url, text }) => (
      <div className="text-blue-700 hover:border-blue-700 cursor-pointer hover:border-b-2 dark:text-blue-300  pb-2 md:px-5 lg:px-5 px-2 pt-2">{text}</div>
    ))}
  </div>
);