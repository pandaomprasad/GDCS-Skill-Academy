'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AnnouncementBanner() {
  const [show, setShow] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white text-black p-6 rounded-xl shadow-lg max-w-md w-full relative space-y-4">
        <button
          className="absolute top-2 right-2 text-xl font-bold"
          onClick={() => setShow(false)}
        >
          ×
        </button>

        {/* Image */}
        <div className="w-full h-40 relative rounded-lg overflow-hidden">
          <Image
            src="/banner.jpg"
            alt="Announcement"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Heading & Message */}
        <h2 className="text-2xl font-semibold">Company Announcement</h2>
        <p className="text-gray-700">
          Welcome to our website! Check out our latest updates and offers.
        </p>

        {/* Enroll Button */}
        <div className="pt-2">
          <button
            onClick={() => {
              setShow(false);
              router.push("/announcement/details");
            }}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
          >
            Enroll
          </button>
        </div>
      </div>
    </div>
  );
}
