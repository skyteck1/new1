import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = ({products}) => {
  const { filter_products, grid_view } = useFilterContext();

  if (grid_view === true) {
    return <GridView products={products} />;  
  }
    // use filter_products instade of products 
  if (grid_view === false) {
    return <ListView products={products} />;
  }
};

export default ProductList;
