import React, { useState } from "react"

export const ProfileMenu = () => {
	const [isDarkMode, setIsDarkMode] = useState(false)

	function handleDarkModeToggle() {
		setIsDarkMode((prev) => !prev)
	}

	return (
		<ul className="absolute top-[120%] right-[-10%] p-6 shadow-sm border border-[#eee] rounded-lg text-black-800 flex flex-col gap-3 w-60 z-10 bg-white">
			<li className="flex justify-between items-center">
				Dark mode
				<span
					className="w-7 h-4 p-0.5 rounded-xl bg-[#BEC1C4] flex"
					onClick={handleDarkModeToggle}
				>
					<span
						className={`h-3 w-3 bg-white rounded-full transition-all duration-500 ${
							isDarkMode ? "ml-3" : "ml-0"
						}`}
					></span>
				</span>
			</li>
			<li>Profile</li>
			<span className="h-[1px] w-full bg-[#eee]"></span>
			<li>{"What's New"}</li>
			<li>Help</li>
			<li>Send feedback</li>
			<li>Hint and shortcuts</li>
			<span className="h-[1px] w-full bg-[#eee]"></span>
			<li>Log out</li>
		</ul>
	)
}
