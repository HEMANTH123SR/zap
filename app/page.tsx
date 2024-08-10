import Cta from "@/components/component/Cta";
import { Faq } from "@/components/component/Faq";
import { PlaceCard } from "@/components/component/PlaceCard";
import { Testimonials } from "@/components/component/Testimonials";
import { BedDouble, CalendarDays, UserRound } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex bg-white flex-col justify-center items-center font-sans">
      {/* hero section */}
      <div className="w-full bg-[#003B95] flex justify-center">
        <div className="w-10/12 text-white flex flex-col ">
          <h1 className="text-5xl font-bold">Find Safe Shelter Quickly</h1>
          <h4 className="text-xl font-semibold mt-4 mb-20">
            Locate nearby shelters, resources, and temporary housing options
            during emergencies.
          </h4>
        </div>
      </div>
      {/* search section */}
      <div className="relative">
        <Link
          href="/search"
          className="bg-[#FFB700] relative -top-5 cursor-pointer  p-1 rounded-lg shadow-md flex items-center space-x-1"
        >
          <div className="flex items-center bg-white p-2 rounded-md flex-grow">
            <BedDouble
              className="text-gray-700 mr-2 w-8 h-8"
              strokeWidth={1.3}
            />
            <input
              type="text"
              placeholder="Enter location"
              className="outline-none  text-black text-lg w-52"
            />
          </div>
          <div className="flex items-center bg-white p-2 rounded-md flex-grow">
            <CalendarDays
              className="text-gray-700 mr-2 w-8 h-8"
              strokeWidth={1.3}
            />
            <input
              type="text"
              placeholder="Date"
              className="outline-none  text-black text-lg w-52"
            />
          </div>
          <div className="flex items-center bg-white p-2 rounded-md flex-grow">
            <UserRound
              className="text-gray-700 mr-2 w-8 h-8"
              strokeWidth={1.3}
            />
            <input
              type="text"
              placeholder="Number of people needing a place"
              className="outline-none  text-black text-lg w-52"
            />
          </div>

          <button className="bg-[#003B95] text-white text-2xl h-full px-5 p-2 rounded-md flex items-center">
            {/* <Search className=" mr-2 w-8 h-8" strokeWidth={1.3} /> */}
            Search
          </button>
        </Link>
      </div>
      {/* Recent disaster area section */}
      <section className="flex flex-col  w-10/12">
        <h3 className="text-2xl font-semibold text-black">
          Recent Disaster Areas
        </h3>
        <h5 className="text-lg  text-slate-500">
          Quickly find affected locations and access resources{" "}
        </h5>
        <div className="flex space-x-7">
          <PlaceCard
            image="https://cf.bstatic.com/xdata/images/xphoto/300x240/140018215.jpg?k=a7e3a19c5810cc3085c669894a09ff20bdca3d872f9b5bdc29ff3c07af7b0c72&o="
            place="Mysore"
          />
          <PlaceCard
            image="https://cf.bstatic.com/xdata/images/xphoto/300x240/140018267.jpg?k=1490379e254d86584e062afb13393830c21737a6d6a0a50371011ce55cac64ee&o="
            place="Kanchipuram
"
          />
          <PlaceCard
            image="https://cf.bstatic.com/xdata/images/xphoto/300x240/140018158.jpg?k=7a99adbec9272ba7dc34c7f345f4e55ab07b39705091cb3fefbcfd761667dd98&o="
            place="Tiruchirappalli
"
          />
          <PlaceCard
            image="https://cf.bstatic.com/xdata/images/xphoto/300x240/140018281.jpg?k=cca5e4d83c39b30620bed9bfda5a9cd6bfc750bff57b2dac6d88bfd94b2b34c9&o="
            place="Hospet
"
          />
          <PlaceCard
            image="https://cf.bstatic.com/xdata/images/xphoto/300x240/140018284.jpg?k=1461bebf1c99cab9ba48eeeaab97c403d93930c4a9d7aa5f91a47d55fd449122&o="
            place="Hampi
"
          />
        </div>
      </section>
      {/* cta section */}
      <Cta />
      {/* testimonials section */}
      <Testimonials />
      {/* faq */}
      <Faq />
    </main>
  );
}
