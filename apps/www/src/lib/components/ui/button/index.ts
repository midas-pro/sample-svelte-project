import { cva } from "class-variance-authority";
import type { Action, ActionReturn } from "svelte/action";

export { default as Button } from "./Button.svelte";

export const buttonVariants = cva(
	"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
	{
		variants: {
			variant: {
				default:
					"bg-primary text-primary-foreground hover:bg-primary/90",
				destructive:
					"bg-destructive text-destructive-foreground hover:bg-destructive/90",
				outline:
					"border border-input hover:bg-accent hover:text-accent-foreground",
				secondary:
					"bg-secondary text-secondary-foreground hover:bg-secondary/80",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				link: "underline-offset-4 hover:underline text-primary"
			},
			size: {
				default: "h-10 py-2 px-4",
				sm: "h-9 px-3 rounded-md",
				lg: "h-11 px-8 rounded-md"
			}
		},
		defaultVariants: {
			variant: "default",
			size: "default"
		}
	}
);
export type Builder = {
	[x: PropertyKey]: unknown;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	action: Action<HTMLElement, any, any>;
};
export const allActions: Action<
	HTMLElement,
	{ builders: Builder[] },
	Record<string, unknown | undefined>
> = (node, params) => {
	const unsubs: ActionReturn[] = [];
	params.builders.forEach((builder) => {
		const act = builder.action(node);
		if (act) {
			unsubs.push(act);
		}
	});
	return {
		destroy: () => {
			unsubs.forEach((unsub) => {
				if (unsub.destroy) {
					unsub.destroy();
				}
			});
		}
	};
};

export function getAttrs(builders: Builder[]) {
	const attrs: Record<string, unknown | undefined> = {};
	builders.forEach((builder) => {
		Object.keys(builder).forEach((key) => {
			if (key !== "action") {
				attrs[key] = builder[key];
			}
		});
	});
	return attrs;
}
