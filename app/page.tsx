export default function Home() {
  return (
    <main className="flex justify-center items-center font-sans">
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
    </main>
  );
}
