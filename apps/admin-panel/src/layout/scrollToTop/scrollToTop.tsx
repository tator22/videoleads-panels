import { useWindowScroll } from "@uidotdev/usehooks";
import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [, scrollTo] = useWindowScroll();

  useEffect(() => {
    scrollTo({ left: 0, top: 0, behavior: "smooth" });
  }, [pathname, scrollTo]);

  return null;
};

export default ScrollToTop;
