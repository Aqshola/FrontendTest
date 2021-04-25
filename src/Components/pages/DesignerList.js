import { useEffect, useState } from 'react';
import ContactCard from '../elements/ContactCard';
import PageButton from '../elements/PageButton';
import { getPersonList } from '../../helper/getPerson';

export default function DesignerList() {
  const [personList, setpersonList] = useState([]);

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
        {personList.map((person) => (
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
      <div className="flex justify-center space-x-3">
        <PageButton active={true}>1</PageButton>
        <PageButton>2</PageButton>
      </div>
    </div>
  );
}
