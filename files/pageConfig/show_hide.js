(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A6MO7IAA91MA0ZAAAIAAd1g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("A6MO7IAA91MA0ZAAAIAAd1g");
	this.shape_1.setTransform(-4.8,-4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-167.7,-95.4,335.4,191);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("A6MO7IAA91MA0ZAAAIAAd1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:true},1).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-167.7,-95.4,335.4,191);


// stage content:
(lib.show_hide = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btn2.visible = false;
		this.btn1.addEventListener("click", fl_ClickToHide.bind(this));
		
		function fl_ClickToHide()
		{
			this.btn1.visible = false;
			this.btn2.visible = true;
		}
		
		this.btn2.addEventListener("click", f2_ClickToHide.bind(this));
		
		function f2_ClickToHide()
		{
			this.btn2.visible = false;
			this.btn1.visible = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AbYDrQAggSAVgfQAVgfALgvQAKgwAAg0QAAg3gJgvQgHgkgKgWQgKgWgQgUQgQgVgbgSIAAgLQAoAUAbAaQAlAnAVA0QAUA0AAA3QAABRgoBEQgoBDhBAdgA8ZDGQgmgmgVg0QgUg0AAg4QAAhQAohEQAphDBAgdIAAALQggASgVAfQgVAfgKAwQgKAvAAA0QAAA4AIAuQAHAkAKAXQAKAVAQAVQARAUAaASIAAAKQgngUgbgbgA6SBIQglgxAAhBQAAg2AYgtQAYgtAqgYQAqgZAyAAQAnAAAmATQALAGAEAAQAIAAAFgFQAHgHADgNIAJAAIAIB6IgIAAQgQg3gfgYQgegYgrAAQgjAAgdASQgdASgQAoQgRAnAAA7QAAAwAQAjQAPAkAgATQAfATAoAAQAjAAAagPQAbgPAggsIAIAFQgbAwgkAWQgjAWgyAAQhZAAgwhCgATdBeQgbglAAguQAAggARghQAQghAbgPQAbgQAeAAQA3AAAhAqQAcAjAAAuQAAAggQAhQgPAhgbARQgcARghAAQg3AAgggrgAUThcQgPAIgIAVQgJAVAAAgQAAA0AVAmQAVAmAiAAQAaAAAQgVQARgVAAgzQAAhAgcgkQgSgagdAAQgOAAgOAJgAMvCJIAAgzQgfAigRAIQgQAJgSAAQgUAAgPgLQgPgMgGgTQgGgSAAgiIAAhrQAAgRgEgHQgDgGgHgEQgIgDgTAAIAAgKIBVAAIAAChQAAAiAMAKQALALARAAQALAAAPgHQAOgIAUgUIAAiHQAAgVgIgHQgHgHgYgBIAAgKIBSAAIAACSQAAApACAKQACAJAFAEQAEAEAGAAQAIAAAKgFIAEAJIhIAegAG8CBQgWgHgXgPIAAj6QAAgpgCgJQgCgKgEgDQgEgEgGAAQgIAAgLAFIgEgKIBJgdIAMAAIAACvQAjgxAoAAQAmAAAbAgQAcAgAAA2QAABAgrAnQgkAigtAAQgWAAgVgIgAHWhJQgLAFgQAQIAACPQANANAPAHQAOAHAPAAQAYAAAVgaQAUgbAAgyQAAgugUgYQgVgZgaAAQgOAAgOAHgAAkBnQgfgiAAg5QAAg9AggiQAggjAwAAQAoAAAbAbQAaAaAAAtIinAAQgBA1AbAfQAaAeAkAAQAYAAARgNQASgNALggIAJAGQgGAkgbAeQgaAdgoAAQgsAAgfgigAA/hSQgRARgDAeIBwAAQgCgXgEgKQgHgPgNgIQgNgIgOAAQgWAAgRARgAwFBnQgfgjAAg7QAAg4AigjQAigkAvAAQAkAAAXATQAXATAAAUQAAAKgGAGQgHAHgMAAQgPAAgIgKQgFgGgBgQQgBgPgKgIQgJgIgQAAQgbAAgQATQgVAaAAArQAAAqAVAhQAVAhAkAAQAaAAAVgSQAOgMAOggIAIAEQgKAwgcAaQgdAZgiAAQgqAAgegigARcB/QgMgHgFgMQgGgNAAgaIAAihIgmAAIAAgJQAPgGAPgOQAPgOAMgSQAGgLALgaIAIAAIAABPIA4AAIAAATIg4AAIAACbQAAAYAHAIQAGAIALAAQAIAAAJgFQAIgGAEgKIALAAQgKAagRANQgQANgSAAQgMAAgMgHgAPGB/QgMgHgFgMQgGgNAAgaIAAihIgmAAIAAgJQAPgGAPgOQAPgOAMgSQAGgLALgaIAIAAIAABPIA4AAIAAATIg4AAIAACbQAAAYAHAIQAGAIALAAQAIAAAJgFQAIgGAEgKIALAAQgKAagRANQgQANgSAAQgMAAgMgHgAlwB/QgLgHgGgMQgFgNAAgaIAAihIgmAAIAAgJQAOgGAPgOQAPgOAMgSQAGgLALgaIAIAAIAABPIA5AAIAAATIg5AAIAACbQAAAYAHAIQAHAIAKAAQAJAAAIgFQAIgGAFgKIAKAAQgJAagRANQgRANgSAAQgMAAgMgHgAZSCCIAAgKIAFAAQARAAAHgFQAGgFADgKQABgEAAgVIAAhiQAAghgIgOQgJgPgUAAQggAAgfAiIAAB+QAAAZADAFQAEAIAGAEQAHADATAAIAAAKIh3AAIAAgKIAFAAQATAAAGgJQAHgJAAgbIAAhYQAAgsgCgJQgCgKgEgDQgFgEgGAAQgIAAgKAEIgEgJIBJgeIALAAIAAAzQAqgzAnAAQAUAAAOAKQAOAKAJAXQAFAPAAAhIAABmQAAAXAEAIQADAHAHAEQAGADARAAIAAAKgAiICCIAAgKIAGAAQARAAAGgFQAHgFACgKQABgEAAgVIAAhUQAAgogEgMQgEgNgJgGQgJgGgNAAQgMAAgOAHQgOAHgUAVIAAB+QAAAZADAGQADAGAHAEQAIAEASAAIAAAKIh4AAIAAgKQAQAAAKgFQAFgCADgIQADgHAAgXIAAjZQAAgqgCgJQgCgKgEgDQgEgEgHAAQgFAAgNAFIgDgKIBIgdIAMAAIAACwQAdggARgJQASgJARAAQAUAAAPALQAPAMAHAYQAFARAAAtIAABUQAAAXAEAJQACAGAHAEQAGADARAAIAAAKgAqrCCIAAgKQAKAAAEgDQADgDAAgFQAAgGgKgNIhKheIA9g4QAUgSADgFQACgDAAgDQAAgFgEgEQgFgEgKAAIAAgJIBpAAIAAAJQgWAAgOAGQgOAGgRAQIg+A5IA+BNQAZAhAJAJQANAMAJAEQAHACAQAAIAAAKgAtCCCIAAgKQASAAAJgEQAGgDADgGQAEgJAAgVIAAjbQAAgqgCgJQgCgKgEgDQgEgEgHAAQgGAAgLAFIgEgKIBHgdIANAAIAADwIAABPQAAAYADAHQADAIAGADQAGADAVAAIAAAKgAy5CCIAAgKQASAAAGgDQAGgEAEgIQADgHAAgXIAAhcQAAgngCgMQgCgIgEgDQgEgEgHAAQgHAAgLAEIgDgJIBIgeIAMAAIAADBQAAAXADAHQAEAIAGAEQAGADASAAIAAAKgA1OCCIAAgKQARAAAGgDQAGgEADgIQAEgHAAgXIAAjaQAAgpgCgJQgCgKgEgDQgEgEgGAAQgHAAgLAFIgEgKIBIgdIAMAAIAAE/QAAAXADAHQADAIAHAEQAHADATAAIAAAKgArugEgAyRjHQgIgHAAgMQAAgLAIgHQAIgIALAAQALAAAIAIQAIAHAAALQAAAMgIAHQgIAIgLAAQgLAAgIgIg");
	this.shape.setTransform(400,303.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("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");
	this.shape_1.setTransform(400,211.6);

	this.btn2 = new lib.Symbol2();
	this.btn2.name = "btn2";
	this.btn2.parent = this;
	this.btn2.setTransform(400,775);
	new cjs.ButtonHelper(this.btn2, 0, 1, 2, false, new lib.Symbol2(), 3);

	this.btn1 = new lib.Symbol1();
	this.btn1.name = "btn1";
	this.btn1.parent = this;
	this.btn1.setTransform(400,497.1);
	new cjs.ButtonHelper(this.btn1, 0, 1, 2, false, new lib.Symbol1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn1},{t:this.btn2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(606.1,785,387.8,685.5);
// library properties:
lib.properties = {
	id: 'DD2F4E219AD7BF43978A83A407E25C39',
	width: 800,
	height: 1200,
	fps: 24,
	color: "#660000",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['DD2F4E219AD7BF43978A83A407E25C39'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;