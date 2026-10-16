import { Education } from '../components/Education';
import { ExperienceList } from '../components/ExperienceList';
import { Hero } from '../components/Hero';
import { ProjectList } from '../components/ProjectList';
import { Reveal } from '../components/Reveal';
import { SkillGroups } from '../components/SkillGroups';
import { Page } from '../layout';
import { resume } from '../resume-data';

export function ResumePage() {
  return (
    <Page dense page="resume">
      <Reveal>
        <Hero
          blog="/blog/"
          email={resume.email}
          github={resume.github}
          name={resume.name}
          summary={resume.summary}
          title={resume.title}
        />
      </Reveal>
      <Reveal delay={0.05}>
        <SkillGroups skills={resume.skills} />
      </Reveal>
      <Reveal delay={0.1}>
        <ExperienceList experiences={resume.experiences} />
      </Reveal>
      <Reveal delay={0.15}>
        <ProjectList projects={resume.projects} />
      </Reveal>
      <Reveal delay={0.2}>
        <Education education={resume.education} />
      </Reveal>
    </Page>
  );
}
