import React from "react"
import type { Editor } from "@tiptap/react"
import { Component } from "types/common"
import { EditorButton } from "../editor-button"

type P = {
	editor: Editor
}

export const EditorToolbar: Component<P> = ({ editor }) => {
	return (
		<div className="bg-gray-100 rounded-lg w-full flex gap-3 p-4 flex-wrap">
			<EditorButton
				ariaLabel="Toggle Bold"
				isActive={editor.isActive("bold")}
				command={editor.chain().focus().toggleBold().run}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					className="w-5 h-5"
				>
					<path fill="none" d="M0 0h24v24H0z" />
					<path d="M8 11h4.5a2.5 2.5 0 1 0 0-5H8v5zm10 4.5a4.5 4.5 0 0 1-4.5 4.5H6V4h6.5a4.5 4.5 0 0 1 3.256 7.606A4.498 4.498 0 0 1 18 15.5zM8 13v5h5.5a2.5 2.5 0 1 0 0-5H8z" />
				</svg>
			</EditorButton>

			<EditorButton
				isActive={editor.isActive("italic")}
				ariaLabel="Toggle Italic"
				command={editor.chain().focus().toggleItalic().run}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					className="w-5 h-5"
				>
					<path fill="none" d="M0 0h24v24H0z" />
					<path d="M15 20H7v-2h2.927l2.116-12H9V4h8v2h-2.927l-2.116 12H15z" />
				</svg>
			</EditorButton>

			<EditorButton
				isActive={editor.isActive("strike")}
				ariaLabel="Toggle Strike"
				command={editor.chain().focus().toggleStrike().run}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					className="w-5 h-5"
				>
					<path fill="none" d="M0 0h24v24H0z" />
					<path d="M17.154 14c.23.516.346 1.09.346 1.72 0 1.342-.524 2.392-1.571 3.147C14.88 19.622 13.433 20 11.586 20c-1.64 0-3.263-.381-4.87-1.144V16.6c1.52.877 3.075 1.316 4.666 1.316 2.551 0 3.83-.732 3.839-2.197a2.21 2.21 0 0 0-.648-1.603l-.12-.117H3v-2h18v2h-3.846zm-4.078-3H7.629a4.086 4.086 0 0 1-.481-.522C6.716 9.92 6.5 9.246 6.5 8.452c0-1.236.466-2.287 1.397-3.153C8.83 4.433 10.271 4 12.222 4c1.471 0 2.879.328 4.222.984v2.152c-1.2-.687-2.515-1.03-3.946-1.03-2.48 0-3.719.782-3.719 2.346 0 .42.218.786.654 1.099.436.313.974.562 1.613.75.62.18 1.297.414 2.03.699z" />
				</svg>
			</EditorButton>
		</div>
	)
}
