import React from 'react';
import { Rating } from 'semantic-ui-react';
import './EntryListView.css';

const EntryListEntry = (props) => (
  <div className="search-entry" onClick={() => {props.handleClick({}, props.data)}}>
    <img className="book-image" src={props.data.imageUrl} alt="book thumbnail" />
    <div className="book-data">
      <h4>{props.data.title}</h4>
      <p>{props.data.author}</p>
      <Rating size="medium" maxRating={5} defaultRating={props.data.rating} disabled icon="star" />
    </div>
  </div>
);

export default EntryListEntry;