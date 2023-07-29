import { createClient } from "pexels";
import { useState, useEffect } from "react";
import { AiFillBell } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import "../styles/page.css";

export default function Client({ query }) {
    const client = createClient('p7Ak9T3E9YRmZm72Lhp5qVmcvpkq9bUE8Ge0WwlXj33hjw2foM34NOIh');
    const [data, setData] = useState({ photos: [] })
    const [page, setPage] = useState(1);
    const [queryy, setQuery] = useState("");

    useEffect(() => {
        client.photos.search({ query, per_page: 50, page })
            .then(res => {
                console.log(res);
                setData({ photos: [...res.photos] });
            })
    }, [page, query])

    return (
        <div>
            <div className="header">
                <img className="logo" src="https://o.remove.bg/downloads/8e7640db-1e39-4b29-9a73-93ffc4b39801/png-transparent-pexels-logo-removebg-preview.png" />
                <h4>Explore</h4>
                <h4>License</h4>
                <AiFillBell />
                <BsPersonCircle />
                <button>Upload</button>
            </div>
            <div className="data-container">
                <input className="search" type="text" placeholder="Search for free images"
                    onChange={(e) => setQuery(e.target.value)}
                    value={queryy} />
            </div>
            <div className="images">
                {
                    data && data.photos.map((e) => {
                        return (
                            <img src={e.src.medium} />
                        )
                    })
                }
            </div>
        </div>
    )
}
