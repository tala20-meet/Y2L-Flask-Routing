/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1 to offer multiple
 * easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright Â© 2008 George McGinley Smith All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer. Redistributions in binary
 * form must reproduce the above copyright notice, this list of conditions and
 * the following disclaimer in the documentation and/or other materials provided
 * with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to
 * endorse or promote products derived from this software without specific prior
 * written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 *
 */

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
    def: 'easeOutQuad',
    swing: function (x, t, b, c, d) {
        // alert(jQuery.easing.default);
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    },
    easeInQuad: function (x, t, b, c, d) {
        return c*(t/=d)*t + b;
    },
    easeOutQuad: function (x, t, b, c, d) {
        return -c *(t/=d)*(t-2) + b;
    },
    easeInOutQuad: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t + b;
        return -c/2 * ((--t)*(t-2) - 1) + b;
    },
    easeInCubic: function (x, t, b, c, d) {
        return c*(t/=d)*t*t + b;
    },
    easeOutCubic: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t + 1) + b;
    },
    easeInOutCubic: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t + b;
        return c/2*((t-=2)*t*t + 2) + b;
    },
    easeInQuart: function (x, t, b, c, d) {
        return c*(t/=d)*t*t*t + b;
    },
    easeOutQuart: function (x, t, b, c, d) {
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    },
    easeInOutQuart: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
        return -c/2 * ((t-=2)*t*t*t - 2) + b;
    },
    easeInQuint: function (x, t, b, c, d) {
        return c*(t/=d)*t*t*t*t + b;
    },
    easeOutQuint: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t*t*t + 1) + b;
    },
    easeInOutQuint: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
        return c/2*((t-=2)*t*t*t*t + 2) + b;
    },
    easeInSine: function (x, t, b, c, d) {
        return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
    },
    easeOutSine: function (x, t, b, c, d) {
        return c * Math.sin(t/d * (Math.PI/2)) + b;
    },
    easeInOutSine: function (x, t, b, c, d) {
        return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
    },
    easeInExpo: function (x, t, b, c, d) {
        return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
    },
    easeOutExpo: function (x, t, b, c, d) {
        return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
    },
    easeInOutExpo: function (x, t, b, c, d) {
        if (t==0) return b;
        if (t==d) return b+c;
        if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
        return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function (x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
    },
    easeOutCirc: function (x, t, b, c, d) {
        return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
    },
    easeInOutCirc: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
        return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
    },
    easeInElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    },
    easeOutElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
    },
    easeInOutElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
    },
    easeInBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*(t/=d)*t*((s+1)*t - s) + b;
    },
    easeOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
    },
    easeInOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
        return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
    },
    easeInBounce: function (x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
    },
    easeOutBounce: function (x, t, b, c, d) {
        if ((t/=d) < (1/2.75)) {
            return c*(7.5625*t*t) + b;
        } else if (t < (2/2.75)) {
            return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
        } else if (t < (2.5/2.75)) {
            return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
        } else {
            return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
        }
    },
    easeInOutBounce: function (x, t, b, c, d) {
        if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
    }
});


/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright Â© 2001 Robert Penner All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer. Redistributions in binary
 * form must reproduce the above copyright notice, this list of conditions and
 * the following disclaimer in the documentation and/or other materials provided
 * with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to
 * endorse or promote products derived from this software without specific prior
 * written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 *
 */





/*
 * 8/5/2014 rly - IMPORTANT NOTE!!: this method has been modified to be accommodate dynamic addition
 * of carousel divs after the page onload event.  See variables cycleInitFunction and cycleInitParam
 */
var cycleInitFunction;
var cycleInitParam;

/*!
 * jQuery Cycle2; version: 2.1.6 build: 20141007
 * http://jquery.malsup.com/cycle2/
 * Copyright (c) 2014 M. Alsup; Dual licensed: MIT/GPL
 */
!function(a){"use strict";function b(a){return(a||"").toLowerCase()}var c="2.1.6";a.fn.cycle=function(c){var d;return 0!==this.length||a.isReady?this.each(function(){var d,e,f,g,h=a(this),i=a.fn.cycle.log;if(!h.data("cycle.opts")){(h.data("cycle-log")===!1||c&&c.log===!1||e&&e.log===!1)&&(i=a.noop),i("--c2 init--"),d=h.data();for(var j in d)d.hasOwnProperty(j)&&/^cycle[A-Z]+/.test(j)&&(g=d[j],f=j.match(/^cycle(.*)/)[1].replace(/^[A-Z]/,b),i(f+":",g,"("+typeof g+")"),d[f]=g);e=a.extend({},a.fn.cycle.defaults,d,c||{}),e.timeoutId=0,e.paused=e.paused||!1,e.container=h,e._maxZ=e.maxZ,e.API=a.extend({_container:h},a.fn.cycle.API),e.API.log=i,e.API.trigger=function(a,b){return e.container.trigger(a,b),e.API},h.data("cycle.opts",e),h.data("cycle.API",e.API),e.API.trigger("cycle-bootstrap",[e,e.API]),e.API.addInitialSlides(),e.API.preInitSlideshow(),e.slides.length&&e.API.initSlideshow()}}):(d={s:this.selector,c:this.context},a.fn.cycle.log("requeuing slideshow (dom not ready)"),a(function(){a(d.s,d.c).cycle(c)}),this)},a.fn.cycle.API={opts:function(){return this._container.data("cycle.opts")},addInitialSlides:function(){var b=this.opts(),c=b.slides;b.slideCount=0,b.slides=a(),c=c.jquery?c:b.container.find(c),b.random&&c.sort(function(){return Math.random()-.5}),b.API.add(c)},preInitSlideshow:function(){var b=this.opts();b.API.trigger("cycle-pre-initialize",[b]);var c=a.fn.cycle.transitions[b.fx];c&&a.isFunction(c.preInit)&&c.preInit(b),b._preInitialized=!0},postInitSlideshow:function(){var b=this.opts();b.API.trigger("cycle-post-initialize",[b]);var c=a.fn.cycle.transitions[b.fx];c&&a.isFunction(c.postInit)&&c.postInit(b)},initSlideshow:function(){var b,c=this.opts(),d=c.container;c.API.calcFirstSlide(),"static"==c.container.css("position")&&c.container.css("position","relative"),a(c.slides[c.currSlide]).css({opacity:1,display:"block",visibility:"visible"}),c.API.stackSlides(c.slides[c.currSlide],c.slides[c.nextSlide],!c.reverse),c.pauseOnHover&&(c.pauseOnHover!==!0&&(d=a(c.pauseOnHover)),d.hover(function(){c.API.pause(!0)},function(){c.API.resume(!0)})),c.timeout&&(b=c.API.getSlideOpts(c.currSlide),c.API.queueTransition(b,b.timeout+c.delay)),c._initialized=!0,c.API.updateView(!0),c.API.trigger("cycle-initialized",[c]),c.API.postInitSlideshow()},pause:function(b){var c=this.opts(),d=c.API.getSlideOpts(),e=c.hoverPaused||c.paused;b?c.hoverPaused=!0:c.paused=!0,e||(c.container.addClass("cycle-paused"),c.API.trigger("cycle-paused",[c]).log("cycle-paused"),d.timeout&&(clearTimeout(c.timeoutId),c.timeoutId=0,c._remainingTimeout-=a.now()-c._lastQueue,(c._remainingTimeout<0||isNaN(c._remainingTimeout))&&(c._remainingTimeout=void 0)))},resume:function(a){var b=this.opts(),c=!b.hoverPaused&&!b.paused;a?b.hoverPaused=!1:b.paused=!1,c||(b.container.removeClass("cycle-paused"),0===b.slides.filter(":animated").length&&b.API.queueTransition(b.API.getSlideOpts(),b._remainingTimeout),b.API.trigger("cycle-resumed",[b,b._remainingTimeout]).log("cycle-resumed"))},add:function(b,c){var d,e=this.opts(),f=e.slideCount,g=!1;"string"==a.type(b)&&(b=a.trim(b)),a(b).each(function(){var b,d=a(this);c?e.container.prepend(d):e.container.append(d),e.slideCount++,b=e.API.buildSlideOpts(d),e.slides=c?a(d).add(e.slides):e.slides.add(d),e.API.initSlide(b,d,--e._maxZ),d.data("cycle.opts",b),e.API.trigger("cycle-slide-added",[e,b,d])}),e.API.updateView(!0),g=e._preInitialized&&2>f&&e.slideCount>=1,g&&(e._initialized?e.timeout&&(d=e.slides.length,e.nextSlide=e.reverse?d-1:1,e.timeoutId||e.API.queueTransition(e)):e.API.initSlideshow())},calcFirstSlide:function(){var a,b=this.opts();a=parseInt(b.startingSlide||0,10),(a>=b.slides.length||0>a)&&(a=0),b.currSlide=a,b.reverse?(b.nextSlide=a-1,b.nextSlide<0&&(b.nextSlide=b.slides.length-1)):(b.nextSlide=a+1,b.nextSlide==b.slides.length&&(b.nextSlide=0))},calcNextSlide:function(){var a,b=this.opts();b.reverse?(a=b.nextSlide-1<0,b.nextSlide=a?b.slideCount-1:b.nextSlide-1,b.currSlide=a?0:b.nextSlide+1):(a=b.nextSlide+1==b.slides.length,b.nextSlide=a?0:b.nextSlide+1,b.currSlide=a?b.slides.length-1:b.nextSlide-1)},calcTx:function(b,c){var d,e=b;return e._tempFx?d=a.fn.cycle.transitions[e._tempFx]:c&&e.manualFx&&(d=a.fn.cycle.transitions[e.manualFx]),d||(d=a.fn.cycle.transitions[e.fx]),e._tempFx=null,this.opts()._tempFx=null,d||(d=a.fn.cycle.transitions.fade,e.API.log('Transition "'+e.fx+'" not found.  Using fade.')),d},prepareTx:function(a,b){var c,d,e,f,g,h=this.opts();return h.slideCount<2?void(h.timeoutId=0):(!a||h.busy&&!h.manualTrump||(h.API.stopTransition(),h.busy=!1,clearTimeout(h.timeoutId),h.timeoutId=0),void(h.busy||(0!==h.timeoutId||a)&&(d=h.slides[h.currSlide],e=h.slides[h.nextSlide],f=h.API.getSlideOpts(h.nextSlide),g=h.API.calcTx(f,a),h._tx=g,a&&void 0!==f.manualSpeed&&(f.speed=f.manualSpeed),h.nextSlide!=h.currSlide&&(a||!h.paused&&!h.hoverPaused&&h.timeout)?(h.API.trigger("cycle-before",[f,d,e,b]),g.before&&g.before(f,d,e,b),c=function(){h.busy=!1,h.container.data("cycle.opts")&&(g.after&&g.after(f,d,e,b),h.API.trigger("cycle-after",[f,d,e,b]),h.API.queueTransition(f),h.API.updateView(!0))},h.busy=!0,g.transition?g.transition(f,d,e,b,c):h.API.doTransition(f,d,e,b,c),h.API.calcNextSlide(),h.API.updateView()):h.API.queueTransition(f))))},doTransition:function(b,c,d,e,f){var g=b,h=a(c),i=a(d),j=function(){i.animate(g.animIn||{opacity:1},g.speed,g.easeIn||g.easing,f)};i.css(g.cssBefore||{}),h.animate(g.animOut||{},g.speed,g.easeOut||g.easing,function(){h.css(g.cssAfter||{}),g.sync||j()}),g.sync&&j()},queueTransition:function(b,c){var d=this.opts(),e=void 0!==c?c:b.timeout;return 0===d.nextSlide&&0===--d.loop?(d.API.log("terminating; loop=0"),d.timeout=0,e?setTimeout(function(){d.API.trigger("cycle-finished",[d])},e):d.API.trigger("cycle-finished",[d]),void(d.nextSlide=d.currSlide)):void 0!==d.continueAuto&&(d.continueAuto===!1||a.isFunction(d.continueAuto)&&d.continueAuto()===!1)?(d.API.log("terminating automatic transitions"),d.timeout=0,void(d.timeoutId&&clearTimeout(d.timeoutId))):void(e&&(d._lastQueue=a.now(),void 0===c&&(d._remainingTimeout=b.timeout),d.paused||d.hoverPaused||(d.timeoutId=setTimeout(function(){d.API.prepareTx(!1,!d.reverse)},e))))},stopTransition:function(){var a=this.opts();a.slides.filter(":animated").length&&(a.slides.stop(!1,!0),a.API.trigger("cycle-transition-stopped",[a])),a._tx&&a._tx.stopTransition&&a._tx.stopTransition(a)},advanceSlide:function(a){var b=this.opts();return clearTimeout(b.timeoutId),b.timeoutId=0,b.nextSlide=b.currSlide+a,b.nextSlide<0?b.nextSlide=b.slides.length-1:b.nextSlide>=b.slides.length&&(b.nextSlide=0),b.API.prepareTx(!0,a>=0),!1},buildSlideOpts:function(c){var d,e,f=this.opts(),g=c.data()||{};for(var h in g)g.hasOwnProperty(h)&&/^cycle[A-Z]+/.test(h)&&(d=g[h],e=h.match(/^cycle(.*)/)[1].replace(/^[A-Z]/,b),f.API.log("["+(f.slideCount-1)+"]",e+":",d,"("+typeof d+")"),g[e]=d);g=a.extend({},a.fn.cycle.defaults,f,g),g.slideNum=f.slideCount;try{delete g.API,delete g.slideCount,delete g.currSlide,delete g.nextSlide,delete g.slides}catch(i){}return g},getSlideOpts:function(b){var c=this.opts();void 0===b&&(b=c.currSlide);var d=c.slides[b],e=a(d).data("cycle.opts");return a.extend({},c,e)},initSlide:function(b,c,d){var e=this.opts();c.css(b.slideCss||{}),d>0&&c.css("zIndex",d),isNaN(b.speed)&&(b.speed=a.fx.speeds[b.speed]||a.fx.speeds._default),b.sync||(b.speed=b.speed/2),c.addClass(e.slideClass)},updateView:function(a,b){var c=this.opts();if(c._initialized){var d=c.API.getSlideOpts(),e=c.slides[c.currSlide];!a&&b!==!0&&(c.API.trigger("cycle-update-view-before",[c,d,e]),c.updateView<0)||(c.slideActiveClass&&c.slides.removeClass(c.slideActiveClass).eq(c.currSlide).addClass(c.slideActiveClass),a&&c.hideNonActive&&c.slides.filter(":not(."+c.slideActiveClass+")").css("visibility","hidden"),0===c.updateView&&setTimeout(function(){c.API.trigger("cycle-update-view",[c,d,e,a])},d.speed/(c.sync?2:1)),0!==c.updateView&&c.API.trigger("cycle-update-view",[c,d,e,a]),a&&c.API.trigger("cycle-update-view-after",[c,d,e]))}},getComponent:function(b){var c=this.opts(),d=c[b];return"string"==typeof d?/^\s*[\>|\+|~]/.test(d)?c.container.find(d):a(d):d.jquery?d:a(d)},stackSlides:function(b,c,d){var e=this.opts();b||(b=e.slides[e.currSlide],c=e.slides[e.nextSlide],d=!e.reverse),a(b).css("zIndex",e.maxZ);var f,g=e.maxZ-2,h=e.slideCount;if(d){for(f=e.currSlide+1;h>f;f++)a(e.slides[f]).css("zIndex",g--);for(f=0;f<e.currSlide;f++)a(e.slides[f]).css("zIndex",g--)}else{for(f=e.currSlide-1;f>=0;f--)a(e.slides[f]).css("zIndex",g--);for(f=h-1;f>e.currSlide;f--)a(e.slides[f]).css("zIndex",g--)}a(c).css("zIndex",e.maxZ-1)},getSlideIndex:function(a){return this.opts().slides.index(a)}},a.fn.cycle.log=function(){window.console&&console.log&&console.log("[cycle2] "+Array.prototype.join.call(arguments," "))},a.fn.cycle.version=function(){return"Cycle2: "+c},a.fn.cycle.transitions={custom:{},none:{before:function(a,b,c,d){a.API.stackSlides(c,b,d),a.cssBefore={opacity:1,visibility:"visible",display:"block"}}},fade:{before:function(b,c,d,e){var f=b.API.getSlideOpts(b.nextSlide).slideCss||{};b.API.stackSlides(c,d,e),b.cssBefore=a.extend(f,{opacity:0,visibility:"visible",display:"block"}),b.animIn={opacity:1},b.animOut={opacity:0}}},fadeout:{before:function(b,c,d,e){var f=b.API.getSlideOpts(b.nextSlide).slideCss||{};b.API.stackSlides(c,d,e),b.cssBefore=a.extend(f,{opacity:1,visibility:"visible",display:"block"}),b.animOut={opacity:0}}},scrollHorz:{before:function(a,b,c,d){a.API.stackSlides(b,c,d);var e=a.container.css("overflow","hidden").width();a.cssBefore={left:d?e:-e,top:0,opacity:1,visibility:"visible",display:"block"},a.cssAfter={zIndex:a._maxZ-2,left:0},a.animIn={left:0},a.animOut={left:d?-e:e}}}},a.fn.cycle.defaults={allowWrap:!0,autoSelector:".cycle-slideshow[data-cycle-auto-init!=false]",delay:0,easing:null,fx:"fade",hideNonActive:!0,loop:0,manualFx:void 0,manualSpeed:void 0,manualTrump:!0,maxZ:100,pauseOnHover:!1,reverse:!1,slideActiveClass:"cycle-slide-active",slideClass:"cycle-slide",slideCss:{position:"absolute",top:0,left:0},slides:"> img",speed:500,startingSlide:0,sync:!0,timeout:4e3,updateView:0},a(document).ready(function(){cycleInitFunction = a;cycleInitParam = a.fn.cycle.defaults.autoSelector;a(a.fn.cycle.defaults.autoSelector).cycle()})}(jQuery),/*! Cycle2 autoheight plugin; Copyright (c) M.Alsup, 2012; version: 20130913 */
    function(a){"use strict";function b(b,d){var e,f,g,h=d.autoHeight;if("container"==h)f=a(d.slides[d.currSlide]).outerHeight(),d.container.height(f);else if(d._autoHeightRatio)d.container.height(d.container.width()/d._autoHeightRatio);else if("calc"===h||"number"==a.type(h)&&h>=0){if(g="calc"===h?c(b,d):h>=d.slides.length?0:h,g==d._sentinelIndex)return;d._sentinelIndex=g,d._sentinel&&d._sentinel.remove(),e=a(d.slides[g].cloneNode(!0)),e.removeAttr("id name rel").find("[id],[name],[rel]").removeAttr("id name rel"),e.css({position:"static",visibility:"hidden",display:"block"}).prependTo(d.container).addClass("cycle-sentinel cycle-slide").removeClass("cycle-slide-active"),e.find("*").css("visibility","hidden"),d._sentinel=e}}function c(b,c){var d=0,e=-1;return c.slides.each(function(b){var c=a(this).height();c>e&&(e=c,d=b)}),d}function d(b,c,d,e){var f=a(e).outerHeight();c.container.animate({height:f},c.autoHeightSpeed,c.autoHeightEasing)}function e(c,f){f._autoHeightOnResize&&(a(window).off("resize orientationchange",f._autoHeightOnResize),f._autoHeightOnResize=null),f.container.off("cycle-slide-added cycle-slide-removed",b),f.container.off("cycle-destroyed",e),f.container.off("cycle-before",d),f._sentinel&&(f._sentinel.remove(),f._sentinel=null)}a.extend(a.fn.cycle.defaults,{autoHeight:0,autoHeightSpeed:250,autoHeightEasing:null}),a(document).on("cycle-initialized",function(c,f){function g(){b(c,f)}var h,i=f.autoHeight,j=a.type(i),k=null;("string"===j||"number"===j)&&(f.container.on("cycle-slide-added cycle-slide-removed",b),f.container.on("cycle-destroyed",e),"container"==i?f.container.on("cycle-before",d):"string"===j&&/\d+\:\d+/.test(i)&&(h=i.match(/(\d+)\:(\d+)/),h=h[1]/h[2],f._autoHeightRatio=h),"number"!==j&&(f._autoHeightOnResize=function(){clearTimeout(k),k=setTimeout(g,50)},a(window).on("resize orientationchange",f._autoHeightOnResize)),setTimeout(g,30))})}(jQuery),/*! caption plugin for Cycle2;  version: 20130306 */
    function(a){"use strict";a.extend(a.fn.cycle.defaults,{caption:"> .cycle-caption",captionTemplate:"{{slideNum}} / {{slideCount}}",overlay:"> .cycle-overlay",overlayTemplate:"<div>{{title}}</div><div>{{desc}}</div>",captionModule:"caption"}),a(document).on("cycle-update-view",function(b,c,d,e){if("caption"===c.captionModule){a.each(["caption","overlay"],function(){var a=this,b=d[a+"Template"],f=c.API.getComponent(a);f.length&&b?(f.html(c.API.tmpl(b,d,c,e)),f.show()):f.hide()})}}),a(document).on("cycle-destroyed",function(b,c){var d;a.each(["caption","overlay"],function(){var a=this,b=c[a+"Template"];c[a]&&b&&(d=c.API.getComponent("caption"),d.empty())})})}(jQuery),/*! command plugin for Cycle2;  version: 20140415 */
    function(a){"use strict";var b=a.fn.cycle;a.fn.cycle=function(c){var d,e,f,g=a.makeArray(arguments);return"number"==a.type(c)?this.cycle("goto",c):"string"==a.type(c)?this.each(function(){var h;return d=c,f=a(this).data("cycle.opts"),void 0===f?void b.log('slideshow must be initialized before sending commands; "'+d+'" ignored'):(d="goto"==d?"jump":d,e=f.API[d],a.isFunction(e)?(h=a.makeArray(g),h.shift(),e.apply(f.API,h)):void b.log("unknown command: ",d))}):b.apply(this,arguments)},a.extend(a.fn.cycle,b),a.extend(b.API,{next:function(){var a=this.opts();if(!a.busy||a.manualTrump){var b=a.reverse?-1:1;a.allowWrap===!1&&a.currSlide+b>=a.slideCount||(a.API.advanceSlide(b),a.API.trigger("cycle-next",[a]).log("cycle-next"))}},prev:function(){var a=this.opts();if(!a.busy||a.manualTrump){var b=a.reverse?1:-1;a.allowWrap===!1&&a.currSlide+b<0||(a.API.advanceSlide(b),a.API.trigger("cycle-prev",[a]).log("cycle-prev"))}},destroy:function(){this.stop();var b=this.opts(),c=a.isFunction(a._data)?a._data:a.noop;clearTimeout(b.timeoutId),b.timeoutId=0,b.API.stop(),b.API.trigger("cycle-destroyed",[b]).log("cycle-destroyed"),b.container.removeData(),c(b.container[0],"parsedAttrs",!1),b.retainStylesOnDestroy||(b.container.removeAttr("style"),b.slides.removeAttr("style"),b.slides.removeClass(b.slideActiveClass)),b.slides.each(function(){var d=a(this);d.removeData(),d.removeClass(b.slideClass),c(this,"parsedAttrs",!1)})},jump:function(a,b){var c,d=this.opts();if(!d.busy||d.manualTrump){var e=parseInt(a,10);if(isNaN(e)||0>e||e>=d.slides.length)return void d.API.log("goto: invalid slide index: "+e);if(e==d.currSlide)return void d.API.log("goto: skipping, already on slide",e);d.nextSlide=e,clearTimeout(d.timeoutId),d.timeoutId=0,d.API.log("goto: ",e," (zero-index)"),c=d.currSlide<d.nextSlide,d._tempFx=b,d.API.prepareTx(!0,c)}},stop:function(){var b=this.opts(),c=b.container;clearTimeout(b.timeoutId),b.timeoutId=0,b.API.stopTransition(),b.pauseOnHover&&(b.pauseOnHover!==!0&&(c=a(b.pauseOnHover)),c.off("mouseenter mouseleave")),b.API.trigger("cycle-stopped",[b]).log("cycle-stopped")},reinit:function(){var a=this.opts();a.API.destroy(),a.container.cycle()},remove:function(b){for(var c,d,e=this.opts(),f=[],g=1,h=0;h<e.slides.length;h++)c=e.slides[h],h==b?d=c:(f.push(c),a(c).data("cycle.opts").slideNum=g,g++);d&&(e.slides=a(f),e.slideCount--,a(d).remove(),b==e.currSlide?e.API.advanceSlide(1):b<e.currSlide?e.currSlide--:e.currSlide++,e.API.trigger("cycle-slide-removed",[e,b,d]).log("cycle-slide-removed"),e.API.updateView())}}),a(document).on("click.cycle","[data-cycle-cmd]",function(b){b.preventDefault();var c=a(this),d=c.data("cycle-cmd"),e=c.data("cycle-context")||".cycle-slideshow";a(e).cycle(d,c.data("cycle-arg"))})}(jQuery),/*! hash plugin for Cycle2;  version: 20130905 */
    function(a){"use strict";function b(b,c){var d;return b._hashFence?void(b._hashFence=!1):(d=window.location.hash.substring(1),void b.slides.each(function(e){if(a(this).data("cycle-hash")==d){if(c===!0)b.startingSlide=e;else{var f=b.currSlide<e;b.nextSlide=e,b.API.prepareTx(!0,f)}return!1}}))}a(document).on("cycle-pre-initialize",function(c,d){b(d,!0),d._onHashChange=function(){b(d,!1)},a(window).on("hashchange",d._onHashChange)}),a(document).on("cycle-update-view",function(a,b,c){c.hash&&"#"+c.hash!=window.location.hash&&(b._hashFence=!0,window.location.hash=c.hash)}),a(document).on("cycle-destroyed",function(b,c){c._onHashChange&&a(window).off("hashchange",c._onHashChange)})}(jQuery),/*! loader plugin for Cycle2;  version: 20131121 */
    function(a){"use strict";a.extend(a.fn.cycle.defaults,{loader:!1}),a(document).on("cycle-bootstrap",function(b,c){function d(b,d){function f(b){var f;"wait"==c.loader?(h.push(b),0===j&&(h.sort(g),e.apply(c.API,[h,d]),c.container.removeClass("cycle-loading"))):(f=a(c.slides[c.currSlide]),e.apply(c.API,[b,d]),f.show(),c.container.removeClass("cycle-loading"))}function g(a,b){return a.data("index")-b.data("index")}var h=[];if("string"==a.type(b))b=a.trim(b);else if("array"===a.type(b))for(var i=0;i<b.length;i++)b[i]=a(b[i])[0];b=a(b);var j=b.length;j&&(b.css("visibility","hidden").appendTo("body").each(function(b){function g(){0===--i&&(--j,f(k))}var i=0,k=a(this),l=k.is("img")?k:k.find("img");return k.data("index",b),l=l.filter(":not(.cycle-loader-ignore)").filter(':not([src=""])'),l.length?(i=l.length,void l.each(function(){this.complete?g():a(this).load(function(){g()}).on("error",function(){0===--i&&(c.API.log("slide skipped; img not loaded:",this.src),0===--j&&"wait"==c.loader&&e.apply(c.API,[h,d]))})})):(--j,void h.push(k))}),j&&c.container.addClass("cycle-loading"))}var e;c.loader&&(e=c.API.add,c.API.add=d)})}(jQuery),/*! pager plugin for Cycle2;  version: 20140415 */
    function(a){"use strict";function b(b,c,d){var e,f=b.API.getComponent("pager");f.each(function(){var f=a(this);if(c.pagerTemplate){var g=b.API.tmpl(c.pagerTemplate,c,b,d[0]);e=a(g).appendTo(f)}else e=f.children().eq(b.slideCount-1);e.on(b.pagerEvent,function(a){b.pagerEventBubble||a.preventDefault(),b.API.page(f,a.currentTarget)})})}function c(a,b){var c=this.opts();if(!c.busy||c.manualTrump){var d=a.children().index(b),e=d,f=c.currSlide<e;c.currSlide!=e&&(c.nextSlide=e,c._tempFx=c.pagerFx,c.API.prepareTx(!0,f),c.API.trigger("cycle-pager-activated",[c,a,b]))}}a.extend(a.fn.cycle.defaults,{pager:"> .cycle-pager",pagerActiveClass:"cycle-pager-active",pagerEvent:"click.cycle",pagerEventBubble:void 0,pagerTemplate:"<span>&bull;</span>"}),a(document).on("cycle-bootstrap",function(a,c,d){d.buildPagerLink=b}),a(document).on("cycle-slide-added",function(a,b,d,e){b.pager&&(b.API.buildPagerLink(b,d,e),b.API.page=c)}),a(document).on("cycle-slide-removed",function(b,c,d){if(c.pager){var e=c.API.getComponent("pager");e.each(function(){var b=a(this);a(b.children()[d]).remove()})}}),a(document).on("cycle-update-view",function(b,c){var d;c.pager&&(d=c.API.getComponent("pager"),d.each(function(){a(this).children().removeClass(c.pagerActiveClass).eq(c.currSlide).addClass(c.pagerActiveClass)}))}),a(document).on("cycle-destroyed",function(a,b){var c=b.API.getComponent("pager");c&&(c.children().off(b.pagerEvent),b.pagerTemplate&&c.empty())})}(jQuery),/*! prevnext plugin for Cycle2;  version: 20140408 */
    function(a){"use strict";a.extend(a.fn.cycle.defaults,{next:"> .cycle-next",nextEvent:"click.cycle",disabledClass:"disabled",prev:"> .cycle-prev",prevEvent:"click.cycle",swipe:!1}),a(document).on("cycle-initialized",function(a,b){if(b.API.getComponent("next").on(b.nextEvent,function(a){a.preventDefault(),b.API.next()}),b.API.getComponent("prev").on(b.prevEvent,function(a){a.preventDefault(),b.API.prev()}),b.swipe){var c=b.swipeVert?"swipeUp.cycle":"swipeLeft.cycle swipeleft.cycle",d=b.swipeVert?"swipeDown.cycle":"swipeRight.cycle swiperight.cycle";b.container.on(c,function(){b._tempFx=b.swipeFx,b.API.next()}),b.container.on(d,function(){b._tempFx=b.swipeFx,b.API.prev()})}}),a(document).on("cycle-update-view",function(a,b){if(!b.allowWrap){var c=b.disabledClass,d=b.API.getComponent("next"),e=b.API.getComponent("prev"),f=b._prevBoundry||0,g=void 0!==b._nextBoundry?b._nextBoundry:b.slideCount-1;b.currSlide==g?d.addClass(c).prop("disabled",!0):d.removeClass(c).prop("disabled",!1),b.currSlide===f?e.addClass(c).prop("disabled",!0):e.removeClass(c).prop("disabled",!1)}}),a(document).on("cycle-destroyed",function(a,b){b.API.getComponent("prev").off(b.nextEvent),b.API.getComponent("next").off(b.prevEvent),b.container.off("swipeleft.cycle swiperight.cycle swipeLeft.cycle swipeRight.cycle swipeUp.cycle swipeDown.cycle")})}(jQuery),/*! progressive loader plugin for Cycle2;  version: 20130315 */
    function(a){"use strict";a.extend(a.fn.cycle.defaults,{progressive:!1}),a(document).on("cycle-pre-initialize",function(b,c){if(c.progressive){var d,e,f=c.API,g=f.next,h=f.prev,i=f.prepareTx,j=a.type(c.progressive);if("array"==j)d=c.progressive;else if(a.isFunction(c.progressive))d=c.progressive(c);else if("string"==j){if(e=a(c.progressive),d=a.trim(e.html()),!d)return;if(/^(\[)/.test(d))try{d=a.parseJSON(d)}catch(k){return void f.log("error parsing progressive slides",k)}else d=d.split(new RegExp(e.data("cycle-split")||"\n")),d[d.length-1]||d.pop()}i&&(f.prepareTx=function(a,b){var e,f;return a||0===d.length?void i.apply(c.API,[a,b]):void(b&&c.currSlide==c.slideCount-1?(f=d[0],d=d.slice(1),c.container.one("cycle-slide-added",function(a,b){setTimeout(function(){b.API.advanceSlide(1)},50)}),c.API.add(f)):b||0!==c.currSlide?i.apply(c.API,[a,b]):(e=d.length-1,f=d[e],d=d.slice(0,e),c.container.one("cycle-slide-added",function(a,b){setTimeout(function(){b.currSlide=1,b.API.advanceSlide(-1)},50)}),c.API.add(f,!0)))}),g&&(f.next=function(){var a=this.opts();if(d.length&&a.currSlide==a.slideCount-1){var b=d[0];d=d.slice(1),a.container.one("cycle-slide-added",function(a,b){g.apply(b.API),b.container.removeClass("cycle-loading")}),a.container.addClass("cycle-loading"),a.API.add(b)}else g.apply(a.API)}),h&&(f.prev=function(){var a=this.opts();if(d.length&&0===a.currSlide){var b=d.length-1,c=d[b];d=d.slice(0,b),a.container.one("cycle-slide-added",function(a,b){b.currSlide=1,b.API.advanceSlide(-1),b.container.removeClass("cycle-loading")}),a.container.addClass("cycle-loading"),a.API.add(c,!0)}else h.apply(a.API)})}})}(jQuery),/*! tmpl plugin for Cycle2;  version: 20121227 */
    function(a){"use strict";a.extend(a.fn.cycle.defaults,{tmplRegex:"{{((.)?.*?)}}"}),a.extend(a.fn.cycle.API,{tmpl:function(b,c){var d=new RegExp(c.tmplRegex||a.fn.cycle.defaults.tmplRegex,"g"),e=a.makeArray(arguments);return e.shift(),b.replace(d,function(b,c){var d,f,g,h,i=c.split(".");for(d=0;d<e.length;d++)if(g=e[d]){if(i.length>1)for(h=g,f=0;f<i.length;f++)g=h,h=h[i[f]]||c;else h=g[c];if(a.isFunction(h))return h.apply(g,e);if(void 0!==h&&null!==h&&h!=c)return h}return c})}})}(jQuery);

/* (Carousel) Plugin for Cycle2; Copyright (c) 2012 M. Alsup; v20141007 */
!function(a){"use strict";a(document).on("cycle-bootstrap",function(a,b,c){"carousel"===b.fx&&(c.getSlideIndex=function(a){var b=this.opts()._carouselWrap.children(),c=b.index(a);return c%b.length},c.next=function(){var a=b.reverse?-1:1;b.allowWrap===!1&&b.currSlide+a>b.slideCount-b.carouselVisible||(b.API.advanceSlide(a),b.API.trigger("cycle-next",[b]).log("cycle-next"))})}),a.fn.cycle.transitions.carousel={preInit:function(b){b.hideNonActive=!1,b.container.on("cycle-destroyed",a.proxy(this.onDestroy,b.API)),b.API.stopTransition=this.stopTransition;for(var c=0;c<b.startingSlide;c++)b.container.append(b.slides[0])},postInit:function(b){var c,d,e,f,g=b.carouselVertical;b.carouselVisible&&b.carouselVisible>b.slideCount&&(b.carouselVisible=b.slideCount-1);var h=b.carouselVisible||b.slides.length,i={display:g?"block":"inline-block",position:"static"};if(b.container.css({position:"relative",overflow:"hidden"}),b.slides.css(i),b._currSlide=b.currSlide,f=a('<div class="cycle-carousel-wrap"></div>').prependTo(b.container).css({margin:0,padding:0,top:0,left:0,position:"absolute"}).append(b.slides),b._carouselWrap=f,g||f.css("white-space","nowrap"),b.allowWrap!==!1){for(d=0;d<(void 0===b.carouselVisible?2:1);d++){for(c=0;c<b.slideCount;c++)f.append(b.slides[c].cloneNode(!0));for(c=b.slideCount;c--;)f.prepend(b.slides[c].cloneNode(!0))}f.find(".cycle-slide-active").removeClass("cycle-slide-active"),b.slides.eq(b.startingSlide).addClass("cycle-slide-active")}b.pager&&b.allowWrap===!1&&(e=b.slideCount-h,a(b.pager).children().filter(":gt("+e+")").hide()),b._nextBoundry=b.slideCount-b.carouselVisible,this.prepareDimensions(b)},prepareDimensions:function(b){var c,d,e,f,g=b.carouselVertical,h=b.carouselVisible||b.slides.length;if(b.carouselFluid&&b.carouselVisible?b._carouselResizeThrottle||this.fluidSlides(b):b.carouselVisible&&b.carouselSlideDimension?(c=h*b.carouselSlideDimension,b.container[g?"height":"width"](c)):b.carouselVisible&&(c=h*a(b.slides[0])[g?"outerHeight":"outerWidth"](!0),b.container[g?"height":"width"](c)),d=b.carouselOffset||0,b.allowWrap!==!1)if(b.carouselSlideDimension)d-=(b.slideCount+b.currSlide)*b.carouselSlideDimension;else for(e=b._carouselWrap.children(),f=0;f<b.slideCount+b.currSlide;f++)d-=a(e[f])[g?"outerHeight":"outerWidth"](!0);b._carouselWrap.css(g?"top":"left",d)},fluidSlides:function(b){function c(){clearTimeout(e),e=setTimeout(d,20)}function d(){b._carouselWrap.stop(!1,!0);var a=b.container.width()/b.carouselVisible;a=Math.ceil(a-g),b._carouselWrap.children().width(a),b._sentinel&&b._sentinel.width(a),h(b)}var e,f=b.slides.eq(0),g=f.outerWidth()-f.width(),h=this.prepareDimensions;a(window).on("resize",c),b._carouselResizeThrottle=c,d()},transition:function(b,c,d,e,f){var g,h={},i=b.nextSlide-b.currSlide,j=b.carouselVertical,k=b.speed;if(b.allowWrap===!1){e=i>0;var l=b._currSlide,m=b.slideCount-b.carouselVisible;i>0&&b.nextSlide>m&&l==m?i=0:i>0&&b.nextSlide>m?i=b.nextSlide-l-(b.nextSlide-m):0>i&&b.currSlide>m&&b.nextSlide>m?i=0:0>i&&b.currSlide>m?i+=b.currSlide-m:l=b.currSlide,g=this.getScroll(b,j,l,i),b.API.opts()._currSlide=b.nextSlide>m?m:b.nextSlide}else e&&0===b.nextSlide?(g=this.getDim(b,b.currSlide,j),f=this.genCallback(b,e,j,f)):e||b.nextSlide!=b.slideCount-1?g=this.getScroll(b,j,b.currSlide,i):(g=this.getDim(b,b.currSlide,j),f=this.genCallback(b,e,j,f));h[j?"top":"left"]=e?"-="+g:"+="+g,b.throttleSpeed&&(k=g/a(b.slides[0])[j?"height":"width"]()*b.speed),b._carouselWrap.animate(h,k,b.easing,f)},getDim:function(b,c,d){var e=a(b.slides[c]);return e[d?"outerHeight":"outerWidth"](!0)},getScroll:function(a,b,c,d){var e,f=0;if(d>0)for(e=c;c+d>e;e++)f+=this.getDim(a,e,b);else for(e=c;e>c+d;e--)f+=this.getDim(a,e,b);return f},genCallback:function(b,c,d,e){return function(){var c=a(b.slides[b.nextSlide]).position(),f=0-c[d?"top":"left"]+(b.carouselOffset||0);b._carouselWrap.css(b.carouselVertical?"top":"left",f),e()}},stopTransition:function(){var a=this.opts();a.slides.stop(!1,!0),a._carouselWrap.stop(!1,!0)},onDestroy:function(){var b=this.opts();b._carouselResizeThrottle&&a(window).off("resize",b._carouselResizeThrottle),b.slides.prependTo(b.container),b._carouselWrap.remove()}}}(jQuery);

/* (Swipe) Plugin for Cycle2; Copyright (c) 2012 M. Alsup; v20141007 */
!function(a){"use strict";a.event.special.swipe=a.event.special.swipe||{scrollSupressionThreshold:10,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:75,setup:function(){var b=a(this);b.bind("touchstart",function(c){function d(b){if(g){var c=b.originalEvent.touches?b.originalEvent.touches[0]:b;e={time:(new Date).getTime(),coords:[c.pageX,c.pageY]},Math.abs(g.coords[0]-e.coords[0])>a.event.special.swipe.scrollSupressionThreshold&&b.preventDefault()}}var e,f=c.originalEvent.touches?c.originalEvent.touches[0]:c,g={time:(new Date).getTime(),coords:[f.pageX,f.pageY],origin:a(c.target)};b.bind("touchmove",d).one("touchend",function(){b.unbind("touchmove",d),g&&e&&e.time-g.time<a.event.special.swipe.durationThreshold&&Math.abs(g.coords[0]-e.coords[0])>a.event.special.swipe.horizontalDistanceThreshold&&Math.abs(g.coords[1]-e.coords[1])<a.event.special.swipe.verticalDistanceThreshold&&g.origin.trigger("swipe").trigger(g.coords[0]>e.coords[0]?"swipeleft":"swiperight"),g=e=void 0})})}},a.event.special.swipeleft=a.event.special.swipeleft||{setup:function(){a(this).bind("swipe",a.noop)}},a.event.special.swiperight=a.event.special.swiperight||a.event.special.swipeleft}(jQuery);

/* (Center) Plugin for Cycle2; Copyright (c) 2012 M. Alsup; v20140121 */
!function(e){"use strict";e.extend(e.fn.cycle.defaults,{centerHorz:!1,centerVert:!1}),e(document).on("cycle-pre-initialize",function(n,t){function i(){clearTimeout(d),d=setTimeout(r,50)}function c(){clearTimeout(d),clearTimeout(l),e(window).off("resize orientationchange",i)}function o(){t.slides.each(a)}function r(){a.apply(t.container.find("."+t.slideActiveClass)),clearTimeout(l),l=setTimeout(o,50)}function a(){var n=e(this),i=t.container.width(),c=t.container.height(),o=n.outerWidth(),r=n.outerHeight();o&&(t.centerHorz&&i>=o&&n.css("marginLeft",(i-o)/2),t.centerVert&&c>=r&&n.css("marginTop",(c-r)/2))}if(t.centerHorz||t.centerVert){var d,l;e(window).on("resize orientationchange load",i),t.container.on("cycle-destroyed",c),t.container.on("cycle-initialized cycle-slide-added cycle-slide-removed",function(){i()}),r()}})}(jQuery);


/* Toggle View Hide/Show
Text Plugin (mobile plugin name is already: toggleTextView) */
$.fn.toggleViewMain = function(settings) {

  var defaults = {

  }
  var opts = $.extend({}, defaults, settings)
  var ellipsestext = '&hellip;';

  function init($this, opts){
  var showChar = $this.data('character-shown');
  var content = $this.html();
  var shownContent = content.substr(0, showChar);
  shownContent = shownContent.substr(0, Math.min(shownContent.length, shownContent.lastIndexOf(" ")));
  var restOfContent = content.substr(shownContent.length, content.length - showChar);
  var html = '<span>' + shownContent + '<span class="js-view-more__main"> &hellip;<a href="#"  style="display:table;" class="u-margin-t--sm link link--bold u-text--md">more</a></span></span><span class="js-more__main u-hide">' + restOfContent + '</span><span class="js-view-less__main u-hide"><a class="u-margin-t--sm link link--bold u-text--md" style="display:table;" href="#">less</a></span>';

    if( content.length > showChar) {
      $this.html(html);
      }
    }
    function viewMore($this, button, opts) {
          $this.find('.js-more__main').removeClass('u-hide');
          $this.find('.js-view-less__main').removeClass('u-hide');
          button.addClass('u-hide');
        }
    function viewLess($this, button, opts) {
          $this.find('.js-more__main').addClass('u-hide');
          $this.find('.js-view-more__main').removeClass('u-hide');
          button.addClass('u-hide');
         }
    function addListeners($this, opts){
      $this.find('.js-view-more__main').on('click', function(){
        viewMore($this, $(this), opts);
      });
      $this.find('.js-view-less__main').on('click', function(){
        viewLess($this, $(this), opts);
      });
    }
    return this.each(function() {
        $this = $(this);
        init($this, opts);
        addListeners($this, opts);
    });
};


// ending the Toggle View


/*

Breaky.js
qrious.com/breaky

*/
// (function(){
//   var fnIndex = 0;
//   var fnSwitch = {};
//   var fnList = {};
//   var breakpoints = [];
//
//     function setSwitch() {
//       var onItems = fnSwitch[breaky.value].on;
//       var onItemsLength = onItems.length;
//       var offItems = fnSwitch[breaky.value].off;
//       var offItemsLength = offItems.length;
//
//       for ( var i = 0; i < onItemsLength; i++ ) {
//         if(!fnList[onItems[i]].active) {
//           fnList[onItems[i]].fn();
//           fnList[onItems[i]].active = true;
//         }
//       }
//       for ( var i = 0; i < offItemsLength; i++ ) {
//         fnList[offItems[i]].active = false;
//       }
//     }
//
//      function readValue( el ) {
//       return window.getComputedStyle(
//           document.querySelector(el), ':before'
//         ).getPropertyValue( 'content' ).replace( /\"/g, '' ).replace( /\'/g, '' );
//     }
//
//     function appendFunction( fn ) {
//       fnIndex++;
//       fnList[fnIndex] = {};
//       fnList[fnIndex]["fn"] = fn;
//       fnList[fnIndex]["active"] = false;
//     }
//     function indexOf (collection, value) {
//         if (Array.prototype.indexOf) {
//             return collection.indexOf( value );
//         }
//         for (var i = 0, l = collection.length; i < l; i++) {
//             if(value === collection[i]) {
//                 return i;
//             }
//         }
//     }
//     function connectFunction( view1, direction, view2 ) {
//       var viewIndex1 = indexOf(breakpoints, view1);
//       var viewIndex2 = indexOf(breakpoints, view2);
//
//       for( var i = 0; i < breakpoints.length; i++ ) {
//           if( i == viewIndex1 && direction == "at"
//           || i <= viewIndex1 && direction == "below"
//           || i >= viewIndex1 && direction == "above"
//           || viewIndex1 <= i && i <= viewIndex2 &&  direction == "between" ) {
//             fnSwitch[breakpoints[i]].on.push( fnIndex );
//           } else {
//             fnSwitch[breakpoints[i]].off.push( fnIndex );
//           }
//       }
//       setSwitch();
//     }
//
//     function createFnSwitch() {
//       breakpointsLength = breakpoints.length;
//       for(var i = 0; i < breakpointsLength; i++ ) {
//         fnSwitch[breakpoints[i]] = {};
//         fnSwitch[breakpoints[i]].on = [];
//         fnSwitch[breakpoints[i]].off = [];
//       }
//     }
//
//     function connectAndAppendFn( fn, view1, direction, view2 ) {
//       appendFunction( fn );
//       connectFunction( view1, direction, view2 );
//     }
//
//     window.breaky = {
//       below: function( view, fn ) {
//         connectAndAppendFn( fn, view, "below" );
//       },
//       above: function( view, fn ) {
//         connectAndAppendFn( fn, view, "above" );
//       },
//       between: function( view1, view2, fn ) {
//         connectAndAppendFn( fn, view1, "between", view2 );
//       },
//       at : function( view, fn ) {
//         connectAndAppendFn( fn, view, "at" );
//       },
//       initIE8 : function(bp, value) {
//           if(!window.getComputedStyle) {
//             breakpoints = bp;
//             createFnSwitch();
//             breaky.value = value;
//           }
//       },
//       init : function() {
//         breakpoints = readValue( "html" ).split( "," );
//         createFnSwitch();
//         breaky.value = readValue( "body" );
//         window.onresize = function () {
//           if(breaky.value !== readValue( "body" )) {
//             breaky.value = readValue( "body" );
//             setSwitch();
//           }
//         }
//       }
//      }
//     if(window.getComputedStyle) {
//       breaky.init();
//     }
// })();


function showFullScreenZoom() {
    $(".slideshow__magnify-button").click();
}
/*!
 Colorbox 1.5.14
 license: MIT
 http://www.jacklmoore.com/colorbox
 */
(function(t,e,i){function n(i,n,o){var r=e.createElement(i);return n&&(r.id=Z+n),o&&(r.style.cssText=o),t(r)}function o(){return i.innerHeight?i.innerHeight:t(i).height()}function r(e,i){i!==Object(i)&&(i={}),this.cache={},this.el=e,this.value=function(e){var n;return void 0===this.cache[e]&&(n=t(this.el).attr("data-cbox-"+e),void 0!==n?this.cache[e]=n:void 0!==i[e]?this.cache[e]=i[e]:void 0!==X[e]&&(this.cache[e]=X[e])),this.cache[e]},this.get=function(e){var i=this.value(e);return t.isFunction(i)?i.call(this.el,this):i}}function h(t){var e=W.length,i=(z+t)%e;return 0>i?e+i:i}function a(t,e){return Math.round((/%/.test(t)?("x"===e?E.width():o())/100:1)*parseInt(t,10))}function s(t,e){return t.get("photo")||t.get("photoRegex").test(e)}function l(t,e){return t.get("retinaUrl")&&i.devicePixelRatio>1?e.replace(t.get("photoRegex"),t.get("retinaSuffix")):e}function d(t){"contains"in y[0]&&!y[0].contains(t.target)&&t.target!==v[0]&&(t.stopPropagation(),y.focus())}function c(t){c.str!==t&&(y.add(v).removeClass(c.str).addClass(t),c.str=t)}function g(e){z=0,e&&e!==!1&&"nofollow"!==e?(W=t("."+te).filter(function(){var i=t.data(this,Y),n=new r(this,i);return n.get("rel")===e}),z=W.index(_.el),-1===z&&(W=W.add(_.el),z=W.length-1)):W=t(_.el)}function u(i){t(e).trigger(i),ae.triggerHandler(i)}function f(i){var o;if(!G){if(o=t(i).data(Y),_=new r(i,o),g(_.get("rel")),!$){$=q=!0,c(_.get("className")),y.css({visibility:"hidden",display:"block",opacity:""}),L=n(se,"LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden"),b.css({width:"",height:""}).append(L),D=T.height()+k.height()+b.outerHeight(!0)-b.height(),j=C.width()+H.width()+b.outerWidth(!0)-b.width(),A=L.outerHeight(!0),N=L.outerWidth(!0);var h=a(_.get("initialWidth"),"x"),s=a(_.get("initialHeight"),"y"),l=_.get("maxWidth"),f=_.get("maxHeight");_.w=(l!==!1?Math.min(h,a(l,"x")):h)-N-j,_.h=(f!==!1?Math.min(s,a(f,"y")):s)-A-D,L.css({width:"",height:_.h}),J.position(),u(ee),_.get("onOpen"),O.add(F).hide(),y.focus(),_.get("trapFocus")&&e.addEventListener&&(e.addEventListener("focus",d,!0),ae.one(re,function(){e.removeEventListener("focus",d,!0)})),_.get("returnFocus")&&ae.one(re,function(){t(_.el).focus()})}var p=parseFloat(_.get("opacity"));v.css({opacity:p===p?p:"",cursor:_.get("overlayClose")?"pointer":"",visibility:"visible"}).show(),_.get("closeButton")?B.html(_.get("close")).appendTo(b):B.appendTo("<div/>"),w()}}function p(){y||(V=!1,E=t(i),y=n(se).attr({id:Y,"class":t.support.opacity===!1?Z+"IE":"",role:"dialog",tabindex:"-1"}).hide(),v=n(se,"Overlay").hide(),S=t([n(se,"LoadingOverlay")[0],n(se,"LoadingGraphic")[0]]),x=n(se,"Wrapper"),b=n(se,"Content").append(F=n(se,"Title"),I=n(se,"Current"),P=t('<button type="button"/>').attr({id:Z+"Previous"}),K=t('<button type="button"/>').attr({id:Z+"Next"}),R=n("button","Slideshow"),S),B=t('<button type="button"/>').attr({id:Z+"Close"}),x.append(n(se).append(n(se,"TopLeft"),T=n(se,"TopCenter"),n(se,"TopRight")),n(se,!1,"clear:left").append(C=n(se,"MiddleLeft"),b,H=n(se,"MiddleRight")),n(se,!1,"clear:left").append(n(se,"BottomLeft"),k=n(se,"BottomCenter"),n(se,"BottomRight"))).find("div div").css({"float":"left"}),M=n(se,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),O=K.add(P).add(I).add(R)),e.body&&!y.parent().length&&t(e.body).append(v,y.append(x,M))}function m(){function i(t){t.which>1||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),f(this))}return y?(V||(V=!0,K.click(function(){J.next()}),P.click(function(){J.prev()}),B.click(function(){J.close()}),v.click(function(){_.get("overlayClose")&&J.close()}),t(e).bind("keydown."+Z,function(t){var e=t.keyCode;$&&_.get("escKey")&&27===e&&(t.preventDefault(),J.close()),$&&_.get("arrowKey")&&W[1]&&!t.altKey&&(37===e?(t.preventDefault(),P.click()):39===e&&(t.preventDefault(),K.click()))}),t.isFunction(t.fn.on)?t(e).on("click."+Z,"."+te,i):t("."+te).live("click."+Z,i)),!0):!1}function w(){var e,o,r,h=J.prep,d=++le;if(q=!0,U=!1,u(he),u(ie),_.get("onLoad"),_.h=_.get("height")?a(_.get("height"),"y")-A-D:_.get("innerHeight")&&a(_.get("innerHeight"),"y"),_.w=_.get("width")?a(_.get("width"),"x")-N-j:_.get("innerWidth")&&a(_.get("innerWidth"),"x"),_.mw=_.w,_.mh=_.h,_.get("maxWidth")&&(_.mw=a(_.get("maxWidth"),"x")-N-j,_.mw=_.w&&_.w<_.mw?_.w:_.mw),_.get("maxHeight")&&(_.mh=a(_.get("maxHeight"),"y")-A-D,_.mh=_.h&&_.h<_.mh?_.h:_.mh),e=_.get("href"),Q=setTimeout(function(){S.show()},100),_.get("inline")){var c=t(e);r=t("<div>").hide().insertBefore(c),ae.one(he,function(){r.replaceWith(c)}),h(c)}else _.get("iframe")?h(" "):_.get("html")?h(_.get("html")):s(_,e)?(e=l(_,e),U=new Image,t(U).addClass(Z+"Photo").bind("error",function(){h(n(se,"Error").html(_.get("imgError")))}).one("load",function(){d===le&&setTimeout(function(){var e;t.each(["alt","longdesc","aria-describedby"],function(e,i){var n=t(_.el).attr(i)||t(_.el).attr("data-"+i);n&&U.setAttribute(i,n)}),_.get("retinaImage")&&i.devicePixelRatio>1&&(U.height=U.height/i.devicePixelRatio,U.width=U.width/i.devicePixelRatio),_.get("scalePhotos")&&(o=function(){U.height-=U.height*e,U.width-=U.width*e},_.mw&&U.width>_.mw&&(e=(U.width-_.mw)/U.width,o()),_.mh&&U.height>_.mh&&(e=(U.height-_.mh)/U.height,o())),_.h&&(U.style.marginTop=Math.max(_.mh-U.height,0)/2+"px"),W[1]&&(_.get("loop")||W[z+1])&&(U.style.cursor="pointer",U.onclick=function(){J.next()}),U.style.width=U.width+"px",U.style.height=U.height+"px",h(U)},1)}),U.src=e):e&&M.load(e,_.get("data"),function(e,i){d===le&&h("error"===i?n(se,"Error").html(_.get("xhrError")):t(this).contents())})}var v,y,x,b,T,C,H,k,W,E,L,M,S,F,I,R,K,P,B,O,_,D,j,A,N,z,U,$,q,G,Q,J,V,X={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,rel:function(){return this.rel},href:function(){return t(this).attr("href")},title:function(){return this.title}},Y="colorbox",Z="cbox",te=Z+"Element",ee=Z+"_open",ie=Z+"_load",ne=Z+"_complete",oe=Z+"_cleanup",re=Z+"_closed",he=Z+"_purge",ae=t("<a/>"),se="div",le=0,de={},ce=function(){function t(){clearTimeout(h)}function e(){(_.get("loop")||W[z+1])&&(t(),h=setTimeout(J.next,_.get("slideshowSpeed")))}function i(){R.html(_.get("slideshowStop")).unbind(s).one(s,n),ae.bind(ne,e).bind(ie,t),y.removeClass(a+"off").addClass(a+"on")}function n(){t(),ae.unbind(ne,e).unbind(ie,t),R.html(_.get("slideshowStart")).unbind(s).one(s,function(){J.next(),i()}),y.removeClass(a+"on").addClass(a+"off")}function o(){r=!1,R.hide(),t(),ae.unbind(ne,e).unbind(ie,t),y.removeClass(a+"off "+a+"on")}var r,h,a=Z+"Slideshow_",s="click."+Z;return function(){r?_.get("slideshow")||(ae.unbind(oe,o),o()):_.get("slideshow")&&W[1]&&(r=!0,ae.one(oe,o),_.get("slideshowAuto")?i():n(),R.show())}}();t[Y]||(t(p),J=t.fn[Y]=t[Y]=function(e,i){var n,o=this;if(e=e||{},t.isFunction(o))o=t("<a/>"),e.open=!0;else if(!o[0])return o;return o[0]?(p(),m()&&(i&&(e.onComplete=i),o.each(function(){var i=t.data(this,Y)||{};t.data(this,Y,t.extend(i,e))}).addClass(te),n=new r(o[0],e),n.get("open")&&f(o[0])),o):o},J.position=function(e,i){function n(){T[0].style.width=k[0].style.width=b[0].style.width=parseInt(y[0].style.width,10)-j+"px",b[0].style.height=C[0].style.height=H[0].style.height=parseInt(y[0].style.height,10)-D+"px"}var r,h,s,l=0,d=0,c=y.offset();if(E.unbind("resize."+Z),y.css({top:-9e4,left:-9e4}),h=E.scrollTop(),s=E.scrollLeft(),_.get("fixed")?(c.top-=h,c.left-=s,y.css({position:"fixed"})):(l=h,d=s,y.css({position:"absolute"})),d+=_.get("right")!==!1?Math.max(E.width()-_.w-N-j-a(_.get("right"),"x"),0):_.get("left")!==!1?a(_.get("left"),"x"):Math.round(Math.max(E.width()-_.w-N-j,0)/2),l+=_.get("bottom")!==!1?Math.max(o()-_.h-A-D-a(_.get("bottom"),"y"),0):_.get("top")!==!1?a(_.get("top"),"y"):Math.round(Math.max(o()-_.h-A-D,0)/2),y.css({top:c.top,left:c.left,visibility:"visible"}),x[0].style.width=x[0].style.height="9999px",r={width:_.w+N+j,height:_.h+A+D,top:l,left:d},e){var g=0;t.each(r,function(t){return r[t]!==de[t]?(g=e,void 0):void 0}),e=g}de=r,e||y.css(r),y.dequeue().animate(r,{duration:e||0,complete:function(){n(),q=!1,x[0].style.width=_.w+N+j+"px",x[0].style.height=_.h+A+D+"px",_.get("reposition")&&setTimeout(function(){E.bind("resize."+Z,J.position)},1),t.isFunction(i)&&i()},step:n})},J.resize=function(t){var e;$&&(t=t||{},t.width&&(_.w=a(t.width,"x")-N-j),t.innerWidth&&(_.w=a(t.innerWidth,"x")),L.css({width:_.w}),t.height&&(_.h=a(t.height,"y")-A-D),t.innerHeight&&(_.h=a(t.innerHeight,"y")),t.innerHeight||t.height||(e=L.scrollTop(),L.css({height:"auto"}),_.h=L.height()),L.css({height:_.h}),e&&L.scrollTop(e),J.position("none"===_.get("transition")?0:_.get("speed")))},J.prep=function(i){function o(){return _.w=_.w||L.width(),_.w=_.mw&&_.mw<_.w?_.mw:_.w,_.w}function a(){return _.h=_.h||L.height(),_.h=_.mh&&_.mh<_.h?_.mh:_.h,_.h}if($){var d,g="none"===_.get("transition")?0:_.get("speed");L.remove(),L=n(se,"LoadedContent").append(i),L.hide().appendTo(M.show()).css({width:o(),overflow:_.get("scrolling")?"auto":"hidden"}).css({height:a()}).prependTo(b),M.hide(),t(U).css({"float":"none"}),c(_.get("className")),d=function(){function i(){t.support.opacity===!1&&y[0].style.removeAttribute("filter")}var n,o,a=W.length;$&&(o=function(){clearTimeout(Q),S.hide(),u(ne),_.get("onComplete")},F.html(_.get("title")).show(),L.show(),a>1?("string"==typeof _.get("current")&&I.html(_.get("current").replace("{current}",z+1).replace("{total}",a)).show(),K[_.get("loop")||a-1>z?"show":"hide"]().html(_.get("next")),P[_.get("loop")||z?"show":"hide"]().html(_.get("previous")),ce(),_.get("preloading")&&t.each([h(-1),h(1)],function(){var i,n=W[this],o=new r(n,t.data(n,Y)),h=o.get("href");h&&s(o,h)&&(h=l(o,h),i=e.createElement("img"),i.src=h)})):O.hide(),_.get("iframe")?(n=e.createElement("iframe"),"frameBorder"in n&&(n.frameBorder=0),"allowTransparency"in n&&(n.allowTransparency="true"),_.get("scrolling")||(n.scrolling="no"),t(n).attr({src:_.get("href"),name:(new Date).getTime(),"class":Z+"Iframe",allowFullScreen:!0}).one("load",o).appendTo(L),ae.one(he,function(){n.src="//about:blank"}),_.get("fastIframe")&&t(n).trigger("load")):o(),"fade"===_.get("transition")?y.fadeTo(g,1,i):i())},"fade"===_.get("transition")?y.fadeTo(g,0,function(){J.position(0,d)}):J.position(g,d)}},J.next=function(){!q&&W[1]&&(_.get("loop")||W[z+1])&&(z=h(1),f(W[z]))},J.prev=function(){!q&&W[1]&&(_.get("loop")||z)&&(z=h(-1),f(W[z]))},J.close=function(){$&&!G&&(G=!0,$=!1,u(oe),_.get("onCleanup"),E.unbind("."+Z),v.fadeTo(_.get("fadeOut")||0,0),y.stop().fadeTo(_.get("fadeOut")||0,0,function(){y.hide(),v.hide(),u(he),L.remove(),setTimeout(function(){G=!1,u(re),_.get("onClosed")},1)}))},J.remove=function(){y&&(y.stop(),t[Y].close(),y.stop(!1,!0).remove(),v.remove(),G=!1,y=null,t("."+te).removeData(Y).removeClass(te),t(e).unbind("click."+Z).unbind("keydown."+Z))},J.element=function(){return t(_.el)},J.settings=X)})(jQuery,document,window);

/*!
 * typeahead.js 0.11.1
 * https://github.com/twitter/typeahead.js
 * Copyright 2013-2015 Twitter, Inc. and other contributors; Licensed MIT
 */

// Applied pull request 1542: https://github.com/twitter/typeahead.js/pull/1542/commits/a9e6cec997c413146f81fd4e98107785be5c35e1
// Minified using: http://www.minifier.com/

(function(root,factory){if(typeof define === "function" && define.amd){define("bloodhound",[ "jquery" ],function(a0){return root["Bloodhound"] = factory(a0);});}else if(typeof exports === "object"){module.exports = factory(require("jquery"));}else{root["Bloodhound"] = factory(jQuery);}})(this,function($){var _ = function(){"use strict";return{isMsie:function(){return /(msie|trident)/i.test(navigator.userAgent)? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] :false;},isBlankString:function(str){return !str || /^\s*$/.test(str);},escapeRegExChars:function(str){return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");},isString:function(obj){return typeof obj === "string";},isNumber:function(obj){return typeof obj === "number";},isArray:$.isArray,isFunction:$.isFunction,isObject:$.isPlainObject,isUndefined:function(obj){return typeof obj === "undefined";},isElement:function(obj){return !!(obj && obj.nodeType === 1);},isJQuery:function(obj){return obj instanceof $;},toStr:function toStr(s){return _.isUndefined(s)|| s === null ? "" :s + "";},bind:$.proxy,each:function(collection,cb){$.each(collection,reverseArgs);function reverseArgs(index,value){return cb(value,index);}},map:$.map,filter:$.grep,every:function(obj,test){var result = true;if(!obj){return result;}$.each(obj,function(key,val){if(!(result = test.call(null,val,key,obj))){return false;}});return !!result;},some:function(obj,test){var result = false;if(!obj){return result;}$.each(obj,function(key,val){if(result = test.call(null,val,key,obj)){return false;}});return !!result;},mixin:$.extend,identity:function(x){return x;},clone:function(obj){return $.extend(true,{},obj);},getIdGenerator:function(){var counter = 0;return function(){return counter++;};},templatify:function templatify(obj){return $.isFunction(obj)? obj :template;function template(){return String(obj);}},defer:function(fn){setTimeout(fn,0);},debounce:function(func,wait,immediate){var timeout,result;return function(){var context = this,args = arguments,later,callNow;later = function(){timeout = null;if(!immediate){result = func.apply(context,args);}};callNow = immediate && !timeout;clearTimeout(timeout);timeout = setTimeout(later,wait);if(callNow){result = func.apply(context,args);}return result;};},throttle:function(func,wait){var context,args,timeout,result,previous,later;previous = 0;later = function(){previous = new Date();timeout = null;result = func.apply(context,args);};return function(){var now = new Date(),remaining = wait -(now - previous);context = this;args = arguments;if(remaining <= 0){clearTimeout(timeout);timeout = null;previous = now;result = func.apply(context,args);}else if(!timeout){timeout = setTimeout(later,remaining);}return result;};},stringify:function(val){return _.isString(val)? val :JSON.stringify(val);},noop:function(){}};}();var VERSION = "0.11.1";var tokenizers = function(){"use strict";return{nonword:nonword,whitespace:whitespace,obj:{nonword:getObjTokenizer(nonword),whitespace:getObjTokenizer(whitespace)}};function whitespace(str){str = _.toStr(str);return str ? str.split(/\s+/):[];}function nonword(str){str = _.toStr(str);return str ? str.split(/\W+/):[];}function getObjTokenizer(tokenizer){return function setKey(keys){keys = _.isArray(keys)? keys :[].slice.call(arguments,0);return function tokenize(o){var tokens = [];_.each(keys,function(k){tokens = tokens.concat(tokenizer(_.toStr(o[k])));});return tokens;};};}}();var LruCache = function(){"use strict";function LruCache(maxSize){this.maxSize = _.isNumber(maxSize)? maxSize :100;this.reset();if(this.maxSize <= 0){this.set = this.get = $.noop;}}_.mixin(LruCache.prototype,{set:function set(key,val){var tailItem = this.list.tail,node;if(this.size >= this.maxSize){this.list.remove(tailItem);delete this.hash[tailItem.key];this.size--;}if(node = this.hash[key]){node.val = val;this.list.moveToFront(node);}else{node = new Node(key,val);this.list.add(node);this.hash[key] = node;this.size++;}},get:function get(key){var node = this.hash[key];if(node){this.list.moveToFront(node);return node.val;}},reset:function reset(){this.size = 0;this.hash ={};this.list = new List();}});function List(){this.head = this.tail = null;}_.mixin(List.prototype,{add:function add(node){if(this.head){node.next = this.head;this.head.prev = node;}this.head = node;this.tail = this.tail || node;},remove:function remove(node){node.prev ? node.prev.next = node.next :this.head = node.next;node.next ? node.next.prev = node.prev :this.tail = node.prev;},moveToFront:function(node){this.remove(node);this.add(node);}});function Node(key,val){this.key = key;this.val = val;this.prev = this.next = null;}return LruCache;}();var PersistentStorage = function(){"use strict";var LOCAL_STORAGE;try{LOCAL_STORAGE = window.localStorage;LOCAL_STORAGE.setItem("~~~","!");LOCAL_STORAGE.removeItem("~~~");}catch(err){LOCAL_STORAGE = null;}function PersistentStorage(namespace,override){this.prefix = [ "__",namespace,"__" ].join("");this.ttlKey = "__ttl__";this.keyMatcher = new RegExp("^" + _.escapeRegExChars(this.prefix));this.ls = override || LOCAL_STORAGE;!this.ls && this._noop();}_.mixin(PersistentStorage.prototype,{_prefix:function(key){return this.prefix + key;},_ttlKey:function(key){return this._prefix(key)+ this.ttlKey;},_noop:function(){this.get = this.set = this.remove = this.clear = this.isExpired = _.noop;},_safeSet:function(key,val){try{this.ls.setItem(key,val);}catch(err){if(err.name === "QuotaExceededError"){this.clear();this._noop();}}},get:function(key){if(this.isExpired(key)){this.remove(key);}return decode(this.ls.getItem(this._prefix(key)));},set:function(key,val,ttl){if(_.isNumber(ttl)){this._safeSet(this._ttlKey(key),encode(now()+ ttl));}else{this.ls.removeItem(this._ttlKey(key));}return this._safeSet(this._prefix(key),encode(val));},remove:function(key){this.ls.removeItem(this._ttlKey(key));this.ls.removeItem(this._prefix(key));return this;},clear:function(){var i,keys = gatherMatchingKeys(this.keyMatcher);for(i = keys.length;i--;){this.remove(keys[i]);}return this;},isExpired:function(key){var ttl = decode(this.ls.getItem(this._ttlKey(key)));return _.isNumber(ttl)&& now()> ttl ? true :false;}});return PersistentStorage;function now(){return new Date().getTime();}function encode(val){return JSON.stringify(_.isUndefined(val)? null :val);}function decode(val){return $.parseJSON(val);}function gatherMatchingKeys(keyMatcher){var i,key,keys = [],len = LOCAL_STORAGE.length;for(i = 0;i < len;i++){if((key = LOCAL_STORAGE.key(i)).match(keyMatcher)){keys.push(key.replace(keyMatcher,""));}}return keys;}}();var Transport = function(){"use strict";var pendingRequestsCount = 0,pendingRequests ={},maxPendingRequests = 6,sharedCache = new LruCache(10);function Transport(o){o = o ||{};this.cancelled = false;this.lastReq = null;this._send = o.transport;this._get = o.limiter ? o.limiter(this._get):this._get;this._cache = o.cache === false ? new LruCache(0):sharedCache;}Transport.setMaxPendingRequests = function setMaxPendingRequests(num){maxPendingRequests = num;};Transport.resetCache = function resetCache(){sharedCache.reset();};_.mixin(Transport.prototype,{_fingerprint:function fingerprint(o){o = o ||{};return o.url + o.type + $.param(o.data ||{});},_get:function(o,cb){var that = this,fingerprint,jqXhr;fingerprint = this._fingerprint(o);if(this.cancelled || fingerprint !== this.lastReq){return;}if(jqXhr = pendingRequests[fingerprint]){jqXhr.done(done).fail(fail);}else if(pendingRequestsCount < maxPendingRequests){pendingRequestsCount++;pendingRequests[fingerprint] = this._send(o).done(done).fail(fail).always(always);}else{this.onDeckRequestArgs = [].slice.call(arguments,0);}function done(resp){cb(null,resp);that._cache.set(fingerprint,resp);}function fail(){cb(true);}function always(){pendingRequestsCount--;delete pendingRequests[fingerprint];if(that.onDeckRequestArgs){that._get.apply(that,that.onDeckRequestArgs);that.onDeckRequestArgs = null;}}},get:function(o,cb){var resp,fingerprint;cb = cb || $.noop;o = _.isString(o)?{url:o}:o ||{};fingerprint = this._fingerprint(o);this.cancelled = false;this.lastReq = fingerprint;if(resp = this._cache.get(fingerprint)){cb(null,resp);}else{this._get(o,cb);}},cancel:function(){this.cancelled = true;}});return Transport;}();var SearchIndex = window.SearchIndex = function(){"use strict";var CHILDREN = "c",IDS = "i";function SearchIndex(o){o = o ||{};if(!o.datumTokenizer || !o.queryTokenizer){$.error("datumTokenizer and queryTokenizer are both required");}this.identify = o.identify || _.stringify;this.datumTokenizer = o.datumTokenizer;this.queryTokenizer = o.queryTokenizer;this.reset();}_.mixin(SearchIndex.prototype,{bootstrap:function bootstrap(o){this.datums = o.datums;this.trie = o.trie;},add:function(data){var that = this;data = _.isArray(data)? data :[ data ];_.each(data,function(datum){var id,tokens;that.datums[id = that.identify(datum)] = datum;tokens = normalizeTokens(that.datumTokenizer(datum));_.each(tokens,function(token){var node,chars,ch;node = that.trie;chars = token.split("");while(ch = chars.shift()){node = node[CHILDREN][ch] ||(node[CHILDREN][ch] = newNode());node[IDS].push(id);}});});},get:function get(ids){var that = this;return _.map(ids,function(id){return that.datums[id];});},search:function search(query){var that = this,tokens,matches;tokens = normalizeTokens(this.queryTokenizer(query));_.each(tokens,function(token){var node,chars,ch,ids;if(matches && matches.length === 0){return false;}node = that.trie;chars = token.split("");while(node &&(ch = chars.shift())){node = node[CHILDREN][ch];}if(node && chars.length === 0){ids = node[IDS].slice(0);matches = matches ? getIntersection(matches,ids):ids;}else{matches = [];return false;}});return matches ? _.map(unique(matches),function(id){return that.datums[id];}):[];},all:function all(){var values = [];for(var key in this.datums){values.push(this.datums[key]);}return values;},reset:function reset(){this.datums ={};this.trie = newNode();},serialize:function serialize(){return{datums:this.datums,trie:this.trie};}});return SearchIndex;function normalizeTokens(tokens){tokens = _.filter(tokens,function(token){return !!token;});tokens = _.map(tokens,function(token){return token.toLowerCase();});return tokens;}function newNode(){var node ={};node[IDS] = [];node[CHILDREN] ={};return node;}function unique(array){var seen ={},uniques = [];for(var i = 0,len = array.length;i < len;i++){if(!seen[array[i]]){seen[array[i]] = true;uniques.push(array[i]);}}return uniques;}function getIntersection(arrayA,arrayB){var ai = 0,bi = 0,intersection = [];arrayA = arrayA.sort();arrayB = arrayB.sort();var lenArrayA = arrayA.length,lenArrayB = arrayB.length;while(ai < lenArrayA && bi < lenArrayB){if(arrayA[ai] < arrayB[bi]){ai++;}else if(arrayA[ai] > arrayB[bi]){bi++;}else{intersection.push(arrayA[ai]);ai++;bi++;}}return intersection;}}();var Prefetch = function(){"use strict";var keys;keys ={data:"data",protocol:"protocol",thumbprint:"thumbprint"};function Prefetch(o){this.url = o.url;this.ttl = o.ttl;this.cache = o.cache;this.prepare = o.prepare;this.transform = o.transform;this.transport = o.transport;this.thumbprint = o.thumbprint;this.storage = new PersistentStorage(o.cacheKey);}_.mixin(Prefetch.prototype,{_settings:function settings(){return{url:this.url,type:"GET",dataType:"json"};},store:function store(data){if(!this.cache){return;}this.storage.set(keys.data,data,this.ttl);this.storage.set(keys.protocol,location.protocol,this.ttl);this.storage.set(keys.thumbprint,this.thumbprint,this.ttl);},fromCache:function fromCache(){var stored ={},isExpired;if(!this.cache){return null;}stored.data = this.storage.get(keys.data);stored.protocol = this.storage.get(keys.protocol);stored.thumbprint = this.storage.get(keys.thumbprint);isExpired = stored.thumbprint !== this.thumbprint || stored.protocol !== location.protocol;return stored.data && !isExpired ? stored.data :null;},fromNetwork:function(cb){var that = this,settings;if(!cb){return;}settings = this.prepare(this._settings());this.transport(settings).fail(onError).done(onResponse);function onError(){cb(true);}function onResponse(resp){cb(null,that.transform(resp));}},clear:function clear(){this.storage.clear();return this;}});return Prefetch;}();var Remote = function(){"use strict";function Remote(o){this.url = o.url;this.prepare = o.prepare;this.transform = o.transform;this.transport = new Transport({cache:o.cache,limiter:o.limiter,transport:o.transport});}_.mixin(Remote.prototype,{_settings:function settings(){return{url:this.url,type:"GET",dataType:"json"};},get:function get(query,cb){var that = this,settings;if(!cb){return;}query = query || "";settings = this.prepare(query,this._settings());return this.transport.get(settings,onResponse);function onResponse(err,resp){err ? cb([]):cb(that.transform(resp));}},cancelLastRequest:function cancelLastRequest(){this.transport.cancel();}});return Remote;}();var oParser = function(){"use strict";return function parse(o){var defaults,sorter;defaults ={initialize:true,identify:_.stringify,datumTokenizer:null,queryTokenizer:null,sufficient:5,sorter:null,local:[],prefetch:null,remote:null};o = _.mixin(defaults,o ||{});!o.datumTokenizer && $.error("datumTokenizer is required");!o.queryTokenizer && $.error("queryTokenizer is required");sorter = o.sorter;o.sorter = sorter ? function(x){return x.sort(sorter);}:_.identity;o.local = _.isFunction(o.local)? o.local():o.local;o.prefetch = parsePrefetch(o.prefetch);o.remote = parseRemote(o.remote);return o;};function parsePrefetch(o){var defaults;if(!o){return null;}defaults ={url:null,ttl:24 * 60 * 60 * 1e3,cache:true,cacheKey:null,thumbprint:"",prepare:_.identity,transform:_.identity,transport:null};o = _.isString(o)?{url:o}:o;o = _.mixin(defaults,o);!o.url && $.error("prefetch requires url to be set");o.transform = o.filter || o.transform;o.cacheKey = o.cacheKey || o.url;o.thumbprint = VERSION + o.thumbprint;o.transport = o.transport ? callbackToDeferred(o.transport):$.ajax;return o;}function parseRemote(o){var defaults;if(!o){return;}defaults ={url:null,cache:true,prepare:null,replace:null,wildcard:null,limiter:null,rateLimitBy:"debounce",rateLimitWait:300,transform:_.identity,transport:null};o = _.isString(o)?{url:o}:o;o = _.mixin(defaults,o);!o.url && $.error("remote requires url to be set");o.transform = o.filter || o.transform;o.prepare = toRemotePrepare(o);o.limiter = toLimiter(o);o.transport = o.transport ? callbackToDeferred(o.transport):$.ajax;delete o.replace;delete o.wildcard;delete o.rateLimitBy;delete o.rateLimitWait;return o;}function toRemotePrepare(o){var prepare,replace,wildcard;prepare = o.prepare;replace = o.replace;wildcard = o.wildcard;if(prepare){return prepare;}if(replace){prepare = prepareByReplace;}else if(o.wildcard){prepare = prepareByWildcard;}else{prepare = idenityPrepare;}return prepare;function prepareByReplace(query,settings){settings.url = replace(settings.url,query);return settings;}function prepareByWildcard(query,settings){settings.url = settings.url.replace(wildcard,encodeURIComponent(query));return settings;}function idenityPrepare(query,settings){return settings;}}function toLimiter(o){var limiter,method,wait;limiter = o.limiter;method = o.rateLimitBy;wait = o.rateLimitWait;if(!limiter){limiter = /^throttle$/i.test(method)? throttle(wait):debounce(wait);}return limiter;function debounce(wait){return function debounce(fn){return _.debounce(fn,wait);};}function throttle(wait){return function throttle(fn){return _.throttle(fn,wait);};}}function callbackToDeferred(fn){return function wrapper(o){var deferred = $.Deferred();fn(o,onSuccess,onError);return deferred;function onSuccess(resp){_.defer(function(){deferred.resolve(resp);});}function onError(err){_.defer(function(){deferred.reject(err);});}};}}();var Bloodhound = function(){"use strict";var old;old = window && window.Bloodhound;function Bloodhound(o){o = oParser(o);this.sorter = o.sorter;this.identify = o.identify;this.sufficient = o.sufficient;this.local = o.local;this.remote = o.remote ? new Remote(o.remote):null;this.prefetch = o.prefetch ? new Prefetch(o.prefetch):null;this.index = new SearchIndex({identify:this.identify,datumTokenizer:o.datumTokenizer,queryTokenizer:o.queryTokenizer});o.initialize !== false && this.initialize();}Bloodhound.noConflict = function noConflict(){window &&(window.Bloodhound = old);return Bloodhound;};Bloodhound.tokenizers = tokenizers;_.mixin(Bloodhound.prototype,{__ttAdapter:function ttAdapter(){var that = this;return this.remote ? withAsync :withoutAsync;function withAsync(query,sync,async){return that.search(query,sync,async);}function withoutAsync(query,sync){return that.search(query,sync);}},_loadPrefetch:function loadPrefetch(){var that = this,deferred,serialized;deferred = $.Deferred();if(!this.prefetch){deferred.resolve();}else if(serialized = this.prefetch.fromCache()){this.index.bootstrap(serialized);deferred.resolve();}else{this.prefetch.fromNetwork(done);}return deferred.promise();function done(err,data){if(err){return deferred.reject();}that.add(data);that.prefetch.store(that.index.serialize());deferred.resolve();}},_initialize:function initialize(){var that = this,deferred;this.clear();(this.initPromise = this._loadPrefetch()).done(addLocalToIndex);return this.initPromise;function addLocalToIndex(){that.add(that.local);}},initialize:function initialize(force){return !this.initPromise || force ? this._initialize():this.initPromise;},add:function add(data){this.index.add(data);return this;},get:function get(ids){ids = _.isArray(ids)? ids :[].slice.call(arguments);return this.index.get(ids);},search:function search(query,sync,async){var that = this,local;local = this.sorter(this.index.search(query));sync(this.remote ? local.slice():local);if(this.remote && local.length < this.sufficient){this.remote.get(query,processRemote);}else if(this.remote){this.remote.cancelLastRequest();}return this;function processRemote(remote){var nonDuplicates = [];_.each(remote,function(r){!_.some(local,function(l){return that.identify(r)=== that.identify(l);})&& nonDuplicates.push(r);});async && async(nonDuplicates);}},all:function all(){return this.index.all();},clear:function clear(){this.index.reset();return this;},clearPrefetchCache:function clearPrefetchCache(){this.prefetch && this.prefetch.clear();return this;},clearRemoteCache:function clearRemoteCache(){Transport.resetCache();return this;},ttAdapter:function ttAdapter(){return this.__ttAdapter();}});return Bloodhound;}();return Bloodhound;});(function(root,factory){if(typeof define === "function" && define.amd){define("typeahead.js",[ "jquery" ],function(a0){return factory(a0);});}else if(typeof exports === "object"){module.exports = factory(require("jquery"));}else{factory(jQuery);}})(this,function($){var _ = function(){"use strict";return{isMsie:function(){return /(msie|trident)/i.test(navigator.userAgent)? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] :false;},isBlankString:function(str){return !str || /^\s*$/.test(str);},escapeRegExChars:function(str){return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");},isString:function(obj){return typeof obj === "string";},isNumber:function(obj){return typeof obj === "number";},isArray:$.isArray,isFunction:$.isFunction,isObject:$.isPlainObject,isUndefined:function(obj){return typeof obj === "undefined";},isElement:function(obj){return !!(obj && obj.nodeType === 1);},isJQuery:function(obj){return obj instanceof $;},toStr:function toStr(s){return _.isUndefined(s)|| s === null ? "" :s + "";},bind:$.proxy,each:function(collection,cb){$.each(collection,reverseArgs);function reverseArgs(index,value){return cb(value,index);}},map:$.map,filter:$.grep,every:function(obj,test){var result = true;if(!obj){return result;}$.each(obj,function(key,val){if(!(result = test.call(null,val,key,obj))){return false;}});return !!result;},some:function(obj,test){var result = false;if(!obj){return result;}$.each(obj,function(key,val){if(result = test.call(null,val,key,obj)){return false;}});return !!result;},mixin:$.extend,identity:function(x){return x;},clone:function(obj){return $.extend(true,{},obj);},getIdGenerator:function(){var counter = 0;return function(){return counter++;};},templatify:function templatify(obj){return $.isFunction(obj)? obj :template;function template(){return String(obj);}},defer:function(fn){setTimeout(fn,0);},debounce:function(func,wait,immediate){var timeout,result;return function(){var context = this,args = arguments,later,callNow;later = function(){timeout = null;if(!immediate){result = func.apply(context,args);}};callNow = immediate && !timeout;clearTimeout(timeout);timeout = setTimeout(later,wait);if(callNow){result = func.apply(context,args);}return result;};},throttle:function(func,wait){var context,args,timeout,result,previous,later;previous = 0;later = function(){previous = new Date();timeout = null;result = func.apply(context,args);};return function(){var now = new Date(),remaining = wait -(now - previous);context = this;args = arguments;if(remaining <= 0){clearTimeout(timeout);timeout = null;previous = now;result = func.apply(context,args);}else if(!timeout){timeout = setTimeout(later,remaining);}return result;};},stringify:function(val){return _.isString(val)? val :JSON.stringify(val);},noop:function(){}};}();var WWW = function(){"use strict";var defaultClassNames ={wrapper:"twitter-typeahead",input:"tt-input",hint:"tt-hint",menu:"tt-menu",dataset:"tt-dataset",suggestion:"tt-suggestion",selectable:"tt-selectable",empty:"tt-empty",open:"tt-open",cursor:"tt-cursor",highlight:"tt-highlight"};return build;function build(o){var www,classes;classes = _.mixin({},defaultClassNames,o);www ={css:buildCss(),classes:classes,html:buildHtml(classes),selectors:buildSelectors(classes)};return{css:www.css,html:www.html,classes:www.classes,selectors:www.selectors,mixin:function(o){_.mixin(o,www);}};}function buildHtml(c){return{wrapper:'<span class="' + c.wrapper + '"></span>',menu:'<div class="' + c.menu + '"></div>'};}function buildSelectors(classes){var selectors ={};_.each(classes,function(v,k){selectors[k] = "." + v;});return selectors;}function buildCss(){var css ={wrapper:{position:"relative",display:"inline-block"},hint:{position:"absolute",top:"0",left:"0",borderColor:"transparent",boxShadow:"none",opacity:"1"},input:{position:"relative",verticalAlign:"top",backgroundColor:"transparent"},inputWithNoHint:{position:"relative",verticalAlign:"top"},menu:{position:"absolute",top:"100%",left:"0",zIndex:"100",display:"none"},ltr:{left:"0",right:"auto"},rtl:{left:"auto",right:" 0"}};if(_.isMsie()){_.mixin(css.input,{backgroundImage:"url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"});}return css;}}();var EventBus = function(){"use strict";var namespace,deprecationMap;namespace = "typeahead:";deprecationMap ={render:"rendered",cursorchange:"cursorchanged",select:"selected",autocomplete:"autocompleted"};function EventBus(o){if(!o || !o.el){$.error("EventBus initialized without el");}this.$el = $(o.el);}_.mixin(EventBus.prototype,{_trigger:function(type,args){var $e;$e = $.Event(namespace + type);(args = args || []).unshift($e);this.$el.trigger.apply(this.$el,args);return $e;},before:function(type){var args,$e;args = [].slice.call(arguments,1);$e = this._trigger("before" + type,args);return $e.isDefaultPrevented();},trigger:function(type){var deprecatedType;this._trigger(type,[].slice.call(arguments,1));if(deprecatedType = deprecationMap[type]){this._trigger(deprecatedType,[].slice.call(arguments,1));}}});return EventBus;}();var EventEmitter = function(){"use strict";var splitter = /\s+/,nextTick = getNextTick();return{onSync:onSync,onAsync:onAsync,off:off,trigger:trigger};function on(method,types,cb,context){var type;if(!cb){return this;}types = types.split(splitter);cb = context ? bindContext(cb,context):cb;this._callbacks = this._callbacks ||{};while(type = types.shift()){this._callbacks[type] = this._callbacks[type] ||{sync:[],async:[]};this._callbacks[type][method].push(cb);}return this;}function onAsync(types,cb,context){return on.call(this,"async",types,cb,context);}function onSync(types,cb,context){return on.call(this,"sync",types,cb,context);}function off(types){var type;if(!this._callbacks){return this;}types = types.split(splitter);while(type = types.shift()){delete this._callbacks[type];}return this;}function trigger(types){var type,callbacks,args,syncFlush,asyncFlush;if(!this._callbacks){return this;}types = types.split(splitter);args = [].slice.call(arguments,1);while((type = types.shift())&&(callbacks = this._callbacks[type])){syncFlush = getFlush(callbacks.sync,this,[ type ].concat(args));asyncFlush = getFlush(callbacks.async,this,[ type ].concat(args));syncFlush()&& nextTick(asyncFlush);}return this;}function getFlush(callbacks,context,args){return flush;function flush(){var cancelled;for(var i = 0,len = callbacks.length;!cancelled && i < len;i += 1){cancelled = callbacks[i].apply(context,args)=== false;}return !cancelled;}}function getNextTick(){var nextTickFn;if(window.setImmediate){nextTickFn = function nextTickSetImmediate(fn){setImmediate(function(){fn();});};}else{nextTickFn = function nextTickSetTimeout(fn){setTimeout(function(){fn();},0);};}return nextTickFn;}function bindContext(fn,context){return fn.bind ? fn.bind(context):function(){fn.apply(context,[].slice.call(arguments,0));};}}();var highlight = function(doc){"use strict";var defaults ={node:null,pattern:null,tagName:"strong",className:null,wordsOnly:false,caseSensitive:false};return function hightlight(o){var regex;o = _.mixin({},defaults,o);if(!o.node || !o.pattern){return;}o.pattern = _.isArray(o.pattern)? o.pattern :[ o.pattern ];regex = getRegex(o.pattern,o.caseSensitive,o.wordsOnly);traverse(o.node,hightlightTextNode);function hightlightTextNode(textNode){var match,patternNode,wrapperNode;if(match = regex.exec(textNode.data)){wrapperNode = doc.createElement(o.tagName);o.className &&(wrapperNode.className = o.className);patternNode = textNode.splitText(match.index);patternNode.splitText(match[0].length);wrapperNode.appendChild(patternNode.cloneNode(true));textNode.parentNode.replaceChild(wrapperNode,patternNode);}return !!match;}function traverse(el,hightlightTextNode){var childNode,TEXT_NODE_TYPE = 3;for(var i = 0;i < el.childNodes.length;i++){childNode = el.childNodes[i];if(childNode.nodeType === TEXT_NODE_TYPE){i += hightlightTextNode(childNode)? 1 :0;}else{traverse(childNode,hightlightTextNode);}}}};function getRegex(patterns,caseSensitive,wordsOnly){var escapedPatterns = [],regexStr;for(var i = 0,len = patterns.length;i < len;i++){escapedPatterns.push(_.escapeRegExChars(patterns[i]));}regexStr = wordsOnly ? "\\b(" + escapedPatterns.join("|")+ ")\\b" :"(" + escapedPatterns.join("|")+ ")";return caseSensitive ? new RegExp(regexStr):new RegExp(regexStr,"i");}}(window.document);var Input = function(){"use strict";var specialKeyCodeMap;specialKeyCodeMap ={9:"tab",27:"esc",37:"left",39:"right",13:"enter",38:"up",40:"down"};function Input(o,www){o = o ||{};if(!o.input){$.error("input is missing");}www.mixin(this);this.$hint = $(o.hint);this.$input = $(o.input);this.query = this.$input.val();this.queryWhenFocused = this.hasFocus()? this.query :null;this.$overflowHelper = buildOverflowHelper(this.$input);this._checkLanguageDirection();if(this.$hint.length === 0){this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = _.noop;}}Input.normalizeQuery = function(str){return _.toStr(str).replace(/^\s*/g,"").replace(/\s{2,}/g," ");};_.mixin(Input.prototype,EventEmitter,{_onBlur:function onBlur(){this.resetInputValue();this.trigger("blurred");},_onFocus:function onFocus(){this.queryWhenFocused = this.query;this.trigger("focused");},_onKeydown:function onKeydown($e){var keyName = specialKeyCodeMap[$e.which || $e.keyCode];this._managePreventDefault(keyName,$e);if(keyName && this._shouldTrigger(keyName,$e)){this.trigger(keyName + "Keyed",$e);}},_onInput:function onInput(){this._setQuery(this.getInputValue());this.clearHintIfInvalid();this._checkLanguageDirection();},_managePreventDefault:function managePreventDefault(keyName,$e){var preventDefault;switch(keyName){case "up":case "down":preventDefault = !withModifier($e);break; default:preventDefault = false;}preventDefault && $e.preventDefault();},_shouldTrigger:function shouldTrigger(keyName,$e){var trigger;switch(keyName){case "tab":trigger = !withModifier($e);break; default:trigger = true;}return trigger;},_checkLanguageDirection:function checkLanguageDirection(){var dir =(this.$input.css("direction")|| "ltr").toLowerCase();if(this.dir !== dir){this.dir = dir;this.$hint.attr("dir",dir);this.trigger("langDirChanged",dir);}},_setQuery:function setQuery(val,silent){var areEquivalent,hasDifferentWhitespace;areEquivalent = areQueriesEquivalent(val,this.query);hasDifferentWhitespace = areEquivalent ? this.query.length !== val.length :false;this.query = val;if(!silent && !areEquivalent){this.trigger("queryChanged",this.query);}else if(!silent && hasDifferentWhitespace){this.trigger("whitespaceChanged",this.query);}},bind:function(){var that = this,onBlur,onFocus,onKeydown,onInput;onBlur = _.bind(this._onBlur,this);onFocus = _.bind(this._onFocus,this);onKeydown = _.bind(this._onKeydown,this);onInput = _.bind(this._onInput,this);this.$input.on("blur.tt",onBlur).on("focus.tt",onFocus).on("keydown.tt",onKeydown);if(!_.isMsie()|| _.isMsie()> 9){this.$input.on("input.tt",onInput);}else{this.$input.on("keydown.tt keypress.tt cut.tt paste.tt",function($e){if(specialKeyCodeMap[$e.which || $e.keyCode]){return;}_.defer(_.bind(that._onInput,that,$e));});}return this;},focus:function focus(){this.$input.focus();},blur:function blur(){this.$input.blur();},getLangDir:function getLangDir(){return this.dir;},getQuery:function getQuery(){return this.query || "";},setQuery:function setQuery(val,silent){this.setInputValue(val);this._setQuery(val,silent);},hasQueryChangedSinceLastFocus:function hasQueryChangedSinceLastFocus(){return this.query !== this.queryWhenFocused;},getInputValue:function getInputValue(){return this.$input.val();},setInputValue:function setInputValue(value){this.$input.val(value);this.clearHintIfInvalid();this._checkLanguageDirection();},resetInputValue:function resetInputValue(){this.setInputValue(this.query);},getHint:function getHint(){return this.$hint.val();},setHint:function setHint(value){this.$hint.val(value);},clearHint:function clearHint(){this.setHint("");},clearHintIfInvalid:function clearHintIfInvalid(){var val,hint,valIsPrefixOfHint,isValid;val = this.getInputValue();hint = this.getHint();valIsPrefixOfHint = val !== hint && hint.indexOf(val)=== 0;isValid = val !== "" && valIsPrefixOfHint && !this.hasOverflow();!isValid && this.clearHint();},hasFocus:function hasFocus(){return this.$input.is(":focus");},hasOverflow:function hasOverflow(){var constraint = this.$input.width()- 2;this.$overflowHelper.text(this.getInputValue());return this.$overflowHelper.width()>= constraint;},isCursorAtEnd:function(){var valueLength,selectionStart,range;valueLength = this.$input.val().length;selectionStart = this.$input[0].selectionStart;if(_.isNumber(selectionStart)){return selectionStart === valueLength;}else if(document.selection){range = document.selection.createRange();range.moveStart("character",-valueLength);return valueLength === range.text.length;}return true;},destroy:function destroy(){this.$hint.off(".tt");this.$input.off(".tt");this.$overflowHelper.remove();this.$hint = this.$input = this.$overflowHelper = $("<div>");}});return Input;function buildOverflowHelper($input){return $('<pre aria-hidden="true"></pre>').css({position:"absolute",visibility:"hidden",whiteSpace:"pre",fontFamily:$input.css("font-family"),fontSize:$input.css("font-size"),fontStyle:$input.css("font-style"),fontVariant:$input.css("font-variant"),fontWeight:$input.css("font-weight"),wordSpacing:$input.css("word-spacing"),letterSpacing:$input.css("letter-spacing"),textIndent:$input.css("text-indent"),textRendering:$input.css("text-rendering"),textTransform:$input.css("text-transform")}).insertAfter($input);}function areQueriesEquivalent(a,b){return Input.normalizeQuery(a)=== Input.normalizeQuery(b);}function withModifier($e){return $e.altKey || $e.ctrlKey || $e.metaKey || $e.shiftKey;}}();var Dataset = function(){"use strict";var keys,nameGenerator;keys ={val:"tt-selectable-display",obj:"tt-selectable-object"};nameGenerator = _.getIdGenerator();function Dataset(o,www){o = o ||{};o.templates = o.templates ||{};o.templates.notFound = o.templates.notFound || o.templates.empty;if(!o.source){$.error("missing source");}if(!o.node){$.error("missing node");}if(o.name && !isValidName(o.name)){$.error("invalid dataset name:" + o.name);}www.mixin(this);this.highlight = !!o.highlight;this.name = o.name || nameGenerator();this.limit = o.limit || 5;this.displayFn = getDisplayFn(o.display || o.displayKey);this.templates = getTemplates(o.templates,this.displayFn);this.source = o.source.__ttAdapter ? o.source.__ttAdapter():o.source;this.async = _.isUndefined(o.async)? this.source.length > 2 :!!o.async;this._resetLastSuggestion();this.$el = $(o.node).addClass(this.classes.dataset).addClass(this.classes.dataset + "-" + this.name);}Dataset.extractData = function extractData(el){var $el = $(el);if($el.data(keys.obj)){return{val:$el.data(keys.val)|| "",obj:$el.data(keys.obj)|| null};}return null;};_.mixin(Dataset.prototype,EventEmitter,{_overwrite:function overwrite(query,suggestions){suggestions = suggestions || [];if(suggestions.length){this._renderSuggestions(query,suggestions);}else if(this.async && this.templates.pending){this._renderPending(query);}else if(!this.async && this.templates.notFound){this._renderNotFound(query);}else{this._empty();}this.trigger("rendered",this.name,suggestions,false);},_append:function append(query,suggestions){suggestions = suggestions || [];if(suggestions.length && this.$lastSuggestion.length){this._appendSuggestions(query,suggestions);}else if(suggestions.length){this._renderSuggestions(query,suggestions);}else if(!this.$lastSuggestion.length && this.templates.notFound){this._renderNotFound(query);}this.trigger("rendered",this.name,suggestions,true);},_renderSuggestions:function renderSuggestions(query,suggestions){var $fragment;$fragment = this._getSuggestionsFragment(query,suggestions);this.$lastSuggestion = $fragment.children().last();this.$el.html($fragment).prepend(this._getHeader(query,suggestions)).append(this._getFooter(query,suggestions));},_appendSuggestions:function appendSuggestions(query,suggestions){var $fragment,$lastSuggestion;$fragment = this._getSuggestionsFragment(query,suggestions);$lastSuggestion = $fragment.children().last();this.$lastSuggestion.after($fragment);this.$lastSuggestion = $lastSuggestion;},_renderPending:function renderPending(query){var template = this.templates.pending;this._resetLastSuggestion();template && this.$el.html(template({query:query,dataset:this.name}));},_renderNotFound:function renderNotFound(query){var template = this.templates.notFound;this._resetLastSuggestion();template && this.$el.html(template({query:query,dataset:this.name}));},_empty:function empty(){this.$el.empty();this._resetLastSuggestion();},_getSuggestionsFragment:function getSuggestionsFragment(query,suggestions){var that = this,fragment;fragment = document.createDocumentFragment();_.each(suggestions,function getSuggestionNode(suggestion){var $el,context;context = that._injectQuery(query,suggestion);$el = $(that.templates.suggestion(context)).data(keys.obj,suggestion).data(keys.val,that.displayFn(suggestion)).addClass(that.classes.suggestion + " " + that.classes.selectable);fragment.appendChild($el[0]);});this.highlight && highlight({className:this.classes.highlight,node:fragment,pattern:query});return $(fragment);},_getFooter:function getFooter(query,suggestions){return this.templates.footer ? this.templates.footer({query:query,suggestions:suggestions,dataset:this.name}):null;},_getHeader:function getHeader(query,suggestions){return this.templates.header ? this.templates.header({query:query,suggestions:suggestions,dataset:this.name}):null;},_resetLastSuggestion:function resetLastSuggestion(){this.$lastSuggestion = $();},_injectQuery:function injectQuery(query,obj){return _.isObject(obj)? _.mixin({_query:query},obj):obj;},update:function update(query){var that = this,canceled = false,syncCalled = false,rendered = 0;this.cancel();this.cancel = function cancel(){canceled = true;that.cancel = $.noop;that.async && that.trigger("asyncCanceled",query);};this.source(query,sync,async);!syncCalled && sync([]);function sync(suggestions){if(syncCalled){return;}syncCalled = true;suggestions =(suggestions || []).slice(0,that.limit);rendered = suggestions.length;that._overwrite(query,suggestions);if(rendered < that.limit && that.async){that.trigger("asyncRequested",query);}}function async(suggestions){suggestions = suggestions || [];if(!canceled && rendered < that.limit){that.cancel = $.noop;rendered += suggestions.length;var num = that.limit - rendered;if(num == 0){num = rendered;}that._append(query,suggestions.slice(0,num));that.async && that.trigger("asyncReceived",query);}}},cancel:$.noop,clear:function clear(){this._empty();this.cancel();this.trigger("cleared");},isEmpty:function isEmpty(){return this.$el.is(":empty");},destroy:function destroy(){this.$el = $("<div>");}});return Dataset;function getDisplayFn(display){display = display || _.stringify;return _.isFunction(display)? display :displayFn;function displayFn(obj){return obj[display];}}function getTemplates(templates,displayFn){return{notFound:templates.notFound && _.templatify(templates.notFound),pending:templates.pending && _.templatify(templates.pending),header:templates.header && _.templatify(templates.header),footer:templates.footer && _.templatify(templates.footer),suggestion:templates.suggestion || suggestionTemplate};function suggestionTemplate(context){return $("<div>").text(displayFn(context));}}function isValidName(str){return /^[_a-zA-Z0-9-]+$/.test(str);}}();var Menu = function(){"use strict";function Menu(o,www){var that = this;o = o ||{};if(!o.node){$.error("node is required");}www.mixin(this);this.$node = $(o.node);this.query = null;this.datasets = _.map(o.datasets,initializeDataset);function initializeDataset(oDataset){var node = that.$node.find(oDataset.node).first();oDataset.node = node.length ? node :$("<div>").appendTo(that.$node);return new Dataset(oDataset,www);}}_.mixin(Menu.prototype,EventEmitter,{_onSelectableClick:function onSelectableClick($e){this.trigger("selectableClicked",$($e.currentTarget));},_onRendered:function onRendered(type,dataset,suggestions,async){this.$node.toggleClass(this.classes.empty,this._allDatasetsEmpty());this.trigger("datasetRendered",dataset,suggestions,async);},_onCleared:function onCleared(){this.$node.toggleClass(this.classes.empty,this._allDatasetsEmpty());this.trigger("datasetCleared");},_propagate:function propagate(){this.trigger.apply(this,arguments);},_allDatasetsEmpty:function allDatasetsEmpty(){return _.every(this.datasets,isDatasetEmpty);function isDatasetEmpty(dataset){return dataset.isEmpty();}},_getSelectables:function getSelectables(){return this.$node.find(this.selectors.selectable);},_removeCursor:function _removeCursor(){var $selectable = this.getActiveSelectable();$selectable && $selectable.removeClass(this.classes.cursor);},_ensureVisible:function ensureVisible($el){var elTop,elBottom,nodeScrollTop,nodeHeight;elTop = $el.position().top;elBottom = elTop + $el.outerHeight(true);nodeScrollTop = this.$node.scrollTop();nodeHeight = this.$node.height()+ parseInt(this.$node.css("paddingTop"),10)+ parseInt(this.$node.css("paddingBottom"),10);if(elTop < 0){this.$node.scrollTop(nodeScrollTop + elTop);}else if(nodeHeight < elBottom){this.$node.scrollTop(nodeScrollTop +(elBottom - nodeHeight));}},bind:function(){var that = this,onSelectableClick;onSelectableClick = _.bind(this._onSelectableClick,this);this.$node.on("click.tt",this.selectors.selectable,onSelectableClick);_.each(this.datasets,function(dataset){dataset.onSync("asyncRequested",that._propagate,that).onSync("asyncCanceled",that._propagate,that).onSync("asyncReceived",that._propagate,that).onSync("rendered",that._onRendered,that).onSync("cleared",that._onCleared,that);});return this;},isOpen:function isOpen(){return this.$node.hasClass(this.classes.open);},open:function open(){this.$node.addClass(this.classes.open);},close:function close(){this.$node.removeClass(this.classes.open);this._removeCursor();},setLanguageDirection:function setLanguageDirection(dir){this.$node.attr("dir",dir);},selectableRelativeToCursor:function selectableRelativeToCursor(delta){var $selectables,$oldCursor,oldIndex,newIndex;$oldCursor = this.getActiveSelectable();$selectables = this._getSelectables();oldIndex = $oldCursor ? $selectables.index($oldCursor):-1;newIndex = oldIndex + delta;newIndex =(newIndex + 1)%($selectables.length + 1)- 1;newIndex = newIndex < -1 ? $selectables.length - 1 :newIndex;return newIndex === -1 ? null :$selectables.eq(newIndex);},setCursor:function setCursor($selectable){this._removeCursor();if($selectable = $selectable && $selectable.first()){$selectable.addClass(this.classes.cursor);this._ensureVisible($selectable);}},getSelectableData:function getSelectableData($el){return $el && $el.length ? Dataset.extractData($el):null;},getActiveSelectable:function getActiveSelectable(){var $selectable = this._getSelectables().filter(this.selectors.cursor).first();return $selectable.length ? $selectable :null;},getTopSelectable:function getTopSelectable(){var $selectable = this._getSelectables().first();return $selectable.length ? $selectable :null;},update:function update(query){var isValidUpdate = query !== this.query;if(isValidUpdate){this.query = query;_.each(this.datasets,updateDataset);}return isValidUpdate;function updateDataset(dataset){dataset.update(query);}},empty:function empty(){_.each(this.datasets,clearDataset);this.query = null;this.$node.addClass(this.classes.empty);function clearDataset(dataset){dataset.clear();}},destroy:function destroy(){this.$node.off(".tt");this.$node = $("<div>");_.each(this.datasets,destroyDataset);function destroyDataset(dataset){dataset.destroy();}}});return Menu;}();var DefaultMenu = function(){"use strict";var s = Menu.prototype;function DefaultMenu(){Menu.apply(this,[].slice.call(arguments,0));}_.mixin(DefaultMenu.prototype,Menu.prototype,{open:function open(){!this._allDatasetsEmpty()&& this._show();return s.open.apply(this,[].slice.call(arguments,0));},close:function close(){this._hide();return s.close.apply(this,[].slice.call(arguments,0));},_onRendered:function onRendered(){if(this._allDatasetsEmpty()){this._hide();}else{this.isOpen()&& this._show();}return s._onRendered.apply(this,[].slice.call(arguments,0));},_onCleared:function onCleared(){if(this._allDatasetsEmpty()){this._hide();}else{this.isOpen()&& this._show();}return s._onCleared.apply(this,[].slice.call(arguments,0));},setLanguageDirection:function setLanguageDirection(dir){this.$node.css(dir === "ltr" ? this.css.ltr :this.css.rtl);return s.setLanguageDirection.apply(this,[].slice.call(arguments,0));},_hide:function hide(){this.$node.hide();},_show:function show(){this.$node.css("display","block");}});return DefaultMenu;}();var Typeahead = function(){"use strict";function Typeahead(o,www){var onFocused,onBlurred,onEnterKeyed,onTabKeyed,onEscKeyed,onUpKeyed,onDownKeyed,onLeftKeyed,onRightKeyed,onQueryChanged,onWhitespaceChanged;o = o ||{};if(!o.input){$.error("missing input");}if(!o.menu){$.error("missing menu");}if(!o.eventBus){$.error("missing event bus");}www.mixin(this);this.eventBus = o.eventBus;this.minLength = _.isNumber(o.minLength)? o.minLength :1;this.input = o.input;this.menu = o.menu;this.enabled = true;this.active = false;this.input.hasFocus()&& this.activate();this.dir = this.input.getLangDir();this._hacks();this.menu.bind().onSync("selectableClicked",this._onSelectableClicked,this).onSync("asyncRequested",this._onAsyncRequested,this).onSync("asyncCanceled",this._onAsyncCanceled,this).onSync("asyncReceived",this._onAsyncReceived,this).onSync("datasetRendered",this._onDatasetRendered,this).onSync("datasetCleared",this._onDatasetCleared,this);onFocused = c(this,"activate","open","_onFocused");onBlurred = c(this,"deactivate","_onBlurred");onEnterKeyed = c(this,"isActive","isOpen","_onEnterKeyed");onTabKeyed = c(this,"isActive","isOpen","_onTabKeyed");onEscKeyed = c(this,"isActive","_onEscKeyed");onUpKeyed = c(this,"isActive","open","_onUpKeyed");onDownKeyed = c(this,"isActive","open","_onDownKeyed");onLeftKeyed = c(this,"isActive","isOpen","_onLeftKeyed");onRightKeyed = c(this,"isActive","isOpen","_onRightKeyed");onQueryChanged = c(this,"_openIfActive","_onQueryChanged");onWhitespaceChanged = c(this,"_openIfActive","_onWhitespaceChanged");this.input.bind().onSync("focused",onFocused,this).onSync("blurred",onBlurred,this).onSync("enterKeyed",onEnterKeyed,this).onSync("tabKeyed",onTabKeyed,this).onSync("escKeyed",onEscKeyed,this).onSync("upKeyed",onUpKeyed,this).onSync("downKeyed",onDownKeyed,this).onSync("leftKeyed",onLeftKeyed,this).onSync("rightKeyed",onRightKeyed,this).onSync("queryChanged",onQueryChanged,this).onSync("whitespaceChanged",onWhitespaceChanged,this).onSync("langDirChanged",this._onLangDirChanged,this);}_.mixin(Typeahead.prototype,{_hacks:function hacks(){var $input,$menu;$input = this.input.$input || $("<div>");$menu = this.menu.$node || $("<div>");$input.on("blur.tt",function($e){var active,isActive,hasActive;active = document.activeElement;isActive = $menu.is(active);hasActive = $menu.has(active).length > 0;if(_.isMsie()&&(isActive || hasActive)){$e.preventDefault();$e.stopImmediatePropagation();_.defer(function(){$input.focus();});}});$menu.on("mousedown.tt",function($e){$e.preventDefault();});},_onSelectableClicked:function onSelectableClicked(type,$el){this.select($el);},_onDatasetCleared:function onDatasetCleared(){this._updateHint();},_onDatasetRendered:function onDatasetRendered(type,dataset,suggestions,async){this._updateHint();this.eventBus.trigger("render",suggestions,async,dataset);},_onAsyncRequested:function onAsyncRequested(type,dataset,query){this.eventBus.trigger("asyncrequest",query,dataset);},_onAsyncCanceled:function onAsyncCanceled(type,dataset,query){this.eventBus.trigger("asynccancel",query,dataset);},_onAsyncReceived:function onAsyncReceived(type,dataset,query){this.eventBus.trigger("asyncreceive",query,dataset);},_onFocused:function onFocused(){this._minLengthMet()&& this.menu.update(this.input.getQuery());},_onBlurred:function onBlurred(){if(this.input.hasQueryChangedSinceLastFocus()){this.eventBus.trigger("change",this.input.getQuery());}},_onEnterKeyed:function onEnterKeyed(type,$e){var $selectable;if($selectable = this.menu.getActiveSelectable()){this.select($selectable)&& $e.preventDefault();}},_onTabKeyed:function onTabKeyed(type,$e){var $selectable;if($selectable = this.menu.getActiveSelectable()){this.select($selectable)&& $e.preventDefault();}else if($selectable = this.menu.getTopSelectable()){this.autocomplete($selectable)&& $e.preventDefault();}},_onEscKeyed:function onEscKeyed(){this.close();},_onUpKeyed:function onUpKeyed(){this.moveCursor(-1);},_onDownKeyed:function onDownKeyed(){this.moveCursor(+1);},_onLeftKeyed:function onLeftKeyed(){if(this.dir === "rtl" && this.input.isCursorAtEnd()){this.autocomplete(this.menu.getTopSelectable());}},_onRightKeyed:function onRightKeyed(){if(this.dir === "ltr" && this.input.isCursorAtEnd()){this.autocomplete(this.menu.getTopSelectable());}},_onQueryChanged:function onQueryChanged(e,query){this._minLengthMet(query)? this.menu.update(query):this.menu.empty();},_onWhitespaceChanged:function onWhitespaceChanged(){this._updateHint();},_onLangDirChanged:function onLangDirChanged(e,dir){if(this.dir !== dir){this.dir = dir;this.menu.setLanguageDirection(dir);}},_openIfActive:function openIfActive(){this.isActive()&& this.open();},_minLengthMet:function minLengthMet(query){query = _.isString(query)? query :this.input.getQuery()|| "";return query.length >= this.minLength;},_updateHint:function updateHint(){var $selectable,data,val,query,escapedQuery,frontMatchRegEx,match;$selectable = this.menu.getTopSelectable();data = this.menu.getSelectableData($selectable);val = this.input.getInputValue();if(data && !_.isBlankString(val)&& !this.input.hasOverflow()){query = Input.normalizeQuery(val);escapedQuery = _.escapeRegExChars(query);frontMatchRegEx = new RegExp("^(?:" + escapedQuery + ")(.+$)","i");match = frontMatchRegEx.exec(data.val);match && this.input.setHint(val + match[1]);}else{this.input.clearHint();}},isEnabled:function isEnabled(){return this.enabled;},enable:function enable(){this.enabled = true;},disable:function disable(){this.enabled = false;},isActive:function isActive(){return this.active;},activate:function activate(){if(this.isActive()){return true;}else if(!this.isEnabled()|| this.eventBus.before("active")){return false;}else{this.active = true;this.eventBus.trigger("active");return true;}},deactivate:function deactivate(){if(!this.isActive()){return true;}else if(this.eventBus.before("idle")){return false;}else{this.active = false;this.close();this.eventBus.trigger("idle");return true;}},isOpen:function isOpen(){return this.menu.isOpen();},open:function open(){if(!this.isOpen()&& !this.eventBus.before("open")){this.menu.open();this._updateHint();this.eventBus.trigger("open");}return this.isOpen();},close:function close(){if(this.isOpen()&& !this.eventBus.before("close")){this.menu.close();this.input.clearHint();this.input.resetInputValue();this.eventBus.trigger("close");}return !this.isOpen();},setVal:function setVal(val){this.input.setQuery(_.toStr(val));},getVal:function getVal(){return this.input.getQuery();},select:function select($selectable){var data = this.menu.getSelectableData($selectable);if(data && !this.eventBus.before("select",data.obj)){this.input.setQuery(data.val,true);this.eventBus.trigger("select",data.obj);this.close();return true;}return false;},autocomplete:function autocomplete($selectable){var query,data,isValid;query = this.input.getQuery();data = this.menu.getSelectableData($selectable);isValid = data && query !== data.val;if(isValid && !this.eventBus.before("autocomplete",data.obj)){this.input.setQuery(data.val);this.eventBus.trigger("autocomplete",data.obj);return true;}return false;},moveCursor:function moveCursor(delta){var query,$candidate,data,payload,cancelMove;query = this.input.getQuery();$candidate = this.menu.selectableRelativeToCursor(delta);data = this.menu.getSelectableData($candidate);payload = data ? data.obj :null;cancelMove = this._minLengthMet()&& this.menu.update(query);if(!cancelMove && !this.eventBus.before("cursorchange",payload)){this.menu.setCursor($candidate);if(data){this.input.setInputValue(data.val);}else{this.input.resetInputValue();this._updateHint();}this.eventBus.trigger("cursorchange",payload);return true;}return false;},destroy:function destroy(){this.input.destroy();this.menu.destroy();}});return Typeahead;function c(ctx){var methods = [].slice.call(arguments,1);return function(){var args = [].slice.call(arguments);_.each(methods,function(method){return ctx[method].apply(ctx,args);});};}}();(function(){"use strict";var old,keys,methods;old = $.fn.typeahead;keys ={www:"tt-www",attrs:"tt-attrs",typeahead:"tt-typeahead"};methods ={initialize:function initialize(o,datasets){var www;datasets = _.isArray(datasets)? datasets :[].slice.call(arguments,1);o = o ||{};www = WWW(o.classNames);return this.each(attach);function attach(){var $input,$wrapper,$hint,$menu,defaultHint,defaultMenu,eventBus,input,menu,typeahead,MenuConstructor;_.each(datasets,function(d){d.highlight = !!o.highlight;});$input = $(this);$wrapper = $(www.html.wrapper);$hint = $elOrNull(o.hint);$menu = $elOrNull(o.menu);defaultHint = o.hint !== false && !$hint;defaultMenu = o.menu !== false && !$menu;defaultHint &&($hint = buildHintFromInput($input,www));defaultMenu &&($menu = $(www.html.menu).css(www.css.menu));$hint && $hint.val("");$input = prepInput($input,www);if(defaultHint || defaultMenu){$wrapper.css(www.css.wrapper);$input.css(defaultHint ? www.css.input :www.css.inputWithNoHint);$input.wrap($wrapper).parent().prepend(defaultHint ? $hint :null).append(defaultMenu ? $menu :null);}MenuConstructor = defaultMenu ? DefaultMenu :Menu;eventBus = new EventBus({el:$input});input = new Input({hint:$hint,input:$input},www);menu = new MenuConstructor({node:$menu,datasets:datasets},www);typeahead = new Typeahead({input:input,menu:menu,eventBus:eventBus,minLength:o.minLength},www);$input.data(keys.www,www);$input.data(keys.typeahead,typeahead);}},isEnabled:function isEnabled(){var enabled;ttEach(this.first(),function(t){enabled = t.isEnabled();});return enabled;},enable:function enable(){ttEach(this,function(t){t.enable();});return this;},disable:function disable(){ttEach(this,function(t){t.disable();});return this;},isActive:function isActive(){var active;ttEach(this.first(),function(t){active = t.isActive();});return active;},activate:function activate(){ttEach(this,function(t){t.activate();});return this;},deactivate:function deactivate(){ttEach(this,function(t){t.deactivate();});return this;},isOpen:function isOpen(){var open;ttEach(this.first(),function(t){open = t.isOpen();});return open;},open:function open(){ttEach(this,function(t){t.open();});return this;},close:function close(){ttEach(this,function(t){t.close();});return this;},select:function select(el){var success = false,$el = $(el);ttEach(this.first(),function(t){success = t.select($el);});return success;},autocomplete:function autocomplete(el){var success = false,$el = $(el);ttEach(this.first(),function(t){success = t.autocomplete($el);});return success;},moveCursor:function moveCursoe(delta){var success = false;ttEach(this.first(),function(t){success = t.moveCursor(delta);});return success;},val:function val(newVal){var query;if(!arguments.length){ttEach(this.first(),function(t){query = t.getVal();});return query;}else{ttEach(this,function(t){t.setVal(newVal);});return this;}},destroy:function destroy(){ttEach(this,function(typeahead,$input){revert($input);typeahead.destroy();});return this;}};$.fn.typeahead = function(method){if(methods[method]){return methods[method].apply(this,[].slice.call(arguments,1));}else{return methods.initialize.apply(this,arguments);}};$.fn.typeahead.noConflict = function noConflict(){$.fn.typeahead = old;return this;};function ttEach($els,fn){$els.each(function(){var $input = $(this),typeahead;(typeahead = $input.data(keys.typeahead))&& fn(typeahead,$input);});}function buildHintFromInput($input,www){return $input.clone().addClass(www.classes.hint).removeData().css(www.css.hint).css(getBackgroundStyles($input)).prop("readonly",true).removeAttr("id name placeholder required").attr({autocomplete:"off",spellcheck:"false",tabindex:-1});}function prepInput($input,www){$input.data(keys.attrs,{dir:$input.attr("dir"),autocomplete:$input.attr("autocomplete"),spellcheck:$input.attr("spellcheck"),style:$input.attr("style")});$input.addClass(www.classes.input).attr({autocomplete:"off",spellcheck:false});try{!$input.attr("dir")&& $input.attr("dir","auto");}catch(e){}return $input;}function getBackgroundStyles($el){return{backgroundAttachment:$el.css("background-attachment"),backgroundClip:$el.css("background-clip"),backgroundColor:$el.css("background-color"),backgroundImage:$el.css("background-image"),backgroundOrigin:$el.css("background-origin"),backgroundPosition:$el.css("background-position"),backgroundRepeat:$el.css("background-repeat"),backgroundSize:$el.css("background-size")};}function revert($input){var www,$wrapper;www = $input.data(keys.www);$wrapper = $input.parent().filter(www.selectors.wrapper);_.each($input.data(keys.attrs),function(val,key){_.isUndefined(val)? $input.removeAttr(key):$input.attr(key,val);});$input.removeData(keys.typeahead).removeData(keys.www).removeData(keys.attr).removeClass(www.classes.input);if($wrapper.length){$input.detach().insertAfter($wrapper);$wrapper.remove();}}function $elOrNull(obj){var isValid,$el;isValid = _.isJQuery(obj)|| _.isElement(obj);$el = isValid ? $(obj).first():[];return $el.length ? $el :null;}})();});


/**
 * Ajax Autocomplete for jQuery, version 1.2.7 (c) 2013 Tomas Kirda
 *
 * Ajax Autocomplete for jQuery is freely distributable under the terms of an
 * MIT-style license. For details, see the web site:
 * http://www.devbridge.com/projects/autocomplete/jquery/
 *
 */

/* jslint browser: true, white: true, plusplus: true */
/* global define, window, document, jQuery */

// Expose plugin as an AMD module if AMD loader is present:
(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    'use strict';

    var
        utils = (function () {
            return {
                escapeRegExChars: function (value) {
                    return value.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
                },
                createNode: function (html) {
                    var div = document.createElement('div');
                    div.innerHTML = html;
                    return div.firstChild;
                }
            };
        }()),

        keys = {
            ESC: 27,
            TAB: 9,
            RETURN: 13,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40
        };

    function Autocomplete(el, options) {
        var noop = function () { },
            that = this,
            defaults = {
                autoSelectFirst: false,
                appendTo: 'body',
                serviceUrl: null,
                lookup: null,
                onSelect: null,
                width: 'auto',
                minChars: 1,
                maxHeight: 300,
                deferRequestBy: 0,
                params: {},
                formatResult: Autocomplete.formatResult,
                delimiter: null,
                zIndex: 9999,
                type: 'GET',
                noCache: false,
                offsetX: 0,
                onSearchStart: noop,
                onSearchComplete: noop,
                containerClass: 'autocomplete-suggestions',
                tabDisabled: false,
                dataType: 'text',
                currentRequest: null,
                lookupFilter: function (suggestion, originalQuery, queryLowerCase) {
                    return suggestion.value.toLowerCase().indexOf(queryLowerCase) !== -1;
                },
                paramName: 'query',
                transformResult: function (response) {
                    return typeof response === 'string' ? $.parseJSON(response) : response;
                }
            };

        // Shared variables:
        that.element = el;
        that.el = $(el);
        that.suggestions = [];
        that.badQueries = [];
        that.selectedIndex = -1;
        that.currentValue = that.element.value;
        that.intervalId = 0;
        that.cachedResponse = [];
        that.onChangeInterval = null;
        that.onChange = null;
        that.isLocal = false;
        that.suggestionsContainer = null;
        that.options = $.extend({}, defaults, options);
        that.classes = {
            selected: 'autocomplete-selected',
            suggestion: 'autocomplete-suggestion'
        };
        that.hint = null;
        that.hintValue = '';
        that.selection = null;

        // Initialize and set options:
        that.initialize();
        that.setOptions(options);
    }

    Autocomplete.utils = utils;

    $.Autocomplete = Autocomplete;

    Autocomplete.formatResult = function (suggestion, currentValue) {
        var pattern = '(' + utils.escapeRegExChars(currentValue) + ')';

        return suggestion.value.replace(new RegExp(pattern, 'gi'), '<strong>$1<\/strong>');
    };

    Autocomplete.prototype = {

        killerFn: null,

        initialize: function () {
            var that = this,
                suggestionSelector = '.' + that.classes.suggestion,
                selected = that.classes.selected,
                options = that.options,
                container;

            // Remove autocomplete attribute to prevent native suggestions:
            that.element.setAttribute('autocomplete', 'off');

            that.killerFn = function (e) {
                if ($(e.target).closest('.' + that.options.containerClass).length === 0) {
                    that.killSuggestions();
                    that.disableKillerFn();
                }
            };

            that.suggestionsContainer = Autocomplete.utils.createNode('<div class="' + options.containerClass + '" style="position: absolute; display: none;"></div>');

            container = $(that.suggestionsContainer);

            container.appendTo(options.appendTo);

            // Only set width if it was provided:
            if (options.width !== 'auto') {
                container.width(options.width);
            }

            // Listen for mouse over event on suggestions list:
            container.on('mouseover.autocomplete', suggestionSelector, function () {
                that.activate($(this).data('index'));
            });

            // Deselect active element when mouse leaves suggestions container:
            container.on('mouseout.autocomplete', function () {
                that.selectedIndex = -1;
                container.children('.' + selected).removeClass(selected);
            });

            // Listen for click event on suggestions list:
            container.on('click.autocomplete', suggestionSelector, function () {
                that.select($(this).data('index'));
            });

            that.fixPosition();

            that.fixPositionCapture = function () {
                if (that.visible) {
                    that.fixPosition();
                }
            };

            $(window).on('resize', that.fixPositionCapture);

            that.el.on('keydown.autocomplete', function (e) { that.onKeyPress(e); });
            that.el.on('keyup.autocomplete', function (e) { that.onKeyUp(e); });
            that.el.on('blur.autocomplete', function () { that.onBlur(); });
            that.el.on('focus.autocomplete', function () { that.fixPosition(); });
            that.el.on('change.autocomplete', function (e) { that.onKeyUp(e); });
        },

        onBlur: function () {
            this.enableKillerFn();
        },

        setOptions: function (suppliedOptions) {
            var that = this,
                options = that.options;

            $.extend(options, suppliedOptions);

            that.isLocal = $.isArray(options.lookup);

            if (that.isLocal) {
                options.lookup = that.verifySuggestionsFormat(options.lookup);
            }

            // Adjust height, width and z-index:
            $(that.suggestionsContainer).css({
                'max-height': options.maxHeight + 'px',
                'width': options.width + 'px',
                'z-index': options.zIndex
            });
        },

        clearCache: function () {
            this.cachedResponse = [];
            this.badQueries = [];
        },

        clear: function () {
            this.clearCache();
            this.currentValue = '';
            this.suggestions = [];
        },

        disable: function () {
            this.disabled = true;
        },

        enable: function () {
            this.disabled = false;
        },

        fixPosition: function () {
            var that = this,
                offset;

            // Don't adjsut position if custom container has been specified:
            if (that.options.appendTo !== 'body') {
                return;
            }

            offset = that.el.offset();

            $(that.suggestionsContainer).css({
                top: (offset.top + that.el.outerHeight()) + 'px',
                left: (offset.left  + that.options.offsetX) + 'px'
            });
        },

        enableKillerFn: function () {
            var that = this;
            $(document).on('click.autocomplete', that.killerFn);
        },

        disableKillerFn: function () {
            var that = this;
            $(document).off('click.autocomplete', that.killerFn);
        },

        killSuggestions: function () {
            var that = this;
            that.stopKillSuggestions();
            that.intervalId = window.setInterval(function () {
                that.hide();
                that.stopKillSuggestions();
            }, 300);
        },

        stopKillSuggestions: function () {
            window.clearInterval(this.intervalId);
        },

        isCursorAtEnd: function () {
            var that = this,
                valLength = that.el.val().length,
                selectionStart = that.element.selectionStart,
                range;

            if (typeof selectionStart === 'number') {
                return selectionStart === valLength;
            }
            if (document.selection) {
                range = document.selection.createRange();
                range.moveStart('character', -valLength);
                return valLength === range.text.length;
            }
            return true;
        },

        onKeyPress: function (e) {
            var that = this;

            // If suggestions are hidden and user presses arrow down, display
			// suggestions:
            if (!that.disabled && !that.visible && e.which === keys.DOWN && that.currentValue) {
                that.suggest();
                return;
            }

            if (that.disabled || !that.visible) {
                return;
            }

            switch (e.which) {
                case keys.ESC:
                    that.el.val(that.currentValue);
                    that.hide();
                    break;
                case keys.RIGHT:
                    if (that.hint && that.options.onHint && that.isCursorAtEnd()) {
                        that.selectHint();
                        break;
                    }
                    return;
                case keys.TAB:
                    if (that.hint && that.options.onHint) {
                        that.selectHint();
                        return;
                    }
                    // Fall through to RETURN
                case keys.RETURN:
                    if (that.selectedIndex === -1) {
                        that.hide();
                        return;
                    }
                    that.select(that.selectedIndex);
                    if (e.which === keys.TAB && that.options.tabDisabled === false) {
                        return;
                    }
                    break;
                case keys.UP:
                    that.moveUp();
                    break;
                case keys.DOWN:
                    that.moveDown();
                    break;
                default:
                    return;
            }

            // Cancel event if function did not return:
            e.stopImmediatePropagation();
            e.preventDefault();
        },

        onKeyUp: function (e) {
            var that = this;

            if (that.disabled) {
                return;
            }

            switch (e.which) {
                case keys.UP:
                case keys.DOWN:
                    return;
            }

            clearInterval(that.onChangeInterval);

            if (that.currentValue !== that.el.val()) {
                that.findBestHint();
                if (that.options.deferRequestBy > 0) {
                    // Defer lookup in case when value changes very quickly:
                    that.onChangeInterval = setInterval(function () {
                        that.onValueChange();
                    }, that.options.deferRequestBy);
                } else {
                    that.onValueChange();
                }
            }
        },

        onValueChange: function () {
            var that = this,
                q;

            if (that.selection) {
                that.selection = null;
                (that.options.onInvalidateSelection || $.noop)();
            }

            clearInterval(that.onChangeInterval);
            that.currentValue = that.el.val();

            q = that.getQuery(that.currentValue);
            that.selectedIndex = -1;

            if (q.length < that.options.minChars) {
                that.hide();
            } else {
                that.getSuggestions(q);
            }
        },

        getQuery: function (value) {
            var delimiter = this.options.delimiter,
                parts;

            if (!delimiter) {
                return $.trim(value);
            }
            parts = value.split(delimiter);
            return $.trim(parts[parts.length - 1]);
        },

        getSuggestionsLocal: function (query) {
            var that = this,
                queryLowerCase = query.toLowerCase(),
                filter = that.options.lookupFilter;

            return {
                suggestions: $.grep(that.options.lookup, function (suggestion) {
                    return filter(suggestion, query, queryLowerCase);
                })
            };
        },

        getSuggestions: function (q) {
            var response,
                that = this,
                options = that.options,
                serviceUrl = options.serviceUrl;

            response = that.isLocal ? that.getSuggestionsLocal(q) : that.cachedResponse[q];

            if (response && $.isArray(response.suggestions)) {
                that.suggestions = response.suggestions;
                that.suggest();
            } else if (!that.isBadQuery(q)) {
                options.params[options.paramName] = q;
                if (options.onSearchStart.call(that.element, options.params) === false) {
                    return;
                }
                if ($.isFunction(options.serviceUrl)) {
                    serviceUrl = options.serviceUrl.call(that.element, q);
                }
                if(this.currentRequest != null) {
                    this.currentRequest.abort();
                }
                this.currentRequest = $.ajax({
                    url: serviceUrl,
                    data: options.ignoreParams ? null : options.params,
                    type: options.type,
                    dataType: options.dataType
                }).done(function (data) {
                    that.processResponse(data, q);
                    options.onSearchComplete.call(that.element, q);
                });
            }
        },

        isBadQuery: function (q) {
            var badQueries = this.badQueries,
                i = badQueries.length;

            while (i--) {
                if (q.indexOf(badQueries[i]) === 0) {
                    return true;
                }
            }

            return false;
        },

        hide: function () {
            var that = this;
            that.visible = false;
            that.selectedIndex = -1;
            $(that.suggestionsContainer).hide();
            that.signalHint(null);
        },

        suggest: function () {
            if (this.suggestions.length === 0) {
                this.hide();
                return;
            }

            var that = this,
                formatResult = that.options.formatResult,
                value = that.getQuery(that.currentValue),
                className = that.classes.suggestion,
                classSelected = that.classes.selected,
                container = $(that.suggestionsContainer),
                html = '',
                width;

            // Build suggestions inner HTML:
            $.each(that.suggestions, function (i, suggestion) {
                html += '<div class="' + className + '" data-index="' + i + '">' + formatResult(suggestion, value) + '</div>';
            });

            // If width is auto, adjust width before displaying suggestions,
            // because if instance was created before input had width, it will
			// be zero.
            // Also it adjusts if input width has changed.
            // -2px to account for suggestions border.
            if (that.options.width === 'auto') {
                width = that.el.outerWidth() - 2;
                container.width(width > 0 ? width : 300);
            }

            container.html(html).show();
            that.visible = true;

            // Select first value by default:
            if (that.options.autoSelectFirst) {
                that.selectedIndex = 0;
                container.children().first().addClass(classSelected);
            }

            that.findBestHint();
        },

        findBestHint: function () {
            var that = this,
                value = that.el.val().toLowerCase(),
                bestMatch = null;

            if (!value) {
                return;
            }

            $.each(that.suggestions, function (i, suggestion) {
                var foundMatch = suggestion.value.toLowerCase().indexOf(value) === 0;
                if (foundMatch) {
                    bestMatch = suggestion;
                }
                return !foundMatch;
            });

            that.signalHint(bestMatch);
        },

        signalHint: function (suggestion) {
            var hintValue = '',
                that = this;
            if (suggestion) {
                hintValue = that.currentValue + suggestion.value.substr(that.currentValue.length);
            }
            if (that.hintValue !== hintValue) {
                that.hintValue = hintValue;
                that.hint = suggestion;
                (this.options.onHint || $.noop)(hintValue);
            }
        },

        verifySuggestionsFormat: function (suggestions) {
            // If suggestions is string array, convert them to supported format:
            if (suggestions.length && typeof suggestions[0] === 'string') {
                return $.map(suggestions, function (value) {
                    return { value: value, data: null };
                });
            }

            return suggestions;
        },

        processResponse: function (response, originalQuery) {
            var that = this,
                options = that.options,
                result = options.transformResult(response, originalQuery);

            result.suggestions = that.verifySuggestionsFormat(result.suggestions);

            // Cache results if cache is not disabled:
            if (!options.noCache) {
                that.cachedResponse[result[options.paramName]] = result;
                if (result.suggestions.length === 0) {
                    that.badQueries.push(result[options.paramName]);
                }
            }

            // Display suggestions only if returned query matches current value:
            if (originalQuery === that.getQuery(that.currentValue)) {
                that.suggestions = result.suggestions;
                that.suggest();
            }
        },

        activate: function (index) {
            var that = this,
                activeItem,
                selected = that.classes.selected,
                container = $(that.suggestionsContainer),
                children = container.children();

            container.children('.' + selected).removeClass(selected);

            that.selectedIndex = index;

            if (that.selectedIndex !== -1 && children.length > that.selectedIndex) {
                activeItem = children.get(that.selectedIndex);
                $(activeItem).addClass(selected);
                return activeItem;
            }

            return null;
        },

        selectHint: function () {
            var that = this,
                i = $.inArray(that.hint, that.suggestions);

            that.select(i);
        },

        select: function (i) {
            var that = this;
            that.hide();
            that.onSelect(i);
        },

        moveUp: function () {
            var that = this;

            if (that.selectedIndex === -1) {
                return;
            }

            if (that.selectedIndex === 0) {
                $(that.suggestionsContainer).children().first().removeClass(that.classes.selected);
                that.selectedIndex = -1;
                that.el.val(that.currentValue);
                that.findBestHint();
                return;
            }

            that.adjustScroll(that.selectedIndex - 1);
        },

        moveDown: function () {
            var that = this;

            if (that.selectedIndex === (that.suggestions.length - 1)) {
                return;
            }

            that.adjustScroll(that.selectedIndex + 1);
        },

        adjustScroll: function (index) {
            var that = this,
                activeItem = that.activate(index),
                offsetTop,
                upperBound,
                lowerBound,
                heightDelta = 25;

            if (!activeItem) {
                return;
            }

            offsetTop = activeItem.offsetTop;
            upperBound = $(that.suggestionsContainer).scrollTop();
            lowerBound = upperBound + that.options.maxHeight - heightDelta;

            if (offsetTop < upperBound) {
                $(that.suggestionsContainer).scrollTop(offsetTop);
            } else if (offsetTop > lowerBound) {
                $(that.suggestionsContainer).scrollTop(offsetTop - that.options.maxHeight + heightDelta);
            }

            that.el.val(that.getValue(that.suggestions[index].value));
            that.signalHint(null);
        },

        onSelect: function (index) {
            var that = this,
                onSelectCallback = that.options.onSelect,
                suggestion = that.suggestions[index];

            that.currentValue = that.getValue(suggestion.value);
            that.el.val(that.currentValue);
            that.signalHint(null);
            that.suggestions = [];
            that.selection = suggestion;

            if ($.isFunction(onSelectCallback)) {
                onSelectCallback.call(that.element, suggestion);
            }
        },

        getValue: function (value) {
            var that = this,
                delimiter = that.options.delimiter,
                currentValue,
                parts;

            if (!delimiter) {
                return value;
            }

            currentValue = that.currentValue;
            parts = currentValue.split(delimiter);

            if (parts.length === 1) {
                return value;
            }

            return currentValue.substr(0, currentValue.length - parts[parts.length - 1].length) + value;
        },

        dispose: function () {
            var that = this;
            that.el.off('.autocomplete').removeData('autocomplete');
            that.disableKillerFn();
            $(window).off('resize', that.fixPositionCapture);
            $(that.suggestionsContainer).remove();
        }
    };

    // Create chainable jQuery plugin:
    $.fn.autocompleter = function (options, args) {
        var dataKey = 'autocomplete';
        // If function invoked without argument return
        // instance of the first matched element:
        if (arguments.length === 0) {
            return this.first().data(dataKey);
        }

        return this.each(function () {
            var inputElement = $(this),
                instance = inputElement.data(dataKey);

            if (typeof options === 'string') {
                if (instance && typeof instance[options] === 'function') {
                    instance[options](args);
                }
            } else {
                // If instance already exists, destroy it:
                if (instance && instance.dispose) {
                    instance.dispose();
                }
                instance = new Autocomplete(this, options);
                inputElement.data(dataKey, instance);
            }
        });
    };
}));



/*
 * ! iCheck v0.9.1 jQuery plugin, http://git.io/uhUPMA
 */
(function(f){function C(a,c,d){var b=a[0],e=/er/.test(d)?k:/bl/.test(d)?u:j;active=d==E?{checked:b[j],disabled:b[u],indeterminate:"true"==a.attr(k)||"false"==a.attr(v)}:b[e];if(/^(ch|di|in)/.test(d)&&!active)p(a,e);else if(/^(un|en|de)/.test(d)&&active)w(a,e);else if(d==E)for(var e in active)active[e]?p(a,e,!0):w(a,e,!0);else if(!c||"toggle"==d){if(!c)a[r]("ifClicked");active?b[l]!==x&&w(a,e):p(a,e)}}function p(a,c,d){var b=a[0],e=a.parent(),g=c==j,H=c==k,m=H?v:g?I:"enabled",r=h(b,m+y(b[l])),L=h(b,
c+y(b[l]));if(!0!==b[c]){if(!d&&c==j&&b[l]==x&&b.name){var p=a.closest("form"),s='input[name="'+b.name+'"]',s=p.length?p.find(s):f(s);s.each(function(){this!==b&&f.data(this,n)&&w(f(this),c)})}H?(b[c]=!0,b[j]&&w(a,j,"force")):(d||(b[c]=!0),g&&b[k]&&w(a,k,!1));J(a,g,c,d)}b[u]&&h(b,z,!0)&&e.find("."+F).css(z,"default");e[t](L||h(b,c));e[A](r||h(b,m)||"")}function w(a,c,d){var b=a[0],e=a.parent(),g=c==j,f=c==k,m=f?v:g?I:"enabled",n=h(b,m+y(b[l])),p=h(b,c+y(b[l]));if(!1!==b[c]){if(f||!d||"force"==d)b[c]=
!1;J(a,g,m,d)}!b[u]&&h(b,z,!0)&&e.find("."+F).css(z,"pointer");e[A](p||h(b,c)||"");e[t](n||h(b,m))}function K(a,c){if(f.data(a,n)){var d=f(a);d.parent().html(d.attr("style",f.data(a,n).s||"")[r](c||""));d.off(".i").unwrap();f(D+'[for="'+a.id+'"]').add(d.closest(D)).off(".i")}}function h(a,c,d){if(f.data(a,n))return f.data(a,n).o[c+(d?"":"Class")]}function y(a){return a.charAt(0).toUpperCase()+a.slice(1)}function J(a,c,d,b){if(!b){if(c)a[r]("ifToggled");a[r]("ifChanged")[r]("if"+y(d))}}var n="iCheck",
F=n+"-helper",x="radio",j="checked",I="un"+j,u="disabled",v="determinate",k="in"+v,E="update",l="type",t="addClass",A="removeClass",r="trigger",D="label",z="cursor",G=/ipad|iphone|ipod|android|blackberry|windows phone|opera mini/i.test(navigator.userAgent);f.fn[n]=function(a,c){var d=":checkbox, :"+x,b=f(),e=function(a){a.each(function(){var a=f(this);b=a.is(d)?b.add(a):b.add(a.find(d))})};if(/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(a))return a=a.toLowerCase(),
e(this),b.each(function(){"destroy"==a?K(this,"ifDestroyed"):C(f(this),!0,a);f.isFunction(c)&&c()});if("object"==typeof a||!a){var g=f.extend({checkedClass:j,disabledClass:u,indeterminateClass:k,labelHover:!0},a),h=g.handle,m=g.hoverClass||"hover",y=g.focusClass||"focus",v=g.activeClass||"active",z=!!g.labelHover,s=g.labelHoverClass||"hover",B=(""+g.increaseArea).replace("%","")|0;if("checkbox"==h||h==x)d=":"+h;-50>B&&(B=-50);e(this);return b.each(function(){K(this);var a=f(this),b=this,c=b.id,d=
-B+"%",e=100+2*B+"%",e={position:"absolute",top:d,left:d,display:"block",width:e,height:e,margin:0,padding:0,background:"#fff",border:0,opacity:0},d=G?{position:"absolute",visibility:"hidden"}:B?e:{position:"absolute",opacity:0},h="checkbox"==b[l]?g.checkboxClass||"icheckbox":g.radioClass||"i"+x,k=f(D+'[for="'+c+'"]').add(a.closest(D)),q=a.wrap('<div class="'+h+'"/>')[r]("ifCreated").parent().append(g.insert),e=f('<ins class="'+F+'"/>').css(e).appendTo(q);a.data(n,{o:g,s:a.attr("style")}).css(d);
g.inheritClass&&q[t](b.className);g.inheritID&&c&&q.attr("id",n+"-"+c);"static"==q.css("position")&&q.css("position","relative");C(a,!0,E);if(k.length)k.on("click.i mouseenter.i mouseleave.i touchbegin.i touchend.i",function(c){var d=c[l],e=f(this);if(!b[u])if("click"==d?C(a,!1,!0):z&&(/ve|nd/.test(d)?(q[A](m),e[A](s)):(q[t](m),e[t](s))),G)c.stopPropagation();else return!1});a.on("click.i focus.i blur.i keyup.i keydown.i keypress.i",function(c){var d=c[l];c=c.keyCode;if("click"==d)return!1;if("keydown"==
d&&32==c)return b[l]==x&&b[j]||(b[j]?w(a,j):p(a,j)),!1;if("keyup"==d&&b[l]==x)!b[j]&&p(a,j);else if(/us|ur/.test(d))q["blur"==d?A:t](y)});e.on("click mousedown mouseup mouseover mouseout touchbegin.i touchend.i",function(d){var c=d[l],e=/wn|up/.test(c)?v:m;if(!b[u]){if("click"==c)C(a,!1,!0);else{if(/wn|er|in/.test(c))q[t](e);else q[A](e+" "+v);if(k.length&&z&&e==m)k[/ut|nd/.test(c)?A:t](s)}if(G)d.stopPropagation();else return!1}})})}return this}})(jQuery);

/*
 * ! jQuery Selectbox plugin 0.2
 *
 * Copyright 2011-2012, Dimitar Ivanov
 * (http://www.bulgaria-web-developers.com/projects/javascript/selectbox/)
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * license.
 *
 * Date: Tue Jul 17 19:58:36 2012 +0300
 */
(function ($, undefined) {
	var PROP_NAME = 'selectbox',
		FALSE = false,
		TRUE = true;
	/**
	 * Selectbox manager. Use the singleton instance of this class, $.selectbox,
	 * to interact with the select box. Settings for (groups of) select boxes
	 * are maintained in an instance object, allowing multiple different
	 * settings on the same page
	 */
	function Selectbox() {
		this._state = [];
		this._defaults = { // Global defaults for all the select box instances
			classHolder: "sbHolder",
			classHolderDisabled: "sbHolderDisabled",
			classSelector: "sbSelector",
			classOptions: "sbOptions",
			classGroup: "sbGroup",
			classSub: "sbSub",
			classDisabled: "sbDisabled",
			classToggleOpen: "sbToggleOpen",
			classToggle: "sbToggle",
			classFocus: "sbFocus",
			speed: 200,
			effect: "slide", // "slide" or "fade"
			onChange: null, // Define a callback function when the selectbox is
							// changed
			onOpen: null, // Define a callback function when the selectbox is
							// open
			onClose: null // Define a callback function when the selectbox is
							// closed
		};
	}

	$.extend(Selectbox.prototype, {
		/**
		 * Is the first field in a jQuery collection open as a selectbox
		 *
		 * @param {Object}
		 *            target
		 * @return {Boolean}
		 */
		_isOpenSelectbox: function (target) {
			if (!target) {
				return FALSE;
			}
			var inst = this._getInst(target);
			return inst.isOpen;
		},
		/**
		 * Is the first field in a jQuery collection disabled as a selectbox
		 *
		 * @param {HTMLElement}
		 *            target
		 * @return {Boolean}
		 */
		_isDisabledSelectbox: function (target) {
			if (!target) {
				return FALSE;
			}
			var inst = this._getInst(target);
			return inst.isDisabled;
		},
		/**
		 * Attach the select box to a jQuery selection.
		 *
		 * @param {HTMLElement}
		 *            target
		 * @param {Object}
		 *            settings
		 */
		_attachSelectbox: function (target, settings) {
			if (this._getInst(target)) {
				return FALSE;
			}
			var $target = $(target),
				self = this,
				inst = self._newInst($target),
				sbHolder, sbSelector, sbToggle, sbOptions,
				s = FALSE, optGroup = $target.find("optgroup"), opts = $target.find("option"), olen = opts.length;

			$target.attr("sb", inst.uid);

			$.extend(inst.settings, self._defaults, settings);
			self._state[inst.uid] = FALSE;
			$target.hide();

			function closeOthers() {
				var key, sel,
					uid = this.attr("id").split("_")[1];
				for (key in self._state) {
					if (key !== uid) {
						if (self._state.hasOwnProperty(key)) {
							sel = $("select[sb='" + key + "']")[0];
							if (sel) {
								self._closeSelectbox(sel);
							}
						}
					}
				}
			}

			sbHolder = $("<div>", {
				"id": "sbHolder_" + inst.uid,
				"class": inst.settings.classHolder,
				"tabindex": $target.attr("tabindex")
			});

			sbSelector = $("<a>", {
				"id": "sbSelector_" + inst.uid,
				"href": "#",
				"class": inst.settings.classSelector,
				"click": function (e) {
					e.preventDefault();
					closeOthers.apply($(this), []);
					var uid = $(this).attr("id").split("_")[1];
					if (self._state[uid]) {
						self._closeSelectbox(target);
					} else {
						self._openSelectbox(target);
					}
				}
			});

			sbToggle = $("<a>", {
				"id": "sbToggle_" + inst.uid,
				"href": "#",
				"class": inst.settings.classToggle,
				"click": function (e) {
					e.preventDefault();
					closeOthers.apply($(this), []);
					var uid = $(this).attr("id").split("_")[1];
					if (self._state[uid]) {
						self._closeSelectbox(target);
					} else {
						self._openSelectbox(target);
					}
				}
			});
			sbToggle.appendTo(sbHolder);

			sbOptions = $("<ul>", {
				"id": "sbOptions_" + inst.uid,
				"class": inst.settings.classOptions,
				"css": {
					"display": "none"
				}
			});

			$target.children().each(function(i) {
				var that = $(this), li, config = {};
				if (that.is("option")) {
					getOptions(that);
				} else if (that.is("optgroup")) {
					li = $("<li>");
					$("<span>", {
						"text": that.attr("label")
					}).addClass(inst.settings.classGroup).appendTo(li);
					li.appendTo(sbOptions);
					if (that.is(":disabled")) {
						config.disabled = true;
					}
					config.sub = true;
					getOptions(that.find("option"), config);
				}
			});

			function getOptions () {
				var sub = arguments[1] && arguments[1].sub ? true : false,
					disabled = arguments[1] && arguments[1].disabled ? true : false;
				arguments[0].each(function (i) {
					var that = $(this),
						li = $("<li>"),
						child;
					if (that.is(":selected")) {
						sbSelector.text(that.text());
						s = TRUE;
					}
					if (i === olen - 1) {
						li.addClass("last");
					}
					if (!that.is(":disabled") && !disabled) {
						child = $("<a>", {
							"href": "#" + that.val(),
							"rel": that.val()
						}).text(that.text()).bind("click.sb", function (e) {
							if (e && e.preventDefault) {
								e.preventDefault();
							}
							var t = sbToggle,
							 	$this = $(this),
								uid = t.attr("id").split("_")[1];
							self._changeSelectbox(target, $this.attr("rel"), $this.text());
							self._closeSelectbox(target);
						}).bind("mouseover.sb", function () {
							var $this = $(this);
							$this.parent().siblings().find("a").removeClass(inst.settings.classFocus);
							$this.addClass(inst.settings.classFocus);
						}).bind("mouseout.sb", function () {
							$(this).removeClass(inst.settings.classFocus);
						});
						if (sub) {
							child.addClass(inst.settings.classSub);
						}
						if (that.is(":selected")) {
							child.addClass(inst.settings.classFocus);
						}
						child.appendTo(li);
					} else {
						child = $("<span>", {
							"text": that.text()
						}).addClass(inst.settings.classDisabled);
						if (sub) {
							child.addClass(inst.settings.classSub);
						}
						child.appendTo(li);
					}
					li.appendTo(sbOptions);
				});
			}

			if (!s) {
				sbSelector.text(opts.first().text());
			}

			$.data(target, PROP_NAME, inst);

			sbHolder.data("uid", inst.uid).bind("keydown.sb", function (e) {
				var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0,
					$this = $(this),
					uid = $this.data("uid"),
					inst = $this.siblings("select[sb='"+uid+"']").data(PROP_NAME),
					trgt = $this.siblings(["select[sb='", uid, "']"].join("")).get(0),
					$f = $this.find("ul").find("a." + inst.settings.classFocus);
				switch (key) {
					case 37: // Arrow Left
					case 38: // Arrow Up
						if ($f.length > 0) {
							var $next;
							$("a", $this).removeClass(inst.settings.classFocus);
							$next = $f.parent().prevAll("li:has(a)").eq(0).find("a");
							if ($next.length > 0) {
								$next.addClass(inst.settings.classFocus).focus();
								$("#sbSelector_" + uid).text($next.text());
							}
						}
						break;
					case 39: // Arrow Right
					case 40: // Arrow Down
						var $next;
						$("a", $this).removeClass(inst.settings.classFocus);
						if ($f.length > 0) {
							$next = $f.parent().nextAll("li:has(a)").eq(0).find("a");
						} else {
							$next = $this.find("ul").find("a").eq(0);
						}
						if ($next.length > 0) {
							$next.addClass(inst.settings.classFocus).focus();
							$("#sbSelector_" + uid).text($next.text());
						}
						break;
					case 13: // Enter
						if ($f.length > 0) {
							self._changeSelectbox(trgt, $f.attr("rel"), $f.text());
						}
						self._closeSelectbox(trgt);
						break;
					case 9: // Tab
						if (trgt) {
							var inst = self._getInst(trgt);
							if (inst/* && inst.isOpen */) {
								if ($f.length > 0) {
									self._changeSelectbox(trgt, $f.attr("rel"), $f.text());
								}
								self._closeSelectbox(trgt);
							}
						}
						var i = parseInt($this.attr("tabindex"), 10);
						if (!e.shiftKey) {
							i++;
						} else {
							i--;
						}
						$("*[tabindex='" + i + "']").focus();
						break;
					case 27: // Escape
						self._closeSelectbox(trgt);
						break;
				}
				e.stopPropagation();
				return false;
			}).delegate("a", "mouseover", function (e) {
				$(this).addClass(inst.settings.classFocus);
			}).delegate("a", "mouseout", function (e) {
				$(this).removeClass(inst.settings.classFocus);
			});

			sbSelector.appendTo(sbHolder);
			sbOptions.appendTo(sbHolder);
			sbHolder.insertAfter($target);

			$("html").on('mousedown', function(e) {
				e.stopPropagation();
				$("select").selectbox('close');
			});
			$([".", inst.settings.classHolder, ", .", inst.settings.classSelector].join("")).mousedown(function(e) {
				e.stopPropagation();
			});
		},
		/**
		 * Remove the selectbox functionality completely. This will return the
		 * element back to its pre-init state.
		 *
		 * @param {HTMLElement}
		 *            target
		 */
		_detachSelectbox: function (target) {
			var inst = this._getInst(target);
			if (!inst) {
				return FALSE;
			}
			$("#sbHolder_" + inst.uid).remove();
			$.data(target, PROP_NAME, null);
			$(target).show();
		},
		/**
		 * Change selected attribute of the selectbox.
		 *
		 * @param {HTMLElement}
		 *            target
		 * @param {String}
		 *            value
		 * @param {String}
		 *            text
		 */
		_changeSelectbox: function (target, value, text) {
			var onChange,
				inst = this._getInst(target);
			if (inst) {
				onChange = this._get(inst, 'onChange');
				$("#sbSelector_" + inst.uid).text(text);
			}
			value = value.replace(/\'/g, "\\'");
            $(target).find("option").attr("selected", FALSE);
// $(target).find("option[value='" + value + "']").attr("selected", TRUE);
            // FIX FOR SAFARI
            $(target).val(value);
			if (inst && onChange) {
				onChange.apply((inst.input ? inst.input[0] : null), [value, inst]);
			} else if (inst && inst.input) {
				inst.input.trigger('change');
			}
		},
		/**
		 * Enable the selectbox.
		 *
		 * @param {HTMLElement}
		 *            target
		 */
		_enableSelectbox: function (target) {
			var inst = this._getInst(target);
			if (!inst || !inst.isDisabled) {
				return FALSE;
			}
			$("#sbHolder_" + inst.uid).removeClass(inst.settings.classHolderDisabled);
			inst.isDisabled = FALSE;
			$.data(target, PROP_NAME, inst);
		},
		/**
		 * Disable the selectbox.
		 *
		 * @param {HTMLElement}
		 *            target
		 */
		_disableSelectbox: function (target) {
			var inst = this._getInst(target);
			if (!inst || inst.isDisabled) {
				return FALSE;
			}
			$("#sbHolder_" + inst.uid).addClass(inst.settings.classHolderDisabled);
			inst.isDisabled = TRUE;
			$.data(target, PROP_NAME, inst);
		},
		/**
		 * Get or set any selectbox option. If no value is specified, will act
		 * as a getter.
		 *
		 * @param {HTMLElement}
		 *            target
		 * @param {String}
		 *            name
		 * @param {Object}
		 *            value
		 */
		_optionSelectbox: function (target, name, value) {
			var inst = this._getInst(target);
			if (!inst) {
				return FALSE;
			}
			// TODO check name
			inst[name] = value;
			$.data(target, PROP_NAME, inst);
		},
		/**
		 * Call up attached selectbox
		 *
		 * @param {HTMLElement}
		 *            target
		 */
		_openSelectbox: function (target) {
			var inst = this._getInst(target);
			// if (!inst || this._state[inst.uid] || inst.isDisabled) {
			if (!inst || inst.isOpen || inst.isDisabled) {
				return;
			}
			var	el = $("#sbOptions_" + inst.uid),
				viewportHeight = parseInt($(window).height(), 10),
				offset = $("#sbHolder_" + inst.uid).offset(),
				scrollTop = $(window).scrollTop(),
				height = el.prev().height(),
				diff = viewportHeight - (offset.top - scrollTop) - height / 2,
				onOpen = this._get(inst, 'onOpen');
			el.css({
				"top": height + "px",
				"maxHeight": (diff - height) + "px"
			});
			inst.settings.effect === "fade" ? el.fadeIn(inst.settings.speed) : el.slideDown(inst.settings.speed);
			$("#sbToggle_" + inst.uid).addClass(inst.settings.classToggleOpen);
			this._state[inst.uid] = TRUE;
			inst.isOpen = TRUE;
			if (onOpen) {
				onOpen.apply((inst.input ? inst.input[0] : null), [inst]);
			}
			$.data(target, PROP_NAME, inst);
		},
		/**
		 * Close opened selectbox
		 *
		 * @param {HTMLElement}
		 *            target
		 */
		_closeSelectbox: function (target) {
			var inst = this._getInst(target);
			// if (!inst || !this._state[inst.uid]) {
			if (!inst || !inst.isOpen) {
				return;
			}
			var onClose = this._get(inst, 'onClose');
			inst.settings.effect === "fade" ? $("#sbOptions_" + inst.uid).fadeOut(inst.settings.speed) : $("#sbOptions_" + inst.uid).slideUp(inst.settings.speed);
			$("#sbToggle_" + inst.uid).removeClass(inst.settings.classToggleOpen);
			this._state[inst.uid] = FALSE;
			inst.isOpen = FALSE;
			if (onClose) {
				onClose.apply((inst.input ? inst.input[0] : null), [inst]);
			}
			$.data(target, PROP_NAME, inst);
		},
		/**
		 * Create a new instance object
		 *
		 * @param {HTMLElement}
		 *            target
		 * @return {Object}
		 */
		_newInst: function(target) {
			var id = target[0].id.replace(/([^A-Za-z0-9_-])/g, '\\\\$1');
			return {
				id: id,
				input: target,
				uid: Math.floor(Math.random() * 99999999),
				isOpen: FALSE,
				isDisabled: FALSE,
				settings: {}
			};
		},
		/**
		 * Retrieve the instance data for the target control.
		 *
		 * @param {HTMLElement}
		 *            target
		 * @return {Object} - the associated instance data
		 * @throws error
		 *             if a jQuery problem getting data
		 */
		_getInst: function(target) {
			try {
				return $.data(target, PROP_NAME);
			}
			catch (err) {
				throw 'Missing instance data for this selectbox';
			}
		},
		/**
		 * Get a setting value, defaulting if necessary
		 *
		 * @param {Object}
		 *            inst
		 * @param {String}
		 *            name
		 * @return {Mixed}
		 */
		_get: function(inst, name) {
			return inst.settings[name] !== undefined ? inst.settings[name] : this._defaults[name];
		}
	});

	/**
	 * Invoke the selectbox functionality.
	 *
	 * @param {Object|String}
	 *            options
	 * @return {Object}
	 */
	$.fn.selectbox = function (options) {

		var otherArgs = Array.prototype.slice.call(arguments, 1);
		if (typeof options == 'string' && options == 'isDisabled') {
			return $.selectbox['_' + options + 'Selectbox'].apply($.selectbox, [this[0]].concat(otherArgs));
		}

		if (options == 'option' && arguments.length == 2 && typeof arguments[1] == 'string') {
			return $.selectbox['_' + options + 'Selectbox'].apply($.selectbox, [this[0]].concat(otherArgs));
		}

		return this.each(function() {
			typeof options == 'string' ?
				$.selectbox['_' + options + 'Selectbox'].apply($.selectbox, [this].concat(otherArgs)) :
				$.selectbox._attachSelectbox(this, options);
		});
	};

	$.selectbox = new Selectbox(); // singleton instance
	$.selectbox.version = "0.2";
})(jQuery);

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


// Place any jQuery/helper plugins above.

// -------------------------------------
// Front-end Code | START


// -------------------------------------
// -------------------------------------

var RC = RC || {};
RC.utils = RC.utils || {};

RC.Config = {
    isiPad: navigator.userAgent.match(/ipad/i) != null,
    breakpoint: 768,
    winWidth : $(window).width(),
    winHeight : $(window).height()
};

if (RC.Config.isiPad) {
    $("html").addClass("ipad");
}

var SpotlightPopupWidth = (RC.Config.isiPad ? "750" : "905");

// ---------------------------
// Scroll to Div
// ---------------------------
(function(RC) {

    var bannerHeight = $('.rev_global_marketing').height();
    var scrollPosOffset = 0;
    var headerHeight;
    var headerIsFixed;

    $('.js-scroll-to-div').on('click',function (e) {
        e.preventDefault();
        headerHeight = $('.js-fixed-header').height();
        headerIsFixed = $('.js-fixed-header').hasClass('is-fixed')

        var hash = this.hash,
            $target = $(hash);

        if ($target.offset()) {
            if (RC.isiPad || RC.winWidth <= RC.breakpoint ) {
              if(headerIsFixed) {
                scrollPosOffset = -30;
              } else {
                scrollPosOffset = 48;
              }
            } else if (headerIsFixed) {
                scrollPosOffset = 0;
            } else {
                scrollPosOffset = headerHeight;
            }
            window.history.pushState("", "", hash);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top - scrollPosOffset
            }, 900, 'easeInOutQuint');
        }
    });
})(RC.Config);

// ---------------------------
// Dropdown Center Set Width
// Fixes font pixelation
// on Chrome/Safari
// ---------------------------
(function($){

  $(".dropdown.dropdown--center").on("mouseenter", dropdownOnEnter);

  function dropdownOnEnter(e) {
    var $dropdownLink = $(this);

    // Check if width has been previously set
    if($(this).data("setWidth") === true) {
      return;
    }

    var $dropdownMenus = $dropdownLink.find(".dropdown__menu");

    // Set a width for each dropdown menu in dropdown link
    $.each($dropdownMenus, function(index, value) {
      var $dropdownMenu = $(this);
      var width = $dropdownMenu.width();

      if(width % 2 === 1) {
        width += 1;
        $dropdownMenu.width(width);
      }

      $(this).data("setWidth", true);
    });
  }
})(jQuery);




// ---------------------------
//
// ---------------------------

 /*\
 |*|
 |*|  :: cookies.js ::
 |*|
 |*|  A complete cookies reader/writer framework with full unicode support.
 |*|
 |*|  Revision #1 - September 4, 2014
 |*|
 |*|  https://developer.mozilla.org/en-US/docs/Web/API/document.cookie
 |*|  https://developer.mozilla.org/User:fusionchess
 |*|
 |*|  This framework is released under the GNU Public License, version 3 or later.
 |*|  http://www.gnu.org/licenses/gpl-3.0-standalone.html
 |*|
 |*|  Syntaxes:
 |*|
 |*|  * docCookies.setItem(name, value[, end[, path[, domain[, secure]]]])
 |*|  * docCookies.getItem(name)
 |*|  * docCookies.removeItem(name[, path[, domain]])
 |*|  * docCookies.hasItem(name)
 |*|  * docCookies.keys()
 |*|
 \*/

var docCookies = {
    getItem: function (sKey) {

        if (!sKey) { return null; }

        var returnVal = decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
        return returnVal;
    },
    setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
        if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
        var sExpires = "";
        if (vEnd) {
            switch (vEnd.constructor) {
                case Number:
                    sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
                    break;
                case String:
                    sExpires = "; expires=" + vEnd;
                    break;
                case Date:
                    sExpires = "; expires=" + vEnd.toUTCString();
                    break;
            }
        }
        document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
        return true;
    },
    removeItem: function (sKey, sPath, sDomain) {
        if (!this.hasItem(sKey)) { return false; }
        document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
        return true;
    },
    hasItem: function (sKey) {
        if (!sKey) { return false; }
        return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
    },
    keys: function () {
        var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
        for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]); }
        return aKeys;
    }
};

/*! loadCSS: load a CSS file asynchronously. [c]2016 @scottjehl, Filament Group, Inc. Licensed MIT */
(function(w){
    "use strict";
    /* exported loadCSS */
    var loadCSS = function( href, before, media ){
        // Arguments explained:
        // `href` [REQUIRED] is the URL for your CSS file.
        // `before` [OPTIONAL] is the element the script should use as a reference for injecting our stylesheet <link> before
        // By default, loadCSS attempts to inject the link after the last stylesheet or script in the DOM. However, you might desire a more specific location in your document.
        // `media` [OPTIONAL] is the media type or query of the stylesheet. By default it will be 'all'
        var doc = w.document;
        var ss = doc.createElement( "link" );
        var ref;
        if( before ){
            ref = before;
        }
        else {
            var refs = ( doc.body || doc.getElementsByTagName( "head" )[ 0 ] ).childNodes;
            ref = refs[ refs.length - 1];
        }

        var sheets = doc.styleSheets;
        ss.rel = "stylesheet";
        ss.href = href;
        // temporarily set media to something inapplicable to ensure it'll fetch without blocking render
        ss.media = "only x";

        // wait until body is defined before injecting link. This ensures a non-blocking load in IE11.
        function ready( cb ){
            if( doc.body ){
                return cb();
            }
            setTimeout(function(){
                ready( cb );
            });
        }
        // Inject link
        // Note: the ternary preserves the existing behavior of "before" argument, but we could choose to change the argument to "after" in a later release and standardize on ref.nextSibling for all refs
        // Note: `insertBefore` is used instead of `appendChild`, for safety re: http://www.paulirish.com/2011/surefire-dom-element-insertion/
        ready( function(){
            ref.parentNode.insertBefore( ss, ( before ? ref : ref.nextSibling ) );
        });
        // A method (exposed on return object for external use) that mimics onload by polling until document.styleSheets until it includes the new sheet.
        var onloadcssdefined = function( cb ){
            var resolvedHref = ss.href;
            var i = sheets.length;
            while( i-- ){
                if( sheets[ i ].href === resolvedHref ){
                    return cb();
                }
            }
            setTimeout(function() {
                onloadcssdefined( cb );
            });
        };

        function loadCB(){
            if( ss.addEventListener ){
                ss.removeEventListener( "load", loadCB );
            }
            ss.media = media || "all";
        }

        // once loaded, set link's media back to `all` so that the stylesheet applies once it loads
        if( ss.addEventListener ){
            ss.addEventListener( "load", loadCB);
        }
        ss.onloadcssdefined = onloadcssdefined;
        onloadcssdefined( loadCB );
        return ss;
    };
    // commonjs
    if( typeof exports !== "undefined" ){
        exports.loadCSS = loadCSS;
    }
    else {
        w.loadCSS = loadCSS;
    }
}( typeof global !== "undefined" ? global : this ));


$(document).ready(function($) {

    // PDP Measure Guide
    var $sizeTarget = $(".pdp_size_box");

    if($sizeTarget.hasClass("one_size") && $sizeTarget.hasClass("oos") ) {
        // Do Nothing
    } else if($sizeTarget.hasClass("one_size")) {
        $(".measure_guide").css({
            "float": "left",
            "margin-left": "15px"
        }).insertAfter( $(".pdp_size_box .sizecolor") );
        $(".pdp_size_box .pdp_sizes ul").insertAfter( $(".pdp_size_box .title") );
        $(".cantfindsize").appendTo(".pdp_size_box");
    } else {
        $(".measure_guide").css({
            "float": "left",
            "margin-left": "15px"
        }).insertAfter( $(".pdp_size_box .sizecolor") );
    }
});

$(function() {
    var clickCheck = false,
        $ratingStar = $('.hover-star');

    if ($ratingStar.length) {
        $('.hover-star').rating({
            focus: function(value, link) {
                // 'this' is the hidden form element holding the current value
                // 'value' is the value selected
                // 'element' points to the link element that received the click.
                var tip = $('.hover-test');
                tip[0].data = tip[0].data || tip.html();
                tip.html(link.title || 'value: '+value);
                $('.hover-star').mouseout(function() {
                    if(clickCheck == false){
                        tip.html("RATE THIS ITEM");
                    }
                });
                var handler = function() {
                    $('.hover-star').mouseout(function() {
                        tip.html(link.title);
                        clickCheck = true;
                    })
                };
                $('.hover-star').bind('click',handler);
            }
        });
    }

    $('#specialOrder').colorbox({
        inline: true,
        href: '#specialOrderDiv',
        onLoad:function(){$('#specialOrderDiv').show();},
        onCleanup:function(){$('#specialOrderDiv').hide();},
        // onClosed: function(){$('#pdp_specialorder_wrap').show();},
        closeButton: true

    });

    $('.colorbox').colorbox();

    $('.vimeo-colorbox').colorbox({iframe:true, width:"80%", height:"60%"});
    $('.home-colorbox').colorbox({iframe:true, width:"960px", height:"540px"});


    // Using a jQuery object:
    // var $perContent = $("#personalities_content");
    // $(".info_btn").colorbox({inline:true, width:"960px", href:$perContent});
    $(".selectbox").selectbox();

    // About Us - Colorbox

});


    // RC.utils.getProducts
    // Function to get products and parameter callback function
    // Parameters
    // products = string of list of products
    // onSuccess = callback function on success
    // onFail = callback function on fail

    RC.utils = RC.utils || {};
    RC.utils.getProducts = function(products, onSuccess, onFail, onComplete) {
      var callback = callback;
      var baseJsonURL = "/r/ajax/GetProductData.jsp";
      var URLdelimeter = "product[]=";

      getJsonProducts(generateJsonURL(products));
      function getJsonProducts(url) {
        $.ajax({
          dataType: "json",
          url: url,
          success: cleanJsonData,
          complete: responseComplete,
          cache: false
        }).fail(function() {
          if(onFail) {
            onFail();
            console.log( "There was an error retrieving products." );
          }
        });
      }

      function generateJsonURL(productsArray) {
        return baseJsonURL + "?" + URLdelimeter + $.map( productsArray, function( val, i ) {
          return val;
        }).join("&" + URLdelimeter) + "&noInventory=true&excludeOOS=true&department=" + getURLParameter('d');
      }

      function cleanJsonData(results) {
        var tempArray = [];
        var i = 0;
        for (var item in results) {
          if (results.hasOwnProperty(item)) {
            var tempObj = results[products[i]];
			if (tempObj) {
			  tempObj.imgCart = tempObj.imgCart.replace("/ct/", "/c/");
			  tempArray.push(tempObj);
			}
          }
          i += 1;
        }
        if(onSuccess) {
          onSuccess(tempArray);
        }
        return products;
      }

      function responseComplete() {
        if(onComplete) {
            onComplete();
        }
      }

	  function getURLParameter(name) {
		return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
	  }
    };

    RC.utils.getParameterByName = function (name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

///////////////// Text Area Counter/////////


$.fn.textareaCounter = function( options ) {
    return this.each(function(){
        //sets the limit
        var $this = $(this);
        var limit = $this.attr('maxlength');
        var $maxlimit =  $($this.attr("data-count-total"));
        $maxlimit.text(limit);
        //keeps track current length
        $(this).on('keyup', function() {
          var $count =  $($this.attr("data-count"));
          var currentCount = $this.val().length;
          $count.text(currentCount);
       });
    });
};

$('.js-textarea-counter').textareaCounter();




//////////// Input Suggestion ///////////////


$(function() {
  /*
  var substringMatcher = function(strs) {
    return function findMatches(q, cb) {
      var matches, substringRegex;

      // an array that will be populated with substring matches
      matches = [];

      // regex used to determine if a string contains the substring `q`
      substrRegex = new RegExp(q, 'i');

      // iterate through the pool of strings and for any string that
      // contains the substring `q`, add it to the `matches` array
      $.each(strs, function(i, str) {
        if (substrRegex.test(str)) {
          matches.push(str);
        }
      });

      cb(matches);
    };
  };

  var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
    'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
    'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
    'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
    'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
    'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
    'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  $('#shipping_city_isr.typeahead').typeahead({
    hint: true,
    highlight: false,
    minLength: 1
  },
  {
    name: 'states',
    source: substringMatcher(states)
  });
*/
});


/////////// Input suggestion End ///////////////



////////////////// Used to show and hide items when you click //////////////////////

$(function(){
  $(".js-toggle-view").on("click", function(e){
    var $this = $(this);
    var $showElements = $($this.attr("data-toggle-select-show"));
    var $hideElements = $($this.attr("data-toggle-select-hide"));
    var $animationType = $this.attr("data-toggle-select-animation");

//    $showElements.insertBefore($hideElements);
    if( $animationType === "pop" ) {
      $showElements.show();
      $hideElements.hide();
    } else {
      $showElements.slideDown(1000);
      $hideElements.slideUp(1000);
    }
  });
});

///////////// input selected show/hide /////////////

$(function(){
  $(".js-toggle-select").change(function(){
    var $this = $(this).find(':selected');
    var $showElements = $($this.attr("data-toggle-select-show"));
    var $hideElements = $($this.attr("data-toggle-select-hide"));
    var $animationType = $this.attr("data-toggle-select-animation");

//    $showElements.insertBefore($hideElements);
    if( $animationType === "pop" ) {
      $showElements.show();
      $hideElements.hide();
    } else {
      $showElements.slideDown(1000);
      $hideElements.slideUp(1000);
    }
  });
});



if($("#main-content").length !== 1){
    $(".skip-link").remove();
}

$(".image-hover__btn--focusable").on("click", function(){
    $(this).blur();
});

$(".link.link--noline").on("click", function(){
    $(this).blur();
});

// -------------------------------------
// -------------------------------------
// Front-end Code | END
// -------------------------------------


$(window).load(function(){
    $("#search_term").autocompleter({
        serviceUrl: "/r/ajax/SearchSuggestions.jsp",
        deferRequestBy : 100,
        minChars : 2,
        maxHeight: 145,
        width: 240,
        offsetX: -98,
        onSelect: function(value){
            window.location.href = 'Search.jsp?search='+encodeURIComponent(value.value)+'&d='+encodeURIComponent(searchDepartmentScript);
        }
    });
});

function resetNewsletter(defMsg, blur, id){
    var value = $('#'+id).val();
    if (blur){
        if (value.length == 0)
            $('#'+id).val(defMsg);
    } else {
        if (value === defMsg)
            $('#'+id).val('');
        else if ($('#'+id).hasClass('error') || $('#'+id).hasClass('success')){
            if ($('#'+id).hasClass('error'))
                $('#'+id).val('');
            $('#'+id).removeClass('error success');
        }
    }
}

function signUpForNewsletter(errorMsg,id, domainFlag, pageType, gender){
    var data = 'email=' + $('#'+id).val()+"&domainFlag="+domainFlag;
	if(typeof(pageType) != 'undefined' && pageType != null) {
		data += "&pageType=" + pageType;
	}
	if(typeof(gender) != 'undefined' && gender != null) {
		data += "&gender=" + gender;
	}
    $.ajax({
        type: 'POST',
        url: '/r/ajax/SignUpForNewsletter.jsp',
        data: data,
        success: function(data){
            var obj = parseRtn(data);
            if (obj.success)
                $('#'+id).toggleClass('success');
            else
                $('#'+id).toggleClass('error');
            $('#'+id).val(obj.msg0);
        },
        failure: function(){
            $('#'+id).toggleClass('error');
            $('#'+id).val(errorMsg);
        }
    });
}

function signUpSlideEmail(errorMsg, id, gender, pageType){
    var data = $.param({
        email: $('#'+id).val(),
        gender: gender,
        pageType: pageType
    });
    var email = $('#'+id).val();

    $.ajax({
        type: 'POST',
        url: '/r/ajax/SignUpForNewsletter.jsp',
        data: data,
        success: function(data){
            var obj = parseRtn(data);
            if (obj.success){
                $('#'+id).toggleClass('success');
                $('.popslide').hide();
                //window.open("/r/email/subscribe_landing.jsp?email="+email+"&homePage=true");
            }
            else{
                $('#'+id).toggleClass('error');
            }
            $('#'+id).val(obj.msg0);
        },
        failure: function(){
            $('#'+id).toggleClass('error');
            $('#'+id).val(errorMsg);
        }
    });
}

function signInWithRecaptcha(email, pw, captcharesp, remember, successCallback, isCheckoutAction, saveForLater, isSecurityCheck, checkedPage, sectionURL){
    var isCheckoutSignin = $('#checkout_signin_email').is(':visible');
    var emailVisible = isCheckoutSignin ? $('#checkout_signin_email') : $('#signin_email');
    var pwVisible = isCheckoutSignin ? $('#checkout_signin_pw') : $('#signin_pw');
    var errorMessageOutput = $('#login_error_message');
	var rememberVisible =  $('#rememberMeCustomer');

	var favCode = $('#merge-heart-products').data('favcode');
    var favBrand = $('#merge-heart-products').data('favbrand');

    var email = email ? email : emailVisible.val();
    var pw = pw ? pw : pwVisible.val();
    var isBuyNow = location.href.indexOf('bn=true') != -1;
	if(typeof remember === 'undefined')
		remember = rememberVisible.prop('checked');

    var data = $.param({
        email: email,
        pw: pw,
        d: $('#merge-heart-products').data('favDept'),
		favcode: favCode,
        favbrand: favBrand,
		g_recaptcha_response : captcharesp,
		karmir_luys : true,
        rememberMe: remember,
        isCheckout: isCheckoutAction,
        saveForLater: saveForLater,
        isSecurityCheck: isSecurityCheck,
        checkedPage: checkedPage,
        isBuyNow : isBuyNow,
		sectionURL : sectionURL
    });
    $.ajax({
        type: 'POST',
        url: '/r/ajax/SignIn.jsp',
        data: data,
        success: function(data){
            var obj = parseRtn(data);
            pwVisible.removeClass('errortextbox');
            emailVisible.removeClass('errortextbox');
            if (obj.success){

                if(obj.msg0){
                    <!-- Convertro tracking function for login user-->
                    if (typeof convertroLogin === 'function'){
                        convertroLogin(obj.msg0);
                    }
                }

                if (typeof successCallback != 'function')
                    location.reload();
            } else {
                if (obj.msg0 && obj.msg0.length > 0){
                    emailVisible.addClass('errortextbox').val(obj.msg0).one('focus', function(){ $(this).removeClass('errortextbox').val(''); });
                    pwVisible.val('');
                }
                if (obj.msg1 && obj.msg1.length > 0){
                    var turnOffErrorBox = function(){$(this).removeClass('errortextbox');};
                    emailVisible.addClass('errortextbox').one('focus', turnOffErrorBox);
                    pwVisible.addClass('errortextbox').one('focus', turnOffErrorBox);
                    errorMessageOutput.html(obj.msg1).slideDown();
                    setTimeout(function(){ errorMessageOutput.slideUp(); }, 6000);
                    $.colorbox.resize();
                }
				// unverified captcha , error code 3
				if(obj.msg2 && obj.msg2.length > 0){
					errorMessageOutput.html(obj.msg2).slideDown();
					setTimeout(function(){ errorMessageOutput.slideUp(); }, 6000);
					$.colorbox.resize();
				}
            }
            if (typeof successCallback === 'function')
                successCallback(obj);
        }
    });
}
function signIn(email, pw, remember, successCallback, isCheckoutAction, saveForLater, isSecurityCheck, checkedPage, sectionURL){
	var isCheckoutSignin = $('#checkout_signin_email').is(':visible');
	var emailVisible = isCheckoutSignin ? $('#checkout_signin_email') : $('#signin_email');
	var pwVisible = isCheckoutSignin ? $('#checkout_signin_pw') : $('#signin_pw');
	var errorMessageOutput = $('#login_error_message');
	var rememberVisible = $('#rememberMeCustomer');

	var email = email ? email : emailVisible.val();
	var pw = pw ? pw : pwVisible.val();
	if(typeof remember === 'undefined')
		remember = rememberVisible.prop('checked');
	var data = $.param({
		email: email,
		pw: pw,
		rememberMe: remember,
		isCheckout: isCheckoutAction,
		saveForLater: saveForLater,
		isSecurityCheck: isSecurityCheck,
		checkedPage: checkedPage,
		sectionURL : sectionURL
	});
	$.ajax({
		type: 'POST',
		url: '/r/ajax/SignIn.jsp',
		data: data,
		success: function(data){
			var obj = parseRtn(data);
			pwVisible.removeClass('errortextbox');
			emailVisible.removeClass('errortextbox');
			if (obj.success){

				if(obj.msg0){
					<!-- Convertro tracking function for login user-->
					if (typeof convertroLogin === 'function'){
						convertroLogin(obj.msg0);
					}
				}

				if (typeof successCallback != 'function')
					location.reload();
			} else {
				if (obj.msg0 && obj.msg0.length > 0){
					emailVisible.addClass('errortextbox').val(obj.msg0).one('focus', function(){ $(this).removeClass('errortextbox').val(''); });
					pwVisible.val('');
				}
				if (obj.msg1 && obj.msg1.length > 0){
					var turnOffErrorBox = function(){$(this).removeClass('errortextbox');};
					emailVisible.addClass('errortextbox').one('focus', turnOffErrorBox);
					pwVisible.addClass('errortextbox').one('focus', turnOffErrorBox);
					errorMessageOutput.html(obj.msg1).slideDown();
					setTimeout(function(){ errorMessageOutput.slideUp(); }, 6000);
					$.colorbox.resize();
				}
			}
			if (typeof successCallback === 'function')
				successCallback(obj);
		}
	});
}

function signOut(){
	try {
        if(typeof(cordial) != 'undefined' && cordial != null) {
            cordial.forget();
        }
	} catch(e) {
		console.log(e);
	}
    $.ajax({
        type: 'POST',
        url: '/r/ajax/SignOut.jsp',
        success: function(data){
            var obj = parseRtn(data);
            if (obj.success){
                location.reload();
            } else {
                alert ("Error logging out");
            }
        }
    });
}

function createAccountWithRecaptcha(email, pw, captcharesp, verify, saveCurrent, callback, subscribe, isFemale, saveForLater, invoice){
    if (typeof email === 'undefined')
        email = $('#create_acct_email').val();
    if (typeof pw === 'undefined')
        pw = $('#create_acct_pw').val();
    if (typeof verify === 'undefined')
        verify = $('#create_acct_pw_verify').val();
    if (typeof subscribe === 'undefined')
        subscribe = false;
    if (typeof isFemale === 'undefined')
        isFemale = true;

	var favcode = $('#merge-heart-products').data('favcode');
    var favBrand = $('#merge-heart-products').data('favbrand');
    var data = $.param({
        email: email,
        pw: pw,
        d: $('#merge-heart-products').data('favDept'),
		favcode: favcode,
        favbrand: favBrand,
		g_recaptcha_response : captcharesp,
		karmir_luys : true,
        verifypw: verify,
        saveCurrent: saveCurrent,
        subscribe: subscribe,
        isFemale: isFemale,
        saveForLater: saveForLater,
        invoice: invoice
    });
    $.ajax({
        type: 'POST',
        url: '/r/ajax/CreateAccount.jsp',
        data: data,
        success: function(data){
            var obj = parseRtn(data);

            if (typeof callback === 'function')
                callback(obj);
            else {
                $('#create_acct_pw, #create_acct_pw_verify').val('');
                if (obj.success){
                    $.colorbox({
                        href:'/r/dialog/Welcome.jsp',
                        onLoad: closeSignInCreate
                    });
                    if(obj.msg0){
                        if (typeof convertroNewAccount === 'function')
                            convertroNewAccount(obj.msg0);
                    }
                } else{
                    var outputLocation = $('#create_account_error_message');
                    switch(obj.code){
                        case 1:
                            outputLocation = $('#create_acct_email');
                            outputLocation.addClass('errortextbox');
                            break;
                        case 3:
                            $('#create_acct_pw, #create_acct_pw_verify').addClass('errortextbox');
                            break;
                        case 2:
                        case 4:
                            $('#create_acct_pw').addClass('errortextbox');
                            break;
						case 13:
							outputLocation = $('#create_account_captcha_error_msg');
							break;
                    }
                    outputLocation.html(obj.msg0);
                }
            }
        }
    });
}

function createAccount(email, pw, verify, saveCurrent, callback, subscribe, isFemale, saveForLater, invoice){
	if (typeof email === 'undefined')
		email = $('#create_acct_email').val();
	if (typeof pw === 'undefined')
		pw = $('#create_acct_pw').val();
	if (typeof verify === 'undefined')
		verify = $('#create_acct_pw_verify').val();
	if (typeof subscribe === 'undefined')
		subscribe = false;
	if (typeof isFemale === 'undefined')
		isFemale = true;

	var data = $.param({
		email: email,
		pw: pw,
		verifypw: verify,
		saveCurrent: saveCurrent,
		subscribe: subscribe,
		isFemale: isFemale,
		saveForLater: saveForLater,
		invoice: invoice
	});
	$.ajax({
		type: 'POST',
		url: '/r/ajax/CreateAccount.jsp',
		data: data,
		success: function(data){
			var obj = parseRtn(data);

			if (typeof callback === 'function')
				callback(obj);
			else {
				$('#create_acct_pw, #create_acct_pw_verify').val('');
				if (obj.success){
					$.colorbox({
						href:'/r/dialog/Welcome.jsp',
						onLoad: closeSignInCreate
					});
					if(obj.msg0){
						if (typeof convertroNewAccount === 'function')
							convertroNewAccount(obj.msg0);
					}
				} else{
					var outputLocation = $('#create_account_error_message');
					switch(obj.code){
						case 1:
							outputLocation = $('#create_acct_email');
							outputLocation.addClass('errortextbox');
							break;
						case 3:
							$('#create_acct_pw, #create_acct_pw_verify').addClass('errortextbox');
							break;
						case 2:
						case 4:
							$('#create_acct_pw').addClass('errortextbox');
							break;
					}
					outputLocation.html(obj.msg0);
				}
			}
		}
	});
}

function sendPassword(param, callback){
	if ($('#login_lostpw_email').val().length == 0) {
		$('#login_lostpw_email').addClass('errortextbox');
		return;
	}
    var data = 'email=' + $('#login_lostpw_email').val();
    $.ajax({
        type: 'POST',
        url: '/r/ajax/EmailPassword.jsp',
        data: data,
        success: function(data){
            var obj = parseRtn(data);

            if (typeof callback !== 'undefined'){
                callback(obj);
            } else {
                if (obj.success){
                    if (param==null){
                        $.colorbox({
                            href: '/r/dialog/PasswordSent.jsp'
                        });
                    }
                    // DOES NOT EXIST
                    // else if (param == 2) {
                    //     $.colorbox({
                    //         href: '/r/dialog/PasswordSentCheckout.jsp'
                    //     });
                    // }
                    else {
                        $.colorbox({
                            href: '/r/dialog/PasswordSent2.jsp'
                        });
                    }
                } else {
                    $('#login_lostpw_email').addClass('errortextbox').val(obj.msg0);
                }
            }
        }
    });
}

function sendPasswordCustomerCare(input, param, callback){
	var email = input.val();
	if (email.length == 0) {
		input.addClass('errortextbox');
		return;
	}
	var data = 'email=' + email;
	$.ajax({
		type: 'POST',
		url: '/r/ajax/EmailPassword.jsp',
		data: data,
		success: function(data){
			var obj = parseRtn(data);

			if (typeof callback !== 'undefined'){
				callback(obj);
			} else {
				if (obj.success){
					if (param==null){
						$.modal({
							url: '/r/dialog/PasswordSent.jsp',
              triggerOpen: true
						});
					}
					// DOES NOT EXIST
					// else if (param == 2) {
					// 	$.colorbox({
					// 		href: '/r/dialog/PasswordSentCheckout.jsp'
					// 	});
					// }
					else {
						$.modal({
							url: '/r/dialog/PasswordSent2.jsp',
              triggerOpen: true
						});
					}
				} else {
					input.addClass('errortextbox').val(obj.msg0);
				}
			}
		}
	});
}


function closeSignInCreate(){
    $('#rev_login_popup').hide();
}

function replaceField(hiddenField, plainField){
    $(plainField).focus(function(){
        $(plainField).hide();
        $(hiddenField).show().focus();
    });
    $(hiddenField).blur(function(){
        if($(hiddenField).val() == ''){
            $(plainField).show();
            $(hiddenField).hide();
        }
    });
}

$(document).ready(function() {
    // Sign In / Create Account
    $('#sign_in_create').colorbox({
        href: '/r/dialog/SignInCreateAccount.jsp',
        closeButton: false
    });

    $('#mini_cart .submit_checkout').click(function(){
        window.location = '/r/SignInCheckout.jsp';
    });

    $('#forgot_pw_link').colorbox({
        href: '/r/dialog/ForgotPassword.jsp',
        onLoad: closeSignInCreate
    });

    // Currency
    $('.js-currency-select .js-currency-item').click(function(){
		var element = $(this);
		var currency = element.data('currency');
		if (!currency)
			currency = element.parent('li').attr('id').substring(0, 3)

		setCurrency(currency);
    });

    // Language
    $('#active_languages a').click(function(){
		var element = $(this);
		var language = element.data('language');
		if (!language)
			language = $(this).parent('li').attr('id').substring(0, 2);
        setLanguage(language);
    });
});

function closeLightBox(){
    $.colorbox.close();
}

function removeError(obj){
    if($(obj).val().length > 0)
        $(obj).removeClass('errortextbox');

}

function showMoreCurrencies(){
    $('#js-currency-small-menu').hide();
    $('#js-currency-big-menu').show();
    $(".js-currency-select").addClass("u-static");
}

function setCurrency(currencySymbol){
    var data = 'currency=' + currencySymbol;
    $.ajax({
        type: 'POST',
        url: '/r/ajax/UpdateCountryPreferences.jsp',
        data: data,
        success: function(data){
            var obj = parseRtn(data);
            if (obj.success){
                location.reload();
            }
        }
    });
 }

function setLanguage(lang){
    var data = 'language=' + lang;
    $.ajax({
        type: 'POST',
        url: '/r/ajax/UpdateCountryPreferences.jsp',
        data: data,
        success: function(data){
            var obj = data;
            if (obj.success){
                location.reload();
                // TODO: need to use subdomain along with mod_rewrite in order
				// to maintain unique URLs for languages
            }
        }
    });
}



function openLiveHelp() {
	$.ajax({
		url: "/r/ajax/LiveChat.jsp"
	});
	LC_API.open_chat_window();
}
// Display Product JS


function el(name) {
	return document.getElementById(name);
}
/* Common methods to write a review */
function ReviewSubmit(prodCode, elem, emailReview) {
	var reviewDiv = $("#review-container-" + prodCode);
	var ratingWrap = reviewDiv.find(".modal-review__rating-wrap");
	var commentField = reviewDiv.find('.reviewer-comment');
	var valid = true;
	resetErrors();

	var emailDiv = reviewDiv.find('.js-review__email');
	var emailField = reviewDiv.find('.reviewer-email');
	var data = {
		code: prodCode,
		overallAddRevValueField: ratingWrap.find(".is-active").attr("data-rating-value"),
		comments: commentField.val(),
		screenName: reviewDiv.find('.reviewer-name').val(),
		cityState: reviewDiv.find('.reviewer-location').val(),
		emailAddRev: emailField.val(),
        sweepstakesOptin: reviewDiv.find('#sweepstakes-checkbox-'+ prodCode).is(':checked')
	};

	if (data.comments == commentField.attr('placeholder')) {
		data.comments = "";
	}

	reviewDiv.find(".js-review-question").each(function() {
		var paramName = $(this).data("name");
		var value = $(this).find("input:radio:checked").val();
		var required = $(this).data("required");
		data[paramName] = value;

		if (required && !value) {
			valid = false;
			$(this).find('.js-review-error').removeClass('u-hide');
		}
	});

	// Validation
	// Note that some validation is done while looping through the questions, above.
	// Check that we have a valid rating.
	if (!data.overallAddRevValueField) {
		valid = false;
		reviewDiv.find('.js-review-error__rating').removeClass('u-hide');
	}

	// Check that a valid email has been entered.
	if (!isEmail(data.emailAddRev)) {
		valid = false;
		emailDiv.addClass('is-error');
	}

	if (!valid) return;

	// Validation has passed.
	$.ajax({
		url: '/r/ajax/ReviewProduct.jsp',
		data: data,
		success: function (data) {
      var $productReviewContaioner = $('#product-review-container');
      if ($productReviewContaioner.length) {
       reviewDiv.hide();
       var remaining = $("div[id*='review-container-']").not(':hidden').length;
       if (remaining == 0) {
         $productReviewContaioner.hide();
         if ($("#reviewConfirmFinal").length) {
  					$("#reviewConfirmFinal").removeClass("modal");
            $('.js-carousel').slickSlider('checkPosition');
  			 }
       }
      } else {
        $.modal({
          url: '/r/dialog/ProductMessages.jsp' + (emailReview ? "?emailreview=yes" : ""),
          triggerOpen: true,
          type: 'small',
		  onComplete : function () {
          	$('#modal .js-modal-close').attr('href', 'javascript:void(0);');
		    $('#modal .js-modal-close').attr('onclick', 'location.reload();');
		  }
        });
      }
		},
		error: function (jqXHR, textStatus) {
			if (textStatus == 'timeout') {
				getErrorMessage('An error has occured connecting to the server. You may need to resubmit your request and try again.');
			}
		}
	});

	function resetErrors() {
		reviewDiv.find('.js-review-error').addClass('u-hide');
		reviewDiv.find('.js-review-error__rating').addClass('u-hide');
		reviewDiv.find(".js-review__email").removeClass("is-error");
	}

	// Check if email
	function isEmail(email) {
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
	}
}

/* Common Revolve review methods to write a review */
function ReviewRevolveSubmit(prodCode, emailReview) {
    var reviewDiv = $("#review-container-" + prodCode);
    var commentField = reviewDiv.find('.reviewer-comment');
    var valid = true;
    var fromReviewIpadApps = $('#fromReviewIpadApp').val();
    resetErrors();

    var emailDiv = reviewDiv.find('.js-review__email');
    var emailField = reviewDiv.find('.reviewer-email');
    var data = {
        code: prodCode,
        overallAddRevValueField: $('input[name=rating-scale-'+prodCode+']:checked').val(),
        comments: commentField.val(),
        screenName: reviewDiv.find('.reviewer-name').val(),
        cityState: reviewDiv.find('.reviewer-location').val(),
        emailAddRev: emailField.val(),
        sweepstakesOptin: reviewDiv.find('#sweepstakes-checkbox-'+ prodCode).is(':checked')
    };

    if (data.comments == commentField.attr('placeholder')) {
        data.comments = "";
    }

    reviewDiv.find(".js-review-question").each(function() {
        var paramName = $(this).data("name");
        var value = $(this).find("input:radio:checked").val();
        var required = $(this).data("required");
        data[paramName] = value;

        if (required && !value) {
            valid = false;
            $(this).find('.js-review-error').removeClass('u-hide');
        }
    });

    // Validation
    // Note that some validation is done while looping through the questions, above.
    // Check that we have a valid rating.

    // Check that a valid email has been entered.
    if (!isEmail(data.emailAddRev)) {
        valid = false;
        emailDiv.addClass('is-error');
    }

    if (!valid) return;

    // Validation has passed.
    $.ajax({
        url: '/r/ajax/ReviewProduct.jsp',
        data: data,
        success: function (data) {
            var $productReviewContaioner = $('#product-review-container');
            if ($productReviewContaioner.length) {
                reviewDiv.hide();
                var remaining = $("div[id*='review-container-']").not(':hidden').length;
                if (remaining == 0) {
                    $productReviewContaioner.hide();
                    if ($("#reviewConfirmFinal").length) {
                        $("#reviewConfirmFinal").removeClass("modal");
                        $('.js-carousel').slickSlider('checkPosition');
                    }
                }
            } else {
                if (fromReviewIpadApps) {
                    showNotification(true);
                } else {
                    $.modal({
                        url: '/r/dialog/ProductMessages.jsp' + (emailReview ? "?emailreview=yes" : ""),
                        triggerOpen: true,
                        type: 'small',
                        onComplete: function () {
                            $('#modal .js-modal-close').attr('href', 'javascript:void(0);');
                            $('#modal .js-modal-close').attr('onclick', 'location.reload();');
                        }
                    });
                }
            }
        },
        error: function (jqXHR, textStatus) {
            if (textStatus == 'timeout') {
                getErrorMessage('An error has occured connecting to the server. You may need to resubmit your request and try again.');
            }
        }
    });

    function resetErrors() {
        reviewDiv.find('.js-review-error').addClass('u-hide');
        reviewDiv.find('.js-review-error__rating').addClass('u-hide');
        reviewDiv.find(".js-review__email").removeClass("is-error");
    }

    // Check if email
    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }
}

function reviewSubmitFinish() { // Retained for legacy pages. DO NOT USE.
	$.colorbox({
		href: '/r/dialog/ProductMessages.jsp',
		onLoad: function() { $("#reviewDiv").hide(); }
	});

}

/* End */
function addProduct(productCode, size, sectionURL, sessionID, count, successCallback, csrfHash, closeWindowAfterAddingToCart, isMens, src, srcType, useReferrer, isPopup, qvclick, hotlistQuickView, focusID){
    addProduct(productCode, size, sectionURL, sessionID, count, successCallback, csrfHash, closeWindowAfterAddingToCart, isMens, src, srcType, useReferrer, isPopup, qvclick, hotlistQuickView, focusID,'');
}
function addProduct(productCode, size, sectionURL, sessionID, count, successCallback, csrfHash, closeWindowAfterAddingToCart, isMens, src, srcType, useReferrer, isPopup, qvclick, hotlistQuickView, focusID, fitItemSizes){
    var favorited = false;
	if(window.location.href.indexOf("MyFavorite.jsp") > -1) {
		favorited = true;
	}
    var dataObject = {
        colorSelect: productCode,
        sizeSelect: size,
        sectionURL: sectionURL,
        sessionID: sessionID,
        count: count,
        csrfHash: csrfHash,
        isMens: isMens,
		d: $('#header-jsp').data('department'),
        src: src,
        srcType: srcType,
        qvclick: qvclick,
        contextReferrer: useReferrer ? document.referrer : window.location.href,
		addedFromFavorite: favorited,
        fitItemSizes : fitItemSizes
    };
	var data = $.param(dataObject);
    $.ajax({
        type: 'POST',
        url: '/r/ajax/AddItemToBag.jsp',
        data: data,
        success: function(rtn){
            if(typeof(isPopup) != 'undefined' && isPopup) {
                insertPageTrackForQuickView(null, true, productCode);
            } else {
                insertPageTrack(true, productCode);
            }
            var obj = parseRtn(rtn);
            if (obj.success) {
                if (obj.msg0)
                    updateGender(obj.msg0);

               // incrementBagCount(count);
                reloadCartRail();

                // No callback defined -> default behavior (show small "Just
                // Added" drop down)
                if (typeof successCallback === 'function') {
                    successCallback(dataObject, obj); // Originally passed dataObject.
                    if (closeWindowAfterAddingToCart) {
                        closeLightBox();
                    }
                    updateMiniBag();
                } else {
                    updateMiniBag();
                    // Create JS object
                    var itemInformation = {
                        code: productCode,
                        name: obj.msg1,
                        src: obj.msg2,
                        designer: obj.msg3,
                        designerHref: obj.msg4,
                        price: obj.msg5,
                        origPrice: obj.msg6,
                        disclaimer: obj.msg9,
                        invAlert: obj.msg12,
                        color: obj.msg10,
                        cartTotal: obj.msg11,
                        cartSize: obj.msg13,
                        addlItemsText: obj.msg14,
                        cartItemsCount: obj.msg22,
                        size: obj.msg23,
                        itemQtyInCart: obj.msg24
                    };
                    if (hotlistQuickView) {
                        $('.quickview_add_to_bag').prop('disabled',true);
                        $('.quickview_add_to_bag').text($('.quickview_add_to_bag').data('textItemAdded'));
                        setTimeout(function(){
                            $('.quickview_add_to_bag').prop('disabled',false);
                            if ($('.quickview_add_to_bag').closest('.atb-buy--preorder-qv').length > 0){
                                $('.quickview_add_to_bag').text($('.quickview_add_to_bag').data('textPreorder'));
                            }else{
                                $('.quickview_add_to_bag').text($('.quickview_add_to_bag').data('textAddItem'));
                            }
                        }, 3000);
                    } else {
                        //no mini cart on shopping bag page
                        if(location.href.indexOf("/r/ShoppingBag.jsp") == -1){
                            if (obj.msg16 == "Gift Certificates") {
                                itemInformation.isGiftCert = true;
                                itemInformation.delivery = "Email Delivery";

                                showGiftCertInfo(itemInformation, focusID);
                            } else if (src !== 'CartRail') {
                                showJustAdded(itemInformation, focusID);
                            }
                        }
                    }
                    gaAddToCartAction('add',productCode,obj.msg1,obj.msg16,obj.msg3,size,obj.msg15,1);
                    if (typeof iPinYouAddtoCart === 'function'){
                        iPinYouAddtoCart(productCode);
                    }
                    if(obj.msg7){
                        if (typeof convertroAddItem === 'function')
                            convertroAddItem(obj.msg7);
                    }
                    //close the lightbox if closeWindowAfterAddingToCart is true
                    if (closeWindowAfterAddingToCart)
                        closeLightBox();


                    if (typeof insertCriteoAddToCart === 'function'){
                        insertCriteoAddToCart(productCode);
                    }
                    if (typeof addToCartYahoo === 'function'){
                        addToCartYahoo(productCode);
                    }
                    if (typeof insertCordial === 'function') {
                        var cartItems = [];
                        var cartItem = [];
                        cartItem["productCode"] = productCode;

                        cartItem["productCategory"] = dataObject.d;
                        cartItem["productName"] = itemInformation.name;
                        cartItem["images"] = null;
                        cartItem["description"] = "";
                        cartItem["qty"] = 1;
                        cartItem["url"] = "";
                        cartItem["attr"] = [];
                        cartItem["attr"]["manufacturer"] = itemInformation.designer;
                        cartItem["attr"]["size"] = size;
                        cartItems.push(cartItem);

                        insertCordialAddToCart(cartItems);
                    }

                    if(obj.msg17){
                        location.reload();
                    }

                }
                if (obj.reCAPTCHA){
                    showBagLimitReCAPTCHA();
                } else if(obj.reachedBagLimit) {
                    showBagLimitPopup(productCode, size, favorited);
                }
            } else if (obj.reCAPTCHA) {
                showBagLimitReCAPTCHA();
            } else if(obj.reachedBagLimit) {
                showBagLimitPopup(productCode, size, favorited);
            }
        }
    });

}

function showBagLimitReCAPTCHA(){
    $.modal({
        url: "/r/dialog/VerifyHuman.jsp",
        type: "small",
        open: null,
        cache: false,
        overlayClose: true,
        triggerOpen: true,
		onClose : function(){
        	if(window.rcProps && typeof window.rcProps.ReCAPTCHARestore =='function'){
                window.rcProps.ReCAPTCHARestore();
                window.rcProps.ReCAPTCHARestore = "";
			}
		}
    });
}

function showBagLimitPopup(code, size, hideMyFav){
	var data = $.param({
		code : code,
		size : size,
        hideMyFav : hideMyFav
	});
    $.modal({
        url: "/r/dialog/ShoppingBagLimit.jsp?" + data,
        type: "small",
        open: null,
        cache: false,
        overlayClose: true,
        triggerOpen: true,
        onComplete : function () {}
    });
}

function addSavedProduct(productCode, size, sectionURL, sessionID, count, successCallback, csrfHash, closeWindowAfterAddingToCart, isMens, src, srcType, useReferrer, isPopup, qvclick){

	var favorited = false;
	if(window.location.href.indexOf("MyFavorite.jsp") > -1) {
		favorited = true;
	}
	var dataObject = {
		colorSelect: productCode,
		sizeSelect: size,
		sectionURL: sectionURL,
		sessionID: sessionID,
		count: count,
		csrfHash: csrfHash,
		isMens: isMens,
		d: isMens ? "Mens" : "Womens",
		src: src,
		srcType: srcType,
		qvclick: qvclick,
		contextReferrer: useReferrer ? document.referrer : window.location.href,
		addedFromFavorite: favorited,
		savedForLater: true
	};
	var data = $.param(dataObject);
	$.ajax({
		type: 'POST',
		url: '/r/ajax/AddItemToBag.jsp',
		data: data,
		success: function(rtn){
			if(typeof(isPopup) != 'undefined' && isPopup) {
				insertPageTrackForQuickView(null, true, productCode);
			} else {
				insertPageTrack(true, productCode);
			}
			var obj = parseRtn(rtn);
			if (obj.success) {
				if (obj.msg0)
					updateGender(obj.msg0);

				incrementBagCount(count);

				// No callback defined -> default behavior (show small "Just
				// Added" drop down)
				if (typeof successCallback === 'function') {
					successCallback(dataObject, obj);
					if (closeWindowAfterAddingToCart) {
						closeLightBox();
					}

				} else {
					updateMiniBag();
					// Create JS object
					var itemInformation = {
                        code: productCode,
                        name: obj.msg1,
                        src: obj.msg2,
                        designer: obj.msg3,
                        designerHref: obj.msg4,
                        price: obj.msg5,
                        origPrice: obj.msg6,
                        disclaimer: obj.msg9,
                        invAlert: obj.msg12,
                        color: obj.msg10,
                        cartTotal: obj.msg11,
                        cartSize: obj.msg13,
                        addlItemsText: obj.msg14,
                        cartItemsCount: obj.msg22,
                        size: obj.msg23,
                        itemQtyInCart: obj.msg24
					};

					showJustAdded(itemInformation);

					if(obj.msg7){
						if (typeof convertroAddItem === 'function')
							convertroAddItem(obj.msg7);
					}
					//close the lightbox if closeWindowAfterAddingToCart is true
					if (closeWindowAfterAddingToCart)
						closeLightBox();
				}
			} else {
                if (obj.reCAPTCHA){
                    showBagLimitReCAPTCHA();
                } else if(obj.reachedBagLimit){
                    showBagLimitPopup(productCode, size, false);
                }
				console.log('Unable to add product');
			}
		}
	});

}

/**
 * @param item - Information about object; should have:
 *        name, src, designer, designerHref, price, origPrice
 */
function showJustAdded(item, focusID){

	if (!item)
		return;
	// A/B test 517
  var addToBagWithCompleteTheLook = $('#add-to-bag-with-ctl-modal');
  if (addToBagWithCompleteTheLook.length > 0 && item.code === addToBagWithCompleteTheLook.data('code')){
      $('.js-minicart-size-display .js-size').html(item.size);
      $('.js-qty').html(item.itemQtyInCart);
      $('#js-miniBagMarkup').show();
      $.modal({
          open: "add-to-bag-with-ctl-modal",
          type: 'small',
          triggerOpen: true,
          onOpen: function() {
              $('#add-to-bag-with-ctl-modal .js-carousel-ctl-atb').slickSlider({
                  slidesToShow: 3,
                  responsive: [{
                      breakpoint: 769,
                      settings: {
                          slidesToShow: 5,
                          infinite: false
                      }
                  }]
              });
          }
      });
      return;
  }

    var container = $('#js-mini-cart-added');
    if (item.name)
        $('#js-mini-cart-added__product-name', container).html(item.name);
    if (item.src)
        $('#js-mini-cart-added__image', container).attr('src', item.src);
    if (item.designer)
        $('#js-mini-cart-added__designer-link', container).html(item.designer);
    if (item.designerHref)
        $('#js-mini-cart-added__designer-link', container).attr('href', item.designerHref);
	if (item.color){
        $('#js-mini-cart-added__color', container).html(item.color);
        $('#js-mini-cart-added__color', container).parent('p').show();
    }else{
        $('#js-mini-cart-added__color', container).parent('p').hide();
    }

    if(item.cartItemsCount) {
        $('#addedItemMiniBagCount', container).html(item.cartItemsCount);
    }

    if(item.size) {
        $('#js-mini-cart-added__size', container).html(item.size);
    }

    if(item.itemQtyInCart) {
        $('#js-mini-cart-added__qty', container).html(item.itemQtyInCart);
    }

    if($('#js-mini-cart').hasClass('mini-bag--empty')) {
        $('#js-mini-cart').removeClass('mini-bag--empty');
    }

    $('#js-miniBagMarkup').show();

    if (item.price)
        $('#js-mini-cart-added__price, #js-mini-cart-added__markdown', container).html(item.price);
	if (item.cartTotal)
		$('#js-mini-cart-added__cartTotal', container).html(item.cartTotal);
	else
		$('#js-mini-cart-added__cartTotal', container).hide();
    if (item.origPrice && item.origPrice!='hideOriginalPrice'){
        $('#js-mini-cart-added__markdown-original', container).show().html(item.origPrice);
        $('#js-mini-cart-added__markdown', container).show();
        $('#js-mini-cart-added__price', container).hide();
    } else {
        $('#js-mini-cart-added__price', container).show();
        $('#js-mini-cart-added__markdown, #js-mini-cart-added__markdown-original', container).hide();
    }
    if (item.disclaimer && item.disclaimer != '') {
		$('#js-mini-cart-added__disclaimer').show().html(item.disclaimer);
	}
	else {
		$('#js-mini-cart-added__disclaimer').hide();
	}
	if (item.invAlert && item.invAlert != '') {
		$('#js-mini-cart-added__alert').show().html(item.invAlert);
	}
	else {
		$('#js-mini-cart-added__alert').hide();
	}
	if (item.addlItemsText && item.addlItemsText != '') {
		$('#js-mini-cart-added__addl_msg').show().html(item.addlItemsText);
	}
	else {
		$('#js-mini-cart-added__addl_msg').hide();
	}
    $('#js-mini-cart-items').hide();
    container.show()
    var atbTimeout;
    $('#tr-mybag').dropdown('open');
    if($('.no-focus')[0]){
      atbTimeout = setTimeout(closeJustAdded, 7000);
      // Cancel Timeout if user mouseover mini bag
      $('#tr-mybag').on('mouseenter', function() {
        clearTimeout(atbTimeout);
        $('#tr-mybag').off('mouseenter');
      });
    } else {
  		$('#tr-mybag').dropdown('openAndTrap', $('#'+focusID));
      $('#continue-shopping-link').on("click",function(){
        $('#'+focusID).focus();
      });
    }

    // Force Header into view when mini bag is visible
    var $FixedHeader = $('.js-fixed-header');
    if($FixedHeader.hasClass('is-fixed-scroll')) {
      $FixedHeader.css({'transform': 'translate3d(0px, 0px, 0px)'});
    }
}

function showGiftCertInfo(item, focusID){
    if (!item)
        return;

    $('.mini-bag__product-brand').addClass('u-hide');
    $('#js-mini-cart-added__size').parent().parent().addClass('u-hide');
    $('#js-mini-cart-added__disclaimer').addClass('u-hide');
    $('#js-mini-cart-added__alert').addClass('u-hide');

    var container = $('#js-mini-cart-added');
    $('#js-mini-cart-added__product-name', container).html(item.name);
    $('#js-mini-cart-added__image', container).attr('src', item.src);
    $('#delivery_for_certificates', container).removeClass('u-hide');
    $('#delivery_for_certificates', container).html(item.delivery);
    $('#recipient', container).removeClass('u-hide');
    $('#recipient', container).html(item.recipient);
    $('#message', container).removeClass('u-hide');
    $('#message', container).html(item.message);

    if(item.cartItemsCount) {
        $('#addedItemMiniBagCount', container).html(item.cartItemsCount);
    }

    if($('#js-mini-cart').hasClass('mini-bag--empty')) {
        $('#js-mini-cart').removeClass('mini-bag--empty');
    }

    $('#js-miniBagMarkup').show();

    if (item.price)
        $('#js-mini-cart-added__price, #js-mini-cart-added__markdown', container).html(item.price);
    if (item.cartTotal)
        $('#js-mini-cart-added__cartTotal', container).html(item.cartTotal);
    else
        $('#js-mini-cart-added__cartTotal', container).hide();
    if (item.origPrice && item.origPrice!='hideOriginalPrice'){
        $('#js-mini-cart-added__markdown-original', container).show().html(item.origPrice);
        $('#js-mini-cart-added__markdown', container).show();
        $('#js-mini-cart-added__price', container).hide();
    } else {
        $('#js-mini-cart-added__price', container).show();
        $('#js-mini-cart-added__markdown, #js-mini-cart-added__markdown-original', container).hide();
    }
    if (item.addlItemsText && item.addlItemsText != '') {
        $('#js-mini-cart-added__addl_msg').show().html(item.addlItemsText);
    }
    else {
        $('#js-mini-cart-added__addl_msg').hide();
    }
    $('#js-mini-cart-items').hide();
    container.show()
    var atbTimeout;
    $('#tr-mybag').dropdown('open');
    if($('.no-focus')[0]){
        atbTimeout = setTimeout(closeJustAdded, 7000);
        // Cancel Timeout if user mouseover mini bag
        $('#tr-mybag').on('mouseenter', function() {
            clearTimeout(atbTimeout);
            $('#tr-mybag').off('mouseenter');
        });
    } else {
        $('#tr-mybag').dropdown('openAndTrap', $('#'+focusID));
        $('#continue-shopping-link').on("click",function(){
            $('#'+focusID).focus();
        });
    }

    // Force Header into view when mini bag is visible
    var $FixedHeader = $('.js-fixed-header');
    if($FixedHeader.hasClass('is-fixed-scroll')) {
        $FixedHeader.css({'transform': 'translate3d(0px, 0px, 0px)'});
    }
}

function addBuyNowProduct(code, size, sectionURL, source, qvclick, fittingRoomSize){
    var itemSource = source ? 'itemsrc=' + source : '';

    $.ajax({
        type: 'POST',
        url: '/r/ajax/BuyNow.jsp?' + itemSource,
        data: $.param({
            bnCode: code,
            bnSize: size,
			d: $('#header-jsp').data('department'),
            sectionUrl: sectionURL,
            qvclick: qvclick,
            fittingRoomSize: fittingRoomSize
        }),
        success: function(obj){
            var rtn = parseRtn(obj);
            if (rtn && rtn.success) {

				gaAddToCartActionWithAjax('add',code,size,1);
				gaCheckout(1,'SIGNIN');
				if (typeof insertCriteoAddToCart === 'function'){
					insertCriteoAddToCart(code);
				}
                var callback = function () {window.location = '/r/SignInCheckout.jsp?bn=true';}
                insertPageTrack(true, code, false, callback, callback, undefined, true);  // Continue
				// even if there is a bad response code

            }
        }
    });
}

function pushAddProductToGA(productName, productCode, price, brand, category, color, currencyCode, count) {
    pushProductOnGAHelper('addToCart', productName, productCode, price, brand, category, color, currencyCode, count);
}

function pushRemoveProductFromGA(productName, productCode, price, brand, category, color, currencyCode, count) {
    pushProductOnGAHelper('removeFromCart', productName, productCode, price, brand, category, color, currencyCode, count);
}

function pushProductOnGAHelper(action, productName, productCode, price, brand, category, color, currencyCode, count) {
    // Measure adding a product to a shopping cart by using an 'add' actionFieldObject and a list of productFieldObjects.
    if(typeof(count) == 'undefined') {
        count = 1;
    }
    try {
        dataLayer.push({
                'event': action,
                'ecommerce': {
                    'currencyCode': currencyCode,
                    'add': { // 'add' actionFieldObject measures.
                        'products': [
                            { // adding a product to a shopping cart.
                                'name': productName,
                                'id': productCode,
                                'price': price,
                                'brand': brand,
                                'category': category,
                                'variant': color,
                                'quantity': count
                            }
                        ]
                    }
                }
            }
        );

    } catch(err) {
        console.log(err.message);
    }
    // console.log("pushed to dataLayer event[" + action + "], productCode[" + productCode + "], name[" + productName + "] price[" + price + "], brand[" + brand + "], color[" + color + "], currencyCode[" + currencyCode + "], count[" + count + "]");
    // console.dir(dataLayer);
}

window.get_cordial_cID = function(accountKey, getCookie){
    getCookie = function(name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2) return parts.pop().split(";").shift();
    }
    if(typeof accountKey === 'undefined'){
        try{
            accountKey = document.querySelectorAll('script[data-cordial-track-key]')[0].getAttribute('data-cordial-track-key');
        }catch(e){}
    }
    return getCookie('crdl_'+(accountKey || '')+'cID');
}

function pushAddProductToCordial(productName, productCode, price, brand, category, color, currencyCode, count) {
    pushProductOnCordialHelper('add', productName, productCode, price, brand, category, color, currencyCode, count);
}

function pushRemoveProductFromCordial(productName, productCode, price, brand, category, color, currencyCode, count) {
    pushProductOnCordialHelper('remove', productName, productCode, price, brand, category, color, currencyCode, count);
}

function pushProductOnCordialHelper(action, productName, productCode, price, brand, category, color, currencyCode, count) {
    // Measure adding a product to a shopping cart by using an 'add' actionFieldObject and a list of productFieldObjects.
    if(typeof(cordial) == 'undefined' || cordial == null) {
        return;
    }
    if(typeof(count) == 'undefined') {
        count = 1;
    }
    try {
        price = price.replace("$", "");
	} catch(err) {
    	console.log(err.message);
	}
    try {
        if(get_cordial_cID()) {
            cordial.cartitem(action, {
                    'productID': productCode,
                    'sku': productCode,
                    'category': category,
                    'name': productName,
                    'images': [],
                    'description': '',
                    'qty': count,
                    'itemPrice': price,
                    'url': '',
                    'attr': {
                        'manufacturer': brand,
                        'size': null
                    }
                }
            );
        }
        cordial.event('cartitem',{
            'action': action,
            'productID': productCode,
            'qty' : count
        });


    } catch(err) {
        console.log(err.message);
    }
    // console.log("pushed to dataLayer event[" + action + "], productCode[" + productCode + "], name[" + productName + "] price[" + price + "], brand[" + brand + "], color[" + color + "], currencyCode[" + currencyCode + "], count[" + count + "]");
    // console.dir(dataLayer);
}



function trackAddToBagFromFavorite(code, size, sectionUrl, sessionId){
    var data2 = $.param({
        code: code,
        action: 'addToCart'
    });

    $.ajax({
        type: 'POST',
        url: '/r/ajax/TrackHeartItem.jsp',
        data: data2,
        success: function(data2){
            var obj = parseRtn(data2);
            if (obj.success){
                ;
            }
        }
    });
}

function moveProduct(productCode, size, count){

    if (size == 'one size') size = 'all';
		submitHeart("product", productCode,"add");
		var data = $.param({
        code: productCode,
        size: size,
        count: count
    });
    $.ajax({
        type: 'POST',
        url: '/r/ajax/RemoveFromBag.jsp',
        data: data,
        success: function(data){
            var obj = parseRtn(data);
            if (obj.success){
               location.reload();

            }
        }
    });






}

function removeProductSerial(productCode, size, count, serial, successCallback){
    if (size == 'one size') size = 'all';
    var data = $.param({
        code: productCode,
        size: size,
        count: count,
        serial: serial
    });
    $.ajax({
        type: 'POST',
        url: '/r/ajax/RemoveFromBag.jsp',
        data: data,
        success: function(data){
            var obj = parseRtn(data);
            if (obj.success){
                if (obj.msg0)
                    updateGender(obj.msg0);

                if (typeof successCallback === 'function')
                    successCallback();
                else {
                    decrementBagCount(count);
                    updateMiniBag();
                }
            }
        }
    });
}

function removeProduct(productCode, size, count, successCallback){
    if (size == 'one size') size = 'all';
    var data = $.param({
        code: productCode,
        size: size,
        count: count
    });
    $.ajax({
        type: 'POST',
        url: '/r/ajax/RemoveFromBag.jsp',
        data: data,
        success: function(data){
            var obj = parseRtn(data);
            if (obj.success){
                if (obj.msg0)
                    updateGender(obj.msg0);

                if (typeof successCallback === 'function')
                    successCallback();
                else {
                    decrementBagCount(count);
                    updateMiniBag();
                }
            }
        }
    });
}

function incrementBagCount(incrementAmount){
    var bagCountElement = $('#my_bag_item_count');
    var bagCount = parseInt(bagCountElement.text(), 10);
    if (!incrementAmount)
        incrementAmount = 1;
    bagCountElement.text(bagCount+incrementAmount);
}

function reloadCartRail() {
	var cartRailComponent = $('cart-rail-component-id');
	if(cartRailComponent && (typeof loadRailContent === "function") ) {
		loadRailContent();
	}
}

function decrementBagCount(decrementAmount){
    var bagCountElement = $('#my_bag_item_count');
    var bagCount = parseInt(bagCountElement.text(), 10);
    if (!decrementAmount)
        decrementAmount = 1;
    bagCountElement.text(bagCount-decrementAmount);
}

function closeJustAdded(closeQuickView,focusID){
    var $minicart = $('#tr-mybag');
    var $minicartAdded = $('#js-mini-cart-added');
    var $minicartItems = $('#js-mini-cart-items');

    if ($minicartAdded.is(':visible')) {
        $('#tr-mybag').dropdown('close');
        $minicartAdded.fadeOut(300, function() {
            $minicartItems.fadeIn();
        });
    }
    Keyboard.releaseFocus($minicartAdded, $('#'+focusID));

}

function closeAndReload(){
    location.reload();

}

function deleteBillingOption(id, successCallback){
    var data = $.param({
        id: id,
        action: 'delete'
    });
    $.ajax({
        type: 'POST',
        url: '/r/ajax/SaveBillingOption.jsp',
        data: data,
        success: function(data){
            var obj = parseRtn(data);
            if (obj.success)
                if (typeof successCallback === 'function')
                    successCallback();
        }
    });
}


// this function is not used for MyBillingSettings.jsp
function createBillingOption(name, payType, num, code, expDate, tel, usrAddID, dateofbirth, successCallback){
    saveBillingOption(name, payType, num, code, expDate, tel, usrAddID, dateofbirth,

        function(rtn){
            var newRtn = {};
            newRtn.success = rtn.success;
            if (rtn.success){
                if (rtn.msg0)
                    newRtn.msg = rtn.msg0
                if (rtn.msg1)
                    newRtn.id = rtn.msg1;
                if (rtn.msg2)
                    newRtn.img = rtn.msg2;
                if (rtn.msg3)
                    newRtn.summary = rtn.msg3;
            }
            successCallback(newRtn);
        },
        -1
    );
}

function saveBillingOption(name, payType, num, code, expDate, tel, usrAddID, dateofbirth, successCallback, id){
    id = (typeof id === 'undefined') ? -1 : id;
    var data = $.param({
        name: name,
        paymentType: payType,
        number: num,
        code: code,
        expirationDate: expDate,
        telephone: tel,
        userAddressID: usrAddID,
		dateofbirth: dateofbirth,
        id: id
    });
    $.ajax({
        type: 'POST',
        url: '/r/ajax/SaveBillingOption.jsp',
        data: data,
        success: function(data){
            var obj = parseRtn(data);
            if (obj.success)
                if (typeof successCallback === 'function')
                    successCallback(obj);
        }
    });
}

function deleteAddress(id, successCallback, isBilling, isShipping){
    var data = $.param({
        id: id,
        action: 'delete',
        bill: isBilling,
        ship: isShipping
    });
    $.ajax({
        type: 'POST',
        url: '/r/ajax/SaveAddress.jsp',
        data: data,
        success: function(data){
            var obj = parseRtn(data);
            if (obj.success)
                if (typeof successCallback === 'function')
                    successCallback(obj);
        }
    });
}

function createAddress(name, street, street2, city, state, zip, country, tel, internationalID, successCallback, bill, ship){
    saveAddress(name, street, street2, city, state, zip, country, tel, internationalID,
        function(rtn){
            var newRtn = {};
            newRtn.success = rtn.success;
            if (rtn.success){
                if (rtn.msg0)
                    newRtn.msg = rtn.msg0
                if (rtn.msg1)
                    newRtn.id = rtn.msg1;
            }
            successCallback(newRtn);
        },
        bill, ship, -1);
}

function saveAddress(name, street, street2, city, state, zip, country, tel, internationalID, successCallback, bill, ship, id){
    id = (typeof id === 'undefined') ? -1 : id;
    bill = (typeof bill === 'undefined') ? false : bill;
    var data = $.param({
        name: name,
        street: street,
        street2: street2,
        city: city,
        state: state,
        zip: zip,
        country: country,
        telephone: tel,
		internationalID: internationalID,
        bill: bill,
        ship: ship,
        id: id
    });
    $.ajax({
        type: 'POST',
        url: '/r/ajax/SaveAddress.jsp',
        data: data,
        success: function(data){
            var obj = parseRtn(data);
            if (obj.success)
                if (typeof successCallback === 'function')
                    successCallback(obj);
        }
    });
}

function createBillingOptionAfterSaveAddress(obj) {
	var newUserAddressID = obj.msg1;
// alert("newUserAddressID: " + newUserAddressID);
	var name = $("#name").val();

	var num = $("#card_num").val();

	var expDate = $("#expire_month").val() + "/" + $("#expire_year").val();
	var tel = $("#telephone").val();
	var security_code=$("#security_code").val();

	saveBillingOption(name, null, num, security_code, expDate, tel, newUserAddressID,
			closeAndReload, -1);

}
function saveEmailChange(newEmail, confirmEmail, currentEmail) {
	var data = $.param({
		newEmail : newEmail,
		confirmEmail : confirmEmail,
		currentEmail : currentEmail,
		site : "r"
	});
	$("#save_email_change").val("SAVING");
	$.ajax({
		type : 'POST',
		url : '/r/ajax/SaveEmail.jsp',
		data : data,
		success : function(data) {
			var obj = parseRtn(data);
			if (obj.success) {
				$("#save_email_success_trigger").click();
			} else {
		// alert(obj.msg0);
				$("#save_email_change").val("SAVE CHANGES") ;
				if(obj.code==1){
					$("#new_email").addClass("errortextbox");
					$("#new_email_tag").css("color", "#C9383F");
					$("#invalid_new_email").css("display", "inline");
				}
				else if (obj.code == 3){
					$("#new_email").addClass("errortextbox");
					$("#new_email_tag").css("color", "#C9383F");
					$("#invalid_new_email_2").css("display", "inline");

				}
				else{
					$("#new_email").addClass("errortextbox");
					$("#new_email").val(obj.msg0);
				}

			}
		}
	});

}

function applyPromo(promo, callback){
    var data = $.param({
        promo: promo,
		scope: $('#employee-checkout').data('scope')
    });
    $.ajax({
        type: 'POST',
        url: '/r/ajax/ApplyPromoCode.jsp',
        data: data,
        success: function(data){
            var obj = parseRtn(data);
            if (typeof callback === 'function')
                callback(obj);
            else if (obj.success){
                location.reload();
            }
        }
    });
}

function applyCredit(credit, callback){
    var data = $.param({
        credit: credit
    });
    $.ajax({
        type: 'POST',
        url: '/r/ajax/ApplyStoreGiftCredit.jsp',
        data: data,
        success: function(data){
            var obj = parseRtn(data);
            if (typeof callback === 'function')
                callback(obj);
            else if (obj.success){
                location.reload();
            }
        }
    });
}

function applyGiftCertificate(giftCode, callback){
    var data = $.param({
        code: giftCode
    });
    $.ajax({
        type: 'POST',
        url: '/r/ajax/ApplyGiftCode.jsp',
        data: data,
        success: function(data){
            var obj = parseRtn(data);
            if (typeof callback === 'function')
                callback(obj);
            else if (obj.success){
                location.reload();
            }
        }
    });
}

function setBillingOption(number, code, exp, name, street, street2, city, state, zipCode, country, telephone, dateofbirth, internationalID,  successCallback, id, type, csrfHash){

    var data = $.param({
        number: number,
        code: code,
        exp: exp,
        name: name,
        street: street,
        street2: street2,
        city: city,
        state: state,
        zip: zipCode,
        country: country,
        telephone: telephone,
		dateofbirth: dateofbirth,
		internationalID: internationalID,
        id: id,
        type: type,
        csrfHash: csrfHash
    });

    return new Promise(function(resolve, reject) {
        $.ajax({
            type: 'POST',
            data: data,
            url: '/r/ajax/SetBillingOption.jsp',
            success: function(rtn){
                var obj = parseRtn(rtn);
                if (obj.success){
                    if (typeof successCallback == 'function')
                        resolve(successCallback(obj));
                } else {
                    reject(obj);
                }
            }
        });
    });
}
function setShippingAddress(name, street, street2, city, state, zipCode, country, telephone, internationalID, successCallback, id){
    var data = $.param({
        name: name,
        street: street,
        street2: street2,
        city: city,
        state: state,
        zip: zipCode,
        country: country,
        telephone: telephone,
        id: (typeof(id) != 'undefined' ? id : -1),
        internationalID: internationalID
    });
    $.ajax({
        type: 'POST',
        data: data,
        url: '/r/ajax/SetShippingAddress.jsp',
        success: function(rtn){
            var obj = parseRtn(rtn);
            if (obj.success){
                if (typeof successCallback == 'function')
                    successCallback(obj);
            }
        }
    });
}

function getCookie(c_name) {
    return docCookies.getItem(c_name);
}

function setCookie(c_name, value, exdays) {
    exdays = exdays * 86400;
    docCookies.setItem(c_name,value,exdays,"/");
}

function openCouponRestrictions(){
    $.modal({
        url:'/r/dialog/CouponRestrictions.jsp',
        triggerOpen: true
    });
}
function expandCouponRestrictionBrands(){
	$('.brands-in-cart').hide();
	$('.all-brands').slideDown();
}

function checkPaymentType(number, callback){
    var data = $.param({
        number: number
    });
    $.ajax({
        type: 'POST',
        url: '/r/ajax/CheckValidCard.jsp',
        data: data,
        success: function(rtn){
            var obj = parseRtn(rtn);
            if (typeof callback === 'function')
                callback(obj);
        }
    });
}
function getInstalment(countryCode, currencyCode, billingType, callback){
	var data = $.param({
		currencyCode: currencyCode,
		countryCode: countryCode,
		billingType: billingType
	});
	$.ajax({
		type: 'POST',
		url: '/r/ajax/GetInstallments.jsp',
		data: data,
		success: function(obj){
			if (typeof callback === 'function') {
                callback(obj);
            }
		}
	});
}
function getBagSyncNotifications(notificationsHandled, callback){
    var data = $.param({
        notificationsHandled: notificationsHandled
    });
    $.ajax({
        type: 'POST',
        url: '/r/ajax/GetBagSyncNotifications.jsp',
        data: data,
        success: function(rtn){
            var obj = parseRtn(rtn);
            if (typeof callback === 'function')
                callback(obj);
        }
    });
}
function saveCustomerSatisfactionSurvey(callback, orderNum, satisfaction, isFullSurvey, selection, sizeAvail, websiteNav, prices,
    shipRtnPolicy, custService, packaging, suggestions, custSource, other){
    var data = $.param({
        isFullSurvey: isFullSurvey,
        orderNum: orderNum,
        satisfaction: satisfaction,
        selection: selection,
        sizeAvail: sizeAvail,
        websiteNav: websiteNav,
        prices: prices,
        shipRtn: shipRtnPolicy,
        custService: custService,
        pkgPresent: packaging,
        suggest: suggestions,
        custSrc: custSource,
        other: other
    });
    $.ajax({
        type: 'POST',
        url: '/r/ajax/SaveSatisfactionSurvey.jsp',
        data: data,
        success: function(rtn){
            var obj = parseRtn(rtn);
            if (typeof callback === 'function')
                callback(obj);
        }
    });
}

function areCookiesEnabled() {
    var cookieEnabled = navigator.cookieEnabled;
    // When cookieEnabled flag is present and false then cookies are disabled.
    if (cookieEnabled === false) {
        return false;
    }
    // try to set a test cookie if we can't see any cookies and we're using
    // either a browser that doesn't support navigator.cookieEnabled
    // or IE (which always returns true for navigator.cookieEnabled)
    if (!document.cookie && (cookieEnabled === null || /*@cc_on!@*/false))
    {
        document.cookie = "testcookie=1";

        if (!document.cookie) {
            return false;
        } else {
            document.cookie = "testcookie=; expires=" + new Date(0).toUTCString();
        }
    }
    return true;
}

function populateSpotlightById(src, id) {
    var id = id;
    var popupWidth = SpotlightPopupWidth;
    var popupHeight = 610;
    var requestLink = '/r/ajax/SocialFeedEntry.jsp?revolvemeajaxid='+id+"&from="+src;
    $.colorbox({
        href:requestLink,
        innerWidth:popupWidth, innerHeight:popupHeight, scrolling: false, fixed: true,
        onOpen: function(){
            if(window.history && typeof(window.history.pushState)==="function" && areCookiesEnabled() && !src === "pdp"){
                setCookie('revolvemeajaxid',id,1);
                window.history.pushState('object','customUrl','/r/revolveme.jsp?from='+src+'&revolvemeajaxid='+id);
            }
        },
        onClosed: function(){
            if(window.history && typeof(window.history.pushState)==="function" && areCookiesEnabled()){
                if(location.href.indexOf('revolvemeajaxid=')!=-1){
                    window.history.go(-1);
                }
            }
        },
        onComplete: function(){
            // only set slideshow if the controls are there
            if ($('#cycle-controls_'+id).length > 0){
                $('#cycle-slideshow_'+id).cycle();
                $('#cycle-slideshow_'+id).on('cycle-next', function(evt, options){
                    $('#cycle-pages_'+id).html((options.currSlide+1) + '&nbsp;/&nbsp;' + options.slides.length);
                });
                $('#cycle-slideshow_'+id).on('cycle-prev', function(evt, options){
                    $('#cycle-pages_'+id).html((options.currSlide+1) + '&nbsp;/&nbsp;' + options.slides.length);
                });
            }
            // ellipsis caption
// $('#caption_'+id).dotdotdot();
        }
    });
}

// revolveME

function openSocial(id, src, popupWidth){
	var popupHeight = 610;
	if (!popupWidth)
		popupWidth = SpotlightPopupWidth;

	var requestLink = '/r/ajax/SocialFeedEntry.jsp?revolvemeajaxid='+id+"&from="+src;
	var beforeAjaxUrl = window.location.href;
	var isHomepage = (beforeAjaxUrl.indexOf('.jsp')== -1 && beforeAjaxUrl.indexOf('/dp/')==-1 && beforeAjaxUrl.indexOf('/br/')==-1)|| (beforeAjaxUrl.indexOf("/Homepage.jsp")!=-1);
	$.colorbox({
		href: requestLink,
		innerWidth:popupWidth, innerHeight:popupHeight, scrolling: false, fixed: true,
		onOpen: function(){
			if(window.history && typeof(window.history.pushState)==="function" && areCookiesEnabled()){
				setCookie('revolvemeajaxid',id,1);
				if(isHomepage){
					if(src != 'weddingshop'){
						window.history.pushState('object','customUrl','/r/Homepage.jsp?from='+src+'&revolvemeajaxid='+id);
					}
				}else{
					window.history.pushState('object','customUrl','/r/revolveme.jsp?from='+src+'&revolvemeajaxid='+id);
				}
			}
		},
		onClosed: function(){
			if(window.history && typeof(window.history.pushState)==="function" && areCookiesEnabled()){
				if(location.href.indexOf('revolvemeajaxid=')!=-1){
					window.history.go(-1);
				}
			}
		},
		onComplete: function(){
			// only set slideshow if the controls are there
			if ($('#cycle-controls_'+id).length > 0){
				$('#cycle-slideshow_'+id).cycle();
				$('#cycle-slideshow_'+id).on('cycle-next', function(evt, options){
					$('#cycle-pages_'+id).html((options.currSlide+1) + '&nbsp;/&nbsp;' + options.slides.length);
				});
				$('#cycle-slideshow_'+id).on('cycle-prev', function(evt, options){
					$('#cycle-pages_'+id).html((options.currSlide+1) + '&nbsp;/&nbsp;' + options.slides.length);
				});
			}
		}
	});
}

function populateSpotlight(src, context, liList){
    var slideShowList;
    if(liList){
    	slideShowList = $(liList);
    }else{
    	slideShowList = $('li[id^=socialsource]', context);
    }
    slideShowList.each(function(idx, li){
        var id = li.id.split('_')[1];
        var popupWidth = SpotlightPopupWidth;
        if ($(li).data('noprod')){
            popupWidth = 450;
        }
        if(src.indexOf("grovepopup") > -1){
            popupWidth = 450;
        }
		$(li).click(function(){openSocial(id, src, popupWidth);});
    });
}

/*** Directly open spotlight by id, triggered by window.history ***/
function openSpotlight(id,src){
    $.colorbox({href:'/r/ajax/SocialFeedEntry.jsp?revolvemeajaxid='+id+"&from="+src,
        innerWidth:SpotlightPopupWidth, innerHeight:true, scrolling: false, fixed: true,
        onClosed: function(){
            if(window.history && typeof(window.history.pushState)==="function" && areCookiesEnabled()){
                if(location.href.indexOf('revolvemeajaxid=')!=-1){
                    window.history.go(-1);
                }
            }
        }});
}

/***  Directly open spotlight by id, triggered by url like :
  **  http://www.revolveclothing.com/r/spotlight/revolveme.jsp?from=gal&revolvemeajaxid=15175
 ***/
function openSpotlightFromShareLink(id){
    $.colorbox({href:'/r/ajax/SocialFeedEntry.jsp?revolvemeajaxid='+id+"&from=shareLink",
        innerWidth:SpotlightPopupWidth, innerHeight:true, scrolling: false, fixed: true,
        onOpen: function(){
            if(window.history && typeof(window.history.pushState)==="function" && areCookiesEnabled()){
                setCookie('revolvemeajaxid',id,1);
                var beforeAjaxUrl = window.location.href;
                var isHomepage = (beforeAjaxUrl.indexOf('.jsp')== -1 && beforeAjaxUrl.indexOf('/dp/')==-1 && beforeAjaxUrl.indexOf('/br/')==-1)|| (beforeAjaxUrl.indexOf("/Homepage.jsp")!=-1);
                if(isHomepage){
                    window.history.replaceState('object','customUrl','/r/Homepage.jsp');
                    window.history.pushState('object','customUrl','/r/Homepage.jsp?from=shareLink&revolvemeajaxid='+id);
                }else{
                    window.history.replaceState('object','customUrl','/r/revolveme.jsp');
                    window.history.pushState('object','customUrl','/r/revolveme.jsp?from=shareLink&revolvemeajaxid='+id);
                }
            }
        },
        onClosed: function(){
            if(window.history && typeof(window.history.pushState)==="function" && areCookiesEnabled()){
                if(location.href.indexOf('revolvemeajaxid=')!=-1){
                    window.history.go(-1);
                }
            }
        }});
}

attachEventListener(window, 'popstate', function(e) {
    if(  location.href.indexOf("revolvemeajaxid=")==-1){
        //unloadQuickView("xxx");
        if(window.history && typeof(window.history.pushState)==="function" && areCookiesEnabled()){
            $.colorbox.close();
        }
		/*
    }else{
        if(window.history && typeof(window.history.pushState)==="function" && areCookiesEnabled()){
            var id = getCookie('revolvemeajaxid');
            openSpotlight(id,'browserButton');
        }
        */
    }
});

function attachEventListener(element, type, handler){
    if (element.addEventListener) {
        element.addEventListener(type, handler, false);
    }else if (element.attachEvent) {
        element.attachEvent('on' + type, handler)
    } else {
        element['on' + type] = handler;
    }
}

// Tooltip
function runTooltip()
{
    $( ".tt" ).each(function(i,val)
    {

        var tt = $(this),
            ttContent = tt.find(".tt-content"),
            ttDataWidth = (parseInt(ttContent.data('tt-width')) || false),
            ttDataPosition = (ttContent.data('tt-position') || "right"),
            ttDataSkin = (ttContent.data('tt-skin') || false),
            tooltipSpace = 18


        // Set position of tooltip
        tt.on("mouseenter",function()
        {
            if(!tt.hasClass('tt-initiated'))
            {
                // Set width of tooltip
                if(ttDataWidth) {
                    ttContent.css({width:ttDataWidth});
                }

                // Set position class
                if(ttDataPosition) {
                    ttContent.addClass("tt-" + ttDataPosition);
                }
                // set skin class
                if(ttDataSkin) {
                    ttContent.addClass("tt-" + ttDataSkin);
                }
                ttContent.appendTo("body");
                tt.addClass("tt-initiated");
            }

            var ttOffTop = tt.offset().top,
                ttOffLeft = tt.offset().left,
                ttWidth = tt.outerWidth(),
                ttHeight = tt.outerHeight(),
                ttContentW = ttContent.outerWidth(),
                ttContentH = ttContent.outerHeight();

            switch(ttDataPosition)
            {
                case "top":
                ttContent.css({
                    "top": ttOffTop - ttContentH - tooltipSpace,
                    "left": ttOffLeft + ttWidth/2 - ttContentW/2,
                    "z-index": 10000
                });
                break;
                case "bottom":
                ttContent.css({
                    "top": ttOffTop + ttHeight + tooltipSpace,
                    "left": ttOffLeft + ttWidth/2 - ttContentW/2,
                    "z-index": 10000
                });
                break;
                case "right":
                ttContent.css({
                    "top": ttOffTop + ttHeight/2 - ttContentH/2,
                    "left": ttOffLeft + ttWidth + tooltipSpace,
                    "z-index": 10000
                });
                break;
                case "left":
                ttContent.css({
                    "top": ttOffTop + ttHeight/2 - ttContentH/2,
                    "left": ttOffLeft - ttContentW - tooltipSpace,
                    "z-index": 10000
                });
                break;
                case "right-top":
                ttContent.css({
                  "top": ttOffTop - 20,
                  "left": ttOffLeft + ttWidth + tooltipSpace,
                  "z-index": 10000
                });
                break;
            }
            ttContent.addClass("tt-active");
        }).on("mouseleave",function()
        {
            ttContent.removeClass("tt-active");
        });
    });
}
runTooltip();

function refreshCartItemSummary() {
    $.ajax({
        type: 'POST',
        url: '/r/ipadApp/checkout/CartItemSummary.jsp',
        success: function(obj) {
            if (obj.total)
                $('.cart-summary-total').html(obj.total);
            if (obj.storeCredit) {
                $('.cart-summary-store-credit-amount').html(obj.storeCredit);
                $('.cart-summary-store-credit').show();
            } else {
                $('.cart-summary-store-credit-amount').html('$0.00');
                $('.cart-summary-store-credit').hide();
            }
            if (obj.storeCreditSummary) {
                $('.cart-summary-store-credit-balance').html(obj.storeCreditSummary);
                if ('None' == obj.storeCreditSummary) {
                    $('.cart-summary-store-credit-balance').hide();

                    $('#StoreCredit').val('');
                    $('#store_credit_applied').text('');
                    $('#store_credit_balance').text('');
                    $('.js-store-credit-applied').addClass("u-hide");
                } else {
                    $('.cart-summary-store-credit-balance').show();

                    $('#StoreCredit').val(obj.storeCreditAmount);
                    $('#store_credit_applied').text(obj.storeCredit);
                    $('#store_credit_balance').text(obj.storeCreditBalance);
                    $('.js-store-credit-applied').removeClass("u-hide");
                }
            }
            if (obj.giftCredit) {
                $('.cart-summary-gift-credit-amount').html(obj.giftCredit);
                $('.cart-summary-gift-credit').show();
            } else {
                $('.cart-summary-gift-credit-amount').html('$0.00');
                $('.cart-summary-gift-credit').hide();
            }
            if (obj.giftCreditSummary) {
                $('.cart-summary-gift-credit-balance').html(obj.giftCreditSummary);
                if ('None' == obj.giftCreditSummary) {
                    $('.cart-summary-gift-credit-balance').hide();

                    $('#gift_credit_applied').text('');
                    $('#gift_credit_balance').text('');
                    $('.js-gift-code-applied').addClass("u-hide");
                } else {
                    $('.cart-summary-gift-credit-balance').show();

                    $('#gift_credit_applied').text(obj.giftCredit);
                    $('#gift_credit_balance').text(obj.giftCreditBalance);
                    $('.js-gift-code-applied').removeClass("u-hide");
                }
            }
            if (obj.duties){
                $('#dutiesAmount').html(obj.duties);
                $('.dutiesAmountShippingOption').html(obj.duties);
            }
			if (obj.loyaltyRewardCredit){
				$('.cart-summary-loyalty-reward-amount').html(obj.loyaltyRewardCredit);
				if ('None' === obj.loyaltyRewardSummary){
					$('.cart-summary-loyalty-rewards').hide();
				} else {
					$('.cart-summary-loyalty-rewards').show();
				}
			}

            if (obj.couponCode) {
                $('#summary_coupon_code').html(obj.couponCodeSummary);
                $('#summary_coupon_code').show();
                $('#summary_coupon_amount').html(obj.couponDiscount);
                $('#summary_coupon_amount').show();
            } else {
                $('#summary_coupon_code').html('');
                $('#summary_coupon_code').hide();
                $('#summary_coupon_amount').html('');
                $('#summary_coupon_amount').hide();
            }

			var _shippingCost = $("#selectedShippingOptionPriceDisplay");
			if(_shippingCost!==null){
                var cost = "FREE";
                if(obj.string_free) cost = obj.string_free;
                if(obj.shippingCostAmount>0) cost = obj.shippingCostDisplay;
                _shippingCost.text(cost);
			}
        }
    });
}

/**
 *
 * @param url
 * @param module
 * @param action
 * @param params - appends key-value pairs to URL as query parameters for tracking purposes.
 * @returns {string}
 */
function logEngagement(url, module, action, params){
	if (params) {
		url += ((url.indexOf('?') >= 0) ? '&' : '?') + $.param(params);
	}
	$.ajax({
		type: 'POST',
		data: $.param({
			url: url,
			module: module,
			action: action
		}),
		url: '/r/ajax/LogEngagement.jsp'
	});
}

// js-fixed-scroll
// ===============

;(function($) {

  //JS scroll for Fixed Dropdown Curency Menu

  // Settings
  var pluginName = "fixedScroll",
  defaults = {
      container: "#js-currency-container"
  };

  // Ctor
  function Plugin( element, options ) {
      this.element    = element;
      this.options    = $.extend( {}, defaults, options) ;
      this._defaults  = defaults;
      this._name      = pluginName;

      this.init();
  }

  //Init
  Plugin.prototype.init = function () {

      var el       = $( this.element );
      var opts    = this.options;
      var item     = el.find('a');

      item.on('click' , function(e) {
          e.preventDefault();

          var $el = $(this);
          var hrefValue = $el.attr('href');
          var idValue = hrefValue.slice(1);
          var anchor = $('#' + idValue);
          var position = anchor.position().top + $(opts.container).scrollTop();

          $(opts.container).animate({
            scrollTop: position
          }, 800);

      } );

  };

  // Plugin wrapped ctor
  $.fn[pluginName] = function ( options ) {
      return this.each(function () {
          if (!$.data(this, 'plugin_' + pluginName)) {
              $.data(this, 'plugin_' + pluginName,
              new Plugin( this, options ));
          }
      });
  }

}(jQuery));

$( ".js-currency-menu" ).fixedScroll();

// // js-accordion
// // ============
//
//
// ;(function($) {
//
//     // Settings
//     var pluginName = "accordion",
//     defaults = {
//         accItem : ".accordion__item",
//         accContent : ".accordion__content",
//         accActive : "accordion__item--active",
//         accRadio : ".js-accordion-radio",
//         accLabel : ".accordion__label",
//         accSpeed : 500,
//         accToggle : false,
//         onComplete : function () {}
//     };
//
//     // Ctor
//     function Plugin( element, options ) {
//         this.element    = element;
//         this.options    = $.extend( {}, defaults, options) ;
//         this._defaults  = defaults;
//         this._name      = pluginName;
//
//         this.init();
//     }
//
//     //Init
//     Plugin.prototype.init = function () {
//
//         var e       = $( this.element );
//         var opts    = this.options;
//         var item    = e.find( opts.accItem );
//         var itemLabel = e.find(opts.accLabel);
//         var itemRadio = e.find(opts.accRadio);
//
//         if (e.data("toggle") === true) {
//             opts.accToggle = true;
//         }
//
//         $("."+opts.accActive).find(opts.accContent).slideDown();
//
//
//         itemLabel.on( "click" , function(){
//             toggleAccordion($(this));
//             toggleAriaExpand($(this));
//         });
//         itemLabel.find('a').on("click", function(e){
//             e.preventDefault();
//         });
//         itemLabel.keypress(function(e){
//             var key = e.which;
//             if(key == 13) {
//               toggleAccordion($(this));
//               toggleAriaExpand($(this));
//             };
//         });
//         itemRadio.on( "change" , function(){
//             toggleAccordion($(this));
//         });
//
//         function toggleAriaExpand(evt){
//           var ph2 = evt.closest(opts.accItem).find('h3');
//           var ariaExpanded = ph2.attr("aria-expanded");
//           if (ariaExpanded == "true" ) {
//             ph2.attr("aria-expanded", "false");
//           } else {
//             ph2.attr("aria-expanded", "true");
//           }
//         }
//
//         function toggleAccordion(evt) {
//             var accItemParent = evt.closest(opts.accItem);
//
//             if(!accItemParent.hasClass(opts.accActive)) {
//                 var contentHeight = 0;
//                 var content = accItemParent.find( opts.accContent );
//
//                 contentHeight = content.outerHeight( true );
//
//                 //  Opens the clicked accordion item
//                 content.stop().slideDown(
//                     opts.accSpeed,
//                     function(){
//                          if( e.attr("data-resize-colorbox") === "true" ) {
//                                 $.colorbox.resize();
//                          }
//                         opts.onComplete();
//                     }
//                 );
//
//                 if(!opts.accToggle) {
//
//                     // Closes the active accordion item
//                     $("."+opts.accActive).find(opts.accContent).stop().slideUp(opts.accSpeed);
//
//                     // Remove all active accordion class
//                     item.removeClass( opts.accActive );
//                 }
//                 // Assign active accordion class to new clicked accordion item
//                 accItemParent.addClass( opts.accActive );
//                 accItemParent.children(opts.accRadio).prop("checked", true);
//             } else {
//                 accItemParent.removeClass( opts.accActive );
//                 // If clicked accordion item is active close that shit
//                 accItemParent.find(opts.accContent).stop().slideUp(
//                     opts.accSpeed
//                 );
//             }
//         }
//     };
//
//     // Plugin wrapped ctor
//     $.fn[pluginName] = function ( options ) {
//         return this.each(function () {
//             if (!$.data(this, 'plugin_' + pluginName)) {
//                 $.data(this, 'plugin_' + pluginName,
//                 new Plugin( this, options ));
//             }
//         });
//     }
//
// }(jQuery));
//
// $( ".js-accordion" ).accordion();
//
// $('.js-nav-accordion').accordion({
//     accItem: ".nav-accordion__item",
//     accContent: ".nav-accordion__content",
//     accActive: "nav-accordion__item--active",
//     accLabel: ".nav-accordion__title",
//     accToggle: true
// });

// js-carousel--full
// ============

;(function($) {

    // Settings
    var pluginName = "carourselFullWidth",
    defaults = {

    };

    // Ctor
    function Plugin( element, options ) {
        this.element = element;
        this.options = $.extend( {}, defaults, options) ;
        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    //Init
    Plugin.prototype.init = function () {

        var e = $( this.element );
        var opts = this.options;
        var numSlides = e.children().length;
        var containerWidth = $(".container").width();
        var numVisible = e.data("cycle-carousel-visible");
        var slideWidth = containerWidth/ numVisible+1;
        var visibleSlides = 0;
        var slideHeight = 0;
        var carouselParent = e.parents(".carousel");
        e.removeClass("container");

        adjustCarousel();
        slideHeight = e.find(".carousel__slide").height();


        $( window ).resize(function() {
             adjustCarousel();
        });

        function adjustCarousel() {
            var numAllowedSlides = Math.floor($( window ).width() / slideWidth);

            if(numAllowedSlides % 2 && visibleSlides != (numAllowedSlides - 1)) {
                visibleSlides = numAllowedSlides - 1;
                reInitCycle();
            } else if(visibleSlides != numAllowedSlides) {
                visibleSlides = numAllowedSlides;
                reInitCycle();
            }
        }
        function reInitCycle() {
            carouselParent.addClass("carousel--extended");
            e.cycle("destroy");
            e.cycle({
                carouselVisible : visibleSlides
            });
        }
    };

    // Plugin wrapped ctor
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                new Plugin( this, options ));
            }
        });
    }

}(jQuery));

// js-toggle-display
// =============

;(function($) {

    // Settings
    var pluginName = "toggleDisplay",
    defaults = {
    };

    // Ctor
    function Plugin( element, options ) {
        this.element    = element;
        this.options    = $.extend( {}, defaults, options) ;
        this._defaults  = defaults;
        this._name      = pluginName;

        this.init();
    }

    //Init
    Plugin.prototype.init = function () {

        var e       = $( this.element );
        var opts    = this.options;
        var toggleThis = $(e.attr('data-toggle-this'));
        var $animationType = $(e).attr('data-toggle-animation');

        e.on( "click" , function(event) {
            var evt = $(this);
            event.preventDefault();

            if( $animationType === "slide" ) {
              if(evt.hasClass("is-active")) {
                  toggleThis.slideUp();
                  evt.removeClass("is-active");
              } else {
                  toggleThis.slideDown();
                  evt.addClass("is-active");
              }
            } else {
              if(evt.hasClass("is-active")) {
                  toggleThis.hide();
                  evt.removeClass("is-active");
              } else {
                  toggleThis.show();
                  evt.addClass("is-active");
              }
            }

        } );

    };

    // Plugin wrapped ctor
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                new Plugin( this, options ));
            }
        });
    }

}(jQuery));

$( ".js-toggle-display" ).toggleDisplay();


$(function() {
    //$( ".js-carousel--fullwidth" ).carourselFullWidth();
});
/** Abstract base class for collection plugins v1.0.1.
 Written by Keith Wood (kbwood{at}iinet.com.au) December 2013.
 Licensed under the MIT (http://keith-wood.name/licence.html) license. */
(function(){var j=false;window.JQClass=function(){};JQClass.classes={};JQClass.extend=function extender(f){var g=this.prototype;j=true;var h=new this();j=false;for(var i in f){h[i]=typeof f[i]=='function'&&typeof g[i]=='function'?(function(d,e){return function(){var b=this._super;this._super=function(a){return g[d].apply(this,a||[])};var c=e.apply(this,arguments);this._super=b;return c}})(i,f[i]):f[i]}function JQClass(){if(!j&&this._init){this._init.apply(this,arguments)}}JQClass.prototype=h;JQClass.prototype.constructor=JQClass;JQClass.extend=extender;return JQClass}})();(function($){JQClass.classes.JQPlugin=JQClass.extend({name:'plugin',defaultOptions:{},regionalOptions:{},_getters:[],_getMarker:function(){return'is-'+this.name},_init:function(){$.extend(this.defaultOptions,(this.regionalOptions&&this.regionalOptions[''])||{});var c=camelCase(this.name);$[c]=this;$.fn[c]=function(a){var b=Array.prototype.slice.call(arguments,1);if($[c]._isNotChained(a,b)){return $[c][a].apply($[c],[this[0]].concat(b))}return this.each(function(){if(typeof a==='string'){if(a[0]==='_'||!$[c][a]){throw'Unknown method: '+a;}$[c][a].apply($[c],[this].concat(b))}else{$[c]._attach(this,a)}})}},setDefaults:function(a){$.extend(this.defaultOptions,a||{})},_isNotChained:function(a,b){if(a==='option'&&(b.length===0||(b.length===1&&typeof b[0]==='string'))){return true}return $.inArray(a,this._getters)>-1},_attach:function(a,b){a=$(a);if(a.hasClass(this._getMarker())){return}a.addClass(this._getMarker());b=$.extend({},this.defaultOptions,this._getMetadata(a),b||{});var c=$.extend({name:this.name,elem:a,options:b},this._instSettings(a,b));a.data(this.name,c);this._postAttach(a,c);this.option(a,b)},_instSettings:function(a,b){return{}},_postAttach:function(a,b){},_getMetadata:function(d){try{var f=d.data(this.name.toLowerCase())||'';f=f.replace(/'/g,'"');f=f.replace(/([a-zA-Z0-9]+):/g,function(a,b,i){var c=f.substring(0,i).match(/"/g);return(!c||c.length%2===0?'"'+b+'":':b+':')});f=$.parseJSON('{'+f+'}');for(var g in f){var h=f[g];if(typeof h==='string'&&h.match(/^new Date\((.*)\)$/)){f[g]=eval(h)}}return f}catch(e){return{}}},_getInst:function(a){return $(a).data(this.name)||{}},option:function(a,b,c){a=$(a);var d=a.data(this.name);if(!b||(typeof b==='string'&&c==null)){var e=(d||{}).options;return(e&&b?e[b]:e)}if(!a.hasClass(this._getMarker())){return}var e=b||{};if(typeof b==='string'){e={};e[b]=c}this._optionsChanged(a,d,e);$.extend(d.options,e)},_optionsChanged:function(a,b,c){},destroy:function(a){a=$(a);if(!a.hasClass(this._getMarker())){return}this._preDestroy(a,this._getInst(a));a.removeData(this.name).removeClass(this._getMarker())},_preDestroy:function(a,b){}});function camelCase(c){return c.replace(/-([a-z])/g,function(a,b){return b.toUpperCase()})}$.JQPlugin={createPlugin:function(a,b){if(typeof a==='object'){b=a;a='JQPlugin'}a=camelCase(a);var c=camelCase(b.name);JQClass.classes[c]=JQClass.classes[a].extend(b);new JQClass.classes[c]()}}})(jQuery);

/* http://keith-wood.name/maxlength.html
 Textarea Max Length for jQuery v2.0.1.
 Written by Keith Wood (kwood{at}iinet.com.au) May 2009.
 Licensed under the MIT (http://keith-wood.name/licence.html) license.
 Please attribute the author if you use it. */
(function($){var h='maxlength';$.JQPlugin.createPlugin({name:h,defaultOptions:{max:200,truncate:true,showFeedback:true,feedbackTarget:null,onFull:null},regionalOptions:{'':{feedbackText:'{r} characters remaining ({m} maximum)',overflowText:'{o} characters too many ({m} maximum)'}},_getters:['curLength'],_feedbackClass:h+'-feedback',_fullClass:h+'-full',_overflowClass:h+'-overflow',_disabledClass:h+'-disabled',_instSettings:function(a,b){return{feedbackTarget:$([])}},_postAttach:function(c,d){c.on('keypress.'+d.name,function(a){if(!d.options.truncate){return true}var b=String.fromCharCode(a.charCode==undefined?a.keyCode:a.charCode);return(a.ctrlKey||a.metaKey||b=='\u0000'||$(this).val().length<d.options.max)}).on('keyup.'+d.name+' paste.'+d.name+' cut.'+d.name,function(e){if(e.type==='keyup'){$.maxlength._checkLength(c)}else{setTimeout(function(){$.maxlength._checkLength(c)},1)}})},_optionsChanged:function(a,b,c){$.extend(b.options,c);if(b.feedbackTarget.length>0){if(b.hadFeedbackTarget){b.feedbackTarget.empty().val('').removeClass(this._feedbackClass+' '+this._fullClass+' '+this._overflowClass)}else{b.feedbackTarget.remove()}b.feedbackTarget=$([])}if(b.options.showFeedback){b.hadFeedbackTarget=!!b.options.feedbackTarget;if($.isFunction(b.options.feedbackTarget)){b.feedbackTarget=b.options.feedbackTarget.apply(a[0],[])}else if(b.options.feedbackTarget){b.feedbackTarget=$(b.options.feedbackTarget)}else{b.feedbackTarget=$('<span></span>').insertAfter(a)}b.feedbackTarget.addClass(this._feedbackClass)}a.off('mouseover.'+b.name+' focus.'+b.name+'mouseout.'+b.name+' blur.'+b.name);if(b.options.showFeedback=='active'){a.on('mouseover.'+b.name,function(){b.feedbackTarget.css('visibility','visible')}).on('mouseout.'+b.name,function(){if(!b.focussed){b.feedbackTarget.css('visibility','hidden')}}).on('focus.'+b.name,function(){b.focussed=true;b.feedbackTarget.css('visibility','visible')}).on('blur.'+b.name,function(){b.focussed=false;b.feedbackTarget.css('visibility','hidden')});b.feedbackTarget.css('visibility','hidden')}this._checkLength(a)},curLength:function(a){var b=this._getInst(a);var c=a.val();var d=c.replace(/\r\n/g,'~~').replace(/\n/g,'~~').length;return{used:d,remaining:b.options.max-d}},_checkLength:function(a){var b=this._getInst(a);var c=a.val();var d=c.replace(/\r\n/g,'~~').replace(/\n/g,'~~').length;a.toggleClass(this._fullClass,d>=b.options.max).toggleClass(this._overflowClass,d>b.options.max);if(d>b.options.max&&b.options.truncate){var f=a.val().split(/\r\n|\n/);c='';var i=0;while(c.length<b.options.max&&i<f.length){c+=f[i].substring(0,b.options.max-c.length)+'\r\n';i++}a.val(c.substring(0,b.options.max));a[0].scrollTop=a[0].scrollHeight;d=b.options.max}b.feedbackTarget.toggleClass(this._fullClass,d>=b.options.max).toggleClass(this._overflowClass,d>b.options.max);var g=(d>b.options.max?b.options.overflowText:b.options.feedbackText).replace(/\{c\}/,d).replace(/\{m\}/,b.options.max).replace(/\{r\}/,b.options.max-d).replace(/\{o\}/,d-b.options.max);try{b.feedbackTarget.text(g)}catch(e){}try{b.feedbackTarget.val(g)}catch(e){}if(d>=b.options.max&&$.isFunction(b.options.onFull)){b.options.onFull.apply(a,[d>b.options.max])}},enable:function(a){a=$(a);if(!a.hasClass(this._getMarker())){return}var b=this._getInst(a);a.prop('disabled',false).removeClass(b.name+'-disabled');b.feedbackTarget.removeClass(b.name+'-disabled')},disable:function(a){a=$(a);if(!a.hasClass(this._getMarker())){return}var b=this._getInst(a);a.prop('disabled',true).addClass(b.name+'-disabled');b.feedbackTarget.addClass(b.name+'-disabled')},_preDestroy:function(a,b){if(b.feedbackTarget.length>0){if(b.hadFeedbackTarget){b.feedbackTarget.empty().val('').css('visibility','visible').removeClass(this._feedbackClass+' '+this._fullClass+' '+this._overflowClass)}else{b.feedbackTarget.remove()}}a.removeClass(this._fullClass+' '+this._overflowClass).off('.'+b.name)}})})(jQuery);
function nameInputRestrict(event) {
	  var key = event.keyCode || event.charCode || 0;
	  //return ((key >= 65 && key <= 90) || key == 8 || key == 32 || key == 37 || key == 39 || key == 46 || key == 9);
	  return true;
};

$(function(){
    //app download popup
    $('.app-download-sms-link').click(function(e){
        e.preventDefault();
        var deviceType = $(this).data('deviceType');
        $.modal({
            url : "/r/dialog/AppDownload.jsp?deviceType=" + $(this).data('deviceType'),
            triggerOpen: true,
            type: "small",
            returnFocus: '#' + deviceType,
            onComplete : function(){
                $(".app-download-form:visible").submit(function(e){
                    e.preventDefault();
                    var inputField = $(".sms_phone_num:visible");
                    var number = inputField.val();
                    if(!hasValidPhoneNum(number)){
                        inputField.find("#js-telephone-input").addClass("is-error");
                        inputField.siblings('.sms_phone_num_error').show();
                        return;
                    }else{
                        inputField.find("#js-telephone-input").removeClass("is-error");
                        inputField.siblings('.sms_phone_num_error').hide();
                    }
                    var data = $.param({
                        phoneNum : number,
                        deviceType : deviceType
                    });
                    $('.send-sms:visible').prop("disabled","disabled");
                    $.post("/r/ajax/SendAppDownloadSMS.jsp", data, function(data){
                        $.modal({
                            url: "/r/dialog/AppDownloadConfirmation.jsp",
                            triggerOpen: true,
                            type: "small"
                        });
                    })

                });

                $(".sms_phone_num:visible").on("input", function(e){
                      if(hasValidPhoneNum($(this).val())){
                        $(this).find("#js-telephone-input").removeClass("is-error");
                    } else{
                        $(this).find("#js-telephone-input").addClass("is-error");
                    }
                });
                function hasValidPhoneNum(number){
                    return /^\+?\d+$/.test(number.replace(/[()-]/g, ''));
                }
            }
        });
    });
});

// Remove This
 $(function(){
   $(".js-remove").on("click", function(){
     var $self = $(this);
     var $removeThis = "";
     var dataParent = $self.attr("data-remove-parent");
     var dataThis = $self.attr("data-remove-this");

     if(dataParent) $removeThis = $self.closest(dataParent);
     else if(dataThis) $remove = $(dataThis);

     $removeThis.remove();
   });
 });

 //address form validation
function addressFormHasErrors(country){
    var hasError = false;
    var errorClass = "is-error";
    var ariaIvalid = "aria-invalid";
    var selectErrorClass = "errortextbox";
    // Add required keydown handler once the user has had a chance to input values
    var isFieldVisible = function (field) {
        if(field.length === 0 || !field.is(':visible') || field.css('visibility') === 'hidden'){
            return false;
        }else{
            return true;
        }
    };

    $('[required]:visible').each(function(index){
        if(!isFieldVisible($(this))) {
            return;
        }

        var fieldValue = $(this).val();
        var isSelect = $(this).is('select');
        if (fieldValue == null || ($.trim(fieldValue)).length == 0){
            $(this).closest('.field').addClass(errorClass);
            $(this).attr(ariaIvalid, true);
			if(isSelect){
                $(this).closest('.field').addClass(errorClass);
                $(this).attr(ariaIvalid, true);
			}
            hasError = true;
        }else{
            $(this).closest('.field').removeClass(errorClass);
            $(this).attr(ariaIvalid, false);
            if(isSelect){
                $(this).closest('.field').removeClass(errorClass);
                $(this).attr(ariaIvalid, false);
            }
		}

        if ($(this).attr("name") === "shippingName" || $(this).attr("name") === "billingName"){
            var element = $(this);
            var nameInputText = element.val();
            if(nameInputText) element.val(nameInputText.trim().replace(/\s\s+/g, ' ') );
        }

        if ($(this).attr("name") === "shippingName" &&
            country != 'China' &&
//				country != 'Japan' &&
            country != 'South Korea') {
            var fullName = $(this).val().split(" ");
            if(!fullName[1] || fieldValue == null || ($.trim(fieldValue)).length == 0 ) {
                $(this).closest('.field').addClass(errorClass);
                $(this).attr(ariaIvalid, true);
                hasError = true;
            } else {
                $(this).closest('.field').removeClass(errorClass);
                $(this).attr(ariaIvalid, false);
            }
        }

        if ($(this).attr("name") === "shippingName" || $(this).attr("name") === "billingName"){
            $(this).on("blur", function() {
                var element = $(this);
                var nameInputText = element.val();
                if(nameInputText) element.val(nameInputText.trim().replace(/\s\s+/g, ' ') );

                if (element.attr("name") === "shippingName" &&
                    country != 'China' &&
                    country != 'South Korea') {
                    var fullName2 = element.val().split(" ");
                    if(!fullName2[1]) {
                        element.closest('.field').addClass(errorClass);
                        $(this).attr(ariaIvalid, true);
                    } else {
                        element.closest('.field').removeClass(errorClass);
                        $(this).attr(ariaIvalid, false);
                    }
                }
            });
        }

        if (country == 'China' && ($(this).attr("name") === "shippingName" || $(this).attr("name") === "shippingStreet"  || $(this).attr("name") === "shippingCity" )){
            if (!/[\u4E00-\uFA6D]/.test($(this).val())){
                $(this).closest('.field').addClass(errorClass);
                $(this).attr(ariaIvalid, true);
                hasError = true;
            }
        }

        if (country == 'China' && $(this).attr("name") === "shippingTelephone" ){
            if ($(this).val().length != 11){
                $(this).closest('.field').addClass(errorClass);
                $(this).attr(ariaIvalid, true);
                hasError = true;
            }
        }

        $(this).keyup(function (){
            var element = $(this);
            if (element.val()){
                element.closest('.field').removeClass(errorClass);
                $(this).attr(ariaIvalid, false);
            }

            // if (element.attr("name") === "shippingName" &&
            //     country != 'China' &&
            //     country != 'South Korea') {
            //     var fullName2 = element.val().split(" ");
            //     if(!fullName2[1]) {
            //         element.closest('.field').addClass(errorClass);
            //         $(this).attr(ariaIvalid, true);
            //     } else {
            //         element.closest('.field').removeClass(errorClass);
            //         $(this).attr(ariaIvalid, false);
            //     }
            // }
        });
        if(isSelect){
            $(this).change(function(){
                var element = $(this);
                if (element.val()){
                    element.closest('.field').removeClass(errorClass);
                    $(this).attr(ariaIvalid, false);
                }
			})
		}

    });
    //us zipcode mapping
    var zipcodeVisible = false;
    $('.js-us-zipcode-mapping').each(function(){
      if (isFieldVisible($(this))){
        zipcodeVisible = true;
        return false;  // breaks out of .each()
      }
    });
    if(zipcodeVisible){
      var usZipField = $('.js-us-zipcode-mapping:visible');
      var zipcode = usZipField.val();
      if(!/^[0-9]{5}(?:-[0-9]{4})?$/.test(zipcode)){
        usZipField.closest('.field').addClass(errorClass);
        $(this).attr(ariaIvalid, true);
        hasError = true;
      }else{
        usZipField.closest('.field').removeClass(errorClass);
        $(this).attr(ariaIvalid, false);
      }
    }

    if($('.zipcheck').length && $('.zipcheck').is(":visible")){
    	var hasZipError = false;
        $('.zipcheck:visible').each(function() {
            if(!isFieldVisible($(this))){
                return;
            }
            var testzipcode =$(this).val();
            var maxlength = $(this).attr('maxlength');
            if(maxlength != testzipcode.length || /\D/.test(testzipcode) || hasZipError){
                $('.ziperrormsg').show();
                $(this).closest('.field').addClass(errorClass);
                $(this).attr(ariaIvalid, true);
                hasError = true;
                hasZipError = true;
            }else{
                $('.ziperrormsg').hide();
                $(this).closest('.field').removeClass(errorClass);
                $(this).attr(ariaIvalid, false);
            }
        });
    }

    if (typeof zipCheckEU == 'function'){
        hasError = zipCheckEU(country, errorClass, ariaIvalid) || hasError;
    }

    if($('.zipcheck_jp').length && $('.zipcheck_jp').is(":visible")){
        var pattern = /(^\d{3}-\d{4,}$)/;
        $('.zipcheck_jp:visible').each(function() {
            if(!isFieldVisible($(this))){
                return;
            }
            var testzipcode =$(this).val();
            if(!pattern.test(testzipcode)){
                $(this).closest('.field').addClass(errorClass);
                $(this).attr(ariaIvalid, true);
                hasError = true;
            }else{
                $(this).closest('.field').removeClass(errorClass);
                $(this).attr(ariaIvalid, false);
            }
        });
    }


    if($('.zipcheck_bz').length && $('.zipcheck_bz').is(":visible")){
    	var pattern = /(^\d{5}$)|(^\d{5}-\d{3}$)/;
        var hasZipError = false;
        $('.zipcheck_bz:visible').each(function() {
            if(!isFieldVisible($(this))){
                return;
            }
            var testzipcode =$(this).val();
            if(testzipcode == '' || pattern.test(testzipcode)) {
                $(this).closest('.field').removeClass(errorClass);
			}else{
                $(this).closest('.field').addClass(errorClass);
                hasError = true;
			}
            $(this).keyup(function(){
                var testzipcode =$(this).val();
                if(testzipcode == '' || pattern.test(testzipcode)) {
                    $(this).closest('.field').removeClass(errorClass);
                    $(this).attr(ariaIvalid, false);
                }else{
                    $(this).closest('.field').addClass(errorClass);
                    $(this).attr(ariaIvalid, true);
                }
			})
        });
    }

    if ($('.dateofbirth').length && $('.dateofbirth').is(":visible")){
        $('.dateofbirth:visible').each(function() {
            if(!isFieldVisible($(this))){
                return;
            }
            var pattern = /^(0[1-9]|[1-9]|1[0-9]|2[0-9]|3[0-1])\/(1[0-2]|[1-9]|0[1-9])\/((20|19)([0-9]{2}))/;
            var testdob =$(this).val();
            var maxlength = $(this).attr('maxlength');
            if(maxlength < testdob.length || !pattern.test(testdob)){
                $('.dobBrazil').show();
                $(this).closest('.field').addClass(errorClass);
                $(this).attr(ariaIvalid, true);
                hasError = true;
            }else{
                $('.dobBrazil').hide();
                $(this).closest('.field').removeClass(errorClass);
                $(this).attr(ariaIvalid, false);
            }
        });
    }
    if ($('.phone_bz').length && $('.phone_bz').is(":visible")){
        $('.phone_bz:visible').each(function() {
            if(!isFieldVisible($(this))){
                return;
            }
            var pattern = /^\+?[0-9]{8,15}$/;
            var testdob =$(this).val();
            var maxlength = $(this).attr('maxlength');
            if(maxlength < testdob.length || !pattern.test(testdob)){
                $('.phoneBrazil').show();
                $(this).closest('.field').addClass(errorClass);
                $(this).attr(ariaIvalid, true);
                hasError = true;
            }else{
                $('.phoneBrazil').hide();
                $(this).closest('.field').removeClass(errorClass);
                $(this).attr(ariaIvalid, false);
            }
        });
    }
    if ($('.cpf').length && $('.cpf').is(":visible")){
        $('.cpf:visible').each(function() {
            if(!isFieldVisible($(this))){
                return;
            }
            var cpf = $.trim($(this).val());
            invalid = false;
            if (cpf.length != 11 ||
                cpf == "00000000000" ||
                cpf == "11111111111" ||
                cpf == "22222222222" ||
                cpf == "33333333333" ||
                cpf == "44444444444" ||
                cpf == "55555555555" ||
                cpf == "66666666666" ||
                cpf == "77777777777" ||
                cpf == "88888888888" ||
                cpf == "99999999999") {
                invalid = true;
            }
            if (!invalid) {
                add = 0;
                for (i = 0; i < 9; i++)
                    add += parseInt(cpf.charAt(i)) * (10 - i);
                rev = 11 - (add % 11);
                if (rev == 10 || rev == 11)
                    rev = 0;
                if (rev != parseInt(cpf.charAt(9)))
                    invalid = true;
            } else if (!invalid) {
                // Valida 2o digito
                add = 0;
                for (i = 0; i < 10; i++)
                    add += parseInt(cpf.charAt(i)) * (11 - i);
                rev = 11 - (add % 11);
                if (rev == 10 || rev == 11)
                    rev = 0;
                if (rev != parseInt(cpf.charAt(10)))
                    invalid = true;
            }

            if (invalid) {
                $('.cpfBrazil').show();
                $(this).closest('.field').addClass(errorClass);
                $(this).attr(ariaIvalid, true);
                hasError = true;
            } else  {
                $('.cpfBrazil').hide();
                $(this).closest('.field').removeClass(errorClass);
                $(this).attr(ariaIvalid, false);
            }
        });
    }
    if ($('.dniField').length && $('.dniField').is(":visible")){
        $('.dniField:visible').each(function() {
            if(!isFieldVisible($(this))){
                return;
            }
            var testdni = $.trim($(this).val());
            var pattern = /^\s*\d+\s*$/; // all numeric, clean spaces in Java
            var countrycode = $(this).data('countrycode');
            var error = false;
            if (countrycode == 'ar') {
                if((testdni.length > 11 || testdni.length < 7) || !pattern.test(testdni)) {
                    error = true;
                }
            } else if ( countrycode == 'pe') {
                if ((testdni.length > 9 || testdni.length < 8) || !pattern.test(testdni)) {
                    error = true;
                }
            } else if (countrycode == 'cl') {
                pattern = /^\w+$/; // alphanumeric for Chili
                if ((testdni.length > 9 || testdni.length < 8) || !pattern.test(testdni)) {
                    error = true;
                }
            } else if (countrycode == 'co') {
                if ((testdni.length > 10 || testdni.length < 6) || !pattern.test(testdni)) {
                    error = true;
                }
            } else if (countrycode == 'uy') {
                if ((testdni.length > 8 || testdni.length < 6) || !pattern.test(testdni)) {
                    error = true;
                }
            }
            if (error) {
                $('.dni').show();
                $(this).closest('.field').addClass(errorClass);
                $(this).attr(ariaIvalid, true);
                hasError = true;
            } else {
                $('.dni').hide();
                $(this).closest('.field').removeClass(errorClass);
                $(this).attr(ariaIvalid, false);
            }
        });
    }


    if($('#create-checkbox').is(':checked')){
        var pw = $('#create_password').val();
        var verifypw = $('#create_password2').val();
        if(pw != verifypw){
            $('#create_password2').closest('.field').addClass(errorClass);
            $('#create_password2').attr(ariaIvalid, true);
            hasError = true;
		}
	}

    focusOnError();
    return hasError;
}

function focusOnError() {
    var firstError = $(".is-error:visible").eq(0);
    if(firstError.length) {
        // $('html,body').animate({
        //     scrollTop: firstError.offset().top - 40
        // });
        var inputField = firstError.find("input:visible").eq(0);
        if(inputField.length){
            inputField.focus();
        }else{
            firstError.find("select").eq(0).focus();
        }
    }

}

// https://stackoverflow.com/a/5298684
function removeHash (url) {
    var scrollV, scrollH, loc = window.location;
    if ("pushState" in history) {
        var urlWithoutHash = url ? url.replace('#', '') : loc.pathname + loc.search; // Last ditch effort to remove hash
        history.pushState("", document.title, urlWithoutHash);
    } else {
        // Prevent scrolling by storing the page's current scroll offset
        scrollV = document.body.scrollTop;
        scrollH = document.body.scrollLeft;

        loc.hash = "";

        // Restore the scroll offset, should be flicker free
        document.body.scrollTop = scrollV;
        document.body.scrollLeft = scrollH;
    }
}
