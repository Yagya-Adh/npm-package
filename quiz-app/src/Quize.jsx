import React, { useState } from "react";

const Quize = () => {
  const question = [
    {
      textQuestion: "What is the name of your country?",
      textAns: [
        { answer: "Nepal", isCorrect: true },
        { answer: "India", isCorrect: false },
        { answer: "China", isCorrect: false },
        { answer: "America", isCorrect: false },
      ],
    },

    {
      textQuestion: "Who is the father of Nepali Standup comedy?",
      textAns: [
        { answer: "Hari Bhandari", isCorrect: false },
        { answer: "Nabin Sapkota", isCorrect: true },
        { answer: "Santa Magar", isCorrect: false },
        { answer: "Bhim Bhandari", isCorrect: false },
      ],
    },

    {
      textQuestion: "What is the height of Santa?",
      textAns: [
        { answer: "10 CM", isCorrect: true },
        { answer: "100 CM", isCorrect: false },
        { answer: "5 ft", isCorrect: false },
        { answer: "12 Inch", isCorrect: false },
      ],
    },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [isques, setIsQuest] = useState(false);

  const ClickHand = (answeris) => {
    if (answeris === true) {
      //   alert(answeris);
      setScore(score + 1);
    }
    const nextQues = current + 1;

    if (nextQues < question.length) {
      setCurrent(nextQues);
    } else {
      setIsQuest(true);
    }
  };

  return (
    <div className="text-2xl">
      <h1 className="text-center">Quize Board</h1>

      <div className="card">
        <div className="card-header">
          <div className="text-xl border-t-2 mt-3 border-b-2 p-2 flex justify-between">
            <h1>Qui question </h1>
            <span>
              {" "}
              you have scored {score} of {question.length}
            </span>
          </div>
        </div>

        {isques ? (
          <>
            <div className="">
              <h1>Sorry currently no questions is available .</h1>
            </div>
          </>
        ) : (
          <>
            <div className="card-body justify-start flex relative ps-7">
              {question[current].textQuestion}
            </div>
            {question[current].textAns.map((ans, index) => (
              <div className="flex p-2 justify-start ps-7">
                <div className="">
                  <input
                    type="radio"
                    className=""
                    onClick={() => ClickHand(ans.isCorrect)}
                  />
                </div>
                <label htmlFor="" key={index} className="text-xl m-1">
                  {ans.answer}
                </label>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Quize;
