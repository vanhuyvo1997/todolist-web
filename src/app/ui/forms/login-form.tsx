import Link from "next/link";
import Button from "../inputs/button";
import LabeledInput from "../inputs/labeled-input";
import OAuthLoginButtonGroup from "../inputs/oauth/oauth-login-button-group";
import { signIn } from "../../../../auth";

export default function LoginForm() {
  return (
    <div className="flex flex-col items-center">
      <form className="flex flex-col items-center w-full" action={async (formData)=>{
        "use server"
        await signIn("credentials", formData);
      }}>
        <h1 className='text-center text-2xl my-2 mb-5'>Log in with Tasks account </h1>

        <LabeledInput id="email" type="email" labelContent="Email" placeholder="Your email" name="email" />

        <LabeledInput id="password" type="password" labelContent="Password" placeholder="Your password" name="password" />

        <Button size="L" className="bg-[#6FBC62] my-5 w-full" content="Login" submit />

        <p className="text-center">You do not have account? <Link className="text-blue-500 hover:text-blue-300 active:text-orange-400 visited:text-blue-800" href="/register">Let&apos;s create one.</Link></p>
      </form>
      <div className="flex flex-col items-center">
        <br />
        <span>or</span>
        <br />
        <OAuthLoginButtonGroup />
      </div>
    </div>
  );
}