import { useState } from "react"
import { File, Folder } from "types/drawer"
import { findFolder } from "helpers"
import { nanoid } from "nanoid"

export type AddItemParams = {
	parentId: string
	name: string
	type: "folder" | "file"
}

export function useDrawer() {
	const [data, setData] = useState<(File | Folder)[]>([])

	const addItem = ({ name, parentId, type }: AddItemParams) => {
		if (!name.match(/^[a-zA-Zа-яА-Я0-9-_!]+$/)) return `Invalid ${type} name`

		const itemId = nanoid()
		const itemToAdd =
			type === "file"
				? { type, name, id: itemId, content: "<h1>Welcome</h1>" }
				: { type, name, id: itemId, children: [] }

		const newData = [...data]

		if (!parentId) {
			const itemAreadyExist = newData.some((item) => item.name === name)
			if (itemAreadyExist)
				return `A file/folder already exist with the name of ${name}`
			newData.push(itemToAdd)
			setData(newData)
			return
		}

		const parentFolder = findFolder({ id: parentId, items: newData })
		const itemAreadyExist = parentFolder?.children.some((i) => i.name === name)
		if (itemAreadyExist)
			return `A file/folder already exist with the name of ${name}`

		parentFolder?.children.push(itemToAdd)
		setData(newData)
	}

	return { data, addItem }
}
