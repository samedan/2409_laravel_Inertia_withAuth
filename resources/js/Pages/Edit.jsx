import { Head, useForm } from "@inertiajs/react";
import { useRoute } from "../../../vendor/tightenco/ziggy";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Edit({ auth, post }) {
    // console.log(useForm());

    const { data, setData, put, errors, processing } = useForm({
        body: post.body,
    });

    const route = useRoute();

    function submit(e) {
        e.preventDefault();
        // put(`/posts/${post.id}`);
        put(route(`posts.update`, post));
    }

    console.log(errors);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-white leading-tight">
                    Update Post
                </h2>
            }
        >
            {/* <Head>
                <title>Update / Edit post</title>
                <meta
                    head-key="description"
                    name="description"
                    content="Create description"
                />
            </Head> */}
            {/* <h1 className="title">Update Post</h1> */}
            {/* <div>{data.body}</div> */}

            <div className="w-1/2 mx-auto mt-2">
                <form onSubmit={submit}>
                    <textarea
                        rows="10"
                        value={data.body}
                        onChange={(e) => setData("body", e.target.value)}
                        className={errors.body && "!ring-red-500"}
                    ></textarea>
                    {errors.body && <p className="error">{errors.body}</p>}
                    <button className="primary-btn mt-4" disabled={processing}>
                        Update Post
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
