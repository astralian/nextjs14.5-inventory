'use client';

import { Menu } from 'lucide-react';

const Sidebar = () => {
	return (
		<div>
			<div className={`flex gap-3 justify-between md:justify-normal items-center pt-8`}>
				<div>logo</div>
				<h1 className={`block font-extrabold text-2xl`}>Inventory</h1>
				<button className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100">
					<Menu className="w-4 h-4" />
				</button>
			</div>

			<div className="flex-grow mt-8"></div>

			<div className={`block mb-10`}>
				<p className="text-center text-xs text-gray-500">&copy; 2024 Konstantin Tkachenko</p>
			</div>
		</div>
	);
};

export default Sidebar;
