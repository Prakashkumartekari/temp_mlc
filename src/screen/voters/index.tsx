import React from "react";
import Fallback from "../../components/Fallback";

const Voters = React.lazy(() => import("./Voters"));
export const VotersScreen: React.FC<any> = (props) => (
  <React.Suspense fallback={<Fallback />}>
    <Voters {...props} />
  </React.Suspense>
);
