import yogaImage from "../assets/images/yo_img.png";
import yoga1 from "../assets/images/our_yoga1.png";
import yoga2 from "../assets/images/our_yoga2.png";
import yoga3 from "../assets/images/our_yoga3.png";
import yoga4 from "../assets/images/our_yoga4.png";
import yogachild1 from "../assets/images/240_F_128877857_ciG8cSsFaIQESEgu0OBu60Q7njQwSVru.jpg";
import yogachild2 from "../assets/images/240_F_210187231_QB0KzbCwIWGu1KGJWWpXeJzvuDRUuAmB.jpg";
import yogachild3 from "../assets/images/240_F_389028401_eSLUlI959F0V4NCvrZbLRIO0jD0zttwN.jpg";

export const MENUITEM = [
  {
    id: 1,
    linkName: "Home",
    to: "/",
    class: "block px-7 py-2 text-white  bg-gray-800 rounded-md  text-base ",
  },
  {
    id: 2,
    linkName: "YOGA",
    to: "/Yoga",
    class:
      "block px-7 py-2 text-white  hover:bg-gray-800 rounded-md  text-base ",
  },
  {
    id: 3,
    linkName: "CLASSES",
    to: "/Classes",
    class:
      "block px-7 py-2 text-white  hover:bg-gray-800 rounded-md  text-base",
  },
  {
    id: 4,
    linkName: "ABOUT",
    to: "/About",
    class:
      "block px-7 py-2 text-white  hover:bg-gray-800 rounded-md  text-base ",
  },
  {
    id: 5,
    linkName: "PRICING",
    to: "/Pricing",
    class:
      "block px-7 py-2 text-white  hover:bg-gray-800 rounded-md  text-base ",
  },
  {
    id: 6,
    linkName: "CONTACT US",
    to: "/ContactUs",
    class:
      "block px-7 py-2 text-white  hover:bg-gray-800 rounded-md  text-base ",
  },
];

export const CONTACT = [
  {
    id: 1,
    name: "Location",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        ></path>
      </svg>
    ),
  },
  {
    id: 2,
    name: "mail@domain.com",
    icon: (
      <svg
      className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        ></path>
      </svg>
    ),
  },
  {
    id: 3,
    name: "Call : +01 1234567890",
    icon: (
      <svg
      className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        ></path>
      </svg>
    ),
  },
];

export const SLIDESWIPER = [
  {
    id: 1,
    slideImage: yogaImage,
    alt: "Yoga Slide",
    vord: "Y",
    colorVord: "text-yellow-500",
  },
  {
    id: 2,
    slideImage: yogaImage,
    alt: "Yoga Slide",
    vord: "O",
    colorVord: "text-white",

  },
  {
    id: 3,
    slideImage: yogaImage,
    alt: "Yoga Slide",
    vord: "G",
    colorVord: "text-yellow-500",

  }, 
   {
    id: 4,
    slideImage: yogaImage,
    alt: "Yoga Slide",
    vord: "A",
    colorVord: "text-white",

  },
];

export const YOGACLASSES = [
    {
      id: 1,
      name: "HATHA YOGA",
      describtion: "Lorem ipsum dolor sit amet",
      urlImage: yoga1,
      alt: "yoga1",
      class: "col-start-2 col-span-4",
    },
    {
      id: 2,
      name: "HATHA YOGA",
      describtion: "Lorem ipsum dolor sit amet",
      urlImage: yoga2,
      alt: "yoga2",
      class: "col-start-1 col-end-3",
    },
    {
      id: 3,
      name: "HATHA YOGA",
      describtion: "Lorem ipsum dolor sit amet",
      urlImage: yoga3,
      alt: "yoga3",
      class: "col-end-7 col-span-2",
    },
    {
      id: 4,
      name: "HATHA YOGA",
      describtion: "Lorem ipsum dolor sit amet",
      urlImage: yoga4,
      alt: "yoga4",
      class: "col-start-1 col-end-7",
    },
  ];

 export const PRICINGCART = [
    {
      id: 1,
      card: "",
      textCard:
        "Unlimited access to content Fully Secure online backup One Year round the clock support FREE complimentary lanyard",
        borderClasss:"border-r-4 border-indigo-600 mb-9"
    },
    {
      id: 2,
      cart: "",
      textCard:
        "Unlimited access to content Fully Secure online backup One Year round the clock support FREE complimentary lanyard",
        borderClasss:"border-r-4 border-indigo-600 mb-9"
  
    },
    {
      id: 3,
      cart: "",
      textCard:
      "Unlimited access to content Fully Secure online backup One Year round the clock support FREE complimentary lanyard",
      borderClasss:""
    },
  ];
  export const CLASSFORCHILDRENCART = [
    {
      id: 1,
      textCard:
        "Lorem ipsum dolor sit amet, consectetur adipising elit Vivamus varius leo ac mi malesuada, Vitae aliquam lectus effictur.",
      borderClasss: "border-r-4 border-indigo-600 mb-9",
      urlImage: yogachild1,
      alt: "yogachild1",
    },
    {
      id: 2,
      textCard:
        "Lorem ipsum dolor sit amet, consectetur adipising elit Vivamus varius leo ac mi malesuada, Vitae aliquam lectus effictur.",
      borderClasss: "border-r-4 border-indigo-600 mb-9",
      urlImage: yogachild2,
      alt: "yogachild2",
    },
    {
      id: 3,
      textCard:
        "Lorem ipsum dolor sit amet, consectetur adipising elit Vivamus varius leo ac mi malesuada, Vitae aliquam lectus effictur.",
      borderClasss: "",
      urlImage: yogachild3,
      alt: "yogachild3",
    },
  ];