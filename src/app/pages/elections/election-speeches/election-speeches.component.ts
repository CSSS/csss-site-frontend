import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArticleComponent } from '@csss-code/article/article.component';

interface Nominee {
  name: string;
  speech: string;
}

@Component({
  selector: 'cs-election-speeches',
  imports: [ArticleComponent],
  templateUrl: './election-speeches.component.html',
  styleUrl: './election-speeches.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElectionSpeechesComponent {
  // FIXME: This was hardcoded because Jon had to get this page up ASAP
  nominees: Nominee[] = [
    {
      name: 'Sia Garg',
      speech: `I’ve already been helping out with CSSS this term — I made two of our Instagram posts for past events, I’ve sat in on multiple meetings, and I’ve been happy to jump in whenever help was needed. Doing that has shown me how much work goes on behind the scenes, and it made me want to be even more involved.

I’m running because I care about making our events look good, feel inviting, and reach more people. Good visuals and clear posts really do make a difference, and I want to help us be more consistent and creative with the way we present the CSSS.

If I get this role, I’ll keep doing what I’ve been doing: showing up, helping out, and making content that they're happy to put out there. Thanks for considering me!`
    },
    {
      name: 'Heather Nguyen',
      speech: `Hello all! My name is Heather and I'm a 3rd year majoring in Interactive Arts and Technology. My interests lie in the creation of fun and exciting, colorful designs in everyday life tech products, hence my concentration of Visual, UX/UI and Product Design.

In SIAT, we value the significance of creativity and innovation through our thoughtfully crafted designs. I think I similarly share these objectives with the CS student community, and I want to become part of our creation process for new ideas and projects. I have strong experience in creating posters/graphic assets or illustration from multiple design coordinator/director positions in the past, so I'm confident I would make a unique contribution to the community.

To tell a little more about myself: I watch anime, am proficient in drawing cute girls and have a newfound passion for getting myself stuck in the mines (in Minecraft) :D`
    },
    {
      name: 'Amelia Shen',
      speech: `Hi, : D My name is Amelia Shen, and I am a second-year student in the SFU-ZJU DDP for Computing Science and Finance. I can create designs and drawings using tools such as Procreate, Figma, Canva, Affinity Design, and PixelStudio.

I was a part of the Visual Design team for Try/CATCH 2025, a tech conference for high school girls and non-binary students by WiCS. I designed a sponsorship package, logos, merchandise (tote bags, mugs, and pens), as well as Instagram and LinkedIn posts using Figma, Procreate, and PixelStudio. I also help the Developers and Systems Club as an Assistant Director of Multimedia by designing Instagram posts for events such as the CMPT 125 Final Exam Review Session and the Recruiter Rewind.

I have a lot of experience creating media for clubs, as I was the Marketing Director for three clubs in high school: a science demonstration club, the student press club, and the business club. I would manage the Instagram accounts by uploading designed posts for events, writing captions, and posting stories. As the Marketing Director of the science demo club, I would also use a camera to film and take pictures. For the student press club, I would work with editors and authors to make posts that introduced short stories, editorials, articles, etc. For the business club, I made posts for events like case competitions and infographics on business topics.

In the past, I had a lot of fun designing posts for these clubs. My position as Marketing Director allowed me to take a break from schoolwork and spend time drawing and designing media. There was always a new theme to plan and work on. I could add my unique style and creativity to the CSSS Instagram. Drawing has also been a favourite hobby of mine since middle school.`
    }
  ];
}
