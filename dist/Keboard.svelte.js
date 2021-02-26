import './Keboard.svelte.css.proxy.js';
/* src/Keboard.svelte generated by Svelte v3.31.2 */
import {
	SvelteComponent,
	append,
	attr,
	destroy_block,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	set_data,
	set_style,
	space,
	text,
	toggle_class,
	update_keyed_each
} from "../_snowpack/pkg/svelte/internal.js";

import { LAYOUTS, CODES, SIZES, SINGLES } from "./util/keys.js";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[5] = list[i];
	child_ctx[7] = i;
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[8] = list[i];
	child_ctx[10] = i;
	return child_ctx;
}

// (26:6) {:else}
function create_else_block(ctx) {
	let div;
	let t_value = /*layout*/ ctx[0].default[/*ri*/ ctx[7]][/*ki*/ ctx[10]] + "";
	let t;

	return {
		c() {
			div = element("div");
			t = text(t_value);
			attr(div, "class", "svelte-ycxwfm");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, t);
		},
		p(ctx, dirty) {
			if (dirty & /*layout*/ 1 && t_value !== (t_value = /*layout*/ ctx[0].default[/*ri*/ ctx[7]][/*ki*/ ctx[10]] + "")) set_data(t, t_value);
		},
		d(detaching) {
			if (detaching) detach(div);
		}
	};
}

// (24:6) {#if shift}
function create_if_block(ctx) {
	let div;
	let t_value = /*layout*/ ctx[0].shift[/*ri*/ ctx[7]][/*ki*/ ctx[10]] + "";
	let t;

	return {
		c() {
			div = element("div");
			t = text(t_value);
			attr(div, "class", "svelte-ycxwfm");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, t);
		},
		p(ctx, dirty) {
			if (dirty & /*layout*/ 1 && t_value !== (t_value = /*layout*/ ctx[0].shift[/*ri*/ ctx[7]][/*ki*/ ctx[10]] + "")) set_data(t, t_value);
		},
		d(detaching) {
			if (detaching) detach(div);
		}
	};
}

// (13:3) {#each keys as key, ki (ki)}
function create_each_block_1(key_1, ctx) {
	let div1;
	let div0;

	function select_block_type(ctx, dirty) {
		if (/*shift*/ ctx[4]) return create_if_block;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx, -1);
	let if_block = current_block_type(ctx);

	return {
		key: key_1,
		first: null,
		c() {
			div1 = element("div");
			div0 = element("div");
			if_block.c();
			attr(div0, "class", "key-content svelte-ycxwfm");

			toggle_class(div0, "hilight", /*shift*/ ctx[4] && /*layout*/ ctx[0].default[/*ri*/ ctx[7]][/*ki*/ ctx[10]] === "Shift" || [
				/*layout*/ ctx[0].default[/*ri*/ ctx[7]][/*ki*/ ctx[10]],
				/*layout*/ ctx[0].shift[/*ri*/ ctx[7]][/*ki*/ ctx[10]]
			].includes(/*hilight*/ ctx[1]));

			attr(div1, "class", "key svelte-ycxwfm");
			set_style(div1, "--size", SIZES[/*ri*/ ctx[7]][/*ki*/ ctx[10]]);
			this.first = div1;
		},
		m(target, anchor) {
			insert(target, div1, anchor);
			append(div1, div0);
			if_block.m(div0, null);
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;

			if (current_block_type === (current_block_type = select_block_type(ctx, dirty)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(div0, null);
				}
			}

			if (dirty & /*shift, layout, CODES, hilight*/ 19) {
				toggle_class(div0, "hilight", /*shift*/ ctx[4] && /*layout*/ ctx[0].default[/*ri*/ ctx[7]][/*ki*/ ctx[10]] === "Shift" || [
					/*layout*/ ctx[0].default[/*ri*/ ctx[7]][/*ki*/ ctx[10]],
					/*layout*/ ctx[0].shift[/*ri*/ ctx[7]][/*ki*/ ctx[10]]
				].includes(/*hilight*/ ctx[1]));
			}
		},
		d(detaching) {
			if (detaching) detach(div1);
			if_block.d();
		}
	};
}

// (11:1) {#each CODES as keys, ri (ri)}
function create_each_block(key_1, ctx) {
	let div;
	let each_blocks = [];
	let each_1_lookup = new Map();
	let t;
	let each_value_1 = /*keys*/ ctx[5];
	const get_key = ctx => /*ki*/ ctx[10];

	for (let i = 0; i < each_value_1.length; i += 1) {
		let child_ctx = get_each_context_1(ctx, each_value_1, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block_1(key, child_ctx));
	}

	return {
		key: key_1,
		first: null,
		c() {
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t = space();
			attr(div, "class", "row svelte-ycxwfm");
			this.first = div;
		},
		m(target, anchor) {
			insert(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			append(div, t);
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;

			if (dirty & /*SIZES, CODES, shift, layout, hilight*/ 19) {
				each_value_1 = /*keys*/ ctx[5];
				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value_1, each_1_lookup, div, destroy_block, create_each_block_1, t, get_each_context_1);
			}
		},
		d(detaching) {
			if (detaching) detach(div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d();
			}
		}
	};
}

function create_fragment(ctx) {
	let div;
	let each_blocks = [];
	let each_1_lookup = new Map();
	let each_value = CODES;
	const get_key = ctx => /*ri*/ ctx[7];

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	return {
		c() {
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			attr(div, "class", "keyboard svelte-ycxwfm");
			toggle_class(div, "error", /*error*/ ctx[2]);
			toggle_class(div, "focus", /*focus*/ ctx[3]);
		},
		m(target, anchor) {
			insert(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*CODES, SIZES, shift, layout, hilight*/ 19) {
				each_value = CODES;
				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, div, destroy_block, create_each_block, null, get_each_context);
			}

			if (dirty & /*error*/ 4) {
				toggle_class(div, "error", /*error*/ ctx[2]);
			}

			if (dirty & /*focus*/ 8) {
				toggle_class(div, "focus", /*focus*/ ctx[3]);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d();
			}
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let shift;
	let { layout = LAYOUTS.MM } = $$props;
	let { hilight = "" } = $$props;
	let { error = false } = $$props;
	let { focus = false } = $$props;

	$$self.$$set = $$props => {
		if ("layout" in $$props) $$invalidate(0, layout = $$props.layout);
		if ("hilight" in $$props) $$invalidate(1, hilight = $$props.hilight);
		if ("error" in $$props) $$invalidate(2, error = $$props.error);
		if ("focus" in $$props) $$invalidate(3, focus = $$props.focus);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*hilight, layout*/ 3) {
			$: $$invalidate(4, shift = !SINGLES.includes(hilight) && layout.shift.flat().includes(hilight));
		}
	};

	return [layout, hilight, error, focus, shift];
}

class Keboard extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			layout: 0,
			hilight: 1,
			error: 2,
			focus: 3
		});
	}
}

export default Keboard;