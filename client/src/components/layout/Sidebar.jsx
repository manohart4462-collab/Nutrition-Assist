import {
  LayoutDashboard,
  UtensilsCrossed,
  
  User,
  LogOut,

} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";

const menus = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/home"
  },
  {
    name: "Meal Plans",
    icon: UtensilsCrossed,
    path: "/plans/new"
  },

  {
    name: "Profile",
    icon: User,
    path: "/profile"
  }
];

export default function Sidebar() {
 const navigate = useNavigate();
 const handleLogout = () => {

  // Remove the login token
  localStorage.removeItem("token");

  // Go back to login page
  navigate("/login");

};
  return (

    <aside className="w-72 bg-white border-r shadow-lg flex flex-col">

      <div className="p-7 border-b">

        <h1 className="text-3xl font-bold text-emerald-600">

          Nutrition AI

        </h1>

        <p className="text-sm text-gray-500 mt-2">

          Eat Better. Live Better.

        </p>

      </div>

      <nav className="flex-1 p-5">

        <div className="space-y-3">

          {menus.map((item) => {

            const Icon = item.icon;

            return (

              <NavLink

                key={item.name}

                to={item.path}

                className={({ isActive }) =>

                  `flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300

                  ${

                    isActive

                      ? "bg-emerald-600 text-white shadow"

                      : "text-gray-700 hover:bg-emerald-50"

                  }`

                }

              >

                <Icon size={22} />

                <span className="font-medium">

                  {item.name}

                </span>

              </NavLink>

            );

          })}

        </div>

      </nav>

      <div className="p-5 border-t">

        <button
  onClick={handleLogout}
  className="w-full flex items-center gap-3 px-5 py-4 rounded-2xl hover:bg-red-50 text-red-600 transition"
>

          <LogOut />

          Logout

        </button>

      </div>

    </aside>

  );

}