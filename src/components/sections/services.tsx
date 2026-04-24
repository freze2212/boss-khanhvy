import Link from "next/link"

import {
	Building2,
	ChartArea,
	ChartNoAxesCombined,
	Gem,
	HandHeart
} from "lucide-react"

import { useIsMobile } from "@/hooks/use-mobile"

export const SectionServices = () => {
	const isMobile = useIsMobile()
	const link = !isMobile ? "https://xx88.com/" : "https://xx88-cd.pages.dev/"

	return (
		<>
			<section className="items-center bg-[#1b1310] py-12">
				<div className="container max-w-7xl text-center">
					<h2 className="text-3xl uppercase text-[#d6ae5b] font-bold hover:text-yellow-500 text-center sm:mb-3 mb-6">
						<Link target="_blank" href={link}>
							xx88.com
						</Link>
					</h2>

					<div className="flex sm:flex-row flex-col items-center justify-items-center w-full gap-10">
						<div className="sm:w-1/2 md:w-full w-full">
							<div className="sm:ml-[130px] ml-0">
								<div className="inline-flex items-center justify-center border border-[#d6ae5b] rounded-lg text-center px-3 py-8 w-full gap-6  min-h-[150px] hover:bg-yellow-600  cursor-pointer">
									<div className="text-center">
										<Building2 size={40} className="text-[#d6ae5b] m-auto" />
									</div>
									<p className="text-lg text-start font-medium uppercase text-gray-300 mt-2">
										Hỗ trợ <br /> khởi nghiệp
									</p>
								</div>

								<div className="inline-flex items-center justify-center border border-[#d6ae5b] rounded-lg text-center px-3 py-8 w-full gap-6 mt-8 min-h-[150px] hover:bg-yellow-600 cursor-pointer">
									<div className="text-center">
										<ChartArea size={40} className="text-[#d6ae5b] m-auto" />
									</div>
									<p className="text-lg text-start font-medium uppercase text-gray-300 mt-2">
										Kinh doanh <br /> online
									</p>
								</div>

								<div className="inline-flex items-center justify-center border border-[#d6ae5b] rounded-lg text-center px-3 py-8 w-full gap-6 mt-8 min-h-[150px] hover:bg-yellow-600 cursor-pointer">
									<div className="text-center">
										<ChartNoAxesCombined
											size={40}
											className="text-[#d6ae5b] m-auto"
										/>
									</div>
									<p className="text-lg text-start font-medium uppercase text-gray-300 mt-2">
										Tư vấn gỡ nợ & <br /> Quản lý tài chính
									</p>
								</div>

								<div className="inline-flex items-center justify-center border border-[#d6ae5b] rounded-lg text-center px-3 py-8 w-full gap-6 mt-8 min-h-[150px] hover:bg-yellow-600 cursor-pointer">
									<div className="text-center">
										<Gem size={40} className="text-[#d6ae5b] m-auto" />
									</div>
									<p className="text-lg text-start font-medium uppercase text-gray-300 mt-2">
										Công thức độc quyền
									</p>
								</div>

								<div className="inline-flex items-center justify-center border border-[#d6ae5b] rounded-lg text-center px-3 py-8 w-full gap-6 mt-8 min-h-[150px] hover:bg-yellow-600">
									<div className="text-center">
										<HandHeart size={40} className="text-[#d6ae5b] m-auto" />
									</div>
									<p className="text-lg text-start font-medium uppercase text-gray-300 mt-2">
										Hỗ trợ đặc biệt
									</p>
								</div>
							</div>
						</div>
						<div className="sm:w-1/2 md:w-full w-full">
							{/* <h2 className="text-3xl uppercase text-[#d6ae5b] font-medium text-start">
								Công thức baccarat
							</h2> */}

							<div className="">
								<div className="mt-6">
									<video
										className="rounded-lg w-full max-w-lg"
										width="auto"
										height="auto"
										controls
									>
										<source src="/videos/intro.mp4" type="video/mp4" />
										Your browser does not support the video tag
									</video>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
