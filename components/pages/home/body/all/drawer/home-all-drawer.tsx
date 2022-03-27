import React, { MouseEvent } from "react"
import { AddIcon, ExpandIcon, LeftDoubleArrowIcon } from "components/icons"
import { DrawerFolder } from "../folder"
import { DrawerFile } from "../file"
import { useDrawer } from "hooks"
import toast from "react-hot-toast"
import { Tooltip } from "components/core"

export const Drawer = () => {
	const { data, addItem } = useDrawer()

	function handleAddItem(e: MouseEvent<HTMLButtonElement>) {
		const name = prompt("Folder Name")
		if (!name) return toast.error("Folder name is required")
		const errorMessage = addItem({ parentId: "", name, type: "folder" })
		if (errorMessage) toast.error(errorMessage)
	}

	return (
		<aside className="flex flex-col w-96 bg-[#fbfbfb] h-full overflow-auto select-none">
			<div className="flex justify-between h-16 items-center gap-8 px-6 flex-shrink-0">
				<h3 className="font-semibold text-[#555]">FILES</h3>

				<div className="flex items-center gap-4">
					<Tooltip content="Add folder" direction="bottom">
						<button aria-label="add folder" onClick={handleAddItem}>
							<AddIcon className="h-[18px]" />
						</button>
					</Tooltip>
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
					.sort((a) => (a.type === "file" ? 1 : -1))
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
