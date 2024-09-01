import React from "react";
import Fallback from "../../components/Fallback";

const Intstitute = React.lazy(() => import("./Institute"));
export const IntstituteScreen: React.FC<any> = (props) => (
  <React.Suspense fallback={<Fallback />}>
    <Intstitute {...props} />
  </React.Suspense>
);
