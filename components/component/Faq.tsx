const faqData = [
    {
        question: "What is RescueHome?",
        answer: "RescueHome is a platform designed to help people find safe shelter quickly during emergencies. It locates nearby shelters, resources, and temporary housing options for those affected by disasters or in need of immediate accommodation."
    },
    {
        question: "How do I search for available shelters?",
        answer: "To search for shelters, simply enter your location, the date you need accommodation, and the number of people in your group in the search bar on our homepage. Click 'Search' to view available options in your area."
    },
    {
        question: "What types of emergencies does RescueHome cater to?",
        answer: "RescueHome caters to various emergencies, including natural disasters (earthquakes, hurricanes, floods), man-made disasters, and personal emergencies requiring immediate shelter."
    },
    {
        question: "Is the information about shelters up-to-date?",
        answer: "We strive to keep our shelter information as current as possible. However, during rapidly changing emergency situations, we recommend contacting the shelter directly to confirm availability and current conditions."
    },
    {
        question: "How can I list my property as a shelter?",
        answer: "To list your property as a shelter, click on the 'List your property' button in the top right corner of the website. You'll need to create an account and provide details about your property and the type of accommodation you can offer."
    },
    {
        question: "What is Couch-Surfing on RescueHome?",
        answer: "Couch-Surfing on RescueHome is a feature that allows individuals to offer spare couches or rooms in their homes as temporary shelter for those in need during emergencies."
    },
    {
        question: "How does RescueHome ensure the safety of users?",
        answer: "We have a robust verification process for both shelter providers and seekers. We also provide safety guidelines and encourage users to report any concerns. However, we recommend users exercise caution and use their best judgment when interacting with others on the platform."
    },
    {
        question: "Is RescueHome free to use?",
        answer: "Yes, RescueHome is free for individuals seeking shelter. Property owners listing their spaces may be subject to a small fee to cover operational costs and ensure the quality of listings."
    },
    {
        question: "Can I find long-term housing through RescueHome?",
        answer: "RescueHome primarily focuses on short-term, emergency housing solutions. However, some listings may offer extended stay options. For long-term housing, we recommend contacting local housing authorities or real estate agencies."
    },
    {
        question: "How can I contact support if I have issues or questions?",
        answer: "You can reach our support team by clicking on the 'Help' link in the footer of our website. We also have a dedicated emergency hotline for urgent situations, which is available 24/7."
    }
];

export const Faq = () => {
    return (
        <div className="bg-[#003B95] py-12 flex justify-center items-center w-full">
            <div className="space-y-4 w-9/12">
                {faqData.map((faq, index) => (
                    <details key={index} className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                            <h2 className="font-medium">{faq.question}</h2>

                            <span className="relative size-5 shrink-0">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </span>
                        </summary>

                        <p className="mt-4 leading-relaxed text-gray-700">
                            {faq.answer}
                        </p>
                    </details>
                ))}
            </div>
        </div>
    );
};

