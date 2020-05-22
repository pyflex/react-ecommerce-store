import React from "react";

// SCSS
import "./collection-preview.styles.scss";
import CollectionItem from "./../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => {
  console.log(items);
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {/* a bit of a performance concern, everytime we render CollectionPreview, everything gets re-rendered */}
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
