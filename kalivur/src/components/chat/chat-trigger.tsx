"use client";
import { MessageCircle } from "lucide-react";
export function ChatTrigger(){return <button className="button" onClick={()=>window.dispatchEvent(new Event("kalivur:open-chat"))}><MessageCircle size={18}/>Hablar con Luri</button>}
