import PropTypes from "prop-types";

export const ns = "ui";

export const shape = {
  itemsToShow: PropTypes.number.isRequired,
  isDarkTheme: PropTypes.bool.isRequired
};

export const defaultState = {
  itemsToShow: 10,
  isDarkTheme: false
};

const root = state => state[ns];
export const selectors = {
  root,
  itemsToShow: state => root(state).itemsToShow,
  isDarkTheme: state => root(state).isDarkTheme
};

export const types = {
  updateItemsToShow: "UPDATE_ITEMS_TO_SHOW",
  toggleTheme: "TOGGLE_THEME"
};

export const updateItemsToShow = value => ({
  type: types.updateItemsToShow,
  payload: value
});

export const toggleTheme = () => ({
  type: types.toggleTheme
});

export const actions = {
  updateItemsToShow,
  toggleTheme
};

export const rawReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.updateItemsToShow:
      return { ...state, itemsToShow: action.payload };
    case types.toggleTheme:
      return { ...state, isDarkTheme: !state.isDarkTheme };
    default:
      return state;
  }
};

// its a good idea to namespace reducer as well
export const reducer = {
  [ns]: rawReducer
};

export default {
  ns,
  shape,
  defaultState,
  selectors,
  types,
  actions,
  rawReducer,
  reducer
};
