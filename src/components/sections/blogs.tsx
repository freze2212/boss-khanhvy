import Image from "next/image"
import Link from "next/link"

export const SectionBlogs = () => {
	return (
		<>
			<section className="px-4 py-12 sm:px-6 lg:px-8 bg-[#21130d]">
				<div className="container">
					<div className="mx-auto max-w-7xl">
						<div className="mb-12 text-center">
							<h2 className="text-3xl font-extrabold text-white sm:text-3xl uppercase">
								Blog / Tin Tức
							</h2>
							<p className="mx-auto mt-3 max-w-2xl text-xl text-white/80 sm:mt-4">
								Những tin tức và nội dung mới nhất
							</p>
						</div>

						<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
							<div className="overflow-hidden bg-white/10 rounded-lg  shadow-md transition-transform duration-300 hover:scale-105">
								<div className="h-100 overflow-hidden">
									<Image
										src="./images/anh-119.jpg"
										alt="Khánh Vy - Tư duy làm chủ cuộc chơi - thay đổi vận mệnh"
										title="Khánh Vy - Tư duy làm chủ cuộc chơi - thay đổi vận mệnh"
										className="h-full w-full object-cover"
										width={100}
										height={100}
									/>
								</div>
								<div className="p-6">
									<h3 className="text-xl font-semibold text-[#d6ae5b] uppercase">
										Tư duy thành công
									</h3>
									<p className="mt-2 text-white">
										Thành công trong Baccarat không chỉ dựa vào may mắn mà đòi
										hỏi tư duy chiến lược, kỷ luật và quản lý vốn hiệu quả.
										Trước hết, nắm vững luật chơi là nền tảng. Hiểu rõ cách tính
										điểm, quy tắc rút bài thứ ba giúp bạn đưa ra quyết định
										chính xác. Tiếp theo, quản lý vốn là yếu tố then chốt
									</p>
								</div>
							</div>

							<div className="overflow-hidden bg-white/10 rounded-lg  shadow-md transition-transform duration-300 hover:scale-105">
								<div className="h-100 overflow-hidden">
									<Image
										src="./images/anh-116.png"
										alt="Khánh Vy - Tư duy làm chủ cuộc chơi - thay đổi vận mệnh"
										title="Khánh Vy - Tư duy làm chủ cuộc chơi - thay đổi vận mệnh"
										className="h-full w-full object-cover"
										width={100}
										height={100}
									/>
								</div>
								<div className="p-6">
									<h3 className="text-xl font-semibold text-[#d6ae5b] uppercase">
										Hỗ trợ bà con có hoàn cảnh gia đình khó khăn
									</h3>
									<p className="mt-2 text-white">
										Chuyến đi không hề dễ dàng khi đường sá xa xôi, thời tiết
										khắc nghiệt, nhưng tinh thần nhiệt huyết của Khánh Vy đã lan
										tỏa đến mọi người. Cô cũng thăm hỏi các gia đình khó khăn,
										lắng nghe câu chuyện của họ để thấu hiểu hơn về những thiếu
										thốn ở vùng sâu vùng xa
									</p>
								</div>
							</div>

							<div className="overflow-hidden bg-white/10 rounded-lg  shadow-md transition-transform duration-300 hover:scale-105">
								<div className="h-100 overflow-hidden">
									<Image
										src="./images/anh-117.png"
										alt="Hoạt động từ thiện"
										title="Hoạt động từ thiện"
										className="h-full w-full object-cover"
										width={100}
										height={100}
									/>
								</div>
								<div className="p-6">
									<h3 className="text-xl font-semibold text-[#d6ae5b] uppercase">
										Hoạt động từ thiện với trẻ em cơ nhỡ
									</h3>
									<p className="mt-2 text-white">
										Mỗi ngày, hàng ngàn trẻ em trên khắp Việt Nam đang đối mặt
										với những khó khăn không tưởng: thiếu thốn thực phẩm, không
										có cơ hội học hành, và sống trong những hoàn cảnh khắc
										nghiệt. Nhưng bạn có biết? Chỉ một hành động nhỏ từ bạn có
										thể thay đổi cả một tương lai!
									</p>
								</div>
							</div>
						</div>

						<div className="mt-12 text-center">
							<Link
								href="#"
								className="px-8 py-4 bg-gradient-to-r from-orange-500 via-orange-500 to-yellow-500 text-white font-semibold rounded-4xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out text-lg"
							>
								Xem thêm
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
