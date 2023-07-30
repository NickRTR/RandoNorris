import { writable } from "svelte/store";

const generators = {
	number: "number",
	letter: "letter",
	color: "color",
	decision: "decision"
};

export const generator = writable(generators.number);
