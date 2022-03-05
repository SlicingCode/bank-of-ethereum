import Image from 'next/image'

const Hero = () => {
  return (
    <div className="mt-10 flex flex-col items-center text-white md:mt-28 md:flex-row md:justify-center">
      <div className="flex w-4/5 flex-col items-start justify-start md:mr-80 md:w-auto">
        <h2 className="font-semi hidden text-white md:flex md:text-6xl">
          Bank of Ethereum
        </h2>
        <button className="btn btn-primary mt-4 w-full rounded-full px-28 text-xl md:mt-10 md:text-2xl">
          Connect
        </button>
      </div>
      <div className="hidden md:flex">
        <Image
          src="/assets/images/eth.svg"
          width={236}
          height={386}
          alt="ETH"
        />
      </div>
    </div>
  )
}
export default Hero
