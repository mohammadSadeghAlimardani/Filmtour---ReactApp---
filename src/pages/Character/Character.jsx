import "./Character.css";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import picProfileSVG from "../../assets/images/pic-profile.svg";

const searchCharacterByID_URL = "https://api.themoviedb.org/3/person/";

export const loader = async ({ params }) => {
    const { id } = params;
    try {
        const response = await axios.get(
            `${searchCharacterByID_URL}${id}?api_key=${
                import.meta.env.VITE_API_KEY
            }`
        );
        return response.data;
    } catch (error) {
        return error;
    }
};

const Character = () => {
    const characterInfo = useLoaderData();

    const { biography, name, profile_path, known_for_department, birthday } =
        characterInfo;
    const age = new Date().getFullYear() - new Date(birthday).getFullYear();

    return (
        <div className="character">
            <div className="section-center character-center">
                <img
                    src={
                        profile_path === null
                            ? picProfileSVG
                            : `${
                                  import.meta.env.VITE_POSTER_PATH
                              }${profile_path}`
                    }
                    alt=""
                />
                <h1>{name}</h1>
                <h3>age : {age}</h3>
                <h3>role : {known_for_department}</h3>
                <p>{biography}</p>
            </div>
        </div>
    );
};

export default Character;
