import React from "react";
import CollectionItem from "../CollectionItem/collection-item.component";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection px-4">
      <h1 className="text-2xl">{title}</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 mt-6">
        {items
          .filter((item, idx) => idx < 4)
          .map(({id, ...otherItemProps}) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;

