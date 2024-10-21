function Header() {
  return (
    <>
      <header className="bg-green-400 px-3 min-h-11 flex gap-4">
        <h1 className="font-bold flex items-center">Car Batteries</h1>
        <nav className="flex justify-center flex-1">
          <ul className="flex justify-center gap-6">
            <li className="relative group z-10 flex items-center">
              Who We Are
              <div className="absolute z-0 top-full min-w-[200px] hidden group-hover:flex flex-col bg-white shadow-lg">
                <div className="hover:bg-purple-700 p-2 hover:text-white">
                  About Us
                </div>
                <div className="hover:bg-purple-700 p-2 hover:text-white">
                  Warranty
                </div>
                <div className="hover:bg-purple-700 p-2 hover:text-white">
                  Battery Brands
                </div>
              </div>
            </li>
            <li className="flex items-center">Shop</li>
            <li className="relative group flex items-center">
              News
              <div className="absolute top-full min-w-[200px] hidden group-hover:flex flex-col bg-white shadow-lg">
                <div className="hover:bg-purple-700 p-2 hover:text-white">
                  Updates
                </div>
                <div className="hover:bg-purple-700 p-2 hover:text-white">
                  Events
                </div>
                <div className="hover:bg-purple-700 p-2 hover:text-white">
                  Useful Tips
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export { Header };
