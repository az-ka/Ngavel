import { Link, Head } from "@inertiajs/react";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const [value, setValue] = useState("");

    var toolbarOptions = [
        ["bold", "italic", "underline", "strike"], // toggled buttons
        ["blockquote", "code-block"],

        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ script: "sub" }, { script: "super" }], // superscript/subscript
        [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
        [{ direction: "rtl" }], // text direction

        [{ size: ["small", false, "large", "huge"] }], // custom dropdown
        [{ header: [1, 2, 3, 4, 5, 6, false] }],

        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        [{ font: [] }],
        [{ align: [] }],

        ["link", "image"],

        ["clean"], // remove formatting button
    ];

    const modules = {
        toolbar: toolbarOptions,
    };
    return (
        <>
            <Head title="Welcome" />

            <div className="max-w-7xl mx-auto p-10">
                <h1>Welcome</h1>
                <ReactQuill
                    modules={modules}
                    theme="snow"
                    value={value}
                    onChange={setValue}
                />
            </div>
        </>
    );
}
