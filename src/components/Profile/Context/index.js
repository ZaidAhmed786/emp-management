import { IconBase } from "react-icons/lib";

import { MdOutlineEdit } from "react-icons/md";
import DropdownMenu from "../localComponents/DropdownMenu/DropdownMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export const ProfileFristSectionData = [
  {
    heading: "Phone:",
    textlink: "9876543210",
    text: "",
    icon: <MdOutlineEdit />,
  },
  {
    heading: "Email:",
    textlink: "johndoe@example.com",
    text: "",
  },
  {
    heading: "Birthday:",
    textlink: "",
    text: "2nd August",
  },
  {
    heading: "Address:",
    textlink: "",
    text: "1861 Bayonne Ave, Manchester Township, NJ, 08759",
  },
  {
    heading: "Gender:",
    textlink: "",
    text: "Male",
  },
  {
    heading: "Reports to:",
    textlink: "",
    text: "Jeffery Lalor",
    image:
      "https://smarthr.dreamstechnologies.com/tailwind/template/src/images/profiles/avatar-16.jpg",
  },
];
export const PersonalInformationCardData = [
  {
    heading: "Passport No.",
    textlink: "",
    text: "9876543210",
    icon: <MdOutlineEdit />,
  },
  {
    heading: "Passport Exp Date.",
    textlink: "",
    text: "9876543210",
  },
  {
    heading: "Tel",
    textlink: "9876543210",
    text: "",
  },
  {
    heading: "Nationality",
    textlink: "",
    text: "Indian",
  },
  {
    heading: "Religion",
    textlink: "",
    text: "Christian",
  },
  {
    heading: "Marital status",
    textlink: "",
    text: "Married",
  },
  {
    heading: "Employment of spouse",
    textlink: "",
    text: "NO",
  },
  {
    heading: "No. of children",
    textlink: "",
    text: "2",
  },
];
export const EmergencyContactCardData = [
  {
    section: "Primary",
    items: [
      { heading: "Name", text: "John Doe" },
      { heading: "Relationship", text: "Father" },
      { heading: "Phone", text: "9876543210", color: "rgb(0 0 0)",},
      { heading: "", texttwo: "1234567890" ,color: "rgb(0 0 0)", },
    ],
  },
  {
    section: "Secondary",
    items: [
      { heading: "Name", text: "Karen Wills" },
      { heading: "Relationship", text: "Brother" },
      { heading: "Phone", text: "9876543210", color: "rgb(0 0 0)",},
      { heading: "", texttwo: "1234567890",color: "rgb(0 0 0)", },
    ],
  },
];
export const BankInformationCardData = [
  {
    heading: "Bank name",
    textlink: "",
    text: "ICICI Bank",
    icon: "",
  },
  {
    heading: "Bank account No.",
    textlink: "",
    text: "159843014641",
  },
  {
    heading: "IFSC Code",
    textlink: "",
    text: "ICI24504",
  },
  {
    heading: "PAN No",
    textlink: "",
    text: "TC000Y56",
  },
];
export const FamilyInformationsCardData = [
  {
    heading: "Name",
    text: "Leo",
  },
  {
    heading: "Relationship",
    text: "Brother",
  },
  {
    heading: "Date of Birth",
    text: "Feb 16th, 2019",
  },
  {
    heading: "Phone",
    text: "9876543210",
  },
  {
    heading: "", 
    text: <DropdownMenu />
    
  },
];
export const EducationInformationsCardData = [
  {
    heading: "International College of Arts and Science (UG)",
    text: "Bsc Computer Science",
    texttwo: "2000 - 2003",
  },
  {
    heading: "International College of Arts and Science (PG)",
    text: "Msc Computer Science",
    texttwo: "2000 - 2003",
  },
];
export const ExperienceCardData = [
  {
    heading: "Web Designer at Zen Corporation",
    text: "Jan 2013 -Present (5 years 2 months)",
    texttwo: "",
  },
  {
    heading: "Web Designer at Ron-tech",
    text: "Jan 2013 - Present (5 years 2 months)",
    texttwo: "",
  },
  {
    heading: "Web Designer at Dalt Technology",
    text: "Jan 2013 - Present (5 years 2 months)",
    texttwo: "",
  },
];
