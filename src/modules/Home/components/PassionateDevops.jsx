const PassionateDevops = () => {
  return (
    <div className="flex gap-8 mx-24 justify-center items-center">
      <img
        src="https://iamops.io/wp-content/uploads/2024/02/partners.png"
        className="rounded-3xl w-[400px] aspect-square"
      />
      <div className="flex flex-col gap-5">
        <h2 className="text-[40px] font-bold leading-[1.4em]">
          We are <span className="text-[#F56236] ">passionate</span> DevOps
        </h2>
        <span className="flex flex-col gap-6 text-[20px] font-normal">
          <p>
            We breathe Terraform, eat EKS and Kubernetes, and dream about
            Lambdas in our sleep. Our mission is to make your infrastructure and
            CI/CD pipelines ready for scale.
          </p>
          <p>
            We mitigate failure points, smooth performance, ensure uptime, and
            minimize costs. When an incident happens, we take control and get
            things up and running, even at 4:00 am.
          </p>
          <p>We are your DevOps team. We are Cloudarops.</p>
        </span>
      </div>
    </div>
  );
};
export default PassionateDevops;
