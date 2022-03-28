import { atom } from "recoil"
import { File } from "types/drawer"

export const SelectedFileAtom = atom<File | null>({
	key: "SelectedFileAtom",
	default: null,
})
