import React, { memo, NamedExoticComponent } from "react"
import { useRecoilState } from "recoil"
import { File } from "types/drawer"
import { SelectedFileAtom } from "store"

type P = File

export const DrawerFile: NamedExoticComponent<P> = memo(
	({ name, ...props }) => {
		const [selectedFile, setSelectedFile] = useRecoilState(SelectedFileAtom)

		function handleClick() {
			if (selectedFile?.id === props.id) {
				setSelectedFile(null)
			} else {
				setSelectedFile({ name, ...props })
			}
		}

		return (
			<div
				onClick={handleClick}
				className="flex h-8 items-center px-6 relative cursor-pointer z-[1]"
			>
				<span className="text-ellipsis overflow-hidden pointer-events-none">
					{name}
				</span>
				<span
					className={`absolute right-0 top-0 hover:bg-gray-200 w-96 h-8 z-[-1] ${
						selectedFile?.id === props.id && "bg-gray-200"
					}`}
				></span>
			</div>
		)
	}
)

DrawerFile.displayName = "Home All Drawer File Component"
