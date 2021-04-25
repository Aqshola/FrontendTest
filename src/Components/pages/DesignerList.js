import ContactCard from '../elements/ContactCard';

export default function DesignerList() {
  return (
    <div className="max-w-screen-xl p-10 mx-auto bor">
      <h1 className="text-3xl opensans font-bold ">Designer List</h1>
      <div className="flex justify-around mt-20 flex-wrap w-4/5 mx-auto">
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
      </div>
      <div className="flex justify-center space-x-3">
        <button className="py-4 px-6 text-lg font-bold poppins bg-purple-400 rounded-lg">
          1
        </button>
        <button className="py-4 px-6 text-lg font-bold poppins border border-purple-400 rounded-lg">
          2
        </button>
      </div>
    </div>
  );
}
