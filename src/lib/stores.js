import { persisted } from "svelte-local-storage-store";

export const generator = persisted("generator", "number");
