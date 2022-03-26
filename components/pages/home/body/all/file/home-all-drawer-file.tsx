import React, { memo, NamedExoticComponent } from "react"
import { File } from "types/drawer"

type P = File

export const DrawerFile: NamedExoticComponent<P> = memo(({ name }) => {
	return (
		<div className="flex justify-between h-8 items-center gap-8 px-10">
			{name}
		</div>
	)
})

DrawerFile.displayName = "Home All Drawer File Component"
