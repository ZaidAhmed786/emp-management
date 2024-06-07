import { IconBase } from "react-icons/lib";
import { FaCubes } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaRegCircleDot } from "react-icons/fa6";
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

export const AdminInfoSectionData = [
  {
    icon: <FaCubes className="icon-cube" />,
    heading: "112",
    text: "Projects",
  },
  {
    icon: <FaDollarSign className="icon-cube" />,
    heading: "44",
    text: "Clients",
  },
  {
    icon: <IoDiamondOutline className="icon-cube" />,
    heading: "37",
    text: "Tasks",
  },
  {
    icon: <FaUser className="icon-cube" />,
    heading: "218",
    text: "Employees",
  },
];
export const RatingSectionData = [
  {
    topheading: "New Employees",
    minitext: "+10%",
    heading: "10",
    shortinfo: "Overall Employees 218",
  },
  {
    topheading: "Earnings",
    minitext: "+12.5%",
    heading: "$1,42,300",
    shortinfo: "Previous Month $1,15,852",
  },
  {
    topheading: "Expenses",
    minitext: "-2.8%",
    heading: "$8,500",
    shortinfo: "Previous Month $7,500",
  },
  {
    topheading: "Profit",
    minitext: "-75%",
    heading: "$1,12,000",
    shortinfo: "Previous Month $1,42,000",
  },
];
export const AdminDashboardStatisticsCardData = [
  {
    Days: "Today Leave",
    Rating: "4",
    Timing: "/ 65",
  },
  {
    Days: "Pending Invoice",
    Rating: "15 ",
    Timing: " / 92",
  },
  {
    Days: "Completed Projects",
    Rating: "86 ",
    Timing: "/ 112",
  },
  {
    Days: "Open Tickets",
    Rating: "190",
    Timing: "/ 212",
  },
  {
    Days: "Closed Tickets",
    Rating: "22",
    Timing: "/ 212",
  },
];

export const AdminDashboardTaskStatisticsCardData = [
  {
    icon: <FaRegCircleDot />,
    heading: "Completed Tasks",
    minitext: "166",
    color: "rgb(116 96 238 )",
  },
  {
    icon: <FaRegCircleDot />,
    heading: "Inprogress Tasks",
    minitext: "115",
    color: "rgb(255 188 52)",
  },
  {
    icon: <FaRegCircleDot />,
    heading: "Pending Tasks",
    minitext: "47",
    color: "rgb(246 45 81)",
  },
  {
    icon: <FaRegCircleDot />,
    heading: "Review Tasks",
    minitext: "5",
    color: "rgb(0 158 251",
  },
];

export const TodayAbsentCardData = [
  {
    image:
      "https://smarthr.dreamstechnologies.com/tailwind/template/src/images/user.jpg",
    heading: "4 Mar 2022",
    minitext: "Martin Lewis",
    spanone: "Leave Date",
    spantwo: "Pending",
  },
  {
    image:
      "https://smarthr.dreamstechnologies.com/tailwind/template/src/images/user.jpg",
    heading: "4 Mar 2022",
    minitext: "Martin Lewis",
    spanone: "Leave Date",
    spantwo: "Approved",
  },
];