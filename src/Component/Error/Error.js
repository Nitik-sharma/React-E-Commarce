import React from "react";
import { Alert } from "@material-tailwind/react";

function Error() {
  return (
    <div className="grid grid-cols-1 items-center justify-items-center">
      <div className="w-[96]">
        <Alert color="red" className="text-1xl font-bold text-red">
          Soory No product is matching ............. clear the filter and try
          again😊
        </Alert>
        ;
      </div>
    </div>
  );
}

export default Error;
