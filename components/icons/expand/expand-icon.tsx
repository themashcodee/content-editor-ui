import React, {
	ComponentPropsWithoutRef,
	memo,
	NamedExoticComponent,
} from "react"

type P = ComponentPropsWithoutRef<"svg">

export const ExpandIcon: NamedExoticComponent<P> = memo(
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
					d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
				/>
			</svg>
		)
	}
)

ExpandIcon.displayName = "Expand Icon"
