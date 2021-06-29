import React from "react";
import Helmet from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};
Meta.defaultProps={
    title:'Welcome To ShopMania',
    description:"We sell the best products for cheap",
    keywords:"Electronics, Buy electronics, cheap electronics"
}

export default Meta;
