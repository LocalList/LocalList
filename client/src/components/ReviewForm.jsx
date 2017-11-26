import React from 'react';

export default props => (
  <div>
    Write a review:
    <form onSubmit={props.onSubmit}>
      Message:
      <input type="text" name="message" />
      Rating:
      <select name="rating">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button>Submit</button>
    </form>
  </div>
);
