const NavBarItem = ({
  title,
  classprops,
}: {
  title: any
  classprops?: any
}) => <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-center p-4">
      <div className="flex-initial items-center justify-center md:flex-[0.5]">
        <h1 className="logo cursor-pointer md:ml-20">Bank of Ethereum</h1>
      </div>
      <ul className="hidden flex-initial list-none flex-row items-center justify-between text-white md:flex">
        {['Features', 'Savings', 'Transfers', 'Loans'].map((item, index) => (
          <NavBarItem title={item} key={item + index} />
        ))}
        <li>
          <button className="btn btn-primary mx-4 rounded-full">Connect</button>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar
