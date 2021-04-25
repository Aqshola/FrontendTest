export default function Button({ children }) {
  return (
    <button className="p-3 w-max border-primary font-medium border-2 rounded-lg poppins hover:shadow-lg transition-all transform hover:-translate-y-2 focus:outline-none focus:bg-primary focus:text-white outline-none">
      {children}
    </button>
  );
}
