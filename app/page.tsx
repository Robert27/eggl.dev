import NeoMarquee from '@/components/neo-marquee'
import AboutSection from '@/components/sections/about-section'
import CareerSection from '@/components/sections/career-section'
import ContactSection from '@/components/sections/contact-section'
import EducationSection from '@/components/sections/education-section'
import HeroSection from '@/components/sections/hero-section'
import ProjectsSection from '@/components/sections/projects-section'
import SkillsSection from '@/components/sections/skills-section'

export default function HomePage() {
	const NEO_MARQUEE_TEXT =
		'Full-Stack Development • Cloud Engineering • Artificial Intelligence • Open Source • Cloud Native Technologies • Software Development • Data Engineering • Mobile Development'
	return (
		<>
			<HeroSection />
			<NeoMarquee text={NEO_MARQUEE_TEXT} speed={50} fullBleed={true} />
			<AboutSection />
			<NeoMarquee text={NEO_MARQUEE_TEXT} speed={50} fullBleed={true} />
			<SkillsSection />
			<ProjectsSection />
			<EducationSection />
			<CareerSection />
			<ContactSection />
		</>
	)
}
