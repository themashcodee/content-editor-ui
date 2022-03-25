import React from "react"
import NextHead from "next/head"
import { Component } from "types/common"

type P = {
	title?: string
}

export const Head: Component<P> = ({ title }) => {
	return (
		<NextHead>
			<title>Content Editor {title && `| ${title}`}</title>
			<meta
				name="description"
				content="Content Editor - LRNR Interview assignement"
			/>
			<link rel="icon" href="/favicon.png" />
		</NextHead>
	)
}
