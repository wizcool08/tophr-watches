import React, { Component } from "react";
import { sections } from "./directory.data";
import MenuItem from "../menu-item/menu-item";
import './directory.styles.scss';

class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: sections
    };
  }

  render() {
    const { sections } = this.state;
    return (
      <div className="directory-menu">
        {sections.map(({ id, title, imageUrl, size }) => {
          return <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />;
        })}
      </div>
    );
  }
}

export default Directory;
