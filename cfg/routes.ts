export const routes: Route[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Donate",
    // href: "https://donorbox.org/nhmarf",
    href: "/donate",
  },
  {
    name: "Locations",
    href: "/locations",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export interface Route {
  name?: string;
  href: string;
  current?: boolean;
}
