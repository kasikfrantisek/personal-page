import { SectionWrapper } from '../../sidewide/SectionWrapper';

export const About = () => {
  return (
    <SectionWrapper
      title={
        'From cocktails<br /> <span class="text-h1-light-mobile md:text-h1-light">To code</span>'
      }
      id="about"
    >
      <div className="space-y-2 pt-5 text-overline-16 md:space-y-5 md:pt-10 lg:w-2/3">
        <p>
          After high school, I visited some universities and lived abroad for a
          while. Eventually, I found my calling as a bartender, where I embraced
          the blend of creativity, order, and human interactions. However, the
          pandemic disrupted the stability of the hospitality industry,
          prompting me to shift my focus to digital screens. Driven by
          curiosity, I delved into coding to understand the inner workings of
          digital platforms.
        </p>
        <p>
          After a few months of self-learning, I secured my first office job at
          a small digital agency, where I constructed websites using a platform
          similar to Wix/Squarespace. Eager for more coding opportunities, I
          moved to Prague and joined a larger digital agency as a web editor.
          Still yearning for more coding expertise, I enrolled in the intensive
          Green Fox Academy bootcamp, a six-month journey of learning and
          skill-building that proved to be immensely valuable.
        </p>
        <p>
          Now, let&apos;s proceed to the next screen to explore my previous work
          experiences in greater detail and structure.
        </p>
      </div>
    </SectionWrapper>
  );
};
