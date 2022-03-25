import React, { ComponentPropsWithoutRef, useMemo } from "react"
import { InviterUserIcon, NotificationIcon } from "components/icons"
import { Profile } from "../profile"
import { HamburgerMenu } from "../hamburger-menu"
import { Component } from "types/common"
import { twMerge } from "tailwind-merge"

type P = ComponentPropsWithoutRef<"header">

export const Header: Component<P> = ({ className, ...props }) => {
	const style = useMemo(() => {
		return twMerge(
			"h-20 w-full flex justify-between px-8 gap-8 items-center select-none",
			className
		)
	}, [className])

	return (
		<header className={style}>
			<div className="flex gap-8 items-center">
				<HamburgerMenu />
				<h2 className="font-semibold text-2xl">Content Editor</h2>
			</div>

			<nav>
				<ul className="flex items-center gap-5">
					<li className="flex gap-2 items-center cursor-pointer">
						<InviterUserIcon className="h-[20px] w-[20px]" />
						<span>Invite Team Member</span>
					</li>

					<li className="cursor-pointer">
						<NotificationIcon className="w-[20px] h-[20px]" />
					</li>

					<Profile />
				</ul>
			</nav>
		</header>
	)
}
