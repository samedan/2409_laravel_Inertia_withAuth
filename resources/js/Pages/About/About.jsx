import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function About({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-white leading-tight">
                    About Page
                </h2>
            }
        >
            <h1>About PAge</h1>
        </AuthenticatedLayout>
    );
}
