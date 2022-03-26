import React, {
	ComponentPropsWithoutRef,
	memo,
	NamedExoticComponent,
} from "react"

type P = ComponentPropsWithoutRef<"svg">

export const LeftDoubleArrowIcon: NamedExoticComponent<P> = memo(
	({ className, ...props }) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className={`h-4 w-4 ${className}`}
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				strokeWidth={2}
				{...props}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
				/>
			</svg>
		)
	}
)

LeftDoubleArrowIcon.displayName = "Left Double Arrow Icon"
