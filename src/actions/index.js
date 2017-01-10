import fetch from 'isomorphic-fetch';


// Action types
export const REQUEST_DATA = 'REQUEST_DATA';
export const GETTING_DATA = 'GETTING_DATA';
export const INVALIDATE_DATA = 'INVALIDATE_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const SELECT_LIST = 'SELECT_LIST';
export const SUBMIT_ITEM = 'SUBMIT _ITEM';
export const SELECT_ITEM = 'SELECT_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const NEW_ITEM = 'NEW_ITEM';
export const VIEW_LIST = 'VIEW_LIST';
export const EDIT_ITEM = 'EDIT_ITEM';

// Action creators
export const editItem = item => ({
  type: EDIT_ITEM,
  item,
});

export const submitItem = item => ({
  type: SUBMIT_ITEM,
  item,
});

export const newItem = () => ({
  // Generate id here?
  type: NEW_ITEM,
  created: Date.now(),
});

export const deleteItem = item => ({
  type: DELETE_ITEM,
  item,
});

export const viewList = () => ({
  type: VIEW_LIST,
});

export const selectItem = itemId => ({
  type: SELECT_ITEM,
  item: itemId.toString(),
});

export const requestData = list => ({
  type: REQUEST_DATA,
  list,
});

export const invalidateData = list => ({
  type: INVALIDATE_DATA,
  list,
});

export const receiveData = (list, json) => ({
  type: RECEIVE_DATA,
  list,
  data: json.map(child => child),
  receivedAt: Date.now(),
});

export const fetchData = list => (
  (dispatch) => {
    dispatch(requestData(list));
    return fetch(`https://fcctop100.herokuapp.com/api/fccusers/top/${list}`)
      .then(response => response.json())
      .then(json => dispatch(receiveData(list, json)));
  }
);
