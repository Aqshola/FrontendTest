import PageButton from './PageButton';
import { Link } from 'react-router-dom';
export default function Pagination({ postPerPage, totalPost, page }) {
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center space-x-3">
      {pageNumbers.map((number) => (
        <Link key={number} to={`designer?page=${number}`}>
          <PageButton active={Number(page) === number}>{number}</PageButton>
        </Link>
      ))}
    </div>
  );
}
