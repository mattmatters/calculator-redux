import {
  NEW_ITEM, SELECT_ITEM, SUBMIT_ITEM, DELETE_ITEM, VIEW_LIST,
  EDIT_ITEM,
} from '../actions';

// Move to utility functions
// eslint-disable-next-line
const isValidItem = item => true;

const viewAll = 'all';

const initialState = {
  view: viewAll,
  edit: false,
  items: [],
};


const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_ITEM:
      return Object.assign({}, state, {
        view: action.item,
        edit: false,
      });
    case EDIT_ITEM:
      return Object.assign({}, state, {
        view: action.item.toString(),
        edit: true,
      });
    case VIEW_LIST:
      return Object.assign({}, state, {
        view: viewAll,
        edit: false,
      });

    case NEW_ITEM: {
      return Object.assign({}, state, {
        view: (state.items.length).toString(),
        edit: true,
        items: state.items.concat({
          name: 'Beer',
          style: 'unknown',
          instructions: 'None',
          created: action.created,
        }),
      });
    }

    case SUBMIT_ITEM: {
      const { item } = action;

      if (isValidItem(action.item)) {
        return Object.assign({}, state, {
          view: item,
          edit: false,
          items: Object.assign({}, state.items, { item }),
        });
      }

      return Object.assign({
        view: action.item,
        edit: true,
      });
    }

    // TODO: add delete functionality
    case DELETE_ITEM:
      return state;

    default:
      return state;
  }
};

export default itemReducer;
