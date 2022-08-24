import type { QuickstartItem } from "$lib/types/quickstart.type";
import type { Readable } from "svelte/store";
import { readable, derived, writable } from "svelte/store";

const mapQuickstart = (
  title: string,
  path: string,
  favorite: boolean,
  icon?: string
): QuickstartItem => ({
  title,
  path: "/docs" + (path ? "/" + path : ""),
  favorite,
  icon,
});

const quickstartItems = readable(
  [
    mapQuickstart("Agda", "quickstart/agda", false),
    mapQuickstart("C", "quickstart/c", false),
    mapQuickstart("C# .NET", "quickstart/dotnet", false),
    mapQuickstart("C++", "quickstart/cpp", false),
    mapQuickstart("Clojure", "quickstart/clojure", false),
    mapQuickstart("Coq", "quickstart/coq", false),
    mapQuickstart("Datasette", "quickstart/datasette", false),
    mapQuickstart("Deno", "quickstart/deno", false),
    mapQuickstart("Docker Compose", "quickstart/docker-compose", false),
    mapQuickstart("Elixir", "quickstart/elixir", false),
    mapQuickstart("Elm", "quickstart/elm", false),
    mapQuickstart("Flutter", "quickstart/flutter", false),
    mapQuickstart("Golang", "quickstart/go", true, "/svg/projects/go.svg"),
    mapQuickstart("Grain", "quickstart/grain", false),
    mapQuickstart("Haskell", "quickstart/haskell", false),
    mapQuickstart("IHP", "quickstart/ihp", false),
    mapQuickstart(
      "Java Spring",
      "quickstart/java",
      true,
      "/svg/projects/java.svg"
    ),
    mapQuickstart("Julia", "quickstart/julia", false),
    mapQuickstart("NextJS", "quickstart/nextjs", false),
    mapQuickstart("Nix", "quickstart/nix", false),
    mapQuickstart(
      "Node - TypeScript",
      "quickstart/typescript",
      true,
      "/svg/projects/ts.svg"
    ),
    mapQuickstart("OCaml", "quickstart/ocaml", false),
    mapQuickstart("Perl", "quickstart/perl", false),
    mapQuickstart("PHP Drupal", "quickstart/drupal", false),
    mapQuickstart("PHP Laravel", "quickstart/laravel", false),
    mapQuickstart("PlanetScale", "quickstart/planetscale", false),
    mapQuickstart(
      "Python Django",
      "quickstart/python",
      true,
      "/svg/projects/python.svg"
    ),
    mapQuickstart("Python Flask", "quickstart/flask", false),
    mapQuickstart("React", "quickstart/react", false),
    mapQuickstart("Ruby on Rails", "quickstart/ruby-on-rails", false),
    mapQuickstart("Rust", "quickstart/rust", true, "/svg/projects/rust.svg"),
    mapQuickstart("Scala", "quickstart/scala", false),
    mapQuickstart(
      "Svelte",
      "quickstart/svelte",
      true,
      "/svg/projects/svelte.svg"
    ),
    mapQuickstart("SvelteKit", "quickstart/sveltekit", false),
    mapQuickstart("TLA+", "quickstart/tlaplus", false),
    mapQuickstart("Wasp", "quickstart/wasp", false),
    mapQuickstart("Wordpress", "quickstart/wordpress", false),
    mapQuickstart("X11 VNC", "quickstart/x11-vnc", false),
    mapQuickstart("Yasm", "quickstart/yasm", false),
  ],
  (_set) => {}
);

export const searchQuery = writable("");
export const popularQuickstarts = derived(quickstartItems, ($quickstartItems) =>
  $quickstartItems.filter((item) => item.favorite)
);
export const remainingQuickstarts: Readable<QuickstartItem[]> = derived(
  [quickstartItems, searchQuery],
  ([$quickstartItems, $searchQuery]) =>
    $quickstartItems.filter((item) => {
      if ($searchQuery === "") {
        return !item.favorite;
      }
      return (
        !item.favorite &&
        item.title.toLowerCase().includes($searchQuery.toLowerCase())
      );
    })
);
