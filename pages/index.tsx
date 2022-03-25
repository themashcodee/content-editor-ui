import React from "react"
import type { NextPage } from "next"
import { Head, Header } from "components/core"

const Home: NextPage = () => {
	return (
		<>
			<Head />

			<main className="w-full flex flex-col h-screen">
				<Header />
			</main>
		</>
	)
}

export default Home
