function get(selec) {
	return document.querySelector(selec);
}

let tempoGiro,gradoGiro=0,frame=get(".frame");
const reloj=get(".pomodoro");
const bola=get(".tuki");
const formulario=get(".formulario");
const btnCancelar=get("#btn-cancel");

const tareas=get(".tareas__lista");
const formNombre=get(".nombre");
const formTiempo=get(".tiempo");



let cantTareas=0;

btnCancelar.addEventListener("click",()=>{
	formulario.reset();
})

formulario.addEventListener("submit",(e)=>{
	e.preventDefault();
	if (cantTareas< 3) {
		vectorSegundos[cantTareas]=formTiempo.value;
		cantTareas++;
		tareas.innerHTML=`${tareas.innerHTML}<li class="tareas__item">
					<p class="tareas__tarea">${formNombre.value.toUpperCase()}</p>
					<button class="tarea-btn play-stop"><span class="material-symbols-outlined">play_arrow</span></button>
					<button class="tarea-btn remove"><span class="material-symbols-outlined">close</span></button>	
				</li>`;
		formulario.reset();

	}else alert("Se excedió en la cantidad de tareas");
});


document.addEventListener("click",(e)=>{
	if (e.target.matches(".play-stop .material-symbols-outlined"))
		{console.log(e.path[2]);}
	if (e.target.matches(".remove .material-symbols-outlined")){
		if (confirm("¿Eliminar?")){
			e.path[3].removeChild(e.path[2]);
			cantTareas--;
		}
	}
});


function temporizador(segundos){

tempoGiro= setInterval(()=>{
	gradoGiro++;
	if (gradoGiro==360) clearInterval(tempoGiro);
	reloj.style.setProperty('transform', `rotate(${gradoGiro}deg)`);
} ,Math.floor( 4000/360));


}