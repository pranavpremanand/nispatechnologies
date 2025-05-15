import logoImg from "./assets/images/logo/logo.png";
import whyChooseUsIcon1 from "./assets/images/ph_target-light.png";
import whyChooseUsIcon2 from "./assets/images/mage_light-bulb.png";
import whyChooseUsIcon3 from "./assets/images/tdesign_user-talk.png";
import whyChooseUsIcon4 from "./assets/images/healthicons_ui-secure-outline.png";
import whyChooseUsPng from "./assets/images/whychooseus-png.png";
import faqPng from "./assets/images/faq-character.png";
import appDevBanner from "./assets/images/app-dev-banner.jpg";
import webDevBanner from "./assets/images/web-landing-banner.jpg";
import webLandingAbout from "./assets/images/web-landing-about1.jpg";
import appLandingAbout from "./assets/images/app-landing-about.jpg";
import endlessOpportunitiesImg1 from "./assets/images/section-8-img-1.png";
import endlessOpportunitiesImg2 from "./assets/images/section-8-img-2.png";
import endlessOpportunitiesImg3 from "./assets/images/section-8-img-3.png";
import homeBannerVideo from "./assets/videos/home-banner.mp4";
import defaultBanner from "./assets/images/banner.jpg";
import aboutUsBanner from "./assets/images/aboutusbanner.jpg";
import contactusbanner from "./assets/images/contactusbanner1.jpg";
import aboutUsGridImg1 from "./assets/images/aboutus-png1.png";
import aboutUsGridImg2 from "./assets/images/aboutus-png2.png";
import aboutUsGridImg3 from "./assets/images/aboutus-png3.png";
import aboutUsGridImg4 from "./assets/images/aboutus-png4.png";
import aboutUsGridImg5 from "./assets/images/aboutus-png5.png";
import profileImg1 from "./assets/images/profileimg-1.jpg";
import profileImg2 from "./assets/images/profileimg-2.jpg";
import serviceswebdevelopment from "./assets/images/services/serviceswebdevelopment.jpg";
import serviceaidevelopment from "./assets/images/services/serviceaidevelopment.jpg";
import chatbotdevelopment from "./assets/images/services/chatbotdevelopment.jpg";
import datadevelopment from "./assets/images/services/datadevelopment.jpg";
import gamedevelopment from "./assets/images/services/gamedevelopment.jpg";
import blockchaindevelopment from "./assets/images/services/blockchaindevelopment.jpg";
import machinelearning from "./assets/images/services/machinelearning.jpg";
import clouddevelopment from "./assets/images/services/clouddevelopment.jpg";
import rpa from "./assets/images/services/rpa.jpg";
import aboutone from "./assets/images/aboutone.jpg";
import abouttwo from "./assets/images/abouttwo.jpg";
import aboutthree from "./assets/images/aboutthree.jpg";
import aboutfour from "./assets/images/aboutfour.jpg";
import aboutfive from "./assets/images/aboutfive.jpg";
import aboutusintroone from "./assets/images/aboutusintroone.jpg";
import aboutusintrotwo from "./assets/images/aboutusintrotwo.jpg";
import allbgimage from "./assets/images/allbgimage.jpg";
import { lazy } from "react";
import { BiBrain, BiBulb, BiRocket } from "react-icons/bi";
import { GoFileMedia, GoGraph } from "react-icons/go";
import { SlBadge } from "react-icons/sl";
import {
  MdOutlineDashboardCustomize,
  MdOutlineDeveloperMode,
} from "react-icons/md";
import { GiArtificialIntelligence, GiRobotLeg } from "react-icons/gi";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";
import { BsFillClipboard2DataFill } from "react-icons/bs";
import {
  FaAppStoreIos,
  FaGamepad,
  FaLaptopCode,
  FaMobileAlt,
  FaNetworkWired,
  FaRobot,
  FaServer,
  FaVrCardboard,
} from "react-icons/fa";
import { SiFlutter, SiHiveBlockchain } from "react-icons/si";
import { IoLogoAndroid, IoMdCloudDone } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import { TfiLayoutMediaRightAlt } from "react-icons/tfi";
import { TbDeviceMobileCode } from "react-icons/tb";

const Home = lazy(() => import("./pages/website/Home"));
const Services = lazy(() => import("./pages/website/Services"));
const ContactUs = lazy(() => import("./pages/website/ContactUs"));
const AboutUs = lazy(() => import("./pages/website/AboutUs"));

export {
  logoImg,
  whyChooseUsPng,
  whyChooseUsIcon1,
  whyChooseUsIcon2,
  whyChooseUsIcon3,
  whyChooseUsIcon4,
  faqPng,
  appDevBanner,
  webDevBanner,
  webLandingAbout,
  appLandingAbout,
  endlessOpportunitiesImg1,
  endlessOpportunitiesImg2,
  endlessOpportunitiesImg3,
  homeBannerVideo,
  defaultBanner,
  aboutUsBanner,
  aboutUsGridImg1,
  aboutUsGridImg2,
  aboutUsGridImg3,
  aboutUsGridImg4,
  aboutUsGridImg5,
  serviceswebdevelopment,
  serviceaidevelopment,
  chatbotdevelopment,
  datadevelopment,
  gamedevelopment,
  blockchaindevelopment,
  machinelearning,
  clouddevelopment,
  rpa,
  contactusbanner,
  aboutusintroone,
  aboutusintrotwo,
  allbgimage,
};

// company details
export const companyDetails = {
  phone: "+91-8299304970",
  whatsapp: "918299304970",
  whatsappbox: "918299304970",
  email: "mpranavprem@gmail.com",
  // email: "contact@nispatechnologies.com",
  address: "1046 SBI Colony, Ratan Lal Nagar, Kanpur",
  linkedin: "https://www.linkedin.com/in/gopi-awasthi/",
  instagram: "https://www.instagram.com/thegopiawasthii?igsh=ejlzajZhd3QzZWsx",
  facebook: "https://www.facebook.com/gopi.awasthi.792",
};

// website routes
export const routes = [
  {
    name: "Home",
    path: "/",
    component: <Home />,
  },
  {
    name: "Services",
    path: "/services",
    component: <Services />,
  },
  {
    name: "About Us",
    path: "/about-us",
    component: <AboutUs />,
  },
  // {
  //   name: "Blogs",
  //   path: "",
  //   component: <ContactUs />,
  // },
  {
    name: "Contact Us",
    path: "/contact-us",
    component: <ContactUs />,
  },
];

export const faqs = [
  {
    id: 1,
    question: "How do I get started?",
    answer:
      "Simply schedule a free consultation with us to discuss your idea. We will outline how we can help turn your vision into a successful AI company.",
  },
  {
    id: 2,
    question: "Do I need technical knowledge to start an AI company?",
    answer:
      "No, you don’t need technical expertise. Our team of AI experts will handle the technical aspects while you focus on the business vision and strategy.",
  },
  {
    id: 3,
    question: "How long does it take to launch an AI product?",
    answer:
      "The timeline varies, but typically it takes 3 to 6 months to develop a Minimum Viable Product (MVP) and begin the launch process.",
  },
  {
    id: 4,
    question: "How do I know if my AI idea is feasible?",
    answer:
      "We offer an initial consultation to evaluate your idea’s feasibility, its market potential, and provide feedback on how to refine it for success.",
  },
  {
    id: 5,
    question: "What kind of AI solutions do you offer?",
    answer:
      "We provide a wide range of AI solutions, including predictive analytics, natural language processing, computer vision, and custom AI model development tailored to your business needs.",
  },
];

// Web Development Services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Website Development",
    icon: require("./assets/images/icons/online-shopping.png"),
    img: <CgWebsite />,
    description:
      "Boost online sales with our custom e-commerce development services. We create secure, mobile-friendly online stores with AI-powered product recommendations, seamless checkout processes, and conversion-optimized designs. Our solutions integrate with major payment gateways and include inventory management for growing businesses.",
  },
  {
    id: 2,
    title: "Social Media Platform Development",
    img: <GoFileMedia />,
    icon: require("./assets/images/icons/socialmedia.png"),
    description:
      "Build engaging social networks with our custom platform development. We implement user profiles, content feeds, real-time interactions, and AI-powered moderation tools. Our scalable architecture supports growing communities while maintaining performance and security for your niche social platform.",
  },
  {
    id: 3,
    title: "High-Converting Landing Page Development",
    img: <TfiLayoutMediaRightAlt />,
    icon: require("./assets/images/icons/landing-page.png"),
    description:
      "Increase lead generation with our conversion-focused landing pages. Using heat mapping and A/B testing data, we design mobile-responsive pages with compelling copy, strategic CTAs, and fast-loading performance that typically achieve 30-50% higher conversion rates than industry averages.",
  },
  {
    id: 4,
    title: "Custom Web Application Development",
    img: <MdOutlineDashboardCustomize />,
    icon: require("./assets/images/icons/software-development.png"),
    description:
      "Streamline business operations with tailored web applications. Our custom solutions automate workflows, integrate with existing systems, and provide data-driven insights. We develop secure, scalable applications using modern frameworks to solve your unique business challenges.",
  },
];

// App Development Services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development Services",
    img: <FaAppStoreIos />,
    icon: require("./assets/images/icons/ios-development.png"),
    description:
      "Create high-performance iOS apps with our Swift and Objective-C development expertise. We build App Store-optimized applications featuring intuitive interfaces, offline capabilities, and AI-enhanced features like predictive analytics for better user engagement and retention.",
  },
  {
    id: 2,
    title: "Android App Development Solutions",
    img: <IoLogoAndroid />,
    icon: require("./assets/images/icons/android-development.png"),
    description:
      "Develop feature-rich Android applications with our Java and Kotlin expertise. Our apps include material design principles, background processing, and AI-driven personalization to deliver smooth user experiences across all device sizes and Android versions.",
  },
  {
    id: 3,
    title: "Cross-Platform Flutter App Development",
    img: <SiFlutter />,
    icon: require("./assets/images/icons/flutter-development.png"),
    description:
      "Launch apps faster with our Flutter development services. We create beautiful, native-compiled applications for both iOS and Android from a single codebase, reducing development time by 50% while maintaining performance and platform-specific behaviors.",
  },
  {
    id: 4,
    title: "Hybrid Mobile App Development",
    img: <TbDeviceMobileCode />,
    icon: require("./assets/images/icons/hybrid-app-development.png"),
    description:
      "Reach both iOS and Android users with our cost-effective hybrid app solutions. Using React Native and Ionic frameworks, we build apps with native-like performance, offline functionality, and seamless API integrations for businesses needing cross-platform solutions.",
  },
];

// all services
export const allServices = [
  {
    id: 1,
    img: <MdOutlineDeveloperMode className="w-6 h-6" />,
    image: require("./assets/images/services/serviceswebdevelopment.jpg"),
    link: "/services/web-development",
    title: "Web Development",
    desc: "From interactive websites to scalable web applications, our developers provide customized solutions that are fast, scalable, and secure.",
    detailContent: `
      <div class="space-y-6">
        <h2 class="text-3xl font-semibold">Web Development Services</h2>
        <p class="">We employ cutting-edge technologies like React, Angular, and Node.js to build seamless digital experiences that drive growth and keep your users engaged.</p>
        
        <div class="mt-6">
          <h3 class="text-xl font-medium mb-3">Our Expertise</h3>
          <ul class="space-y-2 list-disc list-inside ">
            <li>Custom Web Applications</li>
            <li>E-Commerce Solutions</li>
            <li>Content Management Systems</li>
            <li>API Development & Integration</li>
            <li>Progressive Web Apps</li>
          </ul>
        </div>
        
        <div class="mt-8">
          <h3 class="text-xl font-medium mb-3">Technologies We Use</h3>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-gray-50 p-3 rounded-lg">
              <h4 class="font-medium">Frontend</h4>
              <p>React, Angular, Vue, Next.js</p>
            </div>
            <div class="bg-gray-50 p-3 rounded-lg">
              <h4 class="font-medium">Backend</h4>
              <p>Node.js, Django, Laravel, .NET</p>
            </div>
          </div>
        </div>
      </div>
    `,
  },
  {
    id: 2,
    img: <GiArtificialIntelligence className="w-6 h-6" />,
    image: require("./assets/images/services/serviceaidevelopment.jpg"),
    link: "/services/ai-development",
    title: "Artificial Intelligence",
    desc: "We enable businesses to leverage the complete potential of AI through machine learning algorithms and NLP engines.",
    detailContent: `
      <div class="space-y-6">
        <h2 class="text-3xl font-semibold">AI Development Services</h2>
        <p class="">Our AI solutions are created to automate, optimize, and speed up decision-making processes across sectors.</p>
        
        <div class="mt-6">
          <h3 class="text-xl font-medium mb-3">Our Offerings</h3>
          <ul class="space-y-2 list-disc list-inside ">
            <li>Machine Learning Models</li>
            <li>Natural Language Processing</li>
            <li>Computer Vision Solutions</li>
            <li>Predictive Analytics</li>
            <li>AI-powered Automation</li>
          </ul>
        </div>
        
        <div class="mt-8">
          <h3 class="text-xl font-medium mb-3">Implementation Examples</h3>
          <div class="space-y-4">
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-medium">Retail Personalization</h4>
              <p>Increased conversion rates by 35% with recommendation engines</p>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-medium">Predictive Maintenance</h4>
              <p>Reduced equipment downtime by 60% in manufacturing</p>
            </div>
          </div>
        </div>
      </div>
    `,
  },
  {
    id: 3,
    img: <HiChatBubbleBottomCenterText className="w-6 h-6" />,
    image: require("./assets/images/services/uiux.webp"),
    link: "/services/ux-design",
    title: "UX Design",
    desc: "We combine usability, psychology, and brand identity to create intuitive interfaces that drive results.",
    detailContent: `
      <div class="space-y-6">
        <h2 class="text-3xl font-semibold">UX/UI Design Services</h2>
        <p class="">Each click, swipe, and scroll is carefully designed for maximum impact and effortless interaction.</p>
        
        <div class="mt-6">
          <h3 class="text-xl font-medium mb-3">Our Process</h3>
          <ol class="space-y-3 list-decimal list-inside ">
            <li>User Research & Analysis</li>
            <li>Wireframing & Prototyping</li>
            <li>UI Design & Branding</li>
            <li>Usability Testing</li>
            <li>Implementation Support</li>
          </ol>
        </div>
        
        <div class="mt-8">
          <h3 class="text-xl font-medium mb-3">Design Deliverables</h3>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-gray-50 p-3 rounded-lg">
              <h4 class="font-medium">User Flows</h4>
            </div>
            <div class="bg-gray-50 p-3 rounded-lg">
              <h4 class="font-medium">Interactive Prototypes</h4>
            </div>
            <div class="bg-gray-50 p-3 rounded-lg">
              <h4 class="font-medium">Design Systems</h4>
            </div>
            <div class="bg-gray-50 p-3 rounded-lg">
              <h4 class="font-medium">Accessibility Reports</h4>
            </div>
          </div>
        </div>
      </div>
    `,
  },
  {
    id: 4,
    img: <FaMobileAlt className="w-6 h-6" />,
    link: "/services/mobile-development",
    image: require("./assets/images/services/appdevelopment.webp"),
    title: "Mobile Development",
    desc: "Native and cross-platform apps built for performance and user satisfaction.",
    detailContent: `
      <div class="space-y-6">
        <h2 class="text-3xl font-semibold">Mobile App Development</h2>
        <p class="">We develop apps that are visually appealing and run smoothly across all platforms.</p>
        
        <div class="mt-6">
          <h3 class="text-xl font-medium mb-3">Our Capabilities</h3>
          <ul class="space-y-2 list-disc list-inside ">
            <li>iOS & Android Native Development</li>
            <li>Cross-Platform Solutions</li>
            <li>App UI/UX Design</li>
            <li>API Integration</li>
            <li>App Store Optimization</li>
          </ul>
        </div>
        
        <div class="mt-8">
          <h3 class="text-xl font-medium mb-3">Technology Stack</h3>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-gray-50 p-3 rounded-lg">
              <h4 class="font-medium">Native</h4>
              <p>Swift, Kotlin</p>
            </div>
            <div class="bg-gray-50 p-3 rounded-lg">
              <h4 class="font-medium">Cross-Platform</h4>
              <p>Flutter, React Native</p>
            </div>
          </div>
        </div>
      </div>
    `,
  },
  {
    id: 5,
    img: <IoMdCloudDone className="w-6 h-6" />,
    link: "/services/cloud-computing",
    image: require("./assets/images/services/clouddevelopment.jpg"),
    title: "Cloud Computing",
    desc: "Reimagine your business with the agility of cloud solutions on AWS, Azure, and Google Cloud.",
    detailContent: `
      <div class="space-y-6">
        <h2 class="text-3xl font-semibold">Cloud Services</h2>
        <p class="">We assist organizations in developing secure cloud environments tailored to their needs.</p>
        
        <div class="mt-6">
          <h3 class="text-xl font-medium mb-3">Our Offerings</h3>
          <ul class="space-y-2 list-disc list-inside ">
            <li>Cloud Migration</li>
            <li>Infrastructure as a Service (IaaS)</li>
            <li>Platform as a Service (PaaS)</li>
            <li>Cloud Security Solutions</li>
            <li>Cost Optimization</li>
          </ul>
        </div>
        
        <div class="mt-8">
          <h3 class="text-xl font-medium mb-3">Partner Platforms</h3>
          <div class="flex gap-4">
            <div class="bg-gray-50 p-3 rounded-lg flex-1">
              <h4 class="font-medium">AWS</h4>
            </div>
            <div class="bg-gray-50 p-3 rounded-lg flex-1">
              <h4 class="font-medium">Azure</h4>
            </div>
            <div class="bg-gray-50 p-3 rounded-lg flex-1">
              <h4 class="font-medium">Google Cloud</h4>
            </div>
          </div>
        </div>
      </div>
    `,
  },
  {
    id: 6,
    img: <FaVrCardboard className="w-6 h-6" />,
    link: "/services/vr-ar-development",
    image: require("./assets/images/services/arvr.webp"),
    title: "VR & AR Development",
    desc: "Immersive AR/VR experiences that revolutionize how users engage with your brand.",
    detailContent: `
      <div class="space-y-6">
        <h2 class="text-3xl font-semibold">VR & AR Solutions</h2>
        <p class="">We create interactive digital spaces for training, e-commerce, and entertainment.</p>
        
        <div class="mt-6">
          <h3 class="text-xl font-medium mb-3">Applications</h3>
          <ul class="space-y-2 list-disc list-inside ">
            <li>Immersive Training Simulations</li>
            <li>AR Marketing Experiences</li>
            <li>Virtual Showrooms</li>
            <li>Gaming & Entertainment</li>
            <li>Industrial Visualization</li>
          </ul>
        </div>
        
        <div class="mt-8">
          <h3 class="text-xl font-medium mb-3">Technologies</h3>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-gray-50 p-3 rounded-lg">
              <h4 class="font-medium">VR Platforms</h4>
              <p>Unity, Unreal Engine</p>
            </div>
            <div class="bg-gray-50 p-3 rounded-lg">
              <h4 class="font-medium">AR Frameworks</h4>
              <p>ARKit, ARCore</p>
            </div>
          </div>
        </div>
      </div>
    `,
  },
  {
    id: 7,
    img: <FaLaptopCode className="w-6 h-6" />,
    link: "/services/custom-software",
    image: require("./assets/images/services/customsoftware.webp"),
    title: "Custom Software",
    desc: "Tailored systems designed for your specific objectives, processes, and users.",
    detailContent: `
      <div class="space-y-6">
        <h2 class="text-3xl font-semibold">Custom Software Development</h2>
        <p class="">We craft software that fits the way you work, from idea to deployment.</p>
        
        <div class="mt-6">
          <h3 class="text-xl font-medium mb-3">Our Solutions</h3>
          <ul class="space-y-2 list-disc list-inside ">
            <li>Enterprise Software</li>
            <li>Workflow Automation</li>
            <li>Business Process Management</li>
            <li>Data Analytics Platforms</li>
            <li>Custom CRM/ERP Systems</li>
          </ul>
        </div>
        
        <div class="mt-8">
          <h3 class="text-xl font-medium mb-3">Development Approach</h3>
          <ol class="space-y-2 list-decimal list-inside ">
            <li>Requirement Analysis</li>
            <li>System Architecture</li>
            <li>Agile Development</li>
            <li>Quality Assurance</li>
            <li>Deployment & Training</li>
          </ol>
        </div>
      </div>
    `,
  },
  {
    id: 8,
    img: <GiRobotLeg className="w-6 h-6" />,
    link: "/services/rpa",
    title: "Robotic Process Automation",
    image: require("./assets/images/services/rpa.jpg"),
    desc: "Bots that manage sophisticated workflows and free your team from repetitive tasks.",
    detailContent: `
      <div class="space-y-6">
        <h2 class="text-3xl font-semibold">RPA Services</h2>
        <p class="">We build bots that fit seamlessly into your current tools, freeing you to focus on strategic work.</p>
        
        <div class="mt-6">
          <h3 class="text-xl font-medium mb-3">Automation Areas</h3>
          <ul class="space-y-2 list-disc list-inside ">
            <li>Data Entry & Migration</li>
            <li>Invoice Processing</li>
            <li>Customer Service Automation</li>
            <li>Report Generation</li>
            <li>HR Processes</li>
          </ul>
        </div>
        
        <div class="mt-8">
          <h3 class="text-xl font-medium mb-3">Our Tools</h3>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-gray-50 p-3 rounded-lg">
              <h4 class="font-medium">UiPath</h4>
            </div>
            <div class="bg-gray-50 p-3 rounded-lg">
              <h4 class="font-medium">Automation Anywhere</h4>
            </div>
            <div class="bg-gray-50 p-3 rounded-lg">
              <h4 class="font-medium">Blue Prism</h4>
            </div>
            <div class="bg-gray-50 p-3 rounded-lg">
              <h4 class="font-medium">Custom Solutions</h4>
            </div>
          </div>
        </div>
      </div>
    `,
  },
  {
    id: 9,
    img: <SiHiveBlockchain className="w-6 h-6" />,
    link: "/services/blockchain-development",
    image: require("./assets/images/services/blockchaindevelopment.jpg"),
    title: "Blockchain",
    desc: "Secure transactions and decentralized platforms implemented in functional, outcome-focused ways.",
    detailContent: `
      <div class="space-y-6">
        <h2 class="text-3xl font-semibold">Blockchain Development</h2>
        <p class="">We help businesses implement blockchain technology for secure, transparent solutions.</p>
        
        <div class="mt-6">
          <h3 class="text-xl font-medium mb-3">Our Services</h3>
          <ul class="space-y-2 list-disc list-inside ">
            <li>Smart Contract Development</li>
            <li>Decentralized Apps (dApps)</li>
            <li>Tokenization Solutions</li>
            <li>Blockchain Integration</li>
            <li>NFT Marketplaces</li>
          </ul>
        </div>
        
        <div class="mt-8">
          <h3 class="text-xl font-medium mb-3">Platforms</h3>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-gray-50 p-3 rounded-lg">
              <h4 class="font-medium">Ethereum</h4>
            </div>
            <div class="bg-gray-50 p-3 rounded-lg">
              <h4 class="font-medium">Hyperledger</h4>
            </div>
            <div class="bg-gray-50 p-3 rounded-lg">
              <h4 class="font-medium">Binance Smart Chain</h4>
            </div>
            <div class="bg-gray-50 p-3 rounded-lg">
              <h4 class="font-medium">Solana</h4>
            </div>
          </div>
        </div>
      </div>
    `,
  },
  {
    id: 10,
    img: <FaGamepad className="w-6 h-6" />,
    link: "/services/game-development",
    image: require("./assets/images/services/gamedevelopment.jpg"),
    title: "Game Development",
    desc: "Immersive gaming experiences for PC, mobile, and AR/VR platforms.",
    detailContent: `
      <div class="space-y-6">
        <h2 class="text-3xl font-semibold">Game Development</h2>
        <p class="">We unite stories and technology to craft unforgettable gaming experiences.</p>
        
        <div class="mt-6">
          <h3 class="text-xl font-medium mb-3">Our Services</h3>
          <ul class="space-y-2 list-disc list-inside ">
            <li>Mobile Game Development</li>
            <li>PC/Console Games</li>
            <li>AR/VR Games</li>
            <li>Game Design & Art</li>
            <li>Multiplayer Backend</li>
          </ul>
        </div>
        
        <div class="mt-8">
          <h3 class="text-xl font-medium mb-3">Development Stack</h3>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-gray-50 p-3 rounded-lg">
              <h4 class="font-medium">Engines</h4>
              <p>Unity, Unreal, Godot</p>
            </div>
            <div class="bg-gray-50 p-3 rounded-lg">
              <h4 class="font-medium">Languages</h4>
              <p>C#, C++, Python</p>
            </div>
          </div>
        </div>
      </div>
    `,
  },
  {
    id: 11,
    img: <FaNetworkWired className="w-6 h-6" />,
    link: "/services/iot-development",
    image: require("./assets/images/services/iot.webp"),
    title: "IoT Development",
    desc: "Solutions that enable real-time data collection and smarter experiences.",
    detailContent: `
      <div class="space-y-6">
        <h2 class="text-3xl font-semibold">IoT Solutions</h2>
        <p class="">We craft Internet of Things systems for performance and security.</p>
        
        <div class="mt-6">
          <h3 class="text-xl font-medium mb-3">Our Expertise</h3>
          <ul class="space-y-2 list-disc list-inside ">
            <li>Smart Device Integration</li>
            <li>IoT Platform Development</li>
            <li>Edge Computing</li>
            <li>Data Visualization</li>
            <li>Predictive Maintenance</li>
          </ul>
        </div>
        
        <div class="mt-8">
          <h3 class="text-xl font-medium mb-3">Technology</h3>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-gray-50 p-3 rounded-lg">
              <h4 class="font-medium">Hardware</h4>
              <p>Raspberry Pi, Arduino</p>
            </div>
            <div class="bg-gray-50 p-3 rounded-lg">
              <h4 class="font-medium">Protocols</h4>
              <p>MQTT, CoAP, LoRaWAN</p>
            </div>
          </div>
        </div>
      </div>
    `,
  },
  {
    id: 12,
    img: <FaRobot className="w-6 h-6" />,
    link: "/services/chatbot-development",
    image: require("./assets/images/services/chatbotdevelopment.jpg"),
    title: "Chatbot Development",
    desc: "Intelligent chatbots that provide useful responses aligned with your brand voice.",
    detailContent: `
      <div class="space-y-6">
        <h2 class="text-3xl font-semibold">Chatbot Solutions</h2>
        <p class="">Our chatbots learn from interactions to deliver personalized experiences.</p>
        
        <div class="mt-6">
          <h3 class="text-xl font-medium mb-3">Capabilities</h3>
          <ul class="space-y-2 list-disc list-inside ">
            <li>24/7 Customer Support</li>
            <li>Natural Language Understanding</li>
            <li>Multi-platform Integration</li>
            <li>Sentiment Analysis</li>
            <li>Lead Qualification</li>
          </ul>
        </div>
        
        <div class="mt-8">
          <h3 class="text-xl font-medium mb-3">Technologies</h3>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-gray-50 p-3 rounded-lg">
              <h4 class="font-medium">NLP Engines</h4>
              <p>Dialogflow, LUIS, Rasa</p>
            </div>
            <div class="bg-gray-50 p-3 rounded-lg">
              <h4 class="font-medium">Integration</h4>
              <p>Website, WhatsApp, Facebook</p>
            </div>
          </div>
        </div>
      </div>
    `,
  },
  {
    id: 13,
    img: <FaServer className="w-6 h-6" />,
    image: require("./assets/images/services/devops.webp"),
    link: "/services/devops",
    title: "DevOps",
    desc: "CI/CD pipelines and cloud-native methodologies for faster, more reliable releases.",
    detailContent: `
      <div class="space-y-6">
        <h2 class="text-3xl font-semibold">DevOps Services</h2>
        <p class="">We automate your development workflow for continuous improvement.</p>
        
        <div class="mt-6">
          <h3 class="text-xl font-medium mb-3">Our Solutions</h3>
          <ul class="space-y-2 list-disc list-inside ">
            <li>CI/CD Pipeline Implementation</li>
            <li>Infrastructure as Code</li>
            <li>Container Orchestration</li>
            <li>Monitoring & Logging</li>
            <li>Cloud Optimization</li>
          </ul>
        </div>
        
        <div class="mt-8">
          <h3 class="text-xl font-medium mb-3">Toolchain</h3>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-gray-50 p-3 rounded-lg">
              <h4 class="font-medium">Containers</h4>
              <p>Docker, Kubernetes</p>
            </div>
            <div class="bg-gray-50 p-3 rounded-lg">
              <h4 class="font-medium">CI/CD</h4>
              <p>Jenkins, GitHub Actions</p>
            </div>
            <div class="bg-gray-50 p-3 rounded-lg">
              <h4 class="font-medium">Monitoring</h4>
              <p>Prometheus, Grafana</p>
            </div>
            <div class="bg-gray-50 p-3 rounded-lg">
              <h4 class="font-medium">IaC</h4>
              <p>Terraform, Ansible</p>
            </div>
          </div>
        </div>
      </div>
    `,
  },
  {
    id: 14,
    img: <BsFillClipboard2DataFill className="w-6 h-6" />,
    link: "/services/data-analytics",
    image: require("./assets/images/services/datadevelopment.jpg"),
    title: "Data Analytics",
    desc: "Advanced analytics to make informed decisions, identify trends, and propel your business forward.",
    detailContent: `
      <div class="space-y-6">
        <h2 class="text-3xl font-semibold">Data Analytics</h2>
        <p class="">We turn raw data into actionable insights through powerful analytics.</p>
        
        <div class="mt-6">
          <h3 class="text-xl font-medium mb-3">Our Services</h3>
          <ul class="space-y-2 list-disc list-inside ">
            <li>Business Intelligence</li>
            <li>Big Data Processing</li>
            <li>Predictive Modeling</li>
            <li>Data Visualization</li>
            <li>Real-time Analytics</li>
          </ul>
        </div>
        
        <div class="mt-8">
          <h3 class="text-xl font-medium mb-3">Technology Stack</h3>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-gray-50 p-3 rounded-lg">
              <h4 class="font-medium">Analytics</h4>
              <p>Power BI, Tableau</p>
            </div>
            <div class="bg-gray-50 p-3 rounded-lg">
              <h4 class="font-medium">Big Data</h4>
              <p>Hadoop, Spark</p>
            </div>
            <div class="bg-gray-50 p-3 rounded-lg">
              <h4 class="font-medium">Databases</h4>
              <p>SQL, MongoDB</p>
            </div>
            <div class="bg-gray-50 p-3 rounded-lg">
              <h4 class="font-medium">Machine Learning</h4>
              <p>Python, R</p>
            </div>
          </div>
        </div>
      </div>
    `,
  },
];

// about us page why choose content
export const whyChooseUsContent = [
  {
    img: <BiBrain className="w-6 h-6" />,
    title: "Transforming Vision into Reality",
    desc: "We collaborate closely to understand your vision and turn it into innovative digital solutions that exceed expectations, tailored specifically to your business needs.",
  },
  {
    img: <BiRocket className="w-6 h-6" />,
    title: "Empowering Businesses with Technology",
    desc: "Our expertise in cutting-edge technologies ensures that every solution we deliver helps your business thrive in today’s competitive landscape.",
  },
  {
    img: <BiBulb className="w-6 h-6" />,
    title: "Driving Efficiency with Innovation",
    desc: "From automating processes to building intelligent solutions, we bring innovation to the forefront, enabling your business to operate smarter and more efficiently.",
  },
  {
    img: <GoGraph className="w-6 h-6" />,
    title: "Data-Driven Decision Making",
    desc: "We provide insightful analytics and intelligence to help you make informed decisions, uncover opportunities, and stay ahead in your industry.",
  },
  {
    img: <SlBadge className="w-6 h-6" />,
    title: "Commitment to Excellence",
    desc: "We are dedicated to delivering exceptional service and long-term partnerships, supporting your journey from idea to execution and beyond.",
  },
];

export const reviews = [
  {
    id: 1,
    profileImg: profileImg2,
    name: "Michael",
    role: "Founder of UrbanTrends",
    desc: "“We came to the team with a rough idea for a mobile app and got a fully functional product that people really love. Their development and design team were extremely responsive and considerate. It was like we were building with a partner, not contracting an agency”",
  },
  {
    id: 2,
    profileImg: profileImg1,
    name: "Julia H",
    role: "Operations Manager at HealthPro Analytics",
    desc: "“When we opted to move our product to AWS, we realized that it needed to be done with utmost accuracy. The cloud engineers at [Company Name] mapped out a straightforward path of migration, established automation pipelines, and guaranteed a seamless move. After launching, our infrastructure is much more stable and scalable.”",
  },
  {
    id: 3,
    profileImg: profileImg2,
    name: "Erik J.",
    role: "CEO, Logistics SaaS Provider",
    desc: "“We required a software application specific to our operations—not a generic product. The bespoke platform [Company Name] created streamlined our manual processes, integrated various systems, and increased our staff's productivity throughout the board.”",
  },
  {
    id: 4,
    profileImg: profileImg1,
    name: "Ayesha K",
    role: "Director of Operations, E-commerce Brand",
    desc: "“They developed an AI-driven chatbot that now manages most of our customer inquiries—saving time, minimizing overhead, and enhancing user satisfaction. Their methodology was organized, collaborative, and extremely strategic.”",
  },
  {
    id: 5,
    profileImg: profileImg2,
    name: "Rajiv M",
    role: "Analytics Manager, PlaySphere",
    desc: "“We were sitting on tons of data but didn’t know how to make use of it. Their data team built dashboards and predictive models that gave us a clear picture of what’s happening and what’s coming next. We’re finally making decisions based on real data, not just gut instinct.”",
  },
  {
    id: 6,
    profileImg: profileImg1,
    name: "Sofia M",
    role: "Creative Director, FinSecure",
    desc: "“We collaborated on a VR employee training simulation, and it was better than we expected. From modeling in 3D to cross-device testing, they did it all with professionalism and stretched the creative limits at each stage.”",
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("./assets/images/portfolio/web-development/5ghomes.webp"),
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 2,
    img: require("./assets/images/portfolio/web-development/cold-creekcap.webp"),
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 3,
    img: require("./assets/images/portfolio/web-development/think-reality.webp"),
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
  {
    id: 4,
    img: require("./assets/images/portfolio/web-development/akash-mega-mart.webp"),
    title: "Akash Mega Mart",
    link: "https://akashmegamart.com/",
  },
  {
    id: 5,
    img: require("./assets/images/portfolio/web-development/midwam.webp"),
    title: "Midwam – Immersive Experience Design Company",
    link: "https://www.midwam.com/en/about",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("./assets/images/portfolio/app-development/akash_mega_mart-app.webp"),
    title: "Akash Mega Mart Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
  },
  {
    id: 2,
    img: require("./assets/images/portfolio/app-development/feelit_app.webp"),
    title: "FeelIt Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
  },
  {
    id: 3,
    img: require("./assets/images/portfolio/app-development/klikomics.webp"),
    title: "Klikomics Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 4,
    img: require("./assets/images/portfolio/app-development/autosnap-app.webp"),
    title: "AutoSnap Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 5,
    img: require("./assets/images/portfolio/app-development/rentop.webp"),
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];

export const aboutUsItems = [
  {
    title: "Honest, clear communication from day one",
    image: aboutone,
    gradient: "from-primary/60 to-primary/80",
  },
  {
    title: "Iterative development with space for adaptation",
    image: abouttwo,
    gradient: "from-secondary/60 to-secondary/80",
  },
  {
    title: "A proven track record across industries and geographies",
    image: aboutthree,
    gradient: "from-primary/60 to-primary/80",
  },
  {
    title: "Clean code, robust architecture, and scalable infrastructure",
    image: aboutfour,
    gradient: "from-secondary/60 to-secondary/80",
  },
  {
    title: "End-to-end delivery—from idea to support",
    image: aboutfive,
    gradient: "from-primary/60 to-primary/80",
  },
];
