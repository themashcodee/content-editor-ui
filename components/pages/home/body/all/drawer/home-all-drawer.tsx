import React, { MouseEvent, useEffect } from "react"
import { AddIcon, ExpandIcon, LeftDoubleArrowIcon } from "components/icons"
import { DrawerFolder } from "../folder"
import { DrawerFile } from "../file"
import { useDrawer } from "hooks"
import toast from "react-hot-toast"

export const Drawer = () => {
	const { data, addItem } = useDrawer()

	function handleAddItem(e: MouseEvent<HTMLButtonElement>) {
		const name = prompt("Folder Name")
		if (!name) return toast.error("Folder name is required")
		addItem({ parentId: "", name, type: "folder" })
	}

	return (
		<aside className="flex flex-col w-96 bg-[#fbfbfb] h-full overflow-auto select-none">
			<div className="flex justify-between h-16 items-center gap-8 px-6 flex-shrink-0">
				<h3 className="font-semibold text-[#555]">FILES</h3>

				<div className="flex items-center gap-4">
					<button onClick={handleAddItem}>
						<AddIcon className="h-[18px]" />
					</button>
					<button>
						<ExpandIcon className="h-[18px]" />
					</button>
					<button>
						<LeftDoubleArrowIcon className="h-[18px]" />
					</button>
				</div>
			</div>

			<div className="flex flex-col gap-1 pt-1 pb-6">
				{data
					.sort((a, b) => {
						return a.type === "file" ? 1 : -1
					})
					.map((item) => {
						return item.type === "file" ? (
							<DrawerFile key={item.id} {...item} />
						) : (
							<DrawerFolder key={item.id} addItem={addItem} {...item} />
						)
					})}
			</div>
		</aside>
	)
}
