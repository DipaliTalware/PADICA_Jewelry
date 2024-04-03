import { NavLink } from "react-router-dom";
import image from "../assets/image.webp";

const Header = () => {
  return (
    <div className="flex justify-between  bg-gray-100 pb-5">
      <div>
        <li className="flex pl-5 text-xl pt-5 px-4 justify-around gap-5">
          {/* <img src={image} alt="logo" className="h-20" /> */}
          <NavLink>New</NavLink>
          <NavLink>Shop</NavLink>
          <NavLink>Bestseller</NavLink>
          <NavLink>About Us</NavLink>
        </li>
      </div>
      <div className="px-4 pt-5 text-xl mr-10 flex">
        PADICA <img src={image} alt="logo" className="h-10" /> JEWELRY
      </div>
      <div className="flex pt-5 mr-5 p-2 ">
        <NavLink className="pr-5">
          <svg
            className="h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
          </svg>
        </NavLink>
        <NavLink>
          <svg
            className="h-6 pr-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </NavLink>
        <NavLink>
          <svg
            className="h-6 pr-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
          </svg>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
