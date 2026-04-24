import Image from "next/image"


export default function Footer() {
	return (
		<>
			<footer className="bg-[#21130d] font-sans">
				<div className="container max-w-7xl px-6 py-12 mx-auto">
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
						<div className="sm:col-span-2 sm:text-start text-center">
							<div className="mb-3">
								<Image
									src="./logo-horizontal.png"
									alt="Khánh Vy - Tư duy làm chủ cuộc chơi - thay đổi vận mệnh"
									title="Khánh Vy - Tư duy làm chủ cuộc chơi - thay đổi vận mệnh"
									width={300}
									height={150}
								/>
							</div>

							<h1 className="max-w-lg text-xl font-semibold tracking-tight text-white xl:text-2xl">
								Đăng ký bản tin của Khánh Vy
							</h1>

							<div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
								<input
									id="email"
									type="text"
									className="px-4 py-2 text-gray-700 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
									placeholder="Địa chỉ Email của bạn"
								/>

								<button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-[#d6ae5b] rounded-lg hover:bg-[#d6ae5b] focus:ring focus:ring-[#d6ae5b] focus:ring-opacity-80">
									Gửi
								</button>
							</div>
						</div>

						<div>
							<p className="font-semibold text-[#d6ae5b] uppercase">
								Về BOSS Khánh Vy
							</p>
							<div className="flex flex-col items-start mt-5 space-y-2">
								<p className="text-white transition-colors duration-300   hover:underline hover:cursor-pointer hover:text-amber-500">
									Trang chủ
								</p>
								<p className="text-white transition-colors duration-300   hover:underline hover:cursor-pointer hover:text-amber-500">
									Giới thiệu
								</p>
								<p className="text-white transition-colors duration-300   hover:underline hover:cursor-pointer hover:text-amber-500">
									Liên hệ
								</p>
							</div>
						</div>

						<div>
							<p className="font-semibold text-[#d6ae5b] uppercase">
								Dịch vụ / Chương trình hỗ trợ
							</p>
							<div className="flex flex-col items-start mt-5 space-y-2">
								<p className="text-white transition-colors duration-300   hover:underline hover:cursor-pointer hover:text-amber-500">
									Công thức Baccarat & Chiến lược vốn
								</p>
								<p className="text-white transition-colors duration-300   hover:underline hover:cursor-pointer hover:text-amber-500">
									Câu chuyện thành công
								</p>
								<p className="text-white transition-colors duration-300   hover:underline hover:cursor-pointer hover:text-amber-500">
									Blog / Chia sẻ
								</p>
								<p className="text-white transition-colors duration-300   hover:underline hover:cursor-pointer hover:text-amber-500">
									Sự kiện & Truyền thông
								</p>
								<p className="text-white transition-colors duration-300   hover:underline hover:cursor-pointer hover:text-amber-500">
									Mẹo tăng uy tín
								</p>
							</div>
						</div>
					</div>

					<hr className="my-6 border-white/10 md:my-8 dark:border-white/10 h-2" />

					<div className="sm:flex sm:items-center sm:justify-between justify-items-center" />
					<p className="font-sans p-8 text-center md:text-center md:p-4 text-white">
						© {new Date().getFullYear()} BOSS KHÁNH VY. All rights reserved
					</p>
				</div>

				<div />
			</footer>
		</>
	)
}
