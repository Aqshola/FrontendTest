import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="py-5 px-10 max-w-screen-xl mx-auto font-bold opensans ">
      <Link to="/">
        <h1 className="text-2xl">FD</h1>
      </Link>
    </nav>
  );
}
