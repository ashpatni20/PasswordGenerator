import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const randomPass = (slider, upper, lower, symbol, number) => {
  let cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let small = "abcdefghijklmnopqrstuvwxyz";
  let sym = "!@#$%^&*()_+";
  let num = "0123456789";
  let pass = "";

  if (upper) {
    pass += cap;
  }
  if (lower) {
    pass += small;
  }
  if (symbol) {
    pass += sym;
  }
  if (number) {
    pass += num;
  }

  let ans = "";
  for (let i = 0; i < slider; i++) {
    ans += pass[Math.floor(Math.random() * pass.length)];
  }
  return ans;
};
const PasswordGenerator = () => {
  const notify = () => toast("Password Copied!");

  const [slider, setSlider] = useState(8);

  const [upper, setUpper] = useState(true);
  const [lower, setLower] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [number, setNumber] = useState(false);
  const [ans, setAns] = useState("");
  useEffect(() => {
    let value = randomPass(slider, upper, lower, symbol, number);
    console.log(value);
    setAns(value);
  }, [slider, upper, lower, symbol, number]);
  return (
    <div className="text-center p-10">
      <h1 className="font-bold text-3xl p-5">Generate Strong Password</h1>
      <div className="bg-blue-950 text-white text-2xl w-1/2 m-auto p-4">
        {ans}
      </div>
      <button
        className="button-70"
        onClick={() => {
          navigator.clipboard.writeText(ans);
          notify();
        }}
      >
        Copy Password
      </button>
      <p className="font-bold ">Use the slider, and select from the options</p>
      {/* <input type="range" name="" id="" value={slider} min={8} max={50} onChange={(e)=>setSlider(e.target.value)}/> */}
      <div className="w-1/2 m-auto">
        <Box sx={{ width: 700 }}>
          <Slider
            size="small"
            defaultValue={slider}
            aria-label="Small"
            valueLabelDisplay="auto"
            min={8}
            max={50}
            onChange={(e) => setSlider(e.target.value)} 
          />
        </Box>
      </div>

      <div className="p-2 m-auto w-1/2 flex justify-evenly font-bold text-xl">
        <div >
          <input
            type="checkbox"
            name=""
            id="checkUppercase"
            checked={upper}
            onChange={() => setUpper(!upper)}
          />
          <label htmlFor="checkUppercase">UpperCase</label>
        </div>

        <div>
          <input
            type="checkbox"
            name=""
            id="checkLowerCase"
            checked={lower}
            onChange={() => setLower(!lower)}
          />
          <label htmlFor="checkLowerCase">LowerCase</label>
        </div>

        <div>
          <input
            type="checkbox"
            name=""
            id="checkSymbol"
            checked={symbol}
            onChange={() => setSymbol(!symbol)}
          />
          <label htmlFor="checkSymbol">Symbol</label>
        </div>

        <div>
          <input
            type="checkbox"
            name=""
            id="checkNumber"
            checked={number}
            onChange={() => setNumber(!number)}
          />
          <label htmlFor="checkNumber">Number</label>
        </div>
      </div>
      <ToastContainer autoClose={1500} />
    </div>
  );
};

export default PasswordGenerator;
