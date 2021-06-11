(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Projek Lab PBK_atlas_", frames: [[0,0,1503,1469]]},
		{name:"Projek Lab PBK_atlas_2", frames: [[0,0,1210,1106]]},
		{name:"Projek Lab PBK_atlas_3", frames: [[0,1075,1573,345],[0,1422,1187,410],[0,0,1069,1068],[1071,0,615,1073]]},
		{name:"Projek Lab PBK_atlas_4", frames: [[0,0,1187,410],[0,412,1187,410],[958,1158,1022,165],[0,824,1182,165],[0,991,1140,165],[0,1352,1099,165],[0,1519,1022,165],[0,1158,956,192],[1184,824,724,228]]}
];


// symbols:



(lib.CachedBmp_15 = function() {
	this.initialize(ss["Projek Lab PBK_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_42 = function() {
	this.initialize(ss["Projek Lab PBK_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_41 = function() {
	this.initialize(ss["Projek Lab PBK_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_40 = function() {
	this.initialize(ss["Projek Lab PBK_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["Projek Lab PBK_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["Projek Lab PBK_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["Projek Lab PBK_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["Projek Lab PBK_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["Projek Lab PBK_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["Projek Lab PBK_atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["Projek Lab PBK_atlas_4"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["Projek Lab PBK_atlas_4"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["Projek Lab PBK_atlas_4"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["Projek Lab PBK_atlas_4"]);
	this.gotoAndStop(8);
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
	this.instance = new lib.CachedBmp_15();
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
	this.instance = new lib.CachedBmp_40();
	this.instance.setTransform(-166.45,-57.45,0.2804,0.2804);

	this.instance_1 = new lib.CachedBmp_41();
	this.instance_1.setTransform(-166.45,-57.45,0.2804,0.2804);

	this.instance_2 = new lib.CachedBmp_42();
	this.instance_2.setTransform(-166.45,-57.45,0.2804,0.2804);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-166.4,-57.4,332.8,114.9);


(lib.LingkaranMerahSplashScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_11();
	this.instance.setTransform(-116,-115.95,0.2171,0.2171);

	this.instance_1 = new lib.CachedBmp_10();
	this.instance_1.setTransform(16,-89.4,0.2171,0.2171);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LingkaranMerahSplashScreen, new cjs.Rectangle(-116,-115.9,265.6,259.5), null);


(lib.LingkaranBiruSplashScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(-115.95,-115.95,0.1766,0.1766);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LingkaranBiruSplashScreen, new cjs.Rectangle(-115.9,-115.9,265.4,259.4), null);


(lib.an_Image = function(options) {
	this._element = new $.an.Image(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



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



(lib.an_Button = function(options) {
	this._element = new $.an.Button(options);
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



// stage content:
(lib.ProjekLabPBK = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{quizTulisanFrame:49,quizBergambarFrame:50,refreshFrame:52,hasilFrame:51,selamatDatangFrame:48});

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
		pilihanA.innerHTML = 'A. '+quiz[indexSoal].pilihA;
		pilihanB.innerHTML = 'B. '+quiz[indexSoal].pilihB;
		pilihanC.innerHTML = 'C. '+quiz[indexSoal].pilihC;
		pilihanD.innerHTML = 'D. '+quiz[indexSoal].pilihD;
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
				hapusEventTombol();
				hapusButtonAktif();
				this.gotoAndStop('refreshFrame');
			}
		},1000);
		
		pilihanA.addEventListener('click', pilihA = ()=>{
			hapusButtonAktif();
			pilihanA.classList.add('active');
			if(quiz[indexSoal].kunciJawaban=='A'){
				cekJawaban = true;
			}else{
				cekJawaban = false;
			}
		});
		
		pilihanB.addEventListener('click', pilihB =()=>{
			hapusButtonAktif();
			pilihanB.classList.add('active');
			if(quiz[indexSoal].kunciJawaban=='B'){
				cekJawaban = true;
			}else{
				cekJawaban = false;
			}
		});
		
		pilihanC.addEventListener('click',pilihC =()=>{
			hapusButtonAktif();
			pilihanC.classList.add('active');
			if(quiz[indexSoal].kunciJawaban=='C'){
				cekJawaban = true;
			}else{
				cekJawaban = false;
			}
		});
		
		pilihanD.addEventListener('click',pilihD =()=>{
			hapusButtonAktif();
			pilihanD.classList.add('active');
			if(quiz[indexSoal].kunciJawaban=='D'){
				cekJawaban = true;
			}else{
				cekJawaban = false;
			}
		});
		
		const hapusButtonAktif = ()=>{
			pilihanA.classList.remove('active');
			pilihanB.classList.remove('active');
			pilihanC.classList.remove('active');
			pilihanD.classList.remove('active');
		}
		
		const hapusEventTombol = ()=>{
			pilihanA.removeEventListener('click',pilihA);
			pilihanB.removeEventListener('click',pilihB);
			pilihanC.removeEventListener('click',pilihC);
			pilihanD.removeEventListener('click',pilihD);
		}
	}
	this.frame_50 = function() {
		this.stop();
		
		gambarQuiz.style.height = 'auto';
		console.log(gambarQuiz);
		gambarQuiz.src = 'data:image/jpeg;base64,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';
		let waktu = waktuPerSoal;
		let cekJawaban = false;
		
		this.soalQuizBergambar.text = quiz[indexSoal].soal;
		pilihanABergambar.innerHTML = 'A. '+quiz[indexSoal].pilihA;
		pilihanBBergambar.innerHTML = 'B. '+quiz[indexSoal].pilihB;
		pilihanCBergambar.innerHTML = 'C. '+quiz[indexSoal].pilihC;
		pilihanDBergambar.innerHTML = 'D. '+quiz[indexSoal].pilihD;
		this.noSoalBergambar.text = (indexSoal+1)+'.';
		this.timerSoalBergambar.text = 'Waktu : '+waktu+' detik';
		this.benarBergambar.text = 'Benar : '+jumlahBenar;
		
		let timer = setInterval(()=>{
			waktu-=1;
			this.timerSoalBergambar.text = 'Waktu : '+waktu+' detik';
			if(waktu==0){
				clearInterval(timer);
				if(cekJawaban){
					jumlahBenar+=1;
				}
				hapusEventTombol();
				hapusButtonAktif();
				this.gotoAndStop('refreshFrame');
			}
		},1000);
		
		pilihanABergambar.addEventListener('click', pilihA = ()=>{
			hapusButtonAktif();
			pilihanABergambar.classList.add('active');
			if(quiz[indexSoal].kunciJawaban=='A'){
				cekJawaban = true;
			}else{
				cekJawaban = false;
			}
		});
		
		pilihanBBergambar.addEventListener('click', pilihB =()=>{
			hapusButtonAktif();
			pilihanBBergambar.classList.add('active');
			if(quiz[indexSoal].kunciJawaban=='B'){
				cekJawaban = true;
			}else{
				cekJawaban = false;
			}
		});
		
		pilihanCBergambar.addEventListener('click',pilihC =()=>{
			hapusButtonAktif();
			pilihanCBergambar.classList.add('active');
			if(quiz[indexSoal].kunciJawaban=='C'){
				cekJawaban = true;
			}else{
				cekJawaban = false;
			}
		});
		
		pilihanDBergambar.addEventListener('click',pilihD =()=>{
			hapusButtonAktif();
			pilihanDBergambar.classList.add('active');
			if(quiz[indexSoal].kunciJawaban=='D'){
				cekJawaban = true;
			}else{
				cekJawaban = false;
			}
		});
		
		const hapusButtonAktif = ()=>{
			pilihanABergambar.classList.remove('active');
			pilihanBBergambar.classList.remove('active');
			pilihanCBergambar.classList.remove('active');
			pilihanDBergambar.classList.remove('active');
		}
		
		const hapusEventTombol = ()=>{
			pilihanABergambar.removeEventListener('click',pilihA);
			pilihanBBergambar.removeEventListener('click',pilihB);
			pilihanCBergambar.removeEventListener('click',pilihC);
			pilihanDBergambar.removeEventListener('click',pilihD);
		}
	}
	this.frame_51 = function() {
		this.hasilBenar.text = 'Benar : '+jumlahBenar;
		this.hasilNama.text = 'Nama : '+namaUser;
	}
	this.frame_52 = function() {
		indexSoal+=1;
		if(quiz[indexSoal]){
			if(quiz[indexSoal].gambar){
				this.gotoAndStop('quizTulisanFrame');
			}else{
				this.gotoAndStop('quizBergambarFrame');		
			}
		}
		else{
			this.gotoAndStop('hasilFrame');
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(48).call(this.frame_48).wait(1).call(this.frame_49).wait(1).call(this.frame_50).wait(1).call(this.frame_51).wait(1).call(this.frame_52).wait(1));

	// quizTulisan
	this.pilihanD = new lib.an_Button({'id': 'pilihanD', 'label':'Pilihan A', 'disabled':false, 'visible':true, 'class':'button'});

	this.pilihanD.setTransform(1380.65,855.6,6.6323,4.7934,0,0,0,50.1,11.1);

	this.instance = new lib.an_CSS({'id': '', 'href':'https://muhammadfattah.github.io/projek-lab-pbk/assets/style.css'});

	this.instance.setTransform(2405,343.65,8.7037,8.7037,0,0,0,50.1,11.1);

	this.noSoal = new cjs.Text("1.", "80px 'Cooper Black'", "#0066FF");
	this.noSoal.name = "noSoal";
	this.noSoal.lineHeight = 94;
	this.noSoal.lineWidth = 100;
	this.noSoal.parent = this;
	this.noSoal.setTransform(118,249.05);

	this.benar = new cjs.Text("Benar :", "80px 'Cooper Black'", "#0066FF");
	this.benar.name = "benar";
	this.benar.lineHeight = 94;
	this.benar.lineWidth = 580;
	this.benar.parent = this;
	this.benar.setTransform(222,79.45);

	this.timerSoal = new cjs.Text("Waktu :", "80px 'Cooper Black'", "#FF0000");
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

	this.pilihanA = new lib.an_Button({'id': 'pilihanA', 'label':'Pilihan A', 'disabled':false, 'visible':true, 'class':'button'});

	this.pilihanA.setTransform(552.3,732.2,6.6324,4.7934,0,0,0,50.1,11.1);

	this.pilihanB = new lib.an_Button({'id': 'pilihanB', 'label':'Pilihan A', 'disabled':false, 'visible':true, 'class':'button'});

	this.pilihanB.setTransform(552.5,855.6,6.6323,4.7934,0,0,0,50.1,11.1);

	this.pilihanC = new lib.an_Button({'id': 'pilihanC', 'label':'Pilihan A', 'disabled':false, 'visible':true, 'class':'button'});

	this.pilihanC.setTransform(1380.65,732.2,6.6323,4.7934,0,0,0,50.1,11.1);

	this.instance_1 = new lib.LingkaranBiruSplashScreen();
	this.instance_1.setTransform(1848.15,995.35,2.4537,2.4537,0,0,0,0,0.1);

	this.instance_2 = new lib.LingkaranMerahSplashScreen();
	this.instance_2.setTransform(42.25,1032.4,1.54,1.54,0,0,0,0.2,0.1);

	this.instance_3 = new lib.LingkaranBiruSplashScreen();
	this.instance_3.setTransform(1858.95,-18.05,1.5981,1.5981,0,0,0,0,0.1);

	this.instance_4 = new lib.LingkaranMerahSplashScreen();
	this.instance_4.setTransform(116.95,-9.55,2.3027,2.3027,0,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.pilihanC},{t:this.pilihanB},{t:this.pilihanA},{t:this.soalQuiz},{t:this.timerSoal},{t:this.benar},{t:this.noSoal},{t:this.instance},{t:this.pilihanD}]},49).to({state:[]},1).wait(3));

	// quizBergambar
	this.gambarQuiz = new lib.an_Image({'id': 'gambarQuiz', 'src':'images/', 'alt':'image', 'border':'0', 'visible':true, 'class':'image'});

	this.gambarQuiz.setTransform(1510.25,394.9,2.9508,2.9508,0,0,0,50.1,50.1);

	this.pilihanDBergambar = new lib.an_Button({'id': 'pilihanDBergambar', 'label':'Pilihan A', 'disabled':false, 'visible':true, 'class':'button'});

	this.pilihanDBergambar.setTransform(1380.65,855.6,6.6323,4.7934,0,0,0,50.1,11.1);

	this.instance_5 = new lib.an_CSS({'id': 'instance_5', 'href':'https://muhammadfattah.github.io/projek-lab-pbk/assets/style.css'});

	this.instance_5.setTransform(2405,343.65,8.7037,8.7037,0,0,0,50.1,11.1);

	this.noSoalBergambar = new cjs.Text("1.", "80px 'Cooper Black'", "#0066FF");
	this.noSoalBergambar.name = "noSoalBergambar";
	this.noSoalBergambar.lineHeight = 94;
	this.noSoalBergambar.lineWidth = 100;
	this.noSoalBergambar.parent = this;
	this.noSoalBergambar.setTransform(118,249.05);

	this.benarBergambar = new cjs.Text("Benar :", "80px 'Cooper Black'", "#0066FF");
	this.benarBergambar.name = "benarBergambar";
	this.benarBergambar.lineHeight = 94;
	this.benarBergambar.lineWidth = 580;
	this.benarBergambar.parent = this;
	this.benarBergambar.setTransform(222,79.45);

	this.timerSoalBergambar = new cjs.Text("Waktu :", "80px 'Cooper Black'", "#FF0000");
	this.timerSoalBergambar.name = "timerSoalBergambar";
	this.timerSoalBergambar.lineHeight = 94;
	this.timerSoalBergambar.lineWidth = 794;
	this.timerSoalBergambar.parent = this;
	this.timerSoalBergambar.setTransform(918.05,82.55);

	this.soalQuizBergambar = new cjs.Text("Soal Quiz", "80px 'Cooper Black'", "#0066FF");
	this.soalQuizBergambar.name = "soalQuizBergambar";
	this.soalQuizBergambar.lineHeight = 94;
	this.soalQuizBergambar.lineWidth = 1042;
	this.soalQuizBergambar.parent = this;
	this.soalQuizBergambar.setTransform(222.1,249.15,1.0542,1.0542);

	this.pilihanABergambar = new lib.an_Button({'id': 'pilihanABergambar', 'label':'Pilihan A', 'disabled':false, 'visible':true, 'class':'button'});

	this.pilihanABergambar.setTransform(552.3,732.2,6.6324,4.7934,0,0,0,50.1,11.1);

	this.pilihanBBergambar = new lib.an_Button({'id': 'pilihanBBergambar', 'label':'Pilihan A', 'disabled':false, 'visible':true, 'class':'button'});

	this.pilihanBBergambar.setTransform(552.5,855.6,6.6323,4.7934,0,0,0,50.1,11.1);

	this.pilihanCBergambar = new lib.an_Button({'id': 'pilihanCBergambar', 'label':'Pilihan A', 'disabled':false, 'visible':true, 'class':'button'});

	this.pilihanCBergambar.setTransform(1380.65,732.2,6.6323,4.7934,0,0,0,50.1,11.1);

	this.instance_6 = new lib.LingkaranBiruSplashScreen();
	this.instance_6.setTransform(1848.15,995.35,2.4537,2.4537,0,0,0,0,0.1);

	this.instance_7 = new lib.LingkaranMerahSplashScreen();
	this.instance_7.setTransform(42.25,1032.4,1.54,1.54,0,0,0,0.2,0.1);

	this.instance_8 = new lib.LingkaranBiruSplashScreen();
	this.instance_8.setTransform(1858.95,-18.05,1.5981,1.5981,0,0,0,0,0.1);

	this.instance_9 = new lib.LingkaranMerahSplashScreen();
	this.instance_9.setTransform(116.95,-9.55,2.3027,2.3027,0,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.pilihanCBergambar},{t:this.pilihanBBergambar},{t:this.pilihanABergambar},{t:this.soalQuizBergambar},{t:this.timerSoalBergambar},{t:this.benarBergambar},{t:this.noSoalBergambar},{t:this.instance_5},{t:this.pilihanDBergambar},{t:this.gambarQuiz}]},50).to({state:[]},1).wait(2));

	// refresh
	this.text = new cjs.Text("Refresh", "80px 'Cooper Black'", "#0066FF");
	this.text.lineHeight = 94;
	this.text.lineWidth = 448;
	this.text.parent = this;
	this.text.setTransform(765.4,337.4);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(52).to({_off:false},0).wait(1));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.hasilBenar},{t:this.hasilNama}]},51).to({state:[]},1).wait(1));

	// SelamatDatang
	this.instance_10 = new lib.an_CSS({'id': 'instance_10', 'href':'https://muhammadfattah.github.io/projek-lab-pbk/assets/style.css'});

	this.instance_10.setTransform(2461.9,260.2,8.7037,8.7037,0,0,0,50.1,11.1);

	this.instance_11 = new lib.komputer();
	this.instance_11.setTransform(138,130,0.3039,0.3039);

	this.instance_12 = new lib.LingkaranMerahSplashScreen();
	this.instance_12.setTransform(1581.4,2.15,1.8937,1.8937,0,0,0,0.2,0.2);

	this.instance_13 = new lib.LingkaranMerahSplashScreen();
	this.instance_13.setTransform(102.9,1027.5,1.8976,1.8976,0,0,0,0.1,0.1);

	this.instance_14 = new lib.LingkaranBiruSplashScreen();
	this.instance_14.setTransform(1601.3,1057.55,1.8976,1.8976);

	this.instance_15 = new lib.CachedBmp_3();
	this.instance_15.setTransform(1016.6,711.45,0.5,0.5);

	this.buttonMulai = new lib.myButton();
	this.buttonMulai.setTransform(1250.35,765.95,1.783,1.254);
	new cjs.ButtonHelper(this.buttonMulai, 0, 1, 2);

	this.inputNama = new lib.an_TextInput({'id': 'inputNama', 'value':'', 'disabled':false, 'visible':true, 'class':'input-nama'});

	this.inputNama.setTransform(1211.95,540.65,8.2265,5.8494,0,0,0,50.2,11.2);

	this.instance_16 = new lib.CachedBmp_2();
	this.instance_16.setTransform(436.9,475.15,0.5,0.5);

	this.instance_17 = new lib.CachedBmp_1();
	this.instance_17.setTransform(502.5,235.2,0.5,0.5);

	this.instance_18 = new lib.LingkaranBiruSplashScreen();
	this.instance_18.setTransform(80.9,62.3,2.0467,2.0467,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.inputNama},{t:this.buttonMulai},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]},48).to({state:[]},1).wait(4));

	// TextYukQuiz
	this.instance_19 = new lib.CachedBmp_4();
	this.instance_19.setTransform(673.2,630.15,0.5,0.5);

	this.instance_20 = new lib.TulisanYukQuiz();
	this.instance_20.setTransform(960.15,540.05,1.5113,1.5113,0,0,0,0.1,0);

	this.instance_21 = new lib.CachedBmp_5();
	this.instance_21.setTransform(673.2,630.15,0.5,0.5);

	this.instance_22 = new lib.CachedBmp_6();
	this.instance_22.setTransform(673.2,630.15,0.5,0.5);

	this.instance_23 = new lib.CachedBmp_7();
	this.instance_23.setTransform(673.2,630.15,0.5,0.5);

	this.instance_24 = new lib.CachedBmp_8();
	this.instance_24.setTransform(673.2,630.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19}]}).to({state:[{t:this.instance_20},{t:this.instance_21}]},11).to({state:[{t:this.instance_20},{t:this.instance_22}]},12).to({state:[{t:this.instance_20},{t:this.instance_23}]},12).to({state:[{t:this.instance_20},{t:this.instance_24}]},12).to({state:[]},1).wait(5));

	// LingkaranBiru1
	this.instance_25 = new lib.LingkaranBiruSplashScreen();
	this.instance_25.setTransform(88.2,73.05,2.3516,2.3516,0,0,0,0.4,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).to({regX:-88,regY:-85,scaleX:2.724,scaleY:2.724,x:-119.7,y:-127.25},23).to({regX:0.4,regY:0.1,scaleX:2.3516,scaleY:2.3516,x:88.2,y:73.05},24).to({_off:true},1).wait(5));

	// LingkaranBiru2
	this.instance_26 = new lib.LingkaranBiruSplashScreen();
	this.instance_26.setTransform(2004.4,1172.9,2.3516,2.3516,0,0,0,79.1,77.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).to({scaleX:2.8308,scaleY:2.8308},23).to({scaleX:2.3516,scaleY:2.3516},24).to({_off:true},1).wait(5));

	// LingkaranMerah1
	this.instance_27 = new lib.LingkaranMerahSplashScreen();
	this.instance_27.setTransform(1537.7,1.9,2.2343,2.2343,0,0,0,0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).to({regX:-17.2,regY:-117.4,scaleX:1.7659,scaleY:1.7659,x:1498.25,y:-260.35},23).to({regX:0.4,regY:0,scaleX:2.2343,scaleY:2.2343,x:1537.7,y:1.9},24).to({_off:true},1).wait(5));

	// LingkaranMerah2
	this.instance_28 = new lib.LingkaranMerahSplashScreen();
	this.instance_28.setTransform(381.45,1076.95,2.2343,2.2343,0,0,0,0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).to({regX:0.5,regY:119.1,scaleX:1.8455,scaleY:1.8455,x:381.65,y:1343.1},23).to({regX:0.4,regY:0,scaleX:2.2343,scaleY:2.2343,x:381.45,y:1076.95},24).to({_off:true},1).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(534.3,84,2366.3,1515);
// library properties:
lib.properties = {
	id: '7BB8701EF4292944BDD54EB970A9BA5E',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_1.png?1623426092425", id:"CachedBmp_1"},
		{src:"images/Projek Lab PBK_atlas_.png?1623426092350", id:"Projek Lab PBK_atlas_"},
		{src:"images/Projek Lab PBK_atlas_2.png?1623426092350", id:"Projek Lab PBK_atlas_2"},
		{src:"images/Projek Lab PBK_atlas_3.png?1623426092350", id:"Projek Lab PBK_atlas_3"},
		{src:"images/Projek Lab PBK_atlas_4.png?1623426092351", id:"Projek Lab PBK_atlas_4"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1623426092425", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1623426092425", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js?1623426092425", id:"an.TextInput"},
		{src:"components/ui/src/image.js?1623426092425", id:"an.Image"},
		{src:"components/ui/src/css.js?1623426092425", id:"an.CSS"},
		{src:"components/ui/src/button.js?1623426092425", id:"an.Button"}
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