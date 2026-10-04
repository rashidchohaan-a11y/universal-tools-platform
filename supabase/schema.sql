-- UtilityHub core database schema

create extension if not exists "pgcrypto";

create table if not exists public.users (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  full_name text,
  created_at timestamptz not null default now()
);

create table if not exists public.user_calculator_history (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.users(id) on delete cascade,
  calculator_slug text not null,
  calculator_name text not null,
  result_json jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  summary text,
  body text,
  category text,
  created_at timestamptz not null default now()
);

create table if not exists public.saved_templates (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.users(id) on delete cascade,
  template_type text not null,
  template_data jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists idx_user_calculator_history_user_id
  on public.user_calculator_history(user_id);

create index if not exists idx_blog_posts_slug
  on public.blog_posts(slug);
