import { stringifyErr } from "./";

const BASE_URL = "https://hacker-news.firebaseio.com";
const fetchJson = (url, options) => fetch(url, options).then(res => res.json());

export const types = {
  start: type => `${type} / start`,
  success: type => `${type} / success`,
  fail: type => `${type} / fail`
};

export const reduxFetch = store => next => action => {
  if (!action.fetch) {
    next(action);
    return;
  }

  next({
    type: types.start(action.type),
    params: action.params
  });

  return fetchJson(BASE_URL + action.fetch.url, action.fetch.options)
    .then(res => {
      next({
        type: types.success(action.type),
        payload: res,
        params: action.params
      });
      return { res };
    })
    .catch(err => {
      next({
        type: types.fail(action.type),
        payload: stringifyErr(err),
        params: action.params
      });
      return { err };
    });
};
