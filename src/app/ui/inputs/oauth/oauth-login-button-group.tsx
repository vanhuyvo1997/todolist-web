import { providerMap } from "../../../../../auth";
import OAuthLoginButton from "./oauth-login-button";

export default function OAuthLoginButtonGroup() {
    return (
        <div className="flex flex-col gap-2">
            {Object.values(providerMap).map((provider) => provider.id !== "credentials" && <OAuthLoginButton id={provider.id} name={provider.name} key={provider.id} />)}
        </div>
    );
}