import { Cover } from "@/components/ui/cover"

export default function CoverDemo() {
  return (
    <div>
      <h1 className="font-bold text-center md:text-left text-[40px] md:text-5xl lg:text-6xl lg:tracking-wider leading-snug mt-6 relative z-20 py-6 text-neutral-800 dark:text-white">
        Blending the heart of an{" "}
        <Cover className="font-bold text-purple">
          Artist
        </Cover>
        <br />
        with the mind of an{" "}
        <Cover className="font-bold text-purple">
          Engineer
        </Cover>
      </h1>
    </div>
  )
}
