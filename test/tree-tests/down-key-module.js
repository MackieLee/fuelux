define(function keyboardNavigationModuleFactory (require) {
	var $ = require('jquery');

	return function downKeyModule (QUnit) {
		QUnit.module( 'should respond to down key', {}, function testDownKeyPresses () {
			QUnit.skip('when focus is on node above sibling node, moves focus down to sibling', function loadTree (assert) {

			});

			QUnit.skip('when focus is on last focusable child of parent, moves focus out of parent onto first focusable sibling of parent', function loadTree (assert) {

			});

			QUnit.skip('when focus is on open branch, moves focus into open branch onto first focusable child', function respondsToKeyboardInput (assert) {

			});
		});
	};
});
