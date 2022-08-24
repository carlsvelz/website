/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  interface Locals {
    changelogEntries: any[];
  }
  // interface Platform {}
  interface Session {
    posts: any[];
    customers: any[];
    changelogEntries: any[];
  }
  // interface Stuff {}
}
