import { useEffect, useMemo, useState } from "react";
import { useTypedSelector } from "src/hooks/useTypedSelector";
import { PageState } from "src/types/PaginateTypes";

export const Paginate = ({
  setCurrentPage,
  currentPage,
}: {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
}) => {
  const [pageCount, setPageCount] = useState<number[]>([]);
  const pageData: PageState = useTypedSelector((state) => state.paginate);
  const usersData = useTypedSelector((state) => state.users); 
  useEffect(() => {
    setPageCount([]);
    for (
      let i = 1;
      i <= Math.ceil(usersData.users.length / pageData.perPage);
      i++
    ) {
      setPageCount((arr) => [...arr, i]);
    }
  }, [usersData.users]);

  return (
    <div className="pages">
      {pageCount.map((page: number, index: number) => (
        <span
          key={index}
          className={
            currentPage === page ? "pages__current-page" : "pages__page"
          }
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </span>
      ))}
    </div>
  );
};

//поменять url
// query param -
