# Declarative Rulebook for IPA and Wupin

[English (en)](rulebook.en.md) | [Traditional Chinese (zh-TC)](rulebook.md) | [Simplified Chinese (zh-SC)](rulebook.zh-SC.md)

For spelling explanations, local highlights and worked component examples, start with the [human-readable pronunciation guide](common-and-differences.en.md). This document then explains the data format and exact selection order.

This release provides IPA and Wupin component rules, citation-tone correspondences and reading notes for eight local data points, distinguishing older and newer varieties where applicable. The object of conversion is the phonetic structure of a specified variety. Headwords, meanings and Mandarin pronunciations do not participate in rule selection.

This repository provides declarative data and a rulebook. This release does not provide a standalone IPA parser or bidirectional converter, or an attested syllable inventory. The descriptions below explain the data and rule selection. They do not mean that the repository already implements these operations.

## Data entry points

- [Component rules](../rules/component-rules.json): Conditions for onsets, finals, onset environments and tones.
- [Citation-tone table](../rules/citation-tones.json): Wupin tone suffixes and citation-tone pitch values for each data point.
- [Common features and differences](common-and-differences.en.md): A reading summary of common onsets, citation tones and local finals.

The component rules retain all conditions and their possible outputs. When a condition has multiple outputs, the data retain that conflict rather than selecting an answer by frequency. The reading summary is a selected and consolidated view of effective conditions. It is neither a row-by-row expansion of all rules nor a substitute for the rule-selection order.

## Fixed variety IDs

| Variety ID | Name |
| --- | --- |
| `kunshan_lao` | Kunshan (older variety) |
| `suzhou_zi` | Suzhou |
| `shanghai_laopai` | Shanghai (older variety) |
| `shanghai` | Shanghai |
| `jiaxing` | Jiaxing |
| `wuxi_zi` | Wuxi |
| `kunshan_xinpai_zi` | Kunshan (newer variety) |
| `changshu` | Changshu |

These IDs identify rule data points. Older and newer varieties remain separate. Identical spellings do not authorize sharing the rules of another data point. The IDs themselves do not establish a genealogical classification of Wu Chinese branches.

## Rule records and condition fields

Each component rule is expressed through `family`, `condition` and `outputs`. `condition` is an array with a fixed positional order. Within `outputs`, each `value` is a distinct possible output. The onset and final families output Wupin components. The `tone` family outputs a Wupin tone suffix.

In the following table, `table_id` denotes the variety ID and `register` denotes the classification label used in the data. They are the first two items in every condition.

| family | Positional order of condition | Meaning of the output |
| --- | --- | --- |
| `onset` | `[table_id, register, onset]` | Wupin onset |
| `onset_final` | `[table_id, register, onset, final]` | Wupin onset before a specified final |
| `final` | `[table_id, register, final]` | Wupin final |
| `final_environment` | `[table_id, register, final, environment]` | Wupin final in a specified onset environment |
| `final_onset` | `[table_id, register, final, onset]` | Wupin final after a specified IPA onset |
| `tone` | `[table_id, register, pitch, checked, voicing, phonation]` | Wupin tone suffix |

The strings in the `onset` and `final` conditions are decomposed IPA components, not Chinese characters or complete dictionary entries. `pitch` is a pitch-value string such as `"44"`. It is separate from a Wupin suffix such as `"1"`, which identifies a tone category.

The current `register` labels are `default` and `ordinary`. They form part of the conditions. They are not automatically inferred yin/yang tone categories, literary/colloquial strata or speaker ages. An implementation must explicitly map its input to these classifications. It must not fill in an arbitrary label when the classification is unresolved.

In the declarations in this release, Suzhou conditions use `ordinary` and the other seven data points use `default`. This distribution of labels does not mean that any unparsed syllable can be classified automatically.

The onset `environment` has the following three values.

| Value | Condition |
| --- | --- |
| `zero` | The IPA onset is an empty string |
| `breathy_h` | The IPA onset is exactly `ɦ` |
| `consonant` | Any other nonempty onset |

`checked` is a JSON boolean indicating whether the structure is checked, or entering-tone. The current values of `voicing` are `sonorant`, `voiced_obstruent`, `voiceless_obstruent` and `zero`. The current value of `phonation` is `modal_or_unmarked`. These labels require explicit parsing and classification procedures. The data in this release do not include that parser.

## Empty values and unresolved cases

An empty string `""` in the onset position represents a zero onset. An empty string can also be a valid onset output. It must not be treated as the absence of a rule. Reading tables use `∅` as a display aid. JSON comparisons still use the actual string.

A missing rule, a missing condition field, a parsing failure and a valid empty string are different cases. An absent pitch value must not be filled in as a zero tone or an arbitrary tone suffix. This release does not include individual unmarked-tone pairs. The historical preservation of unmarked usages is not grounds for claiming that this repository can reconstruct them.

## Forward rule selection

The following selection procedure corresponds to the data and is intended for a separate implementation. Every step must use complete conditions from the same variety and classification.

1. Explicitly decompose the IPA onset, final, citation-tone pitch value, checked property, voicing category and phonation. Stop and retain an unresolved result if these required features cannot be established.
2. For the onset, query `onset` first. Query `onset_final` if there is no unique output.
3. For the final, query `final` first, then `final_environment` as needed, and finally `final_onset`. The y/w restriction in the next section also causes the general level to be skipped in favor of the environment level.
4. For tone, query only `tone` with the complete condition. Do not supply a tone from an onset letter or another variety.
5. Concatenate the Wupin onset, final and tone suffix only after every component has a unique valid output. Then check the spelling structure and citation-tone correspondence.

At any level, a set containing exactly one distinct output value is unique. No values means that the level has no coverage. More than one means that the level has a conflict. Conditions may be narrowed in the order above. If the result is still not unique at the end, it must remain unresolved. Do not select the majority, the first value or the most frequent spelling.

Once a unique general rule applies, do not add all outputs of subsequent, more specific conditions to the candidates. The complete `rulebook` declarations may contain both a conflict at a general level and a unique result at a narrower level. Taking the union of every matching row is not equivalent to selecting rules in order.

## The y/w onset-environment restriction

Wupin spellings with y/w may depend on the combined onset and final environment. A final spelled with y/w in one context does not authorize transferring that spelling to a different type of onset environment.

Even when the general `final` level has a unique output, that general result must be skipped if it starts with `y` or `w`. Continue with `final_environment` for the same input, and then `final_onset` if necessary. Only a unique result at the environment or specified-onset level may be used. If no corresponding unique condition can be found, retain an unresolved result.

This restriction does not mean that every `y` or `w` necessarily represents `ɦ`, or that y/w should be added whenever the onset is zero. Both the final's own spelling and its onset environment must be handled according to the conditions. `ɦ` may also yield `gh` or an empty onset. It must not be deleted globally or uniformly rewritten as `gh`.

## Citation-tone constraints

The [citation-tone table](../rules/citation-tones.json) maps Wupin tone suffixes to the fixed citation-tone pitch values of each data point. A tone suffix is a category number, not a five-level pitch value. Jiaxing `3b` is a complete suffix. The `b` must not be removed, and the suffix must not be merged into `3`.

Both the component tone rules and the citation-tone table must be satisfied. When a complete tone suffix and pitch value are present, check whether the suffix exists and its pitch value agrees. If only one side has a pitch value or tone suffix, the suffix is absent from the local table, or the two sides disagree, report an unresolved result or conflict. Do not automatically correct the original input.

The association of voiceless obstruents with yin tones and voiced obstruents with yang tones can assist inspection, but it cannot by itself determine the level, rising, departing or entering category. Sonorants also cannot be assigned solely by odd or even tone numbers. The checked, voicing and phonation conditions explicitly listed in the rules must still be matched individually.

The checked property must agree with the onset/final structure and spelling. Identical pitch-value digits do not permit interchanging checked and nonchecked conditions.

This citation-tone table covers single-character citation tones. It does not apply to connected-speech tone sandhi, reduced readings, contracted forms or arbitrary multi-character words. Do not infer the pitch of one variety from another variety's tone suffix, or create unspecified tone categories from a reverse correspondence.

## Notation and parsing boundaries

IPA components are distinguished by their declared strings. Do not globally conflate `a` with `ɑ`, `ã` with `ɑ̃`, `iə` with `ə`, `i` with `iⱼ`, or `y` with `yⱼ`. `ɸ` and `f`, and `β` and `v`, must not be treated merely as glyph aliases. Subscripts, aspiration marks and syllabicity marks may all participate in identification.

In the machine-readable data in this release, the voiced velar stop onset key uses the ordinary character `g`. The reading tables display the IPA glyph `ɡ`. This is a distinction between a data key and display notation. This release does not include an execution layer that accepts and automatically normalizes both inputs. Do not use the display glyph directly as the machine key.

Converting between superscript and ordinary digits must be kept separate from parsing pitch values. Character normalization is not phonological merger. A separate implementation must document its accepted symbols, segmentation and classification procedures. This repository must not be treated as a complete parsing specification that already includes those steps.

## Reverse candidates and attested forms

A reverse design can invert onset, final and tone components, enumerate combinations within the same variety and classification, and validate them using the complete forward conditions. Only a combination whose forward validation returns exactly the original Wupin may be retained as a rule-composable candidate.

Being composable from components, passing forward validation and having an actual recorded reading are three separate properties. A result can be called `attested` only after a separately obtained inventory with clear permissions and traceable sources is used to filter by variety and the complete IPA/Wupin pair. A single remaining candidate is not evidence of attestation.

This release provides neither that inventory nor a reverse execution layer. The repository therefore cannot independently provide attested-syllable filtering, character-by-character pronunciation lookup or confirmation of actual readings. Unattested combinations can only be rule-based candidates for further investigation.

## Capabilities and validation scope of this release

This release consists of readable, machine-readable declarative rule data and original explanatory documentation. The selection order described in this rulebook is an implementation requirement. It does not mean that a conversion program has been released.

This release has not rerun the historical corpus regressions or reverified every reading on the original website. Any JSON structure, file-integrity or data-consistency checks performed for this release do not establish that all unknown syllables are derivable, all reverse candidates are attested, or all phonetic values have been independently demonstrated.

A complete parser, an executable converter, an attested inventory with clear permissions and public-corpus regression testing all require separate work. They are not included in the existing capabilities of this release.

## License

The original organization and explanations in this document are licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). This license does not grant new permissions for third-party data, quotations or other sources. The provenance and licensing boundaries of the rule data are described in the project's itemized source index.
