import { atom } from "recoil"
import { Tabs } from "components/pages/home"

export const TabAtom = atom<Tabs>({
	key: "TabAtom",
	default: "all",
})
