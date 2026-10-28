# Contributing

Thanks for helping grow this list! 🙌

## Rules
1. **Free or open-source only.** No freemium, no free trials, no paid tiers. If something is free forever but closed-source, tag it `free (proprietary)`.
2. **Useful to electronics learners or builders:** tools, simulators, calculators, blogs, courses, YouTube channels, free assets or PBL projects.
3. **No duplicates.** Search `data/all_resources.csv` first.
4. **The link must work.** Use the official page or repo.

## How to add a resource
1. Add a row to the right file in `data/categories/` (header: `website,name,tags,description`).
   - `tags`: semicolon-separated, domain first, then type. Example: `embedded; rtos; tool; open-source`
   - `description`: one short sentence.
2. Run `python scripts/build_readme.py` to regenerate `README.md`.
3. Open a pull request with a one-line note on why it's useful.
