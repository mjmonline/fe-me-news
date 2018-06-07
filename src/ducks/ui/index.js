import PropTypes from "prop-types";

const ns = "ui";

const shape = {
  itemsToShow: PropTypes.number.isRequired,
  isDarkTheme: PropTypes.bool.isRequired
};

const defaultState = {
  itemsToShow: 10,
  isDarkTheme: false
};

const root = state => state[ns];
const selectors = {
  root,
  itemsToShow: state => root(state).itemsToShow,
  isDarkTheme: state => root(state).isDarkTheme
};

const types = {
  updateItemsToShow: "UPDATE_ITEMS_TO_SHOW",
  toggleTheme: "TOGGLE_THEME"
};

const updateItemsToShow = value => ({
  type: types.updateItemsToShow,
  payload: value
});

const toggleTheme = () => ({
  type: types.toggleTheme
});

const actions = {
  updateItemsToShow,
  toggleTheme
};

const rawReducer = (state = defaultState, action) => {
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
const reducer = {
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
