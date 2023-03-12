const NotAllowed = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">
            Sorry! but this page is not for you
          </h1>
          <p className="py-6">
            Visit{" "}
            <a href="https://epowerx.ai/" className="link link-accent">
              EpowerX AI
            </a>{" "}
            for more info
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotAllowed;
