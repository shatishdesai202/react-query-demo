const Navbar = ({ setPage }) => {
  return (
    <div>
      <button
        onClick={() => {
          setPage("planent");
        }}
      >
        Planent
      </button>
      <button
        onClick={() => {
          setPage("people");
        }}
      >
        People
      </button>
    </div>
  );
};

export default Navbar;
