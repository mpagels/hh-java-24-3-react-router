import {useNavigate} from "react-router-dom";

export default function NavigationComponent() {
    const navigate = useNavigate()

    function goToSomePath() {
        /*
        * call to backend, delelet stuff, when coming back with 200 make navigate("/")
        *
        * */
        navigate("/")
    }

    return <button onClick={goToSomePath}>Form submit, after submit go to home page</button>
}