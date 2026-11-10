# Reading Guide to IPA and Wupin: Common Features and Differences

[English (en)](common-and-differences.en.md) | [Traditional Chinese (zh-TC)](common-and-differences.md) | [Simplified Chinese (zh-SC)](common-and-differences.zh-SC.md)

These tables summarize common onsets, single-character citation tones, and the basic finals and necessary branches of each data point. They list rule correspondences only, without individual character records or evidence of attested syllables.

This is a reading guide for people learning to interpret the spellings. First understand the separate roles of spelling, phonetic notation and tone suffixes, then read the common onsets, local finals and conditional spellings, and finally practice consulting the tables through the demonstrations. For the data fields and the exact order of rule selection, read the [declarative rulebook](rulebook.en.md). The eight complete condition tables are linked from the [regional index](regions.en.md).

The reading tables are a consolidated summary, not a row-by-row expansion of all conditions. Complete machine-readable conditions are in the [component rules](../rules/component-rules.json), and citation tones are in the [citation-tone data](../rules/citation-tones.json). See the [rulebook](rulebook.en.md) for selection order, uniqueness and the y/w onset restriction.

Spellings containing y/w must be valid in the corresponding onset environment. If the table does not give a form for another environment, do not invent a branch for it. Retain an unresolved result when no condition supports one.

## Understanding the spellings, notation and data points

The eight datasets cover older Kunshan, Suzhou, older Shanghai, Shanghai, Jiaxing, Wuxi, newer Kunshan and Changshu. They are eight local datasets from six places, not eight genealogical branches, and they do not imply a shared phonological system for all Wu Chinese. The older/newer labels distinguish the datasets themselves. They do not mean that every speaker of the same age uses identical pronunciations.

Wupin is a spelling system, while the IPA column preserves the notation used in these datasets. Seeing a particular Wupin letter is not grounds for immediately applying Mandarin pinyin, an English pronunciation or a phonetic value from another variety. Spellings such as `oe`, `au` and `eu` represent complete finals, not necessarily two vowels pronounced in sequence. The source notation distinguishes `ᴀ`, `ᴇ`, `ɿ`, `ʮ`, `ȵ` and the subscript `ⱼ`. This guide does not arbitrarily replace them with a different narrow phonetic analysis.

When reading a complete spelling, first identify the complete tone suffix at the end, then the onset and final. Combinations such as `ph`, `tsh`, `ch`, `ng`, `gn` and `gh` must be interpreted through the local onset analysis, not read letter by letter. For example, `ph` represents aspirated `pʰ`, not p followed by a separate h syllable. `ng` generally corresponds to the nasal `ŋ`, while `gn` corresponds to `ȵ`. They must not be conflated.

Nasalization, nasal codas and checked finals also require their complete correspondences. In these tables, `an` and `aon` commonly correspond to nasalized vowels. Other spellings ending in n may correspond to a nasal coda or a particular final category. Every n cannot be assigned the same sound. `q` forms part of a checked final and commonly corresponds to `ʔ`. Finals such as `aq`, `eq` and `iq` must be looked up as wholes. Mechanically adding a glottal stop to an arbitrary nonchecked final does not make it a valid checked final.

## Common onsets

| Common IPA onset | Wupin onset |
| --- | --- |
| ∅ | ∅ |
| b | b |
| d | d |
| dʑ | j |
| ɡ | g |
| h | h |
| k | k |
| kʰ | kh |
| l | l |
| m | m |
| n | n |
| p | p |
| pʰ | ph |
| s | s |
| t | t |
| ts | ts |
| tsʰ | tsh |
| tɕ | c |
| tɕʰ | ch |
| tʰ | th |
| z | z |
| ŋ | ng |
| ȵ | gn |
| ɕ | sh |

This table lists only correspondences shared by all eight data points. Other onsets and their final-dependent conditions still require the complete rules. This table alone cannot determine every onset spelling.

The IPA glyph `ɡ` in this table corresponds to the onset key `g` in the machine-readable data. The display glyph does not mean that this repository includes an input normalizer.

Aspiration and voicing are separate distinctions. `p / pʰ / b` are respectively a voiceless unaspirated stop, a voiceless aspirated stop and a voiced stop, not three identical versions of p. The alveolo-palatal series `tɕ / tɕʰ / dʑ` commonly corresponds to `c / ch / j`, but complete syllables still require local conditions. Older Shanghai also has `ɸ / β`, and Changshu also has a retroflex series. Shared spellings do not erase their phonetic differences.

| Data point | Onset conditions to remember beyond the common table |
| --- | --- |
| Older Kunshan | `f`, `v` and conditional `ɦ`; keep `ŋ` and `ȵ` separate |
| Suzhou | `f`, `v` and conditional `ɦ`; this ordinary layer does not automatically include the retroflex layer of Pingtan performance |
| Older Shanghai | `ɸ → f`, `β → v`; do not globally replace them with `f / v` from another table |
| Shanghai | `f`, `v`, `ʑ → zh` and conditional `ɦ` |
| Jiaxing | `f`, `v`, `ʑ → zh` and conditional `ɦ` |
| Wuxi | `f`, `v` and conditional `ɦ` |
| Newer Kunshan | `f`, `v` and conditional `ɦ`; a shared place name does not authorize borrowing every condition from the older variety |
| Changshu | `tʂ / tʂʰ / dʐ / ʂ → c / ch / j / sh`, plus `ʐ → zh` and `dz → dz`; distinguish these from the alveolo-palatal series through complete conditions |

## Single-character citation tones

Tone suffixes and pitch values are separate. `-` means that the table does not list that tone suffix for the variety. It is not a zero pitch value and does not authorize an inferred addition. This table does not cover connected-speech tone sandhi.

The number at the end of Wupin is a tone-category or subcategory label. In this numbering system, `1 / 2` denote yin/yang level tones, `3 / 4` yin/yang rising tones, `5 / 6` yin/yang departing tones, and `7 / 8` yin/yang entering tones. Tone categories have merged differently across varieties, so all eight numbers need not be present. Jiaxing `3b` is a separate complete suffix. Its b must not be treated as a final consonant or deleted.

IPA superscripts are five-level pitch values, with `1` lowest and `5` highest. `⁴⁴` means remaining at level 4, while `¹³²` means rising from 1 to 3 and then falling to 2. Tone suffix `6` does not mean a sixth pitch level, and the same suffix need not have the same pitch value in different varieties. A single digit in a checked-tone cell is still citation-tone pitch notation. It does not indicate a syllable whose duration can simply be equated with that of a nonchecked syllable.

| Tone suffix | Kunshan (older) | Suzhou | Shanghai (older) | Shanghai | Jiaxing | Wuxi | Kunshan (newer) | Changshu |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | ⁴⁴ | ⁴⁴ | ⁵³ | ⁵³ | ⁵¹ | ⁴⁴ | ⁴⁴ | ⁴¹ |
| 2 | ¹³² | ²²³ | - | - | ³¹ | - | ²⁴ | ²⁴ |
| 3 | ⁵² | ⁵¹ | ⁴⁴ | - | ⁴⁴ | ³²³ | ⁵² | ⁴⁴ |
| 3b | - | - | - | - | ²¹³ | - | - | - |
| 4 | - | - | - | - | ²¹² | ¹³ | - | ²¹ |
| 5 | ⁴¹² | ⁵²³ | ³⁵ | ³⁴ | ³⁵ | ³⁵ | ⁴¹² | ³³⁴ |
| 6 | ³¹² | ²³¹ | ¹³ | ²³ | ¹⁴ | ²²³ | ²¹³ | ²²³ |
| 7 | ⁵ | ⁴³ | ⁴ | ⁵ | ⁵ | ⁵ | ⁵ | ⁵ |
| 8 | ²³ | ²³ | ¹² | ¹² | ¹² | ²³ | ²³ | ³ |

## Using voicing and yin/yang categories when reading

The main tendency in ordinary single-character citation tones is for voiceless obstruents to occur with yin tones and voiced obstruents with yang tones. A voiceless aspirated sound is still voiceless. The presence of h or `ʰ` does not make it voiced. This tendency can assist inspection, but it cannot by itself determine the level, rising, departing or entering category, and it must not be used to change the data automatically.

| Onset type | Common symbols | Nonchecked tone suffixes normally considered | Checked tone suffix normally considered |
| --- | --- | --- | --- |
| Voiceless unaspirated obstruents and voiceless fricatives | `p`, `t`, `k`, `ts`, `tɕ`, `f`, `s`, `ɕ`, `h` | `1`, `3`, `5`, where listed for the variety | `7` |
| Voiceless aspirated obstruents | `pʰ`, `tʰ`, `kʰ`, `tsʰ`, `tɕʰ` | Still consider the local yin tones | `7` |
| Voiced obstruents | `b`, `d`, `ɡ`, `dz`, `dʑ`, `v`, `z`, plus `β` in older Shanghai | `2`, `4`, `6`, where listed for the variety | `8` |
| Onsets with `ɦ` | `ɦ`, with spellings potentially involving `gh`, `y`, `w` | Consider yang tones according to the complete local conditions | Usually `8`; still check the complete conditions |

Seeing the voiced onset b alone does not permit choosing arbitrarily among `2`, `4` and `6`. Sonorants such as nasals and laterals are not the same as voiced obstruents. They may occur with yin or yang tones and must not be restricted to even-numbered suffixes. True zero onsets and y/w spellings require the local structural and phonation conditions, rather than tone assignment from the first Latin letter.

Yin and yang tones are not two pitch curves shared across varieties. A point in a yin-tone curve need not be higher than every point in a yang-tone curve. A single digit from a curve therefore cannot determine yin or yang. Although checked syllables commonly end in `ʔ`, this shared coda does not determine yin or yang either. The small number of explicitly listed combinations contrary to the main tendency remain preserved. The demonstrations below give their specific component conditions without extending them into new general rules.

## Kunshan (older variety) - `kunshan_lao`

Keep `ᴇ → ae`, `e → e`, `iɪ → ie` and `i → i` distinct in this data point. Its `aʔ → aq` differs from `aʔ → aeq` in Suzhou and older Shanghai. For `iø → ioe` with onset ɦ, consult the separate yoe branch. Tone suffixes 2=`¹³²` and 6=`³¹²` must not be read with the values of newer Kunshan.

| IPA final | Basic Wupin / necessary branches |
| --- | --- |
| a | a |
| aʔ | aq |
| e | e |
| i | i (after a consonant or with a zero onset); yi (with onset ɦ) |
| ia | ia; ya with onset ɦ |
| iaʔ | iaq; yaq with onset ɦ |
| in | in (after a consonant or with a zero onset); yin (with onset ɦ) |
| io | io |
| ioŋ | ion; yon with onset ɦ |
| ioʔ | ioq; yoq with onset ɦ |
| iã | ian; yan with onset ɦ |
| iø | ioe; yoe with onset ɦ |
| iɑ̃ | iaon; yaon with onset ɦ |
| iɔ | iau; yau with onset ɦ |
| iəʔ | iq (after a consonant or with a zero onset); yiq (with onset ɦ) |
| iɪ | ie; ye with onset ɦ |
| m | m |
| n | n |
| o | o |
| oŋ | on |
| oʔ | oq |
| u | u (after a consonant or with a zero onset); wu (with onset ɦ) |
| ua | ua; wa with onset ɦ |
| uaʔ | uaq; waq with onset ɦ |
| ue | ue; we with onset ɦ |
| uã | uan; wan with onset ɦ |
| uø | uoe; woe with onset ɦ |
| uɑ̃ | uaon; waon with onset ɦ |
| uən | uen; wen with onset ɦ |
| uəʔ | ueq; weq with onset ɦ |
| uᴇ | uae; wae with onset ɦ |
| y | iu; yu with onset ɦ |
| yn | iun; yun with onset ɦ |
| yəʔ | iuq; yuq with onset ɦ |
| ã | an |
| ø | oe |
| ɑ̃ | aon |
| ɔ | au |
| əl | er |
| ən | en |
| əu | ou |
| əʔ | eq |
| ɿ | y |
| ʮ | yu |
| ᴇ | ae |

## Suzhou - `suzhou_zi`

The most important distinctions to preserve are `i / iⱼ` and `y / yⱼ`. Locally, `i → ie`, `iⱼ → i`, `y → ieu` and `yⱼ → iu` each have additional conditions for onset ɦ. Deleting the subscript or replacing it with superscript `ʲ` is not valid normalization. Also distinguish `æ → au`, `øʏ → eu` and `əu → ou`, and do not merge `ã` with `ɑ̃`. Single-character checked tones are fixed at 7=`⁴³` and 8=`²³`. Do not insert connected-speech tones from words into this table.

| IPA final | Basic Wupin / necessary branches |
| --- | --- |
| aʔ | aeq |
| i | ie; ye with onset ɦ |
| iaʔ | iaeq; yaeq with onset ɦ |
| in | in (after a consonant or with a zero onset); yin (with onset ɦ) |
| io | io; yo with onset ɦ |
| ioŋ | ion; yon with onset ɦ |
| ioʔ | ioq; yoq with onset ɦ |
| iã | ian; yan with onset ɦ |
| iæ | iau; yau with onset ɦ |
| iø | ioe; yoe with onset ɦ |
| iɑ | ia; ya with onset ɦ |
| iɑʔ | iaq; yaq with onset ɦ |
| iɑ̃ | iaon; yaon with onset ɦ |
| iəʔ | iq (after a consonant or with a zero onset); yiq (with onset ɦ) |
| iⱼ | i (after a consonant or with a zero onset); yi (with onset ɦ) |
| m | m |
| n | n |
| o | o |
| oŋ | on |
| oʔ | oq |
| u | u |
| uaʔ | uaeq; waeq with onset ɦ |
| uã | uan; wan with onset ɦ |
| uø | uoe; woe with onset ɦ |
| uɑ | ua; wa with onset ɦ |
| uɑ̃ | uaon; waon with onset ɦ |
| uən | uen; wen with onset ɦ |
| uəʔ | ueq; weq with onset ɦ |
| uᴇ | ue; we with onset ɦ |
| wɑ | wa |
| y | ieu; yeu with onset ɦ |
| yaʔ | yuaeq |
| yn | iun; yun with onset ɦ |
| yəʔ | iuq; yuq with onset ɦ |
| yⱼ | iu; yu with onset ɦ |
| ã | an |
| æ | au |
| ø | oe |
| øʏ | eu |
| ŋ | ng |
| ɑ | a |
| ɑʔ | aq |
| ɑ̃ | aon |
| əl | er |
| ən | en |
| əu | ou |
| əʔ | eq |
| ɿ | y |
| ʮ | yu |
| ᴇ | e |

## Shanghai (older variety) - `shanghai_laopai`

This data point has `ɸ → f` and `β → v`. It is not simply the other Shanghai table with a different set of pitch values. The vowel correspondences `ɑ → a`, `ɛ → ae`, `aʔ → aeq`, `ɑʔ → aq` and `ɒ̃ → aon` remain separate. Tone suffixes 3=`⁴⁴`, 5=`³⁵`, 6=`¹³` and 7=`⁴` must not borrow the pitch values of the other Shanghai dataset.

| IPA final | Basic Wupin / necessary branches |
| --- | --- |
| aʔ | aeq |
| e | e |
| i | i (after a consonant or with a zero onset); yi (with onset ɦ) |
| iaʔ | iaeq; yaeq with onset ɦ |
| ie | ie; ye with onset ɦ |
| ieʔ | iq (after a consonant or with a zero onset); yiq (with onset ɦ) |
| iu | iuu |
| iã | ian; yan with onset ɦ |
| iŋ | in (after a consonant or with a zero onset); yin (with onset ɦ) |
| iɑ | ia; ya with onset ɦ |
| iɑʔ | iaq; yaq with onset ɦ |
| iɒ̃ | yaon |
| iɔ | iau; yau with onset ɦ |
| iəʔ | ieq |
| iɛ | iae; yae with onset ɦ |
| iɤ | ieu; yeu with onset ɦ |
| m̩ | m |
| n̩ | n |
| o | o |
| oŋ | on |
| oʔ | oq |
| u | u |
| uaʔ | uaeq |
| ue | ue |
| uã | uan |
| uɑ | ua |
| uɑʔ | uaq |
| uɒʔ | uaoq |
| uɒ̃ | uaon |
| uəŋ | uen |
| uəʔ | ueq |
| uɛ | uae |
| y | iu; yu with onset ɦ |
| yoŋ | ion; yon with onset ɦ |
| yoʔ | ioq; yoq with onset ɦ |
| yø | ioe; yoe with onset ɦ |
| yøʔ | ioeq; yoeq with onset ɦ |
| yəŋ | iun; yun with onset ɦ |
| ã | an |
| ø | oe |
| øʔ | oeq |
| ŋ̍ | ng |
| ɑ | a |
| ɑʔ | aq |
| ɒʔ | aoq |
| ɒ̃ | aon |
| ɔ | au |
| əl | er |
| əŋ | en |
| əʔ | eq |
| ɛ | ae |
| ɤ | eu |
| ɿ | y |
| ʮ | yu |

## Shanghai - `shanghai`

The small-capital symbols in `ᴀ → a` and `ᴇ → e`, together with `ɔ → au` and `ɤ → eu`, express valid distinctions in this transcription system. They must not be interchanged merely because the glyphs look similar. This dataset has tone suffixes 1=`⁵³`, 5=`³⁴`, 6=`²³`, 7=`⁵` and 8=`¹²`. Preserve both the y/w spellings with onset ɦ and the branches that retain gh. Tone-category mergers do not authorize inventing missing suffixes.

| IPA final | Basic Wupin / necessary branches |
| --- | --- |
| i | i (after a consonant or with a zero onset); yi (with onset ɦ) |
| in | in (after a consonant or with a zero onset); yin (with onset ɦ) |
| ioŋ | ion; yon with onset ɦ |
| ioʔ | ioq; yoq with onset ɦ |
| iã | ian; yan with onset ɦ |
| iɑ̃ | yaon |
| iɔ | iau; yau with onset ɦ |
| iɤ | ieu; yeu with onset ɦ |
| iɪʔ | iq (after a consonant or with a zero onset); yiq (with onset ɦ) |
| iᴀ | ia; ya with onset ɦ |
| iᴀʔ | iaq; yaq with onset ɦ |
| iᴇ | ie; ye with onset ɦ |
| m̩ | m |
| n̩ | n |
| o | o |
| oŋ | on |
| oʔ | oq |
| u | u (after a consonant or with a zero onset); wu (with onset ɦ) |
| uã | uan; wan with onset ɦ |
| uø | uoe; woe with onset ɦ |
| uɑ̃ | uaon; waon with onset ɦ |
| uən | uen; wen with onset ɦ |
| uəʔ | ueq; weq with onset ɦ |
| uᴀ | ua; wa with onset ɦ |
| uᴀʔ | uaq; waq with onset ɦ |
| uᴇ | ue; we with onset ɦ |
| y | iu; yu with onset ɦ |
| yn | iun; yun with onset ɦ |
| yø | ioe; yoe with onset ɦ |
| yɪʔ | iuq; yuq with onset ɦ |
| ã | an |
| ø | oe |
| ŋ̍ | ng |
| ɑ̃ | aon |
| ɔ | au |
| əl | er |
| ən | en |
| əʔ | eq |
| ɤ | eu |
| ɿ | y |
| ᴀ | a |
| ᴀʔ | aq |
| ᴇ | e |

## Jiaxing - `jiaxing`

Do not read `ɤə → oe`, `yɤə → ioe / yoe` or `ɪŋ → in / yin` with the values of identically spelled forms elsewhere. `3b → ²¹³` and `3 → ⁴⁴` remain distinct. Do not automatically change every aspirated onset followed by 3 into 3b. The vowel in `ue` also varies with the onset. Consult the complete onset and final conditions.

| IPA final | Basic Wupin / necessary branches |
| --- | --- |
| e | e |
| i | i (after a consonant or with a zero onset); yi (with onset ɦ) |
| ie | ie; ye with onset ɦ |
| ioŋ | ion; yon with onset ɦ |
| ioʔ | ioq |
| iã | ian; yan with onset ɦ |
| iɑ | ia; ya with onset ɦ |
| iɑʔ | iaq |
| iɑ̃ | iaon; yaon with onset ɦ |
| iɔ | iau; yau with onset ɦ |
| iəu | ieu; yeu with onset ɦ |
| iɛ | iae |
| iɪʔ | iq |
| l | l |
| m | m |
| o | o |
| oŋ | on |
| oʔ | oq |
| u | u (after a consonant or with a zero onset); wu (with onset ɦ) |
| ue | ue; we with onset ɦ |
| uã | uan; wan with onset ɦ |
| uɑ | ua; wa with onset ɦ |
| uɑʔ | uaq |
| uəŋ | uen; wen with onset ɦ |
| uəʔ | ueq |
| uɛ | uae; wae with onset ɦ |
| uɤə | uoe; woe with onset ɦ |
| y | iu; yu with onset ɦ |
| yəŋ | iun; yun with onset ɦ |
| yəʔ | iuq |
| yɤə | ioe; yoe with onset ɦ |
| ŋ | ng |
| ɑ | a |
| ɑʔ | aq |
| ɑ̃ | aon |
| ɔ | au |
| əŋ | en |
| əʔ | eq |
| ɛ | ae |
| ɤə | oe |
| ɪŋ | in (after a consonant or with a zero onset); yin (with onset ɦ) |
| ɿ | y |
| ʮ | yu |
| ʮe | ue |

## Wuxi - `wuxi_zi`

This data point has `ʌ → au`, `ʊ → oe`, `əɯ → eu` and `yʊ → ioe / yoe`. Do not read them with the au/oe/eu values of another variety. Its `ɚ → er` also differs from əl or ər elsewhere. Citation tones are 3=`³²³`, 4=`¹³`, 5=`³⁵` and 6=`²²³`. Do not incorrectly assign `³²³` to 6.

| IPA final | Basic Wupin / necessary branches |
| --- | --- |
| a | a |
| aʔ | aq |
| ei | ei |
| i | i (after a consonant or with a zero onset); yi (with onset ɦ) |
| ia | ia; ya with onset ɦ |
| iaʔ | iaq; yaq with onset ɦ |
| in | in (after a consonant or with a zero onset); yin (with onset ɦ) |
| ioŋ | ion; yon with onset ɦ |
| ioʔ | ioq; yoq with onset ɦ |
| iã | ian; yan with onset ɦ |
| iɒ̃ | yaon |
| iəɯ | ieu; yeu with onset ɦ |
| iəʔ | iq (after a consonant or with a zero onset); yiq (with onset ɦ) |
| iɪ | ie; ye with onset ɦ |
| iʌ | iau; yau with onset ɦ |
| m | m |
| n | n |
| oŋ | on |
| oʔ | oq |
| u | u (after a consonant or with a zero onset); wu (with onset ɦ) |
| ua | ua; wa with onset ɦ |
| uaʔ | uaq; waq with onset ɦ |
| uã | uan; wan with onset ɦ |
| uɒ̃ | uaon; waon with onset ɦ |
| uən | uen; wen with onset ɦ |
| uəʔ | ueq; weq with onset ɦ |
| uɛ | uae; wae with onset ɦ |
| uᴇ | ue; we with onset ɦ |
| y | iu; yu with onset ɦ |
| yən | iun; yun with onset ɦ |
| yəʔ | iuq; yuq with onset ɦ |
| yʊ | ioe; yoe with onset ɦ |
| ã | an |
| ŋ | ng |
| ɒ̃ | aon |
| ən | en |
| əɯ | eu |
| əʔ | eq |
| ɚ | er |
| ɛ | ae |
| ɿ | y |
| ʊ | oe |
| ʌ | au |
| ʮ | yu |
| ᴇ | e |

## Kunshan (newer variety) - `kunshan_xinpai_zi`

Its `ɪ → ie` differs from the `iɪ → ie` commonly found in the older variety. It also has `ɵ → oe`, `yɵ → ioe`, `əu → ou` and `əl → el`. Tone suffixes 2=`²⁴` and 6=`²¹³` must not be replaced with the older variety's `¹³² / ³¹²`. Keep true zero onsets separate from branches with onset ɦ. Do not add y/w uniformly.

| IPA final | Basic Wupin / necessary branches |
| --- | --- |
| i | i (after a consonant or with a zero onset); yi (with onset ɦ) |
| in | in (after a consonant or with a zero onset); yin (with onset ɦ) |
| ioŋ | ion; yon with onset ɦ |
| ioʔ | ioq; yoq with onset ɦ |
| iã | ian; yan with onset ɦ |
| iɑ | ia; ya with onset ɦ |
| iɔ | iau; yau with onset ɦ |
| iɛ | iae; yae with onset ɦ |
| iᴀʔ | iaq; yaq with onset ɦ |
| iᴇ | ye |
| m | m |
| n | n |
| o | o |
| oŋ | on |
| oʔ | oq |
| u | u |
| uã | uan; wan with onset ɦ |
| uɑ | ua; wa with onset ɦ |
| uən | uen; wen with onset ɦ |
| uəʔ | ueq; weq with onset ɦ |
| uɛ | uae; wae with onset ɦ |
| uɵ | uoe; woe with onset ɦ |
| uᴀʔ | uaq; waq with onset ɦ |
| uᴇ | ue; we with onset ɦ |
| yən | iun |
| yəʔ | iuq |
| yɵ | ioe |
| ã | an |
| ɑ | a |
| ɔ | au |
| əl | el |
| ən | en |
| əu | ou |
| əʔ | eq |
| ɛ | ae |
| ɪ | ie |
| ɪʔ | iq |
| ɵ | oe |
| ɿ | y |
| ʮ | yu |
| ᴀʔ | aq |
| ᴇ | e |

## Changshu - `changshu`

Preserve the conditions distinguishing nonretroflex, retroflex and alveolo-palatal sounds. `tɕ / tʂ` can share the spelling c, but this does not mean that either sound can be chosen freely. The complete onset/final combination still matters. Locally, `ɪ → ie`, `ɯ → ou`, `iɯ → iou / you`, `ɛ̃ → en` and `ə → oe` are worth remembering separately. Tone suffixes 1=`⁴¹` and 5=`³³⁴` are not equivalent to the same suffixes in Suzhou or Shanghai. Do not extend an old individual candidate into free variation across an entire Changshu final category.

| IPA final | Basic Wupin / necessary branches |
| --- | --- |
| i | i (after a consonant or with a zero onset); yi (with onset ɦ) |
| ioŋ | ion; yon with onset ɦ |
| ioʔ | ioq; yoq with onset ɦ |
| iã | ian; yan with onset ɦ |
| iŋ | in (after a consonant or with a zero onset); yin (with onset ɦ) |
| iɑ | ia; ya with onset ɦ |
| iɑʔ | iaq; yaq with onset ɦ |
| iɑ̃ | iaon; yaon with onset ɦ |
| iɔ | iau; yau with onset ɦ |
| iə | ioe; yoe with onset ɦ |
| iɛ | iae |
| iɪ | ie; ye with onset ɦ |
| iɪʔ | iq (after a consonant or with a zero onset); yiq (with onset ɦ) |
| iɯ | iou; you with onset ɦ |
| m | m |
| oŋ | on |
| oʔ | oq |
| u | u (after a consonant or with a zero onset); wu (with onset ɦ) |
| uoʔ | woq |
| uã | uan; wan with onset ɦ |
| uɑ | ua; wa with onset ɦ |
| uɑʔ | uaq; waq with onset ɦ |
| uɑ̃ | uaon; waon with onset ɦ |
| uə | uoe; woe with onset ɦ |
| uɛ | uae; wae with onset ɦ |
| uɛ̃ | uen; wen with onset ɦ |
| uᴇ | ue; we with onset ɦ |
| ã | an |
| ŋ | ng |
| ɑ | a |
| ɑʔ | aq |
| ɑ̃ | aon |
| ɔ | au |
| ə | oe |
| ər | er |
| əʔ | eq |
| ɛ | ae |
| ɛ̃ | en |
| ɪ | ie |
| ɪʔ | iq |
| ɯ | ou |
| ɿ | y |
| ʅ | y |
| ᴇ | e |

## gh, y, w and true zero onsets

First establish whether the complete syllable contains `ɦ`, then check the local basic final. Where supported by the conditions, ɦ before a final beginning with an i/y-type sound commonly forms a y spelling, and before a u-type final commonly forms a w spelling. Other combinations may retain gh. These are conditional spellings. Do not delete ɦ globally or add y/w whenever the onset is zero.

Common spelling families include `i → yi`, `ia → ya`, `ioe → yoe`, `iu → yu`, `u → wu` and `ue → we`. These families help recognition; they do not guarantee that every variety has every cell. In older Kunshan, the zero-onset i branch outputs i, while the ɦ plus i branch outputs yi. In the same variety, ɦ plus a still has a gh+a branch. This does not authorize filling in unlisted conditions for older Shanghai or another dataset.

Conversely, a y/w spelling does not guarantee that ɦ must be reconstructed. The Suzhou table also preserves different notational structures such as `wɑ → wa` and `yaʔ → yuaeq`. When reading manually, first check the complete local conditions. Do not force all candidates into one pronunciation from the spelling's first letter.

Exact forward selection has an additional restriction: even if the general `final` level has only one output beginning with y/w, continue to the corresponding `final_environment` or `final_onset` level. For example, y/yu outputs for apical-type finals must also satisfy the environment conditions. The spelling summaries in this guide do not authorize skipping that step.

## y, yu, gn and syllabic sounds

Wupin y must not always be pronounced as IPA `y`. In the ordinary consonant environment of older Kunshan, `ɿ → y`, `ʮ → yu` and the IPA vowel correspondence `y → iu` are three different mappings. Suzhou additionally distinguishes `y → ieu` from `yⱼ → iu`. The complete syllable yu may also involve onset ɦ. These two letters alone do not identify it as `ʮ`.

Split `gnie6` into `gn + ie + 6`, not g+n+i+e. gn is a complete onset spelling and ie is a complete final. A gni beginning does not require an additional independent i syllable after the onset. Keep `ȵ` and `ŋ` separate. Do not treat gn and ng as freely interchangeable.

`m`, `n` and `ng` can sometimes constitute syllabic sounds by themselves. Jiaxing also has l. The notation may explicitly mark syllabicity or simply place a pitch value after a sonorant. The absence of an ordinary vowel does not mean that a final has been omitted, and ordinary nasal onsets must not all be treated as syllabic sounds. Do not change Jiaxing l into er from another variety. Nor does er have the same sound across varieties: the tables include əl, ɚ and ər, while newer Kunshan additionally has el. The Wuxi components `ɦ + ŋ` also must not be mechanically spelled ghng.

## Consulting the tables manually for a complete spelling

1. Select the data point and older/newer variety. Do not borrow phonetic values across tables.
2. Identify the complete tone suffix first, taking particular care to retain Jiaxing 3b.
3. Distinguish ordinary onset/final structures, true zero onsets, spellings involving ɦ and syllabic sounds.
4. Treat a multiletter onset as a complete spelling unit, then look up the entire local final. Do not transcode letter by letter.
5. Apply branches with explicit conditions, such as the Suzhou subscripts, Changshu alveolo-palatal/retroflex series, onset environments and y/w spellings.
6. Look up the citation-tone pitch value from the local tone suffix, then check the checked, voicing and phonation conditions. Voicing gives only part of the information. It does not replace the complete tone category.
7. Retain an unresolved result if reverse lookup has multiple combinations or lacks conditions. Even unique components do not establish an attested pronunciation of a particular character.

This is a route for reading the tables manually, not a parser provided by this repository. The details of forward selection through successive unique levels and reverse validation remain governed by the [declarative rulebook](rulebook.en.md).

## Twelve groups of component demonstrations

All conditions and values below come from the public declarative rules. They demonstrate only how to read components. They include no headwords, meanings or source records, and do not claim to be newly collected local readings. Examples that omit tone show only onsets and finals, without inventing complete tone suffixes. Multiple items in the same cell are explicit contrasts, not freely interchangeable alternatives.

| Group | Data point | Component or spelling contrast | Reading focus |
| --- | --- | --- | --- |
| 1 | Older Kunshan | `ȵ + iɪ + ³¹² → gn + ie + 6 = gnie6` | gn and ie are complete onset and final units respectively |
| 2 | Suzhou | `tɕi⁴⁴ → cie1`; `tɕiⱼ⁴⁴ → ci1` | Preserve the subscript; the final spellings differ |
| 3 | Shanghai/Wuxi | `bø²³ → boe6`; `bʊ²²³ → boe6` | Identical spellings can have different vowels and pitch values |
| 4 | Jiaxing | `pʰu²¹³ → ph + u + 3b = phu3b` | ph is an aspirated onset; b belongs to the complete suffix |
| 5 | Jiaxing | `l²¹² → l4` | l can be syllabic by itself; do not add a vowel |
| 6 | Older Kunshan | Tone omitted: `∅ + i → i`; `ɦ + i → yi`; `ɦ + a → gha` | Separate true zero onsets, conditional contractions and gh branches |
| 7 | Changshu | Tone omitted: `tɕ + i → ci`; `tʂ + ʅ → cy` | The phonetic value of c depends on the complete conditions |
| 8 | Jiaxing | `vəʔ⁵ → veq7` | This component condition retains a voiced obstruent with a yin entering-tone suffix; do not change it automatically to 8 |
| 9 | Jiaxing | `vie⁴⁴ → vie3` | Onset v does not require forcing a change to a yang tone |
| 10 | Older Shanghai | `βiɔ⁴⁴ → viau3` | β is not merely a glyph alias of v in another table; this also runs contrary to the main pairing tendency |
| 11 | Older Kunshan | Ordinary consonant environment: `ɿ → y`; `ʮ → yu`; `y → iu` | Distinguish the spellings y/yu from the IPA vowel y |
| 12 | Older Kunshan | `bu¹³² → bu2`; `bu³¹² → bu6` | The same voiced onset does not by itself determine the complete tone category |

Groups 8-10 retain only their explicitly listed component conditions. They do not authorize arbitrary v or β combinations to use the same tone suffixes. In reverse lookup, every demonstration remains subject to the complete forward conditions and the boundary of attested evidence. This release includes no attested syllable inventory. Component demonstrations do not confirm character pronunciations.

## Scope of use

Identical Wupin letters do not guarantee identical IPA across varieties. Syllabic sounds, nasalized sounds, subscripts and local vowel symbols retain the distinctions present in the data. Conditional branches in the final tables do not authorize transfer across environments or directly generate complete syllables that are not listed.

This release provides declarative rules and a rulebook only. It does not include a standalone parser, converter or attested syllable inventory. The historical corpus regressions have not been rerun for this release.

The original organization and explanations in this document are licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). This document's license does not change the rights in third-party sources.
