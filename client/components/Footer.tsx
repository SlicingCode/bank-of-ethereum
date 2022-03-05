import Image from 'next/image'

const Footer = () => {
  return (
    <div className="bg-primary pt-10">
      <div className="flex flex-col items-center text-white">
        <div className="mb-5 hidden md:flex">
          <h3>Connect with us</h3>
        </div>
        <div className="hidden md:flex">
          <div className="mr-5">
            <Image
              src="/assets/images/facebook.svg"
              width={30}
              height={30}
              alt="facebook"
            />
          </div>
          <div className="mr-5">
            <Image
              src="/assets/images/instagram.svg"
              width={30}
              height={30}
              alt="instagram"
            />
          </div>
          <div className="mr-5">
            <Image
              src="/assets/images/linkedin.svg"
              width={30}
              height={30}
              alt="linkedin"
            />
          </div>
          <div className="mr-5">
            <Image
              src="/assets/images/pinterest.svg"
              width={30}
              height={30}
              alt="pinterest"
            />
          </div>
          <div className="mr-5">
            <Image
              src="/assets/images/twitter.svg"
              width={30}
              height={30}
              alt="twitter"
            />
          </div>
          <div>
            <Image
              src="/assets/images/youtube.svg"
              width={30}
              height={30}
              alt="youtube"
            />
          </div>
        </div>
        <p className="my-5 text-xs">
          Copyright &copy; {new Date().getFullYear()} Bank of Ethereum All
          Rights Reserved
        </p>
      </div>
    </div>
  )
}
export default Footer
