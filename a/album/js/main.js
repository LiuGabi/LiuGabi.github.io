/**
 * VERSION: beta 1.641
 * DATE: 2012-11-08
 * JavaScript (ActionScript 3 and 2 also available)
 * UPDATES AND DOCS AT: http://www.greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, easing.EasePack, plugins.CSSPlugin, plugins.RoundPropsPlugin
 *
 * Copyright (c) 2008-2012, GreenSock. All rights reserved. 
 * This work is subject to the terms in http://www.greensock.com/terms_of_use.html or for 
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
(window._gsQueue||(window._gsQueue=[])).push(function(){_gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(s,x,g){var q=function(f,d,b){g.call(this,f,d,b);this._cycle=0;this._yoyo=!0===this.vars.yoyo;this._repeat=this.vars.repeat||0;this._repeatDelay=this.vars.repeatDelay||0;this._dirty=!0},n=q.prototype=g.to({},0.1,{}),c=[];q.version=1.641;n.constructor=q;n.kill()._gc=!1;q.killTweensOf=q.killDelayedCallsTo=g.killTweensOf;q.getTweensOf=g.getTweensOf;q.ticker=g.ticker;
n.invalidate=function(){this._yoyo=!0===this.vars.yoyo;this._repeat=this.vars.repeat||0;this._repeatDelay=this.vars.repeatDelay||0;this._uncache(!0);return g.prototype.invalidate.call(this)};n.updateTo=function(f,d){var b=this.ratio,k;d&&(null!=this.timeline&&this._startTime<this._timeline._time)&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(k in f)this.vars[k]=f[k];if(this._initted)if(d)this._initted=
!1;else if(this._notifyPluginsOfEnabled&&this._firstPT&&g._onPluginEvent("_onDisable",this),0.998<this._time/this._duration)b=this._time,this.render(0,!0,!1),this._initted=!1,this.render(b,!0,!1);else if(0<this._time){this._initted=!1;this._init();b=1/(1-b);k=this._firstPT;for(var M;k;)M=k.s+k.c,k.c*=b,k.s=M-k.c,k=k._next}return this};n.render=function(f,d,b){var k=!this._dirty?this._totalDuration:this.totalDuration(),M=this._time,e=this._totalTime,A=this._cycle,v,I;if(f>=k){if(this._totalTime=k,
this._cycle=this._repeat,this._yoyo&&0!==(this._cycle&1)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=this._duration,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(v=!0,I="onComplete"),0===this._duration){if(0===f||0>this._rawPrevTime)this._rawPrevTime!==f&&(b=!0);this._rawPrevTime=f}}else if(0>=f){this._totalTime=this._time=this._cycle=0;this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0;if(0!==e||0===this._duration&&0<this._rawPrevTime)I=
"onReverseComplete",v=this._reversed;0>f?(this._active=!1,0===this._duration&&(0<=this._rawPrevTime&&(b=!0),this._rawPrevTime=f)):this._initted||(b=!0)}else if(this._totalTime=this._time=f,0!==this._repeat&&(f=this._duration+this._repeatDelay,this._cycle=this._totalTime/f>>0,0!==this._cycle&&this._cycle===this._totalTime/f&&this._cycle--,this._time=this._totalTime-this._cycle*f,this._yoyo&&0!==(this._cycle&1)&&(this._time=this._duration-this._time),this._time>this._duration?this._time=this._duration:
0>this._time&&(this._time=0)),this._easeType){var f=this._time/this._duration,k=this._easeType,m=this._easePower;if(1===k||3===k&&0.5<=f)f=1-f;3===k&&(f*=2);1===m?f*=f:2===m?f*=f*f:3===m?f*=f*f*f:4===m&&(f*=f*f*f*f);this.ratio=1===k?1-f:2===k?f:0.5>this._time/this._duration?f/2:1-f/2}else this.ratio=this._ease.getRatio(this._time/this._duration);if(M===this._time&&!b)e!==this._totalTime&&this._onUpdate&&(d||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||c));else{this._initted||
(this._init(),!v&&this._time&&(this.ratio=this._ease.getRatio(this._time/this._duration)));!this._active&&!this._paused&&(this._active=!0);if(0===e&&this.vars.onStart&&(0!==this._totalTime||0===this._duration))d||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||c);for(b=this._firstPT;b;){if(b.f)b.t[b.p](b.c*this.ratio+b.s);else b.t[b.p]=b.c*this.ratio+b.s;b=b._next}this._onUpdate&&(d||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||c));this._cycle!==
A&&(d||this._gc||this.vars.onRepeat&&this.vars.onRepeat.apply(this.vars.onRepeatScope||this,this.vars.onRepeatParams||c));I&&!this._gc&&(v&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),d||this.vars[I]&&this.vars[I].apply(this.vars[I+"Scope"]||this,this.vars[I+"Params"]||c))}};q.to=function(b,d,i){return new q(b,d,i)};q.from=function(b,d,i){i.runBackwards=!0;!1!=i.immediateRender&&(i.immediateRender=!0);return new q(b,d,i)};q.fromTo=function(b,d,i,k){k.startAt=i;i.immediateRender&&
(k.immediateRender=!0);return new q(b,d,k)};q.staggerTo=q.allTo=function(b,d,i,k,e,c,A){var k=k||0,v=[],I=b.length,m=i.delay||0,g,w,n;for(w=0;w<I;w++){g={};for(n in i)g[n]=i[n];g.delay=m;w===I-1&&e&&(g.onComplete=function(){i.onComplete&&i.onComplete.apply(i.onCompleteScope,i.onCompleteParams);e.apply(A,c)});v[w]=new q(b[w],d,g);m+=k}return v};q.staggerFrom=q.allFrom=function(b,d,i,k,e,c,A){i.runBackwards=!0;!1!=i.immediateRender&&(i.immediateRender=!0);return q.staggerTo(b,d,i,k,e,c,A)};q.staggerFromTo=
q.allFromTo=function(b,d,i,k,e,c,A,v){k.startAt=i;i.immediateRender&&(k.immediateRender=!0);return q.staggerTo(b,d,k,e,c,A,v)};q.delayedCall=function(b,d,i,k,e){return new q(d,0,{delay:b,onComplete:d,onCompleteParams:i,onCompleteScope:k,onReverseComplete:d,onReverseCompleteParams:i,onReverseCompleteScope:k,immediateRender:!1,useFrames:e,overwrite:0})};q.set=function(b,d){return new q(b,0,d)};q.isTweening=function(b){for(var b=g.getTweensOf(b),d=b.length,i;-1<--d;)if((i=b[d])._active||i._startTime===
i.timeline._time&&i.timeline._active)return!0;return!1};var A=function(b,d){for(var i=[],k=0,e=b._first;e;)e instanceof g?i[k++]=e:(d&&(i[k++]=e),i=i.concat(A(e,d)),k=i.length),e=e._next;return i},e=q.getAllTweens=function(b){return A(s._rootTimeline,b).concat(A(s._rootFramesTimeline,b))};q.killAll=function(b,d,i,k){null==d&&(d=!0);null==i&&(i=!0);var c=e(!1!=k),A=c.length,k=d&&i&&k,g,v,I;for(I=0;I<A;I++)if(v=c[I],k||v instanceof x||(g=v.target===v.vars.onComplete)&&i||d&&!g)b?v.totalTime(v.totalDuration()):
v._enabled(!1,!1)};q.killChildTweensOf=function(b,d){if(null!=b)if(b.jquery)b.each(function(b,f){q.killChildTweensOf(f,d)});else{var i=g._tweenLookup,k=[],e,c;for(c in i)for(e=i[c].target.parentNode;e;)e===b&&(k=k.concat(i[c].tweens)),e=e.parentNode;e=k.length;for(i=0;i<e;i++)d&&k[i].totalTime(k[i].totalDuration()),k[i]._enabled(!1,!1)}};q.pauseAll=function(f,d,i){b(!0,f,d,i)};q.resumeAll=function(f,d,i){b(!1,f,d,i)};var b=function(b,d,i,k){void 0==d&&(d=!0);void 0==i&&(i=!0);for(var c=e(k),k=d&&
i&&k,A=c.length,g,v;-1<--A;)v=c[A],(k||v instanceof x||(g=v.target===v.vars.onComplete)&&i||d&&!g)&&v.paused(b)};n.progress=function(b){return!arguments.length?this._time/this.duration():this.totalTime(this.duration()*(this._yoyo&&0!==(this._cycle&1)?1-b:b)+this._cycle*(this._duration+this._repeatDelay),!1)};n.totalProgress=function(b){return!arguments.length?this._totalTime/this.totalDuration():this.totalTime(this.totalDuration()*b,!1)};n.time=function(b,d){if(!arguments.length)return this._time;
this._dirty&&this.totalDuration();b>this._duration&&(b=this._duration);this._yoyo&&0!==(this._cycle&1)?b=this._duration-b+this._cycle*(this._duration+this._repeatDelay):0!=this._repeat&&(b+=this._cycle*(this._duration+this._repeatDelay));return this.totalTime(b,d)};n.totalDuration=function(b){return!arguments.length?(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration):-1==this._repeat?
this:this.duration((b-this._repeat*this._repeatDelay)/(this._repeat+1))};n.repeat=function(b){if(!arguments.length)return this._repeat;this._repeat=b;return this._uncache(!0)};n.repeatDelay=function(b){if(!arguments.length)return this._repeatDelay;this._repeatDelay=b;return this._uncache(!0)};n.yoyo=function(b){if(!arguments.length)return this._yoyo;this._yoyo=b;return this};return q},!0);_gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(s,x,g){var q=function(b){x.call(this,
b);this._labels={};this.autoRemoveChildren=!0==this.vars.autoRemoveChildren;this.smoothChildTiming=!0==this.vars.smoothChildTiming;this._sortChildren=!0;this._onUpdate=this.vars.onUpdate;for(var b=n.length,f,d;-1<--b;)if(d=this.vars[n[b]])for(f=d.length;-1<--f;)"{self}"===d[f]&&(d=this.vars[n[b]]=d.concat(),d[f]=this);this.vars.tweens instanceof Array&&this.insertMultiple(this.vars.tweens,0,this.vars.align||"normal",this.vars.stagger||0)},n=["onStartParams","onUpdateParams","onCompleteParams","onReverseCompleteParams",
"onRepeatParams"],c=[],A=function(b){var f={},d;for(d in b)f[d]=b[d];return f},e=q.prototype=new x;q.version=1.641;e.constructor=q;e.kill()._gc=!1;e.to=function(b,f,d,i,k){return this.insert(new g(b,f,d),this._parseTimeOrLabel(k,i,!0))};e.from=function(b,f,d,i,k){return this.insert(g.from(b,f,d),this._parseTimeOrLabel(k,i,!0))};e.fromTo=function(b,f,d,i,k,e){return this.insert(g.fromTo(b,f,d,i),this._parseTimeOrLabel(e,k,!0))};e.staggerTo=function(b,f,d,i,k,e,c,n,v){c=new q({onComplete:c,onCompleteParams:n,
onCompleteScope:v});i=i||0;for(n=0;n<b.length;n++)null!=d.startAt&&(d.startAt=A(d.startAt)),c.insert(new g(b[n],f,A(d)),n*i);return this.insert(c,this._parseTimeOrLabel(e,k,!0))};e.staggerFrom=function(b,f,d,i,k,e,c,A,v){null==d.immediateRender&&(d.immediateRender=!0);d.runBackwards=!0;return this.staggerTo(b,f,d,i,k,e,c,A,v)};e.staggerFromTo=function(b,f,d,i,k,e,c,A,v,g){i.startAt=d;d.immediateRender&&(i.immediateRender=!0);return this.staggerTo(b,f,i,k,e,c,A,v,g)};e.call=function(b,f,d,i,k){return this.insert(g.delayedCall(0,
b,f,d),this._parseTimeOrLabel(k,i,!0))};e.set=function(b,f,d,i){f.immediateRender=!1;return this.insert(new g(b,0,f),this._parseTimeOrLabel(i,d,!0))};q.exportRoot=function(b,f){b=b||{};null==b.smoothChildTiming&&(b.smoothChildTiming=!0);var d=new q(b),i=d._timeline;null==f&&(f=!0);i._remove(d,!0);d._startTime=0;d._rawPrevTime=d._time=d._totalTime=i._time;for(var k=i._first,e;k;)e=k._next,(!f||!(k instanceof g&&k.target===k.vars.onComplete))&&d.insert(k,k._startTime-k._delay),k=e;i.insert(d,0);return d};
e.insert=function(b,f){if(!(b instanceof s)){if(b instanceof Array)return this.insertMultiple(b,f);if("string"===typeof b)return this.addLabel(b,this._parseTimeOrLabel(f||0,0,!0));if("function"===typeof b)b=g.delayedCall(0,b);else throw"ERROR: Cannot insert() "+b+" into the TimelineLite/Max because it is neither a tween, timeline, function, nor a String.";}x.prototype.insert.call(this,b,this._parseTimeOrLabel(f||0,0,!0));if(this._gc&&!this._paused&&this._time===this._duration&&this._time<this.duration())for(var d=
this;d._gc&&d._timeline;)d._timeline.smoothChildTiming?d.totalTime(d._totalTime,!0):d._enabled(!0,!1),d=d._timeline;return this};e.remove=function(b){if(b instanceof s)return this._remove(b,!1);if(b instanceof Array){for(var f=b.length;-1<--f;)this.remove(b[f]);return this}return"string"===typeof b?this.removeLabel(b):this.kill(null,b)};e.append=function(b,f){return this.insert(b,this._parseTimeOrLabel(null,f,!0))};e.insertMultiple=function(b,f,d,i){for(var d=d||"normal",i=i||0,k,e=this._parseTimeOrLabel(f||
0,0,!0),c=b.length,f=0;f<c;f++){if((k=b[f])instanceof Array)k=new q({tweens:k});this.insert(k,e);"string"===typeof k||"function"===typeof k||("sequence"===d?e=k._startTime+k.totalDuration()/k._timeScale:"start"===d&&(k._startTime-=k.delay()));e+=i}return this._uncache(!0)};e.appendMultiple=function(b,f,d,i){return this.insertMultiple(b,this._parseTimeOrLabel(null,f,!0),d,i)};e.addLabel=function(b,f){this._labels[b]=f;return this};e.removeLabel=function(b){delete this._labels[b];return this};e.getLabelTime=
function(b){return null!=this._labels[b]?this._labels[b]:-1};e._parseTimeOrLabel=function(b,f,d){if("string"===typeof f)return this._parseTimeOrLabel(f,d&&"number"===typeof b&&null==this._labels[f]?b-this.duration():0,d);f=f||0;return null==b?this.duration()+f:"string"===typeof b&&isNaN(b)?null==this._labels[b]?d?this._labels[b]=this.duration()+f:f:this._labels[b]+f:Number(b)+f};e.seek=function(b,f){return this.totalTime(this._parseTimeOrLabel(b),!1!=f)};e.stop=function(){return this.paused(!0)};
e.gotoAndPlay=function(b,f){return x.prototype.play.call(this,b,f)};e.gotoAndStop=function(b,f){return this.pause(b,f)};e.render=function(b,f,d){this._gc&&this._enabled(!0,!1);this._active=!this._paused;var i=!this._dirty?this._totalDuration:this.totalDuration(),k=this._time,e=this._startTime,A=this._timeScale,g=this._paused,v,I,m;if(b>=i){this._totalTime=this._time=i;if(!this._reversed&&!this._hasPausedChild()&&(v=!0,m="onComplete",0===this._duration&&(0===b||0>this._rawPrevTime)))this._rawPrevTime!==
b&&(d=!0);this._rawPrevTime=b;b=i+1E-6}else if(0>=b){this._totalTime=this._time=0;if(0!==k||0===this._duration&&0<this._rawPrevTime)m="onReverseComplete",v=this._reversed;0>b?(this._active=!1,0===this._duration&&0<=this._rawPrevTime&&(d=!0)):this._initted||(d=!0);this._rawPrevTime=b;b=-1E-6}else this._totalTime=this._time=this._rawPrevTime=b;if(this._time!==k||d){this._initted||(this._initted=!0);0===k&&this.vars.onStart&&0!==this._time&&(f||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||
c));if(this._time>k)for(d=this._first;d;){I=d._next;if(this._paused&&!g)break;else if(d._active||d._startTime<=this._time&&!d._paused&&!d._gc)d._reversed?d.render((!d._dirty?d._totalDuration:d.totalDuration())-(b-d._startTime)*d._timeScale,f,!1):d.render((b-d._startTime)*d._timeScale,f,!1);d=I}else for(d=this._last;d;){I=d._prev;if(this._paused&&!g)break;else if(d._active||d._startTime<=k&&!d._paused&&!d._gc)d._reversed?d.render((!d._dirty?d._totalDuration:d.totalDuration())-(b-d._startTime)*d._timeScale,
f,!1):d.render((b-d._startTime)*d._timeScale,f,!1);d=I}this._onUpdate&&(f||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||c));if(m&&!this._gc&&(e===this._startTime||A!=this._timeScale))if(0===this._time||i>=this.totalDuration())v&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),f||this.vars[m]&&this.vars[m].apply(this.vars[m+"Scope"]||this,this.vars[m+"Params"]||c)}};e._hasPausedChild=function(){for(var b=this._first;b;){if(b._paused||b instanceof
q&&b._hasPausedChild())return!0;b=b._next}return!1};e.getChildren=function(b,f,d,i){for(var i=i||-9999999999,k=[],e=this._first,c=0;e;)e._startTime<i||(e instanceof g?!1!=f&&(k[c++]=e):(!1!=d&&(k[c++]=e),!1!=b&&(k=k.concat(e.getChildren(!0,f,d)),c=k.length))),e=e._next;return k};e.getTweensOf=function(b,f){for(var d=g.getTweensOf(b),i=d.length,k=[],e=0;-1<--i;)if(d[i].timeline===this||f&&this._contains(d[i]))k[e++]=d[i];return k};e._contains=function(b){for(b=b.timeline;b;){if(b===this)return!0;b=
b.timeline}return!1};e.shiftChildren=function(b,f,d){for(var d=d||0,i=this._first;i;)i._startTime>=d&&(i._startTime+=b),i=i._next;if(f)for(var k in this._labels)this._labels[k]>=d&&(this._labels[k]+=b);return this._uncache(!0)};e._kill=function(b,f){if(null==b&&null==f)return this._enabled(!1,!1);for(var d=null==f?this.getChildren(!0,!0,!1):this.getTweensOf(f),i=d.length,k=!1;-1<--i;)d[i]._kill(b,f)&&(k=!0);return k};e.clear=function(b){var f=this.getChildren(!1,!0,!0),d=f.length;for(this._time=this._totalTime=
0;-1<--d;)f[d]._enabled(!1,!1);!1!=b&&(this._labels={});return this._uncache(!0)};e.invalidate=function(){for(var b=this._first;b;)b.invalidate(),b=b._next;return this};e._enabled=function(b,f){if(b===this._gc)for(var d=this._first;d;)d._enabled(b,!0),d=d._next;return x.prototype._enabled.call(this,b,f)};e.progress=function(b){return!arguments.length?this._time/this.duration():this.totalTime(this.duration()*b,!1)};e.duration=function(b){if(!arguments.length)return this._dirty&&this.totalDuration(),
this._duration;0!==this.duration()&&0!==b&&this.timeScale(this._duration/b);return this};e.totalDuration=function(b){if(!arguments.length){if(this._dirty){for(var f=0,d=this._first,i=-999999999999,k;d;)k=d._next,d._startTime<i&&this._sortChildren?this.insert(d,d._startTime-d._delay):i=d._startTime,0>d._startTime&&(f-=d._startTime,this.shiftChildren(-d._startTime,!1,-9999999999)),d=d._startTime+(!d._dirty?d._totalDuration:d.totalDuration())/d._timeScale,d>f&&(f=d),d=k;this._duration=this._totalDuration=
f;this._dirty=!1}return this._totalDuration}0!==this.totalDuration()&&0!==b&&this.timeScale(this._totalDuration/b);return this};e.usesFrames=function(){for(var b=this._timeline;b._timeline;)b=b._timeline;return b===s._rootFramesTimeline};e.rawTime=function(){return this._paused||0!==this._totalTime&&this._totalTime!==this._totalDuration?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale};return q},!0);_gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(s,
x,g){var q=function(c){s.call(this,c);this._repeat=this.vars.repeat||0;this._repeatDelay=this.vars.repeatDelay||0;this._cycle=0;this._yoyo=!0==this.vars.yoyo;this._dirty=!0},n=[],c=new g(null,null,1,0),g=q.prototype=new s;g.constructor=q;g.kill()._gc=!1;q.version=1.641;g.invalidate=function(){this._yoyo=!0===this.vars.yoyo;this._repeat=this.vars.repeat||0;this._repeatDelay=this.vars.repeatDelay||0;this._uncache(!0);return s.prototype.invalidate.call(this)};g.addCallback=function(c,e,b,f){return this.insert(x.delayedCall(0,
c,b,f),e)};g.removeCallback=function(c,e){if(null==e)this._kill(null,c);else for(var b=this.getTweensOf(c,!1),f=b.length,d=this._parseTimeOrLabel(e);-1<--f;)b[f]._startTime===d&&b[f]._enabled(!1,!1);return this};g.tweenTo=function(A,e){var e=e||{},b={ease:c,overwrite:2,useFrames:this.usesFrames(),immediateRender:!1},f,d;for(f in e)b[f]=e[f];b.time=this._parseTimeOrLabel(A);d=new x(this,Math.abs(Number(b.time)-this._time)/this._timeScale||0.001,b);b.onStart=function(){d.target.paused(!0);d.vars.time!==
d.target.time()&&d.duration(Math.abs(d.vars.time-d.target.time())/d.target._timeScale);e.onStart&&e.onStart.apply(e.onStartScope||d,e.onStartParams||n)};return d};g.tweenFromTo=function(c,e,b){b=b||{};b.startAt={time:this._parseTimeOrLabel(c)};c=this.tweenTo(e,b);return c.duration(Math.abs(c.vars.time-c.vars.startAt.time)/this._timeScale||0.001)};g.render=function(c,e,b){this._gc&&this._enabled(!0,!1);this._active=!this._paused;var f=!this._dirty?this._totalDuration:this.totalDuration(),d=this._time,
i=this._totalTime,k=this._startTime,g=this._timeScale,q=this._rawPrevTime,x=this._paused,v=this._cycle,I,m;if(c>=f){this._locked||(this._totalTime=f,this._cycle=this._repeat);if(!this._reversed&&!this._hasPausedChild()&&(I=!0,m="onComplete",0===this._duration&&(0===c||0>this._rawPrevTime)))this._rawPrevTime!==c&&(b=!0);this._rawPrevTime=c;this._yoyo&&0!==(this._cycle&1)?(this._time=0,c=-1E-6):(this._time=this._duration,c=this._duration+1E-6)}else if(0>=c){this._locked||(this._totalTime=this._cycle=
0);this._time=0;if(0!==d||0===this._duration&&0<this._rawPrevTime&&!this._locked)m="onReverseComplete",I=this._reversed;0>c?(this._active=!1,0===this._duration&&0<=this._rawPrevTime&&(b=!0)):this._initted||(b=!0);this._rawPrevTime=c;c=0===this._duration?0:-1E-6}else if(this._time=this._rawPrevTime=c,!this._locked&&(this._totalTime=c,0!==this._repeat)){var B=this._duration+this._repeatDelay;this._cycle=this._totalTime/B>>0;0!==this._cycle&&this._cycle===this._totalTime/B&&this._cycle--;this._time=
this._totalTime-this._cycle*B;this._yoyo&&0!==(this._cycle&1)&&(this._time=this._duration-this._time);this._time>this._duration?(this._time=this._duration,c=this._duration+1E-6):0>this._time?this._time=c=0:c=this._time}if(this._cycle!==v&&!this._locked){var B=this._yoyo&&0!==(v&1),w=B===(this._yoyo&&0!==(this._cycle&1)),s=this._totalTime,L=this._cycle,E=this._rawPrevTime,C=this._time;this._totalTime=v*this._duration;this._cycle<v?B=!B:this._totalTime+=this._duration;this._time=d;this._rawPrevTime=
0===this._duration?q-1E-5:q;this._cycle=v;this._locked=!0;d=B?0:this._duration;this.render(d,e,0===this._duration);e||this._gc||this.vars.onRepeat&&this.vars.onRepeat.apply(this.vars.onRepeatScope||this,this.vars.onRepeatParams||n);w&&(d=B?this._duration+1E-6:-1E-6,this.render(d,!0,!1));this._time=C;this._totalTime=s;this._cycle=L;this._rawPrevTime=E;this._locked=!1}if(this._time===d&&!b)i!==this._totalTime&&this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||
n));else{this._initted||(this._initted=!0);0===i&&this.vars.onStart&&0!==this._totalTime&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||n));if(this._time>d)for(b=this._first;b;){i=b._next;if(this._paused&&!x)break;else if(b._active||b._startTime<=this._time&&!b._paused&&!b._gc)b._reversed?b.render((!b._dirty?b._totalDuration:b.totalDuration())-(c-b._startTime)*b._timeScale,e,!1):b.render((c-b._startTime)*b._timeScale,e,!1);b=i}else for(b=this._last;b;){i=b._prev;
if(this._paused&&!x)break;else if(b._active||b._startTime<=d&&!b._paused&&!b._gc)b._reversed?b.render((!b._dirty?b._totalDuration:b.totalDuration())-(c-b._startTime)*b._timeScale,e,!1):b.render((c-b._startTime)*b._timeScale,e,!1);b=i}this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||n));if(m&&!this._locked&&!this._gc&&(k===this._startTime||g!==this._timeScale))if(0===this._time||f>=this.totalDuration())I&&(this._timeline.autoRemoveChildren&&this._enabled(!1,
!1),this._active=!1),e||this.vars[m]&&this.vars[m].apply(this.vars[m+"Scope"]||this,this.vars[m+"Params"]||n)}};g.getActive=function(c,e,b){null==c&&(c=!0);null==e&&(e=!0);null==b&&(b=!1);var f=[],c=this.getChildren(c,e,b),e=0,b=c.length,d,i;for(d=0;d<b;d++)if(i=c[d],!i._paused&&i._timeline._time>=i._startTime&&i._timeline._time<i._startTime+i._totalDuration/i._timeScale){var k;a:{for(k=i._timeline;k;){if(k._paused){k=!0;break a}k=k._timeline}k=!1}k||(f[e++]=i)}return f};g.getLabelAfter=function(c){!c&&
0!==c&&(c=this._time);var e=this.getLabelsArray(),b=e.length,f;for(f=0;f<b;f++)if(e[f].time>c)return e[f].name;return null};g.getLabelBefore=function(c){null==c&&(c=this._time);for(var e=this.getLabelsArray(),b=e.length;-1<--b;)if(e[b].time<c)return e[b].name;return null};g.getLabelsArray=function(){var c=[],e=0,b;for(b in this._labels)c[e++]={time:this._labels[b],name:b};c.sort(function(b,d){return b.time-d.time});return c};g.progress=function(c){return!arguments.length?this._time/this.duration():
this.totalTime(this.duration()*(this._yoyo&&0!==(this._cycle&1)?1-c:c)+this._cycle*(this._duration+this._repeatDelay),!1)};g.totalProgress=function(c){return!arguments.length?this._totalTime/this.totalDuration():this.totalTime(this.totalDuration()*c,!1)};g.totalDuration=function(c){return!arguments.length?(this._dirty&&(s.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration):-1===this._repeat?
this:this.duration((c-this._repeat*this._repeatDelay)/(this._repeat+1))};g.time=function(c,e){if(!arguments.length)return this._time;this._dirty&&this.totalDuration();c>this._duration&&(c=this._duration);this._yoyo&&0!==(this._cycle&1)?c=this._duration-c+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(c+=this._cycle*(this._duration+this._repeatDelay));return this.totalTime(c,e)};g.repeat=function(c){if(!arguments.length)return this._repeat;this._repeat=c;return this._uncache(!0)};
g.repeatDelay=function(c){if(!arguments.length)return this._repeatDelay;this._repeatDelay=c;return this._uncache(!0)};g.yoyo=function(c){if(!arguments.length)return this._yoyo;this._yoyo=c;return this};g.currentLabel=function(c){return!arguments.length?this.getLabelBefore(this._time+1E-8):this.seek(c,!0)};return q},!0);_gsDefine("plugins.BezierPlugin",["plugins.TweenPlugin"],function(s){var x=function(){s.call(this,"bezier",-1);this._overwriteProps.pop();this._func={};this._round={}},g=x.prototype=
new s("bezier",1),q=180/Math.PI,n=[],c=[],A=[],e={},b=function(b,d,c,f){this.a=b;this.b=d;this.c=c;this.d=f;this.da=f-b;this.ca=c-b;this.ba=d-b},f=x.bezierThrough=function(i,k,f,g,q,v){var I={},m=[],B,w,q="string"===typeof q?","+q+",":",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,";null==k&&(k=1);for(w in i[0])m.push(w);n.length=c.length=A.length=0;for(B=m.length;-1<--B;){w=m[B];
e[w]=-1!==q.indexOf(","+w+",");var x=I,L=w,E;E=i;var C=w,u=e[w],y=v,G=[],F=void 0,z=void 0,s=void 0,J=void 0,h=void 0,F=void 0;if(y){E=[y].concat(E);for(z=E.length;-1<--z;)if("string"===typeof(F=E[z][C]))"="===F.charAt(1)&&(E[z][C]=y[C]+Number(F.charAt(0)+F.substr(2)))}F=E.length-2;if(0>F)G[0]=new b(E[0][C],0,0,E[-1>F?0:1][C]);else{for(z=0;z<F;z++)s=E[z][C],J=E[z+1][C],G[z]=new b(s,0,0,J),u&&(h=E[z+2][C],n[z]=(n[z]||0)+(J-s)*(J-s),c[z]=(c[z]||0)+(h-J)*(h-J));G[z]=new b(E[z][C],0,0,E[z+1][C])}E=G;
x[L]=E}for(B=n.length;-1<--B;)n[B]=Math.sqrt(n[B]),c[B]=Math.sqrt(c[B]);if(!g){for(B=m.length;-1<--B;)if(e[w]){a=I[m[B]];l=a.length-1;for(j=0;j<l;j++)r=a[j+1].da/c[j]+a[j].da/n[j],A[j]=(A[j]||0)+r*r}for(B=A.length;-1<--B;)A[B]=Math.sqrt(A[B])}for(B=m.length;-1<--B;){w=m[B];i=I[w];q=k;v=f;x=g;w=e[w];L=i.length-1;E=0;for(var C=i[0].a,t=h=J=y=F=J=s=F=z=s=G=y=u=void 0,u=0;u<L;u++)z=i[E],y=z.a,G=z.d,s=i[E+1].d,w?(J=n[u],h=c[u],t=0.25*(h+J)*q/(x?0.5:A[u]||0.5),F=G-(G-y)*(x?0.5*q:t/J),s=G+(s-G)*(x?0.5*q:
t/h),J=G-(F+(s-F)*(3*J/(J+h)+0.5)/4)):(F=G-0.5*(G-y)*q,s=G+0.5*(s-G)*q,J=G-(F+s)/2),F+=J,s+=J,z.c=F,z.b=0!=u?C:C=z.a+0.6*(z.c-z.a),z.da=G-y,z.ca=F-y,z.ba=C-y,v?(y=d(y,C,F,G),i.splice(E,1,y[0],y[1],y[2],y[3]),E+=4):E++,C=s;z=i[E];z.b=C;z.c=C+0.4*(z.d-C);z.da=z.d-z.a;z.ca=z.c-z.a;z.ba=C-z.a;v&&(y=d(z.a,C,z.c,z.d),i.splice(E,1,y[0],y[1],y[2],y[3]))}return I},d=x.cubicToQuadratic=function(b,d,c,f){var e={a:b},v={},g={},q={c:f},n=(b+d)/2,w=(d+c)/2,c=(c+f)/2,d=(n+w)/2,w=(w+c)/2,s=(w-d)/8;e.b=n+(b-n)/4;
v.b=d+s;e.c=v.a=(e.b+v.b)/2;v.c=g.a=(d+w)/2;g.b=w-s;q.b=c+(f-c)/4;g.c=q.a=(g.b+q.b)/2;return[e,v,g,q]};x.quadraticToCubic=function(d,c,f){return new b(d,(2*c+d)/3,(2*c+f)/3,f)};g.constructor=x;x.API=2;g._onInitTween=function(d,c,e){this._target=d;c instanceof Array&&(c={values:c});this._props=[];this._timeRes=null==c.timeResolution?6:parseInt(c.timeResolution);var g=c.values||[],q={},v=g[0],e=c.autoRotate||e.vars.orientToBezier,n,m,B;this._autoRotate=e?e instanceof Array?e:[["x","y","rotation",!0===
e?0:Number(e)||0]]:null;for(n in v)this._props.push(n);for(v=this._props.length;-1<--v;)n=this._props[v],this._overwriteProps.push(n),e=this._func[n]="function"===typeof d[n],q[n]=!e?parseFloat(d[n]):d[n.indexOf("set")||"function"!==typeof d["get"+n.substr(3)]?n:"get"+n.substr(3)](),B||q[n]!==g[0][n]&&(B=q);if("cubic"!==c.type&&"quadratic"!==c.type&&"soft"!==c.type)q=f(g,isNaN(c.curviness)?1:c.curviness,!1,"thruBasic"===c.type,c.correlate,B);else{e=(e=c.type)||"soft";c={};B="cubic"===e?3:2;var e=
"soft"===e,v=[],w,s,x,A,C,u,y,G,F;e&&q&&(g=[q].concat(g));if(null==g||g.length<B+1)throw"invalid Bezier data";for(s in g[0])v.push(s);for(u=v.length;-1<--u;){s=v[u];c[s]=C=[];F=0;G=g.length;for(y=0;y<G;y++)w=null==q?g[y][s]:"string"===typeof(x=g[y][s])&&"="===x.charAt(1)?q[s]+Number(x.charAt(0)+x.substr(2)):Number(x),e&&1<y&&y<G-1&&(C[F++]=(w+C[F-2])/2),C[F++]=w;G=F-B+1;for(y=F=0;y<G;y+=B)w=C[y],s=C[y+1],x=C[y+2],A=2===B?0:C[y+3],C[F++]=x=3===B?new b(w,s,x,A):new b(w,(2*s+w)/3,(2*s+x)/3,x);C.length=
F}q=c}this._beziers=q;this._segCount=this._beziers[n].length;if(this._timeRes){v=this._beziers;n=this._timeRes;n=n>>0||6;q=[];s=[];g=x=0;c=n-1;B=[];e=[];for(m in v){w=v[m];C=q;u=n;y=1/u;G=w.length;for(var z=void 0,R=void 0,J=A=F=R=void 0,h=z=void 0,t=void 0,t=J=void 0;-1<--G;){J=w[G];R=J.a;F=J.d-R;A=J.c-R;J=J.b-R;R=0;for(h=1;h<=u;h++)z=y*h,t=1-z,z=R-(R=(z*z*F+3*t*(z*A+t*J))*z),t=G*u+h-1,C[t]=(C[t]||0)+z*z}}v=q.length;for(m=0;m<v;m++)x+=Math.sqrt(q[m]),w=m%n,e[w]=x,w===c&&(g+=x,w=m/n>>0,B[w]=e,s[w]=
g,x=0,e=[]);this._length=g;this._lengths=s;this._segments=B;this._l1=this._li=this._s1=this._si=0;this._l2=this._lengths[0];this._curSeg=this._segments[0];this._s2=this._curSeg[0];this._prec=1/this._curSeg.length}if(e=this._autoRotate){e[0]instanceof Array||(this._autoRotate=e=[e]);for(v=e.length;-1<--v;)for(m=0;3>m;m++)n=e[v][m],this._func[n]="function"===typeof d[n]?d[n.indexOf("set")||"function"!==typeof d["get"+n.substr(3)]?n:"get"+n.substr(3)]:!1}return!0};g.setRatio=function(b){var d=this._segCount,
c=this._func,e=this._target,f,g,n,m,s;if(this._timeRes){f=this._lengths;m=this._curSeg;b*=this._length;g=this._li;if(b>this._l2&&g<d-1){for(d-=1;g<d&&(this._l2=f[++g])<=b;);this._l1=f[g-1];this._li=g;this._curSeg=m=this._segments[g];this._s2=m[this._s1=this._si=0]}else if(b<this._l1&&0<g){for(;0<g&&(this._l1=f[--g])>=b;);0===g&&b<this._l1?this._l1=0:g++;this._l2=f[g];this._li=g;this._curSeg=m=this._segments[g];this._s1=m[(this._si=m.length-1)-1]||0;this._s2=m[this._si]}f=g;b-=this._l1;g=this._si;
if(b>this._s2&&g<m.length-1){for(d=m.length-1;g<d&&(this._s2=m[++g])<=b;);this._s1=m[g-1];this._si=g}else if(b<this._s1&&0<g){for(;0<g&&(this._s1=m[--g])>=b;);0===g&&b<this._s1?this._s1=0:g++;this._s2=m[g];this._si=g}m=(g+(b-this._s1)/(this._s2-this._s1))*this._prec}else f=0>b?0:1<=b?d-1:d*b>>0,m=(b-f*(1/d))*d;d=1-m;for(g=this._props.length;-1<--g;)if(b=this._props[g],n=this._beziers[b][f],s=(m*m*n.da+3*d*(m*n.ca+d*n.ba))*m+n.a,this._round[b]&&(s=s+(0<s?0.5:-0.5)>>0),c[b])e[b](s);else e[b]=s;if(this._autoRotate){var d=
this._autoRotate,w,x,A,E,C;for(g=d.length;-1<--g;)b=d[g][2],E=d[g][3]||0,C=!0==d[g][4]?1:q,n=this._beziers[d[g][0]][f],s=this._beziers[d[g][1]][f],w=n.a+(n.b-n.a)*m,x=n.b+(n.c-n.b)*m,w+=(x-w)*m,x+=(n.c+(n.d-n.c)*m-x)*m,n=s.a+(s.b-s.a)*m,A=s.b+(s.c-s.b)*m,n+=(A-n)*m,A+=(s.c+(s.d-s.c)*m-A)*m,s=Math.atan2(A-n,x-w)*C+E,c[b]?c[b].call(e,s):e[b]=s}};g._roundProps=function(b,d){for(var c=this._overwriteProps,e=c.length;-1<--e;)if(b[c[e]]||b.bezier||b.bezierThrough)this._round[c[e]]=d};g._kill=function(b){var d=
this._props,c,e;for(c in _beziers)if(c in b){delete this._beziers[c];delete this._func[c];for(e=d.length;-1<--e;)d[e]===c&&d.splice(e,1)}return s.prototype._kill.call(this,b)};s.activate([x]);return x},!0);_gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(s){var x=function(){s.call(this,"css");this._overwriteProps.length=0},g,q,n,c,A={},e=x.prototype=new s("css");e.constructor=x;x.version=1.641;x.API=2;x.defaultTransformPerspective=0;e="px";x.suffixMap={top:e,right:e,bottom:e,
left:e,width:e,height:e,fontSize:e,padding:e,margin:e,perspective:e};var b=/(?:\d|\-\d|\.\d|\-\.\d)+/g,f=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,d=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,i=/[^\d\-\.]/g,k=/(?:\d|\-|\+|=|#|\.)*/g,M=/opacity *= *([^)]*)/,aa=/opacity:([^;]*)/,W=/([A-Z])/g,v=/-([a-z])/gi,I=function(b,h){return h.toUpperCase()},m=/(?:Left|Right|Width)/i,B=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,w=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,S=Math.PI/180,L=180/
Math.PI,E={},C=document,u=C.createElement("div"),y=navigator.userAgent,G,F,z,R,J,h,t=y.indexOf("Android"),p=C.createElement("div");R=(z=-1!==y.indexOf("Safari")&&-1===y.indexOf("Chrome")&&(-1===t||3<Number(y.substr(t+8,1))))&&6>Number(y.substr(y.indexOf("Version/")+8,1));/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(y);J=parseFloat(RegExp.$1);p.innerHTML="<a style='top:1px;opacity:.55;'>a</a>";h=(y=p.getElementsByTagName("a")[0])?/^0.55/.test(y.style.opacity):!1;var H=function(b){return M.test("string"===typeof b?
b:(b.currentStyle?b.currentStyle.filter:b.style.filter)||"")?parseFloat(RegExp.$1)/100:1},D="",N="",U=function(b,h){var h=h||u,d=h.style,c,e;if(void 0!==d[b])return b;b=b.charAt(0).toUpperCase()+b.substr(1);c=["O","Moz","ms","Ms","Webkit"];for(e=5;-1<--e&&void 0===d[c[e]+b];);return 0<=e?(N=3===e?"ms":c[e],D="-"+N.toLowerCase()+"-",N+b):null},K=C.defaultView?C.defaultView.getComputedStyle:function(){},Q=x.getStyle=function(b,X,d,c,e){var f;if(!h&&"opacity"===X)return H(b);!c&&b.style[X]?f=b.style[X]:
(d=d||K(b,null))?f=(b=d.getPropertyValue(X.replace(W,"-$1").toLowerCase()))||d.length?b:d[X]:b.currentStyle&&(d=b.currentStyle,f=d[X],!f&&"backgroundPosition"===X&&(f=d[X+"X"]+" "+d[X+"Y"]));return null!=e&&(!f||"none"===f||"auto"===f||"auto auto"===f)?e:f},ea=function(b,d){var c={},e;if(d=d||K(b,null))if(e=d.length)for(;-1<--e;)c[d[e].replace(v,I)]=d.getPropertyValue(d[e]);else for(e in d)c[e]=d[e];else if(d=b.currentStyle||b.style)for(e in d)c[e.replace(v,I)]=d[e];h||(c.opacity=H(b));e=ga(b,d,!1);
c.rotation=e.rotation*L;c.rotationX=e.rotationX*L;c.rotationY=e.rotationY*L;c.skewX=e.skewX*L;c.scaleX=e.scaleX;c.scaleY=e.scaleY;c.scaleZ=e.scaleZ;c.x=e.x;c.y=e.y;c.z=e.z;c.filters&&delete c.filters;return c},la=function(b,h,d,c){var e={},b=b.style,f,p,t;for(p in d)if("cssText"!==p&&"length"!==p&&isNaN(p)&&h[p]!==(f=d[p]))if(-1===p.indexOf("Origin")&&("number"===typeof f||"string"===typeof f))e[p]=(""===f||"auto"===f||"none"===f)&&"string"===typeof h[p]&&""!==h[p].replace(i,"")?0:f,void 0!==b[p]&&
(t=new ha(b,p,b[p],t));if(c)for(p in c)"className"!==p&&(e[p]=c[p]);return{difs:e,firstMPT:t}},qa={width:["Left","Right"],height:["Top","Bottom"]},ra=["marginLeft","marginRight","marginTop","marginBottom"],Y=function(b,h,d,c,e){if("px"===c||!c)return d;if("auto"===c||!d)return 0;var f=m.test(h),p=b,t=u.style,g=0>d;g&&(d=-d);"%"===c&&-1!==h.indexOf("border")?f=d/100*(f?b.clientWidth:b.clientHeight):(t.cssText="border-style:solid; border-width:0; position:absolute; line-height:0;","%"===c||"em"===c||
!p.appendChild?(p=b.parentNode||C.body,t[f?"width":"height"]=d+c):t[f?"borderLeftWidth":"borderTopWidth"]=d+c,p.appendChild(u),f=parseFloat(u[f?"offsetWidth":"offsetHeight"]),p.removeChild(u),0===f&&!e&&(f=Y(b,h,d,c,!0)));return g?-f:f},ia=function(b,h){if(null==b||""===b||"auto"===b||"auto auto"===b)b="0 0";var d=b.split(" "),c=-1!==b.indexOf("left")?"0%":-1!==b.indexOf("right")?"100%":d[0],e=-1!==b.indexOf("top")?"0%":-1!==b.indexOf("bottom")?"100%":d[1];null==e?e="0":"center"===e&&(e="50%");if("center"===
c||isNaN(parseFloat(c)))c="50%";h&&(h.oxp=-1!==c.indexOf("%"),h.oyp=-1!==e.indexOf("%"),h.oxr="="===c.charAt(1),h.oyr="="===e.charAt(1),h.ox=parseFloat(c.replace(i,"")),h.oy=parseFloat(e.replace(i,"")));return c+" "+e+(2<d.length?" "+d[2]:"")},ma=function(b,h){return"string"===typeof b&&"="===b.charAt(1)?parseInt(b.charAt(0)+"1")*parseFloat(b.substr(2)):parseFloat(b)-parseFloat(h)},Z=function(b,h){return null==b?h:"string"===typeof b&&"="===b.charAt(1)?parseInt(b.charAt(0)+"1")*Number(b.substr(2))+
h:Number(b)},ba=function(b,h){if(null==b)return h;var d=-1===b.indexOf("rad")?S:1,c="="===b.charAt(1),b=Number(b.replace(i,""))*d;return c?b+h:b},ja=function(b,h){var d=(("number"===typeof b?b*S:ba(b,h))-h)%(2*Math.PI);d!==d%Math.PI&&(d+=Math.PI*(0>d?2:-2));return h+d},ca={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],
gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ka=function(h){if(!h||""===h)return ca.black;if(ca[h])return ca[h];if("number"===typeof h)return[h>>16,h>>8&255,h&255];if("#"===h.charAt(0)){if(4===h.length)var d=h.charAt(1),c=h.charAt(2),h=h.charAt(3),h="#"+d+d+c+c+h+h;h=parseInt(h.substr(1),16);return[h>>16,h>>8&255,h&255]}h=h.match(b)||ca.transparent;h[0]=Number(h[0]);h[1]=Number(h[1]);h[2]=Number(h[2]);3<h.length&&
(h[3]=Number(h[3]));return h},$="(?:\\b(?:(?:rgb|rgba)\\(.+?\\))|\\B#.+?\\b";for(e in ca)$+="|"+e+"\\b";var $=RegExp($+")","gi"),na=function(h,c,e){if(null==h)return function(b){return b};var f=c?(h.match($)||[""])[0]:"",p=h.split(f).join("").match(d)||[],t=h.substr(0,h.indexOf(p[0])),u=")"===h.charAt(h.length-1)?")":"",g=-1!==h.indexOf(" ")?" ":",",i=p.length,k=0<i?p[0].replace(b,""):"";return c?function(b){"number"===typeof b&&(b+=k);var h=(b.match($)||[f])[0],b=b.split(h).join("").match(d)||[],
c=b.length;if(i>c--)for(;++c<i;)b[c]=e?b[(c-1)/2>>0]:p[c];return t+b.join(g)+g+h+u}:function(b){"number"===typeof b&&(b+=k);var b=b.match(d)||[],h=b.length;if(i>h--)for(;++h<i;)b[h]=e?b[(h-1)/2>>0]:p[h];return t+b.join(g)+u}},y=function(b){b=b.split(",");return function(h,d,c,e,f,p,t){d=(d+"").split(" ");t={};for(c=0;4>c;c++)t[b[c]]=d[c]=d[c]||d[(c-1)/2>>0];return e.parse(h,t,f,p)}},sa=function(b){this.plugin.setRatio(b);for(var b=this.data,h=b.proxy,d=b.firstMPT,c;d;)c=h[d.v],d.r?c=0<c?c+0.5>>0:
c-0.5>>0:1E-6>c&&-1E-6<c&&(c=0),d.t[d.p]=c,d=d._next;b.autoRotate&&(b.autoRotate.rotation=h.rotation)},ha=function(b,h,d,c,e){this.t=b;this.p=h;this.v=d;this.r=e;c&&(c._prev=this,this._next=c)},O=function(b,h,d,e,f,p,t,u,i,k,n){this.t=b;this.p=h;this.s=d;this.c=e;this.n=t||"css_"+h;b instanceof O||c.push(this.n);this.r=u;this.type=p||0;i&&(this.pr=i,g=!0);this.b=void 0===k?d:k;this.e=void 0===n?d+e:n;f&&(this._next=f,f._prev=this)},fa=x.parseComplex=function(d,c,e,p,t,u,g,i,k,n){var g=new O(d,c,0,
0,g,n?2:1,null,!1,i,e,p),d=e.split(", ").join(",").split(" "),c=(p+"").split(", ").join(",").split(" "),e=d.length,i=!1!==G,q,H,s,m,D;e!==c.length&&(d=(u||"").split(" "),e=d.length);g.plugin=k;g.setRatio=n;for(u=0;u<e;u++)if(k=d[u],q=c[u],(n=parseFloat(k))||0===n)g.appendXtra("",n,ma(q,n),q.replace(f,""),i&&-1!==q.indexOf("px"),!0);else if(t&&("#"===k.charAt(0)||0===k.indexOf("rgb")||ca[k]))k=ka(k),q=ka(q),(n=6<k.length+q.length)&&!h&&0===q[3]?(g["xs"+g.l]+=g.l?" transparent":"transparent",g.e=g.e.split(c[u]).join("transparent")):
(g.appendXtra(n?"rgba(":"rgb(",k[0],q[0]-k[0],",",!0,!0).appendXtra("",k[1],q[1]-k[1],",",!0).appendXtra("",k[2],q[2]-k[2],n?",":")",!0),n&&(k=4>k.length?1:k[3],g.appendXtra("",k,(4>q.length?1:q[3])-k,")",!1)));else if(n=k.match(b)){s=q.match(f);if(!s||s.length!==n.length)return g;for(q=H=0;q<n.length;q++)D=n[q],m=k.indexOf(D,H),g.appendXtra(k.substr(H,m-H),Number(D),ma(s[q],D),"",i&&"px"===k.substr(m+D.length,2),0===q),H=m+D.length;g["xs"+g.l]+=k.substr(H)}else g["xs"+g.l]+=g.l?" "+k:k;if(-1!==p.indexOf("=")&&
g.data){p=g.xs0+g.data.s;for(u=1;u<g.l;u++)p+=g["xs"+u]+g.data["xn"+u];g.e=p+g["xs"+u]}g.l||(g.type=-1,g.xs0=g.e);return g.xfirst||g},V=8,e=O.prototype;for(e.l=e.pr=0;0<--V;)e["xn"+V]=0,e["xs"+V]="";e.xs0="";e._next=e._prev=e.xfirst=e.data=e.plugin=e.setRatio=e.rxp=null;e.appendXtra=function(b,h,d,c,e,f){var p=this.l;this["xs"+p]+=f&&p?" "+b:b||"";if(!d&&0!==p&&!this.plugin)return this["xs"+p]+=h+(c||""),this;this.l++;this.type=this.setRatio?2:1;this["xs"+this.l]=c||"";if(0<p)return this.data["xn"+
p]=h+d,this.rxp["xn"+p]=e,this["xn"+p]=h,this.plugin||(this.xfirst=new O(this,"xn"+p,h,d,this.xfirst||this,0,this.n,e,this.pr),this.xfirst.xs0=0),this;this.data={s:h+d};this.rxp={};this.s=h;this.c=d;this.r=e;return this};var oa=function(b,h,d,c,e,p,f){this.p=c?U(b)||b:b;A[b]=A[this.p]=this;this.format=p||na(h,e);d&&(this.parse=d);this.clrs=e;this.dflt=h;this.pr=f||0},P=function(b,h,d,c,e,p,f){for(var b=b.split(","),h=h instanceof Array?h:[h],t=b.length;-1<--t;)new oa(b[t],h[t],d,c&&0===t,e,p,f)},
e=oa.prototype;e.parseComplex=function(b,h,d,c,e,p){return fa(b,this.p,h,d,this.clrs,this.dflt,c,this.pr,e,p)};e.parse=function(b,h,d,c,e,p){return this.parseComplex(b.style,this.format(Q(b,d,n,!1,this.dflt)),this.format(h),e,p)};x.registerSpecialProp=function(b,h,d){return P(b,null,function(b,c,e,p,f,t){e=new O(b,e,0,0,f,2,e,!1,d);e.plugin=t;e.setRatio=h(b,c,p._tween);return e},!1,!1,null,d)};var pa="scaleX scaleY scaleZ x y z skewX rotation rotationX rotationY perspective".split(" "),T=U("transform"),
ta=D+"transform",ua=U("transformOrigin"),da=null!==U("perspective"),ga=function(b,h,d){var c=d?b._gsTransform||{skewY:0}:{skewY:0},e=0>c.scaleX,p,f;T?p=Q(b,ta,h,!0):b.currentStyle&&(p=(p=b.currentStyle.filter.match(B))&&4===p.length?p[0].substr(4)+","+Number(p[2].substr(4))+","+Number(p[1].substr(4))+","+p[3].substr(4)+","+(c?c.x:0)+","+(c?c.y:0):null);p=(p||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[];for(f=p.length;-1<--f;)p[f]=Number(p[f]);if(16===p.length){if(!d||p[12]!==c.x||p[13]!==c.y||p[14]!==
c.z){var e=p[0],t=p[1],g=p[2],u=p[3],k=p[4],i=p[5],n=p[6],q=p[7],H=p[8],s=p[9],D=p[10],m=p[11],w=c.rotationX=Math.atan2(n,D),y,N,v,K;w&&(v=Math.cos(-w),K=Math.sin(-w),w=k*v+H*K,y=i*v+s*K,N=n*v+D*K,H=k*-K+H*v,s=i*-K+s*v,D=n*-K+D*v,m=q*-K+m*v,k=w,i=y,n=N);if(w=c.rotationY=Math.atan2(H,e))v=Math.cos(-w),K=Math.sin(-w),y=t*v-s*K,N=g*v-D*K,s=t*K+s*v,D=g*K+D*v,m=u*K+m*v,e=e*v-H*K,t=y,g=N;if(w=c.rotation=Math.atan2(t,i))v=Math.cos(-w),K=Math.sin(-w),e=e*v+k*K,y=t*v+i*K,i=t*-K+i*v,n=g*-K+n*v,t=y;Math.abs(c.rotationY)>
Math.PI/2&&(c.rotationY*=-1,c.rotationX+=Math.PI,c.rotation=Math.PI-c.rotation);c.scaleX=Math.sqrt(e*e+t*t);c.scaleY=Math.sqrt(i*i+s*s);c.scaleZ=Math.sqrt(n*n+D*D);c.skewX=0;c.perspective=m?1/m:0;c.x=p[12];c.y=p[13];c.z=p[14]}}else if(!da||0===p.length||c.x!==p[4]||c.y!==p[5]||!c.rotationX&&!c.rotationY)t=(k=6<=p.length)?p[0]:1,g=p[1]||0,u=p[2]||0,k=k?p[3]:1,c.x=p[4]||0,c.y=p[5]||0,c.scaleX=Math.sqrt(t*t+g*g),c.scaleY=Math.sqrt(k*k+u*u),c.rotation=t||g?Math.atan2(g,t):c.rotation||0,c.skewX=u||k?Math.atan2(u,
k)+c.rotation:c.skewX||0,Math.abs(c.skewX)>Math.PI/2&&(e?(c.scaleX*=-1,c.skewX+=0>=c.rotation?Math.PI:-Math.PI,c.rotation+=0>=c.rotation?Math.PI:-Math.PI):(c.scaleY*=-1,c.skewX+=0>=c.skewX?Math.PI:-Math.PI)),da&&(c.rotationX=c.rotationY=c.z=0,c.perspective=parseFloat(x.defaultTransformPerspective)||0,c.scaleZ=1);c.zOrigin=da?parseFloat(Q(b,ua,h,!1,"0 0 0").split(" ")[2])||c.zOrigin||0:0;for(f in c)1E-6>c[f]&&-1E-6<c[f]&&(c[f]=0);d&&(b._gsTransform=c);return c},va=function(b){var h=this.data,c=-h.rotation,
d=c+h.skewX,e=Math.cos(c)*h.scaleX,c=Math.sin(c)*h.scaleX,p=Math.sin(d)*-h.scaleY,d=Math.cos(d)*h.scaleY,f=1E-6,t=this.t.style,g=this.t.currentStyle,u;if(g){e<f&&e>-f&&(e=0);c<f&&c>-f&&(c=0);p<f&&p>-f&&(p=0);d<f&&d>-f&&(d=0);f=c;c=-p;p=-f;f=g.filter;t.filter="";var i=this.t.offsetWidth;u=this.t.offsetHeight;var n="absolute"!==g.position,q="progid:DXImageTransform.Microsoft.Matrix(M11="+e+", M12="+c+", M21="+p+", M22="+d,H=h.x,s=h.y,D,m;null!=h.ox&&(D=(h.oxp?0.01*i*h.ox:h.ox)-i/2,m=(h.oyp?0.01*u*h.oy:
h.oy)-u/2,H+=D-(D*e+m*c),s+=m-(D*p+m*d));if(n)D=i/2,m=u/2,q+=", Dx="+(D-(D*e+m*c)+H)+", Dy="+(m-(D*p+m*d)+s)+")";else{var v=8>J?1:-1;D=h.ieOffsetX||0;m=h.ieOffsetY||0;h.ieOffsetX=Math.round((i-((0>e?-e:e)*i+(0>c?-c:c)*u))/2+H);h.ieOffsetY=Math.round((u-((0>d?-d:d)*u+(0>p?-p:p)*i))/2+s);for(V=0;4>V;V++)i=ra[V],u=g[i],u=-1!==u.indexOf("px")?parseFloat(u):Y(this.t,i,parseFloat(u),u.replace(k,""))||0,H=u!==h[i]?2>V?-h.ieOffsetX:-h.ieOffsetY:2>V?D-h.ieOffsetX:m-h.ieOffsetY,t[i]=(h[i]=Math.round(u-H*(0===
V||2===V?1:v)))+"px";q+=", sizingMethod='auto expand')"}t.filter=-1!==f.indexOf("DXImageTransform.Microsoft.Matrix(")?f.replace(w,q):q+" "+f;if(0===b||1===b)if(1===e&&0===c&&0===p&&1===d&&(!n||-1!==q.indexOf("Dx=0, Dy=0")))(!M.test(f)||100===parseFloat(RegExp.$1))&&t.removeAttribute("filter")}},wa=function(){var b=this.data,h=b.perspective,c=b.scaleX,d=0,e=0,p=0,f=0,t=b.scaleY,u=0,g=0,i=0,k=0,n=b.scaleZ,q=0,H=0,s=0,D=h?-1/h:0,m=b.rotation,w=b.zOrigin,v,K,x,y,N;m&&(v=Math.cos(m),m=Math.sin(m),x=t*
m,d=c*-m,t*=v,c*=v,f=x);if(m=b.rotationY)v=Math.cos(m),m=Math.sin(m),y=n*-m,N=D*-m,e=c*m,u=f*m,n*=v,D*=v,c*=v,f*=v,i=y,H=N;if(m=b.rotationX)v=Math.cos(m),m=Math.sin(m),K=d*v+e*m,x=t*v+u*m,y=k*v+n*m,N=s*v+D*m,e=d*-m+e*v,u=t*-m+u*v,n=k*-m+n*v,D=s*-m+D*v,d=K,t=x,k=y,s=N;w&&(q-=w,K=e*q,x=u*q,y=n*q+w,p=1E-6>K&&-1E-6<K?0:K,g=1E-6>x&&-1E-6<x?0:x,q=1E-6>y&&-1E-6<y?0:y);p+=b.x;g+=b.y;q+=b.z;this.t.style[T]="matrix3d("+(1E-6>c&&-1E-6<c?0:c)+","+(1E-6>f&&-1E-6<f?0:f)+","+(1E-6>i&&-1E-6<i?0:i)+","+(1E-6>H&&-1E-6<
H?0:H)+","+(1E-6>d&&-1E-6<d?0:d)+","+(1E-6>t&&-1E-6<t?0:t)+","+(1E-6>k&&-1E-6<k?0:k)+","+(1E-6>s&&-1E-6<s?0:s)+","+(1E-6>e&&-1E-6<e?0:e)+","+(1E-6>u&&-1E-6<u?0:u)+","+(1E-6>n&&-1E-6<n?0:n)+","+(1E-6>D&&-1E-6<D?0:D)+","+p+","+g+","+q+","+(h?1+-q/h:1)+")"},xa=function(){var b=this.data;if(!b.rotation&&!b.skewX)this.t.style[T]="matrix("+b.scaleX+",0,0,"+b.scaleY+","+b.x+","+b.y+")";else{var h=b.rotation,c=h-b.skewX,d=Math.cos(h)*b.scaleX,h=Math.sin(h)*b.scaleX,e=Math.sin(c)*-b.scaleY,c=Math.cos(c)*b.scaleY;
this.t.style[T]="matrix("+(1E-6>d&&-1E-6<d?0:d)+","+(1E-6>h&&-1E-6<h?0:h)+","+(1E-6>e&&-1E-6<e?0:e)+","+(1E-6>c&&-1E-6<c?0:c)+","+b.x+","+b.y+")"}};P("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective",null,function(b,h,c,d,e,p,f){if(d._transform)return e;var h=d._transform=ga(b,n,!0),t=b.style,u=pa.length,g,i;if("string"===typeof f.transform&&T)c=t[T],t[T]=f.transform,
g=ga(b,null,!1),t[T]=c;else if("object"===typeof f){c=null!=f.rotation?f.rotation:null!=f.rotationZ?f.rotationZ:h.rotation*L;g={scaleX:Z(null!=f.scaleX?f.scaleX:f.scale,h.scaleX),scaleY:Z(null!=f.scaleY?f.scaleY:f.scale,h.scaleY),scaleZ:Z(null!=f.scaleZ?f.scaleZ:f.scale,h.scaleZ),x:Z(f.x,h.x),y:Z(f.y,h.y),z:Z(f.z,h.z),perspective:Z(f.transformPerspective,h.perspective)};g.rotation=null!=f.shortRotation||null!=f.shortRotationZ?ja(f.shortRotation||f.shortRotationZ||0,h.rotation):"number"===typeof c?
c*S:ba(c,h.rotation);da&&(g.rotationX=null!=f.shortRotationX?ja(f.shortRotationX,h.rotationX):"number"===typeof f.rotationX?f.rotationX*S:ba(f.rotationX,h.rotationX),g.rotationY=null!=f.shortRotationY?ja(f.shortRotationY,h.rotationY):"number"===typeof f.rotationY?f.rotationY*S:ba(f.rotationY,h.rotationY),1E-6>g.rotationX&&-1E-6<g.rotationX&&(g.rotationX=0),1E-6>g.rotationY&&-1E-6<g.rotationY&&(g.rotationY=0));g.skewX=null==f.skewX?h.skewX:"number"===typeof f.skewX?f.skewX*S:ba(f.skewX,h.skewX);g.skewY=
null==f.skewY?h.skewY:"number"===typeof f.skewY?f.skewY*S:ba(f.skewY,h.skewY);if(c=g.skewY-h.skewY)g.skewX+=c,g.rotation+=c;1E-6>g.skewY&&-1E-6<g.skewY&&(g.skewY=0);1E-6>g.skewX&&-1E-6<g.skewX&&(g.skewX=0);1E-6>g.rotation&&-1E-6<g.rotation&&(g.rotation=0)}i=h.z||h.rotationX||h.rotationY||g.z||g.rotationX||g.rotationY;if(T){if(z){F=!0;if(""===t.zIndex&&(c=Q(b,"zIndex",n),"auto"===c||""===c))t.zIndex=0;R&&(t.WebkitBackfaceVisibility=f.WebkitBackfaceVisibility||(i?"visible":"hidden"))}}else t.zoom=1;
e=new O(b,"transform",0,0,e,2);e.setRatio=i&&da?wa:T?xa:va;e.plugin=p;for(e.data=h;-1<--u;)if(c=pa[u],i=g[c]-h[c],1E-6<i||-1E-6>i||null!=E[c])e=new O(h,c,h[c],i,e),e.xs0=0,e.plugin=p,d._overwriteProps.push(e.n);if(null!=(i=f.transformOrigin))i+="",T?(c=T+"Origin",e=new O(t,c,0,0,e,-1,"css_transformOrigin"),e.b=t[c],e.xs0=e.e=t[c]=i,e.plugin=p,da&&(c=h.zOrigin,i=i.split(" "),h.zOrigin=parseFloat(i[2])||0,e.xs0=e.e=i[0]+(i[1]||""),e=new O(h,"zOrigin",0,0,e,-1,e.n),e.b=c,e.xs0=e.e=h.zOrigin)):ia(i,h);
return e.t===b?(e._next&&(e._next._prev=null),e._next):e},!0);P("boxShadow","0px 0px 0px 0px #999",null,!0,!0);P("borderRadius","0px",function(b,h,c,d,e){var h=this.format(h),d=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],f=b.style,p,t,g,u,i,k,m,H,s,D,v,w;H=parseFloat(b.offsetWidth);s=parseFloat(b.offsetHeight);h=h.split(" ");for(p=0;p<d.length;p++)this.p.indexOf("border")&&(d[p]=U(d[p])),u=g=Q(b,d[p],n,!1,"0px"),i=t=h[p],k=parseFloat(u),v=u.substr((k+
"").length),(w="="===i.charAt(1))?(m=parseInt(i.charAt(0)+"1"),i=i.substr(2),m*=parseFloat(i),D=i.substr((m+"").length-(0>m?1:0))||""):(m=parseFloat(i),D=i.substr((m+"").length)),""===D&&(D=q[c]||v),D!==v&&(u=Y(b,"borderLeft",k,v),k=Y(b,"borderTop",k,v),"%"===D?(u=100*(u/H)+"%",g=100*(k/s)+"%"):"em"===D?(v=Y(b,"borderLeft",1,"em"),u=u/v+"em",g=k/v+"em"):(u+="px",g=k+"px"),w&&(i=parseFloat(u)+m+D,t=parseFloat(g)+m+D)),e=fa(f,d[p],u+" "+g,i+" "+t,!1,"0px",e);return e},!0,!1,na("0px 0px 0px 0px",!1,
!0));P("backgroundPosition","0 0",null,!1,!1,ia);P("backgroundSize","0 0",null,!1,!1,ia);P("perspective","0px",null,!0);P("margin",null,y("marginTop,marginRight,marginBottom,marginLeft"));P("padding",null,y("paddingTop,paddingRight,paddingBottom,paddingLeft"));P("clip","rect(0px,0px,0px,0px)");P("textShadow","0px 0px 0px #999",null,!1,!0);P("autoRound",null,function(b,h,c,d,e){return e});P("border","0px solid #000",function(b,h,c,d,e,p){return this.parseComplex(b.style,this.format(Q(b,"borderTopWidth",
n,!1,"0px")+" "+Q(b,"borderTopStyle",n,!1,"solid")+" "+Q(b,"borderTopColor",n,!1,"#000")),this.format(h),e,p)},!1,!0,function(b){var h=b.split(" ");return h[0]+" "+(h[1]||"solid")+" "+(b.match($)||["#000"])[0]});var ya=function(b){var h=this.t,b=this.s+this.c*b,c;100===b&&(h.removeAttribute("filter"),c=!Q(this.data,"filter"));c||(this.xn1&&(h.filter=h.filter||"alpha(opacity=100)"),h.filter=-1===h.filter.indexOf("opacity")?h.filter+(" alpha(opacity="+(b>>0)+")"):h.filter.replace(M,"opacity="+(b>>0)))};
P("opacity,alpha,autoAlpha","1",function(b,c,d,e,p,f){var t=parseFloat(Q(b,"opacity",n,!1,"1")),c=parseFloat(c),g=b.style,u;"autoAlpha"===d&&(u=Q(b,"visibility",n),1===t&&"hidden"===u&&(t=0),p=new O(g,"visibility",0,0,p,-1,null,!1,0,0!==t?"visible":"hidden",0===c?"hidden":"visible"),p.xs0="visible",e._overwriteProps.push(p.n));h?p=new O(g,"opacity",t,c-t,p):(p=new O(g,"opacity",100*t,100*(c-t),p),p.xn1="autoAlpha"===d?1:0,g.zoom=1,p.type=2,p.b="alpha(opacity="+p.s+")",p.e="alpha(opacity="+(p.s+p.c)+
")",p.data=b,p.plugin=f,p.setRatio=ya);return p});P("bezier",null,function(b,h,c,d,e,p){p=window.com.greensock.plugins.BezierPlugin;if(!p)return window.console&&console.log("ERROR: BezierPlugin not loaded."),e;h instanceof Array&&(h={values:h});e=new O(b,"bezier",0,0,e,2);e.plugin=p=new p;e.setRatio=sa;var f=h.values,t=f.length-1,g=[],u={},i,k;for(i=0;i<=t;i++){k=b;var n=f[i],q=d,m=e,D=p,H=t!==i,s=m,v={},w={},K=q._transform,x=E,y=void 0,N=void 0,z=void 0,U=void 0,B=void 0;q._transform=null;E=n;m=
B=q.parse(k,n,m,D);E=x;H&&(q._transform=K,s&&(s._prev=null,s._prev&&(s._prev._next=null)));for(;m&&m!==s;){if(0===m.type||1===m.type)if(N=m.p,w[N]=m.s+m.c,v[N]=m.s,H||(U=new ha(m,"s",N,U,m.r),m.c=0),1===m.type)for(y=m.l;0<--y;)z="xn"+y,N=m.p+"_"+z,w[N]=m.data[z],v[N]=m[z],H||(U=new ha(m,z,N,U,m.rxp[z]));m=m._next}k={proxy:v,end:w,firstMPT:U,pt:B};g[i]=k.end}for(c in h)u[c]=h[c];u.values=g;e.data=k;e=k.pt;0===u.autoRotate&&(u.autoRotate=!0);u.autoRotate&&!(u.autoRotate instanceof Array)&&(i=!0==u.autoRotate?
0:Number(u.autoRotate)*S,u.autoRotate=null!=k.end.left?[["left","top","rotation",i,!0]]:null!=k.end.x?[["x","y","rotation",i,!0]]:!1);u.autoRotate&&(d._transform||(e=A.rotation.parse(b,0,c,d,e,p,{})),k.autoRotate=d._transform);p._onInitTween(k.proxy,u,d._tween);return e});var za=function(b){if(1===b||0===b){this.t.className=1===b?this.e:this.b;for(var b=this.data,h=this.t.style,c=h.removeProperty?"removeProperty":"removeAttribute";b;){if(b.v)h[b.p]=b.v;else h[c](b.p);b=b._next}}else this.t.className!==
this.b&&(this.t.className=this.b)};P("className",null,function(b,h,c,d,e,p,f){var t=b.className,e=new O(b,c,0,0,e,2);e.setRatio=za;e.b=t;e.e="="!==h.charAt(1)?h:"+"===h.charAt(0)?t+" "+h.substr(2):t.split(h.substr(2)).join("");d._tween._duration&&(h=ea(b,n),b.className=e.e,f=la(b,h,ea(b),f),b.className=t,e.data=f.firstMPT,e=d.parse(b,f.difs,e,p));return e});e=x.prototype;e._firstPT=null;e._onInitTween=function(b,d,e){if(!b.nodeType)return!1;this._target=b;this._tween=e;G=d.autoRound;g=!1;q=d.suffixMap||
x.suffixMap;n=K(b,"");c=this._overwriteProps;var e=b.style,p,f,t;if(F&&""===e.zIndex&&(p=Q(b,"zIndex",n),"auto"===p||""===p))e.zIndex=0;"string"===typeof d&&(f=e.cssText,p=ea(b,n),e.cssText=f+";"+d,p=la(b,p,ea(b)).difs,!h&&aa.test(d)&&(p.opacity=parseFloat(RegExp.$1)),d=p,e.cssText=f);this._firstPT=b=this.parse(b,d,null);if(g){for(;b;){e=b._next;for(d=f;d&&d.pr>b.pr;)d=d._next;(b._prev=d?d._prev:t)?b._prev._next=b:f=b;(b._next=d)?d._prev=b:t=b;b=e}this._firstPT=f}return!0};e.parse=function(b,h,c,
d){var e=b.style,p,f,t,g,u,i,k,m;for(p in h){u=h[p];if(f=A[p])c=f.parse(b,u,p,this,c,d,h);else if(f=Q(b,p,n)+"",k="string"===typeof u,"color"===p||"fill"===p||"stroke"===p||-1!==p.indexOf("Color")||k&&!u.indexOf("rgb"))k||(u=ka(u),u=(3<u.length?"rgba(":"rgb(")+u.join(",")+")"),c=fa(e,p,f,u,!0,"transparent",c,0,d);else if(k&&(-1!==u.indexOf(" ")||-1!==u.indexOf(",")))c=fa(e,p,f,u,!0,null,c,0,d);else{t=parseFloat(f);i=f.substr((t+"").length);if(""===f||"auto"===f)if("width"===p||"height"===p){t=b;m=
p;g=n;i=parseFloat("width"===m?t.offsetWidth:t.offsetHeight);m=qa[m];var H=m.length;for(g=g||K(t,null);-1<--H;)i-=parseFloat(Q(t,"padding"+m[H],g,!0))||0,i-=parseFloat(Q(t,"border"+m[H]+"Width",g,!0))||0;t=i;i="px"}else t="opacity"!==p?0:1,i="";(m=k&&"="===u.charAt(1))?(g=parseInt(u.charAt(0)+"1"),u=u.substr(2),g*=parseFloat(u),k=u.substr((g+"").length-(0>g?1:0))||""):(g=parseFloat(u),k=k?u.substr((g+"").length)||"":"");""===k&&(k=q[p]||i);u=g||0===g?(m?g+t:g)+k:h[p];if(i!==k&&""!==k&&(g||0===g))if(t||
0===t)if(t=Y(b,p,t,i),"%"===k?(t/=Y(b,p,100,"%")/100,100<t&&(t=100)):"em"===k?t/=Y(b,p,1,"em"):(g=Y(b,p,g,k),k="px"),m&&(g||0===g))u=g+t+k;m&&(g+=t);(t||0===t)&&(g||0===g)&&t!==g?(c=new O(e,p,t,g-t,c,0,"css_"+p,!1!==G&&("px"===k||"zIndex"===p),0,f,u),c.xs0=k):(c=new O(e,p,0,0,c,-1,"css_"+p,!1,0,f,u),c.xs0="display"===p&&"none"===u?f:u)}d&&(c&&!c.plugin)&&(c.plugin=d)}return c};e.setRatio=function(b){var h=this._firstPT,c,d;if(1===b&&(this._tween._time===this._tween._duration||0===this._tween._time))for(;h;)2!==
h.type?h.t[h.p]=h.e:h.setRatio(b),h=h._next;else if(b||!(this._tween._time===this._tween._duration||0===this._tween._time))for(;h;){c=h.c*b+h.s;h.r?c=0<c?c+0.5>>0:c-0.5>>0:1E-6>c&&-1E-6<c&&(c=0);if(h.type)if(1===h.type)if(d=h.l,2===d)h.t[h.p]=h.xs0+c+h.xs1+h.xn1+h.xs2;else if(3===d)h.t[h.p]=h.xs0+c+h.xs1+h.xn1+h.xs2+h.xn2+h.xs3;else if(4===d)h.t[h.p]=h.xs0+c+h.xs1+h.xn1+h.xs2+h.xn2+h.xs3+h.xn3+h.xs4;else if(5===d)h.t[h.p]=h.xs0+c+h.xs1+h.xn1+h.xs2+h.xn2+h.xs3+h.xn3+h.xs4+h.xn4+h.xs5;else{c=h.xs0+
c+h.xs1;for(d=1;d<h.l;d++)c+=h["xn"+d]+h["xs"+(d+1)];h.t[h.p]=c}else-1===h.type?h.t[h.p]=h.xs0:h.setRatio&&h.setRatio(b);else h.t[h.p]=c+h.xs0;h=h._next}else for(;h;)2!==h.type?h.t[h.p]=h.b:h.setRatio(b),h=h._next};e._kill=function(h){var b=h,c;if(h.autoAlpha||h.alpha){b={};for(c in h)b[c]=h[c];b.opacity=1;b.autoAlpha&&(b.visibility=1)}return s.prototype._kill.call(this,b)};s.activate([x]);return x},!0);_gsDefine("plugins.RoundPropsPlugin",["plugins.TweenPlugin"],function(s){var x=function(){s.call(this,
"roundProps",-1);this._overwriteProps.length=0},g=x.prototype=new s("roundProps",-1);g.constructor=x;x.API=2;g._onInitTween=function(g,n,c){this._tween=c;return!0};g._onInitAllProps=function(){for(var g=this._tween,n=g.vars.roundProps instanceof Array?g.vars.roundProps:g.vars.roundProps.split(","),c=n.length,s={},e=g._propLookup.roundProps,b,f,d;-1<--c;)s[n[c]]=1;for(c=n.length;-1<--c;){b=n[c];for(f=g._firstPT;f;)d=f._next,f.pg?f.t._roundProps(s,!0):f.n===b&&(this._add(f.t,b,f.s,f.c),d&&(d._prev=
f._prev),f._prev?f._prev._next=d:_tween._firstPT===f&&(g._firstPT=d),f._next=f._prev=null,g._propLookup[b]=e),f=d}return!1};g._add=function(g,n,c,s){this._addTween(g,n,c,c+s,n,!0);this._overwriteProps.push(n)};s.activate([x]);return x},!0);_gsDefine("easing.Back",["easing.Ease"],function(s){var x=window.com.greensock._class,g=function(b,c){var d=x("easing."+b,function(){},!0),e=d.prototype=new s;e.constructor=d;e.getRatio=c;return d},q=function(b,c){var d=x("easing."+b,function(b){this._p1=b||0===
b?b:1.70158;this._p2=1.525*this._p1},!0),e=d.prototype=new s;e.constructor=d;e.getRatio=c;e.config=function(b){return new d(b)};return d},n=q("BackOut",function(b){return(b-=1)*b*((this._p1+1)*b+this._p1)+1}),c=q("BackIn",function(b){return b*b*((this._p1+1)*b-this._p1)}),q=q("BackInOut",function(b){return 1>(b*=2)?0.5*b*b*((this._p2+1)*b-this._p2):0.5*((b-=2)*b*((this._p2+1)*b+this._p2)+2)}),A=g("BounceOut",function(b){return b<1/2.75?7.5625*b*b:b<2/2.75?7.5625*(b-=1.5/2.75)*b+0.75:b<2.5/2.75?7.5625*
(b-=2.25/2.75)*b+0.9375:7.5625*(b-=2.625/2.75)*b+0.984375}),e=g("BounceIn",function(b){return(b=1-b)<1/2.75?1-7.5625*b*b:b<2/2.75?1-(7.5625*(b-=1.5/2.75)*b+0.75):b<2.5/2.75?1-(7.5625*(b-=2.25/2.75)*b+0.9375):1-(7.5625*(b-=2.625/2.75)*b+0.984375)}),b=g("BounceInOut",function(b){var c=0.5>b,b=c?1-2*b:2*b-1,b=b<1/2.75?7.5625*b*b:b<2/2.75?7.5625*(b-=1.5/2.75)*b+0.75:b<2.5/2.75?7.5625*(b-=2.25/2.75)*b+0.9375:7.5625*(b-=2.625/2.75)*b+0.984375;return c?0.5*(1-b):0.5*b+0.5}),f=g("CircOut",function(b){return Math.sqrt(1-
(b-=1)*b)}),d=g("CircIn",function(b){return-(Math.sqrt(1-b*b)-1)}),i=g("CircInOut",function(b){return 1>(b*=2)?-0.5*(Math.sqrt(1-b*b)-1):0.5*(Math.sqrt(1-(b-=2)*b)+1)}),k=2*Math.PI,M=function(b,c,d){var e=x("easing."+b,function(b,c){this._p1=b||1;this._p2=c||d;this._p3=this._p2/k*(Math.asin(1/this._p1)||0)},!0),b=e.prototype=new s;b.constructor=e;b.getRatio=c;b.config=function(b,c){return new e(b,c)};return e},aa=M("ElasticOut",function(b){return this._p1*Math.pow(2,-10*b)*Math.sin((b-this._p3)*k/
this._p2)+1},0.3),W=M("ElasticIn",function(b){return-(this._p1*Math.pow(2,10*(b-=1))*Math.sin((b-this._p3)*k/this._p2))},0.3),M=M("ElasticInOut",function(b){return 1>(b*=2)?-0.5*this._p1*Math.pow(2,10*(b-=1))*Math.sin((b-this._p3)*k/this._p2):0.5*this._p1*Math.pow(2,-10*(b-=1))*Math.sin((b-this._p3)*k/this._p2)+1},0.45),v=g("ExpoOut",function(b){return 1-Math.pow(2,-10*b)}),I=g("ExpoIn",function(b){return Math.pow(2,10*(b-1))-0.001}),m=g("ExpoInOut",function(b){return 1>(b*=2)?0.5*Math.pow(2,10*(b-
1)):0.5*(2-Math.pow(2,-10*(b-1)))}),B=Math.PI/2,w=g("SineOut",function(b){return Math.sin(b*B)}),S=g("SineIn",function(b){return-Math.cos(b*B)+1}),g=g("SineInOut",function(b){return-0.5*(Math.cos(Math.PI*b)-1)}),L=x("easing.SlowMo",function(b,c,d){null==b?b=0.7:1<b&&(b=1);this._p=1!=b?c||0===c?c:0.7:0;this._p1=(1-b)/2;this._p2=b;this._p3=this._p1+this._p2;this._calcEnd=!0===d},!0),E=L.prototype=new s;E.constructor=L;E.getRatio=function(b){var c=b+(0.5-b)*this._p;return b<this._p1?this._calcEnd?1-
(b=1-b/this._p1)*b:c-(b=1-b/this._p1)*b*b*b*c:b>this._p3?this._calcEnd?1-(b=(b-this._p3)/this._p1)*b:c+(b-c)*(b=(b-this._p3)/this._p1)*b*b*b:this._calcEnd?1:c};L.ease=new L(0.7,0.7);E.config=L.config=function(b,c,d){return new L(b,c,d)};var C=x("easing.SteppedEase",function(b){b=b||1;this._p1=1/b;this._p2=b+1},!0),E=C.prototype=new s;E.constructor=C;E.getRatio=function(b){0>b?b=0:1<=b&&(b=0.999999999);return(this._p2*b>>0)*this._p1};E.config=C.config=function(b){return new C(b)};x("easing.Bounce",
{easeOut:new A,easeIn:new e,easeInOut:new b},!0);x("easing.Circ",{easeOut:new f,easeIn:new d,easeInOut:new i},!0);x("easing.Elastic",{easeOut:new aa,easeIn:new W,easeInOut:new M},!0);x("easing.Expo",{easeOut:new v,easeIn:new I,easeInOut:new m},!0);x("easing.Sine",{easeOut:new w,easeIn:new S,easeInOut:new g},!0);return{easeOut:new n,easeIn:new c,easeInOut:new q}},!0)});
(function(s){var x=function(b){var b=b.split("."),c=s,d;for(d=0;d<b.length;d++)c[b[d]]=c=c[b[d]]||{};return c},g=x("com.greensock"),q,n,c,A,e,b={},f=function(h,c,d,e){this.sc=b[h]?b[h].sc:[];b[h]=this;this.gsClass=null;this.def=d;var g=c||[],i=[];this.check=function(c){for(var t=g.length,k=0,m;-1<--t;)(m=b[g[t]]||new f(g[t])).gsClass?i[t]=m.gsClass:(k++,c&&m.sc.push(this));if(0===k&&d){var c=("com.greensock."+h).split("."),t=c.pop(),n=x(c.join("."))[t]=this.gsClass=d.apply(d,i);e&&((s.GreenSockGlobals||
s)[t]=n,"function"===typeof define&&define.amd?define((s.GreenSockAMDPath?s.GreenSockAMDPath+"/":"")+h.split(".").join("/"),[],function(){return n}):"undefined"!==typeof module&&module.exports&&(module.exports=n));for(t=0;t<this.sc.length;t++)this.sc[t].check(!1)}};this.check(!0)},d=g._class=function(b,c,d){c=c||function(){};new f(b,[],function(){return c},d);return c};s._gsDefine=function(b,c,d,e){return new f(b,c,d,e)};var i=[0,0,1,1],k=[],M=d("easing.Ease",function(b,c,d,e){this._func=b;this._type=
d||0;this._power=e||0;this._params=c?i.concat(c):i},!0);c=M.prototype;c._calcEnd=!1;c.getRatio=function(b){if(this._func)return this._params[0]=b,this._func.apply(null,this._params);var c=this._type,d=this._power,e=1===c?1-b:2===c?b:0.5>b?2*b:2*(1-b);1===d?e*=e:2===d?e*=e*e:3===d?e*=e*e*e:4===d&&(e*=e*e*e*e);return 1===c?1-e:2===c?e:0.5>b?e/2:1-e/2};q=["Linear","Quad","Cubic","Quart","Quint"];for(n=q.length;-1<--n;)c=d("easing."+q[n],null,!0),A=d("easing.Power"+n,null,!0),c.easeOut=A.easeOut=new M(null,
null,1,n),c.easeIn=A.easeIn=new M(null,null,2,n),c.easeInOut=A.easeInOut=new M(null,null,3,n);d("easing.Strong",g.easing.Power4,!0);g.easing.Linear.easeNone=g.easing.Linear.easeIn;var aa=d("events.EventDispatcher",function(b){this._listeners={};this._eventTarget=b||this});c=aa.prototype;c.addEventListener=function(b,c,d,e,f){var f=f||0,g=this._listeners[b],i=0,k;null==g&&(this._listeners[b]=g=[]);for(k=g.length;-1<--k;)b=g[k],b.c===c?g.splice(k,1):0===i&&b.pr<f&&(i=k+1);g.splice(i,0,{c:c,s:d,up:e,
pr:f})};c.removeEventListener=function(b,c){var d=this._listeners[b],e;if(d)for(e=d.length;-1<--e;)if(d[e].c===c){d.splice(e,1);break}};c.dispatchEvent=function(b){var c=this._listeners[b];if(c)for(var d=c.length,e=this._eventTarget,f;-1<--d;)f=c[d],f.up?f.c.call(f.s||e,{type:b,target:e}):f.c.call(f.s||e)};var W=s.requestAnimationFrame,v=s.cancelAnimationFrame,I=Date.now||function(){return(new Date).getTime()};q=["ms","moz","webkit","o"];for(n=q.length;-1<--n&&!W;)W=s[q[n]+"RequestAnimationFrame"],
v=s[q[n]+"CancelAnimationFrame"]||s[q[n]+"CancelRequestAnimationFrame"];d("Ticker",function(b,c){var d=this,e=I(),f=!1!==c&&W,g,i,k,m,n,q=function(){null!=k&&(!f||!v?s.clearTimeout(k):v(k),k=null)},u=function(b){d.time=(I()-e)/1E3;if(!g||d.time>=n||b)d.frame++,n=d.time>n?d.time+m-(d.time-n):d.time+m-0.001,n<d.time+0.001&&(n=d.time+0.001),d.dispatchEvent("tick");!0!==b&&(k=i(u))};aa.call(d);this.time=this.frame=0;this.tick=function(){u(!0)};this.fps=function(b){if(!arguments.length)return g;g=b;m=
1/(g||60);n=this.time+m;i=0===g?function(){}:!f||!W?function(b){return s.setTimeout(b,1E3*(n-d.time)+1>>0||1)}:W;q();k=i(u)};this.useRAF=function(b){if(!arguments.length)return f;q();f=b;d.fps(g)};d.fps(b);s.setTimeout(function(){f&&!k&&d.useRAF(!1)},1E3)});c=g.Ticker.prototype=new g.events.EventDispatcher;c.constructor=g.Ticker;var m=d("core.Animation",function(b,c){this.vars=c||{};this._duration=this._totalDuration=b||0;this._delay=Number(this.vars.delay)||0;this._timeScale=1;this._active=!0===
this.vars.immediateRender;this.data=this.vars.data;this._reversed=!0===this.vars.reversed;if(G){e||(B.tick(),e=!0);var d=this.vars.useFrames?y:G;d.insert(this,d._time);this.vars.paused&&this.paused(!0)}}),B=m.ticker=new g.Ticker;c=m.prototype;c._dirty=c._gc=c._initted=c._paused=!1;c._totalTime=c._time=0;c._rawPrevTime=-1;c._next=c._last=c._onUpdate=c._timeline=c.timeline=null;c._paused=!1;c.play=function(b,c){arguments.length&&this.seek(b,c);this.reversed(!1);return this.paused(!1)};c.pause=function(b,
c){arguments.length&&this.seek(b,c);return this.paused(!0)};c.resume=function(b,c){arguments.length&&this.seek(b,c);return this.paused(!1)};c.seek=function(b,c){return this.totalTime(Number(b),!1!=c)};c.restart=function(b,c){this.reversed(!1);this.paused(!1);return this.totalTime(b?-this._delay:0,!1!==c)};c.reverse=function(b,c){arguments.length&&this.seek(b||this.totalDuration(),c);this.reversed(!0);return this.paused(!1)};c.render=function(){};c.invalidate=function(){return this};c._enabled=function(b,
c){this._gc=!b;this._active=b&&!this._paused&&0<this._totalTime&&this._totalTime<this._totalDuration;!0!==c&&(b&&null==this.timeline?this._timeline.insert(this,this._startTime-this._delay):!b&&null!=this.timeline&&this._timeline._remove(this,!0));return!1};c._kill=function(){return this._enabled(!1,!1)};c.kill=function(b,c){this._kill(b,c);return this};c._uncache=function(b){for(b=b?this:this.timeline;b;)b._dirty=!0,b=b.timeline;return this};c.eventCallback=function(b,c,d,e){if(null==b)return null;
if("on"===b.substr(0,2)){if(1===arguments.length)return this.vars[b];if(null==c)delete this.vars[b];else if(this.vars[b]=c,this.vars[b+"Params"]=d,this.vars[b+"Scope"]=e,d)for(var f=d.length;-1<--f;)"{self}"===d[f]&&(d=this.vars[b+"Params"]=d.concat(),d[f]=this);"onUpdate"===b&&(this._onUpdate=c)}return this};c.delay=function(b){if(!arguments.length)return this._delay;this._timeline.smoothChildTiming&&this.startTime(this._startTime+b-this._delay);this._delay=b;return this};c.duration=function(b){if(!arguments.length)return this._dirty=
!1,this._duration;this._duration=this._totalDuration=b;this._uncache(!0);this._timeline.smoothChildTiming&&this._active&&0!==b&&this.totalTime(this._totalTime*(b/this._duration),!0);return this};c.totalDuration=function(b){this._dirty=!1;return!arguments.length?this._totalDuration:this.duration(b)};c.time=function(b,c){if(!arguments.length)return this._time;this._dirty&&this.totalDuration();b>this._duration&&(b=this._duration);return this.totalTime(b,c)};c.totalTime=function(b,c){if(!arguments.length)return this._totalTime;
if(this._timeline){0>b&&(b+=this.totalDuration());if(this._timeline.smoothChildTiming&&(this._dirty&&this.totalDuration(),b>this._totalDuration&&(b=this._totalDuration),this._startTime=(this._paused?this._pauseTime:this._timeline._time)-(!this._reversed?b:this._totalDuration-b)/this._timeScale,this._timeline._dirty||this._uncache(!1),!this._timeline._active))for(var d=this._timeline;d._timeline;)d.totalTime(d._totalTime,!0),d=d._timeline;this._gc&&this._enabled(!0,!1);this._totalTime!==b&&this.render(b,
c,!1)}return this};c.startTime=function(b){if(!arguments.length)return this._startTime;b!=this._startTime&&(this._startTime=b,this.timeline&&this.timeline._sortChildren&&this.timeline.insert(this,b-this._delay));return this};c.timeScale=function(b){if(!arguments.length)return this._timeScale;b=b||1E-6;if(this._timeline&&this._timeline.smoothChildTiming){var c=this._pauseTime||0===this._pauseTime?this._pauseTime:this._timeline._totalTime;this._startTime=c-(c-this._startTime)*this._timeScale/b}this._timeScale=
b;return this._uncache(!1)};c.reversed=function(b){if(!arguments.length)return this._reversed;b!==this._reversed&&(this._reversed=b,this.totalTime(this._totalTime,!0));return this};c.paused=function(b){if(!arguments.length)return this._paused;b!==this._paused&&this._timeline&&(!b&&this._timeline.smoothChildTiming&&(this._startTime+=this._timeline.rawTime()-this._pauseTime,this._uncache(!1)),this._pauseTime=b?this._timeline.rawTime():null,this._paused=b,this._active=!this._paused&&0<this._totalTime&&
this._totalTime<this._totalDuration);this._gc&&(b||this._enabled(!0,!1));return this};g=d("core.SimpleTimeline",function(b){m.call(this,0,b);this.autoRemoveChildren=this.smoothChildTiming=!0});c=g.prototype=new m;c.constructor=g;c.kill()._gc=!1;c._first=c._last=null;c._sortChildren=!1;c.insert=function(b,c){b._startTime=Number(c||0)+b._delay;b._paused&&this!==b._timeline&&(b._pauseTime=b._startTime+(this.rawTime()-b._startTime)/b._timeScale);b.timeline&&b.timeline._remove(b,!0);b.timeline=b._timeline=
this;b._gc&&b._enabled(!0,!0);var d=this._last;if(this._sortChildren)for(var e=b._startTime;d&&d._startTime>e;)d=d._prev;d?(b._next=d._next,d._next=b):(b._next=this._first,this._first=b);b._next?b._next._prev=b:this._last=b;b._prev=d;this._timeline&&this._uncache(!0);return this};c._remove=function(b,c){b.timeline===this&&(c||b._enabled(!1,!0),b.timeline=null,b._prev?b._prev._next=b._next:this._first===b&&(this._first=b._next),b._next?b._next._prev=b._prev:this._last===b&&(this._last=b._prev),this._timeline&&
this._uncache(!0));return this};c.render=function(b,c){var d=this._first,e;for(this._totalTime=this._time=this._rawPrevTime=b;d;){e=d._next;if(d._active||b>=d._startTime&&!d._paused)d._reversed?d.render((!d._dirty?d._totalDuration:d.totalDuration())-(b-d._startTime)*d._timeScale,c,!1):d.render((b-d._startTime)*d._timeScale,c,!1);d=e}};c.rawTime=function(){return this._totalTime};var w=d("TweenLite",function(b,c,d){m.call(this,c,d);if(null==b)throw"Cannot tween an undefined reference.";this.target=
b;this._overwrite=null==this.vars.overwrite?u[w.defaultOverwrite]:"number"===typeof this.vars.overwrite?this.vars.overwrite>>0:u[this.vars.overwrite];if((b instanceof Array||b.jquery)&&"object"===typeof b[0]){this._targets=b.slice(0);this._propLookup=[];this._siblings=[];for(b=0;b<this._targets.length;b++)d=this._targets[b],d.jquery?(this._targets.splice(b--,1),this._targets=this._targets.concat(d.constructor.makeArray(d))):(this._siblings[b]=F(d,this,!1),1===this._overwrite&&1<this._siblings[b].length&&
z(d,this,null,1,this._siblings[b]))}else this._propLookup={},this._siblings=F(b,this,!1),1===this._overwrite&&1<this._siblings.length&&z(b,this,null,1,this._siblings);(this.vars.immediateRender||0===c&&0===this._delay&&!1!==this.vars.immediateRender)&&this.render(-this._delay,!1,!0)},!0);c=w.prototype=new m;c.constructor=w;c.kill()._gc=!1;c.ratio=0;c._firstPT=c._targets=c._overwrittenProps=null;c._notifyPluginsOfEnabled=!1;w.version=1.63;w.defaultEase=c._ease=new M(null,null,1,1);w.defaultOverwrite=
"auto";w.ticker=B;var S=w._plugins={},L=w._tweenLookup={},E=0,C={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,orientToBezier:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1},u={none:0,all:1,
auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},y=m._rootFramesTimeline=new g,G=m._rootTimeline=new g;G._startTime=B.time;y._startTime=B.frame;G._active=y._active=!0;m._updateRoot=function(){G.render((B.time-G._startTime)*G._timeScale,!1,!1);y.render((B.frame-y._startTime)*y._timeScale,!1,!1);if(!(B.frame%120)){var b,c,d;for(d in L){c=L[d].tweens;for(b=c.length;-1<--b;)c[b]._gc&&c.splice(b,1);0===c.length&&delete L[d]}}};B.addEventListener("tick",m._updateRoot);var F=function(b,
c,d){var e=b._gsTweenID,f;if(!L[e||(b._gsTweenID=e="t"+E++)])L[e]={target:b,tweens:[]};if(c&&(b=L[e].tweens,b[f=b.length]=c,d))for(;-1<--f;)b[f]===c&&b.splice(f,1);return L[e].tweens},z=function(b,c,d,e,f){var g,i,k;if(1===e||4<=e){b=f.length;for(g=0;g<b;g++)if((k=f[g])!==c)k._gc||k._enabled(!1,!1)&&(i=!0);else if(5===e)break;return i}var n=c._startTime+1E-10,m=[],q=0,s=0===c._duration,u;for(g=f.length;-1<--g;)if(!((k=f[g])===c||k._gc||k._paused))k._timeline!==c._timeline?(u=u||R(c,0,s),0===R(k,u,
s)&&(m[q++]=k)):k._startTime<=n&&k._startTime+k.totalDuration()/k._timeScale+1E-10>n&&((s||!k._initted)&&2E-10>=n-k._startTime||(m[q++]=k));for(g=q;-1<--g;)if(k=m[g],2===e&&k._kill(d,b)&&(i=!0),2!==e||!k._firstPT&&k._initted)k._enabled(!1,!1)&&(i=!0);return i},R=function(b,c,d){for(var e=b._timeline,f=e._timeScale,g=b._startTime;e._timeline;){g+=e._startTime;f*=e._timeScale;if(e._paused)return-100;e=e._timeline}g/=f;return g>c?g-c:d&&g===c||!b._initted&&2E-10>g-c?1E-10:(g+=b.totalDuration()/b._timeScale/
f)>c?0:g-c-1E-10};c._init=function(){this.vars.startAt&&(this.vars.startAt.overwrite=0,this.vars.startAt.immediateRender=!0,w.to(this.target,0,this.vars.startAt));var b,c;this._ease=this.vars.ease instanceof M?this.vars.easeParams instanceof Array?this.vars.ease.config.apply(this.vars.ease,this.vars.easeParams):this.vars.ease:"function"===typeof this.vars.ease?new M(this.vars.ease,this.vars.easeParams):w.defaultEase;this._easeType=this._ease._type;this._easePower=this._ease._power;this._firstPT=null;
if(this._targets)for(b=this._targets.length;-1<--b;){if(this._initProps(this._targets[b],this._propLookup[b]={},this._siblings[b],this._overwrittenProps?this._overwrittenProps[b]:null))c=!0}else c=this._initProps(this.target,this._propLookup,this._siblings,this._overwrittenProps);c&&w._onPluginEvent("_onInitAllProps",this);this._overwrittenProps&&null==this._firstPT&&"function"!==typeof this.target&&this._enabled(!1,!1);if(this.vars.runBackwards)for(b=this._firstPT;b;)b.s+=b.c,b.c=-b.c,b=b._next;
this._onUpdate=this.vars.onUpdate;this._initted=!0};c._initProps=function(b,c,d,e){var f,g,k,i,n,m;if(null==b)return!1;for(f in this.vars){if(C[f]){if("onStartParams"===f||"onUpdateParams"===f||"onCompleteParams"===f||"onReverseCompleteParams"===f||"onRepeatParams"===f)if(n=this.vars[f])for(g=n.length;-1<--g;)"{self}"===n[g]&&(n=this.vars[f]=n.concat(),n[g]=this)}else if(S[f]&&(i=new S[f])._onInitTween(b,this.vars[f],this)){this._firstPT=m={_next:this._firstPT,t:i,p:"setRatio",s:0,c:1,f:!0,n:f,pg:!0,
pr:i._priority};for(g=i._overwriteProps.length;-1<--g;)c[i._overwriteProps[g]]=this._firstPT;if(i._priority||i._onInitAllProps)k=!0;if(i._onDisable||i._onEnable)this._notifyPluginsOfEnabled=!0}else this._firstPT=c[f]=m={_next:this._firstPT,t:b,p:f,f:"function"===typeof b[f],n:f,pg:!1,pr:0},m.s=!m.f?parseFloat(b[f]):b[f.indexOf("set")||"function"!==typeof b["get"+f.substr(3)]?f:"get"+f.substr(3)](),g=this.vars[f],m.c="number"===typeof g?g-m.s:"string"===typeof g&&"="===g.charAt(1)?parseInt(g.charAt(0)+
"1")*Number(g.substr(2)):Number(g)||0;m&&m._next&&(m._next._prev=m)}return e&&this._kill(e,b)?this._initProps(b,c,d,e):1<this._overwrite&&this._firstPT&&1<d.length&&z(b,this,c,this._overwrite,d)?(this._kill(c,b),this._initProps(b,c,d,e)):k};c.render=function(b,c,d){var e=this._time,f,g;if(b>=this._duration){if(this._totalTime=this._time=this._duration,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(f=!0,g="onComplete"),0===this._duration){if(0===b||0>this._rawPrevTime)this._rawPrevTime!==
b&&(d=!0);this._rawPrevTime=b}}else if(0>=b){this._totalTime=this._time=0;this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0;if(0!==e||0===this._duration&&0<this._rawPrevTime)g="onReverseComplete",f=this._reversed;0>b?(this._active=!1,0===this._duration&&(0<=this._rawPrevTime&&(d=!0),this._rawPrevTime=b)):this._initted||(d=!0)}else if(this._totalTime=this._time=b,this._easeType){var i=b/this._duration,m=this._easeType,n=this._easePower;if(1===m||3===m&&0.5<=i)i=1-i;3===m&&(i*=2);1===n?i*=i:2===
n?i*=i*i:3===n?i*=i*i*i:4===n&&(i*=i*i*i*i);this.ratio=1===m?1-i:2===m?i:0.5>b/this._duration?i/2:1-i/2}else this.ratio=this._ease.getRatio(b/this._duration);if(this._time!==e||d){this._initted||(this._init(),!f&&this._time&&(this.ratio=this._ease.getRatio(this._time/this._duration)));!this._active&&!this._paused&&(this._active=!0);if(0===e&&this.vars.onStart&&(0!==this._time||0===this._duration))c||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||k);for(b=this._firstPT;b;){if(b.f)b.t[b.p](b.c*
this.ratio+b.s);else b.t[b.p]=b.c*this.ratio+b.s;b=b._next}this._onUpdate&&(c||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||k));g&&!this._gc&&(f&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),c||this.vars[g]&&this.vars[g].apply(this.vars[g+"Scope"]||this,this.vars[g+"Params"]||k))}};c._kill=function(b,c){"all"===b&&(b=null);if(null==b&&(null==c||c==this.target))return this._enabled(!1,!1);var c=c||this._targets||this.target,d,e,f,g,i,k,m;
if((c instanceof Array||c.jquery)&&"object"===typeof c[0])for(d=c.length;-1<--d;)this._kill(b,c[d])&&(i=!0);else{if(this._targets)for(d=this._targets.length;-1<--d;){if(c===this._targets[d]){g=this._propLookup[d]||{};this._overwrittenProps=this._overwrittenProps||[];e=this._overwrittenProps[d]=b?this._overwrittenProps[d]||{}:"all";break}}else{if(c!==this.target)return!1;g=this._propLookup;e=this._overwrittenProps=b?this._overwrittenProps||{}:"all"}if(g)for(f in k=b||g,m=b!=e&&"all"!=e&&b!=g&&(null==
b||!0!=b._tempKill),k){if(d=g[f]){d.pg&&d.t._kill(k)&&(i=!0);if(!d.pg||0===d.t._overwriteProps.length)d._prev?d._prev._next=d._next:d===this._firstPT&&(this._firstPT=d._next),d._next&&(d._next._prev=d._prev),d._next=d._prev=null;delete g[f]}m&&(e[f]=1)}}return i};c.invalidate=function(){this._notifyPluginsOfEnabled&&w._onPluginEvent("_onDisable",this);this._onUpdate=this._overwrittenProps=this._firstPT=null;this._initted=this._active=this._notifyPluginsOfEnabled=!1;this._propLookup=this._targets?
{}:[];return this};c._enabled=function(b,c){if(b&&this._gc)if(this._targets)for(var d=this._targets.length;-1<--d;)this._siblings[d]=F(this._targets[d],this,!0);else this._siblings=F(this.target,this,!0);m.prototype._enabled.call(this,b,c);return this._notifyPluginsOfEnabled&&this._firstPT?w._onPluginEvent(b?"_onEnable":"_onDisable",this):!1};w.to=function(b,c,d){return new w(b,c,d)};w.from=function(b,c,d){d.runBackwards=!0;!1!=d.immediateRender&&(d.immediateRender=!0);return new w(b,c,d)};w.fromTo=
function(b,c,d,e){e.startAt=d;d.immediateRender&&(e.immediateRender=!0);return new w(b,c,e)};w.delayedCall=function(b,c,d,e,f){return new w(c,0,{delay:b,onComplete:c,onCompleteParams:d,onCompleteScope:e,onReverseComplete:c,onReverseCompleteParams:d,onReverseCompleteScope:e,immediateRender:!1,useFrames:f,overwrite:0})};w.set=function(b,c){return new w(b,0,c)};w.killTweensOf=w.killDelayedCallsTo=function(b,c){for(var d=w.getTweensOf(b),e=d.length;-1<--e;)d[e]._kill(c,b)};w.getTweensOf=function(b){if(null!=
b){var c,d,e;if((b instanceof Array||b.jquery)&&"object"===typeof b[0]){c=b.length;for(d=[];-1<--c;)d=d.concat(w.getTweensOf(b[c]));for(c=d.length;-1<--c;){e=d[c];for(b=c;-1<--b;)e===d[b]&&d.splice(c,1)}}else{d=F(b).concat();for(c=d.length;-1<--c;)d[c]._gc&&d.splice(c,1)}return d}};var J=d("plugins.TweenPlugin",function(b,c){this._overwriteProps=(b||"").split(",");this._propName=this._overwriteProps[0];this._priority=c||0},!0);c=J.prototype;J.version=12;J.API=2;c._firstPT=null;c._addTween=function(b,
c,d,e,f,g){var i;if(null!=e&&(i="number"===typeof e||"="!==e.charAt(1)?Number(e)-d:parseInt(e.charAt(0)+"1")*Number(e.substr(2))))this._firstPT=b={_next:this._firstPT,t:b,p:c,s:d,c:i,f:"function"===typeof b[c],n:f||c,r:g},b._next&&(b._next._prev=b)};c.setRatio=function(b){for(var c=this._firstPT,d;c;){d=c.c*b+c.s;c.r&&(d=d+(0<d?0.5:-0.5)>>0);if(c.f)c.t[c.p](d);else c.t[c.p]=d;c=c._next}};c._kill=function(b){if(null!=b[this._propName])this._overwriteProps=[];else for(var c=this._overwriteProps.length;-1<
--c;)null!=b[this._overwriteProps[c]]&&this._overwriteProps.splice(c,1);for(c=this._firstPT;c;)null!=b[c.n]&&(c._next&&(c._next._prev=c._prev),c._prev?(c._prev._next=c._next,c._prev=null):this._firstPT===c&&(this._firstPT=c._next)),c=c._next;return!1};c._roundProps=function(b,c){for(var d=this._firstPT;d;){if(b[this._propName]||null!=d.n&&b[d.n.split(this._propName+"_").join("")])d.r=c;d=d._next}};w._onPluginEvent=function(b,c){var d=c._firstPT,e;if("_onInitAllProps"===b){for(var f,g,i,k;d;){k=d._next;
for(f=g;f&&f.pr>d.pr;)f=f._next;(d._prev=f?f._prev:i)?d._prev._next=d:g=d;(d._next=f)?f._prev=d:i=d;d=k}d=c._firstPT=g}for(;d;)d.pg&&"function"===typeof d.t[b]&&d.t[b]()&&(e=!0),d=d._next;return e};J.activate=function(b){for(var c=b.length;-1<--c;)b[c].API===J.API&&(w._plugins[(new b[c])._propName]=b[c]);return!0};if(q=s._gsQueue){for(n=0;n<q.length;n++)q[n]();for(c in b)b[c].def||console.log("Warning: TweenLite encountered missing dependency: com.greensock."+c)}})(window);

(function(a){function d(b){var c=b||window.event,d=[].slice.call(arguments,1),e=0,f=!0,g=0,h=0;return b=a.event.fix(c),b.type="mousewheel",c.wheelDelta&&(e=c.wheelDelta/120),c.detail&&(e=-c.detail/3),h=e,c.axis!==undefined&&c.axis===c.HORIZONTAL_AXIS&&(h=0,g=-1*e),c.wheelDeltaY!==undefined&&(h=c.wheelDeltaY/120),c.wheelDeltaX!==undefined&&(g=-1*c.wheelDeltaX/120),d.unshift(b,e,g,h),(a.event.dispatch||a.event.handle).apply(this,d)}var b=["DOMMouseScroll","mousewheel"];if(a.event.fixHooks)for(var c=b.length;c;)a.event.fixHooks[b[--c]]=a.event.mouseHooks;a.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=b.length;a;)this.addEventListener(b[--a],d,!1);else this.onmousewheel=d},teardown:function(){if(this.removeEventListener)for(var a=b.length;a;)this.removeEventListener(b[--a],d,!1);else this.onmousewheel=null}},a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);

/**
 * @author: desandro, https://github.com/desandro/imagesloaded
 **/
(function(c,q){var m="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";c.fn.imagesLoaded=function(f){function n(){var b=c(j),a=c(h);d&&(h.length?d.reject(e,b,a):d.resolve(e));c.isFunction(f)&&f.call(g,e,b,a)}function p(b){k(b.target,"error"===b.type)}function k(b,a){b.src===m||-1!==c.inArray(b,l)||(l.push(b),a?h.push(b):j.push(b),c.data(b,"imagesLoaded",{isBroken:a,src:b.src}),r&&d.notifyWith(c(b),[a,e,c(j),c(h)]),e.length===l.length&&(setTimeout(n),e.unbind(".imagesLoaded",
p)))}var g=this,d=c.isFunction(c.Deferred)?c.Deferred():0,r=c.isFunction(d.notify),e=g.find("img").add(g.filter("img")),l=[],j=[],h=[];c.isPlainObject(f)&&c.each(f,function(b,a){if("callback"===b)f=a;else if(d)d[b](a)});e.length?e.bind("load.imagesLoaded error.imagesLoaded",p).each(function(b,a){var d=a.src,e=c.data(a,"imagesLoaded");if(e&&e.src===d)k(a,e.isBroken);else if(a.complete&&a.naturalWidth!==q)k(a,0===a.naturalWidth||0===a.naturalHeight);else if(a.readyState||a.complete)a.src=m,a.src=d}):
n();return d?d.promise(g):g}})(jQuery);

(function($) {
	var Navigation = {
		init: function(options,elem){
			var self = this;
			self.options = $.extend({},$.fn.navigation.options,options);
			self.elem = $(elem);
			self.initialize = true;
			self.origin = location.origin;
			self.root = $(window);
			self.root.on('popstate',$.proxy(self.change,self));
		},

		setHref: function(href) {
			var self = this;
			history.pushState({href:href},'url',href);
			self.load(href);
		},

		change: function(e) {
			var self = this, e = e.originalEvent;
			if (e.state == null) {
				if (self.initialize) {
					history.pushState({href:location.href},'url',location.href);
					self.initialize = false;
				} else {
					self.load(self.origin);
				}
			} else {
				self.load(e.state.href);
			}
		},

		load: function(href) {
			var self = this;
			if (typeof self.options.progress === 'function') {
				self.options.progress.call(self.elem);
			}
			var jxhr = self.query(href);
			jxhr.then(
				function(data,textStatus,jqXHR){
					if (typeof self.options.success === 'function') {
						self.options.success.call(self.elem,data,textStatus,jqXHR);
					}
				},
				function(jqXHR,textStatus,errorThrown){
					if (typeof self.options.error === 'function') {
						self.options.error.call(self.elem,jqXHR,textStatus,errorThrown);
					}
				}
			);
		},

		query: function(href) {
			return $.ajax(href);
		}
	};

	$.fn.navigation = function(options) {
		return this.each(function() {
			var navigation = Object.create(Navigation);
				navigation.init(options,this);
			$.data(this,'navigation',navigation);
		});
	};

	$.fn.navigation.options = {
		progress: function(){},
		success: function(data,textStatus,jqXHR){},
		error: function(jqXHR,textStatus,errorThrown){}
	};
})(jQuery);

(function($) {
	var Application = {
		init: function(options,elem){
			var self = this;
				self.options = $.extend({},$.fn.application.options,options);
				self.elem = $(elem);
				self.context = $('body').data('context');
				self.overlayBlack = $('div.overlay-black');
				self.layersBlack = self.overlayBlack.find('div.layer');
				self.title = self.overlayBlack.find('div.title');
				self.overlayWhite = $('div.overlay-white');
				self.layersWhite = self.overlayWhite.find('div.layer');
				self.container = $('div.container');
				self.languages = $('div.language').find('button').on('click.application',$.proxy(self.setLanguage,self));

				self.timer;
				self.isMoving = false;
				self.home;
				self.sliders;
				self.menu;
				self.works;

				self.reinit();
		},

		setLanguage: function(e) {
			var self = this, url = location.origin + local + 'choix-de-la-langue', current = $(e.currentTarget), lang = current.data('language');
			$.ajax(url,{
				method: 'POST',
				data: {lang:lang},
				dataType : 'json',
				success: function(data) {
					if (data.status) {
						location.href = location.origin + local;
					}
				}
			});
			e.preventDefault();
		},

		reinit: function() {
			var self = this;

			if (self.context == 'home') {
				self.timer;
				self.isMoving = false;
				self.home = $('div.home').home({
					click: $.proxy(self.slide,self)
				});
				self.sliders = [
					self.home.find('div.slider').eq(0).slideshow(),
					self.home.find('div.slider').eq(1).slideshow(),
					self.home.find('div.slider').eq(2).slideshow(),
					self.home.find('div.slider').eq(3).slideshow()
				];
				self.menu = self.home.next().find('button.menu').menu({
					show: $.proxy(self.showMenu,self),
					goTo: $.proxy(self.goToSection,self),
					hide: $.proxy(self.hideMenu,self)
				});
				self.nav = $('nav');
				self.elem.on('keyup.application',$.proxy(self.keyupOnApplication,self));
				self.elem.on('mousewheel.application',$.proxy(self.mousewheelOnApplication,self));
			}

			if (self.context == 'directory') {
				self.works = $('div.works').photographies({
					close: $.proxy(self.close,self)
				});
			}
		},

		/* -- menu -- */	
		showMenu: function() {
			var self = this;
				self.showLayers(false);
			TweenMax.set(self.nav,{css:{display:'block'},delay:1.1,onComplete:self.hideLayers,onCompleteScope:self});
		},

		goToSection: function(to) {
			var self = this, section = $('div.'+to);
				self.showWhitelayers();
			setTimeout(function(){
				TweenMax.to(section,0.8,{css:{autoAlpha:1,top:0},ease:Expo.easeInOut});
				section.on('click.application',$.proxy(self.backToMenu,self));
			},1500);	
		},

		showWhitelayers: function() {
			var self = this;
			TweenMax.set(self.overlayWhite,{css:{autoAlpha:1}});
			TweenMax.staggerTo(self.layersWhite,0.8,{css:{height:'100%'},ease:Expo.easeInOut},0.1);
		},

		backToMenu: function(e) {
			var self = this, current = $(e.currentTarget);
			current.off('click.application');
			TweenMax.to(current,0.8,{css:{autoAlpha:0,top:30},onComplete:self.hideWhitelayers,onCompleteScope:self});
		},

		hideWhitelayers: function() {
			var self = this;
			TweenMax.staggerTo(self.layersWhite,0.8,{css:{height:'0%'},ease:Expo.easeInOut,onComplete:self.initOverlayWhite,onCompleteScope:self},0.1);
		},

		initOverlayWhite: function() {
			var self = this;
			TweenMax.set(self.overlayWhite,{css:{autoAlpha:0}});
		},

		hideMenu: function() {
			var self = this;
				self.showLayers(false);
			TweenMax.set(self.nav,{css:{display:'none'},delay:1.1,onComplete:self.hideLayers,onCompleteScope:self});
		},

		/* -- Home -- */
		keyupOnApplication: function(e) {
			var self = this, action;
			switch (e.keyCode) {
				case 13 :
					action = 'focus';
					self.slide(action);
				break;
				case 37 : 
					action = 'prev';
					self.slide(action);
				break;
				case 39 : 
					action = 'next';
					self.slide(action);
				break;
			}
			return;
		},

		mousewheelOnApplication: function(e,delta) {
			var self = this, action = (delta < 0) ? 'next':'prev';
				self.slide(action);
			return;
		},

		slide: function(action){
			var self = this;
			if (action != 'focus') {
				if (!self.isMoving) {
					self.isMoving = true;
					for (var i = 0, l = self.sliders.length; i < l; ++i) {
						var current = self.sliders[i], j = (action == 'next') ? 3-i:i;
						current.data('slideshow')[action](j*0.15);
					};
					self.timer = setTimeout($.proxy(self.unblock,self),1700);
				}
			} else {
				var current = self.sliders[1], dir = current.data('slideshow').getDirectory();
				self.deleteHome();
				self.options.toDirectory.call(self,dir);
				self.context = 'directory';
			}
		},

		unblock: function() {
			var self = this;
				self.isMoving = false;
		},

		deleteHome: function() {
			var self = this;
				self.elem.off('keyup.application');
				self.elem.off('mousewheel.application');
				self.home = self.home.data('home').unbindEvents();
				for (var i = 0, l = self.sliders.length; i < l; ++i) {
					var current = self.sliders[i];
					current.data('slideshow').unbindEvents();
				};
				self.menu = self.menu.data('menu').unbindEvents();
				self.nav = null;
				self.isMoving = false;
				clearTimeout(self.timer);
		},

		/* -- Transition -- */
		showLayers: function(visible) {
			var self = this;
			TweenMax.set(self.overlayBlack,{css:{autoAlpha:1}});
			TweenMax.staggerTo(self.layersBlack,0.8,{css:{height:'100%'},ease:Expo.easeInOut},0.1);
			if (visible == undefined){
				TweenMax.to(self.title,0.8,{css:{autoAlpha:1},delay:1.2,ease:Expo.easeInOut});
			}
		},

		hideLayers: function() {
			var self = this;
			if (self.title.is(':visible')) TweenMax.to(self.title,0.8,{css:{autoAlpha:0},ease:Expo.easeInOut});
			TweenMax.staggerTo(self.layersBlack,0.8,{css:{height:'0%'},delay:0.8,ease:Expo.easeInOut,onComplete:self.initOverlay,onCompleteScope:self},0.1);
		},

		initOverlay: function() {
			var self = this;
			TweenMax.set(self.title,{css:{autoAlpha:0}});
			TweenMax.set(self.overlayBlack,{css:{autoAlpha:0}});
		},

		updateHTML: function(data) {
			var self = this, delay = setTimeout(function(){
				self.container.empty().append(data).imagesLoaded($.proxy(self.loadImages,self));
			},2000);
		},

		loadImages: function() {
			var self = this;
				self.reinit();
				self.hideLayers();
		},

		/* -- Photos -- */
		close: function() {
			var self = this;
				self.deleteDir();
				self.options.toHome.call(self);
				self.context = 'home';
		},

		deleteDir: function() {
			var self = this;
				self.works = self.works.data('photographies').unbindEvents();
		}
	};

	$.fn.application = function(options) {
		return this.each(function() {
			var application = Object.create(Application);
				application.init(options,this);
			$.data(this,'application',application);
		});
	};

	$.fn.application.options = {
		toHome: function() {},
		toDirectory: function(href){}
	};
})(jQuery);

(function($) {
	var Menu = {
		init: function(options,elem){
			var self = this;
				self.options = $.extend({},$.fn.menu.options,options);
				self.elem = $(elem);
				self.nav = $('nav');
				self.background = self.nav.find('img');
				self.buttons = self.nav.find('button');
				self.display = false;
				self.bindEvents();
		},

		bindEvents: function() {
			var self = this;
				self.elem.on('click.menu',$.proxy(self.displayMenu,self));
				self.buttons.on('click.menu',$.proxy(self.clickbutton,self));
				self.background.on('click.menu',$.proxy(self.hideMenu,self));
		},

		unbindEvents: function() {
			var self = this;
				self.elem.off('click.menu');
				self.buttons.off('click.menu');
				self.background.off('click.menu');
			return self.destroy();
		},

		destroy: function(){
			var self = this;
			for (var member in self) {
				self[member] = null;
				delete self[member];
			}
			self = null;
			delete self;
			return self;
		},

		displayMenu: function(e){
			var self = this;	
			if (!self.display) {
				self.display = true;
				self.options.show.call(self);
			}		
			e.preventDefault();	
		},

		clickbutton: function(e) {
			var self = this, current = $(e.currentTarget), to = current.attr('class').replace('to-','');
			if (self.display && to != 'contact') {
				self.options.goTo.call(self,to);
			} else if (self.display && to == 'contact') {
				var newpage = window.open();
					newpage.location = 'mailto:lenasensei@gmail.com';
			}
			e.preventDefault();	
		},

		hideMenu: function() {
			var self = this;
			if (self.display) {
				self.display = false;
				self.options.hide.call(self);
			}
		}
	};

	$.fn.menu = function(options) {
		return this.each(function() {
			var menu = Object.create(Menu);
				menu.init(options,this);
			$.data(this,'menu',menu);
		});
	};

	$.fn.menu.options = {
		show: function(){},
		goTo: function(){},
		hide: function(){}
	};
})(jQuery);

(function($) {
	var Slideshow = {
		init: function(options,elem){
			var self = this;
				self.root = $(window);
				self.width = self.root.width();
				self.height = self.root.height();
				self.options = $.extend({},$.fn.slideshow.options,options);
				self.elem = $(elem);
				self.focus = self.elem.hasClass('focus');
				self.masks = self.elem.children('div.mask');
				self.images = self.elem.find('img');
				self.titles = self.elem.find('h1');
				self.counts = self.elem.find('p');
				self.index = 0;
				self.length = 3;
				self.ratio = (self.focus) ? 0.34:0.22;
				self.action;
				self.bindEvents();

			TweenMax.set(self.images,{css:{marginTop:'-'+(self.height*.5)+'px'}});

			if (self.focus) {
				TweenMax.set(self.titles.not(':eq('+self.index+')'),{css:{autoAlpha:0,top:10}});
				TweenMax.set(self.counts.not(':eq('+self.index+')'),{css:{autoAlpha:0,top:106}});
			}

			self.masks.each(function(i){
				var $this = $(this);
				TweenMax.set($this,{css:{zIndex:self.length-i}});
			});

		},

		bindEvents: function() {
			var self = this;
				self.root.on('resize.slideshow',$.proxy(self.resizeOnSlideshow,self));
		},

		unbindEvents: function() {
			var self = this;
				self.root.off('resize.slideshow');
			return self.destroy();
		},

		destroy: function(){
			var self = this;
			for (var member in self) {
				self[member] = null;
				delete self[member];
			}
			self = null;
			delete self;
			return self;
		},

		prev: function(delay) {
			var self = this, i = (self.index == 0) ? self.length:self.index-1;
			self.action = 'prev';
			TweenMax.set(self.masks.eq(i),{css:{width:'0%',zIndex:4}});
			TweenMax.to(self.masks.eq(i),self.options.duration,{
				css:{width:'100%'},
				ease:self.options.ease,
				delay: delay,
				onComplete: self.complete,
				onCompleteScope: self
			});
			if (self.focus) {
				TweenMax.to(self.titles.eq(self.index),0.2,{css:{autoAlpha:0,top:10},delay:0.4});
				TweenMax.to(self.counts.eq(self.index),0.2,{css:{autoAlpha:0,top:106},delay:0.4});
			}
		},

		next: function(delay) {
			var self = this;
			self.action = 'next';
			TweenMax.to(self.masks.eq(self.index),self.options.duration,{
				css:{width:'0%'},
				ease:self.options.ease,
				delay: delay,
				onComplete: self.complete,
				onCompleteScope: self
			});
			if (self.focus) {
				TweenMax.to(self.titles.eq(self.index),0.2,{css:{autoAlpha:0,top:10},delay:0.4});
				TweenMax.to(self.counts.eq(self.index),0.2,{css:{autoAlpha:0,top:106},delay:0.4});
			}
		},

		complete: function() {
			var self = this, direction = self.action;
			self.masks.each(function(i){
				var $this = $(this), zIndex = $this.css('z-index');
				if (direction == 'next') {
					zIndex++;
					zIndex %= 4;	
				}
				if (direction == 'prev') {
					zIndex--;
					if (zIndex < 0) zIndex = self.length;
				}
				TweenMax.set($this,{css:{zIndex:zIndex,width:'100%'}});
			});
			if (direction == 'next') self.index = (self.index < self.length) ? self.index+1:0;
			if (direction == 'prev') self.index = (self.index > 0) ? self.index-1:self.length;
			if (self.focus) {
				TweenMax.to(self.titles.eq(self.index),0.2,{css:{autoAlpha:1,top:0}});
				TweenMax.to(self.counts.eq(self.index),0.2,{css:{autoAlpha:1,top:116}});
				TweenMax.set(self.titles.not(':eq('+self.index+')'),{css:{autoAlpha:0,top:10}});
				TweenMax.set(self.counts.not(':eq('+self.index+')'),{css:{autoAlpha:0,top:106}});
			}
		},

		getDirectory: function() {
			var self = this;
			return self.titles.eq(self.index).text();
		},

		resizeOnSlideshow: function() {
			var self = this;
				self.width = self.root.width();
				self.height = self.root.height();
				self.images.css('marginTop','-'+(self.height*.5)+'px');
		}
	};

	$.fn.slideshow = function(options) {
		return this.each(function() {
			var slideshow = Object.create(Slideshow);
				slideshow.init(options,this);
			$.data(this,'slideshow',slideshow);
		});
	};

	$.fn.slideshow.options = {
		duration: 1,
		ease: Expo.easeInOut
	};
})(jQuery);

(function($) {
	var Home = {
		init: function(options,elem){
			var self = this;				
				self.options = $.extend({},$.fn.home.options,options);
				self.elem = $(elem);
				self.root = $(window);
				self.width = self.root.width();
				self.bindEvents();
		},

		bindEvents: function() {
			var self = this;
				self.elem.on('click.home',$.proxy(self.clickOnHome,self));
				self.root.on('resize.home',$.proxy(self.resizeOnHome,self));
		},

		unbindEvents: function() {
			var self = this;
				self.elem.off('click.home');
				self.root.off('resize.home');
			return self.destroy();
		},

		destroy: function(){
			var self = this;
			for (var member in self) {
				self[member] = null;
				delete self[member];
			}
			self = null;
			delete self;
			return self;
		},

		clickOnHome: function(e) {
			var self = this, percent = e.pageX / self.width, action;
			switch(true){
				case (percent < 0.22) : action = 'prev';
				break;
				case (percent >= 0.22 && percent <= 0.56) : action = 'focus';
				break;
				case (percent > 0.56 && percent < 0.78) : action = 'next';
				break;
			}
			self.options.click.call(self.elem,action);
			e.preventDefault();
		},

		resizeOnHome: function() {
			var self = this;
				self.width = self.root.width();
		}
	};

	$.fn.home = function(options) {
		return this.each(function() {
			var home = Object.create(Home);
				home.init(options,this);
			$.data(this,'home',home);
		});
	};

	$.fn.home.options = {
		click: function(action){}
	};
})(jQuery);

(function($) {
	var Photographies = {
		init: function(options,elem){
			var self = this;
				self.root = $(window);
				self.width = self.root.width();
				self.height = self.root.height();			
				self.options = $.extend({},$.fn.photographies.options,options);
				self.elem = $(elem);
				self.images = self.elem.find('img');
				self.text = self.elem.next();
				self.title = self.text.find('h1');
				self.para = self.text.find('p');
				self.counter = self.para.find('span');
				self.index = 0;
				self.loaded = 0;
				self.length = self.images.size();
				self.current = self.images.eq(self.index);
				self.action = 'close';
				self.isMoving = false;
				self.bindEvents();
		},

		bindEvents: function() {
			var self = this;
				self.images.one('load',$.proxy(self.define,self)).each(function() {
				  	if(this.complete) $(this).load();
				});
				self.root.on('mousemove.photographies',$.proxy(self.mousemoveOnPhotographies,self));
				self.root.on('keyup.photographies',$.proxy(self.keyupOnPhotographies,self));
				self.root.on('mousewheel.photographies',$.proxy(self.mousewheelOnPhotographies,self));
				self.elem.on('click.photographies',$.proxy(self.clickOnPhotographies,self));
				self.root.on('resize.photographies',$.proxy(self.resizeOnPhotographies,self));
		},

		unbindEvents: function() {
			var self = this;
				self.root.off('mousemove.photographies');
				self.root.off('keyup.photographies');
				self.root.off('mousewheel.photographies');
				self.elem.off('click.photographies');
				self.root.off('resize.photographies');
			return self.destroy();
		},

		destroy: function(){
			var self = this;
			for (var member in self) {
				self[member] = null;
				delete self[member];
			}
			self = null;
			delete self;
			return self;
		},

		define: function(e) {
			var self = this;
				self.loaded++;
			if (self.loaded == self.length) {
				self.reinit();
			}
		},

		reinit: function() {
			var self = this, currentWidth = self.getImageWidth(self.current.get(0)), nextWidth = self.getImageWidth(self.current.next().get(0));
				self.left = (self.width * 0.5);
				self.left -= (currentWidth * 0.5);	
				self.left -= (currentWidth * 0.5) + (nextWidth * 0.5);
				self.index = 1;
				self.current = self.images.eq(self.index);	
			TweenMax.set(self.current,{css:{alpha: 1}});
			TweenMax.set(self.elem,{css:{width: self.getTotalWidth(),left:self.left},onComplete:self.setIndex,onCompleteScope:self});
		},

		getImageWidth: function(elem) {
			var self = this, height = elem.height, width = elem.width, ratio = height/self.height;
			return Math.round(width/ratio);
		},

		getTotalWidth: function() {
			var self = this, width = 0;
			self.images.each(function(){
				width += self.getImageWidth($(this).get(0));
			});
			return width;
		},

		mousemoveOnPhotographies: function(e) {
			var self = this, x = e.pageX-(self.width*.5), width = self.getImageWidth(self.current.get(0)), left = -(width*.5), right = width*.5;
			switch(true) {
				case (x < left) : self.action = 'prev';
				break;
				case (x >= left && x <= right) : self.action = 'close';
				break;
				case (x > right) : self.action = 'next';
				break;
			}
			self.elem.removeClass('prev-work next-work close-work').addClass(self.action+'-work');
		},

		keyupOnPhotographies: function(e) {
			var self = this;
			switch (e.keyCode) {
				case 27 :
					self.action = 'close';
					self.elem.trigger('click.photographies');
				break;
				case 37 :
					self.action = 'prev';
					self.elem.trigger('click.photographies');
				break;
				case 39 :
					self.action = 'next';
					self.elem.trigger('click.photographies');
				break;
			}
			return;
		},

		mousewheelOnPhotographies: function(e,delta) {
			var self = this;
				self.action = (delta < 0) ? 'next':'prev';
				self.elem.trigger('click.photographies');
			return;
		},

		clickOnPhotographies: function(e) {
			var self = this;
			if (self.action != 'close') {
				if (!self.isMoving) {

					self.isMoving = true;

					var action = false, currentWidth = self.getImageWidth(self.current.get(0));

					if (self.action == 'next' && self.index != self.length-1) {
						var nextWidth = self.getImageWidth(self.current.next().get(0));
						self.left -= (currentWidth * 0.5) + (nextWidth * 0.5);
						action = true;
					} 

					if (self.action == 'prev' && self.index != 0) {
						var prevWidth = self.getImageWidth(self.current.prev().get(0));
						self.left += (currentWidth * 0.5) + (prevWidth * 0.5);
						action = true;
					}

					if (action) {
						TweenMax.to(self.current,self.options.duration,{css:{alpha:0.25},ease:Expo.easeInOut});
						TweenMax.to(self.elem,self.options.duration,{css:{left:self.left},ease:Expo.easeInOut});
						TweenMax.to(self.current[self.action](),self.options.duration,{css:{alpha:1},ease:Expo.easeInOut});

						self.index = (self.action == 'next') ? self.index+1:self.index-1;
						self.current = self.images.eq(self.index);

						TweenMax.to(self.para,self.options.duration/2,{css:{autoAlpha:0,top:106},onComplete:self.setIndex,onCompleteScope:self,ease:Expo.easeInOut,overwrite:'none'});
						TweenMax.to(self.para,self.options.duration/2,{css:{autoAlpha:1,top:116},delay:self.options.duration/2,onComplete:self.onComplete,onCompleteScope:self,ease:Expo.easeInOut,overwrite:'none'});
					} else {
						self.isMoving = false;
						return;
					}
				}
			} else {
				self.options.close.call(self);
			}
			e.preventDefault();
			return;
		},

		setIndex: function() {
			var self = this;
				self.counter.text(self.index+1);
		},

		onComplete: function() {
			var self = this;
				self.isMoving = false;
		},

		resizeOnPhotographies: function() {
			var self = this;
				self.width = self.root.width();
				self.height = self.root.height();
				self.index = 0;
				self.current = self.images.eq(self.index);
			setTimeout(function(){
				self.reinit();
			},300);
		}
	};

	$.fn.photographies = function(options) {
		return this.each(function() {
			var photographies = Object.create(Photographies);
				photographies.init(options,this);
			$.data(this,'photographies',photographies);
		});
	};

	$.fn.photographies.options = {
		duration: 0.8,
		close: function(){}
	};
})(jQuery);

$(function($){
	TweenLite.defaultOverwrite = "none";
	TweenLite.ticker.fps(60);
	var app = $(window).application({
			toHome: function() {
				var href = location.origin + local;
				nav.data('navigation').setHref(href);
			},
			toDirectory: function(dir) {
				var href = location.origin + local + 'photographies/' + dir;
				nav.data('navigation').setHref(href);
			}
	}),
		nav = $('html').navigation({
			progress: function() {
				app.data('application').showLayers();
			},
			success: function(data,textStatus,jqXHR) {
				app.data('application').updateHTML(data);
			}
	});
});