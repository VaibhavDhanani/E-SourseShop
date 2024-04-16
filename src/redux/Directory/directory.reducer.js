const INITIAL_STATE = {
  sections: [
    {
      title: "Hats",
      imageUrl: "https://source.unsplash.com/featured/?hats",
      id: 1,
      linkUrl: "shop/hats"
    },
    {
      title: "Sneakers",
      imageUrl: "https://source.unsplash.com/featured/?sneakers",
      id: 2,
      linkUrl: "shop/sneakers"

    },
    {
      title: "Jackets",
      imageUrl: "https://source.unsplash.com/featured/?jackets",
      id: 3,
      linkUrl: "shop/jackets"

    },
    {
      title: "Men",
      imageUrl: "https://source.unsplash.com/featured/?men",
      id: 4,
      linkUrl: "shop/men"

    },
    {
      title: "Women",
      imageUrl: "https://source.unsplash.com/featured/?women",
      id: 5,
      linkUrl: "shop/women"
    },
    {
      title: "Electronics",
      imageUrl: "https://source.unsplash.com/featured/?electronics",
      id: 6,
      linkUrl: "shop/electronics"
    },
  ],
};

const directoryReducer = ( state = INITIAL_STATE, action ) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
