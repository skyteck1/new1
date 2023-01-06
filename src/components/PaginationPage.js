import React, { useState } from 'react'
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';
import styled from "styled-components";

export default function PaginationPage({ postsPerPage , totalPosts , paginate ,totalPage  }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <>
            <Wrapper>
                <nav>
                    <ul className={( totalPage === 1 ? ' active' : '') + ' paggination'}>
                        {pageNumbers.map(number => (
                            <li key={number} className='page-item'>
                                <a onClick={() => paginate(number)} href="#" className= 'page-link'>
                                    {number}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </Wrapper>
        </>
      );
}


const Wrapper = styled.section `
    nav{
        ul{
            &.active{
                display:none;
            }
            display:flex;
            li{
                padding:0 5px;
                a{

                   padding:10px;
                   border:2px solid #000; 
                   font-size:14px;
                   transition:all 0.4s ease;
                   &:hover{
                       background-color: #000;
                       color: #fff;
                   }
                }
            }
        }
    }
`
;
