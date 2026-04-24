"use client"

import {
	SectionAboutUs,
	SectionBlogs,
	SectionContact,
	SectionEvents,
	SectionFeatures,
	SectionFeedback,
	SectionServices,
	SectionSlide,
	SectionStorySuccess
} from "@/components/sections"

export default function Page() {
	return (
		<>
			<div className="min-h-screen flex flex-col justify-center">
				<SectionSlide />
				<SectionFeatures />
				<SectionContact />
				<SectionAboutUs />
				<SectionServices />
				<SectionFeedback />
				<SectionStorySuccess />
				<SectionBlogs />
				<SectionEvents />
			</div>
		</>
	)
}
