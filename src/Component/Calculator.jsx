import { useState } from "react";
import style from "./Calculator.module.css";

function Calculator() {
  const [num, setNum] = useState("");
  const [actionnum, setActionNum] = useState(null);
  const [symbol, setSybol] = useState(null);

  const handleNum = (val) => {
    setNum((prev) => prev + val);
  };

  const handlePlus = () => {
    setActionNum(Number(num));
    setSybol("+");
    setNum("");
  };
  const handleMinus = () => {
    setActionNum(Number(num));
    setSybol("-");
    setNum("");
  };
  const handleDivide = () => {
    setActionNum(Number(num));
    setSybol("/");
    setNum("");
  };
  const handleMultiply = () => {
    setActionNum(Number(num));
    setSybol("*");
    setNum("");
  };

  const handleEqual = () => {
    if (symbol === "+") {
      setNum((prev) => Number(prev) + actionnum);
    } else if (symbol === "-") {
      setNum((prev) => actionnum - Number(prev));
    } else if (symbol === "/") {
      setNum((prev) => actionnum / Number(prev));
    } else if (symbol === "*") {
      setNum((prev) => actionnum * Number(prev));
    }
  };

  const handleCancel = () => {
    setNum("");
    setActionNum(null);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        border: "1px solid",
        gap:"10px",
        height:"100vh"
      }}
    >
      <div>
        <h1 style={{fontSize:"40px" , color:"white"}}>{!num ? "0" : num}</h1>
      </div>

      <div className={style.firstlayer}>
        <div className={style.btndiv}>
          <button className={style.btn} onClick={() => handleNum("1")}>
            {" "}
            1
          </button>
        </div>
        <div className={style.btndiv}>
          <button className={style.btn} onClick={() => handleNum("2")}>
            2
          </button>
        </div>
        <div className={style.btndiv}>
          <button className={style.btn} onClick={() => handleNum("3")}>
            3
          </button>
        </div>
        <div className={style.actionbtndiv}>
          <button className={style.actionbtn} onClick={() => handlePlus("+")}>
            +
          </button>
        </div>
      </div>

      <div className={style.firstlayer}>
        <div className={style.btndiv}>
          <button className={style.btn} onClick={() => handleNum("4")}>
            4
          </button>
        </div>
        <div className={style.btndiv}>
          <button className={style.btn} onClick={() => handleNum("5")}>
            5
          </button>
        </div>
        <div className={style.btndiv}>
          <button className={style.btn} onClick={() => handleNum("6")}>
            6
          </button>
        </div>
        <div className={style.actionbtndiv}>
          <button className={style.actionbtn} onClick={() => handleMinus("-")}>
            -
          </button>
        </div>
      </div>

      <div className={style.firstlayer}>
        <div className={style.btndiv}>
        <button className={style.btn} onClick={() => handleNum("7")}>
        7
      </button>
        </div>
        <div className={style.btndiv}>
        <button className={style.btn} onClick={() => handleNum("8")}>
        8
      </button>
        </div>
        <div className={style.btndiv}>
        <button className={style.btn} onClick={() => handleNum("9")}>
        9
      </button>
        </div>
        <div className={style.actionbtndiv}>
        <button className={style.actionbtn} onClick={() => handleMultiply("*")}>
          *
        </button>
        </div>
     
      </div>




      <div className={style.firstlayer}>
        <div className={style.specialdiv}>
        <button className={style.specialbtn} onClick={handleCancel}>
          C
        </button>
        </div>
        <div className={style.btndiv}>
        <button className={style.btn} onClick={() => handleNum("0")}>
        0
      </button>
        </div>
        <div className={style.specialdiv}>
        <button className={style.specialbtn} onClick={handleEqual}>
          =
        </button>

        </div>
        <div className={style.actionbtndiv}>
        <button className={style.actionbtn} onClick={() => handleDivide("/")}>
          /
        </button>
        </div>
      </div>

     

     

      <div>
       
       
        
      
      </div>
    </div>
  );
}

export default Calculator;
