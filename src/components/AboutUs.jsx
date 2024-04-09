import aboutUs from "../assets/aboutUs.webp"

 const AboutUs = () => {
  return (
    <div className="wrapper rounded-3xl border-solid">
        <h2 className="p-6 text-2xl text-center bg-white underline">About Us</h2>
        <div className="flex content-center pb-8 text-2xl text-center bg-white rounded-lg px-48 ">
            
            <p className="text-base p-16 mt-16">Welcome to PADICA Jewelry, where elegance meets craftsmanship. <br /> We are passionate about creating exquisite jewelry pieces that celebrate life's special moments. <br /> With our attention to detail and commitment to quality, we strive to provide you with timeless treasures that will be cherished for generations.</p>
            
            
            <div>
                <img src={aboutUs} 
                alt="aboutUs image"
                className="p-8" />
            </div>
        </div>
        

    </div>
    
  )
}
export default AboutUs;