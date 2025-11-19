import { SignupForm } from "@/components/authentication/signup-form";
import { Navbar } from "@/components/landing/navbar";


export default function SignupPage() {
    return (
        <div>
            <Navbar />
            <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10 pt-25">
                <div className="flex w-full max-w-md flex-col gap-6">
                    <SignupForm />
                </div>
            </div>
        </div>
    );
}