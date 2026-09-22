import { Closing } from "@/components/sections/closing";
import { Cover } from "@/components/sections/cover";
import { Projects } from "@/components/sections/projects";
import { Statement } from "@/components/sections/statement";
import { Work } from "@/components/sections/work";

export default function Home() {
  return (
    <>
      <Cover />
      <Statement />
      <Work />
      <Projects />
      <Closing />
    </>
  );
}
