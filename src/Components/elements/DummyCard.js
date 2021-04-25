export default function DummyCard({ name, align }) {
  return (
    <div
      className={
        'w-28 h-28 transition-all rounded-lg border-primary border-2 flex flex-col items-center p-2 justify-evenly md:w-40 md:h-40 hover:shadow-lg ' +
        align
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 md:w-14  fill-current text-primary"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clipRule="evenodd"
        />
      </svg>
      <h2 className="text-md md:text-xl">{name}</h2>
    </div>
  );
}
