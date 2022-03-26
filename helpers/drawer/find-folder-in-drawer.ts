import { File, Folder } from "types/drawer"

type P = {
	id: string
	items: (Folder | File)[]
}

// I Have not wrote any good algorithm who has better time complexity because there is no sense of optimizing small data where you only have usually 50-100 folder and files.
/**
 *
 * This fuction finds a folder who has the given id in the items array
 *
 * @param id
 * @param items
 */
export function findFolder({ id, items }: P): Folder | null {
	let foundItem: Folder | null = null

	for (let i = 0; i < items.length; i++) {
		const item = items[i]
		if (item.type === "file") continue

		if (item.id === id) {
			foundItem = item
			break
		}
		foundItem = findFolder({ id, items: item.children })
		if (foundItem) break
	}

	return foundItem
}
