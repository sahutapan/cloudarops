import React from "react";
import TeamCard from "./TeamCard";

const DevOpsTeam = () => {
  return (
    <>
      <h2 className="text-center md:text-[60px] leading-[32px] font-bold my-9 text-[36px]">
        Your DevOps Team
      </h2>
      <div className="flex items-center justify-center md:items-start w-full gap-7 flex-wrap">
        <TeamCard
          icon="https://iamops.io/wp-content/uploads/2022/05/DevOps-5-1024x717.png"
          title="Head Of DevOps"
          description="Responsible for ensuring the ideation and implementation of the best infrastructure and tech stack."
        />
        <TeamCard
          icon="https://iamops.io/wp-content/uploads/2022/05/Untitled-design-22.png"
          title="Automation DevOps"
          description="Accelerate processes, scale environments and enable faster and safer iterations with CI/CD workflows."
        />
        <TeamCard
          icon="https://iamops.io/wp-content/uploads/2022/05/MicrosoftTeams-image-4-1024x1024.png"
          title="DevOps Engineer"
          description="Dedicated to your tech team and business values. They act as the main point of contact for your DevOps Team."
        />
      </div>
    </>
  );
};

export default DevOpsTeam;
