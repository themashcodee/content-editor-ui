import React, {
	ComponentPropsWithoutRef,
	memo,
	NamedExoticComponent,
} from "react"

type P = ComponentPropsWithoutRef<"svg">

export const AddIcon: NamedExoticComponent<P> = memo(
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
				<path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
			</svg>
		)
	}
)

AddIcon.displayName = "Add Icon"
