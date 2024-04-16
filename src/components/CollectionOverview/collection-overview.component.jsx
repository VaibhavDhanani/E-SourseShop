import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../../components/Directory/collection-preview.component";
import { selectCollectionOverView } from "../../redux/Shop/shop.selector";

const CollectionOverview = ({ collections }) => {
  console.log(collections)
  return(
  <div>
    <h3 className="text-gray-600 text-2xl font-medium p-4">Collection</h3>
    {collections.map(({ id, title, routeName,items }) => (
      <CollectionPreview key={id} title={title} items={items} routeName={routeName} />
    ))}
  </div>
)};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionOverView,
});

export default connect(mapStateToProps)(CollectionOverview);
