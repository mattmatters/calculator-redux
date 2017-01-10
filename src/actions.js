// Action types
export const APPEND_CHAR = 'APPEND_CHAR';
export const CLEAR = 'CLEAR';
export const SET_OPERATOR = 'SET_OPERATOR';
export const EQUALS = 'EQUALS';

// Action creators
export const appendChar = char => ({
  type: APPEND_CHAR,
  char,
});

export const clear = () => ({
  type: CLEAR,
});

export const setOperator = operator => ({
  type: SET_OPERATOR,
  operator,
});

export const equals = () => ({
  type: EQUALS,
});
