"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function ThreeDCardDemo({ children, className }: { children?: React.ReactNode, className?: string }) {
  return (
    <CardContainer className={className || ""}>
      <CardBody className="relative w-full h-full rounded-4xl">
        <CardItem translateZ="50" className="w-full h-full">
          {children}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

export default ThreeDCardDemo;