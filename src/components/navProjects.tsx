import { Button } from './ui/button'

const NavProjects = ({ project }: { project: string }) => {
  return (
    <div className="w-full bg-secondary duration-150 bg-animate z-50 fixed top-0 flex justify-between px-5 py-2">
      <div>
        <a href="/" className="text-primary">Home</a>
      </div>
      <div className='flex'>
        <div className='flex'>
          <Button variant='link' className="text-primary">
            <a href="/#about" className="text-primary">about</a>
          </Button>
          <Button variant='link' className="text-primary">
            <a href="/#timeline" className="text-primary">timeline</a>
          </Button>
          <Button variant='link' className="text-primary">
            <a href={"/#projects-" + project} className="text-primary">projects</a>
          </Button>
        </div>
        <Button variant="default" className='rounded-3xl'>
          <a href="/#contact" className="text-secondary">Let's talk</a>
        </Button>
      </div>
    </div>
  )
}

export default NavProjects