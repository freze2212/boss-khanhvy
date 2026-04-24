import Image from "next/image"

const DEFAULT_WIDTH = 80
const DEFAULT_HEIGHT = 80

export const facebookData = [
	{
		name: "khanhvy83286",
		link: "https://www.facebook.com/khanhvy83286",
		icon: (
			<Image
				src="./socials/facebook.svg"
				title="BOSS KHÁNH VY"
				alt="BOSS KHÁNH VY"
				height={DEFAULT_WIDTH}
				width={DEFAULT_HEIGHT}
				unoptimized
				className="object-cover p-1"
			/>
		)
	}
]
