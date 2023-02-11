import React, { FC } from "react";

interface ChatProps {}

const Chat: FC<ChatProps> = ({}) => {
  return (
    <div className='bg-background p-4 flex-1 flex flex-col gap-4'>
      {Array(20)
        .fill(null)
        .map((_, i) => (
          <div
            key={i}
            className='even:bg-tertiary odd:bg-secondary px-4 py-2 rounded-r-xl'>
            <p>HEJ</p>
          </div>
        ))}
    </div>
  );
};

export default Chat;
