export default function DummyCard({ name, align }) {
  return (
    <div
      className={
        'w-48 h-48 shadow-lg rounded-lg border-purple-600 border-2 flex flex-col items-center p-2 justify-evenly ' +
        align
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-24 h-24"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clipRule="evenodd"
        />
      </svg>
      <h2 className="text-xl">{name}</h2>
    </div>
  );
}
