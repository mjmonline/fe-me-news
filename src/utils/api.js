// helpers
const fetchJson = url => fetch(url).then(res => res.json());
const first10 = arr => arr.slice(0, 10);

const BASEURL = "https://hacker-news.firebaseio.com";

const getItemsIds = () => {
  return fetchJson(`${BASEURL}/v0/topstories.json`).then(first10);
};

const getItem = id => {
  return fetchJson(`${BASEURL}/v0/item/${id}.json`);
};

export const api = {
  getItemsIds,
  getItem
};
