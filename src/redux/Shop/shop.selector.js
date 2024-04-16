import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollectionItems = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionOverView = createSelector(
  [selectCollectionItems],
  (collection) => Object.keys(collection).map((key) => collection[key])
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectCollectionItems],
    (collection) => collection[collectionUrlParam]
  );
