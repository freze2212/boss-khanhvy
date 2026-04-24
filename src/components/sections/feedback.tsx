"use client"

import Image from "next/image"

export const SectionFeedback = () => {
	return (
		<>
			<section className="px-4 py-12 sm:px-6 lg:px-8 bg-[#21130d]">
				<div className="container max-w-7xl">
					<div className="mx-auto">
						<div className="mb-12 text-center">
							<h2 className="text-3xl font-extrabold text-white sm:text-3xl uppercase">
								Mọi người nói gì về BOSS KHÁNH VY
							</h2>
							<p className="mx-auto mt-3 max-w-2xl text-xl text-white/80 sm:mt-4">
								Nhiều người đã thay đổi vận mệnh nhờ tư duy làm chủ, phía dưới
								là chia sẻ
							</p>
						</div>

						<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
							<figure className="relative rounded-2xl bg-white p-6 shadow-2xl shadow-slate-900/10">
								<svg
									aria-hidden="true"
									width="105"
									height="78"
									className="absolute left-6 top-6 fill-slate-100"
								>
									<path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
								</svg>
								<blockquote className="relative">
									<p className="text-lg tracking-tight text-slate-900">
										<b>BOSS Khánh Vy</b> đúng là bậc thầy trong Baccarat! Tôi đã
										học được cách quản lý vốn và đọc cầu từ các chia sẻ của cô
										ấy. Nhờ áp dụng chiến thuật của cô ấy, tôi đã cải thiện cách
										chơi và có những chiến thắng to lớn
									</p>
								</blockquote>
								<figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
									<div>
										<div className="font-display text-base text-slate-900">
											LÊ HOÀI NAM
										</div>
									</div>
									<div className="overflow-hidden rounded-full bg-slate-50">
										<Image
											alt="Boss Khánh Vy, bậc thầy trong Baccarat"
											title="Boss Khánh Vy, bậc thầy trong Baccarat"
											className="h-14 w-14 object-cover"
											src="./users/user02.jpg"
											width={100}
											height={100}
										/>
									</div>
								</figcaption>
							</figure>

							<figure className="relative rounded-2xl bg-white p-6 shadow-2xl shadow-slate-900/10">
								<svg
									aria-hidden="true"
									width="105"
									height="78"
									className="absolute left-6 top-6 fill-slate-100"
								>
									<path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
								</svg>
								<blockquote className="relative">
									<p className="text-lg tracking-tight text-slate-900">
										<b>BOSS Khánh Vy</b> không chỉ giỏi mà còn rất tận tâm. Tôi
										tham gia một buổi chia sẻ của chị về chiến lược Baccarat, và
										cách chị giải thích dễ hiểu, thực tế, không hoa mỹ. Thật sự
										là một người thầy tuyệt vời BACCARAT!
									</p>
								</blockquote>
								<figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
									<div>
										<div className="font-display text-base text-slate-900">
											NGUYÊN LÊ HOÀI TRÂN
										</div>
									</div>
									<div className="overflow-hidden rounded-full bg-slate-50">
										<Image
											alt="Boss Khánh Vy, bậc thầy trong Baccarat"
											title="Boss Khánh Vy, bậc thầy trong Baccarat"
											className="h-14 w-14 object-cover"
											src="./users/user04.jpg"
											width={100}
											height={100}
										/>
									</div>
								</figcaption>
							</figure>

							<figure className="relative rounded-2xl bg-white p-6 shadow-2xl shadow-slate-900/10">
								<svg
									aria-hidden="true"
									width="105"
									height="78"
									className="absolute left-6 top-6 fill-slate-100"
								>
									<path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
								</svg>
								<blockquote className="relative">
									<p className="text-lg tracking-tight text-slate-900">
										Điều tôi thích ở <b>BOSS KHÁNH VY</b> là tư duy tích cực. Dù
										từng thất bại, chị không bỏ cuộc mà còn dùng kinh nghiệm để
										giúp người khác. Những bài viết của chị ấy trên mạng xã hội
										luôn truyền động lực cho tôi
									</p>
								</blockquote>
								<figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
									<div>
										<div className="font-display text-base text-slate-900">
											VÕ THU THẢO
										</div>
									</div>
									<div className="overflow-hidden rounded-full bg-slate-50">
										<Image
											alt="Boss Khánh Vy, bậc thầy trong Baccarat"
											title="Boss Khánh Vy, bậc thầy trong Baccarat"
											className="h-14 w-14 object-cover"
											src="./users/user03.png"
											width={100}
											height={100}
										/>
									</div>
								</figcaption>
							</figure>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
