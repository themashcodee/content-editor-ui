import { File } from "./file"

export type Folder = {
	id: string
	name: string
	type: "folder"
	children: (File | Folder)[]
}
