import Image from "next/image";


type LogoProps = { width?: number, height?: number, alt?: string }

// MyTask logo
export const MyTaskLogo = ({ height = 108, width = 86, alt = "logo" }: LogoProps) => (
    <Image src="/logo.svg" height={height} width={width} alt={alt} />
)

// Github logo
export const GithubLogo = ({ height = 108, width = 86, alt = "logo" }: LogoProps) => (
    <Image src="/github-logo.svg" height={height} width={width} alt={alt} />
);

// Google logo
export const GoogleLogo = ({ height = 108, width = 86, alt = "logo" }: LogoProps) => (
    <Image src="/google-logo.svg" height={height} width={width} alt={alt} />
)