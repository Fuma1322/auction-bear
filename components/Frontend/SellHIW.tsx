import { Book, Calendar, Camera, HandCoinsIcon } from "lucide-react"

export default function HowItWorks () {

    const features = [
        {
            icon: <Book />,
            title: "Submit your car",
            desc: "Fill out a short submission form. Attach 6 quick photos of your car. We’ll get back to you within a day."
        },
        {
            icon: <Camera />,
            title: "We craft your listing",
            desc: "We’ll craft a custom listing that highlights what makes your car special, helping it stand out and earn top bids."
        },
        {
            icon: <Calendar />,
            title: "Your auction goes live",
            desc: "Once your listing is approved, your auction goes live — and buyers start competing for your car."
        },
        {
            icon: <HandCoinsIcon />,
            title: "Get paid",
            desc: " When your car sells, we’ll connect you with the buyer for a secure transaction — and you keep 100% of the sale price.."
        }
    ]

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-xl space-y-3">
                    <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        How It Works
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-x-12 divide-y [&>.feature-1]:pl-0 sm:grid-cols-2 sm:gap-y-8 sm:divide-y-0 lg:divide-x lg:grid-cols-4 lg:gap-x-0">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className={`feature-${idx + 1} space-y-3 py-8 lg:px-12 sm:py-0`}>
                                    <div className="w-12 h-12 border text-indigo-600 rounded-full flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-lg text-gray-800 font-semibold">
                                        {item.title}
                                    </h4>
                                    <p>
                                        {item.desc}
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}