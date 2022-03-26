import React, { useState } from "react"
import { Folder } from "types/drawer"
import {
	AddFilledIcon,
	AddIcon,
	DotMenuIcon,
	DownArrowIcon,
} from "components/icons"
import { DrawerFile } from "../file"
import { AddItemParams } from "hooks"
import toast from "react-hot-toast"
import { Component } from "types/common"

type P = Folder & {
	addItem: ({ name, parentId, type }: AddItemParams) => string | undefined
}

export const DrawerFolder: Component<P> = ({ addItem, children, id, name }) => {
	const [showChildren, setShowChildren] = useState(false)

	function handleToggleChildren() {
		setShowChildren((prev) => !prev)
	}
	function handleAddFile() {
		const name = prompt("File Name")
		if (!name) return toast.error("File name is required")
		const errorMessage = addItem({ parentId: id, name, type: "file" })
		if (errorMessage) return toast.error(errorMessage)
		setShowChildren(true)
	}
	function handleAddFolder() {
		const name = prompt("Folder Name")
		if (!name) return toast.error("Folder name is required")
		const errorMessage = addItem({ parentId: id, name, type: "folder" })
		if (errorMessage) return toast.error(errorMessage)
		setShowChildren(true)
	}

	return (
		<div>
			<div className="flex justify-between h-8 items-center gap-8 px-4">
				<span
					className="flex items-center cursor-pointer"
					onClick={handleToggleChildren}
				>
					<DownArrowIcon
						className={`h-[14px] ${showChildren ? "" : "transform -rotate-90"}`}
					/>
					<span>{name}</span>
				</span>

				<div className="flex items-center gap-4">
					<button aria-label="add file" onClick={handleAddFile}>
						<AddIcon />
					</button>
					<button aria-label="add folder" onClick={handleAddFolder}>
						<AddFilledIcon />
					</button>
					<button aria-label="folder options">
						<DotMenuIcon />
					</button>
				</div>
			</div>

			{showChildren && (
				<div className="pl-4">
					{children
						.sort((a) => (a.type === "file" ? 1 : -1))
						.map((item) => {
							return item.type === "file" ? (
								<DrawerFile key={item.id} {...item} />
							) : (
								<DrawerFolder addItem={addItem} key={item.id} {...item} />
							)
						})}
				</div>
			)}
		</div>
	)
}
