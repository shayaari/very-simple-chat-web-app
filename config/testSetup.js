/**
 * This file serves as a test configuration file. Anything that should execute/apply to every single
 * js test should go in this file.
 */

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// setup enzyme
configure({ adapter: new Adapter() });

// put a basic DOM in place up front
beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>';
});
