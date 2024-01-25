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
      <DialogContent className="max-w-[900px]">
        <img
          src={image.src}
          alt={alt}
          className="rounded-sm w-full h-full object-cover"
        />
      </DialogContent>
    </Dialog>
  )
}

export default DialogImage
