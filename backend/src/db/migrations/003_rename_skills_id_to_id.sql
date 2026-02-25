BEGIN;
--Drop fk constraint that depends on skills.skills_id
ALTER TABLE user_skills
DROP CONSTRAINT user_skills_skill_id_fkey;

--Rename primary key column 
ALTER TABLE skills
RENAME COLUMN skills_id TO id;

--Recreate FK constraint referencing new column
ALTER TABLE user_skills
ADD CONSTRAINT user_skills_skill_id_fkey
FOREIGN KEY (skill_id) REFERENCES skills(id);

COMMIT;
