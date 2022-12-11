"use client";

import Image from "next/image";
import { useState } from "react";
import { urlFor } from "../lib/sanity";

interface Props {
  stack: Stack;
}

const StackItem = ({ stack }: Props) => {
  // const [name, setName] = useState(stack?.title);

  return (
    <div className="flex items-center">
      {/* <div className="flex items-center space-x-1">
        <Image
          src={urlFor(stack?.mainImage).url()}
          alt={stack.title}
          width={20}
          height={20}
        />
        <span className="text-xs font-gray-500 font-light">{stack.title}</span>
      </div> */}
    </div>
  );
};

export default StackItem;
