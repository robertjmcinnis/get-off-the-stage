var audio = new Audio('./music/exit-music.mp3');
var form = document.getElementById('formId');
var countdown;

function processFormData() {
	var time = document.getElementById('time').value;
	time = time * 1000;
	countdown = time / 1000;
	console.log(time);

	setInterval(function(){
		console.log(countdown);
		countdown--;
		document.getElementById('time').value = countdown;

	}, 1000);


	setTimeout(function(){
		console.log("playing");
		playMusicStart();
		messages()
		document.body.className = "gradientAnimate";
	}, time);
}

function messages() {
	setTimeout(function(){
		document.getElementById('messages').innerHTML = "Time to wrap it up."

	}, 2000 );
	setTimeout(function(){
		document.getElementById('messages').innerHTML = "<h3>Seriously, thank Mom before it's too late.</h3>"

	}, 6000 );
	setTimeout(function(){
		document.getElementById('messages').innerHTML = "<h2>Volume is at 90%, wrap it up.</h2>"

	}, 10000 );
	setTimeout(function(){
		document.getElementById('messages').innerHTML = "<h1>Get the fuck off the stage!</h1>"

	}, 13000 );

}

function pauseMusic() {
	audio.pause();
}

function playMusic() {
	audio.play();
}

function playMusicStart() {
	audio.load();
	audio.play();
}


