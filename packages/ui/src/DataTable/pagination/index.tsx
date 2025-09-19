import { ASSET_PATHS } from "@repo/assets";
import "./style.css";

export const Pagination = ({
  currentPage,
  setCurrentPage,
  handlePageChange,
  generatePageNumbers,
  count = 0,
  limit = 0,
  tableFooterTitle,
}: {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  handlePageChange: (pageNo: number) => void;
  generatePageNumbers: () => (string | number)[];
  count?: number;
  limit?: number;
  tableFooterTitle?: string;
}) => {
  return (
    <div className="pagination">
      <div className="bar">
        <button
          className="leftIconContainer clickable unselectable"
          onClick={() => {
            const newPage = currentPage - 1;
            if (newPage >= 1) {
              setCurrentPage(newPage);
              handlePageChange(newPage);
            }
          }}
          disabled={currentPage === 1 ? true : false}
        >
          <img
            src={ASSET_PATHS.SVGS.LEFT_ARROW}
            alt="arrow left"
            className="icon"
          />
        </button>
        <ul className="pageNumbers">
          {generatePageNumbers().map((page, index) => (
            <li
              key={index}
              onClick={() => typeof page === "number" && handlePageChange(page)}
              className={`pageNumber unselectable ${
                page === currentPage ? "pageNumberActive" : ""
              } ${
                typeof page !== "number" ? "disablePageNumber" : "clickable"
              }`}
            >
              {page}
            </li>
          ))}
        </ul>
        <button
          className="rightIconContainer clickable unselectable"
          onClick={() => {
            const newPage = currentPage + 1;
            if (newPage <= Math.ceil(count / limit)) {
              setCurrentPage(newPage);
              handlePageChange(newPage);
            }
          }}
          disabled={currentPage === Math.ceil(count / limit) ? true : false}
        >
          <img
            src={ASSET_PATHS.SVGS.LEFT_ARROW}
            alt="arrow right"
            className="icon"
          />
        </button>
      </div>
      <p className="description summary">
        {`Showing ${(currentPage - 1) * limit + 1} to ${Math.min(
          currentPage * limit,
          count
        )} of ${count} ${tableFooterTitle}`}
      </p>
    </div>
  );
};
