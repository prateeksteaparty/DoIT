export function Navbar() {
    return (
      <div className="bg-white dark:bg-gray-900 p-4 shadow-md flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800 dark:text-white">
          Logo
        </div>
        
        {/* Dark Mode Toggle */}
        <div className="text-gray-800 dark:text-white cursor-pointer">
          Dark Mode
        </div>
      </div>
    );
  }
  