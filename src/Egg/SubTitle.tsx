import React from 'react';

import './Egg.css';

type SubTitleProps = {
    count: number;
    max: number
    isBoy: boolean
}

const SubTitle: React.FC<SubTitleProps> = ({count, max, isBoy}) => {

  return (<>
    {(count % 2 !== 0) && count < max && <p className="boy-text">Is het een jongen?</p> }
    {(count % 2 === 0) && count < max && <p className="girl-text">Is het een meisje?</p> }
    {count >= max && isBoy && <p className="boy-text">Een Jongen</p>}
    {count >= max && !isBoy && <p className="girl-text">Een meisje</p>}
    </>
  );
}

export default SubTitle;
