import React, { ComponentPropsWithRef } from "react"
import { twMerge } from "tailwind-merge"
import { Component } from "types/common"

type P = ComponentPropsWithRef<"p"> & {
	content: string
	direction?: "left" | "right" | "top" | "bottom"
}

export const Tooltip: Component<P> = ({
	children,
	className,
	content,
	direction = "top",
	...props
}) => {
	const style = twMerge(
		"group-hover:flex bg-gray-900 text-white shadow-md justify-center px-2 py-1 rounded-md hidden absolute whitespace-nowrap transform z-[100] before:absolute before:w-3 before:h-3 before:rotate-45 before:transform before:bg-inherit",
		direction === "top" &&
			`bottom-[calc(100%+15px)] before:top-[calc(100%-6px)] before:left-1/2 before:-translate-x-1/2  left-1/2 -translate-x-1/2`,
		direction === "bottom" &&
			`top-[calc(100%+15px)] before:bottom-[calc(100%-6px)] before:left-1/2 before:-translate-x-1/2  left-1/2 -translate-x-1/2`,
		direction === "left" &&
			`top-[50%] right-[calc(100%+15px)] -translate-y-1/2 before:top-[50%] before:left-[calc(100%-6px)] before:-translate-y-1/2`,
		direction === "right" &&
			`top-[50%] left-[calc(100%+15px)] -translate-y-1/2 before:top-[50%] before:right-[calc(100%-6px)] before:-translate-y-1/2`,
		className
	)

	return (
		<div className="relative cursor-pointer group">
			<div className="flex">{children}</div>
			<p className={style} {...props}>
				{content}
			</p>
		</div>
	)
}
