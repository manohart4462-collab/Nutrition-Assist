import { Bell, Search } from "lucide-react";

export default function TopNavbar() {

  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 17) greeting = "Good Afternoon";

  return (

    <header className="bg-white border-b shadow-sm sticky top-0 z-40">

      <div className="px-8 py-5 flex justify-between items-center">

        <div>

          <h2 className="text-3xl font-bold">

            {greeting} 👋

          </h2>

          <p className="text-gray-500">

            Welcome back to your Nutrition Dashboard

          </p>

        </div>

        <div className="flex items-center gap-5">

          <button className="p-3 rounded-full hover:bg-gray-100">

            <Search size={20} />

          </button>

          <button className="p-3 rounded-full hover:bg-gray-100">

            <Bell size={20} />

          </button>

          <img
            src="https://ui-avatars.com/api/?background=10b981&color=fff&name=User"
            alt="avatar"
            className="w-12 h-12 rounded-full"
          />

        </div>

      </div>

    </header>

  );

}