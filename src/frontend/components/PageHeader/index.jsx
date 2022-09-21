import { Logo } from "../icons/Logo";

export function PageHeader(props) {
  return (
    <header class="relative flex items-center justify-center p-10 text-2xl font-bold bg-black gap-4 text-slate-100">
      <Logo class="w-8 fill-slate-100" />
      Zone Control
    </header>
  );
}
