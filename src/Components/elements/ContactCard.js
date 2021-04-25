import Button from './Button';

export default function ContactCard({ name, location, email, phone, photo }) {
  return (
    <div className="flex flex-col p-5 shadow-lg mb-10 w-full rounded-lg">
      <div className="flex items-center space-x-2">
        <img
          className=" flex h-20 w-20 rounded-full"
          src={photo}
          alt="profile"
          loading="lazy"
        />
        <div className="flex-col flex-grow">
          <h1 className="text-lg poppins font-bold max-w-md">{name}</h1>
          <div className="flex text-lg poppins">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 fill-current text-primary"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <p className="poppins text-sm">{location}</p>
          </div>
        </div>
        <Button className="poppins p-3 border-2 border-purple-500">
          Message
        </Button>
      </div>
      <div className="flex flex-col space-y-2 p-2 mt-5">
        <div className=" flex space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 stroke-current text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <p className="poppins">{email}</p>
        </div>
        <div className="flex space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 stroke-current text-primary"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <p className="poppins">{phone}</p>
        </div>
      </div>
    </div>
  );
}
