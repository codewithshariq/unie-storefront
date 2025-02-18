import Image from "next/image";

export default function Gallery() {
  return (
    <div className="w-screen bg-black-700 bg-[url('/images/container-bg.png')] bg-repeat bg-blend-soft-light">
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-brown-500 font-mortendExtrabold text-center text-5xl">
          HEADER TEXT FOR THIS
        </h1>
        <p className="uppercase text-white-500 font-spaceGrotesk text-base text-center">
          This is describer text for the campaign being launched at the time
        </p>
        <button className="uppercase border border-brown-500 bg-black-500 rounded-full px-3 py-2 text-white-500 mb-8">
          APPLY TO PROGRAM
        </button>
        <Image
          src="/images/gallery-background.png"
          alt="bg-image"
          height={687}
          width={1281}
          className="w-screen"
        />
      </div>
    </div>
  );
}
