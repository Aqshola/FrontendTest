import { useEffect, useState } from 'react';
import ContactCard from '../elements/ContactCard';
import Pagination from '../elements/Pagination';

import { getPersonList } from '../../helper/getPerson';
import { useLocation } from 'react-router-dom';

export default function DesignerList() {
  const [personList, setpersonList] = useState([]);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  const getQuery = useQuery();

  const filterPost = (data, currPage) => {
    const indexOfLastPost = currPage * 10;
    const indexOfFirstPost = indexOfLastPost - 10;

    let postperPage = [];
    postperPage = data.slice(indexOfFirstPost, indexOfLastPost);
    return postperPage;
  };
  useEffect(() => {
    const getData = async () => {
      const res = await getPersonList();
      setpersonList(res);
    };

    getData();
  }, []);

  return (
    <div className="max-w-screen-xl p-10 mx-auto bor">
      <h1 className="text-3xl opensans font-bold text-primary">
        Designer List
      </h1>
      <div className="flex justify-around mt-20 flex-wrap w-full md:w-4/5 mx-auto">
        {filterPost(personList, getQuery.get('page') || 1).map((person) => (
          <ContactCard
            name={person.name.first + ' ' + person.name.last}
            email={person.email}
            location={person.location.country}
            phone={person.phone}
            photo={person.picture.medium}
            key={person.login.uuid}
          />
        ))}
      </div>
      <Pagination
        postPerPage={10}
        totalPost={personList.length}
        page={getQuery.get('page') || 1}
      />
    </div>
  );
}
