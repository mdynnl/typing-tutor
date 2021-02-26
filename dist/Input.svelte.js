import './Input.svelte.css.proxy.js';
/* src/Input.svelte generated by Svelte v3.31.2 */
import {
	SvelteComponent,
	append,
	attr,
	component_subscribe,
	create_component,
	destroy_component,
	detach,
	element,
	init,
	insert,
	listen,
	mount_component,
	safe_not_equal,
	set_data,
	set_store_value,
	space,
	text as text_1,
	toggle_class,
	transition_in,
	transition_out
} from "../_snowpack/pkg/svelte/internal.js";

import { CHARKEYS } from "./util/keys.js";
import DefaultPreventer from "./DefaultPreventer.svelte.js";
import blinker from "./util/blinker.js";
import { createEventDispatcher } from "../_snowpack/pkg/svelte.js";

function create_fragment(ctx) {
	let defaultpreventer;
	let t0;
	let section;
	let div;
	let pre0;
	let t1;
	let t2;
	let pre1;
	let t3;
	let span;
	let current;
	let mounted;
	let dispose;
	defaultpreventer = new DefaultPreventer({});

	return {
		c() {
			create_component(defaultpreventer.$$.fragment);
			t0 = space();
			section = element("section");
			div = element("div");
			pre0 = element("pre");
			t1 = text_1(/*text*/ ctx[1]);
			t2 = space();
			pre1 = element("pre");
			t3 = text_1(/*input*/ ctx[0]);
			span = element("span");
			span.textContent = "|";
			attr(pre0, "class", "svelte-rev117");
			attr(span, "class", "svelte-rev117");
			toggle_class(span, "hidden", /*hidden*/ ctx[5]);
			attr(pre1, "class", "svelte-rev117");
			toggle_class(pre1, "error", /*error*/ ctx[2]);
			attr(div, "class", "svelte-rev117");
		},
		m(target, anchor) {
			mount_component(defaultpreventer, target, anchor);
			insert(target, t0, anchor);
			insert(target, section, anchor);
			append(section, div);
			append(div, pre0);
			append(pre0, t1);
			append(div, t2);
			append(div, pre1);
			append(pre1, t3);
			append(pre1, span);
			current = true;

			if (!mounted) {
				dispose = listen(window, "keydown", /*keydown_handler*/ ctx[8]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (!current || dirty & /*text*/ 2) set_data(t1, /*text*/ ctx[1]);
			if (!current || dirty & /*input*/ 1) set_data(t3, /*input*/ ctx[0]);

			if (dirty & /*hidden*/ 32) {
				toggle_class(span, "hidden", /*hidden*/ ctx[5]);
			}

			if (dirty & /*error*/ 4) {
				toggle_class(pre1, "error", /*error*/ ctx[2]);
			}
		},
		i(local) {
			if (current) return;
			transition_in(defaultpreventer.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(defaultpreventer.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(defaultpreventer, detaching);
			if (detaching) detach(t0);
			if (detaching) detach(section);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let hidden;
	let $blink;
	let { input = "" } = $$props;
	let { text = "A quick brown fox jumps over the lazy dog" } = $$props;
	let { error = false } = $$props;
	let { only = [] } = $$props;
	const blink = blinker();
	component_subscribe($$self, blink, value => $$invalidate(4, $blink = value));
	const dispatch = createEventDispatcher();

	const keydown_handler = e => {
		set_store_value(blink, $blink = true, $blink);

		if (only.length) {
			if (only.includes(e.code)) {
				dispatch("only", { code: e.code });
			}

			return;
		}

		if (CHARKEYS.includes(e.code)) {
			$$invalidate(0, input += e.key);
		} else if (e.code === "Backspace") {
			$$invalidate(0, input = input.slice(0, input.length - 1));
		}
	};

	$$self.$$set = $$props => {
		if ("input" in $$props) $$invalidate(0, input = $$props.input);
		if ("text" in $$props) $$invalidate(1, text = $$props.text);
		if ("error" in $$props) $$invalidate(2, error = $$props.error);
		if ("only" in $$props) $$invalidate(3, only = $$props.only);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*only, $blink*/ 24) {
			$: $$invalidate(5, hidden = only.length || !$blink);
		}
	};

	return [input, text, error, only, $blink, hidden, blink, dispatch, keydown_handler];
}

class Input extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { input: 0, text: 1, error: 2, only: 3 });
	}
}

export default Input;