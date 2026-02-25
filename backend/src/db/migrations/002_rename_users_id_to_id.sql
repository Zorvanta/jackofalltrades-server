BEGIN;
-- Drop FK constraint that depends on users.user_id
ALTER TABLE user_skills
DROP CONSTRAINT user_skills_user_id_fkey;
--Rename primary key column
ALTER TABLE users
RENAME COLUMN users_id TO id;
--Recreate FK constraint referencing new column
ALTER TABLE user_skills
ADD CONSTRAINT user_skills_user_id_fkey
FOREIGN KEY (user_id) REFERENCES users(id);

COMMIT;
