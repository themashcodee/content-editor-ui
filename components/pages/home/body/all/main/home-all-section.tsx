import React from "react"
import { Drawer } from "../drawer"
import { Editor } from "../editor"

export const AllSection = () => {
	return (
		<section className="flex h-full overflow-hidden">
			<Drawer />
			<Editor />
		</section>
	)
}
