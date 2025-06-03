import React, { useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContentCard from "./ContentCard";
import { increaseVisibleCount } from "../redux-store/contentSlice";

const PricingEnum = {
  0: "Paid",
  1: "Free",
  2: "View Only",
  Paid: 0,
  Free: 1,
  "View Only": 2,
};

const ContentGrid = ({ data }) => {
  const observer = useRef();
  const dispatch = useDispatch();
  const { visibleCount, filters, keyword } = useSelector(
    (state) => state.content
  );

  const lastElementRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          dispatch(increaseVisibleCount());
        }
      });
      if (node) observer.current.observe(node);
    },
    [dispatch]
  );

  const filtered = data
    .filter((item) => {
      if (filters.length === 0) return true;
      const label = PricingEnum[item.pricingOption];
      return filters.includes(label);
    })
    .filter((item) => {
      return (
        item.title.toLowerCase().includes(keyword.toLowerCase()) ||
        item.creator.toLowerCase().includes(keyword.toLowerCase())
      );
    });

  return (
    <div className="content-grid">
      {filtered.slice(0, visibleCount).map((item, index) => {
        if (index + 1 === visibleCount) {
          return (
            <div ref={lastElementRef} key={item.id}>
              <ContentCard item={item} />
            </div>
          );
        } else {
          return <ContentCard key={item.id} item={item} />;
        }
      })}
    </div>
  );
};

export default ContentGrid;
