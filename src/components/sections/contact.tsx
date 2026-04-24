"use client"

import Image from "next/image"
import Link from "next/link"

import { telegramData } from "@/data/telegram-data"

export const SectionContact = () => {
	const images = [
		"/images/anh-113.jpg",
		"/images/anh-108.jpg",
		"/images/anh-109.jpg",
		"/images/anh-110.jpg"
	]

	return (
		<>
			<section className="px-4 py-12 sm:px-6 lg:px-8 bg-[#1b1310]">
				<div className="container">
					<div className="mx-auto max-w-7xl">
						<div className="mb-12 text-center">
							<h2 className="text-3xl font-extrabold text-white sm:text-3xl uppercase">
								Liên hệ với BOSS KHÁNH VY
							</h2>
							{/* <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
								Check out some of our recent work and case studies
							</p> */}
						</div>

						<div className="flex flex-wrap items-center justify-center gap-6 text-center">
							{telegramData?.map((item, index) => (
								<figure key={index}>
									<Link
										href={item.link}
										className="flex flex-col items-center justify-center text-center animate-pulse hover:animate-bounce"
									>
										{item.icon}
										<figcaption className="sm:text-lg text-sm capitalize font-black text-white">
										</figcaption>
									</Link>
								</figure>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
