import React from "react";
import TeamCard from "./TeamCard";
import CloudManagementCard from "./DevopsServiceCard";

const DevOpsServices = () => {
  return (
    <>
      <h2 className="text-center md:text-[60px] leading-[32px] font-bold mb-9 mt-3 text-[36px]">
        DevOps Team for you!
      </h2>
      <CloudManagementCard
        number={1}
        title={"Cloud Management"}
        description="We are responsible for the cloud infrastructure, so it is always 'Production grade' and meets the industry's best practices."
        logoImage={"https://iamops.io/wp-content/uploads/2022/04/2.png"}
      />
    </>
  );
};

export default DevOpsServices;
