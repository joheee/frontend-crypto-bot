import React from "react";

export interface PaddingLayoutInterface {
  children: React.ReactNode;
}

export default function PaddingLayout(prop: PaddingLayoutInterface) {
  return (
      <div className="h-screen py-20 px-10 mobile:px-20 tablet:px-32 desktop:px-60">
          {prop.children}
    </div>
  );
}
