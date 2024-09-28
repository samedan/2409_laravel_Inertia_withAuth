import { Head, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function CreateTopic({ auth }) {
    // console.log(useForm());

    console.log(auth);

    const { data, setData, post, errors, processing } = useForm({
        body: "",
    });

    function submit(e) {
        e.preventDefault();
        post("/topics");
    }

    console.log(errors);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-white leading-tight">
                    Create topic
                </h2>
            }
        >
            <h1 className="title">Create Topic</h1>
            {/* <div>{data.body}</div> */}

            <div className="w-1/2 mx-auto">
                <form onSubmit={submit}>
                    {/* <textarea
                        rows="10"
                        value={data.body}
                        onChange={(e) => setData("body", e.target.value)}
                        className={errors.body && "!ring-red-500"}
                    ></textarea> */}
                    <input
                        value={data.body}
                        onChange={(e) => setData("body", e.target.value)}
                        className={errors.body && "!ring-red-500"}
                    />
                    {errors.body && <p className="error">{errors.body}</p>}
                    <button className="primary-btn mt-4" disabled={processing}>
                        Save topic
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
