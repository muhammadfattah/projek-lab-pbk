(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Projek Lab PBK_atlas_", frames: [[0,0,1503,1469]]},
		{name:"Projek Lab PBK_atlas_2", frames: [[0,0,1210,1106]]},
		{name:"Projek Lab PBK_atlas_3", frames: [[0,1511,1573,345],[0,0,1037,1037],[1333,0,596,1041],[0,1039,1331,470]]},
		{name:"Projek Lab PBK_atlas_4", frames: [[0,0,1187,410],[0,412,1187,410],[0,824,1187,410],[958,1570,1022,165],[0,1236,1182,165],[0,1403,1140,165],[0,1764,1099,165],[0,1570,956,192]]},
		{name:"Projek Lab PBK_atlas_5", frames: [[0,0,1022,165],[0,167,724,228]]}
];


// symbols:



(lib.CachedBmp_16 = function() {
	this.initialize(ss["Projek Lab PBK_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_67 = function() {
	this.initialize(ss["Projek Lab PBK_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_66 = function() {
	this.initialize(ss["Projek Lab PBK_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_65 = function() {
	this.initialize(ss["Projek Lab PBK_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["Projek Lab PBK_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["Projek Lab PBK_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["Projek Lab PBK_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_64 = function() {
	this.initialize(ss["Projek Lab PBK_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["Projek Lab PBK_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["Projek Lab PBK_atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["Projek Lab PBK_atlas_4"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["Projek Lab PBK_atlas_4"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["Projek Lab PBK_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["Projek Lab PBK_atlas_4"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["Projek Lab PBK_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(img.CachedBmp_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2153,249);


(lib.komputer = function() {
	this.initialize(ss["Projek Lab PBK_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.TulisanYukQuiz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_16();
	this.instance.setTransform(-260.15,-57.05,0.3308,0.3308);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TulisanYukQuiz, new cjs.Rectangle(-260.1,-57,520.4000000000001,114.1), null);


(lib.an_TextInput = function(options) {
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.myButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_65();
	this.instance.setTransform(-166.45,-57.45,0.2804,0.2804);

	this.instance_1 = new lib.CachedBmp_66();
	this.instance_1.setTransform(-166.45,-57.45,0.2804,0.2804);

	this.instance_2 = new lib.CachedBmp_67();
	this.instance_2.setTransform(-166.45,-57.45,0.2804,0.2804);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-166.4,-57.4,332.8,114.9);


(lib.LingkaranMerahSplashScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_12();
	this.instance.setTransform(-115.95,-115.95,0.2238,0.2238);

	this.instance_1 = new lib.CachedBmp_11();
	this.instance_1.setTransform(16,-89.4,0.2238,0.2238);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LingkaranMerahSplashScreen, new cjs.Rectangle(-115.9,-115.9,265.3,259.5), null);


(lib.LingkaranBiruSplashScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(-115.95,-115.95,0.1766,0.1766);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LingkaranBiruSplashScreen, new cjs.Rectangle(-115.9,-115.9,265.4,259.4), null);


(lib.an_CSS = function(options) {
	this._element = new $.an.CSS(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.BackgroundPilihan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_64();
	this.instance.setTransform(-304.4,-107.45,0.4574,0.4574);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BackgroundPilihan, new cjs.Rectangle(-304.4,-107.4,608.8,215), null);


// stage content:
(lib.ProjekLabPBK = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{quizTulisanFrame:49,refreshFrame:50,hasilFrame:51,selamatDatangFrame:48});

	// timeline functions:
	this.frame_48 = function() {
		this.stop();
		indexSoal = -1;
		inputNama.placeholder = 'Masukkan nama...';
		
		this.buttonMulai.addEventListener('click',eventButtonMulai = ()=>{
			if(inputNama.value != ''){
				if(confirm('Mulai quiz sekarang?')){
					namaUser = inputNama.value;
					this.buttonMulai.removeEventListener('click',eventButtonMulai);
					this.gotoAndStop('refreshFrame');
				}
			}else{
				alert('Nama belum diisi!');
			}
		});
		
		inputNama.addEventListener('keyup',eventEnterMulai = (e)=>{
			if(e.keyCode == 13){
					if(inputNama.value != ''){
						if(confirm('Mulai quiz sekarang?')){
							namaUser = inputNama.value;
							this.inputNama.removeEventListener('click',eventEnterMulai);
							this.gotoAndStop('refreshFrame');
						}
					}else{
						alert('Nama belum diisi!');
					}
			}
		});
	}
	this.frame_49 = function() {
		this.stop();
		let waktu = waktuPerSoal;
		let cekJawaban = false;
		
		this.soalQuiz.text = quiz[indexSoal].soal;
		this.pilihanA.text = 'A. '+quiz[indexSoal].pilihA;
		this.pilihanB.text = 'B. '+quiz[indexSoal].pilihB;
		this.pilihanC.text = 'C. '+quiz[indexSoal].pilihC;
		this.pilihanD.text = 'D. '+quiz[indexSoal].pilihD;
		this.noSoal.text = (indexSoal+1)+'.';
		this.timerSoal.text = 'Waktu : '+waktu+' detik';
		this.benar.text = 'Benar : '+jumlahBenar;
		
		let timer = setInterval(()=>{
			waktu-=1;
			this.timerSoal.text = 'Waktu : '+waktu+' detik';
			if(waktu==0){
				clearInterval(timer);
				if(cekJawaban){
					jumlahBenar+=1;
				}
				this.pilihanA.removeEventListener('click',pilihA);
				this.pilihanB.removeEventListener('click',pilihB);
				this.pilihanC.removeEventListener('click',pilihC);
				this.pilihanD.removeEventListener('click',pilihD);
				this.gotoAndStop('refreshFrame');
			}
		},1000);
		
		this.pilihanA.addEventListener('click', pilihA = ()=>{
			if(quiz[indexSoal].kunciJawaban=='A'){
				cekJawaban = true;
			}else{
				cekJawaban = false;
			}
		});
		
		this.pilihanB.addEventListener('click', pilihB =()=>{
			if(quiz[indexSoal].kunciJawaban=='B'){
				cekJawaban = true;
			}else{
				cekJawaban = false;
			}
		});
		
		this.pilihanC.addEventListener('click',pilihC =()=>{
			if(quiz[indexSoal].kunciJawaban=='C'){
				cekJawaban = true;
			}else{
				cekJawaban = false;
			}
		});
		
		this.pilihanD.addEventListener('click',pilihD =()=>{
			if(quiz[indexSoal].kunciJawaban=='D'){
				cekJawaban = true;
			}else{
				cekJawaban = false;
			}
		});
	}
	this.frame_50 = function() {
		indexSoal+=1;
		if(quiz[indexSoal]){
			if(quiz[indexSoal].gambar){
				this.gotoAndStop('quizTulisanFrame');
			}else{
				this.gotoAndStop('quizTulisanFrame');		
			}
		}
		else{
			this.gotoAndStop('hasilFrame');
		}
	}
	this.frame_51 = function() {
		this.hasilBenar.text = 'Benar : '+jumlahBenar;
		this.hasilNama.text = 'Benar : '+namaUser;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(48).call(this.frame_48).wait(1).call(this.frame_49).wait(1).call(this.frame_50).wait(1).call(this.frame_51).wait(1));

	// soalQuiz
	this.pilihanA = new cjs.Text("A. Pilihan", "80px 'Cooper Black'", "#0066FF");
	this.pilihanA.name = "pilihanA";
	this.pilihanA.lineHeight = 94;
	this.pilihanA.lineWidth = 694;
	this.pilihanA.parent = this;
	this.pilihanA.setTransform(221.85,680.65,0.9545,0.9545);

	this.noSoal = new cjs.Text("1.", "80px 'Cooper Black'", "#0066FF");
	this.noSoal.name = "noSoal";
	this.noSoal.lineHeight = 94;
	this.noSoal.lineWidth = 100;
	this.noSoal.parent = this;
	this.noSoal.setTransform(118,249.05);

	this.pilihanD = new cjs.Text("D. Pilihan", "80px 'Cooper Black'", "#0066FF");
	this.pilihanD.name = "pilihanD";
	this.pilihanD.lineHeight = 94;
	this.pilihanD.lineWidth = 691;
	this.pilihanD.parent = this;
	this.pilihanD.setTransform(1050.25,805.5,0.9545,0.9545);

	this.pilihanB = new cjs.Text("B. Pilihan", "80px 'Cooper Black'", "#0066FF");
	this.pilihanB.name = "pilihanB";
	this.pilihanB.lineHeight = 94;
	this.pilihanB.lineWidth = 691;
	this.pilihanB.parent = this;
	this.pilihanB.setTransform(221.9,805.5,0.9545,0.9545);

	this.pilihanC = new cjs.Text("C. Pilihan", "80px 'Cooper Black'", "#0066FF");
	this.pilihanC.name = "pilihanC";
	this.pilihanC.lineHeight = 94;
	this.pilihanC.lineWidth = 691;
	this.pilihanC.parent = this;
	this.pilihanC.setTransform(1050.25,680.65,0.9545,0.9545);

	this.benar = new cjs.Text("Benar :", "80px 'Cooper Black'", "#0066FF");
	this.benar.name = "benar";
	this.benar.lineHeight = 94;
	this.benar.lineWidth = 580;
	this.benar.parent = this;
	this.benar.setTransform(222,79.45);

	this.timerSoal = new cjs.Text("Waktu :", "80px 'Cooper Black'", "#0066FF");
	this.timerSoal.name = "timerSoal";
	this.timerSoal.lineHeight = 94;
	this.timerSoal.lineWidth = 794;
	this.timerSoal.parent = this;
	this.timerSoal.setTransform(918.05,82.55);

	this.soalQuiz = new cjs.Text("Soal Quiz", "80px 'Cooper Black'", "#0066FF");
	this.soalQuiz.name = "soalQuiz";
	this.soalQuiz.lineHeight = 94;
	this.soalQuiz.lineWidth = 1411;
	this.soalQuiz.parent = this;
	this.soalQuiz.setTransform(222.1,249.15,1.0542,1.0542);

	this.bgPilihanA = new lib.BackgroundPilihan();
	this.bgPilihanA.setTransform(551.65,732.2,1.0931,0.4773,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.bgPilihanA},{t:this.soalQuiz},{t:this.timerSoal},{t:this.benar},{t:this.pilihanC},{t:this.pilihanB},{t:this.pilihanD},{t:this.noSoal},{t:this.pilihanA,p:{scaleX:0.9545,scaleY:0.9545,x:221.85,y:680.65,text:"A. Pilihan",lineWidth:694}}]},49).to({state:[{t:this.pilihanA,p:{scaleX:1,scaleY:1,x:765.4,y:337.4,text:"Refresh",lineWidth:448}}]},1).to({state:[]},1).wait(1));

	// hasilQuiz
	this.hasilNama = new cjs.Text("Nama :", "80px 'Cooper Black'", "#0066FF");
	this.hasilNama.name = "hasilNama";
	this.hasilNama.lineHeight = 94;
	this.hasilNama.lineWidth = 1072;
	this.hasilNama.parent = this;
	this.hasilNama.setTransform(457.3,408.3);

	this.hasilBenar = new cjs.Text("Benar :", "80px 'Cooper Black'", "#0066FF");
	this.hasilBenar.name = "hasilBenar";
	this.hasilBenar.lineHeight = 94;
	this.hasilBenar.lineWidth = 812;
	this.hasilBenar.parent = this;
	this.hasilBenar.setTransform(498.85,300.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.hasilBenar},{t:this.hasilNama}]},51).wait(1));

	// SelamatDatang
	this.instance = new lib.an_CSS({'id': '', 'href':'https://muhammadfattah.github.io/projek-lab-pbk/assets/style.css'});

	this.instance.setTransform(2461.9,260.2,8.7037,8.7037,0,0,0,50.1,11.1);

	this.instance_1 = new lib.komputer();
	this.instance_1.setTransform(138,130,0.3039,0.3039);

	this.instance_2 = new lib.LingkaranMerahSplashScreen();
	this.instance_2.setTransform(1581.4,2.15,1.8937,1.8937,0,0,0,0.2,0.2);

	this.instance_3 = new lib.LingkaranMerahSplashScreen();
	this.instance_3.setTransform(102.9,1027.5,1.8976,1.8976,0,0,0,0.1,0.1);

	this.instance_4 = new lib.LingkaranBiruSplashScreen();
	this.instance_4.setTransform(1601.3,1057.55,1.8976,1.8976);

	this.instance_5 = new lib.CachedBmp_3();
	this.instance_5.setTransform(1016.6,711.45,0.5,0.5);

	this.buttonMulai = new lib.myButton();
	this.buttonMulai.setTransform(1250.35,765.95,1.783,1.254);
	new cjs.ButtonHelper(this.buttonMulai, 0, 1, 2);

	this.inputNama = new lib.an_TextInput({'id': 'inputNama', 'value':'', 'disabled':false, 'visible':true, 'class':'input-nama'});

	this.inputNama.setTransform(1211.95,540.65,8.2265,5.8494,0,0,0,50.2,11.2);

	this.instance_6 = new lib.CachedBmp_2();
	this.instance_6.setTransform(436.9,475.15,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_1();
	this.instance_7.setTransform(502.5,235.2,0.5,0.5);

	this.instance_8 = new lib.LingkaranBiruSplashScreen();
	this.instance_8.setTransform(80.9,62.3,2.0467,2.0467,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.inputNama},{t:this.buttonMulai},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},48).to({state:[]},1).wait(3));

	// TextYukQuiz
	this.instance_9 = new lib.CachedBmp_4();
	this.instance_9.setTransform(673.2,630.15,0.5,0.5);

	this.instance_10 = new lib.TulisanYukQuiz();
	this.instance_10.setTransform(960.15,540.05,1.5113,1.5113,0,0,0,0.1,0);

	this.instance_11 = new lib.CachedBmp_5();
	this.instance_11.setTransform(673.2,630.15,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_6();
	this.instance_12.setTransform(673.2,630.15,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_7();
	this.instance_13.setTransform(673.2,630.15,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_8();
	this.instance_14.setTransform(673.2,630.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).to({state:[{t:this.instance_10},{t:this.instance_11}]},11).to({state:[{t:this.instance_10},{t:this.instance_12}]},12).to({state:[{t:this.instance_10},{t:this.instance_13}]},12).to({state:[{t:this.instance_10},{t:this.instance_14}]},12).to({state:[]},1).wait(4));

	// LingkaranBiru1
	this.instance_15 = new lib.LingkaranBiruSplashScreen();
	this.instance_15.setTransform(88.2,73.05,2.3516,2.3516,0,0,0,0.4,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({regX:-88,regY:-85,scaleX:2.724,scaleY:2.724,x:-119.7,y:-127.25},23).to({regX:0.4,regY:0.1,scaleX:2.3516,scaleY:2.3516,x:88.2,y:73.05},24).to({_off:true},1).wait(4));

	// LingkaranBiru2
	this.instance_16 = new lib.LingkaranBiruSplashScreen();
	this.instance_16.setTransform(2004.4,1172.9,2.3516,2.3516,0,0,0,79.1,77.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({scaleX:2.8308,scaleY:2.8308},23).to({scaleX:2.3516,scaleY:2.3516},24).to({_off:true},1).wait(4));

	// LingkaranMerah1
	this.instance_17 = new lib.LingkaranMerahSplashScreen();
	this.instance_17.setTransform(1537.7,1.9,2.2343,2.2343,0,0,0,0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({regX:-17.2,regY:-117.4,scaleX:1.7659,scaleY:1.7659,x:1498.25,y:-260.35},23).to({regX:0.4,regY:0,scaleX:2.2343,scaleY:2.2343,x:1537.7,y:1.9},24).to({_off:true},1).wait(4));

	// LingkaranMerah2
	this.instance_18 = new lib.LingkaranMerahSplashScreen();
	this.instance_18.setTransform(381.45,1076.95,2.2343,2.2343,0,0,0,0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({regX:0.5,regY:119.1,scaleX:1.8455,scaleY:1.8455,x:381.65,y:1343.1},23).to({regX:0.4,regY:0,scaleX:2.2343,scaleY:2.2343,x:381.45,y:1076.95},24).to({_off:true},1).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(534.3,84,2366.3,1514.9);
// library properties:
lib.properties = {
	id: '7BB8701EF4292944BDD54EB970A9BA5E',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_1.png?1623393875459", id:"CachedBmp_1"},
		{src:"images/Projek Lab PBK_atlas_.png?1623393875398", id:"Projek Lab PBK_atlas_"},
		{src:"images/Projek Lab PBK_atlas_2.png?1623393875399", id:"Projek Lab PBK_atlas_2"},
		{src:"images/Projek Lab PBK_atlas_3.png?1623393875399", id:"Projek Lab PBK_atlas_3"},
		{src:"images/Projek Lab PBK_atlas_4.png?1623393875399", id:"Projek Lab PBK_atlas_4"},
		{src:"images/Projek Lab PBK_atlas_5.png?1623393875400", id:"Projek Lab PBK_atlas_5"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1623393875459", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1623393875459", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js?1623393875459", id:"an.TextInput"},
		{src:"components/ui/src/css.js?1623393875459", id:"an.CSS"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

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
an.compositions['7BB8701EF4292944BDD54EB970A9BA5E'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	if((this.stage == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;