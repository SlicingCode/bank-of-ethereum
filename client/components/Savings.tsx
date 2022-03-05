import Image from 'next/image'

const Savings = () => {
  return (
    <section className="mt-10 flex flex-col items-center text-white md:mt-28 md:flex-row-reverse md:justify-center">
      <div className="flex-initial list-none flex-row items-center text-white md:flex md:justify-between">
        <Image
          src="/assets/images/invest.svg"
          width={550}
          height={411}
          alt="Savings"
        />
      </div>
      <div className="flex w-4/5 flex-col items-start justify-start md:w-auto">
        <h2 className="font-semi mt-5 text-center text-2xl md:mt-0 md:text-left md:text-5xl">
          Savings
        </h2>
        <p className="mt-5 w-11/12 md:w-[537px] md:text-2xl">
          At the Bank of Ethereum, your ethereum will be secure in your account.
          All the while your ethereum is sitting in savings, it will be gaining
          interest. Don’t be tempted to withdraw your savings too early. You can
          add a time lock on your account to keep it from being withdrawn before
          the amount of time you chose.
        </p>
      </div>
    </section>
  )
}
export default Savings
