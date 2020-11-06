!function(){for(var e,t=function(){},n=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],i=n.length,a=window.console=window.console||{};i--;)e=n[i],a[e]||(a[e]=t)}(),function(e){"use strict";function t(t,a){this.settings=e.extend({},i,a),this.modal=t,this.buildDOM(),this.addEventListeners(),this.index=e[n].lookup.push(this)-1,this.busy=!1}var n="remodal",i={hashTracking:!1,closeOnConfirm:!0,closeOnCancel:!0};e[n]={lookup:[]};var a,s,o=function(e){var t=e.css("transition-duration")||e.css("-webkit-transition-duration")||e.css("-moz-transition-duration")||e.css("-o-transition-duration")||e.css("-ms-transition-duration")||0,n=e.css("transition-delay")||e.css("-webkit-transition-delay")||e.css("-moz-transition-delay")||e.css("-o-transition-delay")||e.css("-ms-transition-delay")||0;return 1e3*(parseFloat(t)+parseFloat(n))},r=function(){if(e(document.body).height()<=e(window).height())return 0;var t=document.createElement("div");t.style.visibility="hidden",t.style.width="100px",document.body.appendChild(t);var n=t.offsetWidth;t.style.overflow="scroll";var i=document.createElement("div");i.style.width="100%",t.appendChild(i);var a=i.offsetWidth;return t.parentNode.removeChild(t),n-a},l=function(){e("html, body").addClass(n+"_lock"),e(document.body).css("padding-right","+="+r())},c=function(){e("html, body").removeClass(n+"_lock"),e(document.body).css("padding-right",0)};t.prototype.buildDOM=function(){this.body=e(document.body),this.bg=e("."+n+"-bg"),this.modalClose=e("<a href='#'>").addClass(n+"-close"),this.overlay=e("<div>").addClass(n+"-overlay"),this.modal.hasClass(n)||this.modal.addClass(n),this.modal.css("visibility","visible"),this.modal.append(this.modalClose),this.overlay.append(this.modal),this.body.append(this.overlay),this.confirm=this.modal.find("."+n+"-confirm"),this.cancel=this.modal.find("."+n+"-cancel");var t=o(this.overlay),i=o(this.modal),a=o(this.bg);this.td=i>t?i:t,this.td=a>this.td?a:this.td},t.prototype.addEventListeners=function(){var t=this;this.modalClose.bind("click."+n,function(e){e.preventDefault(),t.close()}),this.cancel.bind("click."+n,function(e){e.preventDefault(),t.modal.trigger("cancel"),t.settings.closeOnCancel&&t.close()}),this.confirm.bind("click."+n,function(e){e.preventDefault(),t.modal.trigger("confirm"),t.settings.closeOnConfirm&&t.close()}),e(document).bind("keyup."+n,function(e){27===e.keyCode&&t.close()}),this.overlay.bind("click."+n,function(i){var a=e(i.target);a.hasClass(n+"-overlay")&&t.close()})},t.prototype.open=function(){if(!this.busy){this.busy=!0,this.modal.trigger("open");var t=this.modal.attr("data-"+n+"-id");t&&this.settings.hashTracking&&(s=e(window).scrollTop(),location.hash=t),a&&a!==this&&(a.overlay.hide(),a.body.removeClass(n+"_active")),a=this,l(),this.overlay.show();var i=this;setTimeout(function(){i.body.addClass(n+"_active"),setTimeout(function(){i.busy=!1,i.modal.trigger("opened")},i.td+50)},25)}},t.prototype.close=function(){if(!this.busy){this.busy=!0,this.modal.trigger("close"),this.settings.hashTracking&&this.modal.attr("data-"+n+"-id")===location.hash.substr(1)&&(location.hash="",e(window).scrollTop(s)),this.body.removeClass(n+"_active");var t=this;setTimeout(function(){t.overlay.hide(),c(),t.busy=!1,t.modal.trigger("closed")},t.td+50)}},e&&(e.fn[n]=function(i){var a;return this.each(function(s,o){var r=e(o);null==r.data(n)&&(a=new t(r,i),r.data(n,a.index),a.settings.hashTracking&&r.attr("data-"+n+"-id")===location.hash.substr(1)&&a.open())}),a}),e(document).ready(function(){e(document).on("click","[data-"+n+"-target]",function(t){t.preventDefault();var i=t.currentTarget,a=i.getAttribute("data-"+n+"-target"),s=e("[data-"+n+"-id="+a+"]");e[n].lookup[s.data(n)].open()}),e(document).find("."+n).each(function(t,i){var a=e(i),s=a.data(n+"-options");s||(s={}),a[n](s)})});var d=function(t,i){var s=location.hash.replace("#","");if("undefined"==typeof i&&(i=!0),s){var o;try{o=e("[data-"+n+"-id="+s.replace(new RegExp("/","g"),"\\/")+"]")}catch(t){}if(o&&o.length){var r=e[n].lookup[o.data(n)];r&&r.settings.hashTracking&&r.open()}}else i&&a&&!a.busy&&a.settings.hashTracking&&a.close()};e(window).bind("hashchange."+n,d)}(window.jQuery||window.Zepto),function(e){e.flexslider=function(t,n){var i=e(t);i.vars=e.extend({},e.flexslider.defaults,n);var a,s=i.vars.namespace,o=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,r=("ontouchstart"in window||o||window.DocumentTouch&&document instanceof DocumentTouch)&&i.vars.touch,l="click touchend MSPointerUp keyup",c="",d="vertical"===i.vars.direction,u=i.vars.reverse,v=i.vars.itemWidth>0,p="fade"===i.vars.animation,m=""!==i.vars.asNavFor,f={},h=!0;e.data(t,"flexslider",i),f={init:function(){i.animating=!1,i.currentSlide=parseInt(i.vars.startAt?i.vars.startAt:0,10),isNaN(i.currentSlide)&&(i.currentSlide=0),i.animatingTo=i.currentSlide,i.atEnd=0===i.currentSlide||i.currentSlide===i.last,i.containerSelector=i.vars.selector.substr(0,i.vars.selector.search(" ")),i.slides=e(i.vars.selector,i),i.container=e(i.containerSelector,i),i.count=i.slides.length,i.syncExists=e(i.vars.sync).length>0,"slide"===i.vars.animation&&(i.vars.animation="swing"),i.prop=d?"top":"marginLeft",i.args={},i.manualPause=!1,i.stopped=!1,i.started=!1,i.startTimeout=null,i.transitions=!i.vars.video&&!p&&i.vars.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var n in t)if(void 0!==e.style[t[n]])return i.pfx=t[n].replace("Perspective","").toLowerCase(),i.prop="-"+i.pfx+"-transform",!0;return!1}(),i.ensureAnimationEnd="",""!==i.vars.controlsContainer&&(i.controlsContainer=e(i.vars.controlsContainer).length>0&&e(i.vars.controlsContainer)),""!==i.vars.manualControls&&(i.manualControls=e(i.vars.manualControls).length>0&&e(i.vars.manualControls)),i.vars.randomize&&(i.slides.sort(function(){return Math.round(Math.random())-.5}),i.container.empty().append(i.slides)),i.doMath(),i.setup("init"),i.vars.controlNav&&f.controlNav.setup(),i.vars.directionNav&&f.directionNav.setup(),i.vars.keyboard&&(1===e(i.containerSelector).length||i.vars.multipleKeyboard)&&e(document).bind("keyup",function(e){var t=e.keyCode;if(!i.animating&&(39===t||37===t)){var n=39===t?i.getTarget("next"):37===t?i.getTarget("prev"):!1;i.flexAnimate(n,i.vars.pauseOnAction)}}),i.vars.mousewheel&&i.bind("mousewheel",function(e,t){e.preventDefault();var n=i.getTarget(0>t?"next":"prev");i.flexAnimate(n,i.vars.pauseOnAction)}),i.vars.pausePlay&&f.pausePlay.setup(),i.vars.slideshow&&i.vars.pauseInvisible&&f.pauseInvisible.init(),i.vars.slideshow&&(i.vars.pauseOnHover&&i.hover(function(){i.manualPlay||i.manualPause||i.pause()},function(){i.manualPause||i.manualPlay||i.stopped||i.play()}),i.vars.pauseInvisible&&f.pauseInvisible.isHidden()||(i.vars.initDelay>0?i.startTimeout=setTimeout(i.play,i.vars.initDelay):i.play())),m&&f.asNav.setup(),r&&i.vars.touch&&f.touch(),(!p||p&&i.vars.smoothHeight)&&e(window).bind("resize orientationchange focus",f.resize),i.find("img").attr("draggable","false"),setTimeout(function(){i.vars.start(i)},200)},asNav:{setup:function(){i.asNav=!0,i.animatingTo=Math.floor(i.currentSlide/i.move),i.currentItem=i.currentSlide,i.slides.removeClass(s+"active-slide").eq(i.currentItem).addClass(s+"active-slide"),o?(t._slider=i,i.slides.each(function(){var t=this;t._gesture=new MSGesture,t._gesture.target=t,t.addEventListener("MSPointerDown",function(e){e.preventDefault(),e.currentTarget._gesture&&e.currentTarget._gesture.addPointer(e.pointerId)},!1),t.addEventListener("MSGestureTap",function(t){t.preventDefault();var n=e(this),a=n.index();e(i.vars.asNavFor).data("flexslider").animating||n.hasClass("active")||(i.direction=i.currentItem<a?"next":"prev",i.flexAnimate(a,i.vars.pauseOnAction,!1,!0,!0))})})):i.slides.on(l,function(t){t.preventDefault();var n=e(this),a=n.index(),o=n.offset().left-e(i).scrollLeft();0>=o&&n.hasClass(s+"active-slide")?i.flexAnimate(i.getTarget("prev"),!0):e(i.vars.asNavFor).data("flexslider").animating||n.hasClass(s+"active-slide")||(i.direction=i.currentItem<a?"next":"prev",i.flexAnimate(a,i.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){i.manualControls?f.controlNav.setupManual():f.controlNav.setupPaging()},setupPaging:function(){var t,n,a="thumbnails"===i.vars.controlNav?"control-thumbs":"control-paging",o=1;if(i.controlNavScaffold=e('<ol class="'+s+"control-nav "+s+a+'"></ol>'),i.pagingCount>1)for(var r=0;r<i.pagingCount;r++){if(n=i.slides.eq(r),t="thumbnails"===i.vars.controlNav?'<img src="'+n.attr("data-thumb")+'"/>':"<a>"+o+"</a>","thumbnails"===i.vars.controlNav&&!0===i.vars.thumbCaptions){var d=n.attr("data-thumbcaption");""!=d&&void 0!=d&&(t+='<span class="'+s+'caption">'+d+"</span>")}i.controlNavScaffold.append("<li>"+t+"</li>"),o++}i.controlsContainer?e(i.controlsContainer).append(i.controlNavScaffold):i.append(i.controlNavScaffold),f.controlNav.set(),f.controlNav.active(),i.controlNavScaffold.delegate("a, img",l,function(t){if(t.preventDefault(),""===c||c===t.type){var n=e(this),a=i.controlNav.index(n);n.hasClass(s+"active")||(i.direction=a>i.currentSlide?"next":"prev",i.flexAnimate(a,i.vars.pauseOnAction))}""===c&&(c=t.type),f.setToClearWatchedEvent()})},setupManual:function(){i.controlNav=i.manualControls,f.controlNav.active(),i.controlNav.bind(l,function(t){if(t.preventDefault(),""===c||c===t.type){var n=e(this),a=i.controlNav.index(n);n.hasClass(s+"active")||(i.direction=a>i.currentSlide?"next":"prev",i.flexAnimate(a,i.vars.pauseOnAction))}""===c&&(c=t.type),f.setToClearWatchedEvent()})},set:function(){var t="thumbnails"===i.vars.controlNav?"img":"a";i.controlNav=e("."+s+"control-nav li "+t,i.controlsContainer?i.controlsContainer:i)},active:function(){i.controlNav.removeClass(s+"active").eq(i.animatingTo).addClass(s+"active")},update:function(t,n){i.pagingCount>1&&"add"===t?i.controlNavScaffold.append(e("<li><a>"+i.count+"</a></li>")):1===i.pagingCount?i.controlNavScaffold.find("li").remove():i.controlNav.eq(n).closest("li").remove(),f.controlNav.set(),i.pagingCount>1&&i.pagingCount!==i.controlNav.length?i.update(n,t):f.controlNav.active()}},directionNav:{setup:function(){var t=e('<ul class="'+s+'direction-nav"><li><a class="'+s+'prev" href="#">'+i.vars.prevText+'</a></li><li><a class="'+s+'next" href="#">'+i.vars.nextText+"</a></li></ul>");i.controlsContainer?(e(i.controlsContainer).append(t),i.directionNav=e("."+s+"direction-nav li a",i.controlsContainer)):(i.append(t),i.directionNav=e("."+s+"direction-nav li a",i)),f.directionNav.update(),i.directionNav.bind(l,function(t){t.preventDefault();var n;(""===c||c===t.type)&&(n=i.getTarget(e(this).hasClass(s+"next")?"next":"prev"),i.flexAnimate(n,i.vars.pauseOnAction)),""===c&&(c=t.type),f.setToClearWatchedEvent()})},update:function(){var e=s+"disabled";1===i.pagingCount?i.directionNav.addClass(e).attr("tabindex","-1"):i.vars.animationLoop?i.directionNav.removeClass(e).removeAttr("tabindex"):0===i.animatingTo?i.directionNav.removeClass(e).filter("."+s+"prev").addClass(e).attr("tabindex","-1"):i.animatingTo===i.last?i.directionNav.removeClass(e).filter("."+s+"next").addClass(e).attr("tabindex","-1"):i.directionNav.removeClass(e).removeAttr("tabindex")}},pausePlay:{setup:function(){var t=e('<div class="'+s+'pauseplay"><a></a></div>');i.controlsContainer?(i.controlsContainer.append(t),i.pausePlay=e("."+s+"pauseplay a",i.controlsContainer)):(i.append(t),i.pausePlay=e("."+s+"pauseplay a",i)),f.pausePlay.update(i.vars.slideshow?s+"pause":s+"play"),i.pausePlay.bind(l,function(t){t.preventDefault(),(""===c||c===t.type)&&(e(this).hasClass(s+"pause")?(i.manualPause=!0,i.manualPlay=!1,i.pause()):(i.manualPause=!1,i.manualPlay=!0,i.play())),""===c&&(c=t.type),f.setToClearWatchedEvent()})},update:function(e){"play"===e?i.pausePlay.removeClass(s+"pause").addClass(s+"play").html(i.vars.playText):i.pausePlay.removeClass(s+"play").addClass(s+"pause").html(i.vars.pauseText)}},touch:function(){function e(e){i.animating?e.preventDefault():(window.navigator.msPointerEnabled||1===e.touches.length)&&(i.pause(),h=d?i.h:i.w,y=Number(new Date),w=e.touches[0].pageX,S=e.touches[0].pageY,f=v&&u&&i.animatingTo===i.last?0:v&&u?i.limit-(i.itemW+i.vars.itemMargin)*i.move*i.animatingTo:v&&i.currentSlide===i.last?i.limit:v?(i.itemW+i.vars.itemMargin)*i.move*i.currentSlide:u?(i.last-i.currentSlide+i.cloneOffset)*h:(i.currentSlide+i.cloneOffset)*h,c=d?S:w,m=d?w:S,t.addEventListener("touchmove",n,!1),t.addEventListener("touchend",a,!1))}function n(e){w=e.touches[0].pageX,S=e.touches[0].pageY,g=d?c-S:c-w,b=d?Math.abs(g)<Math.abs(w-m):Math.abs(g)<Math.abs(S-m);var t=500;(!b||Number(new Date)-y>t)&&(e.preventDefault(),!p&&i.transitions&&(i.vars.animationLoop||(g/=0===i.currentSlide&&0>g||i.currentSlide===i.last&&g>0?Math.abs(g)/h+2:1),i.setProps(f+g,"setTouch")))}function a(){if(t.removeEventListener("touchmove",n,!1),i.animatingTo===i.currentSlide&&!b&&null!==g){var e=u?-g:g,s=i.getTarget(e>0?"next":"prev");i.canAdvance(s)&&(Number(new Date)-y<550&&Math.abs(e)>50||Math.abs(e)>h/2)?i.flexAnimate(s,i.vars.pauseOnAction):p||i.flexAnimate(i.currentSlide,i.vars.pauseOnAction,!0)}t.removeEventListener("touchend",a,!1),c=null,m=null,g=null,f=null}function s(e){e.stopPropagation(),i.animating?e.preventDefault():(i.pause(),t._gesture.addPointer(e.pointerId),x=0,h=d?i.h:i.w,y=Number(new Date),f=v&&u&&i.animatingTo===i.last?0:v&&u?i.limit-(i.itemW+i.vars.itemMargin)*i.move*i.animatingTo:v&&i.currentSlide===i.last?i.limit:v?(i.itemW+i.vars.itemMargin)*i.move*i.currentSlide:u?(i.last-i.currentSlide+i.cloneOffset)*h:(i.currentSlide+i.cloneOffset)*h)}function r(e){e.stopPropagation();var n=e.target._slider;if(n){var i=-e.translationX,a=-e.translationY;return x+=d?a:i,g=x,b=d?Math.abs(x)<Math.abs(-i):Math.abs(x)<Math.abs(-a),e.detail===e.MSGESTURE_FLAG_INERTIA?void setImmediate(function(){t._gesture.stop()}):void((!b||Number(new Date)-y>500)&&(e.preventDefault(),!p&&n.transitions&&(n.vars.animationLoop||(g=x/(0===n.currentSlide&&0>x||n.currentSlide===n.last&&x>0?Math.abs(x)/h+2:1)),n.setProps(f+g,"setTouch"))))}}function l(e){e.stopPropagation();var t=e.target._slider;if(t){if(t.animatingTo===t.currentSlide&&!b&&null!==g){var n=u?-g:g,i=t.getTarget(n>0?"next":"prev");t.canAdvance(i)&&(Number(new Date)-y<550&&Math.abs(n)>50||Math.abs(n)>h/2)?t.flexAnimate(i,t.vars.pauseOnAction):p||t.flexAnimate(t.currentSlide,t.vars.pauseOnAction,!0)}c=null,m=null,g=null,f=null,x=0}}var c,m,f,h,g,y,b=!1,w=0,S=0,x=0;o?(t.style.msTouchAction="none",t._gesture=new MSGesture,t._gesture.target=t,t.addEventListener("MSPointerDown",s,!1),t._slider=i,t.addEventListener("MSGestureChange",r,!1),t.addEventListener("MSGestureEnd",l,!1)):t.addEventListener("touchstart",e,!1)},resize:function(){!i.animating&&i.is(":visible")&&(v||i.doMath(),p?f.smoothHeight():v?(i.slides.width(i.computedW),i.update(i.pagingCount),i.setProps()):d?(i.viewport.height(i.h),i.setProps(i.h,"setTotal")):(i.vars.smoothHeight&&f.smoothHeight(),i.newSlides.width(i.computedW),i.setProps(i.computedW,"setTotal")))},smoothHeight:function(e){if(!d||p){var t=p?i:i.viewport;e?t.animate({height:i.slides.eq(i.animatingTo).height()},e):t.height(i.slides.eq(i.animatingTo).height())}},sync:function(t){var n=e(i.vars.sync).data("flexslider"),a=i.animatingTo;switch(t){case"animate":n.flexAnimate(a,i.vars.pauseOnAction,!1,!0);break;case"play":n.playing||n.asNav||n.play();break;case"pause":n.pause()}},uniqueID:function(t){return t.filter("[id]").add(t.find("[id]")).each(function(){var t=e(this);t.attr("id",t.attr("id")+"_clone")}),t},pauseInvisible:{visProp:null,init:function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)e[t]+"Hidden"in document&&(f.pauseInvisible.visProp=e[t]+"Hidden");if(f.pauseInvisible.visProp){var n=f.pauseInvisible.visProp.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(n,function(){f.pauseInvisible.isHidden()?i.startTimeout?clearTimeout(i.startTimeout):i.pause():i.started?i.play():i.vars.initDelay>0?setTimeout(i.play,i.vars.initDelay):i.play()})}},isHidden:function(){return document[f.pauseInvisible.visProp]||!1}},setToClearWatchedEvent:function(){clearTimeout(a),a=setTimeout(function(){c=""},3e3)}},i.flexAnimate=function(t,n,a,o,l){if(i.vars.animationLoop||t===i.currentSlide||(i.direction=t>i.currentSlide?"next":"prev"),m&&1===i.pagingCount&&(i.direction=i.currentItem<t?"next":"prev"),!i.animating&&(i.canAdvance(t,l)||a)&&i.is(":visible")){if(m&&o){var c=e(i.vars.asNavFor).data("flexslider");if(i.atEnd=0===t||t===i.count-1,c.flexAnimate(t,!0,!1,!0,l),i.direction=i.currentItem<t?"next":"prev",c.direction=i.direction,Math.ceil((t+1)/i.visible)-1===i.currentSlide||0===t)return i.currentItem=t,i.slides.removeClass(s+"active-slide").eq(t).addClass(s+"active-slide"),!1;i.currentItem=t,i.slides.removeClass(s+"active-slide").eq(t).addClass(s+"active-slide"),t=Math.floor(t/i.visible)}if(i.animating=!0,i.animatingTo=t,n&&i.pause(),i.vars.before(i),i.syncExists&&!l&&f.sync("animate"),i.vars.controlNav&&f.controlNav.active(),v||i.slides.removeClass(s+"active-slide").eq(t).addClass(s+"active-slide"),i.atEnd=0===t||t===i.last,i.vars.directionNav&&f.directionNav.update(),t===i.last&&(i.vars.end(i),i.vars.animationLoop||i.pause()),p)r?(i.slides.eq(i.currentSlide).css({opacity:0,zIndex:1}),i.slides.eq(t).css({opacity:1,zIndex:2}),i.wrapup(b)):(i.slides.eq(i.currentSlide).css({zIndex:1}).animate({opacity:0},i.vars.animationSpeed,i.vars.easing),i.slides.eq(t).css({zIndex:2}).animate({opacity:1},i.vars.animationSpeed,i.vars.easing,i.wrapup));else{var h,g,y,b=d?i.slides.filter(":first").height():i.computedW;v?(h=i.vars.itemMargin,y=(i.itemW+h)*i.move*i.animatingTo,g=y>i.limit&&1!==i.visible?i.limit:y):g=0===i.currentSlide&&t===i.count-1&&i.vars.animationLoop&&"next"!==i.direction?u?(i.count+i.cloneOffset)*b:0:i.currentSlide===i.last&&0===t&&i.vars.animationLoop&&"prev"!==i.direction?u?0:(i.count+1)*b:u?(i.count-1-t+i.cloneOffset)*b:(t+i.cloneOffset)*b,i.setProps(g,"",i.vars.animationSpeed),i.transitions?(i.vars.animationLoop&&i.atEnd||(i.animating=!1,i.currentSlide=i.animatingTo),i.container.unbind("webkitTransitionEnd transitionend"),i.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(i.ensureAnimationEnd),i.wrapup(b)}),clearTimeout(i.ensureAnimationEnd),i.ensureAnimationEnd=setTimeout(function(){i.wrapup(b)},i.vars.animationSpeed+100)):i.container.animate(i.args,i.vars.animationSpeed,i.vars.easing,function(){i.wrapup(b)})}i.vars.smoothHeight&&f.smoothHeight(i.vars.animationSpeed)}},i.wrapup=function(e){p||v||(0===i.currentSlide&&i.animatingTo===i.last&&i.vars.animationLoop?i.setProps(e,"jumpEnd"):i.currentSlide===i.last&&0===i.animatingTo&&i.vars.animationLoop&&i.setProps(e,"jumpStart")),i.animating=!1,i.currentSlide=i.animatingTo,i.vars.after(i)},i.animateSlides=function(){!i.animating&&h&&i.flexAnimate(i.getTarget("next"))},i.pause=function(){clearInterval(i.animatedSlides),i.animatedSlides=null,i.playing=!1,i.vars.pausePlay&&f.pausePlay.update("play"),i.syncExists&&f.sync("pause")},i.play=function(){i.playing&&clearInterval(i.animatedSlides),i.animatedSlides=i.animatedSlides||setInterval(i.animateSlides,i.vars.slideshowSpeed),i.started=i.playing=!0,i.vars.pausePlay&&f.pausePlay.update("pause"),i.syncExists&&f.sync("play")},i.stop=function(){i.pause(),i.stopped=!0},i.canAdvance=function(e,t){var n=m?i.pagingCount-1:i.last;return t?!0:m&&i.currentItem===i.count-1&&0===e&&"prev"===i.direction?!0:m&&0===i.currentItem&&e===i.pagingCount-1&&"next"!==i.direction?!1:e!==i.currentSlide||m?i.vars.animationLoop?!0:i.atEnd&&0===i.currentSlide&&e===n&&"next"!==i.direction?!1:i.atEnd&&i.currentSlide===n&&0===e&&"next"===i.direction?!1:!0:!1},i.getTarget=function(e){return i.direction=e,"next"===e?i.currentSlide===i.last?0:i.currentSlide+1:0===i.currentSlide?i.last:i.currentSlide-1},i.setProps=function(e,t,n){var a=function(){var n=e?e:(i.itemW+i.vars.itemMargin)*i.move*i.animatingTo,a=function(){if(v)return"setTouch"===t?e:u&&i.animatingTo===i.last?0:u?i.limit-(i.itemW+i.vars.itemMargin)*i.move*i.animatingTo:i.animatingTo===i.last?i.limit:n;switch(t){case"setTotal":return u?(i.count-1-i.currentSlide+i.cloneOffset)*e:(i.currentSlide+i.cloneOffset)*e;case"setTouch":return u?e:e;case"jumpEnd":return u?e:i.count*e;case"jumpStart":return u?i.count*e:e;default:return e}}();return-1*a+"px"}();i.transitions&&(a=d?"translate3d(0,"+a+",0)":"translate3d("+a+",0,0)",n=void 0!==n?n/1e3+"s":"0s",i.container.css("-"+i.pfx+"-transition-duration",n),i.container.css("transition-duration",n)),i.args[i.prop]=a,(i.transitions||void 0===n)&&i.container.css(i.args),i.container.css("transform",a)},i.setup=function(t){if(p)i.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===t&&(r?i.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+i.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(i.currentSlide).css({opacity:1,zIndex:2}):0==i.vars.fadeFirstSlide?i.slides.css({opacity:0,display:"block",zIndex:1}).eq(i.currentSlide).css({zIndex:2}).css({opacity:1}):i.slides.css({opacity:0,display:"block",zIndex:1}).eq(i.currentSlide).css({zIndex:2}).animate({opacity:1},i.vars.animationSpeed,i.vars.easing)),i.vars.smoothHeight&&f.smoothHeight();else{var n,a;"init"===t&&(i.viewport=e('<div class="'+s+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(i).append(i.container),i.cloneCount=0,i.cloneOffset=0,u&&(a=e.makeArray(i.slides).reverse(),i.slides=e(a),i.container.empty().append(i.slides))),i.vars.animationLoop&&!v&&(i.cloneCount=2,i.cloneOffset=1,"init"!==t&&i.container.find(".clone").remove(),i.container.append(f.uniqueID(i.slides.first().clone().addClass("clone")).attr("aria-hidden","true")).prepend(f.uniqueID(i.slides.last().clone().addClass("clone")).attr("aria-hidden","true"))),i.newSlides=e(i.vars.selector,i),n=u?i.count-1-i.currentSlide+i.cloneOffset:i.currentSlide+i.cloneOffset,d&&!v?(i.container.height(200*(i.count+i.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){i.newSlides.css({display:"block"}),i.doMath(),i.viewport.height(i.h),i.setProps(n*i.h,"init")},"init"===t?100:0)):(i.container.width(200*(i.count+i.cloneCount)+"%"),i.setProps(n*i.computedW,"init"),setTimeout(function(){i.doMath(),i.newSlides.css({width:i.computedW,"float":"left",display:"block"}),i.vars.smoothHeight&&f.smoothHeight()},"init"===t?100:0))}v||i.slides.removeClass(s+"active-slide").eq(i.currentSlide).addClass(s+"active-slide"),i.vars.init(i)},i.doMath=function(){var e=i.slides.first(),t=i.vars.itemMargin,n=i.vars.minItems,a=i.vars.maxItems;i.w=void 0===i.viewport?i.width():i.viewport.width(),i.h=e.height(),i.boxPadding=e.outerWidth()-e.width(),v?(i.itemT=i.vars.itemWidth+t,i.minW=n?n*i.itemT:i.w,i.maxW=a?a*i.itemT-t:i.w,i.itemW=i.minW>i.w?(i.w-t*(n-1))/n:i.maxW<i.w?(i.w-t*(a-1))/a:i.vars.itemWidth>i.w?i.w:i.vars.itemWidth,i.visible=Math.floor(i.w/i.itemW),i.move=i.vars.move>0&&i.vars.move<i.visible?i.vars.move:i.visible,i.pagingCount=Math.ceil((i.count-i.visible)/i.move+1),i.last=i.pagingCount-1,i.limit=1===i.pagingCount?0:i.vars.itemWidth>i.w?i.itemW*(i.count-1)+t*(i.count-1):(i.itemW+t)*i.count-i.w-t):(i.itemW=i.w,i.pagingCount=i.count,i.last=i.count-1),i.computedW=i.itemW-i.boxPadding},i.update=function(e,t){i.doMath(),v||(e<i.currentSlide?i.currentSlide+=1:e<=i.currentSlide&&0!==e&&(i.currentSlide-=1),i.animatingTo=i.currentSlide),i.vars.controlNav&&!i.manualControls&&("add"===t&&!v||i.pagingCount>i.controlNav.length?f.controlNav.update("add"):("remove"===t&&!v||i.pagingCount<i.controlNav.length)&&(v&&i.currentSlide>i.last&&(i.currentSlide-=1,i.animatingTo-=1),f.controlNav.update("remove",i.last))),i.vars.directionNav&&f.directionNav.update()},i.addSlide=function(t,n){var a=e(t);i.count+=1,i.last=i.count-1,d&&u?void 0!==n?i.slides.eq(i.count-n).after(a):i.container.prepend(a):void 0!==n?i.slides.eq(n).before(a):i.container.append(a),i.update(n,"add"),i.slides=e(i.vars.selector+":not(.clone)",i),i.setup(),i.vars.added(i)},i.removeSlide=function(t){var n=isNaN(t)?i.slides.index(e(t)):t;i.count-=1,i.last=i.count-1,isNaN(t)?e(t,i.slides).remove():d&&u?i.slides.eq(i.last).remove():i.slides.eq(t).remove(),i.doMath(),i.update(n,"remove"),i.slides=e(i.vars.selector+":not(.clone)",i),i.setup(),i.vars.removed(i)},f.init()},e(window).blur(function(){focused=!1}).focus(function(){focused=!0}),e.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,fadeFirstSlide:!0,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}},e.fn.flexslider=function(t){if(void 0===t&&(t={}),"object"==typeof t)return this.each(function(){var n=e(this),i=t.selector?t.selector:".slides > li",a=n.find(i);1===a.length&&t.allowOneSlide===!0||0===a.length?(a.fadeIn(400),t.start&&t.start(n)):void 0===n.data("flexslider")&&new e.flexslider(this,t)});var n=e(this).data("flexslider");switch(t){case"play":n.play();break;case"pause":n.pause();break;case"stop":n.stop();break;case"next":n.flexAnimate(n.getTarget("next"),!0);break;case"prev":case"previous":n.flexAnimate(n.getTarget("prev"),!0);break;default:"number"==typeof t&&n.flexAnimate(t,!0)}}}(jQuery),!function(e,t){"function"==typeof define&&define.amd?define(function(){return t(e)}):"object"==typeof exports?module.exports=t:e.echo=t(e)}(this,function(e){"use strict";var t,n,i,a,s,o={},r=function(){},l=function(e,t){var n=e.getBoundingClientRect();return n.right>=t.l&&n.bottom>=t.t&&n.left<=t.r&&n.top<=t.b},c=function(){(a||!n)&&(clearTimeout(n),n=setTimeout(function(){o.render(),n=null},i))};return o.init=function(n){n=n||{};var l=n.offset||0,d=n.offsetVertical||l,u=n.offsetHorizontal||l,v=function(e,t){return parseInt(e||t,10)};t={t:v(n.offsetTop,d),b:v(n.offsetBottom,d),l:v(n.offsetLeft,u),r:v(n.offsetRight,u)},i=v(n.throttle,250),a=n.debounce!==!1,s=!!n.unload,r=n.callback||r,o.render(),document.addEventListener?(e.addEventListener("scroll",c,!1),e.addEventListener("load",c,!1)):(e.attachEvent("onscroll",c),e.attachEvent("onload",c))},o.render=function(){for(var n,i,a=document.querySelectorAll("img[data-echo]"),c=a.length,d={l:0-t.l,t:0-t.t,b:(e.innerHeight||document.documentElement.clientHeight)+t.b,r:(e.innerWidth||document.documentElement.clientWidth)+t.r},u=0;c>u;u++)i=a[u],l(i,d)?(s&&i.setAttribute("data-echo-placeholder",i.src),i.src=i.getAttribute("data-echo"),s||i.removeAttribute("data-echo"),r(i,"load")):s&&(n=i.getAttribute("data-echo-placeholder"))&&(i.src=n,i.removeAttribute("data-echo-placeholder"),r(i,"unload"));c||o.detach()},o.detach=function(){document.removeEventListener?e.removeEventListener("scroll",c):e.detachEvent("onscroll",c),clearTimeout(n)},o}),window.matchMedia||(window.matchMedia=function(){"use strict";var e=window.styleMedia||window.media;if(!e){var t=document.createElement("style"),n=document.getElementsByTagName("script")[0],i=null;t.type="text/css",t.id="matchmediajs-test",n.parentNode.insertBefore(t,n),i="getComputedStyle"in window&&window.getComputedStyle(t,null)||t.currentStyle,e={matchMedium:function(e){var n="@media "+e+"{ #matchmediajs-test { width: 1px; } }";return t.styleSheet?t.styleSheet.cssText=n:t.textContent=n,"1px"===i.width}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}()),function(e,t){"use strict";function n(e){var t,n,i,s,o,r=e||{};t=r.elements||a.getAllElements();for(var l=0,c=t.length;c>l;l++)if(n=t[l],i=n.parentNode,s=void 0,o=void 0,n[a.ns]||(n[a.ns]={}),r.reevaluate||!n[a.ns].evaluated){if("PICTURE"===i.nodeName.toUpperCase()){if(a.removeVideoShim(i),s=a.getMatch(n,i),s===!1)continue}else s=void 0;("PICTURE"===i.nodeName.toUpperCase()||n.srcset&&!a.srcsetSupported||!a.sizesSupported&&n.srcset&&n.srcset.indexOf("w")>-1)&&a.dodgeSrcset(n),s?(o=a.processSourceSet(s),a.applyBestCandidate(o,n)):(o=a.processSourceSet(n),(void 0===n.srcset||n[a.ns].srcset)&&a.applyBestCandidate(o,n)),n[a.ns].evaluated=!0}}function i(){n();var i=setInterval(function(){return n(),/^loaded|^i|^c/.test(t.readyState)?void clearInterval(i):void 0},250);if(e.addEventListener){var a;e.addEventListener("resize",function(){e._picturefillWorking||(e._picturefillWorking=!0,e.clearTimeout(a),a=e.setTimeout(function(){n({reevaluate:!0}),e._picturefillWorking=!1},60))},!1)}}if(e.HTMLPictureElement)return void(e.picturefill=function(){});t.createElement("picture");var a={};a.ns="picturefill",a.srcsetSupported="srcset"in t.createElement("img"),a.sizesSupported=e.HTMLImageElement.sizes,a.trim=function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},a.endsWith=function(e,t){return e.endsWith?e.endsWith(t):-1!==e.indexOf(t,e.length-t.length)},a.restrictsMixedContent=function(){return"https:"===e.location.protocol},a.matchesMedia=function(t){return e.matchMedia&&e.matchMedia(t).matches},a.getDpr=function(){return e.devicePixelRatio||1},a.getWidthFromLength=function(e){return e=e&&e.indexOf("%")>-1==0&&(parseFloat(e)>0||e.indexOf("calc(")>-1)?e:"100vw",e=e.replace("vw","%"),a.lengthEl||(a.lengthEl=t.createElement("div"),t.documentElement.insertBefore(a.lengthEl,t.documentElement.firstChild)),a.lengthEl.style.cssText="position: absolute; left: 0; width: "+e+";",a.lengthEl.offsetWidth<=0&&(a.lengthEl.style.cssText="width: 100%;"),a.lengthEl.offsetWidth},a.types={},a.types["image/jpeg"]=!0,a.types["image/gif"]=!0,a.types["image/png"]=!0,a.types["image/svg+xml"]=t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),a.types["image/webp"]=function(){var t=new e.Image,i="image/webp";t.onerror=function(){a.types[i]=!1,n()},t.onload=function(){a.types[i]=1===t.width,n()},t.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="},a.verifyTypeSupport=function(e){var t=e.getAttribute("type");return null===t||""===t?!0:"function"==typeof a.types[t]?(a.types[t](),"pending"):a.types[t]},a.parseSize=function(e){var t=/(\([^)]+\))?\s*(.+)/g.exec(e);return{media:t&&t[1],length:t&&t[2]}},a.findWidthFromSourceSize=function(e){for(var t,n=a.trim(e).split(/\s*,\s*/),i=0,s=n.length;s>i;i++){var o=n[i],r=a.parseSize(o),l=r.length,c=r.media;if(l&&(!c||a.matchesMedia(c))){t=l;break}}return a.getWidthFromLength(t)},a.parseSrcset=function(e){for(var t=[];""!==e;){e=e.replace(/^\s+/g,"");var n,i=e.search(/\s/g),a=null;if(-1!==i){n=e.slice(0,i);var s=n[n.length-1];if((","===s||""===n)&&(n=n.replace(/,+$/,""),a=""),e=e.slice(i+1),null===a){var o=e.indexOf(",");-1!==o?(a=e.slice(0,o),e=e.slice(o+1)):(a=e,e="")}}else n=e,e="";(n||a)&&t.push({url:n,descriptor:a})}return t},a.parseDescriptor=function(e,t){var n,i=t||"100vw",s=e&&e.replace(/(^\s+|\s+$)/g,""),o=a.findWidthFromSourceSize(i);if(s)for(var r=s.split(" "),l=r.length+1;l>=0;l--)if(void 0!==r[l]){var c=r[l],d=c&&c.slice(c.length-1);if("h"!==d&&"w"!==d||a.sizesSupported){if("x"===d){var u=c&&parseFloat(c,10);n=u&&!isNaN(u)?u:1}}else n=parseFloat(parseInt(c,10)/o)}return n||1},a.getCandidatesFromSourceSet=function(e,t){for(var n=a.parseSrcset(e),i=[],s=0,o=n.length;o>s;s++){var r=n[s];i.push({url:r.url,resolution:a.parseDescriptor(r.descriptor,t)})}return i},a.dodgeSrcset=function(e){e.srcset&&(e[a.ns].srcset=e.srcset,e.removeAttribute("srcset"))},a.processSourceSet=function(e){var t=e.getAttribute("srcset"),n=e.getAttribute("sizes"),i=[];
return"IMG"===e.nodeName.toUpperCase()&&e[a.ns]&&e[a.ns].srcset&&(t=e[a.ns].srcset),t&&(i=a.getCandidatesFromSourceSet(t,n)),i},a.applyBestCandidate=function(e,t){var n,i,s;e.sort(a.ascendingSort),i=e.length,s=e[i-1];for(var o=0;i>o;o++)if(n=e[o],n.resolution>=a.getDpr()){s=n;break}s&&!a.endsWith(t.src,s.url)&&(a.restrictsMixedContent()&&"http:"===s.url.substr(0,"http:".length).toLowerCase()?void 0!==typeof console&&console.warn("Blocked mixed content image "+s.url):(t.src=s.url,t.currentSrc=t.src))},a.ascendingSort=function(e,t){return e.resolution-t.resolution},a.removeVideoShim=function(e){var t=e.getElementsByTagName("video");if(t.length){for(var n=t[0],i=n.getElementsByTagName("source");i.length;)e.insertBefore(i[0],n);n.parentNode.removeChild(n)}},a.getAllElements=function(){for(var e=[],n=t.getElementsByTagName("img"),i=0,s=n.length;s>i;i++){var o=n[i];("PICTURE"===o.parentNode.nodeName.toUpperCase()||null!==o.getAttribute("srcset")||o[a.ns]&&null!==o[a.ns].srcset)&&e.push(o)}return e},a.getMatch=function(e,t){for(var n,i=t.childNodes,s=0,o=i.length;o>s;s++){var r=i[s];if(1===r.nodeType){if(r===e)return n;if("SOURCE"===r.nodeName.toUpperCase()){null!==r.getAttribute("src")&&void 0!==typeof console&&console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.");var l=r.getAttribute("media");if(r.getAttribute("srcset")&&(!l||a.matchesMedia(l))){var c=a.verifyTypeSupport(r);if(c===!0){n=r;break}if("pending"===c)return!1}}}}return n},i(),n._=a,"object"==typeof module&&"object"==typeof module.exports?module.exports=n:"function"==typeof define&&define.amd?define(function(){return n}):"object"==typeof e&&(e.picturefill=n)}(this,this.document),function(){var e,t;e=this.jQuery||window.jQuery,t=e(window),e.fn.stick_in_parent=function(n){var i,a,s,o,r,l,c,d,u,v;for(null==n&&(n={}),c=n.sticky_class,a=n.inner_scrolling,l=n.recalc_every,r=n.parent,o=n.offset_top,s=n.spacer,i=n.bottoming,null==o&&(o=0),null==r&&(r=void 0),null==a&&(a=!0),null==c&&(c="is_stuck"),null==i&&(i=!0),d=function(n,d,u,v,p,m,f,h){var g,y,b,w,S,x,C,T,N,k,E;if(!n.data("sticky_kit")){if(n.data("sticky_kit",!0),x=n.parent(),null!=r&&(x=x.closest(r)),!x.length)throw"failed to find stick parent";if(g=b=!1,(k=null!=s?s&&n.closest(s):e("<div />"))&&k.css("position",n.css("position")),C=function(){var e,t,i;return!h&&(e=parseInt(x.css("border-top-width"),10),t=parseInt(x.css("padding-top"),10),d=parseInt(x.css("padding-bottom"),10),u=x.offset().top+e+t,v=x.height(),b&&(g=b=!1,null==s&&(n.insertAfter(k),k.detach()),n.css({position:"",top:"",width:"",bottom:""}).removeClass(c),i=!0),p=n.offset().top-parseInt(n.css("margin-top"),10)-o,m=n.outerHeight(!0),f=n.css("float"),k&&k.css({width:n.outerWidth(!0),height:m,display:n.css("display"),"vertical-align":n.css("vertical-align"),"float":f}),i)?E():void 0},C(),m!==v)return w=void 0,S=o,N=l,E=function(){var e,r,y,T;return!h&&(null!=N&&(--N,0>=N&&(N=l,C())),y=t.scrollTop(),null!=w&&(r=y-w),w=y,b?(i&&(T=y+m+S>v+u,g&&!T&&(g=!1,n.css({position:"fixed",bottom:"",top:S}).trigger("sticky_kit:unbottom"))),p>y&&(b=!1,S=o,null==s&&("left"!==f&&"right"!==f||n.insertAfter(k),k.detach()),e={position:"",width:"",top:""},n.css(e).removeClass(c).trigger("sticky_kit:unstick")),a&&(e=t.height(),m+o>e&&!g&&(S-=r,S=Math.max(e-m,S),S=Math.min(o,S),b&&n.css({top:S+"px"})))):y>p&&(b=!0,e={position:"fixed",top:S},e.width="border-box"===n.css("box-sizing")?n.outerWidth()+"px":n.width()+"px",n.css(e).addClass(c),null==s&&(n.after(k),"left"!==f&&"right"!==f||k.append(n)),n.trigger("sticky_kit:stick")),b&&i&&(null==T&&(T=y+m+S>v+u),!g&&T))?(g=!0,"static"===x.css("position")&&x.css({position:"relative"}),n.css({position:"absolute",bottom:d,top:"auto"}).trigger("sticky_kit:bottom")):void 0},T=function(){return C(),E()},y=function(){return h=!0,t.off("touchmove",E),t.off("scroll",E),t.off("resize",T),e(document.body).off("sticky_kit:recalc",T),n.off("sticky_kit:detach",y),n.removeData("sticky_kit"),n.css({position:"",bottom:"",top:"",width:""}),x.position("position",""),b?(null==s&&("left"!==f&&"right"!==f||n.insertAfter(k),k.remove()),n.removeClass(c)):void 0},t.on("touchmove",E),t.on("scroll",E),t.on("resize",T),e(document.body).on("sticky_kit:recalc",T),n.on("sticky_kit:detach",y),setTimeout(E,0)}},u=0,v=this.length;v>u;u++)n=this[u],d(e(n));return this}}.call(this),function(e){e(function(){e("#menu-trigger").click(function(){e("#menu-trigger").toggleClass('is-active'),e(".navigation").slideToggle()}),e("#content-slider").flexslider({controlsContainer:"#content-slider",controlNav:!1,directionNav:!1}),e("#retul-contents").flexslider({animation:"fade",directionNav:!1,manualControls:"#content-nav li a",slideshow:!1,touch:!1}),e("#masthead-slider").flexslider({controlNav:!1,directionNav:!1}),e(".array-slider").flexslider({animation:"slide",animationLoop:!1,controlNav:!1,directionNav:!0,itemMargin:16,itemWidth:262,maxItems:0,minItems:1,slideshow:!1}),e(".array-slider .flex-direction-nav").each(function(){var t=e(this);e(this).parents(".array-slider").siblings("header").append(t)}),e("#showcase").flexslider({animation:"slide",animationLoop:!1,controlNav:!1,directionNav:!0,itemMargin:20,itemWidth:270,maxItems:0,minItems:1}),e(".faq-trigger").on("click",function(){var t=e(this).parents(".faq-section");return t.hasClass("active")?e(this).parent().siblings(".content").slideUp(function(){e(this).parents(".faq-section").removeClass("active")}):(e(this).parents(".faq-section").addClass("active"),e(this).parent().siblings(".content").slideDown()),!1}),echo.init({offset:100})}),e(window).on("load",function(){e("#sticky-about").stick_in_parent({recalc_every:1})})}(jQuery,this),window.onload=function(){var e=document.body;e.classList.add("loaded")};