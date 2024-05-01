const Navbar = () => {
  const navLinks = ["Home", "Models", "Beyond The car"];

  return (
    <div className="flex p-5 text-white items-center">
      <div className="flex flex-1 gap-4">
        {navLinks.map((link, index) => (
          <p key={index}>{link}</p>
        ))}
      </div>
      <span className="text-4xl  font-bold">Logo</span>
      <div className="flex-1 text-right">
        <button className="bg-white bg-opacity-30 px-4 py-2 rounded-xl shadow-sm">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
