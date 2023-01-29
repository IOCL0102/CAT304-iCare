

               
import React from "react";

const Pagination = ({
    totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage,
}) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className='flex flex-wrap justify-center mt-4'>
            {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page == currentPage ? "active" : ""}>
                        {page}
                    </button>
                );
            })}
        </div>
    );
}


export default Pagination;

export function Pagination2({totalCardsCount, setPageFunc, cardsPerPage, currentPage, showPageLength=5}){
    // set ShowPageLength as odd number
    let totalPage = Math.ceil(totalCardsCount / cardsPerPage);
    let pages = [];

    if(currentPage <= 1+(showPageLength-1)/2)
        pages = [...Array(Math.min(showPageLength, totalPage)).keys()].map(i=>i+1)
    else if(currentPage >= totalPage-(showPageLength-1)/2){
        pages = [...Array(showPageLength).keys()].map(i=>i+totalPage-showPageLength+1);
        pages = pages.filter((e)=>e > 0);
    }
    else
        pages = [...Array(showPageLength).keys()].map(i=>i+currentPage-(showPageLength-1)/2)

    return(
        <div className="btn-group self-center mb-7">
            {pages.map((page, index)=>{
                return(
                <button key={index} className={"btn " + (page == currentPage ? 'btn-active' : '')} 
                        onClick={(e)=> setPageFunc(page)}> {page} </button>
                )
            })}
        </div>
    )
};       