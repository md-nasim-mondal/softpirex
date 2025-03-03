import React, { FC, ReactNode } from "react";

interface SectionHeaderType {
  children: ReactNode;
}

const SectionHeader: FC<SectionHeaderType> = ({ children }) => {
  return (
    <section
      className="inset-0 bg-cover bg-no-repeat py-8"
      style={{ backgroundImage: "url('/assets/images/title.jpg')" }}
    >
      {children}
    </section>
  );
};

export default SectionHeader;
