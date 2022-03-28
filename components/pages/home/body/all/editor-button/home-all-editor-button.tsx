import { Tooltip } from "components/core"
import React, { ComponentPropsWithoutRef } from "react"
import { twMerge } from "tailwind-merge"
import { Component } from "types/common"

type P = ComponentPropsWithoutRef<"button"> & {
	ariaLabel: string
	command: () => boolean
	isActive?: boolean
}

export const EditorButton: Component<P> = ({
	ariaLabel,
	className,
	command,
	children,
	isActive,
	...props
}) => {
	function handleClick() {
		command()
	}

	const style = twMerge(
		"min-w-[40px] p-2 h-10 rounded-md bg-white flex justify-center items-center",
		isActive && "bg-gray-200",
		className
	)

	return (
		<Tooltip content={ariaLabel} direction="bottom">
			<button
				onClick={handleClick}
				aria-label={ariaLabel}
				className={style}
				{...props}
			>
				{children}
			</button>
		</Tooltip>
	)
}
