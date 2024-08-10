import { BedSingle, Shield, Sofa, UserRound, Map, HeartHandshake } from "lucide-react";

export const Nav = () => {
    return (
        <header className="flex flex-col bg-[#003B95] justify-start items-center w-full h-48">
            <nav className="w-10/12 mt-5  flex justify-between items-center">
                {/* logo */}
                <div className="flex justify-center items-center">
                    <HeartHandshake className="h-7 w-7 text-white" />
                    <h1 className="text-2xl font-semibold text-white font-sans pl-1">
                        RescueHome
                    </h1>
                </div>
                {/* auth and list */}
                <div className="flex items-center space-x-2  p-2 font-sans">
                    <button className="text-white font-semibold ">
                        List your property
                    </button>
                    <div className="px-1.5"></div>
                    <button className="text-[#1888EB] bg-white border rounded-sm shadow  py-1.5 font-semibold px-3 text-sm">
                        Register
                    </button>
                    <button className="text-[#1888EB] bg-white border rounded-sm shadow py-1.5 font-semibold px-3 text-sm">
                        Sign in
                    </button>
                </div>
            </nav>
            <div className=" w-10/12 font-sans  text-white flex space-x-1.5 items-center py-2 ">
                <div className="flex space-x-2 items-center cursor-pointer border bg-[#1A4FA0]  px-5 rounded-full py-1.5">
                    <Sofa className="w-6 h-6 " strokeWidth={1.3} />
                    <span className="text-lg font-light">Couch-Surfing</span>
                </div>
                <div className="flex space-x-2 items-center cursor-pointer hover:bg-[#1A4FA0]  px-5 rounded-full py-1.5">
                    <BedSingle className="w-6 h-6 " strokeWidth={1.3} />
                    <span className="text-lg font-light">Shelters</span>
                </div>
                <div className="flex space-x-2 items-center cursor-pointer hover:bg-[#1A4FA0] px-5 rounded-full py-1.5">
                    <Shield className="w-6 h-6 " strokeWidth={1.3} />
                    <span className="text-lg font-light">Safety</span>
                </div>

                <div className="flex space-x-2 items-center cursor-pointer hover:bg-[#1A4FA0] px-5 rounded-full py-1.5">
                    <UserRound className="w-6 h-6 " strokeWidth={1.3} />
                    <span className="text-lg font-light">Profile</span>
                </div>
                <div className="flex space-x-2 items-center cursor-pointer hover:bg-[#1A4FA0] px-5 rounded-full py-1.5">
                    <Map className="w-6 h-6 " strokeWidth={1.3} />
                    <span className="text-lg font-light">Map</span>
                </div>
            </div>
        </header>
    );
};
