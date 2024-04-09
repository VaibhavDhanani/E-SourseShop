import React, { Component } from "react";
import CollectionPreview from "../../components/Directory/collection-preview.component";
import SHOP_DATA from "./shop-data";

export default class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const collections = this.state.collections;
    return (
      <div>
        <h3 className="text-gray-600 text-2xl font-medium p-4">Collection</h3>
        {collections.map(({ id,title, items }) => (
          <CollectionPreview key={id} title={title} items={items} />
        ))}
      </div>
    );
  }
}
