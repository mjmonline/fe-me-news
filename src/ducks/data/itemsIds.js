import PropTypes from "prop-types";

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
    case `${types.fetchItemIds} / start`:
      return { ...state, isLoading: true };
    case `${types.fetchItemIds} / success`:
      return { ids: action.payload, isLoading: false, error: null };
    case `${types.fetchItemIds} / fail`:
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
