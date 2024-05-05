import { useEffect } from "react";

export const useScrollTop = (depenendyList = []) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, depenendyList);
};
