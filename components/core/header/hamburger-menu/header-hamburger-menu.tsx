import { MenuIcon } from "components/icons"
import React, { MouseEvent, useState } from "react"

type P = {}

export const HamburgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false)

	function handleMenuToggle(e: MouseEvent<HTMLButtonElement>) {
		if (e.target instanceof HTMLButtonElement) setIsOpen((prev) => !prev)
	}

	return (
		<button
			aria-label="menu"
			className="relative cursor-pointer"
			onClick={handleMenuToggle}
		>
			<MenuIcon className="pointer-events-none" />

			{isOpen && (
				<aside className="absolute top-[140%] left-[-10%] shadow-sm border border-[#eee] rounded-lg bg-white w-80 h-96 z-50 flex justify-center items-center text-3xl text-[#aaa]">
					Empty
				</aside>
			)}
		</button>
	)
}
