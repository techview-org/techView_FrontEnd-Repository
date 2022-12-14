import { useEffect, useState } from "react";
import MiddleSection from "./MiddleSection";

export default function ContentArea() {
    const [posts, setPosts] = useState([])

    const mainDivStyle = {
        display: "flex"
    }

    const divStyle = {
        border: "1px solid red",
        width: "25%",
        minHeight: "100%",
    }

    useEffect(() => {
        fetch("http://localhost:4005/post")
            .then(res => res.json())
            .then(json => setPosts(json))
    }, [])

    return (
        <div style={mainDivStyle}>
            <div style={divStyle}>hello</div>
            <MiddleSection posts={posts} />
            <div style={divStyle}>hello</div>
        </div>
    );
}






