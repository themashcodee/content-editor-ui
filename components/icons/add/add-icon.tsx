import React, { ComponentPropsWithoutRef } from "react"
import { Component } from "types/common"

type P = ComponentPropsWithoutRef<"svg">

export const AddIcon: Component<P> = ({ className, ...props }) => {
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
			<path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
		</svg>
	)
}
