import React, { MouseEvent, useState } from "react"
import { ProfileMenu } from "../profile-menu"

export const Profile = () => {
	const [isOpen, setIsOpen] = useState(false)

	function handleMenuToggle(e: MouseEvent<HTMLDivElement>) {
		if (e.target instanceof HTMLDivElement) setIsOpen((prev) => !prev)
	}

	return (
		<div
			id="profile"
			className="w-10 h-10 rounded-full bg-[#CA7CBC] flex justify-center items-center text-white relative cursor-pointer"
			onClick={handleMenuToggle}
		>
			{isOpen && <ProfileMenu />}

			<span className="pointer-events-none">FL</span>
			<span className="px-1 rounded-xl bg-red-400 font-semibold text-xs border-2 border-white absolute top-[-20%] right-[-50%]">
				New
			</span>
			<span className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white bg-green-400"></span>
		</div>
	)
}
