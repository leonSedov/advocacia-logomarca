!function(e){"use strict";const s="morphext",i={animation:"bounce",speed:2e3,autoInit:!0,phrases:[],animateCssVersion:"4.1.1",autoAttachAnimateCss:!0};function n(t){this.element=e(t),this._settings=e.extend({},i,JSON.parse(this.element.attr("data-morphext-options"))),this._defaults=i,this._init()}n.prototype={_init:function(){var t;this.element.addClass("morphext"),this._settings.autoAttachAnimateCss&&(t=`https://cdnjs.cloudflare.com/ajax/libs/animate.css/${this._settings.animateCssVersion}/animate.min.css`,e(`link[href='${t}']`).length||e(`<link href="${t}" rel="stylesheet">`).appendTo("head")),this._index=0,this.animate(),this.start()},animate:function(){this._index=this._index%this._settings.phrases.length;const t=document.createElement("span");t.classList.add("morphext__animated","animate__animated",`animate__${this._settings.animation}`),e(t).text(this._settings.phrases[this._index]),this.element.html(e(t).prop("outerHTML")),this._index+=1},start:function(){var t=this;this._interval=setInterval(function(){t.animate()},this._settings.speed)},stop:function(){this._interval=clearInterval(this._interval)}},e.fn[s]=function(t){return this.each(function(){e.data(this,"plugin_"+s)||e.data(this,"plugin_"+s,new n(this))})}}(jQuery);