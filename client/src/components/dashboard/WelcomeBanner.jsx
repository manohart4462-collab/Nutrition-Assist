import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function WelcomeBanner() {

    const hour = new Date().getHours();

    let greeting = "Good Evening";

    if(hour < 12){
        greeting = "Good Morning";
    }
    else if(hour < 17){
        greeting = "Good Afternoon";
    }

    return (

        <motion.div
        initial={{opacity:0,y:30}}
        animate={{opacity:1,y:0}}
        transition={{duration:.5}}

        className="rounded-3xl bg-gradient-to-r from-emerald-500 to-green-600 text-white p-10 shadow-xl overflow-hidden relative"
        >

            <div className="absolute right-10 top-8 opacity-20">

                <Sparkles size={140}/>

            </div>

            <div className="relative z-10">

                <h1 className="text-4xl font-bold">

                    {greeting} 👋

                </h1>

                <p className="mt-3 text-lg text-green-100 max-w-2xl">

                    Welcome back! Stay consistent with your healthy eating
                    habits and track your daily nutrition effortlessly.

                </p>

                <div className="mt-8 flex gap-4 flex-wrap">

                    <Link
                    to="/plans/new"
                    className="bg-white text-emerald-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">

                        New Meal Plan

                    </Link>

                    <Link
                    to="/plans/suggested"
                    className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-emerald-600 transition">

                        View Current Plan

                    </Link>

                </div>

            </div>

        </motion.div>

    )

}