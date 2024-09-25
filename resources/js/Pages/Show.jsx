import { Link, useForm } from "@inertiajs/react";
import { useRoute } from "../../../vendor/tightenco/ziggy";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Show({ auth, post }) {
    // console.log(useForm());

    // alias to avoid 'delete' use name
    const { delete: destroy } = useForm();

    const route = useRoute();

    console.log(post);

    function submit(e) {
        e.preventDefault();
        // destroy(`/posts/${post.id}`);
        destroy(route("posts.destroy", post));
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-white leading-tight">
                    Home/Posts Page
                </h2>
            }
        >
            <div className="py-4 text-sm text-slate-600">
                <small>
                    Posted on :{" "}
                    <span>
                        {new Date(post.created_at).toLocaleTimeString()}
                    </span>
                </small>
                <p className="font-medium">{post.body}</p>
                <div className="flex items-center justify-end gap-2">
                    <form onSubmit={submit}>
                        <button className="bg-red-500 rounded-md text-sm px-4 py-1 text-white">
                            Delete
                        </button>
                    </form>
                    {/* <Link
                        href={`/posts/${post.id}/edit`}
                        className="bg-green-500 rounded-md text-sm px-4 py-1 text-white"
                    >
                        Update
                    </Link> */}
                    <Link
                        href={route("posts.edit", post)}
                        className="bg-green-500 rounded-md text-sm px-4 py-1 text-white"
                    >
                        Update
                    </Link>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
