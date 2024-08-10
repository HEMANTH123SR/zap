export const Cta = () => {
    return (
        <section className="overflow-hidden bg-[#003B95] sm:grid sm:grid-cols-2 mt-20 border-y-2 border-[#003B95]">
            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                    <h2 className="text-2xl font-bold text-white md:text-3xl">
                        Find Safe Shelter, Anytime, Anywhere
                    </h2>

                    <p className="hidden text-blue-200 md:mt-4 md:block">
                        Our platform connects you to thousands of shelters in times of need.
                        Whether youre facing a natural disaster or a temporary crisis, find
                        a safe place to stay with just a few clicks.
                    </p>

                    <div className="mt-4 md:mt-8">
                        <a
                            href="#"
                            className="inline-block rounded text-[#003B95] px-12 py-3 text-sm font-medium bg-white transition hover:bg-slate-100 focus:outline-none focus:ring focus:ring-yellow-400"
                        >
                            Find a Shelter Now
                        </a>
                    </div>
                </div>
            </div>

            <img
                alt="People finding shelter"
                src="https://images.unsplash.com/photo-1558522195-e1201b090344?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SGVscGluZyUyMEhhbmRzfGVufDB8MHwwfHx8MA%3D%3D"
                className="h-56 w-full object-cover sm:h-full"
            />
        </section>
    );
};

export default Cta;
