// SPDX-License-Identifier: GPL-3.0-only
// Copyright (C) 2026 unknownnumbers and contributors
// Documentation rendering and static validation. This is not a speech converter.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';
import assert from 'node:assert/strict';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const write = process.argv.includes('--write');
const hash = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
const read = name => fs.readFileSync(path.join(root, name));
const rules = JSON.parse(read('rules/component-rules.json'));
const tones = JSON.parse(read('rules/citation-tones.json'));
const version = `v${JSON.parse(read('package.json')).version}`;
const tables = {
  kunshan_lao: '崑山(老)', suzhou_zi: '蘇州', shanghai_laopai: '上海(老)',
  shanghai: '上海', jiaxing: '嘉興', wuxi_zi: '無錫',
  kunshan_xinpai_zi: '崑山(新)', changshu: '常熟'
};
const lengths = {onset: 3, onset_final: 4, final: 3, final_environment: 4, final_onset: 4, tone: 6};
const expected = {onset: 224, onset_final: 4079, final: 367, final_environment: 935, final_onset: 4079, tone: 146};
const counts = Object.fromEntries(Object.keys(lengths).map(key => [key, 0]));
const keys = new Set();
let conflicts = 0;
assert.equal(rules.length, 9830);
assert.deepEqual(Object.keys(tones).sort(), Object.keys(tables).sort());
for (const row of rules) {
  assert.deepEqual(Object.keys(row).sort(), ['condition', 'family', 'outputs']);
  assert.ok(Object.hasOwn(lengths, row.family));
  assert.equal(row.condition.length, lengths[row.family]);
  for (const [index, value] of row.condition.entries()) {
    assert.equal(typeof value, row.family === 'tone' && index === 3 ? 'boolean' : 'string');
  }
  assert.ok(Object.hasOwn(tables, row.condition[0]));
  assert.ok(['default', 'ordinary'].includes(row.condition[1]));
  const key = JSON.stringify([row.family, row.condition]);
  assert.ok(!keys.has(key), 'Duplicate rule'); keys.add(key); counts[row.family]++;
  assert.ok(Array.isArray(row.outputs) && row.outputs.length > 0);
  assert.equal(new Set(row.outputs.map(output => output.value)).size, row.outputs.length);
  for (const output of row.outputs) {
    assert.deepEqual(Object.keys(output), ['value']); assert.equal(typeof output.value, 'string');
  }
  if (row.outputs.length > 1) conflicts++;
  if (row.family === 'final_environment') assert.ok(['zero', 'breathy_h', 'consonant'].includes(row.condition[3]));
  if (row.family === 'tone') {
    assert.equal(typeof row.condition[3], 'boolean');
    for (const output of row.outputs) assert.equal(tones[row.condition[0]][output.value], row.condition[2]);
  }
}
assert.deepEqual(counts, expected); assert.equal(conflicts, 182);

const escape = value => String(value).replaceAll('|', '\\|');
const regionNames = {
  kunshan_lao: ['Kunshan (older)', '昆山(老)'], suzhou_zi: ['Suzhou', '苏州'],
  shanghai_laopai: ['Shanghai (older)', '上海(老)'], shanghai: ['Shanghai', '上海'],
  jiaxing: ['Jiaxing', '嘉兴'], wuxi_zi: ['Wuxi', '无锡'],
  kunshan_xinpai_zi: ['Kunshan (newer)', '昆山(新)'], changshu: ['Changshu', '常熟']
};
for (const [id, label] of Object.entries(tables)) {
  const [english, simplified] = regionNames[id];
  const lines = [`# ${english} / ${label} / ${simplified} / ${id}`, '',
    '## English (en)', '',
    'Rule revision: 2026-09-10. Generated from [component rules](../../rules/component-rules.json).', '',
    'Read the [selection order and field definitions](../rulebook.en.md) before using these tables. Multiple outputs mean a conflict at this condition, not free alternatives. Empty strings are shown as `""`.', '',
    '## Traditional Chinese (zh-TC)', '',
    '規則修訂日期: 2026-09-10. 從[組件規則](../../rules/component-rules.json)生成.', '',
    '使用前請讀[選擇順序及欄位定義](../rulebook.md). 多個輸出表示此條件存在衝突, 不表示可任選. 空字串以 `""` 顯示.', '',
    '## Simplified Chinese (zh-SC)', '',
    '规则修订日期: 2026-09-10. 从[组件规则](../../rules/component-rules.json)生成.', '',
    '使用前请读[选择顺序及字段定义](../rulebook.zh-SC.md). 多个输出表示此条件存在冲突, 不表示可任选. 空字符串以 `""` 显示.', '',
    '| Family / 類型 / 类型 | Condition (JSON array) / 條件 / 条件 | Outputs (JSON array) / 輸出 / 输出 |', '| --- | --- | --- |'];
  for (const row of rules.filter(row => row.condition[0] === id)) lines.push(`| ${row.family} | ${escape(JSON.stringify(row.condition))} | ${escape(JSON.stringify(row.outputs.map(output => output.value)))} |`);
  lines.push('', 'Documentation / 文件 / 文档: CC BY-SA 4.0. Rule configuration / 規則配置 / 规则配置: GPL-3.0-only.', '');
  const relative = `docs/regions/${id}.md`;
  const content = lines.join('\n');
  if (write) {fs.mkdirSync(path.dirname(path.join(root, relative)), {recursive: true}); fs.writeFileSync(path.join(root, relative), content);}
  else assert.equal(read(relative).toString(), content, `Regenerate ${relative}`);
}

function files(directory = root) {
  return fs.readdirSync(directory, {withFileTypes: true}).flatMap(entry => {
    if (entry.name === '.git') return [];
    assert.ok(!entry.isSymbolicLink(), 'Symlinks are not release payloads');
    const absolute = path.join(directory, entry.name);
    return entry.isDirectory() ? files(absolute) : [path.relative(root, absolute).replaceAll('\\', '/')];
  }).sort();
}
const all = files();
for (const name of ['SOURCES.md', 'LICENSE.md']) {
  const text = read(name).toString();
  for (const language of ['English (en)', 'Traditional Chinese (zh-TC)', 'Simplified Chinese (zh-SC)']) {
    assert.ok(text.includes(`## ${language}`), `Missing full language section in ${name}`);
  }
}
for (const base of ['rulebook', 'common-and-differences', 'regions']) {
  const variants = [`docs/${base}.md`, `docs/${base}.en.md`, `docs/${base}.zh-SC.md`];
  const texts = variants.map(name => read(name).toString());
  for (const text of texts) {
    for (const label of ['English (en)', 'Traditional Chinese (zh-TC)', 'Simplified Chinese (zh-SC)']) assert.ok(text.includes(label), `Missing language navigation in ${base}`);
  }
  const shape = text => ({sections: (text.match(/^## /gm) || []).length, rows: (text.match(/^\|/gm) || []).length});
  for (const text of texts.slice(1)) assert.deepEqual(shape(text), shape(texts[0]), `Incomplete translated structure in ${base}`);
  if (base === 'common-and-differences') {
    const firstCells = text => text.split('\n').filter(line => line.startsWith('|')).map(line => line.split('|')[1].trim());
    const original = firstCells(texts[0]);
    for (const text of texts.slice(1)) {
      const translated = firstCells(text);
      original.forEach((cell, index) => {if (!/\p{Script=Han}/u.test(cell)) assert.equal(translated[index], cell, 'Translated IPA or tone key changed');});
    }
  }
}
for (const relative of all.filter(name => name.endsWith('.md'))) {
  const text = read(relative).toString();
  for (const match of text.matchAll(/\]\(([^)]+)\)/g)) {
    const target = match[1].split('#')[0];
    if (!target || /^https?:/.test(target)) continue;
    const resolved = path.resolve(root, path.dirname(relative), target);
    if (write && ['release-manifest.json', 'SHA256SUMS'].some(name => resolved === path.join(root, name))) continue;
    assert.ok(fs.existsSync(resolved), `Missing link ${relative}: ${target}`);
  }
}
const licenseIndex = JSON.parse(read('license-index.json'));
assert.deepEqual(licenseIndex.files.map(entry => entry.path).sort(), all.filter(name => !['license-index.json', 'release-manifest.json', 'SHA256SUMS'].includes(name)));
for (const entry of licenseIndex.files) {
  assert.equal(typeof entry.source, 'string'); assert.equal(typeof entry.modification, 'string');
  assert.equal(typeof entry.license, 'string');
  if (entry.sha256) assert.equal(hash(read(entry.path)), entry.sha256);
}
const manifestNames = all.filter(name => !['release-manifest.json', 'SHA256SUMS'].includes(name));
const manifest = JSON.stringify({version, rules_revision: '2026-09-10',
  checks: {rule_count: rules.length, family_counts: counts, conflicting_conditions_preserved: conflicts,
    tone_constraints: '146 consistent', generated_tables: '8 exact', local_links: 'pass', license_file_coverage: 'complete'},
  documentation_languages: ['en', 'zh-TC', 'zh-SC'],
  validation_scope: 'Static rule structure, citation-tone consistency, documentation generation, translated section/table parity, relative links and file integrity. No pronunciation conversion or source-corpus regression executed.',
  files: manifestNames.map(name => ({path: name, bytes: read(name).length, sha256: hash(read(name))}))}, null, 2) + '\n';
if (write) fs.writeFileSync(path.join(root, 'release-manifest.json'), manifest);
else assert.equal(read('release-manifest.json').toString(), manifest, 'Regenerate manifest');
const sums = files().filter(name => name !== 'SHA256SUMS').map(name => `${hash(read(name))}  ${name}`).join('\n') + '\n';
if (write) fs.writeFileSync(path.join(root, 'SHA256SUMS'), sums);
else assert.equal(read('SHA256SUMS').toString(), sums, 'Checksum mismatch');
console.log(JSON.stringify({status: 'pass', rule_count: rules.length, preserved_conflicts: conflicts, tone_rules: counts.tone, generated_region_tables: 8, files: files().length}));
