"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { usePathname } from "next/navigation";
import styles from "./site-chat.module.css";
type Message = {role:"user"|"assistant";text:string};
const chatAvailable = Boolean(process.env.NEXT_PUBLIC_LURI_CHAT_URL);

export function SiteChat(){
 const pathname=usePathname();
 const isSite=pathname==="/site"||pathname.startsWith("/site/");
 const contactName=isSite?"Kalivur Site":"Kalivur";
 const whatsapp=`https://wa.me/${isSite?"51912896722":"51932996303"}?text=${encodeURIComponent(`Hola, quiero consultar por los servicios de ${contactName}.`)}`;
 const [open,setOpen]=useState(false); const [text,setText]=useState(""); const [busy,setBusy]=useState(false); const [error,setError]=useState("");
 const [messages,setMessages]=useState<Message[]>([{role:"assistant",text:chatAvailable ? "Hola, soy Luri, la asistente digital de Kalivur. ¿Qué te gustaría conocer de nuestros servicios?" : "Hola, soy Luri. Mi chat estará disponible próximamente. Mientras tanto, el equipo de Kalivur puede ayudarte por WhatsApp."}]);
 const input=useRef<HTMLInputElement>(null); const list=useRef<HTMLDivElement>(null); const trigger=useRef<HTMLButtonElement>(null); const lock=useRef(false); const abort=useRef<AbortController>();
 useEffect(()=>{const show=()=>setOpen(true);window.addEventListener("kalivur:open-chat",show);return()=>{window.removeEventListener("kalivur:open-chat",show);abort.current?.abort();};},[]);
 useEffect(()=>{if(open) input.current?.focus();},[open]);
 useEffect(()=>{if(open&&list.current)list.current.scrollTop=list.current.scrollHeight;},[messages,busy,open]);
 function close(){setOpen(false);trigger.current?.focus();}
 async function send(event:FormEvent){event.preventDefault();const value=text.trim();if(!value||lock.current)return;
  const endpoint=process.env.NEXT_PUBLIC_LURI_CHAT_URL;
  if(!endpoint){setError("El chat todavía está en preparación. Puedes hablar con el equipo por WhatsApp.");return;}
  lock.current=true;setBusy(true);setError("");const controller=new AbortController();abort.current=controller;const timeout=setTimeout(()=>controller.abort(),25000);
  try {const response=await fetch(endpoint,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:value}),signal:controller.signal,credentials:"omit"});
   if(!response.ok)throw new Error(response.status===429?"Estamos recibiendo muchas consultas. Espera un momento y vuelve a intentarlo.":"No pudimos conectar con Luri. Intenta nuevamente o escríbenos por WhatsApp.");
   const data:unknown=await response.json();if(!data||typeof data!=="object"||!("reply" in data)||typeof data.reply!=="string"||!data.reply.trim())throw new Error("Luri no pudo responder. Vuelve a intentarlo.");
   setMessages(previous=>[...previous.slice(-38),{role:"user",text:value},{role:"assistant",text:data.reply as string}]);setText("");
  }catch(err){setError(controller.signal.aborted?"La respuesta está tardando más de lo esperado. Vuelve a intentarlo.":err instanceof Error?err.message:"No pudimos conectar con Luri.");}
  finally{clearTimeout(timeout);lock.current=false;setBusy(false);input.current?.focus();}
 }
 return <><div className={styles.launchers}><a className={styles.whatsapp} href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label={`Hablar con ${contactName} por WhatsApp`}><MessageCircle size={22}/><span>WhatsApp</span></a><button ref={trigger} className={styles.launcher} onClick={()=>open?close():setOpen(true)} aria-expanded={open} aria-controls="luri-chat"><MessageCircle size={22}/><span>Habla con Luri</span></button></div>{open&&<section id="luri-chat" role="dialog" aria-labelledby="luri-title" className={styles.panel} onKeyDown={e=>{if(e.key==="Escape")close();}}><header><div><strong id="luri-title">Luri</strong><span>Asistente digital de Kalivur</span></div><button onClick={close} aria-label="Cerrar chat"><X size={22}/></button></header><div className={styles.messages} ref={list} role="log" aria-live="polite" aria-label="Conversación con Luri">{messages.map((message,index)=><div key={index} className={message.role==="user"?styles.user:styles.assistant}><span>{message.role==="user"?"Tú":"Luri"}</span><p>{message.text}</p></div>)}{busy&&<p role="status">Consultando a Luri…</p>}</div>{error&&<div className={styles.error} role="alert">{error}<a href={whatsapp} target="_blank" rel="noopener noreferrer">Contactar por WhatsApp</a></div>}<form onSubmit={send}><label className="sr-only" htmlFor="luri-message">Tu mensaje para Luri</label><input id="luri-message" ref={input} value={text} onChange={e=>setText(e.target.value)} maxLength={1500} placeholder="Escribe tu consulta…" autoComplete="off" disabled={!chatAvailable} readOnly={busy}/><button type="submit" disabled={!chatAvailable||busy||!text.trim()} aria-label="Enviar mensaje"><Send size={20}/></button></form><p className={styles.note}>Evita compartir datos sensibles. Para atención personal, usa WhatsApp.</p></section>}</>;
}

