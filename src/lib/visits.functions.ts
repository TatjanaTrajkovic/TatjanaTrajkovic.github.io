import { createServerFn } from "@tanstack/react-start";

// Registrerar ett sidbesök. Körs från webbläsaren men skrivs bara av serverkoden.
export const logVisit = createServerFn({ method: "POST" }).handler(async () => {
  // Hoppa över mätning i förhandsgranskningen (dev-servern) så egna öppningar inte räknas.
  if (import.meta.env.DEV) return { ok: true, skipped: true };

  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { error } = await supabaseAdmin.from("page_visits").insert({});
  if (error) {
    console.error("logVisit failed:", error.message);
    return { ok: false };
  }
  return { ok: true };
});

// Läser antalet registrerade besök (används på statistiksidan).
export const getVisitCount = createServerFn({ method: "GET" }).handler(async () => {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { count, error } = await supabaseAdmin
    .from("page_visits")
    .select("*", { count: "exact", head: true });
  if (error) {
    console.error("getVisitCount failed:", error.message);
    return 0;
  }
  return count ?? 0;
});
