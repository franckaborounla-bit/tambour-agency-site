-- =========================================================
-- TAMBOUR AGENCY : schema.sql
-- Base de données Cloudflare D1 pour l'outil de badges
-- (comptes créateurs, campagnes, compteur de générations,
-- sessions de connexion).
--
-- À exécuter une seule fois, après avoir créé la base D1
-- (voir CLOUDFLARE-BADGES-SETUP.md pour la marche à suivre).
-- =========================================================

CREATE TABLE IF NOT EXISTS creators (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  password_hash TEXT NOT NULL,
  password_salt TEXT NOT NULL,
  created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS campaigns (
  id TEXT PRIMARY KEY,
  creator_id TEXT NOT NULL REFERENCES creators(id),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  frame_key TEXT NOT NULL,
  created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS generations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  campaign_id TEXT NOT NULL REFERENCES campaigns(id),
  created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS sessions (
  token TEXT PRIMARY KEY,
  creator_id TEXT NOT NULL REFERENCES creators(id),
  created_at TEXT NOT NULL,
  expires_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_campaigns_creator ON campaigns(creator_id);
CREATE INDEX IF NOT EXISTS idx_generations_campaign ON generations(campaign_id);
CREATE INDEX IF NOT EXISTS idx_sessions_creator ON sessions(creator_id);
