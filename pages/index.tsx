import React from "react"
import type { NextPage } from "next"
import { Head, Header } from "components/core"
import { Subheader } from "components/pages/home"

const Home: NextPage = () => {
	return (
		<>
			<Head />

			<main className="w-full flex flex-col h-screen">
				<Header />
				<Subheader />
			</main>
		</>
	)
}

export default Home
