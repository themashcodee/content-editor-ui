import React from "react"
import type { NextPage } from "next"
import { Head, Header } from "components/core"
import { Subheader, HomeBody } from "components/pages/home"

const Home: NextPage = () => {
	return (
		<>
			<Head />

			<main className="w-full flex flex-col h-screen">
				<Header />
				<Subheader />
				<HomeBody />
			</main>
		</>
	)
}

export default Home
