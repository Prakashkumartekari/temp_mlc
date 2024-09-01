import React from "react";
import Fallback from "../../components/Fallback";

const Staffs = React.lazy(() => import("./Staffs"));
export const StaffsScreen: React.FC<any> = (props) => (
  <React.Suspense fallback={<Fallback />}>
    <Staffs {...props} />
  </React.Suspense>
);
