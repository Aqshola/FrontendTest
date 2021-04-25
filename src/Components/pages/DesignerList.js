import ContactCard from '../elements/ContactCard';
import PageButton from '../elements/PageButton';

export default function DesignerList() {
  return (
    <div className="max-w-screen-xl p-10 mx-auto bor">
      <h1 className="text-3xl opensans font-bold text-primary">
        Designer List
      </h1>
      <div className="flex justify-around mt-20 flex-wrap w-full md:w-4/5 mx-auto">
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
      </div>
      <div className="flex justify-center space-x-3">
        <PageButton active={true}>1</PageButton>
        <PageButton>2</PageButton>
      </div>
    </div>
  );
}
