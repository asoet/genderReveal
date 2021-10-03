import React from "react";

import "./Egg.css";

type SubTitleProps = {
  count: number;
  max: number;
  isBoy: boolean;
  isDog: boolean;
};

const text = [
  "Wat wordt haar naam?",
  "Luna?",
  "Bella?",
  "Nala?",
  "Lola?",
  "Bo?",
  "Coco?",
  "Lizzy?",
  "Molly?",
  "Saar?",
  "Balou?",
  "Daisy?",
  "Belle?",
  "Lady?",
  "Finn?",
  "Mowgli?",
  "Elmo?",
];

const SubTitle: React.FC<SubTitleProps> = ({ count, max, isBoy, isDog }) => {
  const getText = () => {
    if (!count) {
      return text[0];
    }
    const value = text[count];
    return value ? value : text[0];
  };

  return (
    <>
      {count < max && <p className="girl-text">{getText()}</p>}
      {count >= max && (
        <>
          {isDog ? (
            <p className="girl-text">Pippa!</p>
          ) : (
            <>
              {isBoy && <p className="boy-text">Een Jongen</p>}
              {!isBoy && <p className="girl-text">Een meisje</p>}
            </>
          )}
        </>
      )}
    </>
  );
};

export default SubTitle;
