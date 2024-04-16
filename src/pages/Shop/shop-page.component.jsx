import React from "react";
import { Route, Routes } from "react-router-dom";
import CollectionOverview from "../../components/CollectionOverview/collection-overview.component";
import Collection from "../../components/Collection/collection.component";

const ShopPage = () => {
  return (
    <div>
      <Routes>
        <Route index element={<CollectionOverview />} />
        <Route path=":collectionId" element={<Collection />} />
      </Routes>
    </div>
  );
};

export default ShopPage;
