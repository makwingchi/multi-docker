import React from 'react';
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      I'm some other page!
      <Link to="/">GO back home</Link>
    </div>
  );
};