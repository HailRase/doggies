import React from 'react';
import s from "./Paginator.module.scss";
type PaginatorPropsType = {
    pages: number[]
    currentPage: number
    pagesCount: number
    onPageChangeHandler: (value: number) => void
}
const Paginator: React.FC<PaginatorPropsType> = ({pages,currentPage,pagesCount,onPageChangeHandler}) => {
    return (
        <div className={s.paginator}>
            {!pages.find(page => page === 1) && <div className={currentPage === 0 ? s.currentPage : s.page}
                                                     onClick={() => onPageChangeHandler(1)}>
                1
            </div>}
            {pages.map((page, index) => <div key={index}
                                             className={currentPage === page - 1 ? s.currentPage : s.page}
                                             onClick={() => onPageChangeHandler(page)}>
                {page}
            </div>)}
            {!pages.find(page => page === pagesCount) &&
                <div className={currentPage === pagesCount ? s.currentPage : s.page}
                     onClick={() => onPageChangeHandler(pagesCount)}>
                    {pagesCount}
                </div>}
        </div>
    );
};

export default Paginator;