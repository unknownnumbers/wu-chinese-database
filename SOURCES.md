# Sources and versions

## Analytical rules

The component rules are this project's analytical rule definitions, revision 2026-09-10. Their phonetic reference context is the [Wu Chinese Society / 吳語學堂 website](https://www.wugniu.com/). This publication is independent and does not imply endorsement by that website.

`rules/component-rules.json` retains each rule family, condition tuple and output value from that revision. Evidence identifiers and record counts are omitted. No output is selected by majority vote, and conflicting conditions are retained. `rules/citation-tones.json` records the same revision's fixed local citation-tone constraints.

The explanatory rulebook is an original reorganization of the project's analysis. The common/difference tables retain rule correspondences and conditions. Regional documents are generated directly from the public component rules. Website records, dictionary entries, recordings, copied site notes and other upstream works are not included. The project licenses cover its original configuration and explanatory expression; no license for a referenced upstream collection is asserted.

## Components and build tools

| Component | Version | Role | License scope |
| --- | --- | --- | --- |
| Component rule definitions | 2026-09-10 | Published declarative input | GPL-3.0-only, original configuration |
| Citation-tone constraints | 2026-09-10 | Published declarative input | GPL-3.0-only, original configuration |
| Rulebook and documentation | v0.1.0 | Reading and interpretation | CC BY-SA 4.0, original text |
| Documentation/check tool | v0.1.0 | Static checks and deterministic regional tables | GPL-3.0-only |
| [Node.js](https://nodejs.org/en/download) | 24.22.1 | External build runtime, standard library only | Not bundled; see Node.js distribution notices |

There are no bundled libraries, development packages, installers or compiled runtime binaries. The supplied source inputs and documentation generator are sufficient to reproduce the generated tables and integrity manifests offline. They do not reconstruct source collection, pronunciation parsing or historical corpus evaluation.

## License notice sources

| File | Source | Transformation |
| --- | --- | --- |
| LICENSES/GPL-3.0-only.txt | [SPDX license-list-data, GPL-3.0-only](https://github.com/spdx/license-list-data/blob/main/text/GPL-3.0-only.txt) | None; exact downloaded bytes |
| LICENSES/CC-BY-SA-4.0.txt | [Creative Commons official legal code](https://creativecommons.org/licenses/by-sa/4.0/legalcode.txt) | None; exact downloaded bytes |

The per-file index pins the delivered notice bytes. References to the license repositories identify their provenance; they are not software dependencies.
