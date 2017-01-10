import React, { PropTypes } from 'react';

const propTypes = {
  equals: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
  appendChar: PropTypes.func.isRequired,
  setOperator: PropTypes.func.isRequired,
};

const ButtonPad = ({ equals, clear, appendChar, setOperator }) => (
  <div>
    <div className="row">
      <div className="col-xs-3">
        <button onClick={() => equals()}> = </button>
      </div>
      <div className="col-xs-3">
        <button onClick={() => clear()}> C </button>
      </div>
      <div className="col-xs-3">
        <button onClick={() => setOperator('+')}> + </button>
      </div>
      <div className="col-xs-3">
        <button onClick={() => setOperator('-')}> - </button>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-3">
        <button onClick={() => appendChar('1')}> 1 </button>
      </div>
      <div className="col-xs-3">
        <button onClick={() => appendChar('2')}> 2 </button>
      </div>
      <div className="col-xs-3">
        <button onClick={() => appendChar('3')}> 3 </button>
      </div>
      <div className="col-xs-3">
        <button onClick={() => setOperator('*')}> * </button>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-3">
        <button onClick={() => appendChar('4')}> 4 </button>
      </div>
      <div className="col-xs-3">
        <button onClick={() => appendChar('5')}> 5 </button>
      </div>
      <div className="col-xs-3">
        <button onClick={() => appendChar('6')}> 6 </button>
      </div>
      <div className="col-xs-3">
        <button onClick={() => setOperator('/')}> / </button>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-3">
        <button onClick={() => appendChar('7')}> 7 </button>
      </div>
      <div className="col-xs-3">
        <button onClick={() => appendChar('8')}> 8 </button>
      </div>
      <div className="col-xs-3">
        <button onClick={() => appendChar('9')}> 9 </button>
      </div>
      <div className="col-xs-3">
        <button onClick={() => setOperator('%')}> % </button>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-3">
        <button> (-) </button>
      </div>
      <div className="col-xs-3">
        <button onClick={() => appendChar('0')}> 0 </button>
      </div>
      <div className="col-xs-3">
        <button> poo </button>
      </div>
      <div className="col-xs-3">
        <button> poe </button>
      </div>
    </div>

  </div>
);

ButtonPad.propTypes = propTypes;

export default ButtonPad;
