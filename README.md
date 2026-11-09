English:
This project is created through human-AI collaboration. Some AI-proposed content may not yet have been reviewed by a human. Please excuse any errors or omissions.

TC:
本專案由人類與 AI 協作產生. 部分 AI 提出的內容可能尚未經人工審核. 若有錯誤或疏漏, 敬請見諒.

SC:
本项目由人类与 AI 协作产生. 部分 AI 提出的内容可能尚未经人工审核. 若有错误或疏漏, 敬请见谅.

# A Database of Selected Wu Chinese Varieties

## English (en)

This release provides IPA-Wupin white-box component rules and a rulebook for eight local varieties of Wu Chinese. It contains 9,830 declarative conditions, a fixed citation-tone table and readable regional tables. The rule revision is 2026-09-10; the publication version is v0.1.0.

Coverage: Kunshan (older), Suzhou, Shanghai (older), Shanghai, Jiaxing, Wuxi, Kunshan (newer) and Changshu. These are separate rule inventories, not a claim about eight genealogical branches. The rules concern isolated syllables and citation tones.

Start with the [rulebook](docs/rulebook.md), [common features and differences](docs/common-and-differences.md) and [regional index](docs/regions.md). Machine-readable inputs are [component-rules.json](rules/component-rules.json) and [citation-tones.json](rules/citation-tones.json).

This is a rule publication, without a standalone pronunciation converter or an attested-syllable inventory. Conflicting outputs remain explicit. Rule-composable reverse candidates are not attested pronunciations. Connected speech, sentence tone sandhi and unmarked source pairs are outside this release. This publication does not rerun the original source-corpus regression or independently verify source pronunciations.

Run `node tools/build.mjs --check` with Node.js 24.22.1 to check structure, citation-tone consistency, generated tables, local links, license coverage and SHA256. Run `node tools/build.mjs --write` to regenerate regional tables and manifests after an intentional edit. There are no third-party packages to install. The build reproduces documentation from the published rule inputs; it does not reconstruct the original research corpus.

## Traditional Chinese (zh-TC)

本版發布八個吳語地方變體的 IPA-吳拼白盒組件規則和規則書, 包含 9,830 條聲明性條件、固定單字本調表及可讀地區表. 規則修訂日期為 2026-09-10, 發布版本為 v0.1.0.

範圍為崑山老派、蘇州、上海老派、上海、嘉興、無錫、崑山新派及常熟. 八套規則分立, 不表示八個譜系分支. 規則處理單音節及單字本調.

請先讀[規則書](docs/rulebook.md)、[共性與差異](docs/common-and-differences.md)和[地區索引](docs/regions.md). 機器可讀輸入為 [component-rules.json](rules/component-rules.json) 和 [citation-tones.json](rules/citation-tones.json).

本版只有規則及說明, 未提供獨立讀音轉換器或已見音節清單. 衝突輸出明確保留. 由規則組合的反向候選不等於已證讀音. 連讀、整句變調及原始未標調配對不在本版範圍. 本次未重跑原始語料回歸, 也未獨立核實來源發音.

使用 Node.js 24.22.1 執行 `node tools/build.mjs --check`, 檢查結構、本調一致性、生成表、相對連結、授權覆蓋及 SHA256. 有意修改後用 `node tools/build.mjs --write` 重建地區表和清單. 無需安裝第三方套件. 構建從公開規則輸入重現文件, 不重建原研究語料.

## Simplified Chinese (zh-SC)

本版发布八个吴语地方变体的 IPA-吴拼白盒组件规则和规则书, 包含 9,830 条声明性条件、固定单字本调表及可读地区表. 规则修订日期为 2026-09-10, 发布版本为 v0.1.0.

范围为昆山老派、苏州、上海老派、上海、嘉兴、无锡、昆山新派及常熟. 八套规则分立, 不表示八个谱系分支. 规则处理单音节及单字本调.

请先读[规则书](docs/rulebook.md)、[共性与差异](docs/common-and-differences.md)和[地区索引](docs/regions.md). 机器可读输入为 [component-rules.json](rules/component-rules.json) 和 [citation-tones.json](rules/citation-tones.json).

本版只有规则及说明, 未提供独立读音转换器或已见音节清单. 冲突输出明确保留. 由规则组合的反向候选不等于已证读音. 连读、整句变调及原始未标调配对不在本版范围. 本次未重跑原始语料回归, 也未独立核实来源发音.

使用 Node.js 24.22.1 执行 `node tools/build.mjs --check`, 检查结构、本调一致性、生成表、相对链接、授权覆盖及 SHA256. 有意修改后用 `node tools/build.mjs --write` 重建地区表和清单. 无需安装第三方包. 构建从公开规则输入重现文件, 不重建原研究语料.

## Sources and licenses

See the [source and version index](SOURCES.md), [file-by-file license index](license-index.json), [license scope](LICENSE.md), [release manifest](release-manifest.json) and [SHA256SUMS](SHA256SUMS).

Original tools and rule configurations: GPL-3.0-only. Original explanatory documentation: CC BY-SA 4.0. Third-party license notices retain their own terms. These licenses do not grant rights in external reference materials or phonetic facts.
