"use client"

import { SetStateAction, useState } from "react"
import Image from "next/image"
import Link from "next/link"

import {
	ArrowLeft,
	ArrowRight,
	Building2,
	ChartArea,
	ChartNoAxesCombined,
	X
} from "lucide-react"

export const SectionAboutUs = () => {
	// Todo here
	const images = [
		"/images/anh-118.jpg",
		"/images/anh-108.jpg",
		"/images/anh-109.jpg",
		"/images/anh-110.jpg"
	]

	const [isOpen, setIsOpen] = useState(false)
	const [currentImageIndex, setCurrentImageIndex] = useState(0)

	const openLightbox = (index: SetStateAction<number>) => {
		setCurrentImageIndex(index)
		setIsOpen(true)
	}

	const closeLightbox = () => {
		setIsOpen(false)
	}

	const goToPrevious = () => {
		setCurrentImageIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		)
	}

	const goToNext = () => {
		setCurrentImageIndex((prevIndex) =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1
		)
	}

	return (
		<>
			<section className="items-center bg-[#21130d] sm:py-12 py-6">
				<div className="container max-w-7xl text-center">
					{/* <h2 className="text-3xl uppercase text-[#d6ae5b] font-medium text-start">
						Giới thiệu
					</h2> */}

					<div className="mb-12 text-center">
						<h2 className="text-3xl font-extrabold text-white sm:text-3xl uppercase">
							Giới thiệu
						</h2>
						{/* <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
								Check out some of our recent work and case studies
							</p> */}
					</div>

					<div className="flex justify-center mb-6">
						<div className="w-full max-w-4xl">
							<div className="aspect-video w-full overflow-hidden rounded-lg bg-black">
								<iframe
									src="https://player.vimeo.com/video/1186209631?autoplay=0&muted=0&controls=1"
									className="h-full w-full"
									allow="autoplay; fullscreen; picture-in-picture"
									allowFullScreen
									title="BOSS KHÁNH VY - Video giới thiệu"
								/>
							</div>
						</div>
					</div>

					<div className="grid sm:grid-cols-2 grid-cols-1 items-center justify-items-center justify-center text-center gap-4">
						<div className="text-start">
							<div className="max-w-[500px]">
								<Image
									src={images[0]}
									alt="Khánh Vy - Tư duy làm chủ cuộc chơi - thay đổi vận mệnh"
									title="Khánh Vy - Tư duy làm chủ cuộc chơi - thay đổi vận mệnh"
									width={1021}
									height={1280}
									className="object-cover rounded-2xl shadow-2xl transform transition duration-300 ease-in-out hover:scale-90"
								/>
							</div>
						</div>
						<div className="w-full">
							<h3 className="text-start text-gray-300 mb-3">
								Quá trình học hỏi và trở thành chuyên gia Baccarat là một trò
								chơi đòi hỏi sự hiểu biết sâu sắc về luật lệ, chiến lược, và khả
								năng phân tích. <br />
								<b className="text-[#d6ae5b]">BOSS KHÁNH VY</b> không ngừng học
								hỏi, tích hợp công nghệ 4.0 vào cách chơi và quản lý chiến lược
								của mình. <br />
								Cô ấy nắm vững các kỹ thuật, từ cách đọc hiểu các mẹo nhỏ đến bí
								mật của trò chơi, giúp{" "}
								<b className="text-[#d6ae5b]">BOSS KHÁNH VY</b> xây dựng uy tín
								trong cộng đồng Casino. <br />
							</h3>

							<div className="grid grid-cols-3 gap-4">
								{images &&
									images.map((item, index) => {
										if (index > 0) {
											return (
												<div key={index} className="mt-3">
													<Image
														src={item}
														alt="Khánh Vy - Tư duy làm chủ cuộc chơi - thay đổi vận mệnh"
														title="Khánh Vy - Tư duy làm chủ cuộc chơi - thay đổi vận mệnh"
														width={1021}
														height={1280}
														className="object-cover rounded-lg shadow-2xl transform transition duration-300 ease-in-out hover:scale-90 hover:cursor-pointer"
														onClick={() => openLightbox(index)}
													/>
												</div>
											)
										}
									})}
							</div>

							<div className="grid grid-cols-3 gap-4 mt-6">
								<div className="border border-[#d6ae5b] rounded-lg text-center px-3 py-12 hover:bg-yellow-600 cursor-pointer">
									<div className="text-center">
										<Building2 size={40} className="text-[#d6ae5b] m-auto" />
									</div>
									<p className="sm:text-lg text-sm font-medium text-center uppercase text-white/80 mt-2">
										Hỗ trợ <br /> khởi nghiệp
									</p>
								</div>

								<div className="border border-[#d6ae5b] rounded-lg text-center px-3 py-12 hover:bg-yellow-600 cursor-pointer">
									<div className="text-center">
										<ChartArea size={40} className="text-[#d6ae5b] m-auto" />
									</div>
									<p className="sm:text-lg text-sm font-medium text-center uppercase text-white/80 mt-2">
										Kinh doanh <br /> online
									</p>
								</div>

								<div className="border border-[#d6ae5b] rounded-lg text-center px-3 py-12 hover:bg-yellow-600 cursor-pointer">
									<div className="text-center">
										<ChartNoAxesCombined
											size={40}
											className="text-[#d6ae5b] m-auto"
										/>
									</div>
									<p className="sm:text-lg text-sm font-medium text-center uppercase text-white/80 mt-2">
										Tư vấn gỡ nợ & <br /> Quản lý tài chính
									</p>
								</div>
							</div>

							{isOpen && (
								<div className="fixed inset-0 bg-white/50 bg-opacity-80 flex items-center justify-center z-50 transition-all duration-300 ease-in-out translate-y-0">
									<div className="relative max-w-7xl w-full mx-4 ">
										<button
											onClick={closeLightbox}
											className="absolute top-4 right-4 text-white text-3xl font-bold bg-transparent rounded-full w-10 h-10 flex items-center justify-center hover:bg-transparent transition"
										>
											<X size={34} />
										</button>

										<div>
											<Image
												src={images[currentImageIndex]}
												alt="Khánh Vy - Tư duy làm chủ cuộc chơi - thay đổi vận mệnh"
												title="Khánh Vy - Tư duy làm chủ cuộc chơi - thay đổi vận mệnh"
												className="w-full h-auto max-h-[80vh] object-cover rounded-2xl shadow-2xl"
												width={100}
												height={100}
											/>
										</div>

										<button
											onClick={goToPrevious}
											className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-white/30 rounded-full w-10 h-10 flex items-center justify-center hover:bg-white/50 transition"
										>
											<ArrowLeft size={34} />
										</button>
										<button
											onClick={goToNext}
											className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-white/30 rounded-full w-10 h-10 flex items-center justify-center hover:bg-white/50 transition"
										>
											<ArrowRight size={34} />
										</button>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
