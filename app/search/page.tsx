"use client";
import React, { useState, useEffect, useRef } from "react";

interface HostProfile {
    _id: string;
    phoneNumber: string;
    street: string;
    city: string;
    state: string;
    des: string;
    maxGuests: number;
    availableDates: string;
    coordinates: string;
    images: string;
    __v: number;
}

const SearchPage = () => {
    const [search, setSearch] = useState<string>("");
    const [data, setData] = useState<HostProfile[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    useEffect(() => {
        if (search.trim() === "") {
            setData([]);
            return;
        }

        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const res = await fetch(
                    `/api/get-result?city=${encodeURIComponent(search)}`
                );

                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }

                const result = await res.json();
                setData(result.data || []);
            } catch (error) {
                setError((error as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [search]);

    return (
        <div className="relative flex flex-col space-y-1 w-full justify-center items-center mt-6">
            <input
                className="w-10/12 absolute -top-14 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans custom-placeholder no-border pl-3 border-2 border-[#003B95] rounded-lg text-[#003B95]"
                ref={inputRef}
                type="text"
                aria-label="search"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className="w-10/12 h-0.5 bg-primary"></div>
            <div className="min-h-4"></div>
            <div className="w-10/12 min-h-[70vh] flex flex-col gap-4">
                {loading && <div className="text-gray-500">Loading...</div>}
                {error && <div className="text-red-500">Error: {error}</div>}
                {data.length === 0 && !loading && !error && (
                    <div className="text-gray-500">No results found</div>
                )}
                {data.map((host) => (
                    <div key={host._id}>
                        <div className="flex items-center gap-4 cursor-pointer">
                            <img
                                alt="couch"
                                className="h-[100px] w-[80px] object-cover rounded-lg"
                                src={host.images}
                                style={{
                                    aspectRatio: "100/100",
                                    objectFit: "cover",
                                }}
                            />
                            <div className="flex flex-col justify-start items-start">
                                <span className="text-base font-sans font-bold line-clamp-1 break-all">
                                    {host.city}
                                </span>
                                <span className="font-sans text-sm">Max Guests: {host.maxGuests}</span>
                                <span className="text-xs text-gray-500 font-mono">
                                    {host.phoneNumber}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchPage;
