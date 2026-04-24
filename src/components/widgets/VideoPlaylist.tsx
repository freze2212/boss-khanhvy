"use client"

import Player from "@vimeo/player"
import { useEffect, useMemo, useRef, useState } from "react"

type PlaylistItem =
	| { type: "vimeo"; vimeoId: string }
	| { type: "mp4"; src: string; typeHint?: string }

interface VideoPlaylistProps {
	items: PlaylistItem[]
	className?: string
}

export function VideoPlaylist({ items, className }: VideoPlaylistProps) {
	const normalizedItems = useMemo(() => items.filter(Boolean), [items])
	const [activeIndex, setActiveIndex] = useState(0)

	const vimeoHostRef = useRef<HTMLDivElement | null>(null)
	const vimeoPlayerRef = useRef<Player | null>(null)

	const activeItem = normalizedItems[activeIndex]

	useEffect(() => {
		if (!activeItem || normalizedItems.length === 0) return
		return () => {
			vimeoPlayerRef.current?.destroy()
			vimeoPlayerRef.current = null
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeIndex])

	useEffect(() => {
		if (!activeItem || activeItem.type !== "vimeo") return
		if (!vimeoHostRef.current) return

		vimeoPlayerRef.current?.destroy()
		vimeoPlayerRef.current = null

		const player = new Player(vimeoHostRef.current, {
			id: Number(activeItem.vimeoId),
			autoplay: true,
			muted: true,
			controls: true,
			responsive: true
		})

		vimeoPlayerRef.current = player

		const handleEnded = () => {
			setActiveIndex((idx) => (idx + 1) % normalizedItems.length)
		}

		player.on("ended", handleEnded)

		return () => {
			player.off("ended", handleEnded)
			player.destroy()
			if (vimeoPlayerRef.current === player) vimeoPlayerRef.current = null
		}
	}, [activeItem, normalizedItems.length])

	if (!activeItem) return null

	return (
		<div className={className}>
			{activeItem.type === "vimeo" ? (
				<div className="w-full max-w-lg">
					<div className="aspect-video w-full overflow-hidden rounded-lg bg-black">
						<div ref={vimeoHostRef} className="h-full w-full" />
					</div>
				</div>
			) : (
				<video
					className="rounded-lg w-full max-w-lg"
					width="auto"
					height="auto"
					controls
					autoPlay
					playsInline
					onEnded={() =>
						setActiveIndex((idx) => (idx + 1) % normalizedItems.length)
					}
				>
					<source
						src={activeItem.src}
						type={activeItem.typeHint ?? "video/mp4"}
					/>
					Your browser does not support the video tag
				</video>
			)}
		</div>
	)
}

