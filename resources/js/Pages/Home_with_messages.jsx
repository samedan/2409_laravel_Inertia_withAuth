import { Link, usePage, Head } from "@inertiajs/react";

import React, { useState } from "react";
import { useRoute } from "../../../vendor/tightenco/ziggy";

export default function Home({ posts }) {
    // console.log(posts);

    console.log(usePage());

    const route = useRoute();

    const { component } = usePage();

    // Retrieve message (delete message) if available
    // const { flash } = usePage().props;
    // const [flashMsg, setFlashMsg] = useState(flash.message);
    // // delete message after a while
    // setTimeout(() => {
    //     setFlashMsg(null);
    // }, 3000);

    return (
        <>
            <Head title={component} />
            {/* <title>{component}</title> */}
            {/* <meta name="description" content="Your page description" /> */}
            {/* </Head> */}
            <div className="title">Home</div>
            {/* Flash message coming from HandleInertiaRequests ('message'), PostController ('destroy()') */}
            {/* {flash.success && (
                <div className="absolute top-24 right-6 bg-green-500 p-2 rounded-md shadow-lg text-sm text-white">
                    {flash.success}
                </div>
            )}
            {flashMsg && (
                <div className="absolute top-24 right-6 bg-rose-500 p-2 rounded-md shadow-lg text-sm text-white">
                    {flashMsg}
                </div>
            )} */}

            <div>
                {posts.data.map((post) => (
                    <div key={post.id} className="p-4 border-b">
                        <div className="text-sm text-slate-600">
                            <small>
                                Posted on :{" "}
                                <span>
                                    {new Date(
                                        post.created_at
                                    ).toLocaleTimeString()}
                                </span>
                            </small>
                        </div>
                        <p className="font-medium">{post.body}</p>
                        {/* <Link href={`/posts/${post.id}`} className="text-link">
                            Read more...
                        </Link> */}
                        <Link
                            href={route("posts.show", post)}
                            className="text-link"
                        >
                            Read more...
                        </Link>
                    </div>
                ))}
            </div>
            <div className="px-4 py-12">
                {posts.links.map((link) =>
                    link.url ? (
                        <Link
                            href={link.url}
                            key={link.label}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className={`p-1 mx-1 ${
                                link.active ? "text-blue-500 font-bold" : ""
                            }`}
                        />
                    ) : (
                        <span
                            key={link.label}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className={`p-1 mx-1 text-slate-300`}
                        ></span>
                    )
                )}
            </div>
        </>
    );
}
