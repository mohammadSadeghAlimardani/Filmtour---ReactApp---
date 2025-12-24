import { BsFire } from "react-icons/bs";
import { RiHeartsFill } from "react-icons/ri";
import { GiPilgrimHat } from "react-icons/gi";
import { GiSparkSpirit } from "react-icons/gi";
import { LuDrama } from "react-icons/lu";
import { GiMountainClimbing } from "react-icons/gi";
import { FaRegFaceLaughBeam } from "react-icons/fa6";
import { MdAnimation } from "react-icons/md";

const genresList = [
    {
        genreID: 1,
        icon: <BsFire />,
        genreTitle: "action",
        number: "+1200 movies",
    },
    {
        genreID: 2,
        icon: <RiHeartsFill />,
        genreTitle: "romance",
        number: "+850 movies",
    },
    {
        genreID: 3,
        icon: <GiPilgrimHat />,
        genreTitle: "sci-fi",
        number: "+1500 movies",
    },
    {
        genreID: 4,
        icon: <GiSparkSpirit />,
        genreTitle: "horror",
        number: "+1000 movies",
    },
    {
        genreID: 5,
        icon: <LuDrama />,
        genreTitle: "drama",
        number: "+850 movies",
    },
    {
        genreID: 6,
        icon: <GiMountainClimbing />,
        genreTitle: "documentary",
        number: "+1300 movies",
    },
    {
        genreID: 7,
        icon: <FaRegFaceLaughBeam />,
        genreTitle: "comedy",
        number: "+1500 movies",
    },
    {
        genreID: 8,
        icon: <MdAnimation />,
        genreTitle: "animation",
        number: "+2000 movies",
    },
];

export { genresList };

const questions = [
    {
        questionID: 1,
        questionText: "Do I need to create an account to use the website ?",
        answerText:
            "Yes. Creating an account allows you to access features such as bookmarking movies and personalizing your experience.",
    },
    {
        questionID: 2,
        questionText: "Is registration free ?",
        answerText:
            "Yes, registration is completely free. There are no hidden fees.",
    },
    {
        questionID: 3,
        questionText: "How can I bookmark a movie ?",
        answerText:
            "Simply log in to your account and click on the bookmark icon next to the movie. It will be saved to your bookmarks.",
    },
    {
        questionID: 4,
        questionText: "Can I remove a movie from my bookmarks ?",
        answerText:
            "Yes. Click the bookmark icon again and the movie will be removed from your bookmarks.",
    },
    {
        questionID: 5,
        questionText: "Where does the movie data come from ?",
        answerText:
            "Movie information such as ratings, cast, and descriptions is provided by a trusted third-party movie database.",
    },
    {
        questionID: 6,
        questionText: "Is my personal data safe ?",
        answerText:
            "Yes. We take user privacy seriously and use secure technologies to protect your data.",
    },
    {
        questionID: 7,
        questionText: "Can I use the website without logging in ?",
        answerText:
            "Yes, you can browse movies without logging in, but some features (like bookmarks) require an account.",
    },
    {
        questionID: 8,
        questionText: "How can I contact support ?",
        answerText:
            "You can reach us through the Contact Us page. We’ll be happy to help you.",
    },
];

export { questions };
