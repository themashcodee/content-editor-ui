import type { NextPage } from "next"
import Head from "next/head"

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Content Editor</title>
				<meta
					name="description"
					content="Content Editor - LRNR Interview assignement"
				/>
				<link rel="icon" href="/favicon.png" />
			</Head>

			<main className="p-12">
				<h1 className="text-4xl font-semibold">Content Editor</h1>
			</main>
		</>
	)
}

export default Home
