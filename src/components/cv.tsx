import { Dialog, DialogContent, DialogTrigger, DialogClose } from "./ui/dialog";
import CvImage from "@/assets/images/cv.webp";
import Image from "next/image";
import Link from "next/link";
import { GrExpand } from "react-icons/gr";

const Cv = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="scroll-m-20 text-xl tracking-tight first:mt-0 hover:underline cursor-pointer font-medium text-left">
          cv
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-[900px] max-h-[90vh] w-full h-full flex justify-center items-center">
        <DialogClose>
          <Link
            target="_blank"
            href="cv.pdf"
            className="absolute top-[1rem] right-[3rem] opacity-70 hover:opacity-100 cursor-pointer"
          >
            <GrExpand className="w-4 h-4" />
          </Link>
        </DialogClose>
        <DialogClose className="w-full h-full cursor-pointer">
          <Link target="_blank" href="cv.pdf">
            <Image
              width={1920}
              height={1080}
              src={CvImage.src}
              alt="cv"
              className="rounded-sm w-full h-full object-contain"
            />
          </Link>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default Cv;
