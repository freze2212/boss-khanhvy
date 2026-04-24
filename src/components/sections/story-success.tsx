import Image from "next/image"

export const SectionStorySuccess = () => {
	return (
		<>
			<section className="items-center bg-[#1b1310] py-12">
				<div className="container max-w-7xl">
					<div className="relative">
						<div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
							<div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
								<div className="sm:max-w-lg mb-4">
									<h1 className="font text-2xl font-bold tracking-tight text-[#d6ae5b] sm:text-4xl">
										Câu chuyện thành công
									</h1>
									<p className="mt-4 text-xl text-white/80">
										Boss Khánh Vy bắt đầu từ những lần thua lỗ, tự mình ghi chép
										và mài giũa cách đọc cầu. <br /> Hơn 10 năm kinh nghiệm cùng
										công nghệ 4.0 giúp cô phân tích xu hướng chuẩn xác, bình
										tĩnh chọn thời điểm xuống tiền <br />
										Cộng đồng casino ấn tượng vì cô không chỉ chơi, mà còn chia
										sẻ chiến thuật thực chiến rõ ràng và hiệu quả.”
									</p>
								</div>
								<div className="max-w-7xl">
									<div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
										<div className="flex items-center space-x-6 lg:space-x-8">
											<Image
												alt="Boss Khánh Vy, bậc thầy trong Baccarat"
												title="Boss Khánh Vy, bậc thầy trong Baccarat"
												src={"bg/slide04.jpg"}
												width={100}
												height={100}
												className="h-full w-full object-cover rounded-2xl shadow-2xl object-center max-h-[600px]"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
