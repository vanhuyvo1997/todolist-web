import LoginForm from "@/app/ui/forms/login-form";
import OAuthLoginButtonGroup from "@/app/ui/inputs/oauth/oauth-login-button-group";

export default async function Login() {
  return <div className="flex flex-col items-center">
    <LoginForm />
    <div className="flex flex-col items-center">
      <br />
      <span>or</span>
      <br />
      <OAuthLoginButtonGroup />
    </div>
  </div>
}