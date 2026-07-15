import { Sparkles } from "lucide-react";

export default function AITips({ goal }) {

    const tips = {
        "Weight Gain":
            "Increase your protein intake and include healthy calorie-dense foods.",

        "Weight Loss":
            "Maintain a calorie deficit and eat more vegetables and lean protein.",

        "Maintain Weight":
            "Keep a balanced diet and stay physically active."
    };

    return (

        <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-3xl text-white p-6 shadow-lg">

            <div className="flex items-center gap-3">

                <Sparkles />

                <h2 className="text-2xl font-bold">

                    AI Nutrition Tip

                </h2>

            </div>

            <p className="mt-6 leading-7">

                {tips[goal] || "Complete your profile to receive personalized nutrition advice."}

            </p>

        </div>

    );

}