import { ReactNode } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  image?: string;
  extra?: ReactNode;
  children: ReactNode;
  id?: string;
}

export const Parallax = ({
  children,
  className,
  image,
  color,
  extra,
  id = "section-id",
}: Props) => {
  return (
    <section id={id} className="relative">
      <div
        className={clsx(
          className,
          "before:absolute before:content-[''] before:top-0 before:left-0 before:w-full before:h-full",
          "before:bg-[url('" + image + "')]",
          "before:bg-fixed before:bg-center before:bg-cover",
          "after:" + color,
          "after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:opacity-90 after:z-0"
        )}
      >
        <div className="relative z-[3]">{children}</div>
      </div>
      {extra}
    </section>
  );
};

export const WithBackground = ({
  children,
  image,
  color,
  className,
  id = "section-id",
}: Props) => {
  return (
    <section
      id={id}
      className={clsx(
        "relative w-full pt-16 pb-8 ",
        className,
        Boolean(image) &&
          "bg-[url('" + image + "')] bg-center bg-cover before:" + color,
        Boolean(image) &&
          "before:absolute before:top-0 before:left-0 before:bottom-0 before:right-0 before:opacity-90",
        !image && color
      )}
    >
      <div className="relative">{children}</div>
    </section>
  );
};
export default Parallax;
