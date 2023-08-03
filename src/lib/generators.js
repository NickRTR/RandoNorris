import NumberGenerator from "$lib/components/generators/NumberGenerator.svelte";
import LetterGenerator from "$lib/components/generators/LetterGenerator.svelte";
import ColorGenerator from "$lib/components/generators/ColorGenerator.svelte";
import DecisionGenerator from "$lib/components/generators/DecisionGenerator.svelte";
import SwitchGenerator from "$lib/components/generators/SwitchGenerator.svelte";

export const generators = [
	{
		name: "number",
		title: "Number",
		short: "N",
		component: NumberGenerator
	},
	{
		name: "letter",
		title: "Letter",
		short: "L",
		component: LetterGenerator
	},
	{
		name: "decision",
		title: "Decision",
		short: "D",
		component: DecisionGenerator
	},
	{
		name: "switch",
		title: "Switch",
		short: "S",
		component: SwitchGenerator
	},
	{
		name: "color",
		title: "Color",
		short: "C",
		component: ColorGenerator
	}
];
