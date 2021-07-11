const redux = require('redux');
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const USERS_REQUEST = 'USER_REQUEST';
const USERS_SUCCESS = 'USERS_SUCCESS';
const USERS_FAILURE = 'USERS_FAILURE';

const initialState = {
  loading: false,
  users: [],
  error: '',
};

const fetchUsersRequest = () => {
  return { type: USERS_REQUEST };
};

const fetchUsersSuccess = (users) => {
  return { type: USERS_SUCCESS, payload: users };
};
const fetchUsersFailure = (error) => {
  return { type: USERS_FAILURE, payload: error };
};

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        const users = res.data.map((user) => user.username);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((err) => {
        dispatch(fetchUsersFailure(err.message));
      });
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        error: '',
      };
    case USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
  }
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUsers());
