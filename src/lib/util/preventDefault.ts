export default (enableAfter = 1500, disableAfter = 1000) => {
	let enabler: (() => void) | undefined;
	let disabler: (() => void) | undefined;
	const prevent = (e: KeyboardEvent) => e.preventDefault();

	function enable() {
		const t = setTimeout(() => {
			clearTimeout(disableAfter);
			window.addEventListener('keydown', prevent);
		}, enableAfter);
		return () => clearTimeout(t);
	}

	function disable() {
		const t = setTimeout(() => {
			enabler && enabler();
			enabler = undefined;
			window.removeEventListener('keydown', prevent);
		}, disableAfter);

		return () => clearTimeout(t);
	}

	function start(e: KeyboardEvent) {
		if (!enabler) enabler = enable();
		disabler && disabler();
		disabler = disable();
	}

	window.addEventListener('keydown', start);

	return () => {
		enabler && enabler();
		disabler && disabler();
		window.removeEventListener('keydown', start);
	};
};
