import DummyCard from '../elements/DummyCard';

export default function Landing(params) {
  return (
    <>
      <div className="max-w-screen-xl flex mx-auto items-center p-10">
        <div className="flex flex-col w-2/4 space-y-6">
          <h1 className="text-5xl opensans font-bold">FindDesg</h1>
          <h4 className="text-2xl poppins w-96">
            Find your own designer for your project
          </h4>
          <button className="p-3 w-max border-black border-2 rounded-lg">
            Browse Designer
          </button>
        </div>

        <div className="w-2/4">
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
      <div className="max-w-screen-xl mx-auto p-10 min-h-screen items-center flex">
        <div className="flex flex-col space-y-5 w-2/4">
          <h1 className="poppins text-4xl font-semibold w-96 ">
            We Provide You The Best Designer Around the world
          </h1>
          <h4 className="poppins text-lg w-96">
            Giving you best designer and awsome design for you job
          </h4>
        </div>
        <div className="w-2/4 relative flex flex-col p-24">
          <DummyCard name="John Doe" align="self-end" />
          <DummyCard name="Jane Doe" />
          <DummyCard name="Antonie Doe" align="self-end" />
        </div>
      </div>
    </>
  );
}
