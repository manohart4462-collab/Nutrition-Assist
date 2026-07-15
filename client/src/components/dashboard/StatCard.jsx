import { motion } from "framer-motion";

export default function StatCard({
    title,
    value,
    subtitle,
    icon,
    color,
}) {

    return (

        <motion.div

            whileHover={{
                y: -6,
                scale: 1.02,
            }}

            transition={{
                duration: .25
            }}

            className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"

        >

            <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-gray-100 opacity-30"></div>
            <div className="flex justify-between items-center">
                <div>

                    <p className="text-gray-500 text-sm">

                        {title}

                    </p>

                    <h2 className="text-3xl font-bold mt-2">

                        {value}

                    </h2>

                    <p className="text-gray-400 mt-2">

                        {subtitle}

                    </p>

                </div>

                <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white ${color}`}
                >

                    {icon}

                </div>

            </div>

        </motion.div>

    )

}