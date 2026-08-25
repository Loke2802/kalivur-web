import { CalendarDays, CheckCircle2, MessageSquareText, UserRoundCheck } from "lucide-react";

export function HeroVisual() {
  return (
    <div className="relative mx-auto min-h-[470px] w-full max-w-[560px]" aria-label="Vista conceptual de conversación y panel operativo">
      <div className="grid-fade absolute inset-0 rounded-[2rem]" aria-hidden="true" />
      <div className="card absolute left-0 top-8 w-[76%] overflow-hidden p-4 sm:p-5">
        <div className="flex items-center justify-between border-b border-[var(--line)] pb-3"><div className="flex items-center gap-2 text-sm font-semibold"><span className="grid h-8 w-8 place-items-center rounded-full bg-[#e8f7ef] text-[var(--success)]"><MessageSquareText size={16}/></span>Asistente Kalivur</div><span className="text-xs text-[var(--muted)]">En línea</span></div>
        <div className="mt-5 space-y-3 text-sm leading-5"><div className="max-w-[86%] rounded-2xl rounded-tl-md bg-[#f1f1ed] p-3">Hola, quisiera agendar una cita para esta semana.</div><div className="ml-auto max-w-[90%] rounded-2xl rounded-tr-md bg-[var(--accent)] p-3 text-white">Claro. Puedo ayudarte a revisar disponibilidad. ¿Qué día te acomoda mejor?</div><div className="max-w-[70%] rounded-2xl rounded-tl-md bg-[#f1f1ed] p-3">El jueves por la tarde.</div></div>
      </div>
      <div className="card absolute bottom-4 right-0 w-[72%] p-4 sm:p-5">
        <div className="mb-4 flex items-center justify-between"><div><p className="text-xs text-[var(--muted)]">Operación</p><p className="font-semibold">Panel de actividad</p></div><span className="rounded-full bg-[var(--accent-soft)] px-2.5 py-1 text-xs font-medium text-[var(--accent)]">Datos de muestra</span></div>
        <div className="grid grid-cols-2 gap-2 text-xs"><Metric icon={<MessageSquareText size={15}/>} label="Conversaciones" value="Activas"/><Metric icon={<UserRoundCheck size={15}/>} label="Derivaciones" value="Pendientes"/><Metric icon={<CalendarDays size={15}/>} label="Citas" value="En agenda"/><Metric icon={<CheckCircle2 size={15}/>} label="Estado" value="Operativo"/></div>
      </div>
    </div>
  );
}
function Metric({icon,label,value}:{icon:React.ReactNode;label:string;value:string}) { return <div className="rounded-xl border border-[var(--line)] bg-[#fafaf7] p-3"><div className="mb-2 text-[var(--accent)]">{icon}</div><div className="text-[var(--muted)]">{label}</div><div className="mt-1 font-semibold text-black">{value}</div></div>; }
