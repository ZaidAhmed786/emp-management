import { FaCubes } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaRegCircleDot } from "react-icons/fa6";
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
