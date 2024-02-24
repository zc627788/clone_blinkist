import React, { ReactNode } from 'react';

type ContentProps = {
  children: ReactNode;
};

const Content = ({ children }: ContentProps) => (
  <div className="content">
    {children}
  </div>
);

export default Content;