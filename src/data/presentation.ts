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
  mail: "Odesanyaayorinde2014@gmail.com",
  title: "Hi, I’m Ayorinde 👋",
  //profile: "/profile.webp",
  description:
    "I am new to cloud computing. Currently i am working on my AWS cloud computing course, It has been an interesting moment trying to understand the techniques within the Tech space, most importantly the cloud computing industry. So far i have learnt how to create an EC2 instance, Kubernetes which helps to start a server and manages the container a Docker provides.
    {
      label: "YouTube",
      link: "https://youtube.com/@odesanyaayorinde5095",
    },
    {
      label: "X",
      link: "https://twitter.com/its_ays1",
    },
    {
      label: "LinkedIn",
      link: "https://linkedin.com/in/ayorinde-odesanya",
    },
    {
      label: "GitHub",
      link: "https://github.com/Ayorinde01",
    },
    
  ],
};

export default presentation;
