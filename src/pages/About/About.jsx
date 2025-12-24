import "./About.css";
import SectionTitle from "../../components/SectionTitle";

const About = () => {
    return (
        <div className="about">
            <div className="section-center about-center">
                <SectionTitle title="about us" />
                <div className="text">
                    <p>
                        Welcome to <span>filmtour</span>, your ultimate
                        destination for discovering, watching, and enjoying the
                        best movies from around the world. Our mission is
                        simple: to bring the magic of cinema directly to your
                        screen, offering a seamless and personalized movie
                        experience for every film lover. Whether you are into
                        thrilling blockbusters, timeless classics, or hidden
                        indie gems, we have something for everyone.
                    </p>
                    <p>
                        With our easy-to-use interface, curated collections, and
                        the ability to create your own favorites list, exploring
                        movies has never been more fun. At <span>filmtour</span>
                        , we believe that every movie tells a story worth
                        experiencing. Join us and dive into a world of
                        captivating stories, unforgettable characters, and
                        cinematic adventures that inspire, entertain, and move
                        you. Your journey into the world of movies starts here.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
