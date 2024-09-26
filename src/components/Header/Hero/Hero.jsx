const Hero = () => {
  return (
    <div>
      <div className="hero bg-base-200 ">
        <div className="hero-content flex-row-reverse gap-12">
          <div className="w-64 my-4 ">
            <img
              src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*WUIArrwjY-xXIQ-MuS-7YQ.jpeg"
              className="w-full  rounded-sm shadow-2xl"
            />
          </div>
          <div className="space-y-10">
            <h1 className="text-5xl font-bold w-10/12 leading-tight">Books to freshen up your bookshelf</h1>
           
            <button className="btn btn-primary text-white ">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
