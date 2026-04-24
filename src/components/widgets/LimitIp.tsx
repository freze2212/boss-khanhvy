"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle
} from "@/components/ui/dialog"

interface LimitIpProps {
	children: React.ReactNode
	mode?: "modal" | "redirect"
	asChild?: boolean
	isOpen: boolean
	title: ""
	description: ""
	onClose: () => void
}

export const LimitIp = ({
	children,
	mode = "redirect",
	isOpen,
	title,
	description,
	onClose
}: LimitIpProps) => {
	const router = useRouter()
	const onClick = () => {
		router.push("/")
	}

	const onChange = (open: boolean) => {
		if (!open) {
			onClose()
		}
	}

	if (mode === "modal") {
		return (
			<Dialog open={isOpen} onOpenChange={onChange}>
				<DialogContent className="p-0 w-full bg-transparent border-0 shadow-none">
					<DialogHeader>
						<DialogTitle>{title}</DialogTitle>
						<DialogDescription>
							{description}
							<Image
								src="./images/kjc-warning.png"
								width={640}
								height={480}
								alt="kjc"
								title="kjc - giới hạn ip"
							/>
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		)
	}

	return (
		<span onClick={onClick} className="cursor-pointer">
			{children}
		</span>
	)
}
