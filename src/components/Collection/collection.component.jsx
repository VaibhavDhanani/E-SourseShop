import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { selectCollection } from "../../redux/Shop/shop.selector";
import { connect } from "react-redux";
import CollectionItem from "../CollectionItem/collection-item.component";


const Collection = ({collection}) => {
  const  {collectionId}  = useParams();
  const location = useLocation();
  console.log(collection)
  return (
    <div className="collection px-4">
    <h1 className="text-2xl text-center">{collectionId.toUpperCase()}</h1>
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 mt-6">
    {
        collection.items.map(item => <CollectionItem key={item.id} item={item} />)
      }
    </div>
  </div>
  );
};

const mapStateToProps = (state) => {
  const { collectionId } = useParams();
  return {
    collection: selectCollection(collectionId)(state)
  };
};

export default connect(mapStateToProps)(Collection);
