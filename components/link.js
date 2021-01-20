import NextLink from "next/link";
import Button from "./button.js";
import { FaBeer } from "react-icons/fa";

export default function Link({
  url = "/",
  ariaLabel = "Link",
  scroll = true,
  className,
  external,
  children,
}) {
  return (
    <>
      {url && (
        <NextLink href={url} aria-label={ariaLabel}>
          <a className={className} target={external ? "_blank" : ""}>
            {children}
          </a>
        </NextLink>
      )}
      {!url && (
        <Button
          disabled={true}
          aria-label={ariaLabel}
          className={className}
        ></Button>
      )}
    </>
  );
}
