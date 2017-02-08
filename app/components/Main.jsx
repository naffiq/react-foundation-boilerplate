import React from 'react';

var Main = (props) => {
  return (
    <div>
      <div className="row">
        <div className="medium-8 large-6 small-centered columns">
          {props.children}
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
