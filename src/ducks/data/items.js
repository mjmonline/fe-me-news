import PropTypes from "prop-types";
import { types as fetchTypes } from "../../utils";

const ns = "items";

const shape = {
  item: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.instanceOf(new Error())
};

const defaultState = {};

const root = state => state[ns];
const selectors = {
  root,
  item: (state, id) => (root(state)[id] || {}).item,
  isLoading: (state, id) => (root(state)[id] || {}).isLoading,
  error: (state, id) => (root(state)[id] || {}).error
};

const types = {
  fetchItem: "REQUEST_ITEM"
};

const fetchItem = id => ({
  type: types.fetchItem,
  fetch: { url: `/v0/item/${id}.json` },
  params: { id }
});

const actions = {
  fetchItem
};

const rawReducer = (state = {}, action) => {
  switch (action.type) {
    case fetchTypes.start(types.fetchItem):
      return {
        ...state,
        [action.params.id]: { item: {}, isLoading: true, error: null }
      };
    case fetchTypes.success(types.fetchItem):
      return {
        ...state,
        [action.params.id]: {
          item: action.payload,
          isLoading: false,
          error: null
        }
      };
    case fetchTypes.fail(types.fetchItem):
      return {
        ...state,
        [action.params.id]: {
          item: {},
          isLoading: false,
          error: action.payload
        }
      };
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
