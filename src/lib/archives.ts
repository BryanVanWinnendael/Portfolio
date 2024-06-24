import MomezImage from "@/assets/images/momez/momez.webp";
import TwitterImage from "@/assets/images/twitter/twitter.webp";
import WrappedImage from "@/assets/images/wrapped/wrapped.webp";
import ChatlyImage from "@/assets/images/chatly/chatly2.webp";

interface Archive {
  image: string;
  year: string;
  title: string;
  type: "img" | "video";
  description: string;
}

export const ARCHIVES: Archive[] = [
  {
    image: "noted",
    year: "2024",
    title: "01./Noted",
    type: "video",
    description:
      "Noted is a combination of notion and obsidian with an inspired style by arc browser. It is a note taking app that allows you to write notes in block-style just like notion.",
  },
  {
    image: "drone",
    year: "2023",
    title: "02./Point Cloud Processor",
    type: "video",
    description:
      "Point Cloud Processor is an ai powered desktop application that allows you to process point cloud data in order to get information about all the planes in the point cloud.",
  },
  {
    image: "harbor",
    year: "2024",
    title: "03./Harbor",
    type: "video",
    description:
      " Harbor is a web application designed for Docker container management on your server. It simplifies container operations like creating, starting, stopping, and deleting through a user-friendly interface. Harbor also allows executing commands within containers, streamlining application management. It facilitates Docker image handling, supports MySQL database creation, offers analytics for resource monitoring, and includes cleanup tools for efficient Docker environment maintenance. Overall, Harbor enhances control and efficiency in managing containerized applications on your server infrastructure.",
  },
  {
    image: "unimail",
    year: "2024",
    title: "04./UniMail",
    type: "video",
    description:
      "UniMail is a web application that consolidates multiple email accounts into a single interface, allowing users to log in and manage all their emails in one place. The app offers features such as full-screen email viewing, theme customization, and adjustable email views. Additionally, UniMail integrates Groq AI to provide email summarization, enhancing the user experience by quickly condensing email content for easier reading.",
  },
  {
    image: "zap",
    year: "2024",
    title: "05./Zap",
    type: "video",
    description: "With zap you can quickly search for a given file or folder.",
  },
  {
    image: MomezImage.src,
    year: "2024",
    title: "06./Momez",
    type: "img",
    description:
      "With Momez you can share your favorite moments in a form of a picture with the world.",
  },
  {
    image: TwitterImage.src,
    year: "2024",
    title: "07./Twitter Clone",
    type: "img",
    description:
      "Twitter Clone, like twitter, is a social media platform. Make a post, comment, like a post and follow other users. Or create an api-key and use the api.",
  },
  {
    image: WrappedImage.src,
    year: "2024",
    title: "08./Wrapped Now",
    type: "img",
    description:
      "Wrapped now is spotify wrapped that you can use any time of the year. With wrapped now you can see your top genres, songs and artists of the last 4 weeks, 6 months and all time.",
  },
  {
    image: ChatlyImage.src,
    year: "2023",
    title: "09./Chatly",
    type: "img",
    description:
      " Chatly is an online website that allows you to chat with people from around the world.",
  },
];
