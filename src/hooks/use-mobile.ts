"use client"

import { useEffect, useState } from "react"
import { useMediaQuery } from "react-responsive"

export const IS_SERVER = typeof window === "undefined"
export const MOBILE_SCREEN_MAX_WIDTH = 640
export const SERVER_SIDE_MOBILE_FIRST = true

export function useIsMobileByMediaQuery(maxWidth = MOBILE_SCREEN_MAX_WIDTH) {
	const isMobile = useMediaQuery({ maxWidth })
	return isMobile
}

export function useIsMobileForNextJs(maxWidth = MOBILE_SCREEN_MAX_WIDTH) {
	const isMobile = useIsMobileByMediaQuery(maxWidth)
	const [isMobileDelayed, setIsMobileDelayed] = useState(
		SERVER_SIDE_MOBILE_FIRST
	)

	useEffect(() => {
		setIsMobileDelayed(isMobile)
	}, [isMobile])

	return isMobileDelayed
}

export const useIsMobile = IS_SERVER
	? () => SERVER_SIDE_MOBILE_FIRST
	: useIsMobileForNextJs
