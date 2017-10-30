/* eslint-disable import/no-extraneous-dependencies,
   no-unused-expressions, react/jsx-filename-extension */
import { describe, it } from 'mocha';
import { should } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
// import { mapStateToProps } from '../src/containers/UserListContainer';
import calculatorReducer from '../src/reducer';
import {
  appendChar, APPEND_CHAR, clear, CLEAR, setOperator,
  SET_OPERATOR, equals, EQUALS
       } from '../src/actions';

should();

// Actions
describe('Actions', () => {
  it('should return appendChar action', () => {
    appendChar('1').should.be.deep.equal({
      type: APPEND_CHAR,
      char: '1',
    });
  });
  it('should create clear action', () => {
    clear().should.be.deep.equal({
      type: CLEAR,
    });
  });
  it('should create SET_OPERATOR action', () => {
    setOperator('+').should.be.deep.equal({
      type: SET_OPERATOR,
      operator: '+',
    });
  });
  it('should create EQUALS action', () => {
    equals().should.be.deep.equal({
      type: EQUALS,
    });
  });
});

const initialState = {
  stage: 'CLEARED',
  numStringOne: '0',
  numStringTwo: '',
  operator: '',
  err: '',
};

// Reducers
describe('Reducers', () => {
  describe('calculatorReducer', () => {
    it('should initialize empty', () => {
      calculatorReducer(undefined, 'INIT').should.be.deep.equal(initialState);
    });
    it('should add 1 + 1 and return 2', () => {
      calculatorReducer(
        calculatorReducer(
          calculatorReducer(
            calculatorReducer(initialState, appendChar('1')),
            setOperator('+')
          ),
          appendChar('1')
        ),
        equals()
      ).numStringOne.should.be.equal('2');
    });
  });
});
