import React from "react";
import CollectionItem from "../CollectionItem/collection-item.component";
import { Link, useLocation } from "react-router-dom";

const CollectionPreview = ({ title, items, routeName }) => {
  const {pathname} = useLocation()
  // console.log(`${pathname}/${routeName}`)
  return (
    <div className="collection px-4">
      <h1 className="text-2xl my-4 ml-3">
        <Link to={`${pathname}/${routeName}`}>{title.toUpperCase()}</Link>
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 mt-4">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
