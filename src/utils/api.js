const BASE_URL = "https://hacker-news.firebaseio.com";
const fetchJson = url => fetch(url).then(res => res.json());

export const api = {
  getItem: id => fetchJson(`${BASE_URL}/v0/item/${id}.json`),
  getItemsIds: () => fetchJson(`${BASE_URL}/v0/topstories.json`)
};
