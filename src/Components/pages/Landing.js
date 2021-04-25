import DummyCard from '../elements/DummyCard';
import { Link } from 'react-router-dom';

export default function Landing(params) {
  return (
    <>
      <div className="max-w-screen-xl flex flex-col md:flex-row mx-auto items-center box-content p-5 md:p-10">
        <div className="mt-10  flex flex-col w-full  space-y-6 order-2 md:order-1 md:mt-0 md:w-2/4">
          <h1 className="text-3xl text-center md:text-left md:text-5xl opensans font-bold text-primary">
            FindDesg
          </h1>
          <h4 className="text-xl text-center md:text-2xl md:text-left poppins w-96 ">
            Find your own designer for your project
          </h4>
          <Link to="/designer" className="flex justify-center md:justify-start">
            <button className="p-3 w-max border-primary font-medium border-2 rounded-lg poppins hover:shadow-lg transition-all transform hover:-translate-y-2 focus:outline-none focus:bg-primary focus:text-white outline-none">
              Browse Designer
            </button>
          </Link>
        </div>
        <div className="w-full md:w-2/4 order-1 md:order-2">
          <div>
            <img
              src={
                require('../../assets/undraw_design_community_rcft 1.png')
                  .default
              }
              alt="Desinger Illustration"
            ></img>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto p-5 md:p-10 min-h-screen items-center flex flex-col md:flex-row">
        <div className="flex flex-col space-y-5 w-full md:w-2/4 text-center md:text-left">
          <h1 className="poppins text-4xl font-semibold w-96 text-primary">
            We Provide You The Best Designer Around the world
          </h1>
          <h4 className="poppins text-xl w-full md:w-96">
            Giving you best designer and awsome design for you job
          </h4>
        </div>
        <div className="w-full justify-between mt-10 md:mt-0 flex md:flex-col md:p-24 md:w-2/4">
          <DummyCard name="John Doe" align="self-end" />
          <DummyCard name="Jane Doe" />
          <DummyCard name="Antonie Doe" align="self-end" />
        </div>
      </div>
    </>
  );
}
