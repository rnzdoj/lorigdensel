import Logo from "@/components/icons/logo";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight, ArrowUpRight, Hourglass, IterationCw, NotebookPen, PenTool } from "lucide-react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import InotripImage from "../public/images/works/inotrip.png";
import SpiralBg from "../public/images/backgrounds/sprial-bg.png";
import DottedBg from "../public/images/backgrounds/dotted-bg.png";

import { Badge } from "@/components/ui/badge";

const WorkCard = ({ imageSrc }: { imageSrc: StaticImageData }) => (
  <div className="shadow-md rounded-3xl bg-white">
    <Image src={imageSrc} alt={""} height={500} />
    <div className="flex items-center justify-between px-10 py-2">
      <div className="flex items-end gap-3 p-3">
        <span className="font-semibold">inotrip.com</span>
        <ArrowUpRight size={20} color="blue" />
      </div>
      <div className="flex gap-2 items-center">
        <Badge variant={"secondary"} className="font-normal text-xs">UX</Badge>
        <Badge variant={"secondary"} className="font-normal text-xs">Branding</Badge>
        <Badge variant={"secondary"} className="font-normal text-xs">Web Development</Badge>
      </div>
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="flex flex-col space-y-28 mt-8">
      <div className="flex items-center justify-center">
        <nav className="hidden md:flex md:items-center md:justify-between  w-[80%] p-3 rounded-3xl">
          <Logo />
          <div className="flex items-center gap-12">
            <Link href="#">About</Link>
            <Link href="#">Our Services</Link>
            <Link href="#">Works</Link>
            <Link href="#">Contact</Link>
          </div>
          <Link href="#" className="bg-[#385DFF] text-white flex items-center p-2 rounded-xl gap-4 px-6">
            <span>
              Get a Quote
            </span>
            <ArrowRight size={20} />
          </Link>
        </nav>
      </div>


      <div className="flex flex-col items-center md:space-y-16 mx-3">
        <div className="flex flex-col text-center items-center space-y-5">
          <h1 className="text-5xl font-bold max-w-fit bg-clip-text text-transparent bg-gradient-to-r from-[#4753E8] from-0% via-[#9550FB] via-51% to-[#F24C98] to-100% md:text-6xl ">Building Quality Software.</h1>
          <p className="md:font-normal md:text-lg">International Best Practices, Agile, Design Principles</p>
        </div>

        <Link href="/" className="relative flex items-center justify-center space-x-3 px-8 py-3 border-gradient font-medium text-md">
          <span>Build Your System Today</span>
          <ArrowRight size={20} />
        </Link>
      </div>

      <div className="flex flex-col items-center md:space-y-3">
        <h5 className="uppercase text-[#385DFF] text-sm">works</h5>
        <h5 className="font-bold text-2xl">Discover Our Works</h5>
        <p className="text-center text-[#000000ad] w-3/4">Explore our curated showcase of UI/UX designs, mesmerizing websites, and captivating brand identities. Each project is a testament to our commitment to creating designs that not only look stunning but also deliver results.</p>

        <div className="flex flex-col items-center gap-10">
          <WorkCard imageSrc={InotripImage} />
          <WorkCard imageSrc={InotripImage} />
          <WorkCard imageSrc={InotripImage} />
        </div>

        <div className="relative w-full">
          <Image src={SpiralBg} alt="" className="absolute top-0 -z-10" />
          <Image src={DottedBg} alt="" className="absolute top-[450px] -left-16 -z-10" />

          <div className="flex flex-col items-center mt-8">
            <div className="mt-5">
              <Link href="#" className="text-[#385DFF] flex items-center gap-2 border-2 border-solid border-[#385DFF] max-w-fit px-4 py-2 rounded-2xl bg-clip-text text-transparent bg-[#385DFF]">
                <span className="capitalize text-sm">explore more works</span>
                <ArrowUpRight size={20} color="#385DFF" />
              </Link>
            </div>

            <h4 className="uppercase text-[#385DFF] mt-16">our process</h4>
            <h5 className="font-bold text-2xl pt-10">A Transparent Journey from Idea to Implementation</h5>
            <p className="text-center text-[#000000ad] w-3/4 pt-8">Delve into the intricacies of our tried-and-true process that transforms ideas into remarkable outcomes. From concept to execution, our transparent and collaborative approach ensures that every step is a purposeful stride toward achieving your goals. Learn more about how we turn visions into reality.</p>

            <div className="grid grid-row-2 grid-cols-2 gap-8 mt-20">
              <Card>
                <CardHeader className="py-1 pt-5">
                  <div className="flex items-center space-x-96">
                    <Hourglass size={20} color="#385DFF" />
                    <p className="font-bold text-4xl text-[#E6E6E6]">01</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="max-w-96">
                    <h5 className="font-medium text-xl">Discovery</h5>
                    <p className="text-justify text-[#0000008d]">
                      Armed with insights from the discovery phase, the designers and strategists define the project's goals and scope. They create user personas, map out user journeys, and establish key performance indicators (KPIs). This phase transforms raw data into actionable strategies.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="py-1 pt-5">
                  <div className="flex items-center space-x-96">
                    <NotebookPen size={20} color="#385DFF" />
                    <p className="font-bold text-4xl text-[#E6E6E6]">01</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="max-w-96">
                    <h5 className="font-medium text-xl">Define</h5>
                    <p className="text-justify text-[#0000008d]">This is the initial phase and it is all about understanding the client's needs and the end-user's perspective. The team conducts extensive research, gathering data through user interviews, surveys, and market analysis. This stage is crucial for establishing a solid foundation for the project.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="py-1 pt-5">
                  <div className="flex items-center space-x-96">
                    <PenTool size={20} color="#385DFF" />
                    <p className="font-bold text-4xl text-[#E6E6E6]">01</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="max-w-96">
                    <h5 className="font-medium text-xl">Design</h5>
                    <p className="text-justify text-[#0000008d]">This is the initial phase and it is all about understanding the client's needs and the end-user's perspective. The team conducts extensive research, gathering data through user interviews, surveys, and market analysis. This stage is crucial for establishing a solid foundation for the project.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="py-1 pt-5">
                  <div className="flex items-center space-x-96">
                    <IterationCw size={20} color="#385DFF" />
                    <p className="font-bold text-4xl text-[#E6E6E6]">01</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="max-w-96">
                    <h5 className="font-medium text-xl">Iterate</h5>
                    <p className="text-justify text-[#0000008d]">This is the initial phase and it is all about understanding the client's needs and the end-user's perspective. The team conducts extensive research, gathering data through user interviews, surveys, and market analysis. This stage is crucial for establishing a solid foundation for the project.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
