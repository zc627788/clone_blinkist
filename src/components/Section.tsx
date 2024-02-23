import React, { ReactNode } from 'react';

type SectionProps = {
  children: ReactNode;
};

const Section = ({ children }: SectionProps) => (
  <div className="section">
    {children}
  </div>
);

export default Section;