import { useEffect, useState } from "react";
import { getDashboard } from "../api/dashboardApi";
import DashboardLayout from "../layouts/DashboardLayout";
import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import StatCard from "../components/dashboard/StatCard";
import BMIStatus from "../components/dashboard/BMIStatus";
import AITips from "../components/dashboard/AITips";


import {
  Flame,
  Droplets,
  Activity,
  Target,
} from "lucide-react";

import WeeklyCaloriesChart from "../components/charts/WeeklyCaloriesChart";
import MealOverview from "../components/dashboard/MealOverview";

export default function Home() {
const [dashboard, setDashboard] = useState(null);

const loadDashboard = async () => {

    try {

        const res = await getDashboard();

        setDashboard(res.data);

    }

    catch(err){

        console.log(err);

    }

};

useEffect(()=>{

    loadDashboard();

},[]);
  return (
  <DashboardLayout>
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-800">
            Nutrition Dashboard
          </h1>

          <p className="text-slate-500 mt-2">
            Monitor your health, nutrition, and daily progress in one place.
          </p>
        </div>

        {/* Welcome Banner */}
        <WelcomeBanner />

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

          <StatCard
            title="Calories"
            value={dashboard?.calories ?? "--"}
            subtitle="Today's Calories"
            icon={<Flame size={28} />}
            color="bg-orange-500"
          />

          <StatCard
            title="Water"
            value={`${dashboard?.waterConsumed ?? "--"} L`}
            subtitle="Today's Intake"
            icon={<Droplets size={28} />}
            color="bg-sky-500"
          />

          <StatCard
            title="BMI"
            value={dashboard?.bmi ?? "--"}
            subtitle="Healthy Range"
            icon={<Activity size={28} />}
            color="bg-green-500"
          />

          <StatCard
            title="Goal"
            value={dashboard?.goal ?? "--"}
            subtitle="Current Goal"
            icon={<Target size={28} />}
            color="bg-purple-500"
          />

        </div>

        {/* Weekly Chart + Water */}
      <WeeklyCaloriesChart />

        {/* Meals + BMI */}
        <div className="grid lg:grid-cols-3 gap-6 mt-8">

          <div className="lg:col-span-2">
            <MealOverview />
          </div>

          <BMIStatus bmi={dashboard?.bmi} />

        </div>

        {/* AI + Activity */}
        <div className="grid lg:grid-cols-2 gap-6 mt-8">

          <AITips goal={dashboard?.goal} />

          

        </div>

      </div>
    </div>
  </DashboardLayout>
);}