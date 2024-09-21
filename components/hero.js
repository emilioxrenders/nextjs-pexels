import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative container px-10 py-28 mx-auto w-full flex items-center justify-center font-display font-light">
      <div className="flex flex-col gap-3 lg:max-w-4xl text-center">
        <h1 className="text-2xl">Next.js Pexels Project</h1>
        <p>
          Welcome to my little project working with{" "}
          <Link
            href="https://www.pexels.com/"
            target="_blank"
            className="relative after:w-full after:transition-all after:duration-200 after:left-0 after:absolute after:bg-white after:h-px after:hover:w-0 after:ease-in-out after:bottom-0"
          >
            Pexels'
          </Link>{" "}
          API. This project displays a paginated list of images that navigate to
          a dedicated page for each image. Curious to see how I made this? Check
          it out{" "}
          <Link
            href="https://github.com/emilioxrenders/nextjs-pexels"
            target="_blank"
            className="relative after:w-full after:transition-all after:duration-200 after:left-0 after:absolute after:bg-white after:h-px after:hover:w-0 after:ease-in-out after:bottom-0"
          >
            here!
          </Link>
        </p>
      </div>
    </div>
  );
}
