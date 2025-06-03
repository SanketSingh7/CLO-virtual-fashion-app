import React from "react";

const PricingEnum = {
  0: "Paid",
  1: "Free",
  2: "View Only",
  Paid: 0,
  Free: 1,
  "View Only": 2,
};

const ContentCard = ({ item }) => {
  return (
    <div className="card">
      <img src={item.imagePath} alt={item.title} className="card-image" />
      <h4 className="card-title">{item.title}</h4>
      <p className="card-username">{item.creator}</p>
      <p className="card-price-option">{PricingEnum[item.priceOption]}</p>
      {item.pricingOption === PricingEnum.Paid && (
        <p className="card-price">${item.price}</p>
      )}
    </div>
  );
};

export default ContentCard;
