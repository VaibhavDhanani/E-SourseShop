import React, { Component } from "react";
import MenuItem from "./menuitem.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/Directory/directory.selector";

const Directory = ( {sections} ) => (
  <div className="homepage container mx-auto my-5">
    <div className="directory-menu">
      <div className="grid grid-cols-3 gap-8 h-[45rem]">
        {sections.map(({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps} />
        ))}
      </div>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
