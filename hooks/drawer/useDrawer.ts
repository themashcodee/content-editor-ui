import { useEffect, useState } from "react"
import { File, Folder } from "types/drawer"
import { findFolder } from "helpers"
import { nanoid } from "nanoid"
import { useSetRecoilState } from "recoil"
import { SelectedFileAtom } from "store"

export type AddItemParams = {
	parentId: string
	name: string
	type: "folder" | "file"
}

export function useDrawer() {
	const [data, setData] = useState<(File | Folder)[]>([])
	const setSelectedFile = useSetRecoilState(SelectedFileAtom)

	useEffect(() => {
		const savedDrawerData = localStorage.getItem("drawer")

		if (savedDrawerData) {
			setData(JSON.parse(savedDrawerData))
		} else {
			// SETTING SAMPLE DRAWER DATA
			localStorage.setItem(
				"drawer",
				'[{"type":"folder","name":"LRNR","id":"34fnN3vy7GkMtiPi4fUn4","children":[{"type":"file","name":"sample","id":"I7s9co-0v-ys7JZ6HPt3e"}]}]'
			)
			setData(
				JSON.parse(
					'[{"type":"folder","name":"LRNR","id":"34fnN3vy7GkMtiPi4fUn4","children":[{"type":"file","name":"sample","id":"I7s9co-0v-ys7JZ6HPt3e"}]}]'
				)
			)
			// SETTING SAMPLE EDITOR DATA
			localStorage.setItem(
				"savedContent",
				'{"I7s9co-0v-ys7JZ6HPt3e":"<h2>Hello Welcome to the Application Sample Document</h2><p>I am <strong>Bold <em>Italic <s>Striked</s></em></strong> and I am <mark data-color=\\"#fbbc88\\" style=\\"background-color: #fbbc88\\">Highlighted</mark></p><blockquote><p>I am Quoted</p></blockquote><pre><code>I am Code Block</code></pre><ul><li><p>Unordered List Item 1</p></li><li><p>Unordered List Item 2</p></li></ul><ol><li><p>Ordered List Item 1</p></li></ol><ul data-type=\\"taskList\\"><li data-checked=\\"false\\" data-type=\\"taskItem\\"><label><input type=\\"checkbox\\"><span></span></label><div><p>Task List Item 1 (weird styling because of tailwind typography 😂) anyways it can be fixed, duh!</p></div></li></ul><hr><p>Above is a Horizontal Rule</p>"}'
			)
		}
	}, [])

	useEffect(() => {
		if (data.length) localStorage.setItem("drawer", JSON.stringify(data))
	}, [data])

	const clearDrawer = () => {
		localStorage.removeItem("drawer")
		localStorage.removeItem("savedContent")
		setData([])
		setSelectedFile(null)
	}

	const addItem = ({ name, parentId, type }: AddItemParams) => {
		if (!name.match(/^[a-zA-Zа-яА-Я0-9-_!]+$/)) return `Invalid ${type} name`

		const itemId = nanoid()
		const itemToAdd =
			type === "file"
				? { type, name, id: itemId }
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

	return { data, addItem, clearDrawer }
}
