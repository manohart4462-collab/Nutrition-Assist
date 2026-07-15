import { Activity } from "lucide-react";

export default function BMIStatus({ bmi }) {

    let status = "Unknown";
    let color = "text-gray-600";

    if (bmi < 18.5) {
        status = "Underweight";
        color = "text-yellow-600";
    }
    else if (bmi < 25) {
        status = "Healthy";
        color = "text-green-600";
    }
    else if (bmi < 30) {
        status = "Overweight";
        color = "text-orange-600";
    }
    else {
        status = "Obese";
        color = "text-red-600";
    }

    return (

        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6">

            <div className="flex items-center gap-3">

                <div className="bg-emerald-100 p-3 rounded-xl text-emerald-600">

                    <Activity />

                </div>

                <div>

                    <h2 className="font-bold text-xl">

                        BMI Analysis

                    </h2>

                    <p className="text-gray-500">

                        Your current health status

                    </p>

                </div>

            </div>

            <div className="mt-8">

                <h1 className="text-5xl font-bold">

                    {bmi ?? "--"}

                </h1>

                <p className={`mt-4 font-semibold text-lg ${color}`}>

                    {status}

                </p>

            </div>

        </div>

    );

}