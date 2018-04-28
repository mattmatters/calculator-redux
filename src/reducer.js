import { APPEND_CHAR, CLEAR, SET_OPERATOR, EQUALS } from './actions';

const stageStates = {
  cleared: 'CLEARED',
  numOne: 'NUM_ONE',
  numTwo: 'NUM_TWO',
};

const initialState = {
  stage: stageStates.cleared,
  numStringOne: '0',
  numStringTwo: '',
  operator: '',
  err: '',
};

const getResult = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    case '%':
      return num1 % num2;
    default:
      return 0;
  }
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPEND_CHAR:
      if (action.char === '-') {
        switch (state.stage) {
          case stageStates.cleared:
            return Object.assign({}, state, {
              stage: stageStates.numOne,
              numStringOne: action.char,
            });
          case stageStates.numOne:
            return Object.assign({}, state, {
              numStringOne: action.char.concat(state.numStringTwo),
            });
          case stageStates.numTwo:
            return Object.assign({}, state, {
              numStringTwo: action.char.concat(state.numStringTwo.concat),
            });
          default:
            return state;
        }
      }
      switch (state.stage) {
        case stageStates.cleared:
          return Object.assign({}, state, {
            stage: stageStates.numOne,
            numStringOne: action.char,
          });
        case stageStates.numOne:
          return Object.assign({}, state, {
            numStringOne: state.numStringOne.concat(action.char),
          });
        case stageStates.numTwo:
          return Object.assign({}, state, {
            numStringTwo: state.numStringTwo.concat(action.char),
          });
        default:
          return state;
      }

    case SET_OPERATOR:
      switch (state.stage) {
        case stageStates.cleared:
          return Object.assign({}, state, {
            stage: stageStates.numTwo,
            operator: action.operator,
            numStringTwo: '',
          });
        case stageStates.numOne:
          if (state.numStringOne.length) {
            return Object.assign({}, state, {
              stage: stageStates.numTwo,
              operator: action.operator,
              numStringTwo: '',
            });
          }
          return state;
        case stageStates.numTwo:
          if (state.numStringTwo.length) {
            return Object.assign({}, state, {
              numStringOne: getResult(
                parseInt(state.numStringOne, 10),
                parseInt(state.numStringTwo, 10),
                state.operator,
              ).toString(),
              stage: stageStates.numTwo,
              operator: action.operator,
              numStringTwo: '',
            });
          }
          return state;
        default:
          return state;
      }

    case EQUALS:
      switch (state.stage) {
        case stageStates.cleared:
          return Object.assign({}, state, {
            numStringOne: (parseInt(state.numStringOne || '0', 10) * 2).toString(),
            numStringTwo: '',
            operator: '',
          });
        case stageStates.numOne:
          return Object.assign({}, state, {
            numStringOne: (parseInt(state.numStringOne || '0', 10) * 2).toString(),
            numStringTwo: '',
            operator: '',
          });
        case stageStates.numTwo:
          if (!state.numStringTwo.length) {
            return state;
          }
          return Object.assign({}, state, {
            stage: stageStates.cleared,
            numStringOne: getResult(
              parseInt(state.numStringOne, 10),
              parseInt(state.numStringTwo, 10),
              state.operator,
            ).toString(),
            numStringTwo: '',
            operator: '',
          });
        default:
          return state;
      }

    case CLEAR:
      return Object.assign({}, state, {
        stage: stageStates.cleared,
        numStringOne: '0',
        numStringTwo: '',
        operator: 'c',
        err: '',
      });

    default:
      return state;
  }
};

export default calculatorReducer;
