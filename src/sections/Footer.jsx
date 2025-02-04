const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-1 border-black-300 flex justify-between items-center flex-wrap gap5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p></p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a
            href="http://github.com/hashan-athu"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full flex justify-center items-center hover:opacity-70 transition-opacity"
          >
            <img
              src="/assets/github.svg"
              alt="github"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>
        <div className="social-icon">
          <a
            href="http://twitter.com/hashanathurugiriya"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full flex justify-center items-center hover:opacity-70 transition-opacity"
          >
            <img
              src="/assets/twitter.svg"
              alt="twitter"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>
        <div className="social-icon">
          <a
            href="http://instagram.com/hashanathurugiriya"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full flex justify-center items-center hover:opacity-70 transition-opacity"
          >
            <img
              src="/assets/instagram.svg"
              alt="linkedin"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>
      </div>

      <p className="text-white-500">
        &copy; 2025 Hashan Athurugiriya. All rights reserved.
      </p>
    </section>
  );
};

export default Footer;
