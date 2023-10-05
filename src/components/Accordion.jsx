import React, {
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";

const Accordians = () => {
  const buttonref = useRef();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    var acc = buttonref.current;
    acc.addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      console.log(panel.style.display);
      setOpen(open => {
        if (open) {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
          }
        return !open;
      })
    });
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center w-[600px]">
        <button
          ref={buttonref}
          className=" bg-red-400 text-black font-bold text-3xl cursor-pointer p-16 w-full border-4 border-black text-left outline-none duration-500 hover:bg-red-500"
        >
          Accordion
        </button>
        <div className="w-full">
          <p className="p-16 bg-slate-500 text-left font-bold border-4 border-black rounded">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </>
  );
};

export default Accordians;
