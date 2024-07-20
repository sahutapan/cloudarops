import React from "react";
import TeamCard from "./TeamCard";

const DevOpsTeam = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 space-y-6 md:space-y-0 md:space-x-6">
      <div className="flex-shrink-0 w-full md:w-2/3 lg:w-3/5">
        <img
          src="https://iamops.io/wp-content/uploads/2022/05/DevOps-5-1024x717.png"
          alt="DevOps Team"
          className="w-full h-auto rounded-lg" // Removed border
        />
      </div>
      <div className="flex flex-col items-center md:items-start space-y-6 w-full md:w-1/3 lg:w-2/5">
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
    </div>
  );
};

export default DevOpsTeam;
