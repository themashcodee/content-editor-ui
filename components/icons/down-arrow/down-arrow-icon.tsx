import React, {
	ComponentPropsWithoutRef,
	memo,
	NamedExoticComponent,
} from "react"

type P = ComponentPropsWithoutRef<"svg">

export const DownArrowIcon: NamedExoticComponent<P> = memo(
	({ className, ...props }) => {
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
				<path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
			</svg>
		)
	}
)

DownArrowIcon.displayName = "Down Arrow Icon"
