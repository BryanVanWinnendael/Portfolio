const Page = () => {
  return (
    <div>
      <h1 className="text-[7vw] text-center font-semibold pb-10">
        POINT CLOUD PROCESSOR
      </h1>
      <div className="flex justify-center w-full">
        <video
          className="w-3/4 h-auto"
          src="/videos/drone.mp4"
          data-flip-id="point-cloud-processor"
        />
      </div>
    </div>
  )
}

export default Page
