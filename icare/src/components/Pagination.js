

export default function Paganition({totalCardsCount, setPageFunc, cardsPerPage, currentPage, showPageLength=5}){
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
                );
            })}
        </div>
    );
}
