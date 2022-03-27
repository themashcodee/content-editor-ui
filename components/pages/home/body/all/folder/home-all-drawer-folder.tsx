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
import { Tooltip } from "components/core"

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
		if (name.length > 20)
			return toast.error("File name should be less than 20 characters")
		const errorMessage = addItem({ parentId: id, name, type: "file" })
		if (errorMessage) return toast.error(errorMessage)
		setShowChildren(true)
	}
	function handleAddFolder() {
		const name = prompt("Folder Name")
		if (!name) return toast.error("Folder name is required")
		if (name.length > 20)
			return toast.error("Folder name should be less than 20 characters")
		const errorMessage = addItem({ parentId: id, name, type: "folder" })
		if (errorMessage) return toast.error(errorMessage)
		setShowChildren(true)
	}

	return (
		<div className="flex flex-col">
			<div className="flex justify-between h-8 items-center gap-4 px-4 z-[1] relative">
				<span
					className="absolute right-0 top-0 hover:bg-gray-200 w-96 h-8 z-[-1] cursor-pointer"
					onClick={handleToggleChildren}
				></span>

				<span className="flex items-center cursor-pointer overflow-hidden pointer-events-none">
					<DownArrowIcon
						className={`h-[14px] flex-shrink-0 ${
							showChildren ? "" : "transform -rotate-90"
						}`}
					/>
					<span className="text-ellipsis overflow-hidden">{name}</span>
				</span>

				<div className="flex items-center gap-4">
					<Tooltip content="Add file">
						<button aria-label="add file" onClick={handleAddFile}>
							<AddIcon />
						</button>
					</Tooltip>

					<Tooltip content="Add folder">
						<button aria-label="add folder" onClick={handleAddFolder}>
							<AddFilledIcon />
						</button>
					</Tooltip>
					<Tooltip direction="left" content="Folder options">
						<button aria-label="folder options">
							<DotMenuIcon />
						</button>
					</Tooltip>
				</div>
			</div>

			{showChildren && (
				<div className="pl-8">
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
