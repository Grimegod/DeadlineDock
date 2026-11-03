'use strict';
const example=document.querySelector('[data-escalation-demo]');
if(example){
 let day=1,critical=false;
 const ro=document.documentElement.lang==='ro';
 function draw(){
  example.querySelectorAll('[data-day]').forEach(button=>button.setAttribute('aria-pressed',String(Number(button.dataset.day)===day)));
  example.querySelector('[data-critical]').setAttribute('aria-pressed',String(critical));
  example.querySelectorAll('[data-threshold]').forEach(row=>{const active=critical||day>=Number(row.dataset.threshold);row.classList.toggle('notified',active);row.querySelector('[data-state]').textContent=active?(ro?'Notificat':'Notified'):(ro?'În așteptare':'Waiting');});
  example.querySelector('[data-explanation]').textContent=critical?(ro?'Prioritate critică: din prima zi de întârziere sunt anunțați șefii și înlocuitorii alocați la toate nivelurile autorizate.':'Critical priority: from the first overdue day, assigned supervisors and deputies at every authorised level are notified.'):(ro?{1:'Ziua 1: responsabilul primește alerta obișnuită. Șeful direct al unității primește prima escaladare.',3:'Ziua 3: cazul nerezolvat ajunge și la șeful structurii superioare. Confirmarea citirii rămâne separată de rezolvare.',5:'Ziua 5: conducerea de la nivelul următor primește escaladarea, împreună cu termenul, responsabilul și contextul înregistrat.'}[day]:{1:'Day 1: the responsible person receives the ordinary reminder. The unit supervisor receives the first escalation.',3:'Day 3: the unresolved case also reaches the parent department. Acknowledgement remains separate from resolution.',5:'Day 5: the next leadership level receives the escalation, with the due date, responsible person and recorded context.'}[day]);
 }
 example.querySelectorAll('[data-day]').forEach(button=>button.addEventListener('click',()=>{day=Number(button.dataset.day);draw();}));
 example.querySelector('[data-critical]').addEventListener('click',()=>{critical=!critical;draw();});draw();
}
