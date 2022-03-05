import Image from 'next/image'

const Features = () => {
  return (
    <section className="mt-10 flex flex-col items-center text-white md:mt-28 md:flex-row md:justify-center">
      <div>
        <Image
          src="/assets/images/cryptocurrencyeth.svg"
          width={550}
          height={411}
          alt="features"
        />
      </div>
      <div className="flex w-4/5 flex-col items-start justify-start md:w-auto">
        <h2 className="font-semi mt-5 text-center text-2xl md:mt-0 md:text-left md:text-5xl">
          About Bank of Ethereum
        </h2>
        <p className="mt-5 w-11/12 md:w-[537px] md:text-2xl">
          A decentralized bank for all of your ethereum banking needs. At the
          bank of ethereum you can save your ethereum, gain interest, and add a
          time lock to keep your ethereum from being withdrawn for a certain
          amount of time. You can receive a loan, and transfer your ethereum to
          other accounts.
        </p>
      </div>
    </section>
  )
}
export default Features
