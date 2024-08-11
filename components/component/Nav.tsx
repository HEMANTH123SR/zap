import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import {
  BedSingle,
  Shield,
  Sofa,
  UserRound,
  Map,
  HeartHandshake,
} from "lucide-react";
import Link from "next/link";
export const Nav = () => {
  return (
    <header className="flex flex-col bg-[#003B95] justify-start items-center w-full h-48">
      <nav className="w-10/12 mt-5  flex justify-between items-center">
        {/* logo */}
        <Link href={"/"} className="flex justify-center items-center">
          <HeartHandshake className="h-7 w-7 text-white" />
          <h1 className="text-2xl font-semibold text-white font-sans pl-1">
            RescueHome
          </h1>
        </Link>
        {/* auth and list */}
        <div className="flex items-center space-x-2  p-2 font-sans">
          <Link href={"/onboard"} className="text-white font-semibold ">
            List your property
          </Link>
          <div className="px-1.5"></div>
          <SignedOut>
            <Link
              href={`https://current-whale-69.accounts.dev/sign-up?redirect_url=http%3A%2F%2Flocalhost%3A3000%2F`}
              className="text-[#1888EB] bg-white border rounded-sm shadow  py-1.5 font-semibold px-3 text-sm"
            >
              Register
            </Link>
            <Link
              href={`https://current-whale-69.accounts.dev/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A3000%2F`}
              className="text-[#1888EB] bg-white border rounded-sm shadow py-1.5 font-semibold px-3 text-sm"
            >
              Sign in
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
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

        <Link
          href={"https://current-whale-69.accounts.dev/user"}
          className="flex space-x-2 items-center cursor-pointer hover:bg-[#1A4FA0] px-5 rounded-full py-1.5"
        >
          <UserRound className="w-6 h-6 " strokeWidth={1.3} />
          <span className="text-lg font-light">Profile</span>
        </Link>
        <Link
          href={"/maps"}
          className="flex space-x-2 items-center cursor-pointer hover:bg-[#1A4FA0] px-5 rounded-full py-1.5"
        >
          <Map className="w-6 h-6 " strokeWidth={1.3} />
          <span className="text-lg font-light">Map</span>
        </Link>
      </div>
    </header>
  );
};
