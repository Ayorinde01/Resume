type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "odesanyaayorinde2014@gmail.com",
  title: "Hi, I’m Ayorinde 👋",
  //profile: "/profile.webp",
  description:
    "I am a Cloud Engineer, I am new to Cloud Computing, this is my first project, i am currently learning about AWS and Kubernetes. I am passionate about helping people get into cloud and sharing my learnings in Cloud, DevOps and now Developer Relations.",
  socials: [
    {
      label: "YouTube",
      link: "https://youtube.com/@odesanyaayorinde5025",
    },
    {
      label: "X",
      link: "https://twitter.com/its_ays1",
    },
    {
      label: "LinkedIn",
      link: "https://linkedin.com/in/odesanyaayorinde01",
    },
    {
      label: "GitHub",
      link: "https://github.com/ayorinde01",
    },
    
  ],
};

export default presentation;
