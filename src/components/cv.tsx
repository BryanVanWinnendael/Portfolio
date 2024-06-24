import { Dialog, DialogContent, DialogTrigger, DialogClose } from "./ui/dialog";
import CvImage from "@/assets/images/cv.webp";
import { GrExpand } from "react-icons/gr";

const Cv = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className="scroll-m-20 text-xl tracking-tight first:mt-0 hover:underline cursor-pointer font-medium">
          cv
        </p>
      </DialogTrigger>

      <DialogContent className="max-w-[900px] max-h-[90vh] w-full h-full flex justify-center items-center">
        <DialogClose>
          <a
            target="_blank"
            href="cv.pdf"
            className="absolute top-[1rem] right-[3rem] opacity-70 hover:opacity-100 cursor-pointer"
          >
            <GrExpand className="w-4 h-4" />
          </a>
        </DialogClose>
        <DialogClose className="w-full h-full cursor-pointer">
          <a target="_blank" href="cv.pdf">
            <img
              src={CvImage.src}
              alt="cv"
              className="rounded-sm w-full h-full object-contain"
            />
          </a>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default Cv;
