import Image from "next/image"

export const SectionSlide = () => {
	return (
		<>
			<section className="bg-slider items-center mt-[60px]">
				<div className="w-full mx-auto">
					<Image
						src={"./bg/slide01.png"}
						alt="Khánh Vy - Tư duy làm chủ cuộc chơi - thay đổi vận mệnh"
						title="Khánh Vy - Tư duy làm chủ cuộc chơi - thay đổi vận mệnh"
						width={100}
						height={100}
						className="bg-cover w-full h-full"
					/>
				</div>
			</section>
		</>
	)
}
