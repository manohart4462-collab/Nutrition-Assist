import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", calories: 1850 },
  { day: "Tue", calories: 2100 },
  { day: "Wed", calories: 1950 },
  { day: "Thu", calories: 2250 },
  { day: "Fri", calories: 2050 },
  { day: "Sat", calories: 1800 },
  { day: "Sun", calories: 2150 },
];

export default function WeeklyCaloriesChart() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 border border-gray-100">

      <h2 className="text-xl font-bold text-gray-800 mb-6">
        Weekly Calories
      </h2>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="day" />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="calories"
              stroke="#10b981"
              strokeWidth={4}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}