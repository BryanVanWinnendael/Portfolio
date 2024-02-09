import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

const DialogImage = ({
  image,
  classList,
  transitionName,
  alt,
}: {
  image: ImageMetadata
  classList: string
  transitionName?: string
  alt: string
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild> 
        <img
          style={transitionName ? { viewTransitionName: transitionName } : {}}
          src={image.src}
          alt={alt}
          className={classList + " cursor-pointer"}
        />
      </DialogTrigger>
      <DialogContent className="max-w-[900px] max-h-[90vh] w-full h-full">
        <div className="w-full h-full relative flex justify-center items-center">
          <img
            src={image.src}
            alt={alt}
            className="rounded-sm w-auto h-auto max-h-full absolute object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default DialogImage
