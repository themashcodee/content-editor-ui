import React, {
	Dispatch,
	memo,
	NamedExoticComponent,
	SetStateAction,
} from "react"
import { Capitalize } from "helpers"

import { Tabs } from "../main"
import { useSetRecoilState } from "recoil"
import { SelectedFileAtom } from "store"

type P = {
	selected: boolean
	value: Tabs
	setSelectedTab: Dispatch<SetStateAction<Tabs>>
}

export const Tab: NamedExoticComponent<P> = memo(
	({ selected, setSelectedTab, value }) => {
		const setSelectedFile = useSetRecoilState(SelectedFileAtom)

		return (
			<button
				onClick={() => {
					setSelectedFile(null)
					setSelectedTab(value)
				}}
				className={`cursor-pointer h-full flex items-center px-5 ${
					selected ? "border-b-2 border-red-400" : ""
				}`}
			>
				{Capitalize(value)}
			</button>
		)
	}
)

Tab.displayName = "Subheader Tab Component"
