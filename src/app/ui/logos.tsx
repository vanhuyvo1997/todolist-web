import Image from "next/image";


type LogoProps = { width?: number, height?: number, alt?: string }

// MyTask logo
export const MyTaskLogo = ({ height = 86, width = 108, alt = "logo" }: LogoProps) => (
    <Image src="/logo.svg" height={height} width={width} style={{width: 24, height: "auto"}} alt={alt} />
)

// Github logo
export const GithubLogo = ({ height = 24, width = 24, alt = "logo" }: LogoProps) => (
    <Image src="./github-logo.svg" width={width} height={height} alt={alt} />
);

// Google logo
export const GoogleLogo = ({ height = 24, width = 24, alt = "logo" }: LogoProps) => (
    <Image src="/google-logo.svg" height={height} width={width} alt={alt} />
)