import React from 'react';

const About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">React Foundation Boilerplate</h1>
      <p>
        Includes:
      </p>
      <ul>
        <li>Webpack</li>
        <li>React router</li>
        <li>Foundation CSS framework</li>
        <li>Webpack SASS loader</li>
        <li>Tests with karma, mocha and expect</li>
      </ul>
      <p className="label">Made by naffiq for Udemy course</p>
    </div>
  );
};

export default About;
