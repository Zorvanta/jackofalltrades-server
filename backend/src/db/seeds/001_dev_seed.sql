BEGIN;

--USERS (insert username, insert created_at)
INSERT INTO users (username, created_at, email, password_hash)
VALUES
  ('Austin', NOW(), 'test@test.com', 'test')
ON CONFLICT DO NOTHING;

--SKILLS (name)
INSERT INTO skills (name)
VALUES
  ('JavaScript'),
  ('Chess'),
  ('Bedwars')
ON CONFLICT DO NOTHING;

-- USER_SKILLS (explicit columns)
INSERT INTO user_skills (user_id, skill_id)
SELECT u.id, s.id
FROM users u
JOIN skills s ON s.name = 'JavaScript'
WHERE u.username IN ('Austin', 'David')
ON CONFLICT DO NOTHING;

INSERT INTO user_skills (user_id, skill_id)
SELECT u.id, s.id
FROM users u
JOIN skills s ON s.name = 'Bedwars'
WHERE u.username = 'Keeanu'
ON CONFLICT DO NOTHING;

COMMIT;
