import {
    Sunrise,
    Soup,
    Salad,
    Apple
} from "lucide-react";

const meals = [
    {
        title: "Breakfast",
        icon: Sunrise,
        color: "bg-orange-100 text-orange-600"
    },
    {
        title: "Lunch",
        icon: Soup,
        color: "bg-green-100 text-green-600"
    },
    {
        title: "Dinner",
        icon: Salad,
        color: "bg-blue-100 text-blue-600"
    },
    {
        title: "Snacks",
        icon: Apple,
        color: "bg-pink-100 text-pink-600"
    }
];

export default function MealOverview() {

    return (

        <div className="bg-white rounded-3xl shadow-lg p-6 border border-gray-100">

            <h2 className="text-2xl font-bold mb-6">

                Today's Nutrition Plan

            </h2>

            <div className="grid md:grid-cols-2 gap-5">

                {meals.map((meal) => {

                    const Icon = meal.icon;

                    return (

                        <div
                            key={meal.title}
                            className="rounded-2xl border border-gray-100 p-5 hover:shadow-lg transition"
                        >

                            <div className="flex justify-between items-center">

                                <div>

                                    <h3 className="text-xl font-semibold">

                                        {meal.title}

                                    </h3>

                                    <p className="text-gray-500 mt-2">

                                        Meal not generated yet

                                    </p>

                                </div>

                                <div className={`${meal.color} p-4 rounded-2xl`}>

                                    <Icon size={28} />

                                </div>

                            </div>

                        </div>

                    )

                })}

            </div>

        </div>

    )

}