import React, {
	ComponentPropsWithoutRef,
	memo,
	NamedExoticComponent,
} from "react"

type P = ComponentPropsWithoutRef<"svg">

export const AddFilledIcon: NamedExoticComponent<P> = memo(
	({ className, ...props }) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className={`h-4 w-4 transform rotate-180 ${className}`}
				enableBackground="new 0 0 490.1 490.1"
				viewBox="0 0 490.1 490.1"
				xmlSpace="preserve"
				{...props}
			>
				<path d="M478.3 454.25c-6.6 0-11.7-5.1-11.7-11.7V23.35H89.1c-6.6 0-11.7-5.1-11.7-11.7S82.4.05 89.1.05h389.3c6.6 0 11.7 5.1 11.7 11.7v430.9c-.1 6.2-5.2 11.6-11.8 11.6z"></path>
				<path d="M478.3 454.25c-6.6 0-11.7-5.1-11.7-11.7V23.35H89.1c-6.6 0-11.7-5.1-11.7-11.7S82.4.05 89.1.05h389.3c6.6 0 11.7 5.1 11.7 11.7v430.9c-.1 6.2-5.2 11.6-11.8 11.6z"></path>
				<path d="M0 82.45v407.6h407.6V82.45H0zm350 203.8c0 12-9.8 21.8-21.8 21.8H225.6v102.7c0 12-9.8 21.8-21.8 21.8s-21.8-9.8-21.8-21.8v-102.7H79.3c-12 0-21.8-9.8-21.8-21.8s9.8-21.8 21.8-21.8H182v-102.6c0-12 9.8-21.8 21.8-21.8s21.8 9.8 21.8 21.8v102.7h102.7c11.9-.1 21.7 9.7 21.7 21.7z"></path>
			</svg>
		)
	}
)

AddFilledIcon.displayName = "Add filled Icon"
