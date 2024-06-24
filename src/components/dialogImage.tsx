"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import useScreen from "@/hooks/useScreen";
import Image from "next/image";

const DialogImage = ({
  image,
  classList,
  transitionName,
  alt,
  type,
}: {
  image: string;
  classList: string;
  transitionName?: string;
  alt: string;
  type: "img" | "video";
}) => {
  const isMobile = useScreen().isSmall;
  return (
    <Dialog>
      <DialogTrigger asChild>
        {type === "video" ? (
          <video
            style={transitionName ? { viewTransitionName: transitionName } : {}}
            src={`/videos/${image}.mp4`}
            className={classList + " cursor-pointer"}
            autoPlay={!isMobile}
            loop
            muted
          />
        ) : (
          <Image
            width={1920}
            height={1080}
            style={transitionName ? { viewTransitionName: transitionName } : {}}
            src={image}
            alt={alt}
            className={classList + " cursor-pointer"}
          />
        )}
      </DialogTrigger>
      <DialogContent className="max-w-[900px] max-h-[90vh] w-full h-full">
        <div className="w-full h-full relative flex justify-center items-center">
          {type === "video" ? (
            <video
              src={`/videos/${image}.mp4`}
              className="shadow-sm rounded-sm w-auto h-auto max-h-full absolute object-contain"
              autoPlay
              loop
              muted
            />
          ) : (
            <Image
              width={1920}
              height={1080}
              src={image}
              alt={alt}
              className="rounded-sm w-auto h-auto max-h-full absolute object-contain"
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogImage;
