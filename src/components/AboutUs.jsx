import about from "../assets/about.webp";

const AboutUs = () => {
  return (
    <div className="flex bg-white pb-14">
      <div className="flex-col content-center pt-10 pb-8 text-center bg-white rounded-md ">
        <h2 className="p-6 text-3xl bg-white px-10 mb-2 font-bold">About Us</h2>
        <p className="text-lg px-10">
          Welcome to PADICA Jewelry, where elegance meets craftsmanship. We are
          passionate about creating exquisite jewelry pieces that celebrate
          life's special moments. <br /> With our attention to detail and
          commitment to quality, we strive to provide you with timeless
          treasures that will be cherished for generations.
        </p>
      </div>
      <div>
        <img src={about} alt="about" className="rounded-md pr-2" />
      </div>
    </div>
  );
};
export default AboutUs;
