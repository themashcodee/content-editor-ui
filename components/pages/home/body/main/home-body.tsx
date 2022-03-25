import React from "react"
import { useRecoilValue } from "recoil"
import { TabAtom } from "store"
import { AllSection } from "../all"
import { BoardSection } from "../board"
import { GraphSection } from "../graph"
import { RecentSection } from "../recent"

export const HomeBody = () => {
	const selectedTab = useRecoilValue(TabAtom)

	return (
		<div className="h-full w-full overflow-hidden">
			{selectedTab === "all" && <AllSection />}
			{selectedTab === "board" && <BoardSection />}
			{selectedTab === "graph" && <GraphSection />}
			{selectedTab === "recent" && <RecentSection />}
		</div>
	)
}
