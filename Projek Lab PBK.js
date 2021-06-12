(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Projek Lab PBK_atlas_", frames: [[0,0,1503,1469]]},
		{name:"Projek Lab PBK_atlas_2", frames: [[0,0,1210,1106]]},
		{name:"Projek Lab PBK_atlas_3", frames: [[0,1075,1573,345],[0,1422,1187,410],[0,0,1069,1068],[1071,0,615,1073]]},
		{name:"Projek Lab PBK_atlas_4", frames: [[0,0,1187,410],[0,412,1187,410],[958,1382,1022,165],[0,1048,1182,165],[0,1215,1140,165],[0,1770,1099,165],[958,1549,1022,165],[0,1382,956,192],[1189,0,724,228],[0,1576,956,192],[0,824,2002,222]]}
];


// symbols:



(lib.CachedBmp_187 = function() {
	this.initialize(ss["Projek Lab PBK_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_211 = function() {
	this.initialize(ss["Projek Lab PBK_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_210 = function() {
	this.initialize(ss["Projek Lab PBK_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_209 = function() {
	this.initialize(ss["Projek Lab PBK_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_183 = function() {
	this.initialize(ss["Projek Lab PBK_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_182 = function() {
	this.initialize(ss["Projek Lab PBK_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_181 = function() {
	this.initialize(ss["Projek Lab PBK_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_180 = function() {
	this.initialize(ss["Projek Lab PBK_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_179 = function() {
	this.initialize(ss["Projek Lab PBK_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_178 = function() {
	this.initialize(ss["Projek Lab PBK_atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_177 = function() {
	this.initialize(ss["Projek Lab PBK_atlas_4"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_176 = function() {
	this.initialize(ss["Projek Lab PBK_atlas_4"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_175 = function() {
	this.initialize(ss["Projek Lab PBK_atlas_4"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_174 = function() {
	this.initialize(ss["Projek Lab PBK_atlas_4"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_173 = function() {
	this.initialize(img.CachedBmp_173);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2153,249);


(lib.CachedBmp_172 = function() {
	this.initialize(ss["Projek Lab PBK_atlas_4"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_208 = function() {
	this.initialize(ss["Projek Lab PBK_atlas_4"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



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
	this.instance = new lib.CachedBmp_187();
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
	this.instance = new lib.CachedBmp_209();
	this.instance.setTransform(-166.45,-57.45,0.2804,0.2804);

	this.instance_1 = new lib.CachedBmp_210();
	this.instance_1.setTransform(-166.45,-57.45,0.2804,0.2804);

	this.instance_2 = new lib.CachedBmp_211();
	this.instance_2.setTransform(-166.45,-57.45,0.2804,0.2804);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-166.4,-57.4,332.8,114.9);


(lib.LingkaranMerahSplashScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_183();
	this.instance.setTransform(-116,-115.95,0.2171,0.2171);

	this.instance_1 = new lib.CachedBmp_182();
	this.instance_1.setTransform(16,-89.4,0.2171,0.2171);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LingkaranMerahSplashScreen, new cjs.Rectangle(-116,-115.9,265.6,259.5), null);


(lib.LingkaranBiruSplashScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_181();
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
	this.initialize(mode,startPosition,loop,{soundTrackFrame:0,quizTulisanFrame:49,quizBergambarFrame:50,refreshFrame:52,hasilFrame:51,selamatDatangFrame:48});

	// timeline functions:
	this.frame_0 = function() {
		createjs.Sound.play('soundTrack');
	}
	this.frame_48 = function() {
		this.stop();
		indexSoal = -1;
		jumlahBenar = 0;
		inputNama.placeholder = 'Masukkan nama...';
		
		createjs.Sound.play("correctSound");
		
		this.buttonMulai.addEventListener('click',eventButtonMulai = ()=>{
			createjs.Sound.play("buttonClickSound");
			if(inputNama.value != ''){
				if(confirm('Mulai quiz sekarang?')){
					namaUser = inputNama.value;
					this.buttonMulai.removeEventListener('click',eventButtonMulai);
					this.inputNama.removeEventListener('click',eventEnterMulai);
					this.removeAllChildren();
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
							this.buttonMulai.removeEventListener('click',eventButtonMulai);
							this.inputNama.removeEventListener('click',eventEnterMulai);
							this.removeAllChildren();
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
		createjs.Sound.play('timerSound');
		
		let timer = setInterval(()=>{
			waktu-=1;
			if(waktu>0){
				createjs.Sound.play('timerSound');
				this.timerSoal.text = 'Waktu : '+waktu+' detik';
			}
			if(waktu==0){
				this.timerSoal.text = 'Waktu : habis';
				tampilJawabanBenar();
				hapusEventTombol();
				if(cekJawaban){
					jumlahBenar+=1;
					createjs.Sound.play("correctSound");
				}else{
					createjs.Sound.play("errorSound");
				}
				this.benar.text = 'Benar : '+jumlahBenar;
			}
			if(waktu==-3){
				clearInterval(timer);
				hapusButtonAktif();
				this.removeAllChildren();
				this.gotoAndStop('refreshFrame');
			}
		},1000);
		
		pilihanA.addEventListener('click', pilihA = ()=>{
			createjs.Sound.play("buttonClickSound");
			hapusButtonAktif();
			pilihanA.classList.add('active');
			if(quiz[indexSoal].kunciJawaban=='A'){
				cekJawaban = true;
			}else{
				cekJawaban = false;
			}
		});
		
		pilihanB.addEventListener('click', pilihB =()=>{
			createjs.Sound.play("buttonClickSound");
			hapusButtonAktif();
			pilihanB.classList.add('active');
			if(quiz[indexSoal].kunciJawaban=='B'){
				cekJawaban = true;
			}else{
				cekJawaban = false;
			}
		});
		
		pilihanC.addEventListener('click',pilihC =()=>{
			createjs.Sound.play("buttonClickSound");
			hapusButtonAktif();
			pilihanC.classList.add('active');
			if(quiz[indexSoal].kunciJawaban=='C'){
				cekJawaban = true;
			}else{
				cekJawaban = false;
			}
		});
		
		pilihanD.addEventListener('click',pilihD =()=>{
			createjs.Sound.play("buttonClickSound");
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
			pilihanA.classList.remove('benar');
			pilihanB.classList.remove('benar');
			pilihanC.classList.remove('benar');
			pilihanD.classList.remove('benar');
		}
		
		const hapusEventTombol = ()=>{
			pilihanA.removeEventListener('click',pilihA);
			pilihanB.removeEventListener('click',pilihB);
			pilihanC.removeEventListener('click',pilihC);
			pilihanD.removeEventListener('click',pilihD);
		}
		
		const tampilJawabanBenar = ()=>{
			if(quiz[indexSoal].kunciJawaban=='A'){
				pilihanA.classList.add('benar');
			}
			if(quiz[indexSoal].kunciJawaban=='B'){
				pilihanB.classList.add('benar');
			}
			if(quiz[indexSoal].kunciJawaban=='C'){
				pilihanC.classList.add('benar');
			}
			if(quiz[indexSoal].kunciJawaban=='D'){
				pilihanD.classList.add('benar');
			}
		}
	}
	this.frame_50 = function() {
		this.stop();
		
		let waktu = waktuPerSoal;
		let cekJawaban = false;
		
		gambarQuiz.src = quiz[indexSoal].gambar;
		this.soalQuizBergambar.text = quiz[indexSoal].soal;
		pilihanABergambar.innerHTML = 'A. '+quiz[indexSoal].pilihA;
		pilihanBBergambar.innerHTML = 'B. '+quiz[indexSoal].pilihB;
		pilihanCBergambar.innerHTML = 'C. '+quiz[indexSoal].pilihC;
		pilihanDBergambar.innerHTML = 'D. '+quiz[indexSoal].pilihD;
		this.noSoalBergambar.text = (indexSoal+1)+'.';
		this.timerSoalBergambar.text = 'Waktu : '+waktu+' detik';
		this.benarBergambar.text = 'Benar : '+jumlahBenar;
		createjs.Sound.play('timerSound');
		
		let timer = setInterval(()=>{
			waktu-=1;
			if(waktu>0){
				createjs.Sound.play('timerSound');
				this.timerSoalBergambar.text = 'Waktu : '+waktu+' detik';
			}
			if(waktu==0){
				this.timerSoalBergambar.text = 'Waktu : habis';
				tampilJawabanBenar();
				hapusEventTombolBergambar();
				if(cekJawaban){
					jumlahBenar+=1;
					createjs.Sound.play("correctSound");
				}else{
					createjs.Sound.play("errorSound");
				}
				this.benar.text = 'Benar : '+jumlahBenar;
			}
			if(waktu==-3){
				clearInterval(timer);
				hapusButtonAktifBergambar();
				this.removeAllChildren();
				this.gotoAndStop('refreshFrame');
			}
		},1000);
		
		pilihanABergambar.addEventListener('click', pilihA = ()=>{
			createjs.Sound.play("buttonClickSound");
			hapusButtonAktifBergambar();
			pilihanABergambar.classList.add('active');
			if(quiz[indexSoal].kunciJawaban=='A'){
				cekJawaban = true;
			}else{
				cekJawaban = false;
			}
		});
		
		pilihanBBergambar.addEventListener('click', pilihB =()=>{
			createjs.Sound.play("buttonClickSound");
			hapusButtonAktifBergambar();
			pilihanBBergambar.classList.add('active');
			if(quiz[indexSoal].kunciJawaban=='B'){
				cekJawaban = true;
			}else{
				cekJawaban = false;
			}
		});
		
		pilihanCBergambar.addEventListener('click',pilihC =()=>{
			createjs.Sound.play("buttonClickSound");
			hapusButtonAktifBergambar();
			pilihanCBergambar.classList.add('active');
			if(quiz[indexSoal].kunciJawaban=='C'){
				cekJawaban = true;
			}else{
				cekJawaban = false;
			}
		});
		
		pilihanDBergambar.addEventListener('click',pilihD =()=>{
			createjs.Sound.play("buttonClickSound");
			hapusButtonAktifBergambar();
			pilihanDBergambar.classList.add('active');
			if(quiz[indexSoal].kunciJawaban=='D'){
				cekJawaban = true;
			}else{
				cekJawaban = false;
			}
		});
		
		const hapusButtonAktifBergambar = ()=>{
			pilihanABergambar.classList.remove('active');
			pilihanBBergambar.classList.remove('active');
			pilihanCBergambar.classList.remove('active');
			pilihanDBergambar.classList.remove('active');
			pilihanABergambar.classList.remove('benar');
			pilihanBBergambar.classList.remove('benar');
			pilihanCBergambar.classList.remove('benar');
			pilihanDBergambar.classList.remove('benar');
		}
		
		const hapusEventTombolBergambar = ()=>{
			pilihanABergambar.removeEventListener('click',pilihA);
			pilihanBBergambar.removeEventListener('click',pilihB);
			pilihanCBergambar.removeEventListener('click',pilihC);
			pilihanDBergambar.removeEventListener('click',pilihD);
		}
		
		const tampilJawabanBenar = ()=>{
			if(quiz[indexSoal].kunciJawaban=='A'){
				pilihanABergambar.classList.add('benar');
			}
			if(quiz[indexSoal].kunciJawaban=='B'){
				pilihanBBergambar.classList.add('benar');
			}
			if(quiz[indexSoal].kunciJawaban=='C'){
				pilihanCBergambar.classList.add('benar');
			}
			if(quiz[indexSoal].kunciJawaban=='D'){
				pilihanDBergambar.classList.add('benar');
			}
		}
	}
	this.frame_51 = function() {
		this.stop();
		createjs.Sound.play("correctSound");
		this.hasilNamaUser.text = namaUser;
		this.hasilBenar.text = 'Benar : '+jumlahBenar+' dari '+quiz.length+' soal';
		if(jumlahBenar/quiz.length >= 0.5){
			this.pesan.text = 'Wow, Kamu keren!';
		}else{
			this.pesan.text = 'Jangan sedih, ayo coba lagi!';
		}
		
		this.buttonUlang.addEventListener('click',eventButtonUlang = ()=>{
			createjs.Sound.play("buttonClickSound");
			if(confirm('Ulangi quiz?')){
				namaUser = '';
				this.buttonUlang.removeEventListener('click',eventButtonUlang);
				this.removeAllChildren();
				this.gotoAndStop('selamatDatangFrame');
			}
		});
	}
	this.frame_52 = function() {
		this.stop();
		indexSoal+=1;
		if(quiz[indexSoal]){
			if(quiz[indexSoal].gambar){
				this.gotoAndStop('quizBergambarFrame');
			}else{
				this.gotoAndStop('quizTulisanFrame');		
			}
		}
		else{
			this.gotoAndStop('hasilFrame');
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(48).call(this.frame_48).wait(1).call(this.frame_49).wait(1).call(this.frame_50).wait(1).call(this.frame_51).wait(1).call(this.frame_52).wait(1));

	// quizTulisan
	this.myStyle = new lib.an_CSS({'id': 'myStyle', 'href':'https://muhammadfattah.github.io/projek-lab-pbk/assets/style.css'});

	this.myStyle.setTransform(2447.75,371.6,8.7037,8.7037,0,0,0,50.1,11.1);

	this.pilihanD = new lib.an_Button({'id': 'pilihanD', 'label':'Pilihan A', 'disabled':false, 'visible':true, 'class':'button'});

	this.pilihanD.setTransform(1380.65,855.6,6.6323,4.7934,0,0,0,50.1,11.1);

	this.noSoal = new cjs.Text("1.", "60px 'Cooper Black'", "#0066FF");
	this.noSoal.name = "noSoal";
	this.noSoal.lineHeight = 71;
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

	this.soalQuiz = new cjs.Text("Soal Quiz", "60px 'Cooper Black'", "#0066FF");
	this.soalQuiz.name = "soalQuiz";
	this.soalQuiz.lineHeight = 71;
	this.soalQuiz.lineWidth = 1411;
	this.soalQuiz.parent = this;
	this.soalQuiz.setTransform(222.1,249.15,1.0542,1.0542);

	this.pilihanA = new lib.an_Button({'id': 'pilihanA', 'label':'Pilihan A', 'disabled':false, 'visible':true, 'class':'button'});

	this.pilihanA.setTransform(552.3,732.2,6.6324,4.7934,0,0,0,50.1,11.1);

	this.pilihanB = new lib.an_Button({'id': 'pilihanB', 'label':'Pilihan A', 'disabled':false, 'visible':true, 'class':'button'});

	this.pilihanB.setTransform(552.5,855.6,6.6323,4.7934,0,0,0,50.1,11.1);

	this.pilihanC = new lib.an_Button({'id': 'pilihanC', 'label':'Pilihan A', 'disabled':false, 'visible':true, 'class':'button'});

	this.pilihanC.setTransform(1380.65,732.2,6.6323,4.7934,0,0,0,50.1,11.1);

	this.instance = new lib.LingkaranBiruSplashScreen();
	this.instance.setTransform(1848.15,995.35,2.4537,2.4537,0,0,0,0,0.1);

	this.instance_1 = new lib.LingkaranMerahSplashScreen();
	this.instance_1.setTransform(42.25,1032.4,1.54,1.54,0,0,0,0.2,0.1);

	this.instance_2 = new lib.LingkaranBiruSplashScreen();
	this.instance_2.setTransform(1858.95,-18.05,1.5981,1.5981,0,0,0,0,0.1);

	this.instance_3 = new lib.LingkaranMerahSplashScreen();
	this.instance_3.setTransform(116.95,-9.55,2.3027,2.3027,0,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.pilihanC},{t:this.pilihanB},{t:this.pilihanA},{t:this.soalQuiz},{t:this.timerSoal},{t:this.benar},{t:this.noSoal},{t:this.pilihanD},{t:this.myStyle}]},49).to({state:[]},1).wait(3));

	// quizBergambar
	this.myStyle_1 = new lib.an_CSS({'id': 'myStyle_1', 'href':'https://muhammadfattah.github.io/projek-lab-pbk/assets/style.css'});

	this.myStyle_1.setTransform(2442.95,343.65,8.7037,8.7037,0,0,0,50.1,11.1);

	this.gambarQuiz = new lib.an_Image({'id': 'gambarQuiz', 'src':'images/', 'alt':'image', 'border':'0', 'visible':true, 'class':'img'});

	this.gambarQuiz.setTransform(1559.5,422.7,3.9998,3.4998,0,0,0,50.1,50.2);

	this.pilihanDBergambar = new lib.an_Button({'id': 'pilihanDBergambar', 'label':'Pilihan A', 'disabled':false, 'visible':true, 'class':'button'});

	this.pilihanDBergambar.setTransform(1380.65,855.6,6.6323,4.7934,0,0,0,50.1,11.1);

	this.noSoalBergambar = new cjs.Text("1.", "60px 'Cooper Black'", "#0066FF");
	this.noSoalBergambar.name = "noSoalBergambar";
	this.noSoalBergambar.lineHeight = 71;
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

	this.soalQuizBergambar = new cjs.Text("Soal Quiz", "60px 'Cooper Black'", "#0066FF");
	this.soalQuizBergambar.name = "soalQuizBergambar";
	this.soalQuizBergambar.lineHeight = 71;
	this.soalQuizBergambar.lineWidth = 1042;
	this.soalQuizBergambar.parent = this;
	this.soalQuizBergambar.setTransform(222.1,249.15,1.0542,1.0542);

	this.pilihanABergambar = new lib.an_Button({'id': 'pilihanABergambar', 'label':'Pilihan A', 'disabled':false, 'visible':true, 'class':'button'});

	this.pilihanABergambar.setTransform(552.3,732.2,6.6324,4.7934,0,0,0,50.1,11.1);

	this.pilihanBBergambar = new lib.an_Button({'id': 'pilihanBBergambar', 'label':'Pilihan A', 'disabled':false, 'visible':true, 'class':'button'});

	this.pilihanBBergambar.setTransform(552.5,855.6,6.6323,4.7934,0,0,0,50.1,11.1);

	this.pilihanCBergambar = new lib.an_Button({'id': 'pilihanCBergambar', 'label':'Pilihan A', 'disabled':false, 'visible':true, 'class':'button'});

	this.pilihanCBergambar.setTransform(1380.65,732.2,6.6323,4.7934,0,0,0,50.1,11.1);

	this.instance_4 = new lib.LingkaranBiruSplashScreen();
	this.instance_4.setTransform(1848.15,995.35,2.4537,2.4537,0,0,0,0,0.1);

	this.instance_5 = new lib.LingkaranMerahSplashScreen();
	this.instance_5.setTransform(42.25,1032.4,1.54,1.54,0,0,0,0.2,0.1);

	this.instance_6 = new lib.LingkaranBiruSplashScreen();
	this.instance_6.setTransform(1858.95,-18.05,1.5981,1.5981,0,0,0,0,0.1);

	this.instance_7 = new lib.LingkaranMerahSplashScreen();
	this.instance_7.setTransform(116.95,-9.55,2.3027,2.3027,0,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.pilihanCBergambar},{t:this.pilihanBBergambar},{t:this.pilihanABergambar},{t:this.soalQuizBergambar},{t:this.timerSoalBergambar},{t:this.benarBergambar},{t:this.noSoalBergambar},{t:this.pilihanDBergambar},{t:this.gambarQuiz},{t:this.myStyle_1}]},50).to({state:[]},1).wait(2));

	// hasilQuiz
	this.pesan = new cjs.Text("Pesan", "80px 'Cooper Black'", "#FF0000");
	this.pesan.name = "pesan";
	this.pesan.textAlign = "center";
	this.pesan.lineHeight = 94;
	this.pesan.lineWidth = 1389;
	this.pesan.parent = this;
	this.pesan.setTransform(960,476.8);

	this.hasilBenar = new cjs.Text("Benar :", "80px 'Cooper Black'", "#0066FF");
	this.hasilBenar.name = "hasilBenar";
	this.hasilBenar.textAlign = "center";
	this.hasilBenar.lineHeight = 94;
	this.hasilBenar.lineWidth = 996;
	this.hasilBenar.parent = this;
	this.hasilBenar.setTransform(960,341.2);

	this.instance_8 = new lib.komputer();
	this.instance_8.setTransform(92,90,0.3039,0.3039);

	this.instance_9 = new lib.LingkaranMerahSplashScreen();
	this.instance_9.setTransform(1581.4,2.15,1.8937,1.8937,0,0,0,0.2,0.2);

	this.instance_10 = new lib.LingkaranMerahSplashScreen();
	this.instance_10.setTransform(102.9,1027.5,1.8976,1.8976,0,0,0,0.1,0.1);

	this.instance_11 = new lib.LingkaranBiruSplashScreen();
	this.instance_11.setTransform(1601.3,1057.55,1.8976,1.8976);

	this.instance_12 = new lib.CachedBmp_172();
	this.instance_12.setTransform(1016.6,699.25,0.5,0.5);

	this.buttonUlang = new lib.myButton();
	this.buttonUlang.setTransform(1250.35,750.8,1.783,0.989);
	new cjs.ButtonHelper(this.buttonUlang, 0, 1, 2);

	this.instance_13 = new lib.LingkaranBiruSplashScreen();
	this.instance_13.setTransform(80.9,62.3,2.0467,2.0467,0,0,0,0.2,0);

	this.hasilNamaUser = new cjs.Text("Nama User", "80px 'Cooper Black'", "#FFFFFF");
	this.hasilNamaUser.name = "hasilNamaUser";
	this.hasilNamaUser.textAlign = "center";
	this.hasilNamaUser.lineHeight = 94;
	this.hasilNamaUser.lineWidth = 915;
	this.hasilNamaUser.parent = this;
	this.hasilNamaUser.setTransform(960,217.65);

	this.instance_14 = new lib.CachedBmp_208();
	this.instance_14.setTransform(459.45,197.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14},{t:this.hasilNamaUser},{t:this.instance_13},{t:this.buttonUlang},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.hasilBenar},{t:this.pesan}]},51).to({state:[]},1).wait(1));

	// SelamatDatang
	this.myStyle_2 = new lib.an_CSS({'id': 'myStyle_2', 'href':'https://muhammadfattah.github.io/projek-lab-pbk/assets/style.css'});

	this.myStyle_2.setTransform(2457.3,264.85,8.7037,8.7037,0,0,0,50.1,11.1);

	this.instance_15 = new lib.komputer();
	this.instance_15.setTransform(138,130,0.3039,0.3039);

	this.instance_16 = new lib.LingkaranMerahSplashScreen();
	this.instance_16.setTransform(1581.4,2.15,1.8937,1.8937,0,0,0,0.2,0.2);

	this.instance_17 = new lib.LingkaranMerahSplashScreen();
	this.instance_17.setTransform(102.9,1027.5,1.8976,1.8976,0,0,0,0.1,0.1);

	this.instance_18 = new lib.LingkaranBiruSplashScreen();
	this.instance_18.setTransform(1601.3,1057.55,1.8976,1.8976);

	this.instance_19 = new lib.CachedBmp_175();
	this.instance_19.setTransform(1016.6,699.25,0.5,0.5);

	this.buttonMulai = new lib.myButton();
	this.buttonMulai.setTransform(1250.35,750.8,1.783,0.989);
	new cjs.ButtonHelper(this.buttonMulai, 0, 1, 2);

	this.inputNama = new lib.an_TextInput({'id': 'inputNama', 'value':'', 'disabled':false, 'visible':true, 'class':'input-nama'});

	this.inputNama.setTransform(1211.95,540.65,8.2265,5.8494,0,0,0,50.2,11.2);

	this.instance_20 = new lib.CachedBmp_174();
	this.instance_20.setTransform(436.9,475.15,0.5,0.5);

	this.instance_21 = new lib.CachedBmp_173();
	this.instance_21.setTransform(502.5,235.2,0.5,0.5);

	this.instance_22 = new lib.LingkaranBiruSplashScreen();
	this.instance_22.setTransform(80.9,62.3,2.0467,2.0467,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.inputNama},{t:this.buttonMulai},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.myStyle_2}]},48).to({state:[]},1).wait(4));

	// TextYukQuiz
	this.instance_23 = new lib.CachedBmp_176();
	this.instance_23.setTransform(673.2,630.15,0.5,0.5);

	this.instance_24 = new lib.TulisanYukQuiz();
	this.instance_24.setTransform(960.15,540.05,1.5113,1.5113,0,0,0,0.1,0);

	this.instance_25 = new lib.CachedBmp_177();
	this.instance_25.setTransform(673.2,630.15,0.5,0.5);

	this.instance_26 = new lib.CachedBmp_178();
	this.instance_26.setTransform(673.2,630.15,0.5,0.5);

	this.instance_27 = new lib.CachedBmp_179();
	this.instance_27.setTransform(673.2,630.15,0.5,0.5);

	this.instance_28 = new lib.CachedBmp_180();
	this.instance_28.setTransform(673.2,630.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_24},{t:this.instance_23}]}).to({state:[{t:this.instance_24},{t:this.instance_25}]},11).to({state:[{t:this.instance_24},{t:this.instance_26}]},12).to({state:[{t:this.instance_24},{t:this.instance_27}]},12).to({state:[{t:this.instance_24},{t:this.instance_28}]},12).to({state:[]},1).wait(5));

	// LingkaranBiru1
	this.instance_29 = new lib.LingkaranBiruSplashScreen();
	this.instance_29.setTransform(88.2,73.05,2.3516,2.3516,0,0,0,0.4,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).to({regX:-88,regY:-85,scaleX:2.724,scaleY:2.724,x:-119.7,y:-127.25},23).to({regX:0.4,regY:0.1,scaleX:2.3516,scaleY:2.3516,x:88.2,y:73.05},24).to({_off:true},1).wait(5));

	// LingkaranBiru2
	this.instance_30 = new lib.LingkaranBiruSplashScreen();
	this.instance_30.setTransform(2004.4,1172.9,2.3516,2.3516,0,0,0,79.1,77.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).to({scaleX:2.8308,scaleY:2.8308},23).to({scaleX:2.3516,scaleY:2.3516},24).to({_off:true},1).wait(5));

	// LingkaranMerah1
	this.instance_31 = new lib.LingkaranMerahSplashScreen();
	this.instance_31.setTransform(1537.7,1.9,2.2343,2.2343,0,0,0,0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_31).to({regX:-17.2,regY:-117.4,scaleX:1.7659,scaleY:1.7659,x:1498.25,y:-260.35},23).to({regX:0.4,regY:0,scaleX:2.2343,scaleY:2.2343,x:1537.7,y:1.9},24).to({_off:true},1).wait(5));

	// LingkaranMerah2
	this.instance_32 = new lib.LingkaranMerahSplashScreen();
	this.instance_32.setTransform(381.45,1076.95,2.2343,2.2343,0,0,0,0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_32).to({regX:0.5,regY:119.1,scaleX:1.8455,scaleY:1.8455,x:381.65,y:1343.1},23).to({regX:0.4,regY:0,scaleX:2.2343,scaleY:2.2343,x:381.45,y:1076.95},24).to({_off:true},1).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2896,1599);
// library properties:
lib.properties = {
	id: '7BB8701EF4292944BDD54EB970A9BA5E',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_173.png?1623482477352", id:"CachedBmp_173"},
		{src:"images/Projek Lab PBK_atlas_.png?1623482477217", id:"Projek Lab PBK_atlas_"},
		{src:"images/Projek Lab PBK_atlas_2.png?1623482477217", id:"Projek Lab PBK_atlas_2"},
		{src:"images/Projek Lab PBK_atlas_3.png?1623482477219", id:"Projek Lab PBK_atlas_3"},
		{src:"images/Projek Lab PBK_atlas_4.png?1623482477235", id:"Projek Lab PBK_atlas_4"},
		{src:"sounds/buttonClickSound.mp3?1623482477352", id:"buttonClickSound"},
		{src:"sounds/correctSound.mp3?1623482477352", id:"correctSound"},
		{src:"sounds/errorSound.mp3?1623482477352", id:"errorSound"},
		{src:"sounds/soundTrack.mp3?1623482477352", id:"soundTrack"},
		{src:"sounds/timerSound.mp3?1623482477352", id:"timerSound"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1623482477352", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1623482477352", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js?1623482477352", id:"an.TextInput"},
		{src:"components/ui/src/image.js?1623482477352", id:"an.Image"},
		{src:"components/ui/src/css.js?1623482477352", id:"an.CSS"},
		{src:"components/ui/src/button.js?1623482477352", id:"an.Button"}
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