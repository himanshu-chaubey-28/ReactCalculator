import React from "react";
import { useState } from "react";

const Calculator = () => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const operations = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (
      (operations.includes(value) && calc === "") ||
      (operations.includes(value) && operations.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);

    if (!operations.includes(value)) {
      //last ele not a operator
      setResult(eval(calc + value).toString());
    }
  };

  const calculate = () => {
    setCalc(result.toString());
  };

  const deleteLast = () => {
    if (calc == "") {
      return;
    }

    const value = calc.slice(0, -1);

    setCalc(value);
  };

  const allClear = () => {
    const value = "";

    setCalc(value);
  };

  const plusMinus = () => {};

  return (
    <div className="wrapper">
      <div class="mx-auto overflow-hidden mt-10 mb-2 bg-black-900 shadow-lg border rounded-lg lg:w-2/6 md:w-3/6 sm:w-4/6">
        <div class="">
          <div class="p-5 text-black text-center text-3xl bg-black-900">
            <span class="text-orange-500">Calcu</span>lator
          </div>
          <div class="p-5 text-white text-right text-3xl bg-black-800">
            <span class="text-orange-500">
              {/*   */}
              {calc || "0"}
            </span>
          </div>
        </div>
      </div>

      <div class="grid justify-center lg:w-2/6 md:w-3/6 sm:w-4/6 mx-auto bg-black text-3xl">
        <div className="row grid grid-cols-4 gap-4">
          <button
            class="bg-gray-300 hover:bg-gray-400 text-gray-800  py-2 m-1 px-4 rounded-full"
            onClick={allClear}
          >
            C
          </button>
          <button
            class="bg-gray-300 hover:bg-gray-400 text-gray-800  py-2 m-1 px-4 rounded-full"
            onClick={deleteLast}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
            </svg>
          </button>
          <button
            class="bg-gray-300 hover:bg-gray-400 text-gray-800  py-2 m-1 px-4 rounded-full"
            onClick={plusMinus}
          >
            &plusmn;
          </button>

          <button
            class="bg-orange-400 hover:bg-orange-500 text-gray-800  py-2 m-1 px-4 rounded-full"
            onClick={() => {
              updateCalc("/");
            }}
          >
            &#247;
          </button>
        </div>
        <div className="row grid grid-cols-4 gap-4">
          <button
            class="bg-gray-300 hover:bg-gray-400 text-gray-800  py-2 m-1 px-4 rounded-full"
            onClick={() => {
              updateCalc("7");
            }}
          >
            7
          </button>
          <button
            class="bg-gray-300 hover:bg-gray-400 text-gray-800  py-2 m-1 px-4 rounded-full"
            onClick={() => {
              updateCalc("8");
            }}
          >
            8
          </button>
          <button
            class="bg-gray-300 hover:bg-gray-400 text-gray-800  py-2 m-1 px-4 rounded-full"
            onClick={() => {
              updateCalc("9");
            }}
          >
            9
          </button>
          <button
            class="bg-orange-400 hover:bg-orange-500 text-gray-800  py-2 m-1 px-4 rounded-full"
            onClick={() => {
              updateCalc("*");
            }}
          >
            &times;
          </button>
        </div>
        <div className="row grid grid-cols-4 gap-4">
          <button
            class="bg-gray-300 hover:bg-gray-400 text-gray-800  py-2 m-1 px-4 rounded-full"
            onClick={() => {
              updateCalc("4");
            }}
          >
            4
          </button>
          <button
            class="bg-gray-300 hover:bg-gray-400 text-gray-800  py-2 m-1 px-4 rounded-full"
            onClick={() => {
              updateCalc("5");
            }}
          >
            5
          </button>
          <button
            class="bg-gray-300 hover:bg-gray-400 text-gray-800  py-2 m-1 px-4 rounded-full"
            onClick={() => {
              updateCalc("6");
            }}
          >
            6
          </button>
          <button
            class="bg-orange-400 hover:bg-orange-500 text-gray-800  py-2 m-1 px-4 rounded-full"
            onClick={() => {
              updateCalc("+");
            }}
          >
            +
          </button>
        </div>
        <div className="row grid grid-cols-4 gap-4">
          <button
            class="bg-gray-300 hover:bg-gray-400 text-gray-800  py-2 m-1 px-4 rounded-full"
            onClick={() => {
              updateCalc("1");
            }}
          >
            1
          </button>
          <button
            class="bg-gray-300 hover:bg-gray-400 text-gray-800  py-2 m-1 px-4 rounded-full"
            onClick={() => {
              updateCalc("2");
            }}
          >
            2
          </button>
          <button
            class="bg-gray-300 hover:bg-gray-400 text-gray-800  py-2 m-1 px-4 rounded-full"
            onClick={() => {
              updateCalc("3");
            }}
          >
            3
          </button>
          <button
            class="bg-orange-400 hover:bg-orange-500 text-gray-800  py-2 m-1 px-4 rounded-full"
            onClick={() => {
              updateCalc("-");
            }}
          >
            -
          </button>
        </div>

        <div className="row grid grid-cols-4 gap-4">
          <button
            class="bg-gray-300 col-span-2 hover:bg-gray-400 text-gray-800  py-2 m-1 px-4 rounded-full"
            onClick={() => {
              updateCalc("0");
            }}
          >
            0
          </button>
          <button
            class="bg-gray-300 hover:bg-gray-400 text-gray-800  py-2 m-1 px-4 rounded-full"
            onClick={() => {
              updateCalc(".");
            }}
          >
            .
          </button>
          <button
            class="bg-orange-400  hover:bg-orange-500 text-gray-800 py-2 m-1 px-4 rounded-full"
            onClick={calculate}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
