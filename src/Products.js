import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import FilterSection from "./components/FilterSection";
import PaginationPage from "./components/PaginationPage";
import ProductList from "./components/ProductList";
import Sort from "./components/Sort";
import { useFilterContext } from "./context/filter_context";

const Products = () => {
  const { filter_products, grid_view } = useFilterContext();

  const [posts, setPosts] = useState([]);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  useEffect(() => {
      setPosts(filter_products);
      console.log(filter_products);
  }, [filter_products]);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Get total page
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // Change page
  const paginate = (pageNumber) => {
    if(pageNumber > 0) {
      setCurrentPage(pageNumber);
    }
  }

  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        <div>
          <FilterSection />
        </div>

        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <ProductList  products={currentPosts} />
            <PaginationPage 
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              paginate={paginate}
              totalPage={totalPages}
            />
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
