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
     
    </div>
  );
}
