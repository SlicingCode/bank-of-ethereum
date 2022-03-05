import Image from 'next/image'

const Loans = () => {
  return (
    <section className="mt-10 flex flex-col items-center text-white md:mt-28 md:flex-row-reverse md:justify-center">
      <div className="flex-initial list-none flex-row items-center text-white md:flex md:justify-between">
        <Image
          src="/assets/images/block-chain.svg"
          width={550}
          height={411}
          alt="Loans"
        />
      </div>
      <div className="flex w-4/5 flex-col items-start justify-start md:w-auto">
        <h2 className="font-semi mt-5 text-left text-2xl md:mt-0 md:text-5xl">
          Ethereum loan
        </h2>
        <p className="mt-5 w-11/12 md:w-[537px] md:text-2xl">
          Well, what exactly is an Ethereum loan? An Ethereum loan is a loan
          that you can take out while using ETH as your collateral. Today, the
          Bank of Ethereum allows you to have crypto loans instantly by using
          some common cryptocurrencies as your collateral.
        </p>
      </div>
    </section>
  )
}
export default Loans
