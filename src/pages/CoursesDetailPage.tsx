import {useParams} from "react-router-dom";

export default function CoursesDetailPage() {

    const params = useParams()
    const id: string | undefined = params.currywurst

    /*
    *
    * call to backend with getCourseWithId
    * */

    return <h2>Detailspage für den Kurs {id}</h2>
}