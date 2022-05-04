import { IoMdFemale } from "@react-icons/all-files/io/IoMdFemale";
import { IoMdMale } from "@react-icons/all-files/io/IoMdMale";
import React from "react";

interface Props {
  name: string;
}

export default function ReplaceGender({ name }: Props) {
  if (name.endsWith("-f")) {
    return (
      <div className="flex">
        <span>{`${name.split("-f")[0]} `}</span>
        <span>
          <IoMdFemale />
        </span>
      </div>
    );
  }
  if (name.endsWith("-m")) {
    return (
      <div className="flex">
        <span>{`${name.split("-m")[0]} `}</span>
        <span>
          <IoMdMale />
        </span>
      </div>
    );
  }
  return <div>{name}</div>;
}
