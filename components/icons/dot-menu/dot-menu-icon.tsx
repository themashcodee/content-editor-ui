import React, { ComponentPropsWithoutRef } from "react"
import { Component } from "types/common"

type P = ComponentPropsWithoutRef<"svg">

export const DotMenuIcon: Component<P> = ({ className, ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={`h-6 w-6 ${className}`}
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeWidth={2}
			{...props}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
			/>
		</svg>
	)
}
