import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CoustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{ textDecoration:"none",fontSize:"18px",color: match ? "tomato" : "white" }}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
  }

export default CoustomLink;