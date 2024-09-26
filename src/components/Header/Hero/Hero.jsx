const Hero = () => {
  return (
    <div>
      <div className="hero bg-base-200 container mx-auto rounded-md ">
        <div className="hero-content md:flex-row-reverse  gap-12">
          <div className="md:w-64 my-4 ">
            <img
              src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*WUIArrwjY-xXIQ-MuS-7YQ.jpeg"
              className="w-full  rounded-sm shadow-2xl "
            />
          </div>
          <div className=" space-y-4 md:space-y-10">
            <h1 className="text-4xl md:text-5xl font-bold md:w-10/12 leading-tight">
              Books to freshen up your bookshelf
            </h1>

            <button className="btn btn-primary text-white ">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
