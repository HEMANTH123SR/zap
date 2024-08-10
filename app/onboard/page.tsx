"use client";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { DropZone } from "@/components/component/DropZone";

type HostProfile = {
  phoneNumber: string;
  street: string;
  city: string;
  state: string;
  des: string;
  maxGuests: number;
  availableDates: string;
  coordinates: string;
  images: string;
};

const Page = () => {
  const { user } = useUser();
  const [hostProfile, setHostProfile] = useState<HostProfile>({
    phoneNumber: "",
    street: "",
    city: "",
    state: "",
    des: "",
    maxGuests: 1,
    availableDates: "",
    coordinates: "",
    images: "",
  });
  const [error, setError] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setHostProfile(prev => ({ ...prev, [name]: value }));
  };



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(hostProfile);
    try {
      const response = await fetch("/api/onboard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(hostProfile),
      });

      if (!response.ok) {
        throw new Error("Failed to create host profile.");
      }

      const data = await response.json();
      console.log("Host profile created successfully:", data);
      alert("Host profile created successfully!");
    } catch (error) {
      console.error("Error creating host profile:", error);
      setError((error as Error).message);
    }
  };

  return (
    <div className="w-full flex justify-center items-center flex-col font-sans">
      <div className="flex flex-col w-11/12 my-6">
        <h1 className="text-5xl font-bold">Create Host Profile</h1>
        <p className="text-sm text-gray-600 mb-8">
          Please fill in the details below to create a host profile for
          providing temporary housing during emergencies.
        </p>
        <div className="w-full h-0.5 bg-[#1A4FA0] rounded-md"></div>
      </div>
      <form onSubmit={handleSubmit} className="w-10/12 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 lg:mx-12">
        {error && <p className="sm:col-span-6 text-red-500">{error}</p>}
        <div className="sm:col-span-6">
          <label className="block text-sm font-medium text-gray-700" htmlFor="phoneNumber">
            Phone Number
          </label>
          <Input
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            value={hostProfile.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="sm:col-span-6">
          <label className="block text-sm font-medium text-gray-700" htmlFor="street">
            Street Address
          </label>
          <Input
            id="street"
            name="street"
            type="text"
            value={hostProfile.street}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700" htmlFor="city">
            City
          </label>
          <Input
            id="city"
            name="city"
            type="text"
            value={hostProfile.city}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700" htmlFor="state">
            State
          </label>
          <Input
            id="state"
            name="state"
            type="text"
            value={hostProfile.state}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="sm:col-span-6">
          <label className="block text-sm font-medium text-gray-700" htmlFor="des">
            Description
          </label>
          <Textarea
            id="des"
            name="des"
            value={hostProfile.des}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="sm:col-span-3">
          <label className="block text-sm font-medium text-gray-700" htmlFor="maxGuests">
            Maximum Guests
          </label>
          <Input
            id="maxGuests"
            name="maxGuests"
            type="number"
            min={1}
            value={hostProfile.maxGuests}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="sm:col-span-3">
          <label className="block text-sm font-medium text-gray-700" htmlFor="availableDates">
            Available Dates
          </label>
          <Input
            id="availableDates"
            name="availableDates"
            type="text"
            value={hostProfile.availableDates}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="sm:col-span-6">
          <label className="block text-sm font-medium text-gray-700" htmlFor="coordinates">
            Location Coordinates
          </label>
          <Input
            id="coordinates"
            name="coordinates"
            type="text"
            placeholder="Latitude, Longitude"
            value={hostProfile.coordinates}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="sm:col-span-6">
          <label className="block text-sm font-medium text-gray-700" htmlFor="images">
            Image URL
          </label>
          <Input
            id="images"
            name="images"
            type="url"
            placeholder="https://example.com/image.jpg"
            value={hostProfile.images}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="w-full flex justify-center items-center mb-28">
          <Button type="submit" className="mt-4">Create Host</Button>
        </div>
      </form>
    </div>
  );
};

export default Page;