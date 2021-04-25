export default function PageButton({ children, active }) {
  return (
    <button
      className={
        'py-4 px-6 text-lg font-bold poppins rounded-lg focus:outline-none ' +
        (active ? ' bg-primary text-white' : 'border-primary border-2')
      }
    >
      {children}
    </button>
  );
}
