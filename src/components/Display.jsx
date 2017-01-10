import React, { PropTypes } from 'react';

const propTypes = {
  operator: PropTypes.string.isRequired,
  numStringOne: PropTypes.string.isRequired,
  numStringTwo: PropTypes.string.isRequired,
};

const Display = ({ operator, numStringOne, numStringTwo }) => (
  <div className="row display">
    <div className="col-xs-2 text-left">
      <p> {!operator.length ? 'c' : operator } </p>
    </div>
    <div className="col-xs-10 text-right">
      <p> {!numStringTwo.length ? numStringOne : numStringTwo} </p>
    </div>
  </div>
);

Display.propTypes = propTypes;

export default Display;
