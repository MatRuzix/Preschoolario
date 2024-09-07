import React from "react";

import Skeleton from "@/src/features/suspense/Skeleton";
import Groups from "@/src/features/groups/components/Groups";

const groupsPage = () => {
  return (
    <React.Suspense fallback={<Skeleton />}>
      <Groups />
    </React.Suspense>
  );
};

export default groupsPage;
