import Banner from "../../components/Banner";
import Form from "./components/Form";

const ContactUs = () => {
  return (
    <>
      <Banner
        mainText="Contact Us"
        secondText="You can reach our pleasant staff at any time.​"
      />
      {/* <h1>Contact</h1> */}
      <div className="bg-white ">
        <Form />
      </div>
    </>
  );
};

export default ContactUs;
