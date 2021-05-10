import { FiHome, FiDollarSign, FiLogOut, FcSerialTasks } from "react-icons/all";

export const navitems = [
  
  { id: 1, path: "/", icon: <FiHome size={30} />, title: "Dashboard" },
  { id: 1, path: "/dashboard/income", icon: <FiDollarSign size={30} />, title: "Income" },
  { id: 1, path: "/dashboard/expenses", icon: <FiLogOut size={30} />, title: "Expenses" },
  {
    id: 1,
    path: "/dashboard/todos",
    icon: <FcSerialTasks size={30} />,
    title: "My To-do Tracker",
  },
];
