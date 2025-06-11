// ScrollLayout.jsx
import { useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

const ScrollLayout = ({ children }) => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};

export default ScrollLayout;
