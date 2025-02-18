import Image from "next/image";

const images = [
  "/images/astronaut.png",
  "/images/benhunt-cyborg.png",
  "/images/benhunt-futuristic-player.png",

  "/images/tatooed-man.png",
  "/images/three-girls.png",
  "/images/benhunt-futuristic-player-2.png",
  "/images/dr-hunt-hyperrealistic-astronaut.png",
  "/images/green-man.png",
];

const links = [
  {
    name: "Home",
    href: "#",
  },
  { name: "About Us", href: "#" },
  { name: "Services", href: "#" },
  { name: "Products", href: "#" },
  {
    name: "Blogs",
    href: "#",
  },
  { name: "FAQs", href: "#" },
  { name: "Contact Us", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

const social_handles = [
  {
    name: "instagram",
    href: "#",
  },
  {
    name: "linkedin",
    href: "#",
  },
  {
    name: "facebook",
    href: "#",
  },
  {
    name: "discord",
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="h-80 w-screen absolute bottom-0 overflow-hidden bg-black-700  bg-[url('/images/container-bg.png')] bg-repeat bg-blend-soft-light">
      <div className="flex w-full h-full">
        {/* Left Section - Image grid */}
        <div className="relative w-3/5 flex items-center -mr-16 overflow-hidden z-10">
          <div className="grid grid-cols-4 grid-rows-2 gap-1">
            {images.map((image, index) => {
              let clipPathClass = "";

              if (index === 3) {
                // Slanted bottom-right cut
                clipPathClass =
                  "[clip-path:polygon(0%_0%,100%_0%,40%_100%,0%_100%)]";
              } else if (index === images.length - 1) {
                // Tiny inverted right-angled triangle
                clipPathClass =
                  "[clip-path:polygon(0%_0%,15%_0%,40%_1%,0%_48%)]";
              } else if (index === images.length - 2) {
                // Bottom-right triangle cut
                clipPathClass =
                  "[clip-path:polygon(0%_0%,100%_0%,100%_50%,0%_100%)]";
              }

              return (
                <Image
                  key={index}
                  src={image}
                  alt={`image-${index}`}
                  width={178}
                  height={213}
                  className={`object-cover rounded-md h-[213px] min-w-[178px] w-[178px] ${clipPathClass}`}
                />
              );
            })}
          </div>
        </div>

        {/* Right Section - Links */}
        <div className="relative w-full text-white flex items-center gap-40 justify-evenly -ml-10">
          <Image
            src="/images/unie-logo-brown.png"
            alt="snie logo"
            width={180}
            height={38}
            className="w-60 h-16 ml-20"
          />
          <div>
            <p className="uppercase font-bold text-base font-mortendBold text-brown-600 pl-4">
              // Site Map
            </p>
            <ul className="max-w-md grid grid-cols-2 gap-2 text-slate-50 list-none">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    className="uppercase hover:text-brown-600 font-normal leading-[28.56px] text-xs h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-9">
            {social_handles.map((handle) => (
              <a
                href={handle.href}
                key={handle.name}
                className="flex justify-center"
              >
                <Image
                  src={`/images/${handle.name}.svg`}
                  alt={handle.name}
                  width={24}
                  height={23}
                  className="w-6 h-6"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
