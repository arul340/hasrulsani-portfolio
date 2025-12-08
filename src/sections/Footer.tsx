import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "Github",
    href: "https://github.com/arul340",
  },
  {
    title: "Kaggle",
    href: "https://www.kaggle.com/arul340",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/hasrul-sani/",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/arul_34/",
  },
];

export const Footer = () => {
  return (
    <footer className="relative z-0 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] pointer-events-none bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col lg:flex-row lg:justify-between items-center gap-8">
          <div className="text-white/40 md:text-base ">
            &copy; {new Date().getFullYear()} Hasrul Sani Portfolio - All Rights
            Reserved
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-8 cursor-pointer z-50">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                className="inline-flex items-center gap-1.5 cursor-pointer z-50"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-semibold md:text-xl lg:text-base">
                  {link.title}
                </span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
