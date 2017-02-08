import React from 'react';

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">React Foundation Boilerplate</h1>
      <p>
        Includes:
      </p>
      <ul>
        <li>React router</li>
        <li>Foundation CSS framework</li>
        <li>Webpack SASS loader</li>
      </ul>
      <p className="label">Made by naffiq for Udemy course</p>
    </div>
  );
};

module.exports = About;
