import DialogImage from "@/components/dialogImage";
import DroneImage2 from "@/assets/images/drone/drone2.webp";
import DroneImage3 from "@/assets/images/drone/drone3.webp";
import DroneImage4 from "@/assets/images/drone/drone4.webp";
import BackNavigation from "@/components/backNavigation";
import { IoIosArrowForward } from "react-icons/io";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Point Cloud Processor - Bryan Van Winnendael",
  description: "Point Cloud Processor - Bryan Van Winnendael",
};

const Page = () => {
  return (
    <div className="w-full h-full bg-secondary sm:p-5 p-2">
      <div className="bg-primary rounded-[24px]">
        <BackNavigation title="Point Cloud Processor" />
        <div className="p-5 pt-5 pb-20 leading-7 [&:not(:first-child)]:mt-6">
          <DialogImage
            image="drone"
            classList="w-full max-h-96 rounded-lg object-cover"
            transitionName="pointcloudprocessor"
            alt="drone"
            type="video"
          />
          <div className="bg-primary flex justify-between items-center rounded-tr-lg py-5 pr-5 mt-[-70px] z-50 relative w-5/6">
            <h1 className="scroll-m-20 text-5xl font-medium tracking-wide lg:text-6xl text-secondary">
              Point Cloud Processor
            </h1>
            <p className="scroll-m-20 text-xl font-medium tracking-tight text-muted-foreground">
              2023
            </p>
          </div>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">
            Problem
          </h4>
          <p className="leading-7 text-secondary">
            For my Graduation project my group and I had to make a project that
            was about detecting planes inside a point cloud, in order to get
            information about all the planes in a point cloud.
          </p>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">
            Built with
          </h4>
          <p className="leading-7 text-secondary">
            The application is seperated into 2 parts:
          </p>
          <li className="leading-7 text-secondary">
            The desktop application that was made in Pyton using the PyQt5
            library.
          </li>
          <li className="leading-7 text-secondary">
            The model that will actually process the point cloud was made with
            Python.
          </li>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">
            Process
          </h4>
          <li className="leading-7 text-secondary">Load the point cloud</li>
          <li className="leading-7 text-secondary">
            Use RANSAC to detect planes
          </li>
          <li className="leading-7 text-secondary">
            Possibly cluster using a cluster strategy like DBSCAN or
            agglomerative clustering, using no clustering is also possible
          </li>
          <li className="leading-7 text-secondary">
            Save each of the planes as a .ply file
          </li>
          <li className="leading-7 text-secondary">
            Generate a color range for each plane and save the entire point
            cloud with the colors
          </li>
          <li className="leading-7 text-secondary">
            Calculate the surface area of each plane
          </li>
          <li className="leading-7 text-secondary">
            Write the info for each plane to a .csv file
          </li>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">
            Screenshots
          </h4>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-5">
            <DialogImage
              image={DroneImage2.src}
              classList="w-full rounded-md object-cover shadow-sm"
              alt="drone2"
              type="img"
            />
            <DialogImage
              image={DroneImage3.src}
              classList="w-full rounded-md object-cover shadow-sm"
              alt="drone3"
              type="img"
            />
            <DialogImage
              image={DroneImage4.src}
              classList="w-full rounded-md object-cover shadow-sm"
              alt="drone4"
              type="img"
            />
          </div>

          <p className="leading-7 text-secondary mt-5">
            For an in depth explanation about the app you can visit the github
            page.
          </p>

          <div className="flex gap-5 w-fit mt-5">
            <div>
              <p className="leading-7 text-muted-foreground">Download</p>
              <a
                target="_blank"
                href="https://github.com/BryanVanWinnendael/Drone_project/releases/tag/v1.0"
                className="w-full flex items-center text-blue-500 cursor-pointer"
              >
                Download <IoIosArrowForward />
              </a>
            </div>
            <div>
              <p className="leading-7 text-muted-foreground">Code</p>
              <a
                target="_blank"
                className="w-full flex items-center text-blue-500 cursor-pointer"
                href="https://github.com/BryanVanWinnendael/Drone_project"
              >
                View code <IoIosArrowForward />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
