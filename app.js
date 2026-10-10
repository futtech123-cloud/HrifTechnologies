document.querySelectorAll(".yr").forEach(function(e){e.textContent=new Date().getFullYear()});
// guide search
var q=document.getElementById("q");
if(q){var gs=document.querySelectorAll(".g"),cnt=document.getElementById("count"),none=document.getElementById("none");
q.addEventListener("input",function(){var t=q.value.trim().toLowerCase(),n=0;
gs.forEach(function(g){var hit=!t||g.textContent.toLowerCase().indexOf(t)>-1;g.hidden=!hit;if(hit)n++});
cnt.textContent=n+" of "+gs.length+" guides";none.hidden=n>0})}
// order form
var f=document.getElementById("f");
if(f){var msg=document.getElementById("msg"),WA="233245688354",EM="futtech123@gmail.com";
function toggleSoft(){document.getElementById("softs").style.opacity=f.svc.value==="Software installation"?1:.45}
var want=new URLSearchParams(location.search).get("svc");
if(want){f.querySelectorAll("input[name=svc]").forEach(function(r){if(r.value===want)r.checked=true})}
var pcv=new URLSearchParams(location.search).get("pc");if(pcv&&f.pc)f.pc.value=pcv;
f.addEventListener("change",toggleSoft);toggleSoft();
function build(){var d=new FormData(f),n=(d.get("name")||"").trim(),p=(d.get("phone")||"").trim();
if(!n||!p){msg.textContent="Enter your name and phone number so we can reach you.";return null}
var sw=d.getAll("sw"),l=["Hello Hrif Technologies, I would like to order:","Service: "+d.get("svc")];
if(d.get("svc")==="Software installation"&&sw.length)l.push("Software: "+sw.join(", "));
if(d.get("pc"))l.push("Device: "+d.get("pc"));if(d.get("loc"))l.push("Location: "+d.get("loc"));if(d.get("issue"))l.push("Problem: "+d.get("issue"));
l.push("Name: "+n,"Phone: "+p);return{text:l.join("\n"),svc:d.get("svc")}}
f.addEventListener("submit",function(e){e.preventDefault();var o=build();if(!o)return;msg.textContent="Opening WhatsApp with your order.";window.open("https://wa.me/"+WA+"?text="+encodeURIComponent(o.text),"_blank","noopener")});
document.getElementById("em").addEventListener("click",function(){var o=build();if(!o)return;msg.textContent="Opening your email app with the order.";location.href="mailto:"+EM+"?subject="+encodeURIComponent("Order: "+o.svc)+"&body="+encodeURIComponent(o.text)})}

// laptop filter
var chips=document.querySelectorAll("[data-f]");
if(chips.length){var laps=document.querySelectorAll(".lap");chips.forEach(function(b){b.addEventListener("click",function(){var k=b.getAttribute("data-f");chips.forEach(function(x){x.setAttribute("aria-pressed",x===b?"true":"false")});laps.forEach(function(l){l.hidden=!(k==="all"||l.getAttribute("data-tags").split(" ").indexOf(k)>-1)})})})}
