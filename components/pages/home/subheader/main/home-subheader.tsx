import React from "react"
import { TabAtom } from "store"
import { DotMenuIcon } from "components/icons"
import { useRecoilState } from "recoil"
import { Tab } from "../tab"

export type Tabs = "all" | "board" | "graph" | "recent"

export const Subheader = () => {
	const [selectedTab, setSelectedTab] = useRecoilState(TabAtom)

	return (
		<div className="flex px-8 h-12 shadow-sm">
			<div className="flex z-30">
				<Tab
					value="all"
					selected={selectedTab === "all"}
					setSelectedTab={setSelectedTab}
				/>
				<Tab
					value="board"
					selected={selectedTab === "board"}
					setSelectedTab={setSelectedTab}
				/>
				<Tab
					value="graph"
					selected={selectedTab === "graph"}
					setSelectedTab={setSelectedTab}
				/>
				<Tab
					value="recent"
					selected={selectedTab === "recent"}
					setSelectedTab={setSelectedTab}
				/>

				<button
					aria-label="sub header options"
					className="flex h-full items-center cursor-pointer"
				>
					<DotMenuIcon className="w-[18px] h-[18px]" />
				</button>
			</div>
		</div>
	)
}
