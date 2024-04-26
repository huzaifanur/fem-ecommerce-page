
import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className='mx-auto max-w-[375px] sm:max-w-[1110px] overflow-hidden'>
      {children}
    </div>
  );
};

export default Container;
