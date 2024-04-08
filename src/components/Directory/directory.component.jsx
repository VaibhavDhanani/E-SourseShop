import React, { Component } from "react";
import MenuItem from "./menuitem.component";

export default class Directory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [
        {
          title: "Hats",
          imageUrl: "https://source.unsplash.com/featured/?hats",
          id: 1,
        },
        {
          title: "Sneakers",
          imageUrl: "https://source.unsplash.com/featured/?sneakers",
          id: 2,
        },
        {
          title: "Jackets",
          imageUrl: "https://source.unsplash.com/featured/?jackets",
          id: 3,
        },
        {
          title: "Men",
          imageUrl: "https://source.unsplash.com/featured/?men",
          id: 4,
        },
        {
          title: "Women",
          imageUrl: "https://source.unsplash.com/featured/?women",
          id: 5,
        },
        {
          title: "Electronics",
          imageUrl: "https://source.unsplash.com/featured/?electronics",
          id: 6,
        },
      ],
    };
  }

  render() {
    return (
      <div className="homepage container mx-auto my-5">
        <div className="directory-menu">
          <div className="grid grid-cols-3 gap-8 h-[45rem]">
            {this.state.sections.map(({id, ...otherProps }) => (
              <MenuItem key={id} {...otherProps} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
