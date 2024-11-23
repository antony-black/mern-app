import { getPageNumbers } from "../utils/pages";

export default function Pagination({totalPage, page, changePage}) {
  let pages = getPageNumbers(totalPage);
  return (
    <div className="page__wrapper">
      {pages.map((_page) => (
        <span
          key={_page}
          className={page === _page ? "page page__current" : "page"}
          onClick={() => changePage(_page)}
        >
          {_page}
        </span>
      ))}
    </div>
  )
}