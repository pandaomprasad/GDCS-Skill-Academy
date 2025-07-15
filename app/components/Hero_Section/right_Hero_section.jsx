import Image from "next/image";

export default function RightHeroSection() {
  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* Triple Capsule */}
      <div className="relative w-[340px] h-[440px] flex items-center justify-center rounded-[100px] border-[3px] border-green-400 bg-white/5">
        <div className="w-[320px] h-[420px] flex items-center justify-center rounded-[90px] border-[3px] border-green-500 bg-white/10">
          <div className="w-[300px] h-[400px] rounded-[80px] border-[3px] border-green-600 overflow-hidden shadow-xl bg-white/10 relative">
            <Image
              src="/student.jpeg"
              alt="Graduate"
              fill
              className="object-cover rounded-[45px]"
            />
          </div>
        </div>
      </div>

      {/* Badge below image */}
      <div className="absolute bottom-[-30px] left-6 flex items-center gap-2 bg-white rounded-lg shadow-md px-4 py-2">
        <span className="text-sm font-semibold text-gray-800">120+ Tutors</span>
        <div className="flex -space-x-2">
          <Image
            src="/tutor1.jpg"
            width={32}
            height={32}
            className="rounded-full border-2 border-white"
            alt="Tutor"
          />
          <Image
            src="/tutor2.jpg"
            width={32}
            height={32}
            className="rounded-full border-2 border-white"
            alt="Tutor"
          />
          <Image
            src="/tutor3.jpg"
            width={32}
            height={32}
            className="rounded-full border-2 border-white"
            alt="Tutor"
          />
          <div className="w-8 h-8 rounded-full bg-yellow-400 text-center text-white font-bold text-sm flex items-center justify-center border-2 border-white">
            +
          </div>
        </div>
      </div>
    </div>
  );
}
