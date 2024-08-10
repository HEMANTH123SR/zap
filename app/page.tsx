import { BedDouble, CalendarDays, UserRound, Search } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center font-sans">
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
      <div className="relative">
        <div className="bg-[#FFB700] relative -top-5   p-1 rounded-lg shadow-md flex items-center space-x-1">
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
        </div>
      </div>
    </main>
  );
}
