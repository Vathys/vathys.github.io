import { ArrowUp, ArrowUpRight } from "lucide-react";

const footerItems = {
  linkedin: {
    href: "https://www.linkedin.com/in/deep-desai-35943b196/",
  },
  github: {
    href: "https://github.com/Vathys",
  },
  email: {
    href: "mailto:deepdesai00@gmail.com",
  },
  rss: {
    href: "/rss",
  },
};

export default function Footer() {
  return (
    <footer className="p-8 text-sm border-t border-border">
      <div className="flex flex-col justify-between">
        <ul className="font-sm mt-8 flex flex-row font-mono">
          {Object.entries(footerItems).map(([name, { href }]) => {
            return (
              <li key={name}>
                <a
                  className="flex items-center gap-2 m-2 transition-all hover:text-muted"
                  rel="noopener noreferrer"
                  target="_blank"
                  href={href}
                >
                  <ArrowUpRight />
                  <p>{name}</p>
                </a>
              </li>
            );
          })}
        </ul>
        <p className="mt-8 text-neutral-600 dark:text-neutral-300">
          © Copyright {new Date().getFullYear()}, Deep Desai (Vathys)
        </p>
      </div>
    </footer>
  );
}

// export default function Footer() {
//   return (
//     <footer className="mb-16">
//       <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
//         <li>
//           <a
//             className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
//             rel="noopener noreferrer"
//             target="_blank"
//             href="https://www.linkedin.com/in/deep-desai-35943b196/"
//           >
//             <ArrowUpRight />
//             <p className="ml-2 h-7">linkedin</p>
//           </a>
//         </li>
//         <li>
//           <a
//             className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
//             rel="noopener noreferrer"
//             target="_blank"
//             href="https://github.com/Vathys"
//           >
//             <ArrowUpRight />
//             <p className="ml-2 h-7">github</p>
//           </a>
//         </li>
//         <li>
//           <a
//             className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
//             rel="noopener noreferrer"
//             target="_blank"
//             href="/rss"
//           >
//             <ArrowUpRight />
//             <p className="ml-2 h-7">rss</p>
//           </a>
//         </li>
//       </ul>
//       <p className="mt-8 text-neutral-600 dark:text-neutral-300">
//         © Copyright {new Date().getFullYear()}, Deep Desai (Vathys)
//       </p>
//     </footer>
//   );
// }
