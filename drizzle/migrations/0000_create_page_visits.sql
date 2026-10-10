-- Besöksloggen för CV-sidan. Skrivs till bara av serverkoden (service-rollen);
-- inga RLS-policies betyder att webbläsare varken kan läsa eller skriva tabellen.
CREATE TABLE public.page_visits (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT ALL ON public.page_visits TO service_role;

ALTER TABLE public.page_visits ENABLE ROW LEVEL SECURITY;
