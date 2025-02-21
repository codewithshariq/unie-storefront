import React from "react";
import Image from "next/image";
import FacebookIcon from "@/public/icons/tabler-icon-brand-facebook.svg";
import InstagramIcon from "@/public/icons/tabler-icon-brand-instagram.svg";
import DiscordIcon from "@/public/icons/tabler-icon-brand-discord.svg";
import LinkedinIcon from "@/public/icons/tabler-icon-brand-linkedin.svg";
import LogoBrown from "@/public/logos/logo-brown.svg?url";
import Link from "next/link";

export default function Footer() {
  const FOOTER_IMAGES_PATH = [
    "/images/footer-img-1.png",
    "/images/footer-img-2.png",
    "/images/footer-img-3.png",
    "/images/footer-img-4.png",
    "/images/footer-img-5.png",
    "/images/footer-img-6.png",
    "/images/footer-img-7.png",
    "/images/footer-img-8.png",
  ];

  const SITE_MAP = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About US",
      url: "/",
    },
    {
      title: "Services",
      url: "/",
    },
    {
      title: "Products",
      url: "/",
    },
    {
      title: "Blog",
      url: "/",
    },
    {
      title: "FAQS",
      url: "/",
    },
    {
      title: "Contact Us",
      url: "/",
    },
    {
      title: "Privacy Policy",
      url: "/",
    },
  ];

  return (
    <footer className="relative flex items-center justify-between w-full h-[346px] overflow-hidden">
      <div className="flex flex-wrap items-start gap-x-[3px] gap-y-1.5 max-w-[721px] mt-[-20px] rhomboid">
        {FOOTER_IMAGES_PATH.map((path, index) => (
          <div
            key={index}
            className="relative flex flex-shrink-0 h-[213px] w-[178px] rounded-md overflow-hidden"
          >
            <Image
              src={path}
              alt={`Footer Image ${index}`}
              fill
              className="absolute object-cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute right-0 flex items-center justify-center gap-x-[42px]">
        <Image src={LogoBrown} alt="Logo Brown" width={235} height={60} />
        <div className="flex flex-col">
          <p className="text-brown-400 uppercase font-bold font-mortendLight text-base leading-[135%] tracking-[0.32px] mb-[5px]">
            {"// Site Map"}
          </p>
          <div className="flex flex-col flex-wrap h-[116px] gap-x-[77px]">
            {SITE_MAP.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                className="font-spaceGrotesk text-white-100 text-xs leading-[238%] tracking-[0.36px] uppercase"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="inline-flex gap-[35px] flex-col justify-center items-start pr-8">
          <Link href="/">
            <InstagramIcon />
          </Link>
          <Link href="/">
            <LinkedinIcon />
          </Link>
          <Link href="/">
            <FacebookIcon />
          </Link>
          <Link href="/">
            <DiscordIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
}
