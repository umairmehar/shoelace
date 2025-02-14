'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9b0ec98d.js');

/*
The animations herein were forked from Animate.css (https://animate.style/) and are subject to the following license.

---

The MIT License (MIT)

Copyright (c) 2020 Daniel Eden

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
const animatecss = {
    bounce: [
        {
            offset: 0,
            transform: 'translate(0)',
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
        },
        {
            offset: 0.2,
            transform: 'translate(0)',
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
        },
        {
            offset: 0.4,
            transform: 'translateY(-30px)',
            easing: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)'
        },
        {
            offset: 0.43,
            transform: 'translateY(-30px)',
            easing: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)'
        },
        {
            offset: 0.53,
            transform: 'translate(0)',
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
        },
        {
            offset: 0.7,
            transform: 'translateY(-15px)',
            easing: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)'
        },
        {
            offset: 0.8,
            transform: 'translate(0)',
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
        },
        {
            offset: 0.9,
            transform: 'translateY(-4px)',
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
        },
        {
            offset: 1,
            transform: 'translate(0)',
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
        }
    ],
    flash: [
        {
            offset: 0,
            opacity: 1
        },
        {
            offset: 0.25,
            opacity: 0
        },
        {
            offset: 0.5,
            opacity: 1
        },
        {
            offset: 0.75,
            opacity: 0
        },
        {
            offset: 1,
            opacity: 1
        }
    ],
    jello: [
        {
            offset: 0,
            transform: 'skewX(0deg) skewY(0deg)',
            transformOrigin: 'center'
        },
        {
            offset: 0.111,
            transform: 'skewX(0deg) skewY(0deg)',
            transformOrigin: 'center'
        },
        {
            offset: 0.222,
            transform: 'skewX(-12.5deg) skewY(-12.5deg)',
            transformOrigin: 'center'
        },
        {
            offset: 0.333,
            transform: 'skewX(6.25deg) skewY(6.25deg)',
            transformOrigin: 'center'
        },
        {
            offset: 0.444,
            transform: 'skewX(-3.125deg) skewY(-3.125deg)',
            transformOrigin: 'center'
        },
        {
            offset: 0.555,
            transform: 'skewX(1.5625deg) skewY(1.5625deg)',
            transformOrigin: 'center'
        },
        {
            offset: 0.666,
            transform: 'skewX(-0.78125deg) skewY(-0.78125deg)',
            transformOrigin: 'center'
        },
        {
            offset: 0.777,
            transform: 'skewX(0.390625deg) skewY(0.390625deg)',
            transformOrigin: 'center'
        },
        {
            offset: 0.888,
            transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)',
            transformOrigin: 'center'
        },
        {
            offset: 1,
            transform: 'skewX(0deg) skewY(0deg)',
            transformOrigin: 'center'
        }
    ],
    pulse: [
        {
            offset: 0,
            transform: 'scale(1)'
        },
        {
            offset: 0.5,
            transform: 'scale(1.05)'
        },
        {
            offset: 1,
            transform: 'scale(1)'
        }
    ],
    rotate: [
        {
            offset: 0,
            transform: 'rotate(0deg)'
        },
        {
            offset: 0.25,
            transform: 'rotate(90deg)'
        },
        {
            offset: 0.5,
            transform: 'rotate(180deg)'
        },
        {
            offset: 0.75,
            transform: 'rotate(270deg)'
        },
        {
            offset: 1,
            transform: 'rotate(360deg)'
        }
    ],
    shake: [
        {
            offset: 0,
            transform: 'translateX(0px)'
        },
        {
            offset: 0.1,
            transform: 'translateX(-10px)'
        },
        {
            offset: 0.2,
            transform: 'translateX(10px)'
        },
        {
            offset: 0.3,
            transform: 'translateX(-10px)'
        },
        {
            offset: 0.4,
            transform: 'translateX(10px)'
        },
        {
            offset: 0.5,
            transform: 'translateX(-10px)'
        },
        {
            offset: 0.6,
            transform: 'translateX(10px)'
        },
        {
            offset: 0.7,
            transform: 'translateX(-10px)'
        },
        {
            offset: 0.8,
            transform: 'translateX(10px)'
        },
        {
            offset: 0.9,
            transform: 'translateX(-10px)'
        },
        {
            offset: 1,
            transform: 'translateX(0px)'
        }
    ],
    swing: [
        {
            offset: 0,
            transform: 'rotate(0deg)',
            transformOrigin: 'top center'
        },
        {
            offset: 0.2,
            transform: 'rotate(15deg)',
            transformOrigin: 'top center'
        },
        {
            offset: 0.4,
            transform: 'rotate(-10deg)',
            transformOrigin: 'top center'
        },
        {
            offset: 0.6,
            transform: 'rotate(5deg)',
            transformOrigin: 'top center'
        },
        {
            offset: 0.8,
            transform: 'rotate(-5deg)',
            transformOrigin: 'top center'
        },
        {
            offset: 1,
            transform: 'rotate(0deg)',
            transformOrigin: 'top center'
        }
    ],
    'rubber-band': [
        {
            offset: 0,
            transform: 'scale(1, 1)'
        },
        {
            offset: 0.3,
            transform: 'scale(1.25, 0.75)'
        },
        {
            offset: 0.4,
            transform: 'scale(0.75, 1.25)'
        },
        {
            offset: 0.5,
            transform: 'scale(1.15, 0.85)'
        },
        {
            offset: 0.65,
            transform: 'scale(0.95, 1.05)'
        },
        {
            offset: 0.75,
            transform: 'scale(1.05, 0.95)'
        },
        {
            offset: 1,
            transform: 'scale(1, 1)'
        }
    ],
    tada: [
        {
            offset: 0,
            transform: 'scale(1) rotate(0deg)'
        },
        {
            offset: 0.1,
            transform: 'scale(0.9) rotate(-3deg)'
        },
        {
            offset: 0.2,
            transform: 'scale(0.9) rotate(-3deg)'
        },
        {
            offset: 0.3,
            transform: 'scale(1.1) rotate(-3deg)'
        },
        {
            offset: 0.4,
            transform: 'scale(1.1) rotate(3deg)'
        },
        {
            offset: 0.5,
            transform: 'scale(1.1) rotate(-3deg)'
        },
        {
            offset: 0.6,
            transform: 'scale(1.1) rotate(3deg)'
        },
        {
            offset: 0.7,
            transform: 'scale(1.1) rotate(-3deg)'
        },
        {
            offset: 0.8,
            transform: 'scale(1.1) rotate(3deg)'
        },
        {
            offset: 0.9,
            transform: 'scale(1.1) rotate(3deg)'
        },
        {
            offset: 1,
            transform: 'scale(1) rotate(0deg)'
        }
    ],
    wobble: [
        {
            offset: 0,
            transform: 'translate(0) rotate(0deg)'
        },
        {
            offset: 0.15,
            transform: 'translateX(-25%) rotate(-5deg)'
        },
        {
            offset: 0.3,
            transform: 'translateX(20%) rotate(3deg)'
        },
        {
            offset: 0.45,
            transform: 'translateX(-15%) rotate(-3deg)'
        },
        {
            offset: 0.6,
            transform: 'translateX(10%) rotate(2deg)'
        },
        {
            offset: 0.75,
            transform: 'translateX(-5%) rotate(-1deg)'
        },
        {
            offset: 1,
            transform: 'translate(0) rotate(0deg)'
        }
    ],
    'heart-beat': [
        {
            offset: 0,
            transform: 'scale(1)',
            easing: 'ease-in-out'
        },
        {
            offset: 0.14,
            transform: 'scale(1.3)',
            easing: 'ease-in-out'
        },
        {
            offset: 0.28,
            transform: 'scale(1)',
            easing: 'ease-in-out'
        },
        {
            offset: 0.42,
            transform: 'scale(1.3)',
            easing: 'ease-in-out'
        },
        {
            offset: 0.7,
            transform: 'scale(1)',
            easing: 'ease-in-out'
        },
        {
            offset: 1,
            transform: 'scale(1)',
            easing: 'ease-in-out'
        }
    ],
    'bounce-in': [
        {
            offset: 0,
            opacity: 0,
            transform: 'scale(0.3)',
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
        },
        {
            offset: 0.2,
            opacity: 0,
            transform: 'scale(1.1)',
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
        },
        {
            offset: 0.4,
            opacity: 0,
            transform: 'scale(0.9)',
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
        },
        {
            offset: 0.6,
            opacity: 1,
            transform: 'scale(1.03)',
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
        },
        {
            offset: 0.8,
            opacity: 1,
            transform: 'scale(0.97)',
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
        },
        {
            offset: 1,
            opacity: 1,
            transform: 'scale(1)',
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
        }
    ],
    'bounce-in-up': [
        {
            offset: 0,
            opacity: 0,
            transform: 'translateY(3000px)',
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
        },
        {
            offset: 0.6,
            opacity: 1,
            transform: 'translateY(-20px)',
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
        },
        {
            offset: 0.75,
            opacity: 1,
            transform: 'translateY(10px)',
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
        },
        {
            offset: 0.9,
            opacity: 1,
            transform: 'translateY(-5px)',
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
        },
        {
            offset: 1,
            opacity: 1,
            transform: 'translateY(0px)',
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
        }
    ],
    'bounce-in-down': [
        {
            offset: 0,
            opacity: 0,
            transform: 'translateY(-3000px)',
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
        },
        {
            offset: 0.6,
            opacity: 1,
            transform: 'translateY(25px)',
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
        },
        {
            offset: 0.75,
            opacity: 1,
            transform: 'translateY(-10px)',
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
        },
        {
            offset: 0.9,
            opacity: 1,
            transform: 'translateY(5px)',
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
        },
        {
            offset: 1,
            opacity: 1,
            transform: 'translateY(0px)',
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
        }
    ],
    'bounce-in-right': [
        {
            offset: 0,
            fillMode: 'both',
            transform: 'translateX(600px)',
            easing: 'ease-in',
            opacity: 0
        },
        {
            offset: 0.38,
            fillMode: 'both',
            transform: 'translateX(0)',
            easing: 'ease-out',
            opacity: 1
        },
        {
            offset: 0.55,
            fillMode: 'both',
            transform: 'translateX(68px)',
            easing: 'ease-in',
            opacity: 1
        },
        {
            offset: 0.72,
            fillMode: 'both',
            transform: 'translateX(0)',
            easing: 'ease-out',
            opacity: 1
        },
        {
            offset: 0.81,
            fillMode: 'both',
            transform: 'translateX(32px)',
            easing: 'ease-in',
            opacity: 1
        },
        {
            offset: 0.9,
            fillMode: 'both',
            transform: 'translateX(0)',
            easing: 'ease-out',
            opacity: 1
        },
        {
            offset: 0.95,
            fillMode: 'both',
            transform: 'translateX(8px)',
            easing: 'ease-in',
            opacity: 1
        },
        {
            offset: 1,
            fillMode: 'both',
            transform: 'translateX(0)',
            easing: 'ease-out',
            opacity: 1
        }
    ],
    'bounce-in-left': [
        {
            offset: 0,
            fillMode: 'both',
            transform: 'translateX(-600px)',
            easing: 'ease-in',
            opacity: 0
        },
        {
            offset: 0.38,
            fillMode: 'both',
            transform: 'translateX(0)',
            easing: 'ease-out',
            opacity: 1
        },
        {
            offset: 0.55,
            fillMode: 'both',
            transform: 'translateX(-68px)',
            easing: 'ease-in',
            opacity: 1
        },
        {
            offset: 0.72,
            fillMode: 'both',
            transform: 'translateX(0)',
            easing: 'ease-out',
            opacity: 1
        },
        {
            offset: 0.81,
            fillMode: 'both',
            transform: 'translateX(-28px)',
            easing: 'ease-in',
            opacity: 1
        },
        {
            offset: 0.9,
            fillMode: 'both',
            transform: 'translateX(0)',
            easing: 'ease-out',
            opacity: 1
        },
        {
            offset: 0.95,
            fillMode: 'both',
            transform: 'translateX(-8px)',
            easing: 'ease-in',
            opacity: 1
        },
        {
            offset: 1,
            fillMode: 'both',
            transform: 'translateX(0)',
            easing: 'ease-out',
            opacity: 1
        }
    ],
    'bounce-out': [
        {
            offset: 0,
            opacity: 1,
            transform: 'scale(1)'
        },
        {
            offset: 0.2,
            opacity: 1,
            transform: 'scale(0.9)'
        },
        {
            offset: 0.5,
            opacity: 1,
            transform: 'scale(1.11)'
        },
        {
            offset: 0.55,
            opacity: 1,
            transform: 'scale(1.11)'
        },
        {
            offset: 1,
            opacity: 0,
            transform: 'scale(1)'
        }
    ],
    'bounce-out-up': [
        {
            offset: 0,
            opacity: 1,
            transform: 'translateY(0px)'
        },
        {
            offset: 0.2,
            opacity: 1,
            transform: 'translateY(-10px)'
        },
        {
            offset: 0.4,
            opacity: 1,
            transform: 'translateY(20px)'
        },
        {
            offset: 0.45,
            opacity: 1,
            transform: 'translateY(20px)'
        },
        {
            offset: 0.55,
            opacity: 1,
            transform: 'translateY(20px)'
        },
        {
            offset: 1,
            opacity: 0,
            transform: 'translateY(-100vh)'
        }
    ],
    'bounce-out-down': [
        {
            offset: 0,
            opacity: 1,
            transform: 'translateY(0px)'
        },
        {
            offset: 0.2,
            opacity: 1,
            transform: 'translateY(10px)'
        },
        {
            offset: 0.4,
            opacity: 1,
            transform: 'translateY(-20px)'
        },
        {
            offset: 0.45,
            opacity: 1,
            transform: 'translateY(-20px)'
        },
        {
            offset: 0.55,
            opacity: 1,
            transform: 'translateY(-20px)'
        },
        {
            offset: 1,
            opacity: 0,
            transform: 'translateY(100vh)'
        }
    ],
    'bounce-out-right': [
        {
            offset: 0,
            opacity: 1,
            transform: 'translateX(0px)'
        },
        {
            offset: 0.2,
            opacity: 1,
            transform: 'translateX(10px)'
        },
        {
            offset: 0.4,
            opacity: 1,
            transform: 'translateX(-20px)'
        },
        {
            offset: 0.45,
            opacity: 1,
            transform: 'translateX(-20px)'
        },
        {
            offset: 0.55,
            opacity: 1,
            transform: 'translateX(-20px)'
        },
        {
            offset: 1,
            opacity: 0,
            transform: 'translateX(100vw)'
        }
    ],
    'bounce-out-left': [
        {
            offset: 0,
            opacity: 1,
            transform: 'translateX(0px)'
        },
        {
            offset: 0.2,
            opacity: 1,
            transform: 'translateX(-10px)'
        },
        {
            offset: 0.4,
            opacity: 1,
            transform: 'translateX(20px)'
        },
        {
            offset: 0.45,
            opacity: 1,
            transform: 'translateX(20px)'
        },
        {
            offset: 0.55,
            opacity: 1,
            transform: 'translateX(20px)'
        },
        {
            offset: 1,
            opacity: 0,
            transform: 'translateX(-100vw)'
        }
    ],
    'fade-in': [
        {
            offset: 0,
            opacity: 0
        },
        {
            offset: 1,
            opacity: 1
        }
    ],
    'fade-in-up': [
        {
            offset: 0,
            opacity: 0,
            transform: 'translateY(100%)'
        },
        {
            offset: 1,
            opacity: 1,
            transform: 'translateY(0)'
        }
    ],
    'fade-in-up-big': [
        {
            offset: 0,
            opacity: 0,
            transform: 'translateY(100vh)'
        },
        {
            offset: 1,
            opacity: 1,
            transform: 'translateY(0px)'
        }
    ],
    'fade-in-down': [
        {
            offset: 0,
            opacity: 0,
            transform: 'translateY(-100%)'
        },
        {
            offset: 1,
            opacity: 1,
            transform: 'translateY(0)'
        }
    ],
    'fade-in-down-big': [
        {
            offset: 0,
            opacity: 0,
            transform: 'translateY(-100vh)'
        },
        {
            offset: 1,
            opacity: 1,
            transform: 'translateY(0px)'
        }
    ],
    'fade-in-right': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transform: 'translateX(50px)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transform: 'translateX(0)',
            opacity: 1
        }
    ],
    'fade-in-right-big': [
        {
            offset: 0,
            opacity: 0,
            transform: 'translateX(100vw)'
        },
        {
            offset: 1,
            opacity: 1,
            transform: 'translateX(0px)'
        }
    ],
    'fade-in-left': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transform: 'translateX(-50px)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transform: 'translateX(0)',
            opacity: 1
        }
    ],
    'fade-in-left-big': [
        {
            offset: 0,
            opacity: 0,
            transform: 'translateX(-100vw)'
        },
        {
            offset: 1,
            opacity: 1,
            transform: 'translateX(0px)'
        }
    ],
    'fade-out': [
        {
            offset: 0,
            opacity: 1
        },
        {
            offset: 1,
            opacity: 0
        }
    ],
    'fade-out-up': [
        {
            offset: 0,
            opacity: 1,
            transform: 'translateY(0)'
        },
        {
            offset: 1,
            opacity: 0,
            transform: 'translateY(-100%)'
        }
    ],
    'fade-out-up-big': [
        {
            offset: 0,
            opacity: 1,
            transform: 'translateY(0px)'
        },
        {
            offset: 1,
            opacity: 0,
            transform: 'translateY(-100vh)'
        }
    ],
    'fade-out-down': [
        {
            offset: 0,
            opacity: 1,
            transform: 'translateY(0)'
        },
        {
            offset: 1,
            opacity: 0,
            transform: 'translateY(100%)'
        }
    ],
    'fade-out-down-big': [
        {
            offset: 0,
            opacity: 1,
            transform: 'translateY(0px)'
        },
        {
            offset: 1,
            opacity: 0,
            transform: 'translateY(100vh)'
        }
    ],
    'fade-out-right': [
        {
            offset: 0,
            opacity: 1,
            transform: 'translateX(0)'
        },
        {
            offset: 1,
            opacity: 0,
            transform: 'translateX(100%)'
        }
    ],
    'fade-out-right-big': [
        {
            offset: 0,
            opacity: 1,
            transform: 'translateX(0px)'
        },
        {
            offset: 1,
            opacity: 0,
            transform: 'translateX(100vw)'
        }
    ],
    'fade-out-left': [
        {
            offset: 0,
            opacity: 1,
            transform: 'translateX(0)'
        },
        {
            offset: 1,
            opacity: 0,
            transform: 'translateX(-100%)'
        }
    ],
    'fade-out-left-big': [
        {
            offset: 0,
            opacity: 1,
            transform: 'translateX(0px)'
        },
        {
            offset: 1,
            opacity: 0,
            transform: 'translateX(-100vw)'
        }
    ],
    flip: [
        {
            offset: 0,
            backfaceVisibility: 'visible',
            easing: 'ease-out',
            transform: 'perspective(400px) scale(1) translateZ(0) rotateY(-360deg)'
        },
        {
            offset: 0.4,
            backfaceVisibility: 'visible',
            easing: 'ease-out',
            transform: 'perspective(400px) scale(1) translateZ(150px) rotateY(-190deg)'
        },
        {
            offset: 0.5,
            backfaceVisibility: 'visible',
            easing: 'ease-in',
            transform: 'perspective(400px) scale(1) translateZ(150px) rotateY(-170deg)'
        },
        {
            offset: 0.8,
            backfaceVisibility: 'visible',
            easing: 'ease-in',
            transform: 'perspective(400px) scale(0.95) translateZ(0) rotateY(0deg)'
        },
        {
            offset: 1,
            backfaceVisibility: 'visible',
            easing: 'ease-in',
            transform: 'perspective(400px) scale(1) translateZ(0) rotateY(0deg)'
        }
    ],
    'flip-in-x': [
        {
            offset: 0,
            backfaceVisibility: 'visible',
            opacity: 0,
            easing: 'ease-in',
            transform: 'perspective(400px) rotateX(90deg)'
        },
        {
            offset: 0.4,
            backfaceVisibility: 'visible',
            opacity: 0.5,
            easing: 'ease-in',
            transform: 'perspective(400px) rotateX(-20deg)'
        },
        {
            offset: 0.6,
            backfaceVisibility: 'visible',
            opacity: 1,
            easing: 'ease-in',
            transform: 'perspective(400px) rotateX(10deg)'
        },
        {
            offset: 0.8,
            backfaceVisibility: 'visible',
            opacity: 1,
            easing: 'ease-in',
            transform: 'perspective(400px) rotateX(-5deg)'
        },
        {
            offset: 1,
            backfaceVisibility: 'visible',
            opacity: 1,
            easing: 'ease-in',
            transform: 'perspective(400px) rotateX(0deg)'
        }
    ],
    'flip-in-y': [
        {
            offset: 0,
            backfaceVisibility: 'visible',
            opacity: 0,
            easing: 'ease-in',
            transform: 'perspective(400px) rotateY(90deg)'
        },
        {
            offset: 0.4,
            backfaceVisibility: 'visible',
            opacity: 0.5,
            easing: 'ease-in',
            transform: 'perspective(400px) rotateY(-20deg)'
        },
        {
            offset: 0.6,
            backfaceVisibility: 'visible',
            opacity: 1,
            easing: 'ease-in',
            transform: 'perspective(400px) rotateY(10deg)'
        },
        {
            offset: 0.8,
            backfaceVisibility: 'visible',
            opacity: 1,
            easing: 'ease-in',
            transform: 'perspective(400px) rotateY(-5deg)'
        },
        {
            offset: 1,
            backfaceVisibility: 'visible',
            opacity: 1,
            easing: 'ease-in',
            transform: 'perspective(400px) rotateY(0deg)'
        }
    ],
    'flip-out-x': [
        {
            offset: 0,
            backfaceVisibility: 'visible',
            opacity: 1,
            transform: 'perspective(400px) rotateX(0deg)'
        },
        {
            offset: 0.3,
            backfaceVisibility: 'visible',
            opacity: 1,
            transform: 'perspective(400px) rotateX(-15deg)'
        },
        {
            offset: 1,
            backfaceVisibility: 'visible',
            opacity: 0,
            transform: 'perspective(400px) rotateX(90deg)'
        }
    ],
    'flip-out-y': [
        {
            offset: 0,
            backfaceVisibility: 'visible',
            opacity: 1,
            transform: 'perspective(400px) rotateY(0deg)'
        },
        {
            offset: 0.3,
            backfaceVisibility: 'visible',
            opacity: 1,
            transform: 'perspective(400px) rotateY(-15deg)'
        },
        {
            offset: 1,
            backfaceVisibility: 'visible',
            opacity: 0,
            transform: 'perspective(400px) rotateY(90deg)'
        }
    ],
    'light-speed-in': [
        {
            offset: 0,
            easing: 'ease-out',
            opacity: 0,
            transform: 'translateX(200px) skewX(-30deg)'
        },
        {
            offset: 0.6,
            easing: 'ease-out',
            opacity: 1,
            transform: 'translateX(0px) skewX(20deg)'
        },
        {
            offset: 0.8,
            easing: 'ease-out',
            opacity: 1,
            transform: 'translateX(0px) skewX(-5deg)'
        },
        {
            offset: 1,
            easing: 'ease-out',
            opacity: 1,
            transform: 'translateX(0px) skewX(0deg)'
        }
    ],
    'light-speed-out': [
        {
            offset: 0,
            easing: 'ease-in',
            opacity: 1,
            transform: 'translateX(0px) skewX(0deg)'
        },
        {
            offset: 1,
            easing: 'ease-in',
            opacity: 0,
            transform: 'translateX(200px) skewX(30deg)'
        }
    ],
    'rotate-in': [
        {
            offset: 0,
            opacity: 0,
            transform: 'rotateZ(180deg)',
            transformOrigin: 'center'
        },
        {
            offset: 1,
            opacity: 1,
            transform: 'rotateZ(0deg)',
            transformOrigin: 'center'
        }
    ],
    'rotate-in-clockwise': [
        {
            offset: 0,
            opacity: 0,
            transform: 'rotateZ(-180deg)',
            transformOrigin: 'center'
        },
        {
            offset: 1,
            opacity: 1,
            transform: 'rotateZ(0deg)',
            transformOrigin: 'center'
        }
    ],
    'rotate-in-down-left': [
        {
            offset: 0,
            opacity: 0,
            transform: 'rotateZ(-45deg)',
            transformOrigin: 'left bottom'
        },
        {
            offset: 1,
            opacity: 1,
            transform: 'rotateZ(0deg)',
            transformOrigin: 'left bottom'
        }
    ],
    'rotate-in-down-right': [
        {
            offset: 0,
            opacity: 0,
            transform: 'rotateZ(45deg)',
            transformOrigin: 'right bottom'
        },
        {
            offset: 1,
            opacity: 1,
            transform: 'rotateZ(0deg)',
            transformOrigin: 'right bottom'
        }
    ],
    'rotate-in-up-left': [
        {
            offset: 0,
            opacity: 0,
            transform: 'rotateZ(45deg)',
            transformOrigin: 'left bottom'
        },
        {
            offset: 1,
            opacity: 1,
            transform: 'rotateZ(0deg)',
            transformOrigin: 'left bottom'
        }
    ],
    'rotate-in-up-right': [
        {
            offset: 0,
            opacity: 0,
            transform: 'rotateZ(-45deg)',
            transformOrigin: 'right bottom'
        },
        {
            offset: 1,
            opacity: 1,
            transform: 'rotateZ(0deg)',
            transformOrigin: 'right bottom'
        }
    ],
    'rotate-out': [
        {
            offset: 0,
            opacity: 1,
            transform: 'rotateZ(0deg)',
            transformOrigin: 'center'
        },
        {
            offset: 1,
            opacity: 0,
            transform: 'rotateZ(180deg)',
            transformOrigin: 'center'
        }
    ],
    'rotate-out-clockwise': [
        {
            offset: 0,
            opacity: 1,
            transform: 'rotateZ(0deg)',
            transformOrigin: 'center'
        },
        {
            offset: 1,
            opacity: 0,
            transform: 'rotateZ(-180deg)',
            transformOrigin: 'center'
        }
    ],
    'rotate-out-down-left': [
        {
            offset: 0,
            opacity: 1,
            transform: 'rotateZ(0deg)',
            transformOrigin: 'left bottom'
        },
        {
            offset: 1,
            opacity: 0,
            transform: 'rotateZ(45deg)',
            transformOrigin: 'left bottom'
        }
    ],
    'rotate-out-down-right': [
        {
            offset: 0,
            opacity: 1,
            transform: 'rotateZ(0deg)',
            transformOrigin: 'right bottom'
        },
        {
            offset: 1,
            opacity: 0,
            transform: 'rotateZ(-45deg)',
            transformOrigin: 'right bottom'
        }
    ],
    'rotate-out-up-left': [
        {
            offset: 0,
            opacity: 1,
            transform: 'rotateZ(0deg)',
            transformOrigin: 'left bottom'
        },
        {
            offset: 1,
            opacity: 0,
            transform: 'rotateZ(-45deg)',
            transformOrigin: 'left bottom'
        }
    ],
    'rotate-out-up-right': [
        {
            offset: 0,
            opacity: 1,
            transform: 'rotateZ(0deg)',
            transformOrigin: 'right bottom'
        },
        {
            offset: 1,
            opacity: 0,
            transform: 'rotateZ(45deg)',
            transformOrigin: 'right bottom'
        }
    ],
    'slide-in-up': [
        {
            offset: 0,
            transform: 'translateY(100%)',
            visibility: 'hidden'
        },
        {
            offset: 1,
            transform: 'translateY(0)',
            visibility: 'visible'
        }
    ],
    'slide-in-down': [
        {
            offset: 0,
            transform: 'translateY(-100%)',
            visibility: 'hidden'
        },
        {
            offset: 1,
            transform: 'translateY(0)',
            visibility: 'visible'
        }
    ],
    'slide-in-left': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateX(-100vw)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateX(0)',
            opacity: 1
        }
    ],
    'slide-in-right': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateX(100vw)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateX(0)',
            opacity: 1
        }
    ],
    'slide-out-up': [
        {
            offset: 0,
            transform: 'translateY(0)',
            visibility: 'visible'
        },
        {
            offset: 1,
            transform: 'translateY(-100%)',
            visibility: 'hidden'
        }
    ],
    'slide-out-down': [
        {
            offset: 0,
            transform: 'translateY(0)',
            visibility: 'visible'
        },
        {
            offset: 1,
            transform: 'translateY(100%)',
            visibility: 'hidden'
        }
    ],
    'slide-out-left': [
        {
            offset: 0,
            transform: 'translateX(0)',
            visibility: 'visible'
        },
        {
            offset: 1,
            transform: 'translateX(-100%)',
            visibility: 'hidden'
        }
    ],
    'slide-out-right': [
        {
            offset: 0,
            transform: 'translateX(0)',
            visibility: 'visible'
        },
        {
            offset: 1,
            transform: 'translateX(100%)',
            visibility: 'hidden'
        }
    ],
    'zoom-in': [
        {
            offset: 0,
            opacity: 0,
            transform: 'scale(1)'
        },
        {
            offset: 0.5,
            opacity: 0,
            transform: 'scale(0.3)'
        },
        {
            offset: 1,
            opacity: 1,
            transform: 'scale(1)'
        }
    ],
    'zoom-in-up': [
        {
            offset: 0,
            opacity: 0,
            transform: 'scale(0.1) translateY(-100vh)',
            easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)'
        },
        {
            offset: 0.6,
            opacity: 1,
            transform: 'scale(0.475) translateY(60px)',
            easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)'
        },
        {
            offset: 1,
            opacity: 1,
            transform: 'scale(1) translateY(0px)',
            easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)'
        }
    ],
    'zoom-in-down': [
        {
            offset: 0,
            opacity: 0,
            transform: 'scale(0.1) translateY(100vh)',
            easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)'
        },
        {
            offset: 0.6,
            opacity: 1,
            transform: 'scale(0.475) translateY(-60px)',
            easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)'
        },
        {
            offset: 1,
            opacity: 1,
            transform: 'scale(1) translateY(0px)',
            easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)'
        }
    ],
    'zoom-in-left': [
        {
            offset: 0,
            opacity: 0,
            transform: 'scale(0.1) translateX(-100vw)',
            easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)'
        },
        {
            offset: 0.6,
            opacity: 1,
            transform: 'scale(0.475) translateX(10px)',
            easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)'
        },
        {
            offset: 1,
            opacity: 1,
            transform: 'scale(1) translateX(0px)',
            easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)'
        }
    ],
    'zoom-in-right': [
        {
            offset: 0,
            opacity: 0,
            transform: 'scale(0.1) translateX(100vw)',
            easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)'
        },
        {
            offset: 0.6,
            opacity: 1,
            transform: 'scale(0.475) translateX(-10px)',
            easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)'
        },
        {
            offset: 1,
            opacity: 1,
            transform: 'scale(1) translateX(0px)',
            easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)'
        }
    ],
    'zoom-out': [
        {
            offset: 0,
            opacity: 1,
            transform: 'scale(1)'
        },
        {
            offset: 0.5,
            opacity: 0,
            transform: 'scale(0.3)'
        },
        {
            offset: 1,
            opacity: 0,
            transform: 'scale(0)'
        }
    ],
    'zoom-out-up': [
        {
            offset: 0,
            opacity: 1,
            transform: 'scale(1) translateY(0px)',
            easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)',
            transformOrigin: 'center'
        },
        {
            offset: 0.4,
            opacity: 1,
            transform: 'scale(0.475) translateY(60px)',
            easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)',
            transformOrigin: 'center'
        },
        {
            offset: 1,
            opacity: 0,
            transform: 'scale(0.1) translateY(-100vh)',
            easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
            transformOrigin: 'center bottom'
        }
    ],
    'zoom-out-down': [
        {
            offset: 0,
            opacity: 1,
            transform: 'scale(1) translateY(0px)',
            easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)',
            transformOrigin: 'center'
        },
        {
            offset: 0.4,
            opacity: 1,
            transform: 'scale(0.475) translateY(-60px)',
            easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)',
            transformOrigin: 'center'
        },
        {
            offset: 1,
            opacity: 0,
            transform: 'scale(0.1) translateY(100vh)',
            easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
            transformOrigin: 'center bottom'
        }
    ],
    'zoom-out-left': [
        {
            offset: 0,
            opacity: 1,
            transform: 'scale(1) translateX(0px)',
            easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)'
        },
        {
            offset: 0.4,
            opacity: 1,
            transform: 'scale(0.475) translateX(10px)',
            easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)'
        },
        {
            offset: 1,
            opacity: 0,
            transform: 'scale(0.1) translateX(-100vw)',
            easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)'
        }
    ],
    'zoom-out-right': [
        {
            offset: 0,
            opacity: 1,
            transform: 'scale(1) translateX(0px)',
            easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)'
        },
        {
            offset: 0.4,
            opacity: 1,
            transform: 'scale(0.475) translateX(-10px)',
            easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)'
        },
        {
            offset: 1,
            opacity: 0,
            transform: 'scale(0.1) translateX(100vw)',
            easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)'
        }
    ],
    hinge: [
        {
            offset: 0,
            transform: 'rotate(0)',
            opacity: 1,
            transformOrigin: 'top left',
            easing: 'ease-in-out'
        },
        {
            offset: 0.2,
            transform: 'rotateZ(80deg)',
            opacity: 1,
            transformOrigin: 'top left',
            easing: 'ease-in-out'
        },
        {
            offset: 0.4,
            transform: 'rotateZ(60deg)',
            opacity: 1,
            transformOrigin: 'top left',
            easing: 'ease-in-out'
        },
        {
            offset: 0.6,
            transform: 'rotateZ(80deg)',
            opacity: 1,
            transformOrigin: 'top left',
            easing: 'ease-in-out'
        },
        {
            offset: 0.8,
            transform: 'rotateZ(60deg)',
            opacity: 1,
            transformOrigin: 'top left',
            easing: 'ease-in-out'
        },
        {
            offset: 1,
            opacity: 0,
            transformOrigin: 'top left',
            easing: 'ease-in-out',
            transform: 'translateY(700px)'
        }
    ],
    'jack-in-the-box': [
        {
            offset: 0,
            opacity: 0,
            transform: 'scale(0.1) rotate(30deg)',
            transformOrigin: 'center bottom'
        },
        {
            offset: 0.5,
            opacity: 0.3,
            transform: 'rotate(-10deg)',
            transformOrigin: '50% 50% 0'
        },
        {
            offset: 0.7,
            opacity: 0.6,
            transform: 'rotate(3deg)',
            transformOrigin: '50% 50% 0'
        },
        {
            offset: 1,
            opacity: 1,
            transform: 'scale(1)',
            transformOrigin: '50% 50% 0'
        }
    ],
    'roll-in': [
        {
            offset: 0,
            opacity: 0,
            transform: 'translateX(-100%) rotateZ(-120deg)'
        },
        {
            offset: 1,
            opacity: 1,
            transform: 'translateX(0%)'
        }
    ],
    'roll-out': [
        {
            offset: 0,
            opacity: 1,
            transform: 'translateX(0%)'
        },
        {
            offset: 1,
            opacity: 0,
            transform: 'translateX(100%) rotateZ(120deg)'
        }
    ]
};

/*
The animations herein were forked from Animista (https://animista.net/) and are subject to the following license.

---

FreeBSD License

COPYRIGHT 2017 ANA TRAVAS

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
const animista = {
    'scale-up-center': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'scale(0.5)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'scale(1)'
        }
    ],
    'scale-up-top': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transformOrigin: '50% 0%',
            transform: 'scale(0.5)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transformOrigin: '50% 0%',
            transform: 'scale(1)'
        }
    ],
    'scale-up-tr': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transformOrigin: '100% 0%',
            transform: 'scale(0.5)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transformOrigin: '100% 0%',
            transform: 'scale(1)'
        }
    ],
    'scale-up-right': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transformOrigin: '100% 50%',
            transform: 'scale(0.5)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transformOrigin: '100% 50%',
            transform: 'scale(1)'
        }
    ],
    'scale-up-br': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transformOrigin: '100% 100%',
            transform: 'scale(0.5)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transformOrigin: '100% 100%',
            transform: 'scale(1)'
        }
    ],
    'scale-up-bottom': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transformOrigin: '50% 100%',
            transform: 'scale(0.5)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transformOrigin: '50% 100%',
            transform: 'scale(1)'
        }
    ],
    'scale-up-bl': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transformOrigin: '0% 100%',
            transform: 'scale(0.5)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transformOrigin: '0% 100%',
            transform: 'scale(1)'
        }
    ],
    'scale-up-left': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transformOrigin: '0% 50%',
            transform: 'scale(0.5)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transformOrigin: '0% 50%',
            transform: 'scale(1)'
        }
    ],
    'scale-up-tl': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transformOrigin: '0% 0%',
            transform: 'scale(0.5)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transformOrigin: '0% 0%',
            transform: 'scale(1)'
        }
    ],
    'scale-up-hor-center': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'scaleX(0.4)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'scaleX(1)'
        }
    ],
    'scale-up-hor-left': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transformOrigin: '0% 0%',
            transform: 'scaleX(0.4)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transformOrigin: '0% 0%',
            transform: 'scaleX(1)'
        }
    ],
    'scale-up-hor-right': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transformOrigin: '100% 100%',
            transform: 'scaleX(0.4)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transformOrigin: '100% 100%',
            transform: 'scaleX(1)'
        }
    ],
    'scale-up-ver-center': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'scaleY(0.4)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'scaleY(1)'
        }
    ],
    'scale-up-ver-top': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transformOrigin: '100% 0%',
            transform: 'scaleY(0.4)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transformOrigin: '100% 0%',
            transform: 'scaleY(1)'
        }
    ],
    'scale-up-ver-bottom': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transformOrigin: '0% 100%',
            transform: 'scaleY(0.4)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transformOrigin: '0% 100%',
            transform: 'scaleY(1)'
        }
    ],
    'scale-down-center': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'scale(1)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'scale(0.5)'
        }
    ],
    'scale-down-top': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '50% 0%',
            transform: 'scale(1)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '50% 0%',
            transform: 'scale(0.5)'
        }
    ],
    'scale-down-tr': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '100% 0%',
            transform: 'scale(1)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '100% 0%',
            transform: 'scale(0.5)'
        }
    ],
    'scale-down-right': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '100% 50%',
            transform: 'scale(1)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '100% 50%',
            transform: 'scale(0.5)'
        }
    ],
    'scale-down-br': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '100% 100%',
            transform: 'scale(1)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '100% 100%',
            transform: 'scale(0.5)'
        }
    ],
    'scale-down-bottom': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '50% 100%',
            transform: 'scale(1)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '50% 100%',
            transform: 'scale(0.5)'
        }
    ],
    'scale-down-bl': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '0% 100%',
            transform: 'scale(1)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '0% 100%',
            transform: 'scale(0.5)'
        }
    ],
    'scale-down-left': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '0% 50%',
            transform: 'scale(1)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '0% 50%',
            transform: 'scale(0.5)'
        }
    ],
    'scale-down-tl': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '0% 0%',
            transform: 'scale(1)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '0% 0%',
            transform: 'scale(0.5)'
        }
    ],
    'scale-down-hor-center': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'scaleX(1)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'scaleX(0.3)'
        }
    ],
    'scale-down-hor-left': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '0% 0%',
            transform: 'scaleX(1)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '0% 0%',
            transform: 'scaleX(0.3)'
        }
    ],
    'scale-down-hor-right': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '100% 100%',
            transform: 'scaleX(1)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '100% 100%',
            transform: 'scaleX(0.3)'
        }
    ],
    'scale-down-ver-center': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'scaleY(1)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'scaleY(0.3)'
        }
    ],
    'scale-down-ver-top': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '100% 0%',
            transform: 'scaleY(1)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '100% 0%',
            transform: 'scaleY(0.3)'
        }
    ],
    'scale-down-ver-bottom': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '0% 100%',
            transform: 'scaleY(1)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '0% 100%',
            transform: 'scaleY(0.3)'
        }
    ],
    'rotate-center': [
        {
            offset: 0,
            easing: 'ease-in-out',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotate(0)'
        },
        {
            offset: 1,
            easing: 'ease-in-out',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotate(360deg)'
        }
    ],
    'rotate-top': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transformOrigin: 'top',
            transform: 'rotate(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transformOrigin: 'top',
            transform: 'rotate(360deg)'
        }
    ],
    'rotate-tr': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transformOrigin: 'top right',
            transform: 'rotate(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transformOrigin: 'top right',
            transform: 'rotate(360deg)'
        }
    ],
    'rotate-right': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transformOrigin: 'right',
            transform: 'rotate(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transformOrigin: 'right',
            transform: 'rotate(360deg)'
        }
    ],
    'rotate-br': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transformOrigin: 'bottom right',
            transform: 'rotate(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transformOrigin: 'bottom right',
            transform: 'rotate(360deg)'
        }
    ],
    'rotate-bottom': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transformOrigin: 'bottom',
            transform: 'rotate(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transformOrigin: 'bottom',
            transform: 'rotate(360deg)'
        }
    ],
    'rotate-bl': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transformOrigin: 'bottom left',
            transform: 'rotate(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transformOrigin: 'bottom left',
            transform: 'rotate(360deg)'
        }
    ],
    'rotate-left': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transformOrigin: 'left',
            transform: 'rotate(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transformOrigin: 'left',
            transform: 'rotate(360deg)'
        }
    ],
    'rotate-tl': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transformOrigin: 'top left',
            transform: 'rotate(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transformOrigin: 'top left',
            transform: 'rotate(360deg)'
        }
    ],
    'rotate-hor-center': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotateX(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotateX(-360deg)'
        }
    ],
    'rotate-hor-top': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
            fillMode: 'both',
            transformOrigin: 'top',
            transform: 'rotateX(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
            fillMode: 'both',
            transformOrigin: 'top',
            transform: 'rotateX(-360deg)'
        }
    ],
    'rotate-hor-bottom': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
            fillMode: 'both',
            transformOrigin: 'bottom',
            transform: 'rotateX(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
            fillMode: 'both',
            transformOrigin: 'bottom',
            transform: 'rotateX(360deg)'
        }
    ],
    'rotate-vert-center': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotateY(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotateY(360deg)'
        }
    ],
    'rotate-vert-left': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
            fillMode: 'both',
            transformOrigin: 'left',
            transform: 'rotateY(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
            fillMode: 'both',
            transformOrigin: 'left',
            transform: 'rotateY(360deg)'
        }
    ],
    'rotate-vert-right': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
            fillMode: 'both',
            transformOrigin: 'right',
            transform: 'rotateY(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
            fillMode: 'both',
            transformOrigin: 'right',
            transform: 'rotateY(-360deg)'
        }
    ],
    'rotate-diagonal-1': [
        {
            offset: 0,
            easing: 'linear',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotate3d(1, 1, 0, 0deg)'
        },
        {
            offset: 0.5,
            easing: 'linear',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotate3d(1, 1, 0, -180deg)'
        },
        {
            offset: 1,
            easing: 'linear',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotate3d(1, 1, 0, -360deg)'
        }
    ],
    'rotate-diagonal-2': [
        {
            offset: 0,
            easing: 'linear',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotate3d(-1, 1, 0, 0deg)'
        },
        {
            offset: 0.5,
            easing: 'linear',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotate3d(-1, 1, 0, 180deg)'
        },
        {
            offset: 1,
            easing: 'linear',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotate3d(-1, 1, 0, 360deg)'
        }
    ],
    'rotate-diagonal-tr': [
        {
            offset: 0,
            easing: 'linear',
            fillMode: 'both',
            transformOrigin: '100% 0%',
            transform: 'rotate3d(1, 1, 0, 0deg)'
        },
        {
            offset: 0.5,
            easing: 'linear',
            fillMode: 'both',
            transformOrigin: '100% 0%',
            transform: 'rotate3d(1, 1, 0, -180deg)'
        },
        {
            offset: 1,
            easing: 'linear',
            fillMode: 'both',
            transformOrigin: '100% 0%',
            transform: 'rotate3d(1, 1, 0, -360deg)'
        }
    ],
    'rotate-diagonal-br': [
        {
            offset: 0,
            easing: 'linear',
            fillMode: 'both',
            transformOrigin: '100% 100%',
            transform: 'rotate3d(-1, 1, 0, 0deg)'
        },
        {
            offset: 0.5,
            easing: 'linear',
            fillMode: 'both',
            transformOrigin: '100% 100%',
            transform: 'rotate3d(-1, 1, 0, -180deg)'
        },
        {
            offset: 1,
            easing: 'linear',
            fillMode: 'both',
            transformOrigin: '100% 100%',
            transform: 'rotate3d(-1, 1, 0, -360deg)'
        }
    ],
    'rotate-diagonal-bl': [
        {
            offset: 0,
            easing: 'linear',
            fillMode: 'both',
            transformOrigin: '0% 100%',
            transform: 'rotate3d(1, 1, 0, 0deg)'
        },
        {
            offset: 0.5,
            easing: 'linear',
            fillMode: 'both',
            transformOrigin: '0% 100%',
            transform: 'rotate3d(1, 1, 0, 180deg)'
        },
        {
            offset: 1,
            easing: 'linear',
            fillMode: 'both',
            transformOrigin: '0% 100%',
            transform: 'rotate3d(1, 1, 0, 360deg)'
        }
    ],
    'rotate-diagonal-tl': [
        {
            offset: 0,
            easing: 'linear',
            fillMode: 'both',
            transformOrigin: '0% 0%',
            transform: 'rotate3d(-1, 1, 0, 0deg)'
        },
        {
            offset: 0.5,
            easing: 'linear',
            fillMode: 'both',
            transformOrigin: '0% 0%',
            transform: 'rotate3d(-1, 1, 0, 180deg)'
        },
        {
            offset: 1,
            easing: 'linear',
            fillMode: 'both',
            transformOrigin: '0% 0%',
            transform: 'rotate3d(-1, 1, 0, 360deg)'
        }
    ],
    'rotate-scale-up': [
        {
            offset: 0,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(1) rotateZ(0)'
        },
        {
            offset: 0.5,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(2) rotateZ(180deg)'
        },
        {
            offset: 1,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(1) rotateZ(360deg)'
        }
    ],
    'rotate-scale-down': [
        {
            offset: 0,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(1) rotateZ(0)'
        },
        {
            offset: 0.5,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(0.5) rotateZ(180deg)'
        },
        {
            offset: 1,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(1) rotateZ(360deg)'
        }
    ],
    'rotate-scale-up-hor': [
        {
            offset: 0,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(1) rotateX(0)'
        },
        {
            offset: 0.5,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(2) rotateX(-180deg)'
        },
        {
            offset: 1,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(1) rotateX(-360deg)'
        }
    ],
    'rotate-scale-down-hor': [
        {
            offset: 0,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(1) rotateX(0)'
        },
        {
            offset: 0.5,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(0.5) rotateX(-180deg)'
        },
        {
            offset: 1,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(1) rotateX(-360deg)'
        }
    ],
    'rotate-scale-up-ver': [
        {
            offset: 0,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(1) rotateY(0)'
        },
        {
            offset: 0.5,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(2) rotateY(180deg)'
        },
        {
            offset: 1,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(1) rotateY(360deg)'
        }
    ],
    'rotate-scale-down-ver': [
        {
            offset: 0,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(1) rotateY(0)'
        },
        {
            offset: 0.5,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(0.5) rotateY(180deg)'
        },
        {
            offset: 1,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(1) rotateY(360deg)'
        }
    ],
    'rotate-scale-up-diag-1': [
        {
            offset: 0,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(1) rotate3d(1, 1, 0, 0deg)'
        },
        {
            offset: 0.5,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(2) rotate3d(1, 1, 0, -180deg)'
        },
        {
            offset: 1,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(1) rotate3d(1, 1, 0, -360deg)'
        }
    ],
    'rotate-scale-down-diag-1': [
        {
            offset: 0,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(1) rotate3d(1, 1, 0, 0deg)'
        },
        {
            offset: 0.5,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(0.5) rotate3d(1, 1, 0, -180deg)'
        },
        {
            offset: 1,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(1) rotate3d(1, 1, 0, -360deg)'
        }
    ],
    'rotate-scale-up-diag-2': [
        {
            offset: 0,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(1) rotate3d(-1, 1, 0, 0deg)'
        },
        {
            offset: 0.5,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(2) rotate3d(-1, 1, 0, 180deg)'
        },
        {
            offset: 1,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(1) rotate3d(-1, 1, 0, 360deg)'
        }
    ],
    'rotate-scale-down-diag-2': [
        {
            offset: 0,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(1) rotate3d(-1, 1, 0, 0deg)'
        },
        {
            offset: 0.5,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(0.5) rotate3d(-1, 1, 0, 180deg)'
        },
        {
            offset: 1,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(1) rotate3d(-1, 1, 0, 360deg)'
        }
    ],
    'rotate-90-cw': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotate(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotate(90deg)'
        }
    ],
    'rotate-90-ccw': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotate(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotate(-90deg)'
        }
    ],
    'rotate-90-top-cw': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'top',
            transform: 'rotate(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'top',
            transform: 'rotate(90deg)'
        }
    ],
    'rotate-90-top-ccw': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'top',
            transform: 'rotate(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'top',
            transform: 'rotate(-90deg)'
        }
    ],
    'rotate-90-tr-cw': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'top right',
            transform: 'rotate(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'top right',
            transform: 'rotate(90deg)'
        }
    ],
    'rotate-90-tr-ccw': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'top right',
            transform: 'rotate(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'top right',
            transform: 'rotate(-90deg)'
        }
    ],
    'rotate-90-right-cw': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'right',
            transform: 'rotate(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'right',
            transform: 'rotate(90deg)'
        }
    ],
    'rotate-90-right-ccw': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'right',
            transform: 'rotate(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'right',
            transform: 'rotate(-90deg)'
        }
    ],
    'rotate-90-br-cw': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '100% 100%',
            transform: 'rotate(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '100% 100%',
            transform: 'rotate(90deg)'
        }
    ],
    'rotate-90-br-ccw': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '100% 100%',
            transform: 'rotate(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '100% 100%',
            transform: 'rotate(-90deg)'
        }
    ],
    'rotate-90-bottom-cw': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'bottom',
            transform: 'rotate(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'bottom',
            transform: 'rotate(90deg)'
        }
    ],
    'rotate-90-bottom-ccw': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'bottom',
            transform: 'rotate(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'bottom',
            transform: 'rotate(-90deg)'
        }
    ],
    'rotate-90-bl-cw': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '0% 100%',
            transform: 'rotate(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '0% 100%',
            transform: 'rotate(90deg)'
        }
    ],
    'rotate-90-bl-ccw': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '0% 100%',
            transform: 'rotate(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '0% 100%',
            transform: 'rotate(-90deg)'
        }
    ],
    'rotate-90-left-cw': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'left',
            transform: 'rotate(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'left',
            transform: 'rotate(90deg)'
        }
    ],
    'rotate-90-left-ccw': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'left',
            transform: 'rotate(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'left',
            transform: 'rotate(-90deg)'
        }
    ],
    'rotate-90-tl-cw': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '0% 0%',
            transform: 'rotate(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '0% 0%',
            transform: 'rotate(90deg)'
        }
    ],
    'rotate-90-tl-ccw': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '0% 0%',
            transform: 'rotate(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '0% 0%',
            transform: 'rotate(-90deg)'
        }
    ],
    'rotate-90-horizontal-fwd': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotateX(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotateX(90deg)'
        }
    ],
    'rotate-90-horizontal-bck': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotateX(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotateX(-90deg)'
        }
    ],
    'rotate-90-vertical-fwd': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotateY(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotateY(90deg)'
        }
    ],
    'rotate-90-vertical-bck': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotateY(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotateY(-90deg)'
        }
    ],
    'flip-horizontal-bottom': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotateX(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotateX(-180deg)'
        }
    ],
    'flip-horizontal-top': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotateX(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotateX(180deg)'
        }
    ],
    'flip-horizontal-bck': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateZ(0) rotateX(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateZ(-260px) rotateX(180deg)'
        }
    ],
    'flip-horizontal-fwd': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateZ(0) rotateX(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateZ(160px) rotateX(-180deg)'
        }
    ],
    'flip-vertical-right': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotateY(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotateY(180deg)'
        }
    ],
    'flip-vertical-left': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotateY(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotateY(-180deg)'
        }
    ],
    'flip-vertical-bck': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateZ(0) rotateY(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateZ(-260px) rotateY(-180deg)'
        }
    ],
    'flip-vertical-fwd': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateZ(0) rotateY(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateZ(160px) rotateY(180deg)'
        }
    ],
    'flip-diagonal-1-tr': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate3d(1, 1, 0, 0deg)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate3d(1, 1, 0, 180deg)'
        }
    ],
    'flip-diagonal-1-bl': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate3d(1, 1, 0, 0deg)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate3d(1, 1, 0, -180deg)'
        }
    ],
    'flip-diagonal-1-bck': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateZ(0) rotate3d(1, 1, 0, 0deg)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateZ(-260px) rotate3d(1, 1, 0, -180deg)'
        }
    ],
    'flip-diagonal-1-fwd': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateZ(0) rotate3d(1, 1, 0, 0deg)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateZ(160px) rotate3d(1, 1, 0, 180deg)'
        }
    ],
    'flip-diagonal-2-br': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate3d(-1, 1, 0, 0deg)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate3d(-1, 1, 0, 180deg)'
        }
    ],
    'flip-diagonal-2-tl': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate3d(-1, 1, 0, 0deg)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate3d(-1, 1, 0, -180deg)'
        }
    ],
    'flip-diagonal-2-bck': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateZ(0) rotate3d(-1, 1, 0, 0deg)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateZ(-260px) rotate3d(-1, 1, 0, -180deg)'
        }
    ],
    'flip-diagonal-2-fwd': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateZ(0) rotate3d(-1, 1, 0, 0deg)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateZ(160px) rotate3d(-1, 1, 0, 180deg)'
        }
    ],
    'flip-2-hor-top-1': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateY(0) rotateX(0)',
            transformOrigin: '50% 0%'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateY(-100%) rotateX(-180deg)',
            transformOrigin: '50% 100%'
        }
    ],
    'flip-2-hor-top-2': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateY(0) rotateX(0)',
            transformOrigin: '50% 0%'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateY(-100%) rotateX(180deg)',
            transformOrigin: '50% 100%'
        }
    ],
    'flip-2-hor-top-bck': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateY(0) translateZ(0) rotateX(0)',
            transformOrigin: '50% 0%'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateY(-100%) translateZ(-260px) rotateX(180deg)',
            transformOrigin: '50% 100%'
        }
    ],
    'flip-2-hor-top-fwd': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateY(0) translateZ(0) rotateX(0)',
            transformOrigin: '50% 0%'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateY(-100%) translateZ(160px) rotateX(-180deg)',
            transformOrigin: '50% 100%'
        }
    ],
    'flip-2-ver-right-1': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateX(0) rotateY(0)',
            transformOrigin: '100% 50%'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateX(100%) rotateY(-180deg)',
            transformOrigin: '0% 50%'
        }
    ],
    'flip-2-ver-right-2': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateX(0) rotateY(0)',
            transformOrigin: '100% 50%'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateX(100%) rotateY(180deg)',
            transformOrigin: '0% 50%'
        }
    ],
    'flip-2-ver-right-bck': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateX(0) translateZ(0) rotateY(0)',
            transformOrigin: '100% 50%'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateX(100%) translateZ(-260px) rotateY(180deg)',
            transformOrigin: '0% 50%'
        }
    ],
    'flip-2-ver-right-fwd': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateX(0) translateZ(0) rotateY(0)',
            transformOrigin: '100% 50%'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateX(100%) translateZ(160px) rotateY(-180deg)',
            transformOrigin: '0% 50%'
        }
    ],
    'flip-2-hor-bottom-1': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateY(0) rotateX(0)',
            transformOrigin: '50% 100%'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateY(100%) rotateX(180deg)',
            transformOrigin: '50% 0%'
        }
    ],
    'flip-2-hor-bottom-2': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateY(0) rotateX(0)',
            transformOrigin: '50% 100%'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateY(100%) rotateX(-180deg)',
            transformOrigin: '50% 0%'
        }
    ],
    'flip-2-hor-bottom-bck': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateY(0) translateZ(0) rotateX(0)',
            transformOrigin: '50% 100%'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateY(100%) translateZ(-260px) rotateX(-180deg)',
            transformOrigin: '50% 0%'
        }
    ],
    'flip-2-hor-bottom-fwd': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateY(0) translateZ(0) rotateX(0)',
            transformOrigin: '50% 100%'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateY(100%) translateZ(160px) rotateX(180deg)',
            transformOrigin: '50% 0%'
        }
    ],
    'flip-2-ver-left-1': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateX(0) rotateY(0)',
            transformOrigin: '0% 50%'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateX(-100%) rotateY(180deg)',
            transformOrigin: '100% 0%'
        }
    ],
    'flip-2-ver-left-2': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateX(0) rotateY(0)',
            transformOrigin: '0% 50%'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateX(-100%) rotateY(-180deg)',
            transformOrigin: '100% 0%'
        }
    ],
    'flip-2-ver-left-bck': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateX(0) translateZ(0) rotateY(0)',
            transformOrigin: '0% 50%'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateX(-100%) translateZ(-260px) rotateY(-180deg)',
            transformOrigin: '100% 0%'
        }
    ],
    'flip-2-ver-left-fwd': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateX(0) translateZ(0) rotateY(0)',
            transformOrigin: '0% 50%'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateX(-100%) translateZ(160px) rotateY(180deg)',
            transformOrigin: '100% 0%'
        }
    ],
    'flip-scale-up-hor': [
        {
            offset: 0,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(1) rotateX(0)'
        },
        {
            offset: 0.5,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(2.5) rotateX(-90deg)'
        },
        {
            offset: 1,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(1) rotateX(-180deg)'
        }
    ],
    'flip-scale-down-hor': [
        {
            offset: 0,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(1) rotateX(0)'
        },
        {
            offset: 0.5,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(0.4) rotateX(90deg)'
        },
        {
            offset: 1,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(1) rotateX(180deg)'
        }
    ],
    'flip-scale-up-ver': [
        {
            offset: 0,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(1) rotateY(0)'
        },
        {
            offset: 0.5,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(2.5) rotateY(90deg)'
        },
        {
            offset: 1,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(1) rotateY(180deg)'
        }
    ],
    'flip-scale-down-ver': [
        {
            offset: 0,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(1) rotateY(0)'
        },
        {
            offset: 0.5,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(0.4) rotateY(-90deg)'
        },
        {
            offset: 1,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(1) rotateY(-180deg)'
        }
    ],
    'flip-scale-up-diag-1': [
        {
            offset: 0,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(1) rotate3d(1, 1, 0, 0deg)'
        },
        {
            offset: 0.5,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(2.5) rotate3d(1, 1, 0, 90deg)'
        },
        {
            offset: 1,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(1) rotate3d(1, 1, 0, 180deg)'
        }
    ],
    'flip-scale-down-diag-1': [
        {
            offset: 0,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(1) rotate3d(1, 1, 0, 0deg)'
        },
        {
            offset: 0.5,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(0.4) rotate3d(1, 1, 0, -90deg)'
        },
        {
            offset: 1,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(1) rotate3d(1, 1, 0, -180deg)'
        }
    ],
    'flip-scale-up-diag-2': [
        {
            offset: 0,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(1) rotate3d(-1, 1, 0, 0deg)'
        },
        {
            offset: 0.5,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(2.5) rotate3d(-1, 1, 0, 90deg)'
        },
        {
            offset: 1,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(1) rotate3d(-1, 1, 0, 180deg)'
        }
    ],
    'flip-scale-down-diag-2': [
        {
            offset: 0,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(1) rotate3d(-1, 1, 0, 0deg)'
        },
        {
            offset: 0.5,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(0.4) rotate3d(-1, 1, 0, -90deg)'
        },
        {
            offset: 1,
            easing: 'linear',
            fillMode: 'both',
            transform: 'scale(1) rotate3d(-1, 1, 0, -180deg)'
        }
    ],
    'flip-scale-2-hor-top': [
        {
            offset: 0,
            easing: 'linear',
            fillMode: 'both',
            transform: 'translateY(0) rotateX(0) scale(1)',
            transformOrigin: '50% 0%'
        },
        {
            offset: 0.5,
            easing: 'linear',
            fillMode: 'both',
            transform: 'translateY(-50%) rotateX(-90deg) scale(2)',
            transformOrigin: '50% 50%'
        },
        {
            offset: 1,
            easing: 'linear',
            fillMode: 'both',
            transform: 'translateY(-100%) rotateX(-180deg) scale(1)',
            transformOrigin: '50% 100%'
        }
    ],
    'flip-scale-2-ver-right': [
        {
            offset: 0,
            easing: 'linear',
            fillMode: 'both',
            transform: 'translateX(0) rotateY(0) scale(1)',
            transformOrigin: '100% 50%'
        },
        {
            offset: 0.5,
            easing: 'linear',
            fillMode: 'both',
            transform: 'translateX(50%) rotateY(-90deg) scale(2)',
            transformOrigin: '50% 50%'
        },
        {
            offset: 1,
            easing: 'linear',
            fillMode: 'both',
            transform: 'translateX(100%) rotateY(-180deg) scale(1)',
            transformOrigin: '0% 50%'
        }
    ],
    'flip-scale-2-hor-bottom': [
        {
            offset: 0,
            easing: 'linear',
            fillMode: 'both',
            transform: 'translateY(0) rotateX(0) scale(1)',
            transformOrigin: '50% 100%'
        },
        {
            offset: 0.5,
            easing: 'linear',
            fillMode: 'both',
            transform: 'translateY(50%) rotateX(90deg) scale(2)',
            transformOrigin: '50% 50%'
        },
        {
            offset: 1,
            easing: 'linear',
            fillMode: 'both',
            transform: 'translateY(100%) rotateX(180deg) scale(1)',
            transformOrigin: '50% 0%'
        }
    ],
    'flip-scale-2-ver-left': [
        {
            offset: 0,
            easing: 'linear',
            fillMode: 'both',
            transform: 'translateX(0) rotateY(0) scale(1)',
            transformOrigin: '0% 50%'
        },
        {
            offset: 0.5,
            easing: 'linear',
            fillMode: 'both',
            transform: 'translateX(-50%) rotateY(90deg) scale(2)',
            transformOrigin: '50% 50%'
        },
        {
            offset: 1,
            easing: 'linear',
            fillMode: 'both',
            transform: 'translateX(-100%) rotateY(180deg) scale(1)',
            transformOrigin: '100% 50%'
        }
    ],
    'swing-top-fwd': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotateX(0)',
            transformOrigin: 'top'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotateX(180deg)',
            transformOrigin: 'top'
        }
    ],
    'swing-top-bck': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotateX(0)',
            transformOrigin: 'top'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotateX(-180deg)',
            transformOrigin: 'top'
        }
    ],
    'swing-top-right-fwd': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotate3d(1, 1, 0, 0deg)',
            transformOrigin: '100% 0%'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotate3d(1, 1, 0, 180deg)',
            transformOrigin: '100% 0%'
        }
    ],
    'swing-top-right-bck': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotate3d(1, 1, 0, 0deg)',
            transformOrigin: '100% 0%'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotate3d(1, 1, 0, -180deg)',
            transformOrigin: '100% 0%'
        }
    ],
    'swing-right-fwd': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotateY(0)',
            transformOrigin: 'right'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotateY(180deg)',
            transformOrigin: 'right'
        }
    ],
    'swing-right-bck': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotateY(0)',
            transformOrigin: 'right'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotateY(-180deg)',
            transformOrigin: 'right'
        }
    ],
    'swing-bottom-right-fwd': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotate3d(-1, 1, 0, 0deg)',
            transformOrigin: '100% 100%'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotate3d(-1, 1, 0, 180deg)',
            transformOrigin: '100% 100%'
        }
    ],
    'swing-bottom-right-bck': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotate3d(-1, 1, 0, 0deg)',
            transformOrigin: '100% 100%'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotate3d(-1, 1, 0, -180deg)',
            transformOrigin: '100% 100%'
        }
    ],
    'swing-bottom-fwd': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotateX(0)',
            transformOrigin: 'bottom'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotateX(-180deg)',
            transformOrigin: 'bottom'
        }
    ],
    'swing-bottom-bck': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotateX(0)',
            transformOrigin: 'bottom'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotateX(180deg)',
            transformOrigin: 'bottom'
        }
    ],
    'swing-bottom-left-fwd': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotate3d(1, 1, 0, 0deg)',
            transformOrigin: '0% 100%'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotate3d(1, 1, 0, -180deg)',
            transformOrigin: '0% 100%'
        }
    ],
    'swing-bottom-left-bck': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotate3d(1, 1, 0, 0deg)',
            transformOrigin: '0% 100%'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotate3d(1, 1, 0, 180deg)',
            transformOrigin: '0% 100%'
        }
    ],
    'swing-left-fwd': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotateY(0)',
            transformOrigin: 'left bottom'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotateY(-180deg)',
            transformOrigin: 'left bottom'
        }
    ],
    'swing-left-bck': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotateY(0)',
            transformOrigin: 'left bottom'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotateY(180deg)',
            transformOrigin: 'left bottom'
        }
    ],
    'swing-top-left-fwd': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotate3d(-1, 1, 0, 0deg)',
            transformOrigin: '0% 0%'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotate3d(-1, 1, 0, -180deg)',
            transformOrigin: '0% 0%'
        }
    ],
    'swing-top-left-bck': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotate3d(-1, 1, 0, 0deg)',
            transformOrigin: '0% 0%'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotate3d(-1, 1, 0, 180deg)',
            transformOrigin: '0% 0%'
        }
    ],
    'slide-top': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateY(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateY(-100px)'
        }
    ],
    'slide-tr': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateY(0) translateX(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateY(-100px) translateX(100px)'
        }
    ],
    'slide-right': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateX(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateX(100px)'
        }
    ],
    'slide-br': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateY(0) translateX(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateY(100px) translateX(100px)'
        }
    ],
    'slide-bottom': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateY(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateY(100px)'
        }
    ],
    'slide-bl': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateY(0) translateX(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateY(100px) translateX(-100px)'
        }
    ],
    'slide-left': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateX(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateX(-100px)'
        }
    ],
    'slide-tl': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateY(0) translateX(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateY(-100px) translateX(-100px)'
        }
    ],
    'slide-bck-center': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
            fillMode: 'both',
            transform: 'translateZ(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
            fillMode: 'both',
            transform: 'translateZ(-400px)'
        }
    ],
    'slide-bck-top': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
            fillMode: 'both',
            transform: 'translateZ(0) translateY(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
            fillMode: 'both',
            transform: 'translateZ(-400px) translateY(-200px)'
        }
    ],
    'slide-bck-tr': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
            fillMode: 'both',
            transform: 'translateZ(0) translateY(0) translateX(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
            fillMode: 'both',
            transform: 'translateZ(-400px) translateY(-200px) translateX(200px)'
        }
    ],
    'slide-bck-right': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
            fillMode: 'both',
            transform: 'translateZ(0) translateX(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
            fillMode: 'both',
            transform: 'translateZ(-400px) translateX(200px)'
        }
    ],
    'slide-bck-br': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
            fillMode: 'both',
            transform: 'translateZ(0) translateY(0) translateX(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
            fillMode: 'both',
            transform: 'translateZ(-400px) translateY(200px) translateX(200px)'
        }
    ],
    'slide-bck-bottom': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
            fillMode: 'both',
            transform: 'translateZ(0) translateY(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
            fillMode: 'both',
            transform: 'translateZ(-400px) translateY(200px)'
        }
    ],
    'slide-bck-bl': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
            fillMode: 'both',
            transform: 'translateZ(0) translateY(0) translateX(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
            fillMode: 'both',
            transform: 'translateZ(-400px) translateY(200px) translateX(-200px)'
        }
    ],
    'slide-bck-left': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
            fillMode: 'both',
            transform: 'translateZ(0) translateX(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
            fillMode: 'both',
            transform: 'translateZ(-400px) translateX(-200px)'
        }
    ],
    'slide-bck-tl': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
            fillMode: 'both',
            transform: 'translateZ(0) translateY(0) translateX(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
            fillMode: 'both',
            transform: 'translateZ(-400px) translateY(-200px) translateX(-200px)'
        }
    ],
    'slide-fwd-center': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(160px)'
        }
    ],
    'slide-fwd-top': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(0) translateY(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(160px) translateY(-100px)'
        }
    ],
    'slide-fwd-tr': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(0) translateY(0) translateX(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(160px) translateY(-100px) translateX(100px)'
        }
    ],
    'slide-fwd-right': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(0) translateX(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(160px) translateX(100px)'
        }
    ],
    'slide-fwd-br': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(0) translateY(0) translateX(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(160px) translateY(100px) translateX(100px)'
        }
    ],
    'slide-fwd-bottom': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(0) translateY(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(160px) translateY(100px)'
        }
    ],
    'slide-fwd-bl': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(0) translateY(0) translateX(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(160px) translateY(100px) translateX(-100px)'
        }
    ],
    'slide-fwd-left': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(0) translateX(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(160px) translateX(-100px)'
        }
    ],
    'slide-fwd-tl': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(0) translateY(0) translateX(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(160px) translateY(-100px) translateX(-100px)'
        }
    ],
    'slide-rotate-hor-top': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateY(0) rotateX(0deg)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateY(-150px) rotateX(-90deg)'
        }
    ],
    'slide-rotate-hor-t-bck': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateY(0) translateZ(0) rotateX(0deg)',
            transformOrigin: 'top center'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateY(-150px) translateZ(-230px) rotateX(-90deg)',
            transformOrigin: 'top center'
        }
    ],
    'slide-rotate-hor-t-fwd': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateY(0) translateZ(0) rotateX(0deg)',
            transformOrigin: 'bottom center'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateY(-150px) translateZ(130px) rotateX(-90deg)',
            transformOrigin: 'bottom center'
        }
    ],
    'slide-rotate-ver-right': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateX(0) rotateY(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateX(150px) rotateY(-90deg)'
        }
    ],
    'slide-rotate-ver-r-bck': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateX(0) translateZ(0) rotateY(0)',
            transformOrigin: 'center right'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateX(150px) translateZ(-230px) rotateY(-90deg)',
            transformOrigin: 'center right'
        }
    ],
    'slide-rotate-ver-r-fwd': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateX(0) translateZ(0) rotateY(0)',
            transformOrigin: 'center left'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateX(150px) translateZ(130px) rotateY(-90deg)',
            transformOrigin: 'center left'
        }
    ],
    'slide-rotate-hor-bottom': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateY(0) rotateX(0deg)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateY(150px) rotateX(90deg)'
        }
    ],
    'slide-rotate-hor-b-bck': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateY(0) translateZ(0) rotateX(0deg)',
            transformOrigin: 'bottom center'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateY(150px) translateZ(-230px) rotateX(90deg)',
            transformOrigin: 'bottom center'
        }
    ],
    'slide-rotate-hor-b-fwd': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateY(0) translateZ(0) rotateX(0deg)',
            transformOrigin: 'top center'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateY(150px) translateZ(130px) rotateX(90deg)',
            transformOrigin: 'top center'
        }
    ],
    'slide-rotate-ver-left': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateX(0) rotateY(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateX(-150px) rotateY(90deg)'
        }
    ],
    'slide-rotate-ver-l-bck': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateX(0) translateZ(0) rotateY(0)',
            transformOrigin: 'center left'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateX(-150px) translateZ(-230px) rotateY(90deg)',
            transformOrigin: 'center left'
        }
    ],
    'slide-rotate-ver-l-fwd': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateX(0) translateZ(0) rotateY(0)',
            transformOrigin: 'center right'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateX(-150px) translateZ(130px) rotateY(90deg)',
            transformOrigin: 'center right'
        }
    ],
    'shadow-drop-center': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: '0 0 20px 0px rgba(0, 0, 0, 0.35)'
        }
    ],
    'shadow-drop-top': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: '0 -12px 20px -12px rgba(0, 0, 0, 0.35)'
        }
    ],
    'shadow-drop-right': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: '12px 0 20px -12px rgba(0, 0, 0, 0.35)'
        }
    ],
    'shadow-drop-bottom': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: '0 12px 20px -12px rgba(0, 0, 0, 0.35)'
        }
    ],
    'shadow-drop-left': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: '-12px 0 20px -12px rgba(0, 0, 0, 0.35)'
        }
    ],
    'shadow-drop-lr': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: '0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: '-12px 0 20px -12px rgba(0, 0, 0, 0.35), 12px 0 20px -12px rgba(0, 0, 0, 0.35)'
        }
    ],
    'shadow-drop-tb': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: '0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: '0 -12px 20px -12px rgba(0, 0, 0, 0.35), 0 12px 20px -12px rgba(0, 0, 0, 0.35)'
        }
    ],
    'shadow-drop-tr': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: '12px -12px 20px -12px rgba(0, 0, 0, 0.35)'
        }
    ],
    'shadow-drop-br': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: '12px 12px 20px -12px rgba(0, 0, 0, 0.35)'
        }
    ],
    'shadow-drop-bl': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: '-12px 12px 20px -12px rgba(0, 0, 0, 0.35)'
        }
    ],
    'shadow-drop-tl': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: '-12px -12px 20px -12px rgba(0, 0, 0, 0.35)'
        }
    ],
    'shadow-drop-2-center': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)',
            transform: 'translateZ(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: '0 0 20px 0px rgba(0, 0, 0, 0.35)',
            transform: 'translateZ(50px)'
        }
    ],
    'shadow-drop-2-top': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)',
            transform: 'translateZ(0) translateY(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: '0 -12px 20px -12px rgba(0, 0, 0, 0.35)',
            transform: 'translateZ(50px) translateY(12px)'
        }
    ],
    'shadow-drop-2-right': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)',
            transform: 'translateZ(0) translateY(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: '12px 0 20px -12px rgba(0, 0, 0, 0.35)',
            transform: 'translateZ(50px) translateX(-12px)'
        }
    ],
    'shadow-drop-2-bottom': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)',
            transform: 'translateZ(0) translateY(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: '0 12px 20px -12px rgba(0, 0, 0, 0.35)',
            transform: 'translateZ(50px) translateY(-12px)'
        }
    ],
    'shadow-drop-2-left': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)',
            transform: 'translateZ(0) translateX(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: '-12px 0 20px -12px rgba(0, 0, 0, 0.35)',
            transform: 'translateZ(50px) translateX(12px)'
        }
    ],
    'shadow-drop-2-lr': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: '0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0)',
            transform: 'translateZ(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: '-12px 0 20px -12px rgba(0, 0, 0, 0.35), 12px 0 20px -12px rgba(0, 0, 0, 0.35)',
            transform: 'translateZ(50px)'
        }
    ],
    'shadow-drop-2-tb': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: '0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0)',
            transform: 'translateZ(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: '0 -12px 20px -12px rgba(0, 0, 0, 0.35), 0 12px 20px -12px rgba(0, 0, 0, 0.35)',
            transform: 'translateZ(50px)'
        }
    ],
    'shadow-drop-2-tr': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)',
            transform: 'translateZ(0) translateX(0) translateY(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: '12px -12px 20px -12px rgba(0, 0, 0, 0.35)',
            transform: 'translateZ(50px) translateX(-12px) translateY(12px)'
        }
    ],
    'shadow-drop-2-br': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)',
            transform: 'translateZ(0) translateX(0) translateY(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: '12px 12px 20px -12px rgba(0, 0, 0, 0.35)',
            transform: 'translateZ(50px) translateX(-12px) translateY(-12px)'
        }
    ],
    'shadow-drop-2-bl': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)',
            transform: 'translateZ(0) translateX(0) translateY(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: '-12px 12px 20px -12px rgba(0, 0, 0, 0.35)',
            transform: 'translateZ(50px) translateX(12px) translateY(-12px)'
        }
    ],
    'shadow-drop-2-tl': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)',
            transform: 'translateZ(0) translateX(0) translateY(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: '-12px -12px 20px -12px rgba(0, 0, 0, 0.35)',
            transform: 'translateZ(50px) translateX(12px) translateY(12px)'
        }
    ],
    'shadow-pop-tr': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
            fillMode: 'both',
            boxShadow: '0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e',
            transform: 'translateX(0) translateY(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
            fillMode: 'both',
            boxShadow: '1px -1px #3e3e3e, 2px -2px #3e3e3e, 3px -3px #3e3e3e, 4px -4px #3e3e3e, 5px -5px #3e3e3e, 6px -6px #3e3e3e, 7px -7px #3e3e3e, 8px -8px #3e3e3e',
            transform: 'translateX(-8px) translateY(8px)'
        }
    ],
    'shadow-pop-br': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
            fillMode: 'both',
            boxShadow: '0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e',
            transform: 'translateX(0) translateY(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
            fillMode: 'both',
            boxShadow: '1px 1px #3e3e3e, 2px 2px #3e3e3e, 3px 3px #3e3e3e, 4px 4px #3e3e3e, 5px 5px #3e3e3e, 6px 6px #3e3e3e, 7px 7px #3e3e3e, 8px 8px #3e3e3e',
            transform: 'translateX(-8px) translateY(-8px)'
        }
    ],
    'shadow-pop-bl': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
            fillMode: 'both',
            boxShadow: '0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e',
            transform: 'translateX(0) translateY(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
            fillMode: 'both',
            boxShadow: '-1px 1px #3e3e3e, -2px 2px #3e3e3e, -3px 3px #3e3e3e, -4px 4px #3e3e3e, -5px 5px #3e3e3e, -6px 6px #3e3e3e, -7px 7px #3e3e3e, -8px 8px #3e3e3e',
            transform: 'translateX(8px) translateY(-8px)'
        }
    ],
    'shadow-pop-tl': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
            fillMode: 'both',
            boxShadow: '0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e',
            transform: 'translateX(0) translateY(0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
            fillMode: 'both',
            boxShadow: '-1px -1px #3e3e3e, -2px -2px #3e3e3e, -3px -3px #3e3e3e, -4px -4px #3e3e3e, -5px -5px #3e3e3e, -6px -6px #3e3e3e, -7px -7px #3e3e3e, -8px -8px #3e3e3e',
            transform: 'translateX(8px) translateY(8px)'
        }
    ],
    'shadow-inset-center': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: 'inset 0 0 0 0 rgba(0, 0, 0, 0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: 'inset 0 0 14px 0px rgba(0, 0, 0, 0.5)'
        }
    ],
    'shadow-inset-top': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: 'inset 0 0 0 0 rgba(0, 0, 0, 0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: 'inset 0 6px 14px -6px rgba(0, 0, 0, 0.5)'
        }
    ],
    'shadow-inset-right': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: 'inset 0 0 0 0 rgba(0, 0, 0, 0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: 'inset -6px 0 14px -6px rgba(0, 0, 0, 0.5)'
        }
    ],
    'shadow-inset-bottom': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: 'inset 0 0 0 0 rgba(0, 0, 0, 0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: 'inset 0 -6px 14px -6px rgba(0, 0, 0, 0.5)'
        }
    ],
    'shadow-inset-left': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: 'inset 0 0 0 0 rgba(0, 0, 0, 0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: 'inset 6px 0 14px -6px rgba(0, 0, 0, 0.5)'
        }
    ],
    'shadow-inset-lr': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: 'inset 0 0 0 0 rgba(0, 0, 0, 0), inset 0 0 0 0 rgba(0, 0, 0, 0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: 'inset -6px 0 14px -6px rgba(0, 0, 0, 0.5), inset 6px 0 14px -6px rgba(0, 0, 0, 0.5)'
        }
    ],
    'shadow-inset-tb': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: 'inset 0 0 0 0 rgba(0, 0, 0, 0), inset 0 0 0 0 rgba(0, 0, 0, 0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: 'inset 0 -6px 14px -6px rgba(0, 0, 0, 0.5), inset 0 6px 14px -6px rgba(0, 0, 0, 0.5)'
        }
    ],
    'shadow-inset-tr': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: 'inset 0 0 0 0 rgba(0, 0, 0, 0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: 'inset -6px 6px 14px -6px rgba(0, 0, 0, 0.5)'
        }
    ],
    'shadow-inset-br': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: 'inset 0 0 0 0 rgba(0, 0, 0, 0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: 'inset -6px -6px 14px -6px rgba(0, 0, 0, 0.5)'
        }
    ],
    'shadow-inset-bl': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: 'inset 0 0 0 0 rgba(0, 0, 0, 0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: 'inset 6px -6px 14px -6px rgba(0, 0, 0, 0.5)'
        }
    ],
    'shadow-inset-tl': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: 'inset 0 0 0 0 rgba(0, 0, 0, 0)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            boxShadow: 'inset 6px 6px 14px -6px rgba(0, 0, 0, 0.5)'
        }
    ],
    'scale-in-center': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'scale(0)',
            transformOrigin: 'center center',
            opacity: 1
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'scale(1)',
            transformOrigin: 'center center',
            opacity: 1
        }
    ],
    'scale-in-top': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'scale(0)',
            transformOrigin: '50% 0%',
            opacity: 1
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'scale(1)',
            transformOrigin: '50% 0%',
            opacity: 1
        }
    ],
    'scale-in-tr': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'scale(0)',
            transformOrigin: '100% 0%',
            opacity: 1
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'scale(1)',
            transformOrigin: '100% 0%',
            opacity: 1
        }
    ],
    'scale-in-right': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'scale(0)',
            transformOrigin: '100% 50%',
            opacity: 1
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'scale(1)',
            transformOrigin: '100% 50%',
            opacity: 1
        }
    ],
    'scale-in-br': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'scale(0)',
            transformOrigin: '100% 100%',
            opacity: 1
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'scale(1)',
            transformOrigin: '100% 100%',
            opacity: 1
        }
    ],
    'scale-in-bottom': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'scale(0)',
            transformOrigin: '50% 100%',
            opacity: 1
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'scale(1)',
            transformOrigin: '50% 100%',
            opacity: 1
        }
    ],
    'scale-in-bl': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'scale(0)',
            transformOrigin: '0% 100%',
            opacity: 1
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'scale(1)',
            transformOrigin: '0% 100%',
            opacity: 1
        }
    ],
    'scale-in-left': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'scale(0)',
            transformOrigin: '0% 50%',
            opacity: 1
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'scale(1)',
            transformOrigin: '0% 50%',
            opacity: 1
        }
    ],
    'scale-in-tl': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'scale(0)',
            transformOrigin: '0% 0%',
            opacity: 1
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'scale(1)',
            transformOrigin: '0% 0%',
            opacity: 1
        }
    ],
    'scale-in-hor-center': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'scaleX(0)',
            transformOrigin: 'center center',
            opacity: 1
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'scaleX(1)',
            transformOrigin: 'center center',
            opacity: 1
        }
    ],
    'scale-in-hor-left': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'scaleX(0)',
            transformOrigin: '0% 0%',
            opacity: 1
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'scaleX(1)',
            transformOrigin: '0% 0%',
            opacity: 1
        }
    ],
    'scale-in-hor-right': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'scaleX(0)',
            transformOrigin: '100% 100%',
            opacity: 1
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'scaleX(1)',
            transformOrigin: '100% 100%',
            opacity: 1
        }
    ],
    'scale-in-ver-center': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'scaleY(0)',
            transformOrigin: 'center center',
            opacity: 1
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'scaleY(1)',
            transformOrigin: 'center center',
            opacity: 1
        }
    ],
    'scale-in-ver-top': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'scaleY(0)',
            transformOrigin: '100% 0%',
            opacity: 1
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'scaleY(1)',
            transformOrigin: '100% 0%',
            opacity: 1
        }
    ],
    'scale-in-ver-bottom': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'scaleY(0)',
            transformOrigin: '0% 100%',
            opacity: 1
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'scaleY(1)',
            transformOrigin: '0% 100%',
            opacity: 1
        }
    ],
    'rotate-in-center': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotate(-360deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotate(0)',
            opacity: 1
        }
    ],
    'rotate-in-top': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'top',
            transform: 'rotate(-360deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'top',
            transform: 'rotate(0)',
            opacity: 1
        }
    ],
    'rotate-in-tr': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'top right',
            transform: 'rotate(-360deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'top right',
            transform: 'rotate(0)',
            opacity: 1
        }
    ],
    'rotate-in-right': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'right',
            transform: 'rotate(-360deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'right',
            transform: 'rotate(0)',
            opacity: 1
        }
    ],
    'rotate-in-br': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'bottom right',
            transform: 'rotate(-360deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'bottom right',
            transform: 'rotate(0)',
            opacity: 1
        }
    ],
    'rotate-in-bottom': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'bottom',
            transform: 'rotate(-360deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'bottom',
            transform: 'rotate(0)',
            opacity: 1
        }
    ],
    'rotate-in-bl': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'bottom left',
            transform: 'rotate(-360deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'bottom left',
            transform: 'rotate(0)',
            opacity: 1
        }
    ],
    'rotate-in-left': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'left',
            transform: 'rotate(-360deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'left',
            transform: 'rotate(0)',
            opacity: 1
        }
    ],
    'rotate-in-tl': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'top left',
            transform: 'rotate(-360deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'top left',
            transform: 'rotate(0)',
            opacity: 1
        }
    ],
    'rotate-in-hor': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotate(360deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotate(0)',
            opacity: 1
        }
    ],
    'rotate-in-ver': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotate(-360deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotate(0)',
            opacity: 1
        }
    ],
    'rotate-in-diag-1': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotate3d(1, 1, 0, -360deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotate3d(1, 1, 0, 0deg)',
            opacity: 1
        }
    ],
    'rotate-in-diag-2': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotate3d(-1, 1, 0, -360deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotate3d(-1, 1, 0, 0deg)',
            opacity: 1
        }
    ],
    'rotate-in-2-cw': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotate(-45deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotate(0)',
            opacity: 1
        }
    ],
    'rotate-in-2-ccw': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotate(45deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotate(0)',
            opacity: 1
        }
    ],
    'rotate-in-2-fwd-cw': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'translateZ(-200px) rotate(-45deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'translateZ(0) rotate(0)',
            opacity: 1
        }
    ],
    'rotate-in-2-fwd-ccw': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'translateZ(-200px) rotate(45deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'translateZ(0) rotate(0)',
            opacity: 1
        }
    ],
    'rotate-in-2-bck-cw': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'translateZ(200px) rotate(-45deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'translateZ(0) rotate(0)',
            opacity: 1
        }
    ],
    'rotate-in-2-bck-ccw': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'translateZ(200px) rotate(45deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'translateZ(0) rotate(0)',
            opacity: 1
        }
    ],
    'rotate-in-2-tr-cw': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '100% 0%',
            transform: 'rotate(-45deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '100% 0%',
            transform: 'rotate(0)',
            opacity: 1
        }
    ],
    'rotate-in-2-tr-ccw': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '100% 0%',
            transform: 'rotate(45deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '100% 0%',
            transform: 'rotate(0)',
            opacity: 1
        }
    ],
    'rotate-in-2-br-cw': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '100% 100%',
            transform: 'rotate(-45deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '100% 100%',
            transform: 'rotate(0)',
            opacity: 1
        }
    ],
    'rotate-in-2-br-ccw': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '100% 100%',
            transform: 'rotate(45deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '100% 100%',
            transform: 'rotate(0)',
            opacity: 1
        }
    ],
    'rotate-in-2-bl-cw': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '0 100%',
            transform: 'rotate(-45deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '0 100%',
            transform: 'rotate(0)',
            opacity: 1
        }
    ],
    'rotate-in-2-bl-ccw': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '0 100%',
            transform: 'rotate(45deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '0 100%',
            transform: 'rotate(0)',
            opacity: 1
        }
    ],
    'rotate-in-2-tl-cw': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '0 0',
            transform: 'rotate(-45deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '0 0',
            transform: 'rotate(0)',
            opacity: 1
        }
    ],
    'rotate-in-2-tl-ccw': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '0 0',
            transform: 'rotate(45deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: '0 0',
            transform: 'rotate(0)',
            opacity: 1
        }
    ],
    'swirl-in-fwd': [
        {
            offset: 0,
            easing: 'ease-out',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotate(-540deg) scale(0)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'ease-out',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotate(0) scale(1)',
            opacity: 1
        }
    ],
    'swirl-in-bck': [
        {
            offset: 0,
            easing: 'ease-out',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotate(540deg) scale(5)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'ease-out',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotate(0) scale(1)',
            opacity: 1
        }
    ],
    'swirl-in-top-fwd': [
        {
            offset: 0,
            easing: 'ease-out',
            fillMode: 'both',
            transformOrigin: '50% 0',
            transform: 'rotate(-540deg) scale(0)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'ease-out',
            fillMode: 'both',
            transformOrigin: '50% 0',
            transform: 'rotate(0) scale(1)',
            opacity: 1
        }
    ],
    'swirl-in-top-bck': [
        {
            offset: 0,
            easing: 'ease-out',
            fillMode: 'both',
            transformOrigin: '50% 0',
            transform: 'rotate(540deg) scale(5)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'ease-out',
            fillMode: 'both',
            transformOrigin: '50% 0',
            transform: 'rotate(0) scale(1)',
            opacity: 1
        }
    ],
    'swirl-in-tr-fwd': [
        {
            offset: 0,
            easing: 'ease-out',
            fillMode: 'both',
            transformOrigin: '100% 0%',
            transform: 'rotate(-540deg) scale(0)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'ease-out',
            fillMode: 'both',
            transformOrigin: '100% 0%',
            transform: 'rotate(0) scale(1)',
            opacity: 1
        }
    ],
    'swirl-in-tr-bck': [
        {
            offset: 0,
            easing: 'ease-out',
            fillMode: 'both',
            transformOrigin: '100% 0%',
            transform: 'rotate(540deg) scale(5)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'ease-out',
            fillMode: 'both',
            transformOrigin: '100% 0%',
            transform: 'rotate(0) scale(1)',
            opacity: 1
        }
    ],
    'swirl-in-right-fwd': [
        {
            offset: 0,
            easing: 'ease-out',
            fillMode: 'both',
            transformOrigin: '100% 50%',
            transform: 'rotate(-540deg) scale(0)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'ease-out',
            fillMode: 'both',
            transformOrigin: '100% 50%',
            transform: 'rotate(0) scale(1)',
            opacity: 1
        }
    ],
    'swirl-in-right-bck': [
        {
            offset: 0,
            easing: 'ease-out',
            fillMode: 'both',
            transformOrigin: '100% 50%',
            transform: 'rotate(540deg) scale(5)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'ease-out',
            fillMode: 'both',
            transformOrigin: '100% 50%',
            transform: 'rotate(0) scale(1)',
            opacity: 1
        }
    ],
    'swirl-in-br-fwd': [
        {
            offset: 0,
            easing: 'ease-out',
            fillMode: 'both',
            transformOrigin: '100% 100%',
            transform: 'rotate(-540deg) scale(0)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'ease-out',
            fillMode: 'both',
            transformOrigin: '100% 100%',
            transform: 'rotate(0) scale(1)',
            opacity: 1
        }
    ],
    'swirl-in-br-bck': [
        {
            offset: 0,
            easing: 'ease-out',
            fillMode: 'both',
            transformOrigin: '100% 100%',
            transform: 'rotate(540deg) scale(5)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'ease-out',
            fillMode: 'both',
            transformOrigin: '100% 100%',
            transform: 'rotate(0) scale(1)',
            opacity: 1
        }
    ],
    'swirl-in-bottom-fwd': [
        {
            offset: 0,
            easing: 'ease-out',
            fillMode: 'both',
            transformOrigin: '50% 100%',
            transform: 'rotate(-540deg) scale(0)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'ease-out',
            fillMode: 'both',
            transformOrigin: '50% 100%',
            transform: 'rotate(0) scale(1)',
            opacity: 1
        }
    ],
    'swirl-in-bottom-bck': [
        {
            offset: 0,
            easing: 'ease-out',
            fillMode: 'both',
            transformOrigin: '50% 100%',
            transform: 'rotate(540deg) scale(5)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'ease-out',
            fillMode: 'both',
            transformOrigin: '50% 100%',
            transform: 'rotate(0) scale(1)',
            opacity: 1
        }
    ],
    'swirl-in-bl-fwd': [
        {
            offset: 0,
            easing: 'ease-out',
            fillMode: 'both',
            transformOrigin: '0% 100%',
            transform: 'rotate(-540deg) scale(0)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'ease-out',
            fillMode: 'both',
            transformOrigin: '0% 100%',
            transform: 'rotate(0) scale(1)',
            opacity: 1
        }
    ],
    'swirl-in-bl-bck': [
        {
            offset: 0,
            easing: 'ease-out',
            fillMode: 'both',
            transformOrigin: '0% 100%',
            transform: 'rotate(540deg) scale(5)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'ease-out',
            fillMode: 'both',
            transformOrigin: '0% 100%',
            transform: 'rotate(0) scale(1)',
            opacity: 1
        }
    ],
    'swirl-in-left-fwd': [
        {
            offset: 0,
            easing: 'ease-out',
            fillMode: 'both',
            transformOrigin: '0 50%',
            transform: 'rotate(-540deg) scale(0)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'ease-out',
            fillMode: 'both',
            transformOrigin: '0 50%',
            transform: 'rotate(0) scale(1)',
            opacity: 1
        }
    ],
    'swirl-in-left-bck': [
        {
            offset: 0,
            easing: 'ease-out',
            fillMode: 'both',
            transformOrigin: '0 50%',
            transform: 'rotate(540deg) scale(5)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'ease-out',
            fillMode: 'both',
            transformOrigin: '0 50%',
            transform: 'rotate(0) scale(1)',
            opacity: 1
        }
    ],
    'swirl-in-tl-fwd': [
        {
            offset: 0,
            easing: 'ease-out',
            fillMode: 'both',
            transformOrigin: '0 0',
            transform: 'rotate(-540deg) scale(0)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'ease-out',
            fillMode: 'both',
            transformOrigin: '0 0',
            transform: 'rotate(0) scale(1)',
            opacity: 1
        }
    ],
    'swirl-in-tl-bck': [
        {
            offset: 0,
            easing: 'ease-out',
            fillMode: 'both',
            transformOrigin: '0 0',
            transform: 'rotate(540deg) scale(5)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'ease-out',
            fillMode: 'both',
            transformOrigin: '0 0',
            transform: 'rotate(0) scale(1)',
            opacity: 1
        }
    ],
    'flip-in-hor-bottom': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotateX(80deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotateX(0)',
            opacity: 1
        }
    ],
    'flip-in-hor-top': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotateX(-80deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotateX(0)',
            opacity: 1
        }
    ],
    'flip-in-ver-right': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotateY(-80deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotateY(0)',
            opacity: 1
        }
    ],
    'flip-in-ver-left': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotateY(80deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotateY(0)',
            opacity: 1
        }
    ],
    'flip-in-diag-1-tr': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotate3d(1, 1, 0, -80deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotate3d(1, 1, 0, 0deg)',
            opacity: 1
        }
    ],
    'flip-in-diag-1-bl': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotate3d(1, 1, 0, 80deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotate3d(1, 1, 0, 0deg)',
            opacity: 1
        }
    ],
    'flip-in-diag-2-tl': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotate3d(-1, 1, 0, 80deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotate3d(1, 1, 0, 0deg)',
            opacity: 1
        }
    ],
    'flip-in-diag-2-br': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotate3d(-1, 1, 0, -80deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotate3d(1, 1, 0, 0deg)',
            opacity: 1
        }
    ],
    'slit-in-vertical': [
        {
            offset: 0,
            easing: 'ease-out',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'translateZ(-800px) rotateY(90deg)',
            opacity: 0
        },
        {
            offset: 0.54,
            easing: 'ease-out',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'translateZ(-160px) rotateY(87deg)',
            opacity: 1
        },
        {
            offset: 1,
            easing: 'ease-out',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'translateZ(0) rotateY(0)',
            opacity: 1
        }
    ],
    'slit-in-horizontal': [
        {
            offset: 0,
            easing: 'ease-out',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'translateZ(-800px) rotateX(90deg)',
            opacity: 0
        },
        {
            offset: 0.54,
            easing: 'ease-out',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'translateZ(-160px) rotateX(87deg)',
            opacity: 1
        },
        {
            offset: 1,
            easing: 'ease-out',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'translateZ(0) rotateX(0)',
            opacity: 1
        }
    ],
    'slit-in-diagonal-1': [
        {
            offset: 0,
            easing: 'ease-in',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'translateZ(-800px) rotate3d(1, 1, 0, 90deg)',
            opacity: 0
        },
        {
            offset: 0.54,
            easing: 'ease-in-out',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'translateZ(-160px) rotate3d(1, 1, 0, 87deg)',
            opacity: 1
        },
        {
            offset: 1,
            easing: 'ease-out',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'translateZ(0) rotate3d(1, 1, 0, 0)',
            opacity: 1
        }
    ],
    'slit-in-diagonal-2': [
        {
            offset: 0,
            easing: 'ease-in',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'translateZ(-800px) rotate3d(-1, 1, 0, -90deg)',
            opacity: 0
        },
        {
            offset: 0.54,
            easing: 'ease-in-out',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'translateZ(-160px) rotate3d(-1, 1, 0, -87deg)',
            opacity: 1
        },
        {
            offset: 1,
            easing: 'ease-out',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'translateZ(0) rotate3d(-1, 1, 0, 0)',
            opacity: 1
        }
    ],
    'slide-in-top': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateY(-100vh)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateY(0)',
            opacity: 1
        }
    ],
    'slide-in-tr': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateY(-100vh) translateX(100vw)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateY(0) translateX(0)',
            opacity: 1
        }
    ],
    'slide-in-br': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateY(100vh) translateX(100vw)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateY(0) translateX(0)',
            opacity: 1
        }
    ],
    'slide-in-bottom': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateY(100vh)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateY(0)',
            opacity: 1
        }
    ],
    'slide-in-bl': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateY(100vh) translateX(-100vw)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateY(0) translateX(0)',
            opacity: 1
        }
    ],
    'slide-in-tl': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateY(-100vh) translateX(-100vw)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateY(0) translateX(0)',
            opacity: 1
        }
    ],
    'slide-in-fwd-center': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(-1400px)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(0)',
            opacity: 1
        }
    ],
    'slide-in-fwd-top': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(-1400px) translateY(-100vh)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(0) translateY(0)',
            opacity: 1
        }
    ],
    'slide-in-fwd-tr': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(-1400px) translateY(-100vh) translateX(100vw)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(0) translateY(0) translateX(0)',
            opacity: 1
        }
    ],
    'slide-in-fwd-right': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(-1400px) translateX(100vw)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(0) translateX(0)',
            opacity: 1
        }
    ],
    'slide-in-fwd-br': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(-1400px) translateY(100vh) translateX(100vw)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(0) translateY(0) translateX(0)',
            opacity: 1
        }
    ],
    'slide-in-fwd-bottom': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(-1400px) translateY(100vh)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(0) translateY(0)',
            opacity: 1
        }
    ],
    'slide-in-fwd-bl': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(-1400px) translateY(100vh) translateX(-100vw)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(0) translateY(0) translateX(0)',
            opacity: 1
        }
    ],
    'slide-in-fwd-left': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(-1400px) translateX(-100vw)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(0) translateX(0)',
            opacity: 1
        }
    ],
    'slide-in-fwd-tl': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(-1400px) translateY(-100vh) translateX(-100vw)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(0) translateY(0) translateX(0)',
            opacity: 1
        }
    ],
    'slide-in-bck-center': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(600px)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(0)',
            opacity: 1
        }
    ],
    'slide-in-bck-top': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(700px) translateY(-300px)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(0) translateY(0)',
            opacity: 1
        }
    ],
    'slide-in-bck-tr': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(700px) translateY(-300px) translateX(400px)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(0) translateY(0) translateX(0)',
            opacity: 1
        }
    ],
    'slide-in-bck-right': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(700px) translateX(400px)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(0) translateX(0)',
            opacity: 1
        }
    ],
    'slide-in-bck-br': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(700px) translateY(300px) translateX(400px)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(0) translateY(0) translateX(0)',
            opacity: 1
        }
    ],
    'slide-in-bck-bottom': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(700px) translateY(300px)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(0) translateY(0)',
            opacity: 1
        }
    ],
    'slide-in-bck-bl': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(700px) translateY(300px) translateX(-400px)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(0) translateY(0) translateX(0)',
            opacity: 1
        }
    ],
    'slide-in-bck-left': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(700px) translateX(-400px)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(0) translateX(0)',
            opacity: 1
        }
    ],
    'slide-in-bck-tl': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(700px) translateY(-300px) translateX(-400px)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateZ(0) translateY(0) translateX(0)',
            opacity: 1
        }
    ],
    'slide-in-blurred-top': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.230, 1.000, 0.320, 1.000)',
            fillMode: 'both',
            transform: 'translateY(-100vh) scaleY(2.5) scaleX(0.2)',
            transformOrigin: '50% 0%',
            filter: 'blur(40px)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.230, 1.000, 0.320, 1.000)',
            fillMode: 'both',
            transform: 'translateY(0) scaleY(1) scaleX(1)',
            transformOrigin: '50% 50%',
            filter: 'blur(0)',
            opacity: 1
        }
    ],
    'slide-in-blurred-tr': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.230, 1.000, 0.320, 1.000)',
            fillMode: 'both',
            transform: 'translate(100vw, -100vh) skew(-80deg, -10deg)',
            transformOrigin: '0% 0%',
            filter: 'blur(40px)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.230, 1.000, 0.320, 1.000)',
            fillMode: 'both',
            transform: 'translate(0, 0) skew(0deg, 0deg)',
            transformOrigin: '50% 50%',
            filter: 'blur(0)',
            opacity: 1
        }
    ],
    'slide-in-blurred-right': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.230, 1.000, 0.320, 1.000)',
            fillMode: 'both',
            transform: 'translateX(100vw) scaleX(2.5) scaleY(0.2)',
            transformOrigin: '0% 50%',
            filter: 'blur(40px)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.230, 1.000, 0.320, 1.000)',
            fillMode: 'both',
            transform: 'translateX(0) scaleY(1) scaleX(1)',
            transformOrigin: '50% 50%',
            filter: 'blur(0)',
            opacity: 1
        }
    ],
    'slide-in-blurred-br': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.230, 1.000, 0.320, 1.000)',
            fillMode: 'both',
            transform: 'translate(100vw, 100vh) skew(80deg, 10deg)',
            transformOrigin: '0% 100%',
            filter: 'blur(40px)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.230, 1.000, 0.320, 1.000)',
            fillMode: 'both',
            transform: 'translate(0, 0) skew(0deg, 0deg)',
            transformOrigin: '50% 50%',
            filter: 'blur(0)',
            opacity: 1
        }
    ],
    'slide-in-blurred-bottom': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.230, 1.000, 0.320, 1.000)',
            fillMode: 'both',
            transform: 'translateY(100vh) scaleY(2.5) scaleX(0.2)',
            transformOrigin: '50% 100%',
            filter: 'blur(40px)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.230, 1.000, 0.320, 1.000)',
            fillMode: 'both',
            transform: 'translateY(0) scaleY(1) scaleX(1)',
            transformOrigin: '50% 50%',
            filter: 'blur(0)',
            opacity: 1
        }
    ],
    'slide-in-blurred-bl': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.230, 1.000, 0.320, 1.000)',
            fillMode: 'both',
            transform: 'translate(-100vw, 100vh) skew(-80deg, -10deg)',
            transformOrigin: '100% 100%',
            filter: 'blur(40px)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.230, 1.000, 0.320, 1.000)',
            fillMode: 'both',
            transform: 'translate(0, 0) skew(0deg, 0deg)',
            transformOrigin: '50% 50%',
            filter: 'blur(0)',
            opacity: 1
        }
    ],
    'slide-in-blurred-left': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.230, 1.000, 0.320, 1.000)',
            fillMode: 'both',
            transform: 'translateX(-100vw) scaleX(2.5) scaleY(0.2)',
            transformOrigin: '100% 50%',
            filter: 'blur(40px)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.230, 1.000, 0.320, 1.000)',
            fillMode: 'both',
            transform: 'translateX(0) scaleY(1) scaleX(1)',
            transformOrigin: '50% 50%',
            filter: 'blur(0)',
            opacity: 1
        }
    ],
    'slide-in-blurred-tl': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.230, 1.000, 0.320, 1.000)',
            fillMode: 'both',
            transform: 'translate(-100vw, -100vh) skew(80deg, 10deg)',
            transformOrigin: '100% 0%',
            filter: 'blur(40px)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.230, 1.000, 0.320, 1.000)',
            fillMode: 'both',
            transform: 'translate(0, 0) skew(0deg, 0deg)',
            transformOrigin: '50% 50%',
            filter: 'blur(0)',
            opacity: 1
        }
    ],
    'slide-in-elliptic-top-fwd': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateY(-600px) rotateX(-30deg) scale(0)',
            transformOrigin: '50% 100%',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateY(0) rotateX(0) scale(1)',
            transformOrigin: '50% 100vh',
            opacity: 1
        }
    ],
    'slide-in-elliptic-top-bck': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateY(-600px) rotateX(30deg) scale(6.5)',
            transformOrigin: '50% 200%',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateY(0) rotateX(0) scale(1)',
            transformOrigin: '50% -500px',
            opacity: 1
        }
    ],
    'slide-in-elliptic-right-fwd': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateX(800px) rotateY(-30deg) scale(0)',
            transformOrigin: '100% 50%',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateX(0) rotateY(0) scale(1)',
            transformOrigin: '-100vw 50%',
            opacity: 1
        }
    ],
    'slide-in-elliptic-right-bck': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateX(800px) rotateY(30deg) scale(6.5)',
            transformOrigin: '-100% 50%',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateX(0) rotateY(0) scale(1)',
            transformOrigin: '600px 50%',
            opacity: 1
        }
    ],
    'slide-in-elliptic-bottom-fwd': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateY(600px) rotateX(30deg) scale(0)',
            transformOrigin: '50% 100%',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateY(0) rotateX(0) scale(1)',
            transformOrigin: '50% -100vh',
            opacity: 1
        }
    ],
    'slide-in-elliptic-bottom-bck': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateY(600px) rotateX(-30deg) scale(6.5)',
            transformOrigin: '50% -100%',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateY(0) rotateX(0) scale(1)',
            transformOrigin: '50% 500px',
            opacity: 1
        }
    ],
    'slide-in-elliptic-left-fwd': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateX(-800px) rotateY(30deg) scale(0)',
            transformOrigin: '-100% 50%',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateX(0) rotateY(0) scale(1)',
            transformOrigin: '100vw 50%',
            opacity: 1
        }
    ],
    'slide-in-elliptic-left-bck': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateX(-800px) rotateY(-30deg) scale(6.5)',
            transformOrigin: '200% 50%',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'translateX(0) rotateY(0) scale(1)',
            transformOrigin: '-600px 50%',
            opacity: 1
        }
    ],
    'bounce-in-top': [
        {
            offset: 0,
            fillMode: 'both',
            transform: 'translateY(-500px)',
            easing: 'ease-in',
            opacity: 0
        },
        {
            offset: 0.38,
            fillMode: 'both',
            transform: 'translateY(0)',
            easing: 'ease-out',
            opacity: 1
        },
        {
            offset: 0.55,
            fillMode: 'both',
            transform: 'translateY(-65px)',
            easing: 'ease-in',
            opacity: 1
        },
        {
            offset: 0.72,
            fillMode: 'both',
            transform: 'translateY(0)',
            easing: 'ease-out',
            opacity: 1
        },
        {
            offset: 0.81,
            fillMode: 'both',
            transform: 'translateY(-28px)',
            easing: 'ease-in',
            opacity: 1
        },
        {
            offset: 0.9,
            fillMode: 'both',
            transform: 'translateY(0)',
            easing: 'ease-out',
            opacity: 1
        },
        {
            offset: 0.95,
            fillMode: 'both',
            transform: 'translateY(-8px)',
            easing: 'ease-in',
            opacity: 1
        },
        {
            offset: 1,
            fillMode: 'both',
            transform: 'translateY(0)',
            easing: 'ease-out',
            opacity: 1
        }
    ],
    'bounce-in-bottom': [
        {
            offset: 0,
            fillMode: 'both',
            transform: 'translateY(500px)',
            easing: 'ease-in',
            opacity: 0
        },
        {
            offset: 0.38,
            fillMode: 'both',
            transform: 'translateY(0)',
            easing: 'ease-out',
            opacity: 1
        },
        {
            offset: 0.55,
            fillMode: 'both',
            transform: 'translateY(65px)',
            easing: 'ease-in',
            opacity: 1
        },
        {
            offset: 0.72,
            fillMode: 'both',
            transform: 'translateY(0)',
            easing: 'ease-out',
            opacity: 1
        },
        {
            offset: 0.81,
            fillMode: 'both',
            transform: 'translateY(28px)',
            easing: 'ease-in',
            opacity: 1
        },
        {
            offset: 0.9,
            fillMode: 'both',
            transform: 'translateY(0)',
            easing: 'ease-out',
            opacity: 1
        },
        {
            offset: 0.95,
            fillMode: 'both',
            transform: 'translateY(8px)',
            easing: 'ease-in',
            opacity: 1
        },
        {
            offset: 1,
            fillMode: 'both',
            transform: 'translateY(0)',
            easing: 'ease-out',
            opacity: 1
        }
    ],
    'bounce-in-fwd': [
        {
            offset: 0,
            fillMode: 'both',
            transform: 'scale(0)',
            easing: 'ease-in',
            opacity: 0
        },
        {
            offset: 0.38,
            fillMode: 'both',
            transform: 'scale(1)',
            easing: 'ease-out',
            opacity: 1
        },
        {
            offset: 0.55,
            fillMode: 'both',
            transform: 'scale(0.7)',
            easing: 'ease-in',
            opacity: 1
        },
        {
            offset: 0.72,
            fillMode: 'both',
            transform: 'scale(1)',
            easing: 'ease-out',
            opacity: 1
        },
        {
            offset: 0.81,
            fillMode: 'both',
            transform: 'scale(0.84)',
            easing: 'ease-in',
            opacity: 1
        },
        {
            offset: 0.89,
            fillMode: 'both',
            transform: 'scale(1)',
            easing: 'ease-out',
            opacity: 1
        },
        {
            offset: 0.95,
            fillMode: 'both',
            transform: 'scale(0.95)',
            easing: 'ease-in',
            opacity: 1
        },
        {
            offset: 1,
            fillMode: 'both',
            transform: 'scale(1)',
            easing: 'ease-out',
            opacity: 1
        }
    ],
    'bounce-in-bck': [
        {
            offset: 0,
            fillMode: 'both',
            transform: 'scale(7)',
            easing: 'ease-in',
            opacity: 0
        },
        {
            offset: 0.38,
            fillMode: 'both',
            transform: 'scale(1)',
            easing: 'ease-out',
            opacity: 1
        },
        {
            offset: 0.55,
            fillMode: 'both',
            transform: 'scale(1.5)',
            easing: 'ease-in',
            opacity: 1
        },
        {
            offset: 0.72,
            fillMode: 'both',
            transform: 'scale(1)',
            easing: 'ease-out',
            opacity: 1
        },
        {
            offset: 0.81,
            fillMode: 'both',
            transform: 'scale(1.24)',
            easing: 'ease-in',
            opacity: 1
        },
        {
            offset: 0.89,
            fillMode: 'both',
            transform: 'scale(1)',
            easing: 'ease-out',
            opacity: 1
        },
        {
            offset: 0.95,
            fillMode: 'both',
            transform: 'scale(1.04)',
            easing: 'ease-in',
            opacity: 1
        },
        {
            offset: 1,
            fillMode: 'both',
            transform: 'scale(1)',
            easing: 'ease-out',
            opacity: 1
        }
    ],
    'roll-in-left': [
        {
            offset: 0,
            easing: 'ease-out',
            fillMode: 'both',
            transform: 'translateX(-800px) rotate(-540deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'ease-out',
            fillMode: 'both',
            transform: 'translateX(0) rotate(0deg)',
            opacity: 1
        }
    ],
    'roll-in-top': [
        {
            offset: 0,
            easing: 'ease-out',
            fillMode: 'both',
            transform: 'translateY(-800px) rotate(-540deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'ease-out',
            fillMode: 'both',
            transform: 'translateY(0) rotate(0deg)',
            opacity: 1
        }
    ],
    'roll-in-right': [
        {
            offset: 0,
            easing: 'ease-out',
            fillMode: 'both',
            transform: 'translateX(800px) rotate(540deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'ease-out',
            fillMode: 'both',
            transform: 'translateX(0) rotate(0deg)',
            opacity: 1
        }
    ],
    'roll-in-bottom': [
        {
            offset: 0,
            easing: 'ease-out',
            fillMode: 'both',
            transform: 'translateY(800px) rotate(540deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'ease-out',
            fillMode: 'both',
            transform: 'translateY(0) rotate(0deg)',
            opacity: 1
        }
    ],
    'roll-in-blurred-left': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.230, 1.000, 0.320, 1.000)',
            fillMode: 'both',
            transform: 'translateX(-100vw) rotate(-540deg)',
            filter: 'blur(50px)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.230, 1.000, 0.320, 1.000)',
            fillMode: 'both',
            transform: 'translateX(0) rotate(0deg)',
            filter: 'blur(0)',
            opacity: 1
        }
    ],
    'roll-in-blurred-top': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.230, 1.000, 0.320, 1.000)',
            fillMode: 'both',
            transform: 'translateY(-100vh) rotate(-720deg)',
            filter: 'blur(50px)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.230, 1.000, 0.320, 1.000)',
            fillMode: 'both',
            transform: 'translateY(0) rotate(0deg)',
            filter: 'blur(0)',
            opacity: 1
        }
    ],
    'roll-in-blurred-right': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.230, 1.000, 0.320, 1.000)',
            fillMode: 'both',
            transform: 'translateX(100vw) rotate(720deg)',
            filter: 'blur(50px)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.230, 1.000, 0.320, 1.000)',
            fillMode: 'both',
            transform: 'translateX(0) rotate(0deg)',
            filter: 'blur(0)',
            opacity: 1
        }
    ],
    'roll-in-blurred-bottom': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.230, 1.000, 0.320, 1.000)',
            fillMode: 'both',
            transform: 'translateY(800px) rotate(720deg)',
            filter: 'blur(50px)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.230, 1.000, 0.320, 1.000)',
            fillMode: 'both',
            transform: 'translateY(0) rotate(0deg)',
            filter: 'blur(0)',
            opacity: 1
        }
    ],
    'tilt-in-top-1': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotateY(30deg) translateY(-300px) skewY(-30deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotateY(0deg) translateY(0) skewY(0deg)',
            opacity: 1
        }
    ],
    'tilt-in-top-2': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotateY(-30deg) translateY(-300px) skewY(30deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotateY(0deg) translateY(0) skewY(0deg)',
            opacity: 1
        }
    ],
    'tilt-in-tr': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotateY(-35deg) rotateX(20deg) translate(250px, -250px) skew(-12deg, -15deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg)',
            opacity: 1
        }
    ],
    'tilt-in-right-1': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotateX(-30deg) translateX(300px) skewX(30deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotateX(0deg) translateX(0) skewX(0deg)',
            opacity: 1
        }
    ],
    'tilt-in-right-2': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotateX(30deg) translateX(300px) skewX(-30deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotateX(0deg) translateX(0) skewX(0deg)',
            opacity: 1
        }
    ],
    'tilt-in-br': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotateY(-35deg) rotateX(-20deg) translate(250px, 250px) skew(12deg, 15deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg)',
            opacity: 1
        }
    ],
    'tilt-in-bottom-1': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotateY(30deg) translateY(300px) skewY(-30deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotateY(0deg) translateY(0) skewY(0deg)',
            opacity: 1
        }
    ],
    'tilt-in-bottom-2': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotateY(-30deg) translateY(300px) skewY(30deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotateY(0deg) translateY(0) skewY(0deg)',
            opacity: 1
        }
    ],
    'tilt-in-bl': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotateY(35deg) rotateX(-20deg) translate(-250px, 250px) skew(-12deg, -15deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg)',
            opacity: 1
        }
    ],
    'tilt-in-left-1': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotateX(-30deg) translateX(-300px) skewX(-30deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotateX(0deg) translateX(0) skewX(0deg)',
            opacity: 1
        }
    ],
    'tilt-in-left-2': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotateX(30deg) translateX(-300px) skewX(30deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotateX(0deg) translateX(0) skewX(0deg)',
            opacity: 1
        }
    ],
    'tilt-in-tl': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotateY(35deg) rotateX(20deg) translate(-250px, -250px) skew(12deg, 15deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg)',
            opacity: 1
        }
    ],
    'tilt-in-fwd-tr': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotateY(20deg) rotateX(35deg) translate(300px, -300px) skew(-35deg, 10deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg)',
            opacity: 1
        }
    ],
    'tilt-in-fwd-br': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotateY(20deg) rotateX(-35deg) translate(300px, 300px) skew(35deg, -10deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg)',
            opacity: 1
        }
    ],
    'tilt-in-fwd-bl': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotateY(-20deg) rotateX(-35deg) translate(-300px, 300px) skew(-35deg, 10deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg)',
            opacity: 1
        }
    ],
    'tilt-in-fwd-tl': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotateY(-20deg) rotateX(35deg) translate(-300px, -300px) skew(35deg, -10deg)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transform: 'rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg)',
            opacity: 1
        }
    ],
    'swing-in-top-fwd': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
            fillMode: 'both',
            transform: 'rotateX(-100deg)',
            transformOrigin: 'top',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
            fillMode: 'both',
            transform: 'rotateX(0deg)',
            transformOrigin: 'top',
            opacity: 1
        }
    ],
    'swing-in-top-bck': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
            fillMode: 'both',
            transform: 'rotateX(70deg)',
            transformOrigin: 'top',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
            fillMode: 'both',
            transform: 'rotateX(0deg)',
            transformOrigin: 'top',
            opacity: 1
        }
    ],
    'swing-in-right-fwd': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
            fillMode: 'both',
            transform: 'rotateY(-100deg)',
            transformOrigin: 'right',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
            fillMode: 'both',
            transform: 'rotateY(0)',
            transformOrigin: 'right',
            opacity: 1
        }
    ],
    'swing-in-right-bck': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
            fillMode: 'both',
            transform: 'rotateY(70deg)',
            transformOrigin: 'right',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
            fillMode: 'both',
            transform: 'rotateY(0)',
            transformOrigin: 'right',
            opacity: 1
        }
    ],
    'swing-in-bottom-fwd': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
            fillMode: 'both',
            transform: 'rotateX(100deg)',
            transformOrigin: 'bottom',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
            fillMode: 'both',
            transform: 'rotateX(0)',
            transformOrigin: 'bottom',
            opacity: 1
        }
    ],
    'swing-in-bottom-bck': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
            fillMode: 'both',
            transform: 'rotateX(-70deg)',
            transformOrigin: 'bottom',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
            fillMode: 'both',
            transform: 'rotateX(0)',
            transformOrigin: 'bottom',
            opacity: 1
        }
    ],
    'swing-in-left-fwd': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
            fillMode: 'both',
            transform: 'rotateY(100deg)',
            transformOrigin: 'left',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
            fillMode: 'both',
            transform: 'rotateY(0)',
            transformOrigin: 'left',
            opacity: 1
        }
    ],
    'swing-in-left-bck': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
            fillMode: 'both',
            transform: 'rotateY(-70deg)',
            transformOrigin: 'left',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
            fillMode: 'both',
            transform: 'rotateY(0)',
            transformOrigin: 'left',
            opacity: 1
        }
    ],
    'fade-in-fwd': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transform: 'translateZ(-80px)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transform: 'translateZ(0)',
            opacity: 1
        }
    ],
    'fade-in-bck': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transform: 'translateZ(80px)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transform: 'translateZ(0)',
            opacity: 1
        }
    ],
    'fade-in-top': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transform: 'translateY(-50px)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transform: 'translateY(0)',
            opacity: 1
        }
    ],
    'fade-in-tr': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transform: 'translateX(50px) translateY(-50px)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transform: 'translateX(0) translateY(0)',
            opacity: 1
        }
    ],
    'fade-in-br': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transform: 'translateX(50px) translateY(50px)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transform: 'translateX(0) translateY(0)',
            opacity: 1
        }
    ],
    'fade-in-bottom': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transform: 'translateY(50px)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transform: 'translateY(0)',
            opacity: 1
        }
    ],
    'fade-in-bl': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transform: 'translateX(-50px) translateY(50px)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transform: 'translateX(0) translateY(0)',
            opacity: 1
        }
    ],
    'fade-in-tl': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transform: 'translateX(-50px) translateY(-50px)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            fillMode: 'both',
            transform: 'translateX(0) translateY(0)',
            opacity: 1
        }
    ],
    'puff-in-center': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
            fillMode: 'both',
            transform: 'scale(2)',
            filter: 'blur(4px)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
            fillMode: 'both',
            transform: 'scale(1)',
            filter: 'blur(0)',
            opacity: 1
        }
    ],
    'puff-in-top': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
            fillMode: 'both',
            transform: 'scale(2)',
            transformOrigin: '50% 0%',
            filter: 'blur(4px)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
            fillMode: 'both',
            transform: 'scale(1)',
            transformOrigin: '50% 0%',
            filter: 'blur(0)',
            opacity: 1
        }
    ],
    'puff-in-tr': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
            fillMode: 'both',
            transform: 'scale(2)',
            transformOrigin: '100% 0%',
            filter: 'blur(4px)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
            fillMode: 'both',
            transform: 'scale(1)',
            transformOrigin: '100% 0%',
            filter: 'blur(0)',
            opacity: 1
        }
    ],
    'puff-in-right': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
            fillMode: 'both',
            transform: 'scale(2)',
            transformOrigin: '100% 50%',
            filter: 'blur(4px)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
            fillMode: 'both',
            transform: 'scale(1)',
            transformOrigin: '100% 50%',
            filter: 'blur(0)',
            opacity: 1
        }
    ],
    'puff-in-br': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
            fillMode: 'both',
            transform: 'scale(2)',
            transformOrigin: '100% 100%',
            filter: 'blur(4px)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
            fillMode: 'both',
            transform: 'scale(1)',
            transformOrigin: '100% 100%',
            filter: 'blur(0)',
            opacity: 1
        }
    ],
    'puff-in-bottom': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
            fillMode: 'both',
            transform: 'scale(2)',
            transformOrigin: '50% 100%',
            filter: 'blur(4px)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
            fillMode: 'both',
            transform: 'scale(1)',
            transformOrigin: '50% 100%',
            filter: 'blur(0)',
            opacity: 1
        }
    ],
    'puff-in-bl': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
            fillMode: 'both',
            transform: 'scale(2)',
            transformOrigin: '0% 100%',
            filter: 'blur(4px)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
            fillMode: 'both',
            transform: 'scale(1)',
            transformOrigin: '0% 100%',
            filter: 'blur(0)',
            opacity: 1
        }
    ],
    'puff-in-left': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
            fillMode: 'both',
            transform: 'scale(2)',
            transformOrigin: '0% 50%',
            filter: 'blur(4px)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
            fillMode: 'both',
            transform: 'scale(1)',
            transformOrigin: '0% 50%',
            filter: 'blur(0)',
            opacity: 1
        }
    ],
    'puff-in-tl': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
            fillMode: 'both',
            transform: 'scale(2)',
            transformOrigin: '0% 0%',
            filter: 'blur(4px)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
            fillMode: 'both',
            transform: 'scale(1)',
            transformOrigin: '0% 0%',
            filter: 'blur(0)',
            opacity: 1
        }
    ],
    'puff-in-hor': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
            fillMode: 'both',
            transform: 'scaleX(2)',
            transformOrigin: 'center center',
            filter: 'blur(4px)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
            fillMode: 'both',
            transform: 'scaleX(1)',
            transformOrigin: 'center center',
            filter: 'blur(0)',
            opacity: 1
        }
    ],
    'puff-in-ver': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
            fillMode: 'both',
            transform: 'scaleY(2)',
            transformOrigin: 'center center',
            filter: 'blur(4px)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
            fillMode: 'both',
            transform: 'scaleY(1)',
            transformOrigin: 'center center',
            filter: 'blur(0)',
            opacity: 1
        }
    ],
    'flicker-in-1': [
        {
            offset: 0,
            easing: 'linear',
            fillMode: 'both',
            opacity: 0
        },
        {
            offset: 0.1,
            easing: 'linear',
            fillMode: 'both',
            opacity: 0
        },
        {
            offset: 0.101,
            easing: 'linear',
            fillMode: 'both',
            opacity: 1
        },
        {
            offset: 0.102,
            easing: 'linear',
            fillMode: 'both',
            opacity: 0
        },
        {
            offset: 0.2,
            easing: 'linear',
            fillMode: 'both',
            opacity: 0
        },
        {
            offset: 0.201,
            easing: 'linear',
            fillMode: 'both',
            opacity: 1
        },
        {
            offset: 0.206,
            easing: 'linear',
            fillMode: 'both',
            opacity: 0
        },
        {
            offset: 0.3,
            easing: 'linear',
            fillMode: 'both',
            opacity: 0
        },
        {
            offset: 0.301,
            easing: 'linear',
            fillMode: 'both',
            opacity: 1
        },
        {
            offset: 0.305,
            easing: 'linear',
            fillMode: 'both',
            opacity: 1
        },
        {
            offset: 0.306,
            easing: 'linear',
            fillMode: 'both',
            opacity: 0
        },
        {
            offset: 0.45,
            easing: 'linear',
            fillMode: 'both',
            opacity: 0
        },
        {
            offset: 0.451,
            easing: 'linear',
            fillMode: 'both',
            opacity: 1
        },
        {
            offset: 0.5,
            easing: 'linear',
            fillMode: 'both',
            opacity: 1
        },
        {
            offset: 0.55,
            easing: 'linear',
            fillMode: 'both',
            opacity: 1
        },
        {
            offset: 0.551,
            easing: 'linear',
            fillMode: 'both',
            opacity: 0
        },
        {
            offset: 0.57,
            easing: 'linear',
            fillMode: 'both',
            opacity: 0
        },
        {
            offset: 0.571,
            easing: 'linear',
            fillMode: 'both',
            opacity: 1
        },
        {
            offset: 0.6,
            easing: 'linear',
            fillMode: 'both',
            opacity: 1
        },
        {
            offset: 0.601,
            easing: 'linear',
            fillMode: 'both',
            opacity: 0
        },
        {
            offset: 0.65,
            easing: 'linear',
            fillMode: 'both',
            opacity: 0
        },
        {
            offset: 0.651,
            easing: 'linear',
            fillMode: 'both',
            opacity: 1
        },
        {
            offset: 0.75,
            easing: 'linear',
            fillMode: 'both',
            opacity: 1
        },
        {
            offset: 0.751,
            easing: 'linear',
            fillMode: 'both',
            opacity: 0
        },
        {
            offset: 0.77,
            easing: 'linear',
            fillMode: 'both',
            opacity: 0
        },
        {
            offset: 0.771,
            easing: 'linear',
            fillMode: 'both',
            opacity: 1
        },
        {
            offset: 0.85,
            easing: 'linear',
            fillMode: 'both',
            opacity: 1
        },
        {
            offset: 0.851,
            easing: 'linear',
            fillMode: 'both',
            opacity: 0
        },
        {
            offset: 0.86,
            easing: 'linear',
            fillMode: 'both',
            opacity: 0
        },
        {
            offset: 0.861,
            easing: 'linear',
            fillMode: 'both',
            opacity: 1
        },
        {
            offset: 1,
            easing: 'linear',
            fillMode: 'both',
            opacity: 1
        }
    ],
    'flicker-in-2': [
        {
            offset: 0,
            easing: 'linear',
            fillMode: 'both',
            opacity: 0,
            boxShadow: 'initial'
        },
        {
            offset: 0.1,
            easing: 'linear',
            fillMode: 'both',
            opacity: 0,
            boxShadow: 'none'
        },
        {
            offset: 0.101,
            easing: 'linear',
            fillMode: 'both',
            opacity: 1,
            boxShadow: 'none'
        },
        {
            offset: 0.102,
            easing: 'linear',
            fillMode: 'both',
            opacity: 0,
            boxShadow: 'none'
        },
        {
            offset: 0.2,
            easing: 'linear',
            fillMode: 'both',
            opacity: 0,
            boxShadow: 'none'
        },
        {
            offset: 0.201,
            easing: 'linear',
            fillMode: 'both',
            opacity: 1,
            boxShadow: '0 0 30px rgba(255, 255, 255, 0.25)'
        },
        {
            offset: 0.206,
            easing: 'linear',
            fillMode: 'both',
            opacity: 0,
            boxShadow: 'none'
        },
        {
            offset: 0.3,
            easing: 'linear',
            fillMode: 'both',
            opacity: 0,
            boxShadow: 'none'
        },
        {
            offset: 0.301,
            easing: 'linear',
            fillMode: 'both',
            opacity: 1,
            boxShadow: '0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25)'
        },
        {
            offset: 0.305,
            easing: 'linear',
            fillMode: 'both',
            opacity: 1,
            boxShadow: '0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25)'
        },
        {
            offset: 0.306,
            easing: 'linear',
            fillMode: 'both',
            opacity: 0,
            boxShadow: 'none'
        },
        {
            offset: 0.45,
            easing: 'linear',
            fillMode: 'both',
            opacity: 0,
            boxShadow: 'none'
        },
        {
            offset: 0.451,
            easing: 'linear',
            fillMode: 'both',
            opacity: 1,
            boxShadow: '0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25)'
        },
        {
            offset: 0.5,
            easing: 'linear',
            fillMode: 'both',
            opacity: 1,
            boxShadow: '0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25)'
        },
        {
            offset: 0.55,
            easing: 'linear',
            fillMode: 'both',
            opacity: 1,
            boxShadow: '0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25)'
        },
        {
            offset: 0.551,
            easing: 'linear',
            fillMode: 'both',
            opacity: 0,
            boxShadow: 'none'
        },
        {
            offset: 0.57,
            easing: 'linear',
            fillMode: 'both',
            opacity: 0,
            boxShadow: 'none'
        },
        {
            offset: 0.571,
            easing: 'linear',
            fillMode: 'both',
            opacity: 1,
            boxShadow: '0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.3)'
        },
        {
            offset: 0.6,
            easing: 'linear',
            fillMode: 'both',
            opacity: 1,
            boxShadow: '0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.3)'
        },
        {
            offset: 0.601,
            easing: 'linear',
            fillMode: 'both',
            opacity: 0,
            boxShadow: 'none'
        },
        {
            offset: 0.65,
            easing: 'linear',
            fillMode: 'both',
            opacity: 0,
            boxShadow: 'none'
        },
        {
            offset: 0.651,
            easing: 'linear',
            fillMode: 'both',
            opacity: 1,
            boxShadow: '0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.3), 0 0 100px rgba(255, 255, 255, 0.1)'
        },
        {
            offset: 0.75,
            easing: 'linear',
            fillMode: 'both',
            opacity: 1,
            boxShadow: '0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.3), 0 0 100px rgba(255, 255, 255, 0.1)'
        },
        {
            offset: 0.751,
            easing: 'linear',
            fillMode: 'both',
            opacity: 0,
            boxShadow: 'none'
        },
        {
            offset: 0.77,
            easing: 'linear',
            fillMode: 'both',
            opacity: 0,
            boxShadow: 'none'
        },
        {
            offset: 0.771,
            easing: 'linear',
            fillMode: 'both',
            opacity: 1,
            boxShadow: '0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1)'
        },
        {
            offset: 0.85,
            easing: 'linear',
            fillMode: 'both',
            opacity: 1,
            boxShadow: '0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1)'
        },
        {
            offset: 0.851,
            easing: 'linear',
            fillMode: 'both',
            opacity: 0,
            boxShadow: 'none'
        },
        {
            offset: 0.86,
            easing: 'linear',
            fillMode: 'both',
            opacity: 0,
            boxShadow: 'none'
        },
        {
            offset: 0.861,
            easing: 'linear',
            fillMode: 'both',
            opacity: 1,
            boxShadow: '0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1)'
        },
        {
            offset: 1,
            easing: 'linear',
            fillMode: 'both',
            opacity: 1,
            boxShadow: '0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1)'
        }
    ],
    'tracking-in-expand': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
            fillMode: 'both',
            letterSpacing: '-0.5em',
            opacity: 0
        },
        {
            offset: 0.4,
            easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
            fillMode: 'both',
            letterSpacing: 'normal',
            opacity: 0.6
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
            fillMode: 'both',
            letterSpacing: 'normal',
            opacity: 1
        }
    ],
    'tracking-in-expand-fwd': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
            fillMode: 'both',
            letterSpacing: '-0.5em',
            transform: 'translateZ(-700px)',
            opacity: 0
        },
        {
            offset: 0.4,
            easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
            fillMode: 'both',
            letterSpacing: 'normal',
            opacity: 0.6
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
            fillMode: 'both',
            letterSpacing: 'normal',
            transform: 'translateZ(0)',
            opacity: 1
        }
    ],
    'tracking-in-expand-fwd-top': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
            fillMode: 'both',
            letterSpacing: '-0.5em',
            transform: 'translateZ(-700px) translateY(-500px)',
            opacity: 0
        },
        {
            offset: 0.4,
            easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
            fillMode: 'both',
            letterSpacing: 'normal',
            opacity: 0.6
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
            fillMode: 'both',
            letterSpacing: 'normal',
            transform: 'translateZ(0) translateY(0)',
            opacity: 1
        }
    ],
    'tracking-in-expand-fwd-bottom': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
            fillMode: 'both',
            letterSpacing: '-0.5em',
            transform: 'translateZ(-700px) translateY(500px)',
            opacity: 0
        },
        {
            offset: 0.4,
            easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
            fillMode: 'both',
            letterSpacing: 'normal',
            opacity: 0.6
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
            fillMode: 'both',
            letterSpacing: 'normal',
            transform: 'translateZ(0) translateY(0)',
            opacity: 1
        }
    ],
    'tracking-in-contract': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
            fillMode: 'both',
            letterSpacing: '1em',
            opacity: 0
        },
        {
            offset: 0.4,
            easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
            fillMode: 'both',
            letterSpacing: 'normal',
            opacity: 0.6
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
            fillMode: 'both',
            letterSpacing: 'normal',
            opacity: 1
        }
    ],
    'tracking-in-contract-bck': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
            fillMode: 'both',
            letterSpacing: '1em',
            transform: 'translateZ(400px)',
            opacity: 0
        },
        {
            offset: 0.4,
            easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
            fillMode: 'both',
            letterSpacing: 'normal',
            opacity: 0.6
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
            fillMode: 'both',
            letterSpacing: 'normal',
            transform: 'translateZ(0)',
            opacity: 1
        }
    ],
    'tracking-in-contract-bck-top': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
            fillMode: 'both',
            letterSpacing: '1em',
            transform: 'translateZ(400px) translateY(-300px)',
            opacity: 0
        },
        {
            offset: 0.4,
            easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
            fillMode: 'both',
            letterSpacing: 'normal',
            opacity: 0.6
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
            fillMode: 'both',
            letterSpacing: 'normal',
            transform: 'translateZ(0) translateY(0)',
            opacity: 1
        }
    ],
    'tracking-in-contract-bck-bottom': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
            fillMode: 'both',
            letterSpacing: '1em',
            transform: 'translateZ(400px) translateY(300px)',
            opacity: 0
        },
        {
            offset: 0.4,
            easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
            fillMode: 'both',
            letterSpacing: 'normal',
            opacity: 0.6
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
            fillMode: 'both',
            letterSpacing: 'normal',
            transform: 'translateZ(0) translateY(0)',
            opacity: 1
        }
    ],
    'focus-in-expand': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            letterSpacing: '-0.5em',
            filter: 'blur(12px)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            letterSpacing: 'normal',
            filter: 'blur(0px)',
            opacity: 1
        }
    ],
    'focus-in-expand-fwd': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            letterSpacing: '-0.5em',
            transform: 'translateZ(-800px)',
            filter: 'blur(12px)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            letterSpacing: 'normal',
            transform: 'translateZ(0)',
            filter: 'blur(0px)',
            opacity: 1
        }
    ],
    'focus-in-contract': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            letterSpacing: '1em',
            filter: 'blur(12px)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            letterSpacing: 'normal',
            filter: 'blur(0px)',
            opacity: 1
        }
    ],
    'focus-in-contract-bck': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            letterSpacing: '1em',
            transform: 'translateZ(300px)',
            filter: 'blur(12px)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            letterSpacing: 'normal',
            transform: 'translateZ(12px)',
            filter: 'blur(0px)',
            opacity: 1
        }
    ],
    'vibrate-1': [
        {
            offset: 0,
            easing: 'linear',
            fillMode: 'both',
            transform: 'translate(0)'
        },
        {
            offset: 0.2,
            easing: 'linear',
            fillMode: 'both',
            transform: 'translate(-2px, 2px)'
        },
        {
            offset: 0.4,
            easing: 'linear',
            fillMode: 'both',
            transform: 'translate(-2px, -2px)'
        },
        {
            offset: 0.6,
            easing: 'linear',
            fillMode: 'both',
            transform: 'translate(2px, 2px)'
        },
        {
            offset: 0.8,
            easing: 'linear',
            fillMode: 'both',
            transform: 'translate(2px, -2px)'
        },
        {
            offset: 1,
            easing: 'linear',
            fillMode: 'both',
            transform: 'translate(0)'
        }
    ],
    'vibrate-2': [
        {
            offset: 0,
            easing: 'linear',
            fillMode: 'both',
            transform: 'translate(0)'
        },
        {
            offset: 0.1,
            easing: 'linear',
            fillMode: 'both',
            transform: 'translate(-2px, -2px)'
        },
        {
            offset: 0.2,
            easing: 'linear',
            fillMode: 'both',
            transform: 'translate(2px, -2px)'
        },
        {
            offset: 0.3,
            easing: 'linear',
            fillMode: 'both',
            transform: 'translate(-2px, 2px)'
        },
        {
            offset: 0.4,
            easing: 'linear',
            fillMode: 'both',
            transform: 'translate(2px, 2px)'
        },
        {
            offset: 0.5,
            easing: 'linear',
            fillMode: 'both',
            transform: 'translate(-2px, -2px)'
        },
        {
            offset: 0.6,
            easing: 'linear',
            fillMode: 'both',
            transform: 'translate(2px, -2px)'
        },
        {
            offset: 0.7,
            easing: 'linear',
            fillMode: 'both',
            transform: 'translate(-2px, 2px)'
        },
        {
            offset: 0.8,
            easing: 'linear',
            fillMode: 'both',
            transform: 'translate(-2px, -2px)'
        },
        {
            offset: 0.9,
            easing: 'linear',
            fillMode: 'both',
            transform: 'translate(2px, -2px)'
        },
        {
            offset: 1,
            easing: 'linear',
            fillMode: 'both',
            transform: 'translate(0)'
        }
    ],
    'shake-horizontal': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateX(0)'
        },
        {
            offset: 0.1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateX(-10px)'
        },
        {
            offset: 0.2,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateX(10px)'
        },
        {
            offset: 0.3,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateX(-10px)'
        },
        {
            offset: 0.4,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateX(10px)'
        },
        {
            offset: 0.5,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateX(-10px)'
        },
        {
            offset: 0.6,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateX(10px)'
        },
        {
            offset: 0.7,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateX(-10px)'
        },
        {
            offset: 0.8,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateX(8px)'
        },
        {
            offset: 0.9,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateX(-8px)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateX(0)'
        }
    ],
    'shake-vertical': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateY(0)'
        },
        {
            offset: 0.1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateY(-8px)'
        },
        {
            offset: 0.2,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateY(8px)'
        },
        {
            offset: 0.3,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateY(-8px)'
        },
        {
            offset: 0.4,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateY(8px)'
        },
        {
            offset: 0.5,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateY(-8px)'
        },
        {
            offset: 0.6,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateY(8px)'
        },
        {
            offset: 0.7,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateY(-8px)'
        },
        {
            offset: 0.8,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateY(6.4px)'
        },
        {
            offset: 0.9,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateY(-6.4px)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'translateY(0)'
        }
    ],
    'shake-lr': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(0deg)',
            transformOrigin: '50% 50%'
        },
        {
            offset: 0.1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(8deg)'
        },
        {
            offset: 0.2,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(-10deg)'
        },
        {
            offset: 0.3,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(10deg)'
        },
        {
            offset: 0.4,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(-10deg)'
        },
        {
            offset: 0.5,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(10deg)'
        },
        {
            offset: 0.6,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(-10deg)'
        },
        {
            offset: 0.7,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(10deg)'
        },
        {
            offset: 0.8,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(-8deg)'
        },
        {
            offset: 0.9,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(8deg)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(0deg)',
            transformOrigin: '50% 50%'
        }
    ],
    'shake-top': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(0deg)',
            transformOrigin: '50% 0'
        },
        {
            offset: 0.1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(2deg)'
        },
        {
            offset: 0.2,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(-4deg)'
        },
        {
            offset: 0.3,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(4deg)'
        },
        {
            offset: 0.4,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(-4deg)'
        },
        {
            offset: 0.5,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(4deg)'
        },
        {
            offset: 0.6,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(-4deg)'
        },
        {
            offset: 0.7,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(4deg)'
        },
        {
            offset: 0.8,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(-2deg)'
        },
        {
            offset: 0.9,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(2deg)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(0deg)',
            transformOrigin: '50% 0'
        }
    ],
    'shake-tr': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(0deg)',
            transformOrigin: '100% 0'
        },
        {
            offset: 0.1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(2deg)'
        },
        {
            offset: 0.2,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(-4deg)'
        },
        {
            offset: 0.3,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(4deg)'
        },
        {
            offset: 0.4,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(-4deg)'
        },
        {
            offset: 0.5,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(4deg)'
        },
        {
            offset: 0.6,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(-4deg)'
        },
        {
            offset: 0.7,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(4deg)'
        },
        {
            offset: 0.8,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(-2deg)'
        },
        {
            offset: 0.9,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(2deg)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(0deg)',
            transformOrigin: '100% 0'
        }
    ],
    'shake-right': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(0deg)',
            transformOrigin: '100% 50%'
        },
        {
            offset: 0.1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(2deg)'
        },
        {
            offset: 0.2,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(-4deg)'
        },
        {
            offset: 0.3,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(4deg)'
        },
        {
            offset: 0.4,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(-4deg)'
        },
        {
            offset: 0.5,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(4deg)'
        },
        {
            offset: 0.6,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(-4deg)'
        },
        {
            offset: 0.7,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(4deg)'
        },
        {
            offset: 0.8,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(-2deg)'
        },
        {
            offset: 0.9,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(2deg)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(0deg)',
            transformOrigin: '100% 50%'
        }
    ],
    'shake-br': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(0deg)',
            transformOrigin: '100% 100%'
        },
        {
            offset: 0.1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(2deg)'
        },
        {
            offset: 0.2,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(-4deg)'
        },
        {
            offset: 0.3,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(4deg)'
        },
        {
            offset: 0.4,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(-4deg)'
        },
        {
            offset: 0.5,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(4deg)'
        },
        {
            offset: 0.6,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(-4deg)'
        },
        {
            offset: 0.7,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(4deg)'
        },
        {
            offset: 0.8,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(-2deg)'
        },
        {
            offset: 0.9,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(2deg)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(0deg)',
            transformOrigin: '100% 100%'
        }
    ],
    'shake-bottom': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(0deg)',
            transformOrigin: '50% 100%'
        },
        {
            offset: 0.1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(2deg)'
        },
        {
            offset: 0.2,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(-4deg)'
        },
        {
            offset: 0.3,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(4deg)'
        },
        {
            offset: 0.4,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(-4deg)'
        },
        {
            offset: 0.5,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(4deg)'
        },
        {
            offset: 0.6,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(-4deg)'
        },
        {
            offset: 0.7,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(4deg)'
        },
        {
            offset: 0.8,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(-2deg)'
        },
        {
            offset: 0.9,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(2deg)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(0deg)',
            transformOrigin: '50% 100%'
        }
    ],
    'shake-bl': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(0deg)',
            transformOrigin: '0% 100%'
        },
        {
            offset: 0.1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(2deg)'
        },
        {
            offset: 0.2,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(-4deg)'
        },
        {
            offset: 0.3,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(4deg)'
        },
        {
            offset: 0.4,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(-4deg)'
        },
        {
            offset: 0.5,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(4deg)'
        },
        {
            offset: 0.6,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(-4deg)'
        },
        {
            offset: 0.7,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(4deg)'
        },
        {
            offset: 0.8,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(-2deg)'
        },
        {
            offset: 0.9,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(2deg)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(0deg)',
            transformOrigin: '0% 100%'
        }
    ],
    'shake-left': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(0deg)',
            transformOrigin: '0% 50%'
        },
        {
            offset: 0.1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(2deg)'
        },
        {
            offset: 0.2,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(-4deg)'
        },
        {
            offset: 0.3,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(4deg)'
        },
        {
            offset: 0.4,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(-4deg)'
        },
        {
            offset: 0.5,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(4deg)'
        },
        {
            offset: 0.6,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(-4deg)'
        },
        {
            offset: 0.7,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(4deg)'
        },
        {
            offset: 0.8,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(-2deg)'
        },
        {
            offset: 0.9,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(2deg)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(0deg)',
            transformOrigin: '0% 50%'
        }
    ],
    'shake-tl': [
        {
            offset: 0,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(0deg)',
            transformOrigin: '0% 0%'
        },
        {
            offset: 0.1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(2deg)'
        },
        {
            offset: 0.2,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(-4deg)'
        },
        {
            offset: 0.3,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(4deg)'
        },
        {
            offset: 0.4,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(-4deg)'
        },
        {
            offset: 0.5,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(4deg)'
        },
        {
            offset: 0.6,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(-4deg)'
        },
        {
            offset: 0.7,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(4deg)'
        },
        {
            offset: 0.8,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(-2deg)'
        },
        {
            offset: 0.9,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(2deg)'
        },
        {
            offset: 1,
            easing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            fillMode: 'both',
            transform: 'rotate(0deg)',
            transformOrigin: '0% 0%'
        }
    ],
    'jello-horizontal': [
        {
            offset: 0,
            fillMode: 'both',
            transform: 'scale3d(1, 1, 1)'
        },
        {
            offset: 0.3,
            fillMode: 'both',
            transform: 'scale3d(1.25, 0.75, 1)'
        },
        {
            offset: 0.4,
            fillMode: 'both',
            transform: 'scale3d(0.75, 1.25, 1)'
        },
        {
            offset: 0.5,
            fillMode: 'both',
            transform: 'scale3d(1.15, 0.85, 1)'
        },
        {
            offset: 0.65,
            fillMode: 'both',
            transform: 'scale3d(0.95, 1.05, 1)'
        },
        {
            offset: 0.75,
            fillMode: 'both',
            transform: 'scale3d(1.05, 0.95, 1)'
        },
        {
            offset: 1,
            fillMode: 'both',
            transform: 'scale3d(1, 1, 1)'
        }
    ],
    'jello-vertical': [
        {
            offset: 0,
            fillMode: 'both',
            transform: 'scale3d(1, 1, 1)'
        },
        {
            offset: 0.3,
            fillMode: 'both',
            transform: 'scale3d(0.75, 1.25, 1)'
        },
        {
            offset: 0.4,
            fillMode: 'both',
            transform: 'scale3d(1.25, 0.75, 1)'
        },
        {
            offset: 0.5,
            fillMode: 'both',
            transform: 'scale3d(0.85, 1.15, 1)'
        },
        {
            offset: 0.65,
            fillMode: 'both',
            transform: 'scale3d(1.05, 0.95, 1)'
        },
        {
            offset: 0.75,
            fillMode: 'both',
            transform: 'scale3d(0.95, 1.05, 1)'
        },
        {
            offset: 1,
            fillMode: 'both',
            transform: 'scale3d(1, 1, 1)'
        }
    ],
    'jello-diagonal-1': [
        {
            offset: 0,
            fillMode: 'both',
            transform: 'skew(0deg, 0deg)'
        },
        {
            offset: 0.3,
            fillMode: 'both',
            transform: ' skew(25deg, 25deg)'
        },
        {
            offset: 0.4,
            fillMode: 'both',
            transform: 'skew(-15deg, -15deg)'
        },
        {
            offset: 0.5,
            fillMode: 'both',
            transform: 'skew(15deg, 15deg)'
        },
        {
            offset: 0.65,
            fillMode: 'both',
            transform: 'skew(-5deg, -5deg)'
        },
        {
            offset: 0.75,
            fillMode: 'both',
            transform: 'skew(5deg, 5deg)'
        },
        {
            offset: 1,
            fillMode: 'both',
            transform: 'skew(0deg, 0deg)'
        }
    ],
    'jello-diagonal-2': [
        {
            offset: 0,
            fillMode: 'both',
            transform: 'skew(0deg, 0deg)'
        },
        {
            offset: 0.3,
            fillMode: 'both',
            transform: 'skew(-25deg, -25deg)'
        },
        {
            offset: 0.4,
            fillMode: 'both',
            transform: 'skew(15deg, 15deg)'
        },
        {
            offset: 0.5,
            fillMode: 'both',
            transform: 'skew(-15deg, -15deg)'
        },
        {
            offset: 0.65,
            fillMode: 'both',
            transform: 'skew(5deg, 5deg)'
        },
        {
            offset: 0.75,
            fillMode: 'both',
            transform: 'skew(-5deg, -5deg)'
        },
        {
            offset: 1,
            fillMode: 'both',
            transform: 'skew(0deg, 0deg)'
        }
    ],
    'wobble-hor-bottom': [
        {
            offset: 0,
            fillMode: 'both',
            transform: 'translateX(0)',
            transformOrigin: '50% 50%'
        },
        {
            offset: 0.15,
            fillMode: 'both',
            transform: 'translateX(-30px) rotate(-6deg)'
        },
        {
            offset: 0.3,
            fillMode: 'both',
            transform: 'translateX(15px) rotate(6deg)'
        },
        {
            offset: 0.45,
            fillMode: 'both',
            transform: 'translateX(-15px) rotate(-3.6deg)'
        },
        {
            offset: 0.6,
            fillMode: 'both',
            transform: 'translateX(9px) rotate(2.4deg)'
        },
        {
            offset: 0.75,
            fillMode: 'both',
            transform: 'translateX(-6px) rotate(-1.2deg)'
        },
        {
            offset: 1,
            fillMode: 'both',
            transform: 'translateX(0)',
            transformOrigin: '50% 50%'
        }
    ],
    'wobble-hor-top': [
        {
            offset: 0,
            fillMode: 'both',
            transform: 'translateX(0)',
            transformOrigin: '50% 50%'
        },
        {
            offset: 0.15,
            fillMode: 'both',
            transform: 'translateX(-30px) rotate(6deg)'
        },
        {
            offset: 0.3,
            fillMode: 'both',
            transform: 'translateX(15px) rotate(-6deg)'
        },
        {
            offset: 0.45,
            fillMode: 'both',
            transform: 'translateX(-15px) rotate(3.6deg)'
        },
        {
            offset: 0.6,
            fillMode: 'both',
            transform: 'translateX(9px) rotate(-2.4deg)'
        },
        {
            offset: 0.75,
            fillMode: 'both',
            transform: 'translateX(-6px) rotate(1.2deg)'
        },
        {
            offset: 1,
            fillMode: 'both',
            transform: 'translateX(0)',
            transformOrigin: '50% 50%'
        }
    ],
    'wobble-ver-left': [
        {
            offset: 0,
            fillMode: 'both',
            transform: 'translateY(0) rotate(0)',
            transformOrigin: '50% 50%'
        },
        {
            offset: 0.15,
            fillMode: 'both',
            transform: 'translateY(-30px) rotate(-6deg)'
        },
        {
            offset: 0.3,
            fillMode: 'both',
            transform: 'translateY(15px) rotate(6deg)'
        },
        {
            offset: 0.45,
            fillMode: 'both',
            transform: 'translateY(-15px) rotate(-3.6deg)'
        },
        {
            offset: 0.6,
            fillMode: 'both',
            transform: 'translateY(9px) rotate(2.4deg)'
        },
        {
            offset: 0.75,
            fillMode: 'both',
            transform: 'translateY(-6px) rotate(-1.2deg)'
        },
        {
            offset: 1,
            fillMode: 'both',
            transform: 'translateY(0) rotate(0)',
            transformOrigin: '50% 50%'
        }
    ],
    'wobble-ver-right': [
        {
            offset: 0,
            fillMode: 'both',
            transform: 'translateY(0) rotate(0)',
            transformOrigin: '50% 50%'
        },
        {
            offset: 0.15,
            fillMode: 'both',
            transform: 'translateY(-30px) rotate(6deg)'
        },
        {
            offset: 0.3,
            fillMode: 'both',
            transform: 'translateY(15px) rotate(-6deg)'
        },
        {
            offset: 0.45,
            fillMode: 'both',
            transform: 'translateY(-15px) rotate(3.6deg)'
        },
        {
            offset: 0.6,
            fillMode: 'both',
            transform: 'translateY(9px) rotate(-2.4deg)'
        },
        {
            offset: 0.75,
            fillMode: 'both',
            transform: 'translateY(-6px) rotate(1.2deg)'
        },
        {
            offset: 1,
            fillMode: 'both',
            transform: 'translateY(0) rotate(0)',
            transformOrigin: '50% 50%'
        }
    ],
    'bounce-top': [
        {
            offset: 0,
            fillMode: 'both',
            transform: 'translateY(-45px)',
            easing: 'ease-in',
            opacity: 1
        },
        {
            offset: 0.24,
            fillMode: 'both',
            opacity: 1
        },
        {
            offset: 0.25,
            fillMode: 'both',
            transform: 'translateY(0px)',
            easing: 'ease-out'
        },
        {
            offset: 0.4,
            fillMode: 'both',
            transform: 'translateY(-24px)',
            easing: 'ease-in'
        },
        {
            offset: 0.55,
            fillMode: 'both',
            transform: 'translateY(0px)',
            easing: 'ease-out'
        },
        {
            offset: 0.65,
            fillMode: 'both',
            transform: 'translateY(-12px)',
            easing: 'ease-in'
        },
        {
            offset: 0.75,
            fillMode: 'both',
            transform: 'translateY(0px)',
            easing: 'ease-out'
        },
        {
            offset: 0.82,
            fillMode: 'both',
            transform: 'translateY(-6px)',
            easing: 'ease-in'
        },
        {
            offset: 0.87,
            fillMode: 'both',
            transform: 'translateY(0px)',
            easing: 'ease-out'
        },
        {
            offset: 0.93,
            fillMode: 'both',
            transform: 'translateY(-4px)',
            easing: 'ease-in'
        },
        {
            offset: 1,
            fillMode: 'both',
            transform: 'translateY(0px)',
            easing: 'ease-out',
            opacity: 1
        }
    ],
    'bounce-bottom': [
        {
            offset: 0,
            fillMode: 'both',
            transform: 'translateY(45px)',
            easing: 'ease-in',
            opacity: 1
        },
        {
            offset: 0.24,
            fillMode: 'both',
            opacity: 1
        },
        {
            offset: 0.25,
            fillMode: 'both',
            transform: 'translateY(0px)',
            easing: 'ease-out'
        },
        {
            offset: 0.4,
            fillMode: 'both',
            transform: 'translateY(24px)',
            easing: 'ease-in'
        },
        {
            offset: 0.55,
            fillMode: 'both',
            transform: 'translateY(0px)',
            easing: 'ease-out'
        },
        {
            offset: 0.65,
            fillMode: 'both',
            transform: 'translateY(12px)',
            easing: 'ease-in'
        },
        {
            offset: 0.75,
            fillMode: 'both',
            transform: 'translateY(0px)',
            easing: 'ease-out'
        },
        {
            offset: 0.82,
            fillMode: 'both',
            transform: 'translateY(6px)',
            easing: 'ease-in'
        },
        {
            offset: 0.87,
            fillMode: 'both',
            transform: 'translateY(0px)',
            easing: 'ease-out'
        },
        {
            offset: 0.93,
            fillMode: 'both',
            transform: 'translateY(4px)',
            easing: 'ease-in'
        },
        {
            offset: 1,
            fillMode: 'both',
            transform: 'translateY(0px)',
            easing: 'ease-out',
            opacity: 1
        }
    ],
    'bounce-left': [
        {
            offset: 0,
            fillMode: 'both',
            transform: 'translateX(-48px)',
            easing: 'ease-in',
            opacity: 1
        },
        {
            offset: 0.24,
            fillMode: 'both',
            opacity: 1
        },
        {
            offset: 0.25,
            fillMode: 'both',
            transform: 'translateX(0px)',
            easing: 'ease-out'
        },
        {
            offset: 0.4,
            fillMode: 'both',
            transform: 'translateX(-26px)',
            easing: 'ease-in'
        },
        {
            offset: 0.55,
            fillMode: 'both',
            transform: 'translateX(0px)',
            easing: 'ease-out'
        },
        {
            offset: 0.65,
            fillMode: 'both',
            transform: 'translateX(-13px)',
            easing: 'ease-in'
        },
        {
            offset: 0.75,
            fillMode: 'both',
            transform: 'translateX(0px)',
            easing: 'ease-out'
        },
        {
            offset: 0.82,
            fillMode: 'both',
            transform: 'translateX(-6.5px)',
            easing: 'ease-in'
        },
        {
            offset: 0.87,
            fillMode: 'both',
            transform: 'translateX(0px)',
            easing: 'ease-out'
        },
        {
            offset: 0.93,
            fillMode: 'both',
            transform: 'translateX(-4px)',
            easing: 'ease-in'
        },
        {
            offset: 0.98,
            fillMode: 'both',
            transform: 'translateX(0px)',
            easing: 'ease-out'
        },
        {
            offset: 1,
            fillMode: 'both',
            transform: 'translateX(0px)',
            easing: 'ease-out',
            opacity: 1
        }
    ],
    'bounce-right': [
        {
            offset: 0,
            fillMode: 'both',
            transform: 'translateX(48px)',
            easing: 'ease-in',
            opacity: 1
        },
        {
            offset: 0.24,
            fillMode: 'both',
            opacity: 1
        },
        {
            offset: 0.25,
            fillMode: 'both',
            transform: 'translateX(0px)',
            easing: 'ease-out'
        },
        {
            offset: 0.4,
            fillMode: 'both',
            transform: 'translateX(26px)',
            easing: 'ease-in'
        },
        {
            offset: 0.55,
            fillMode: 'both',
            transform: 'translateX(0px)',
            easing: 'ease-out'
        },
        {
            offset: 0.65,
            fillMode: 'both',
            transform: 'translateX(13px)',
            easing: 'ease-in'
        },
        {
            offset: 0.75,
            fillMode: 'both',
            transform: 'translateX(0px)',
            easing: 'ease-out'
        },
        {
            offset: 0.82,
            fillMode: 'both',
            transform: 'translateX(6.5px)',
            easing: 'ease-in'
        },
        {
            offset: 0.87,
            fillMode: 'both',
            transform: 'translateX(0px)',
            easing: 'ease-out'
        },
        {
            offset: 0.93,
            fillMode: 'both',
            transform: 'translateX(4px)',
            easing: 'ease-in'
        },
        {
            offset: 0.98,
            fillMode: 'both',
            transform: 'translateX(0px)',
            easing: 'ease-out'
        },
        {
            offset: 1,
            fillMode: 'both',
            transform: 'translateX(0px)',
            easing: 'ease-out',
            opacity: 1
        }
    ],
    'pulsate-bck': [
        {
            offset: 0,
            easing: 'ease-in-out',
            fillMode: 'both',
            transform: 'scale(1)'
        },
        {
            offset: 0.5,
            easing: 'ease-in-out',
            fillMode: 'both',
            transform: 'scale(0.9)'
        },
        {
            offset: 1,
            easing: 'ease-in-out',
            fillMode: 'both',
            transform: 'scale(1)'
        }
    ],
    'pulsate-fwd': [
        {
            offset: 0,
            easing: 'ease-in-out',
            fillMode: 'both',
            transform: 'scale(1)'
        },
        {
            offset: 0.5,
            easing: 'ease-in-out',
            fillMode: 'both',
            transform: 'scale(1.1)'
        },
        {
            offset: 1,
            easing: 'ease-in-out',
            fillMode: 'both',
            transform: 'scale(1)'
        }
    ],
    ping: [
        {
            offset: 0,
            easing: 'ease-in-out',
            fillMode: 'both',
            transform: 'scale(0.2)',
            opacity: 0.8
        },
        {
            offset: 0.8,
            easing: 'ease-in-out',
            fillMode: 'both',
            transform: 'scale(1.2)',
            opacity: 0
        },
        {
            offset: 1,
            easing: 'ease-in-out',
            fillMode: 'both',
            transform: 'scale(2.2)',
            opacity: 0
        }
    ],
    'ken-burns-top': [
        {
            offset: 0,
            easing: 'ease-out',
            fillMode: 'both',
            transform: 'scale(1) translateY(0)',
            transformOrigin: '50% 16%'
        },
        {
            offset: 1,
            easing: 'ease-out',
            fillMode: 'both',
            transform: 'scale(1.25) translateY(-15px)',
            transformOrigin: 'top'
        }
    ],
    'ken-burns-top-right': [
        {
            offset: 0,
            easing: 'ease-out',
            fillMode: 'both',
            transform: 'scale(1) translate(0, 0)',
            transformOrigin: '84% 16%'
        },
        {
            offset: 1,
            easing: 'ease-out',
            fillMode: 'both',
            transform: 'scale(1.25) translate(20px, -15px)',
            transformOrigin: 'right top'
        }
    ],
    'ken-burns-right': [
        {
            offset: 0,
            easing: 'ease-out',
            fillMode: 'both',
            transform: 'scale(1) translate(0, 0)',
            transformOrigin: '84% 50%'
        },
        {
            offset: 1,
            easing: 'ease-out',
            fillMode: 'both',
            transform: 'scale(1.25) translateX(20px)',
            transformOrigin: 'right'
        }
    ],
    'ken-burns-bottom-right': [
        {
            offset: 0,
            easing: 'ease-out',
            fillMode: 'both',
            transform: 'scale(1) translate(0, 0)',
            transformOrigin: '84% 84%'
        },
        {
            offset: 1,
            easing: 'ease-out',
            fillMode: 'both',
            transform: 'scale(1.25) translate(20px, 15px)',
            transformOrigin: 'right bottom'
        }
    ],
    'ken-burns-bottom': [
        {
            offset: 0,
            easing: 'ease-out',
            fillMode: 'both',
            transform: 'scale(1) translateY(0)',
            transformOrigin: '50% 84%'
        },
        {
            offset: 1,
            easing: 'ease-out',
            fillMode: 'both',
            transform: 'scale(1.25) translateY(15px)',
            transformOrigin: 'bottom'
        }
    ],
    'ken-burns-bottom-left': [
        {
            offset: 0,
            easing: 'ease-out',
            fillMode: 'both',
            transform: 'scale(1) translate(0, 0)',
            transformOrigin: '16% 84%'
        },
        {
            offset: 1,
            easing: 'ease-out',
            fillMode: 'both',
            transform: 'scale(1.25) translate(-20px, 15px)',
            transformOrigin: 'left bottom'
        }
    ],
    'ken-burns-left': [
        {
            offset: 0,
            easing: 'ease-out',
            fillMode: 'both',
            transform: 'scale(1) translate(0, 0)',
            transformOrigin: '16% 50%'
        },
        {
            offset: 1,
            easing: 'ease-out',
            fillMode: 'both',
            transform: 'scale(1.25) translateX(-20px)',
            transformOrigin: 'left'
        }
    ],
    'ken-burns-top-left': [
        {
            offset: 0,
            easing: 'ease-out',
            fillMode: 'both',
            transform: 'scale(1) translate(0, 0)',
            transformOrigin: '16% 16%'
        },
        {
            offset: 1,
            easing: 'ease-out',
            fillMode: 'both',
            transform: 'scale(1.25) translate(-20px, -15px)',
            transformOrigin: 'left top'
        }
    ]
};

const sortObject = (o) => Object.keys(o)
    .sort()
    .reduce((r, k) => ((r[k] = o[k]), r), {});
const animations = Object.assign({ none: [] }, sortObject(Object.assign(Object.assign({}, animatecss), animista)));

const easings = {
    linear: 'linear',
    ease: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
    'ease-in': 'cubic-bezier(0.42, 0, 1, 1)',
    'ease-out': 'cubic-bezier(0, 0, 0.58, 1)',
    'ease-in-out': 'cubic-bezier(0.42, 0, 0.58, 1)',
    'ease-in-cubic': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    'ease-out-cubic': 'cubic-bezier(0.215, 0.61, 0.355, 1.0)',
    'ease-in-out-cubic': 'cubic-bezier(0.645, 0.045, 0.355, 1.0)',
    'ease-in-circ': 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
    'ease-out-circ': 'cubic-bezier(0.075, 0.82, 0.165, 1.0)',
    'ease-in-out-circ': 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
    'ease-in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
    'ease-out-expo': 'cubic-bezier(0.19, 1.0, 0.22, 1.0)',
    'ease-in-out-expo': 'cubic-bezier(1.0, 0.0, 0.0, 1.0)',
    'ease-in-quad': 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
    'ease-out-quad': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    'ease-in-out-quad': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
    'ease-in-quart': 'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
    'ease-out-quart': 'cubic-bezier(0.165, 0.84, 0.44, 1.0)',
    'ease-in-out-quart': 'cubic-bezier(0.77, 0.0, 0.175, 1.0)',
    'ease-in-quint': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
    'ease-out-quint': 'cubic-bezier(0.23, 1.0, 0.32, 1.0)',
    'ease-in-out-quint': 'cubic-bezier(0.86, 0.0, 0.07, 1.0)',
    'ease-in-sine': 'cubic-bezier(0.47, 0.0, 0.745, 0.715)',
    'ease-out-sine': 'cubic-bezier(0.39, 0.575, 0.565, 1.0)',
    'ease-in-out-sine': 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
    'ease-in-back': 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
    'ease-out-back': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    'ease-in-out-back': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
};

const animationCss = ":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{display:contents}";

const Animate = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.slCancel = index.createEvent(this, "slCancel", 7);
        this.slFinish = index.createEvent(this, "slFinish", 7);
        this.slStart = index.createEvent(this, "slStart", 7);
        this.hasStarted = false;
        /** The name of the animation to use. */
        this.name = 'none';
        /** The number of milliseconds to delay the start of the animation. */
        this.delay = 0;
        /** Determines the direction of playback as well as the behavior when reaching the end of an iteration. */
        this.direction = 'normal';
        /** The number of milliseconds each iteration of the animation takes to complete. */
        this.duration = 1000;
        /** The rate of the animation's change over time. */
        this.easing = 'linear';
        /** The number of milliseconds to delay after the active period of an animation sequence. */
        this.endDelay = 0;
        /** Sets how the animation applies styles to its target before and after its execution. */
        this.fill = 'auto';
        /** The number of iterations to run before the animation completes. Defaults to `Infinity`, which loops. */
        this.iterations = Infinity;
        /** The offset at which to start the animation, usually between 0 (start) and 1 (end). */
        this.iterationStart = 0;
        /**
         * Sets the animation's playback rate. The default is `1`, which plays the animation at a normal speed. Setting this
         * to `2`, for example, will double the animation's speed. A negative value can be used to reverse the animation. This
         * value can be changed without causing the animation to restart.
         */
        this.playbackRate = 1;
        /** Pauses the animation. The animation will resume when this prop is removed. */
        this.pause = false;
    }
    get element() {
        const slot = this.host.shadowRoot.querySelector('slot');
        return slot.assignedElements({ flatten: true })[0];
    }
    // Restart the animation when any of these properties change
    handleRestartAnimation() {
        this.createAnimation();
    }
    handlePauseChange() {
        this.pause ? this.animation.pause() : this.animation.play();
        if (!this.pause && !this.hasStarted) {
            this.hasStarted = true;
            this.slStart.emit();
        }
    }
    handlePlaybackRateChange() {
        this.animation.playbackRate = this.playbackRate;
    }
    connectedCallback() {
        this.handleAnimationFinish = this.handleAnimationFinish.bind(this);
        this.handleAnimationCancel = this.handleAnimationCancel.bind(this);
    }
    componentDidLoad() {
        this.createAnimation();
    }
    disconnectedCallback() {
        this.destroyAnimation();
    }
    handleAnimationFinish() {
        this.slFinish.emit();
    }
    handleAnimationCancel() {
        this.slCancel.emit();
    }
    createAnimation() {
        const easing = easings.hasOwnProperty(this.easing) ? easings[this.easing] : this.easing;
        const keyframes = this.keyframes ? this.keyframes : animations[this.name];
        this.destroyAnimation();
        this.animation = this.element.animate(keyframes, {
            delay: this.delay,
            direction: this.direction,
            duration: this.duration,
            easing,
            endDelay: this.endDelay,
            fill: this.fill,
            iterationStart: this.iterationStart,
            iterations: this.iterations
        });
        this.animation.playbackRate = this.playbackRate;
        this.animation.addEventListener('cancel', this.handleAnimationCancel);
        this.animation.addEventListener('finish', this.handleAnimationFinish);
        if (this.pause) {
            this.animation.pause();
        }
        else {
            this.hasStarted = true;
            this.slStart.emit();
        }
    }
    destroyAnimation() {
        if (this.animation) {
            this.animation.cancel();
            this.animation.removeEventListener('cancel', this.handleAnimationCancel);
            this.animation.removeEventListener('finish', this.handleAnimationFinish);
            this.animation = null;
            this.hasStarted = false;
        }
    }
    /** Clears all KeyframeEffects caused by this animation and aborts its playback. */
    async cancel() {
        try {
            this.animation.cancel();
        }
        catch (_a) { }
    }
    /** Sets the playback time to the end of the animation corresponding to the current playback direction. */
    async finish() {
        try {
            this.animation.finish();
        }
        catch (_a) { }
    }
    /** Gets a list of all supported animation names. */
    async getAnimationNames() {
        return Object.entries(animations).map(([name]) => name);
    }
    /** Gets a list of all supported easing function names. */
    async getEasingNames() {
        return Object.entries(easings).map(([name]) => name);
    }
    /** Gets the current time of the animation in milliseconds. */
    async getCurrentTime() {
        return this.animation.currentTime;
    }
    /** Sets the current time of the animation in milliseconds. */
    async setCurrentTime(time) {
        this.animation.currentTime = time;
    }
    render() {
        return index.h("slot", null);
    }
    get host() { return index.getElement(this); }
    static get watchers() { return {
        "delay": ["handleRestartAnimation"],
        "direction": ["handleRestartAnimation"],
        "easing": ["handleRestartAnimation"],
        "endDelay": ["handleRestartAnimation"],
        "fill": ["handleRestartAnimation"],
        "iterations": ["handleRestartAnimation"],
        "iterationStart": ["handleRestartAnimation"],
        "keyframes": ["handleRestartAnimation"],
        "name": ["handleRestartAnimation"],
        "pause": ["handlePauseChange"],
        "playbackRate": ["handlePlaybackRateChange"]
    }; }
};
Animate.style = animationCss;

exports.sl_animation = Animate;
