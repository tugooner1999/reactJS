import instance from "./instance";

export const getAll = () => {
  const url = `/Products`;
  return instance.get(url);
};
export const get = (id) => {
  const url = `/Products/${id}`;
  return instance.get(url);
};
export const remove = (id) => {
  const url = `/Products/${id}`;
  return instance.delete(url);
};
export const add = (item) => {
  const url = `/Products`;
  return instance.post(url, item);
};
export const update = (item) => {
  const url = `/Products/${item.id}`;
  return instance.put(url, item);
};