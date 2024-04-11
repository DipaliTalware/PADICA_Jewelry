import about from "../assets/about.webp";

const AboutUs = () => {
  return (
    <div id="about" className="flex bg-white pb-14">
      <div className="flex-col content-center pt-10 pb-8 text-center bg-white rounded-md ">
        <h2 className=" text-3xl bg-white px-10 mb-2 font-bold">About Us</h2>
        <p className="text-lg px-10">
          Welcome to PADICA Jewelry, where elegance meets craftsmanship. We are
          passionate about creating exquisite jewelry pieces that celebrate
          life's special moments. <br /> With our attention to detail and
          commitment to quality, we strive to provide you with timeless
          treasures that will be cherished for generations.
        </p>
        <button className="border-solid border-black px-14 py-3 mt-4 font-semibold hover:bg-black hover:text-white transition duration-300 ease-in-out border-2">
          Learn more
        </button>
      </div>
      <div className="flex justify-center items-center">
        <img src={about} alt="about" className="rounded-md pr-2" />
      </div>
    </div>
  );
};
export default AboutUs;
