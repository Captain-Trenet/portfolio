import styles from "./page.module.scss";
import Image from "next/image";
const page = () => {
  const data = [
    {
      id: 1,
      title: "Kanban Drag & Drop",
      tools: ["HTML", "CSS", "Javascript", "React.Js", "Next.js"],
      github: "",
      image: "/01.png",
      demoUrl: "https://kanbann-clone.vercel.app/projects/Mobile%20App",
    },
    {
      id: 2,
      title: "Transcend",
      tools: ["HTML", "SASS", "Javascript", "React.Js", "Next.js"],
      github: "",
      image: "/09.png",
      demoUrl: "https://transcend-five.vercel.app/",
    },

    {
      id: 4,
      title: "Sunshine Yoga",
      tools: ["HTML", "CSS", "Javascript", "SASS"],
      github: "",
      image: "/03.png",
      demoUrl: "https://sunshineo.netlify.app/",
    },
    {
      id: 5,
      title: "Dreamzone school",
      tools: ["HTML", "CSS", "Javascript", "SASS"],
      github: "",
      image: "/02.png",
      demoUrl: "https://dreamzone.netlify.app/",
    },
    {
      id: 6,
      title: "TakeTestPro",
      tools: ["HTML", "CSS", "Javascript", "React.Js", "SASS"],
      github: "",
      image: "/04.png",
      demoUrl: "https://taketestpro.netlify.app/",
    },
    {
      id: 7,
      title: "Memory Mapper",
      tools: ["HTML", "CSS", "Javascript", "React.Js", "SASS"],
      github: "",
      image: "/05.jpg",
      demoUrl: "https://memorymapper.netlify.app/",
    },
    {
      id: 3,
      title: "Idlyfarm",
      tools: ["HTML", "CSS", "Javascript", "React.Js", "SASS", "Node.Js"],
      github: "",
      image: "/06.jpg",
      demoUrl: "https://idlyfarm.herokuapp.com/",
    },
    {
      id: 8,
      title: "Ecommerce",
      tools: ["HTML", "Javascript", "React.Js", "SASS", "Next.Js", "Node.Js"],
      github: "",
      demoUrl: "",
      image: "",
    },
  ];

  return (
    <div className={styles.container}>
      {/* section one */}
      <div id="home" className={styles.sectionOne}>
        <div className={styles.navbarTwo}>
          <Image
            src={"/logo-grey.png"}
            alt=""
            width={60}
            height={60}
            className={styles.navbarImg}
          />
          <input
            type="checkbox"
            className={styles.navigation__checkbox}
            id="navi-toggle"
          />
          <label htmlFor="navi-toggle" className={styles.navigation__button}>
            <span className={styles.navigation__icon}>&nbsp;</span>
          </label>
          <div className={styles.navbar2Right}>
            <a href="#home" className={styles.nav2Link}>
              Home
            </a>
            <a href="#projects" className={styles.nav2Link}>
              Projects
            </a>
            <a href="#about" className={styles.nav2Link}>
              About Me
            </a>
            <a href="#contact" className={styles.nav2Link}>
              Contact
            </a>
          </div>
        </div>
        <div className={styles.navbarContainer}>
          <div className={styles.navbar}>
            <div className={styles.navbarLeft}>Hemanth Kovuru</div>
            <div className={styles.navbarRight}>
              <a href="#home" className={styles.navLink}>
                Home
              </a>
              <a href="#projects" className={styles.navLink}>
                Projects
              </a>
              <a href="#about" className={styles.navLink}>
                About Me
              </a>
              <a href="#contact" className={styles.navLink}>
                Contact
              </a>
            </div>
          </div>
        </div>
        <div className={styles.header}>
          <div className={styles.headingPrimary}>Hemanth Kovuru</div>
          <div className={styles.headingSecondary}>Full Stack Developer</div>
          <div className={styles.buttons}>
            {/* <div className={styles.buttonPrimary}>Github</div> */}
            <div
              className={
                styles.animLeft + " " + styles.customBtn + " " + styles.btn
              }
            >
              <div>Github</div>
            </div>
            <div
              className={
                styles.animRight + " " + styles.customBtn + " " + styles.btn
              }
            >
              <div>Resume</div>
            </div>
          </div>
        </div>
      </div>
      {/* section two */}
      <div id="projects" className={styles.sectionTwo}>
        <div className={styles.sectionHeader}>Projects</div>
        <div className={styles.cardsContainer}>
          {data.map((card) => {
            return (
              <div key={card.id} className={styles.card}>
                <div className={styles.imgContainer}>
                  {card.image && (
                    <Image
                      src={card.image}
                      alt=""
                      fill={true}
                      className={styles.cardImg}
                    />
                  )}
                </div>
                <div className={styles.headingTer}>{card.title}</div>
                <div className={styles.cardContent}>
                  <div className={styles.text}>
                    {card.tools.map((lan) => (
                      <div key={lan} className={styles.textBtn}>
                        {lan}
                      </div>
                    ))}
                  </div>
                  <div className={styles.buttons2}>
                    <a
                      href={card.demoUrl}
                      className={styles.customBtn2}
                      target="_blank"
                    >
                      <div>View Demo</div>
                    </a>
                    <a
                      href={card.github}
                      className={styles.customBtn2}
                      target="_blank"
                    >
                      <div>View Github</div>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* section three */}
      <div id="about" className={styles.sectionThree}>
        <div className={styles.sectionHeader}>About Me</div>
        <p className={styles.aboutMe}>
          My name is Hemanth Kovuru, and I am a Full stack developer. I have a
          passion for both chess and coding. I find great joy in creating
          beautiful websites and applications using my development skills. The
          process of learning and building new things always excites me as a
          developer, and I continuously seek opportunities to expand my
          knowledge. I am thrilled to have the chance to learn more about the
          opportunity you have and to share how I believe I would be a great fit
          for your company. With my experience in Full stack development, I
          bring a strong foundation in building scalable and efficient web
          applications. I am confident in my ability to contribute to your team
          and deliver high-quality results.
        </p>
      </div>
      {/* section four */}
      <div id="contact" className={styles.sectionForm}>
        <div className={styles.sectionHeader}>GET IN TOUCH</div>
        <form className={styles.form}>
          <input className={styles.input} type="text" placeholder="Name" />
          <input className={styles.input} type="email" placeholder="Email" />
          <textarea
            className={styles.textarea}
            rows="6"
            placeholder="Message..."
          />

          <div className={styles.button}>Submit</div>
        </form>
      </div>
      {/* section footer */}

      <div id="section5" className={styles.footerContainer}>
        <footer className={styles.footer}>
          <div className={styles.footerLeft}>
            &copy;2023 Hemanthkovuru. All rights reserved.
          </div>
          <div className={styles.footerRight}>
            <a
              href="https://www.linkedin.com/in/trenet-blair-50781b24a/"
              target="_blank"
              className={styles.ImgContainer}
            >
              <Image alt="" fill={true} src={"/svg/linkedin.png"} />
            </a>
            <a href="" target="_blank" className={styles.ImgContainer}>
              <Image alt="" fill={true} src={"/svg/github.png"} />
            </a>
            <a
              href="mailto:trenetg20@gmail.com"
              target="_blank"
              className={styles.ImgContainer}
            >
              <Image alt="" fill={true} src={"/svg/mail.png"} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              className={styles.ImgContainer}
            >
              <Image alt="" fill={true} src={"/svg/twitter.png"} />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default page;
