import './App.svelte.css.proxy.js';
/* src/App.svelte generated by Svelte v3.31.2 */
import {
	SvelteComponent,
	add_flush_callback,
	append,
	attr,
	bind,
	binding_callbacks,
	bubble,
	check_outros,
	create_component,
	destroy_component,
	detach,
	element,
	group_outros,
	init,
	insert,
	mount_component,
	safe_not_equal,
	space,
	transition_in,
	transition_out
} from "../_snowpack/pkg/svelte/internal.js";

import Lessons from "./Lessons.svelte.js";
import Keyboard from "./Keboard.svelte.js";
import Input from "./Input.svelte.js";
import { LAYOUTS } from "./util/keys.js";

function create_if_block(ctx) {
	let keyboard;
	let current;

	keyboard = new Keyboard({
			props: {
				focus: /*focus*/ ctx[4],
				error: /*error*/ ctx[3],
				layout: LAYOUTS.MM,
				hilight: /*hilight*/ ctx[5]
			}
		});

	return {
		c() {
			create_component(keyboard.$$.fragment);
		},
		m(target, anchor) {
			mount_component(keyboard, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const keyboard_changes = {};
			if (dirty & /*focus*/ 16) keyboard_changes.focus = /*focus*/ ctx[4];
			if (dirty & /*error*/ 8) keyboard_changes.error = /*error*/ ctx[3];
			if (dirty & /*hilight*/ 32) keyboard_changes.hilight = /*hilight*/ ctx[5];
			keyboard.$set(keyboard_changes);
		},
		i(local) {
			if (current) return;
			transition_in(keyboard.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(keyboard.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(keyboard, detaching);
		}
	};
}

function create_fragment(ctx) {
	let section;
	let lessons_1;
	let updating_active;
	let t0;
	let div;
	let input_1;
	let updating_input;
	let t1;
	let current;

	function lessons_1_active_binding(value) {
		/*lessons_1_active_binding*/ ctx[7].call(null, value);
	}

	let lessons_1_props = { lessons: /*lessons*/ ctx[6] };

	if (/*active*/ ctx[0] !== void 0) {
		lessons_1_props.active = /*active*/ ctx[0];
	}

	lessons_1 = new Lessons({ props: lessons_1_props });
	binding_callbacks.push(() => bind(lessons_1, "active", lessons_1_active_binding));

	function input_1_input_binding(value) {
		/*input_1_input_binding*/ ctx[8].call(null, value);
	}

	let input_1_props = {
		only: /*focus*/ ctx[4] ? ["Enter"] : [],
		error: /*error*/ ctx[3],
		text: /*text*/ ctx[2]
	};

	if (/*input*/ ctx[1] !== void 0) {
		input_1_props.input = /*input*/ ctx[1];
	}

	input_1 = new Input({ props: input_1_props });
	binding_callbacks.push(() => bind(input_1, "input", input_1_input_binding));
	input_1.$on("only", /*only_handler*/ ctx[9]);
	input_1.$on("done", /*done_handler*/ ctx[10]);
	let if_block = /*hilight*/ ctx[5] && create_if_block(ctx);

	return {
		c() {
			section = element("section");
			create_component(lessons_1.$$.fragment);
			t0 = space();
			div = element("div");
			create_component(input_1.$$.fragment);
			t1 = space();
			if (if_block) if_block.c();
			attr(div, "class", "container svelte-rd445u");
			attr(section, "class", "svelte-rd445u");
		},
		m(target, anchor) {
			insert(target, section, anchor);
			mount_component(lessons_1, section, null);
			append(section, t0);
			append(section, div);
			mount_component(input_1, div, null);
			append(div, t1);
			if (if_block) if_block.m(div, null);
			current = true;
		},
		p(ctx, [dirty]) {
			const lessons_1_changes = {};

			if (!updating_active && dirty & /*active*/ 1) {
				updating_active = true;
				lessons_1_changes.active = /*active*/ ctx[0];
				add_flush_callback(() => updating_active = false);
			}

			lessons_1.$set(lessons_1_changes);
			const input_1_changes = {};
			if (dirty & /*focus*/ 16) input_1_changes.only = /*focus*/ ctx[4] ? ["Enter"] : [];
			if (dirty & /*error*/ 8) input_1_changes.error = /*error*/ ctx[3];
			if (dirty & /*text*/ 4) input_1_changes.text = /*text*/ ctx[2];

			if (!updating_input && dirty & /*input*/ 2) {
				updating_input = true;
				input_1_changes.input = /*input*/ ctx[1];
				add_flush_callback(() => updating_input = false);
			}

			input_1.$set(input_1_changes);

			if (/*hilight*/ ctx[5]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*hilight*/ 32) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(div, null);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}
		},
		i(local) {
			if (current) return;
			transition_in(lessons_1.$$.fragment, local);
			transition_in(input_1.$$.fragment, local);
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(lessons_1.$$.fragment, local);
			transition_out(input_1.$$.fragment, local);
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(section);
			destroy_component(lessons_1);
			destroy_component(input_1);
			if (if_block) if_block.d();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let text;
	let error;
	let focus;
	let hilight;

	const lessons = [
		"မမ ဝဝ ထထက အကပထမ ကပါ ကပါ မမရာ ညည လသာသာ ညအခါ ငါစာရ မမ ဝဝ ထထက",
		"သေသောသူသည် သုဿာန်သို့ သက်သက်သာသာ သွားသည်",
		"တာတေ တိုင်တည်တယ်။ တာတေ တီတူးတော့ တော်တော်တွေးတာ။"
	];

	let active = 0;
	let input = "";

	function lessons_1_active_binding(value) {
		active = value;
		$$invalidate(0, active);
	}

	function input_1_input_binding(value) {
		input = value;
		$$invalidate(1, input);
	}

	const only_handler = () => {
		if ($$invalidate(0, ++active) === lessons.length) $$invalidate(0, active = 0);
		$$invalidate(1, input = "");
	};

	function done_handler(event) {
		bubble($$self, event);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*active*/ 1) {
			$: $$invalidate(2, text = lessons[active]);
		}

		if ($$self.$$.dirty & /*input, text*/ 6) {
			$: $$invalidate(3, error = !(input === "" || text.startsWith(input)));
		}

		if ($$self.$$.dirty & /*text, input*/ 6) {
			$: $$invalidate(4, focus = text === input);
		}

		if ($$self.$$.dirty & /*focus, error, text, input*/ 30) {
			$: $$invalidate(5, hilight = focus
			? "Enter"
			: error ? "Backspace" : text[input.length]);
		}
	};

	return [
		active,
		input,
		text,
		error,
		focus,
		hilight,
		lessons,
		lessons_1_active_binding,
		input_1_input_binding,
		only_handler,
		done_handler
	];
}

class App extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default App;