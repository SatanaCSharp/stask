import setupI7 from './setupI7.js';
import setupI6 from './setupI6.js';
import setupM1 from './setupM1.js';
import setupM2 from './setupM2.js';

export default function () {
    return [
        setupI7(),
        setupI6(),
        setupM1(),
        setupM2()
    ]
}