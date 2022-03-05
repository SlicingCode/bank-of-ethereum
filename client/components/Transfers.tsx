import Image from 'next/image'

const Transfers = () => {
  return (
    <section className="mt-10 flex flex-col items-center text-white md:mt-28 md:flex-row md:justify-center">
      <div className="flex-initial list-none flex-row items-center text-white md:flex md:justify-between">
        <Image
          src="/assets/images/transfer-money.svg"
          width={550}
          height={411}
          alt="Transferes"
        />
      </div>
      <div className="flex w-4/5 flex-col items-start justify-start md:w-auto">
        <h2 className="font-semi mt-5 text-left text-2xl md:mt-0 md:text-5xl">
          Transfers
        </h2>
        <p className="mt-5 w-11/12 md:w-[537px] md:text-2xl">
          Want to move some or all of your ethereum to another account? The Bank
          of Ethereum offers account to account transfers. You can transfer
          ethereum to one of your accounts or to someone else's account (like
          your mom's account on Mother's day).
        </p>
      </div>
    </section>
  )
}
export default Transfers
