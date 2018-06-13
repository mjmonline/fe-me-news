import PropTypes from "prop-types";
import { types as fetchTypes } from "../../utils";

const ns = "itemsIds";

const shape = {
  ids: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.instanceOf(new Error())
};

const defaultState = {
  ids: [],
  isLoading: false,
  error: null
};

const root = state => state[ns];
const selectors = {
  root,
  ids: state => root(state).ids,
  isLoading: state => root(state).isLoading,
  error: state => root(state).error
};

const types = {
  fetchItemIds: "REQUEST_ITEMS_IDS"
};

const fetchItemsIds = () => ({
  type: types.fetchItemIds,
  fetch: { url: "/v0/topstories.json" }
});

const actions = {
  fetchItemsIds
};

const rawReducer = (state = defaultState, action) => {
  switch (action.type) {
    case fetchTypes.start(types.fetchItemIds):
      return { ...state, isLoading: true };
    case fetchTypes.success(types.fetchItemIds):
      return { ids: action.payload, isLoading: false, error: null };
    case fetchTypes.fail(types.fetchItemIds):
      return {
        ids: {},
        isLoading: false,
        error: action.payload
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
