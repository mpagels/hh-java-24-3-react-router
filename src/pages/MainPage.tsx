import {Link} from "react-router-dom";

const courses = ["webdev", "aws", "java", "python"]

export default function MainPage() {
    return <><h2>Main Page</h2>
        <p>Hi, ich heiße Martin, gehe gerne zu meinen <Link to={"/courses"}> Kursen.</Link></p>
        {courses.map(course => <Link to={"/courses/" + course }> {course}</Link>)}
    </>
}