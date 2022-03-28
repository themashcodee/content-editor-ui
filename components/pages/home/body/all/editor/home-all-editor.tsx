import React, { useEffect, useState } from "react"
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { EditorToolbar } from "../editor-toolbar"
import { useRecoilValue } from "recoil"
import { SelectedFileAtom } from "store"
import Highlight from "@tiptap/extension-highlight"
import TaskList from "@tiptap/extension-task-list"
import TaskItem from "@tiptap/extension-task-item"

export const Editor = () => {
	const editor = useEditor({
		editorProps: {
			attributes: {
				class:
					"w-full h-full outline-none p-8 prose prose-sm sm:prose lg:prose xl:prose-lg focus:outline-none",
			},
		},
		extensions: [
			StarterKit,
			Highlight.configure({
				multicolor: true,
			}),
			TaskItem,
			TaskList,
		],
		content: "",
		autofocus: true,
		onUpdate: () => {
			setSaved(false)
		},
	})
	const [saved, setSaved] = useState(true)
	const selectedFile = useRecoilValue(SelectedFileAtom)

	useEffect(() => {
		const preSavedContent = localStorage.getItem("savedContent")
		if (preSavedContent && selectedFile) {
			const parsedContent = JSON.parse(preSavedContent)
			parsedContent[selectedFile.id]
				? editor?.commands.setContent(parsedContent[selectedFile.id])
				: editor?.commands.setContent("")
		}
	}, [selectedFile])

	function handleSaveContent() {
		if (selectedFile) {
			const data = editor?.getHTML()
			const contentObj = localStorage.getItem("savedContent")
			if (!contentObj) {
				const newContentObj = { [selectedFile.id]: data }
				localStorage.setItem("savedContent", JSON.stringify(newContentObj))
			} else {
				const parsedcontentObj = JSON.parse(contentObj)
				parsedcontentObj[selectedFile.id] = data
				localStorage.setItem("savedContent", JSON.stringify(parsedcontentObj))
			}
		}

		setSaved(true)
	}

	return (
		<>
			{selectedFile && (
				<div className="h-full w-full flex flex-col p-8 gap-8 bg-white border-l border-[#eee] overflow-hidden">
					{editor && (
						<section className="flex flex-col gap-4 w-full">
							<div className="flex justify-between items-center gap-4">
								<h2 className="font-semibold text-xl">
									{`File name - ${selectedFile.name.toUpperCase()} ${
										saved ? "" : "(unsaved)"
									}`}
								</h2>

								<button
									onClick={handleSaveContent}
									className="bg-blue-400 text-white py-1 px-4 rounded-md"
								>
									Save
								</button>
							</div>

							<EditorToolbar editor={editor} />
						</section>
					)}

					<div className="bg-gray-100 rounded-lg h-full w-full overflow-auto">
						<EditorContent editor={editor} />
					</div>
				</div>
			)}
		</>
	)
}
