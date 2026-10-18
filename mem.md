# Kotoba no Tabi: sonraya saxlananlar

Yeniləndi: 2026-10-14 (v18 — yeni görünüşlər).

## Canlı səhifə
https://claude.ai/artifact/F93gXmNQXjbVvSuEgeJe9H
- Səhifə `out/k.html`-dən yığılır (`build/pub.sh`).
- Əlavə fayllar: `audio.js` (səs paketi, publish-ə daxil etmə — dəyişməyib), `k4.js` (kanci kartları, `window.KOTOBA_K4` = base64 gzip, DecompressionStream ilə açılır).
- Publish həmişə `url` + `files: {"k4.js": ...}` ilə. Capability: `downloads`.

## İnternetsiz fayl
`Kotoba no Tabi.html` (~22 MB), `build/mkoff.py` yığır (`#audpack` + `#k4pack`).

## v17: kanci kartı v4 — TAMAMLANDI
548 kanci (528 kurs + 20 əlavə: 門竹石小力鳥虫米刀夕高王林森安岩畑炎鳴古), hər birində 4 format:
1. şəkildən kanciyə sürgü (sketç → KanjiVG);
2. tarix: fal sümüyü → tunc → möhür → fırça (mürəkkəb kancilərdə komponent kafelləri + möhür + bugünkü);
3. rəngli səhnə (üzsüz fiqurlar);
4. sumi-e;
+ Hekayəsi / Yaddaş açarı (az/en/ru).

### Pipeline (`build/pic4/`)
| Fayl | Nə üçündür |
|---|---|
| `brush.py`, `kit.py`, `skt.py`, `defs.py`, `glyph.py`, `squeeze.py` | fırça/qələm, filtrlər, SVG sıxılması |
| `comp.py`, `lib.py` | KanjiVG ağacı, komponent kitabxanası (`C`), kartlar (`K`, `KX` override), `el@pos` |
| `cmp_a.py` … `cmp_n.py` | ~223 komponent sketçi |
| `sk.py`, `sk2.py`, `fig.py` | səhnə primitivləri, əşyalar, üzsüz fiqurlar (POSE) |
| `c_samples.py`, `c_L00.py` … `c_L25.py` | kart mətnləri və səhnələri (L00 = əlavələr) |
| `build.py` → `pack.json`, `out/k4.js` | paket |
| `integrate.py` | `k_pre_v16.html` + `pict4.js` + `kc4.css` → `out/k.html` |
| `sheet.py out.png <kancilər>` | yoxlama vərəqi (real runtime ilə) |
| `plan.py N`, `cov.py`, `dump.py` | dərs planı, əhatə, cizgi geometriyası |

Yeni kart əlavə: `plan.py` → lazım olsa `cmp_*.py` → `c_LNN.py` (`@k(ch,(az,en,ru),(az,en,ru))` + `def _(st)`) → `build.py` → `sheet.py` ilə göz yoxlaması → `integrate.py` → `pub.sh` → publish.

## v21: görünüşlər (modlar)
- Baza: Avtomatik, Rəngli, Gecə, Kontrast.
- Temalar: Edo, Pirat, Matsuri, Manqa, Neo-Tokio (kiberpank), Piksel, Kosmos, Okean, Qəzet.
- Silinib: Misir, Art Deko, Zen bağı (istifadəçi bəyənmədi / Zen yerinə Pirat istədi). Köhnə seçim yaxın temaya keçir (THOLD).
- Kod: `build/themes/`:
  - `gen.py` → `themes.css`; burada daxili kartlar da üslublanır;
  - `mkfonts.py` → `fonts.css`; çatışmayan ə hərfi tərsinə çevrilmiş e-dən düzəldilir;
  - `base.css`;
  - `mute.js` — səssiz düyməsi + romaji başlıqlarına lang="ja-Latn";
  - `patch.py` — integrate.py çağırır.
- Səssiz düyməsi: kompüterdə üst zolaqda, telefonda sağ aşağı küncdə.
- Ayarlar paneli açılanda ekranı tam tutur.

## Jouyou sırası (Lüğət → Kanci → Jouyou sırası)
- 1-ci sinif Tokyo Shoseki dərsliyinin sırası ilədir: əvvəl rəqəmlər (一…十 百 千), sonra sadə kancilər.
- 2–4-cü siniflər kursdakı ardıcıllıqla düzülüb (2-ci sinifdə 万 birinci gəlir).
- Kod: `build/themes/joyo.py`.

## QAYDA: uzun tire (—) işlənmir
- Nə saytda, nə cavablarda. Yerinə qısa tire (–) və ya başqa uyğun işarə qoyulur.
- `nodash.py`: — → –.

## QAYDA: Azərbaycan mətnində yapon sözləri romaji ilə yazılır
- kanji, hiragana, furigana, manga, goshuin, Shinkansen, Hiroshima, Fuji, Ichirou və s.
- ş/ç/c/q transkripsiyası işlənmir.
- `build/themes/azromaji.py` lüğəti tətbiq olunur: səhifəyə və kartlara.
- Cavablarda da bu qaydaya əməl et.

## Kanci kartı (v23)
- 3000 illik tarix panelinin (1–4) dörd kafeli silindi.
- Yalnız bugünkü yazılış qalıb. O, başlığın sağındakı "筆 Yazılış" düyməsi ilə açılıb-bağlanır (PF.k4w).
- Sumi-e şəkli yalnız Qəzet görünüşündə görünür.

## v24
- "Yazılış" düyməsi basılanda sketç panelinin yerinə yazılış çıxır.
- Qəzet görünüşündə rəngli səhnə gizlidir, sketç boz rəngdədir. Digər görünüşlərdə sumi-e yoxdur.
- Mənbə qeydləri UI-dan silindi. Ayarların ən altında bir kiçik lisenziya sətri qalıb, KanjiVG CC BY-SA bunu tələb edir.
- "Bilirdinizmi?" faktlarından 24-ü yeniləndi: `build/themes/facts_new.py`, tətbiq edən `facts.py`.
- Diqqət ediləcəklər:
  - Ekiben: emoji əl ilə çəkilmiş şəkillərlə əvəzləndi (v26).
  - Goshuin torii: istifadəçi "qalsın" dedi.

## ⏳ Kanci hekayələri yenidən yazılacaq
- İstifadəçi üslubu və mənşə izahlarını bəyənmədi.
- Nümunə göndərildi, təsdiq gözlənilir.
- Tələblər:
  - mənşə dəqiq olsun (Şuowen, tunc və fal sümüyü yazısı);
  - dil təbii olsun, peşəkar və danışıq dili qarışıq;
  - "Sketçdə..." kimi absurd yaddaş açarları olmasın;
  - uzun tire olmasın.

## v25
- Kanji siyahısında izah yazıları silindi, bütün kartlar rənglidir.
- Hero hissəsində hər dərsə bir yapon atalar sözü: romaji, hərfi məna, bizdəki qarşılığı (yalnız tam uyğun gələndə). Fayl: `kotowaza.py`, `koto_patch.py`.
- Musiqi: `music.js`, Web Audio ilə yerində yaradılır, fayl yoxdur. 3 trek: Sakura lofi, Yağışlı kafe, Gecə qatarı.
  - Səs düyməsi hər şeyi söndürür.
  - Yanındakı ▾ paneli: trek seçimi, musiqi aç/bağla, səs səviyyəsi, danışıq səsləri.
  - Seçimlər PF.mus, PF.mon, PF.mvol, PF.vmute-də saxlanır.

## Gələcək: PWA (telefona quraşdırma), hələ edilmir
- Artifact səhifəsi claude.ai daxilində açılır. Orada service worker və manifest işləmir, ona görə PWA olmaz.
- Yol: saytı öz ünvanına (GitHub Pages / Netlify / Cloudflare Pages, pulsuz) qoymaq.
- Əlavə ediləcəklər: `manifest.json` (ad, ikonlar, rəng), service worker (fayl keşi → internetsiz işləmə), 192/512 ikonlar.
- Sonra Android/Chrome-da "Ana ekrana əlavə et"; iPhone-da Safari → Paylaş → "Ana ekrana".
- İstəsə Capacitor/TWA ilə Play Store tətbiqi.

## QAYDA: romaji
- Uzun saitlər üstxətlə YAZILMIR. Kanadakı kimi yazılır: ou / oo, uu, aa, ii, ee (byouin, Toukyou, Oosaka, koohii).
- Səhifədəki çevirici, `roN` və bütün mətnlər buna uyğundur. Avtomatik düzəliş: `build/themes/romfix.py` (səhifəyə patch.py, kartlara build.py tətbiq edir).
- Böyük hərfli romajidə həmişə I olmalıdır, İ yox.

## ⏳ İstifadəçidən təlimat gözlənilir
- 耂 (yaşlı adam) komponent şəkli bəyənilmədi: "nə əsaya, nə qocaya bənzəyir". DƏYİŞMƏ — istifadəçi özü təlimat verəcək.

## ⏳ GÖZLƏYƏN: N4 qrammatikası (istifadəçi "hələlik saxla" dedi)
~10 yeni dərs (L26–35): bacarıq forması; niyyət, つもり; てしまう/ておく/てある/てみる, təsirli-təsirsiz; ながら/〜し/すぎる/やすい・にくい; ば/なら/ほうがいい/かもしれない; そうです/ようです/みたい/はず; ために/ように/かどうか/のです; məchul; səbəb və səbəb-məchul; hörmət dili.

## Gələcək üçün ideya
- **Kaite Oboeru:** "şəklə bax, yaz" tipli test sualları.
- Artıq artifact LARzawswQC7FtogNjW4F2r: yalnız istifadəçi istəsə sil.

## Qaydalar
- "Şərti" adlar heç bir test və ya izaha düşməsin.
- Testlərdə dialoq sualı olmasın; ən azı 15 sual, yuxarı hədd yoxdur.
- **Kanci şəkilləri:** mənaya uyğun; qorxulu/narahatedici obraz yox (gəzən göz, uçan qol, ayrı bədən üzvü, dini simvol); mətn şəkli dəqiq təsvir etsin; göndərmədən əvvəl göz ilə yoxla; **emoji heç vaxt**.
- Kanci detalında cizgi sayı və sinif göstərilməsin.
- Hanko yoxdur, sertifikat dəyişmir. Əlavələr bölməsini doldurma.
- Müəllif hüquqlu materiallardan (Look and Learn, Henshall) yalnız ideya.

## Pulsuz mənbələr
KanjiVG (CC BY-SA 3.0), Make Me a Hanzi, Yuji Syuku/Boku/Mai (OFL), Kanji alive (CC-BY 4.0), Aozora Bunko, Tatoeba, JMdict/KANJIDIC2, Tanos JLPT, VOICEVOX.

## v26 (2026-10-15)
- Music: generated engine removed. 3 CC0 tracks from open-lofi (github btahir/open-lofi, release zip, ranged read via scratchpad rz.py): paper-lantern-rain, chapter-by-lamplight, last-train-home → ffmpeg 72k → /home/claude/build/music/m/. Artifact files music/*.mp3; offline: mkoff embeds base64 <script id="mus-NAME">. Controls inside Settings → Səs (#musS); header mute = master; music obeys mute, not voice-mute (data-mus excluded in mute.js).
- Manga: ドン removed; rotating speed lines (@property --mga) + hanko pop; .linecap/.pcap white pill.
- Edo: vertical 言葉の旅 = .hero .wrap::after; hanko right:96px; kotow right:96 top:110.
- Pirate: corsair ship (black tattered sails, Jolly Roger, gun ports), bow faces travel direction.
- Okean: fish waypoints across viewport (okF 46s). Matsuri: fx.js randomizes --fw1..3 on each mtF iteration.
- Ekiben: emoji → hand-drawn SVGs (themes/eki.py, EKS[] injected before CITYX).
- Proverb per lesson fixed (C.n).
- NEXT: rewrite all kanji stories (az/en/ru) in the new style + etymological pictures.
- v27: music now served as music/<name>.js (window.KOTOBA_MUS base64 → blob URL), like audio.js; direct mp3 path did not play in artifact. Sakura theme (themes/sakura.py: branch, falling petals, flower hanko, petal burst on taps in fx.js; fonts TSak=Italiana, TOut=Outfit). Guide rewritten (themes/tour.py, 12 steps, az/en/ru).
- v28 (2026-10-15): köhnə artifact LARzaw... silindi (istifadəçi istədi).
- Kanji hekayələri yenidən yazılır: build/pic4/story2/s_LL.py (6 sahəli tuple), build.py override edir. HAZIR: bütün 548 kanji (s_00–s_22). Qalan: şəkilləri mənşəyə uyğunlaşdırmaq (hələ başlanmayıb). Ehtiyat nüsxə: project doc claude/kanji-hekayeler.md.
  - Üslub: mənşə 2–3 cümlə (piktoqram / məna+səs / mübahisəli olanda açıq de), açar = qısa obraz + 1–2 söz nümunəsi. "Sketçdə" yoxdur. Ru-da uzun sait işarəsi yox (гакко).
- N4 paketi hazırdır, sayta QOŞULMAYIB: build/n4/ (kit, l01–l10, export.py → out/), README-də qoşma addımları. Ehtiyat: project doc claude/n4-paket.md.
- Musiqi brauzerdə işləyir (istifadəçi təsdiqlədi).

## v50 (2026-10-17)
- Xəritə: build/geo/ (mkgeo.py → geo.json Natural Earth; gm_data.js obyektlər; gm.js mühərrik; gm.css). patch.py fx.js-dən sonra inject edir; routeOpen runtime-da gmRouteOpen ilə əvəzlənir.
- Səviyyələr: 島/地方/県/名所 (GLV 1.6/2.8/4.6), kəşflər PF.geo, kanji çipləri kPop.
- Lüğət tam ekran: base.css v31. Geniş ekran .wrap 960/1080 (v30). Piksel body TMono. Balıq toxunuşu + 15 san. fasilə.
- Hostinq: https://ismailovqazanfar.github.io/kotoba-no-tabi/ (repo ismailovqazanfar/kotoba-no-tabi, klon /home/claude/kotoba-no-tabi). pub.sh deploy.py-ni də çağırır; sonra `bash /home/claude/build/site/push.sh "qeyd"`. PWA: sw.js, manifest, icons.

## 2026-10-17
- L10 pişik səhnəsi v2: themes/catscene.js+css (SVG otaq/pişik/top, 12 yer, Sərbəst/Dinlə/Sual-cavab, います/あります). patch.py-də qoşulub.
- themes/scfix.py: L3 mərtəbə adları yerli dildə + 1F düyməsi tərcümədən qorunur + lift SVG; L4 gecə/səhər/gündüz/axşam; L5 romaji boşluqları, az -da/-də, rus Нагою/Осаку; L11 siyahı vergülü; L24 "kim alır" en/ru.
- Qalan: səhnələrdə emoji ikonlar (🎁🤒👔🙋🧑‍✈️🔔💳 və s.) – istifadəçidən soruş.
- 17.10: Pişik v3 (boz pişik, top sağ/sol, peek/win pozaları), scicons.js (səhnə emojiləri SVG), hava romaji+temp hədləri, səs xəbərdarlığı 1 dəfə.
- Növbəti təklif sırası: 8 romaji skanı (desuka/masuka bitişik), 6 dialoq ikonları SVG, 1 cümlə qurma rejimi, 5 səhnə xalı yaddaşı.
- 17.10: J() romaji post-fix (…desu ka ayrılır), scicons #dlg/#annc/.t2who-ya da tətbiq, həkim/💬/qatar ikonları, 🗣 CSS-dən silindi. Qalan: 1 cümlə qurma rejimi, 5 səhnə xalı. Kanji tablarında 🧩🃏🌳, 🎉 və UI ikonları hələ emoji.
- 17.10 (2): scicons bütün səhifəyə (yeni əlavə olunan düyünlər üzrə) tətbiq olunur, ~35 ikon; 🎉 silinir; ✎ ✦ ★ ✓ simvol kimi qalır. Pişik: "Cümlə qur" rejimi + rekord (localStorage kotoba-ct). Qalan: digər səhnələrin xal yaddaşı.

## v52 (2026-10-17) N4 QOŞULDU
- themes/n4.py (patch.py-də scfix-dən sonra): N4_1..10 = LS[26..35], Əlavələr LS[36] (L26.n=36, kotoba-l26→l36 köçürmə), ORD, VOC, I18+I18H, FACTS, KT, SLOTW; 25→35 hədləri; sertifikat N5 üçün (doneN5). Səyahət sonu (完) 35-ci dərsdə.
- Marşrut: 26 Beppu, 27 Matsuyama, 28 Kochi, 29 Takamatsu, 30 Matsue, 31 Tottori, 32 Kanazawa, 33 Takayama, 34 Matsumoto, 35 Niigata (fakt+söz+ekiben veb ilə yoxlanıb). EKS/SMOT/SINK +10. gm.js: ROUTE.length əsaslı; dəniz xətti 24→25→26; gizli dayanacaqlar boz olmur.
- Mərhələ 2 (qalıb): N4 interaktiv səhnələri, 63 yeni kanji kartı (n4_new_kanji.json), səslər, N4 gizli dayanacaqları.
- Şəkil auditi: pic4/cmp_z.py – 口 gülən üz, 目 iri gözlü üz, 耳 qulaqlı üz, 自 burunlu üz, 舌/言 üz, 臣 qapalı göz, 手 əlcək, 足/疋 çəkmə, 回 burulğan, 品 üç qutu. Hekayə açarları 手/目/足 yeniləndi. Dini simvol yoxdur.

## v53 (2026-10-17)
- Xəritə: uzaqda dayanacaqlar kiçik (gm.css data-l 1/2), gizli dayanacaqlar yalnız öz stansiyası seçiləndə (gmHidOn), 24→25→26→27 gəmi (gmSH), dəniz xətti 23..26.
- Məqsədlər az-da adlıq hal: themes/gnom.json + v52.py (GNOM). Giriş: "Kursun quruluşu".
- Adlar dəyişdi (themes/rename.py, azromaji-dən sonra, AUDIDX və base64 toxunulmur): Miller→Tom Parker, Santos→Andre/Sofiya/Luiza Ramos, Karina→Ratna, Wang Xue→Xuan Lan, Sato Keiko→Kato Emiko, Yamada Ichirou/Tomoko/Tarou→Harada Kenji/Yumi/Kento, Matsumoto Tadashi/Yoshiko→Hashimoto Hiroshi/Michiko, Kimura Izumi→Nomura Akane, Gupta→Sharma, Thawaphon→Kittipon, Schmidt→Fischer, John Watt→Paul Hart, Lee Jin Ju→Kang Mi-na, Kobayashi→Ishii; Sony→Midori Shouji, Power Denki→Aozora Denki, Sakura Univ→Wakaba, Fuji Univ→Hikari, AKC→Minato Araşdırma Mərkəzi, Brazil Air→Samba Air. L2 soyad siyahısı və "Sato və Suzuki" faktı qorunur.
- N4 mərhələ 2: geo/gm_hid2.js (10 gizli dayanacaq 26–35), yujiS.woff yeniləndi; pic4/c_N4.py 62 kanji kartı (hekayə+səhnə), themes/n4kj.py KJ; themes/scene28.js (28-ci dərs otaq səhnəsi). Səs: out/kotoba_ses2.py (908 ifadə, audio/missing2.json) – istifadəçi zip göndərəcək.
- Qalan: N4 səhnələri 26,27,29–35; səs zipinin inteqrasiyası.
- v77: N4_VOC dedupe (n4.py glue) + buildW/wAll dedupe; rename.py SECOND: Kittipon→Emin Həsənov (azərbaycanlı tələbə), Fischer→Sergey Volkov (rus mühəndis); scenefd.js forma məşqi 26/27/30/33/34; N4 gizli faktlar yoxlanıldı. Qalan: 29,31,32,35 səhnələri; kotoba_ses2.zip inteqrasiyası.
- v78: KT N4 meaning v[3] or v[4] (29,30,31,35 null idi → köhnə qalırdı); play bölməsi qrammatikadan sonra (v52.py); kotoba_ses2.py 1012 ifadə (audio/missing3.json: +Emin/Volkov, forma məşqi, r28).
- v79: namekk.py/namekk.js – katakana ad: ə→ア, ı→ウ, ü/ö yoon, kə/gə→キャ/ギャ, -yev→エフ, -ova→オワ, RUNAMES lüğəti, ENNAMES +70, en -y/-ie→ー; ENNAMES miller PROTECT.
- v80: langret.py – dil dəyişəndə sessionStorage kotoba-ret {n,y} → həmin dərs və scroll; srs.py/srs.js – "Gündəlik təkrar" banneri (#srsBan, lcard altında), mövcud WB SRS bazası (wbLoad/srsAdd/srsGrade/srsStats) ilə işləyir, gündə 10 yeni söz (kotoba-srs {d,nn}).
## GƏLƏCƏK TÖVSİYƏLƏR (istifadəçi sonra seçəcək)
3. N4 62 kanji etimologiyasını yoxla (Kanjipedia/Wiktionary).
5. Dərs sonu "Bu dərsdə öyrəndin" xülasə kartı.
6. N4 sınaq imtahanı (26–35, JLPT formatı) + N4 sertifikatı.
7. Dinləmə testi (səs gəldikdən sonra).
8. Ölçü/sürət: 5.8 MB, kanji şəkilləri və səsi lazy-load.
10. Avtomatik yoxlama skripti: təkrar, boş sahə, "—", tərcüməsiz mətn.
- v80: scene4.js – 29 ながら, 31 そう (6 SVG şəkil), 32 ように なりました, 35 keigo cədvəli+test (Nümunələr/Yoxla); CSS srs.py-da.
- v81: atm.js/atmpatch.py – bankomat: お引き出し/お預け入れ/お振り込み/残高照会 hamısı işləyir, PIN 1234, balans, 手数料 (iş saatından kənar 110, köçürmə 220/330), çek seçimi, Tapşırıq rejimi (7 tapşırıq), emoji→SVG.
- v82: bankomat düymələrinə .az tərcümələr (ATMKT), hideaz ilə bulanır.
- v83: səs paketi 2 – audio/audio2.js (KOTOBA_AUD2, 1012 ifadə, 3.7MB opus) + AUDIDX2 (aud2.py), mkoff audpack2, deploy audio2.js; artifakta audio.js+audio2.js fayl kimi.
- v85: propn.py – 46 xüsusi isim (şəhər, yer, şəxs, festival, JR, 大学前 və s.) VOC-dan süzülür → lüğət, sözlər, testlər, SRS. Ölkə adları, günlər, ümumi isimlər qalır. Girişdə SRS banneri gizli (C.n===0).
- v86: Gündəlik təkrar saytdan çıxarıldı; kod themes/srs.js-də qalır (srs.py yalnız scene4 CSS-i vurur, SRS_ON flaq qeydi).
## İSTİFADƏÇİ QƏRARLARI (2026-10-17 23:45)
- ETMƏ: dərs xülasə kartı(2), dinləmə testi(4 – hələlik), İsinmə(7), kanji yazma(8), diktə(9), rol oynama(10).
- ET: 1 kanji etimologiya yoxla; 5 sürət/lazy-load; 6 avtomatik yoxlama skripti; 11 radikal üzrə kanji xəritəsi; 12 Ayarlarda statistika (söz "öyrənildi" yalnız bir neçə gün ərzində təkrar düz cavabla); 13 möhür pasportu – hekayə/fakt; 14 qaranlıq rejim yoxla; 15 feil formaları cədvəli.
- QAYDA: N5/N4 fərqini saytda HEÇ YERDƏ qeyd etmə (yalnız biz bilirik). Sertifikat bütün dərslər bitəndə, N5/N4-süz.
- XATIRLAT: (a) sertifikatı update etməliyik; (b) istifadəçi kanjilərlə bağlı yeni bir fikir deyəcək.
- QEYD: saytda hələ çox emoji var (🎉🙋🗣💼 və s., köhnə versiyalardan) – istifadəçiyə təklif et: hamısını SVG/kanji ilə əvəz.
- v87: check.js (node build/check.js) – avtomatik yoxlama; nolevel.py N5/N4 silir; cert35.py sertifikat 35 dərsdən sonra; vtab.py feil cədvəli Əsas/Əlavə (10 forma, dərs keçidi); misc.py L20 emoji→kanji.
- v88: stats.js/stats.py – Ayarlarda Statistika; mənimsəmə kotoba-ms {w:{'w|k':{s,d[],c,x}},days[]}; səviyyə: 0 soruşulmayıb,1 səhv,2 öyrənilir,3 yaxşı (2 gün),4 möhkəm (3+ gün, 6+ gün aralıq, ardıcıl düz). t2Answer (mean/rev/listen) və vqAnswer qeyd edir. Export koduna hələ daxil deyil.
- v88-89: kanjirad.py (lüğət → Kanji → "Ailələr", KanjiVG radikal, /home/claude/kvgdata/rad.json + radm.py mənalar); passport.js/py (möhürə toxun → səyahət gündəliyi, 35 yapon cümləsi PPD); splitfonts.py – T* tema şriftləri tfonts.css-ə (sayt və artifakt), oflayn faylda daxili; c_N4.py etimologiya: 届 頼 退 商 訳 düzəldi; rename.py PROTECT: Matsumoto şəhəri (ROUTE 34, qala faktı) – əvvəl səhvən Hashimoto olmuşdu! NORENAME=1 env ilə rename-siz build.
- v89: kanjirad çıxarıldı (Emalatxanada artıq var idi!). twbars.js – geniş cədvəllərə yuxarı + ekran altına yapışan sürüşdürmə zolağı, vtab ilk sütun sticky. passport: fakt paraqrafı və ipucu silindi, PPD 35 YENİ fakt (saytda olmayan; yer xəritəsi/gizli dayanacaqlarla üst-üstə düşməsin – yoxlanıb). stats: "Başladığın dərslərin sözləri", "Tamamlanan dərslərin kanjiləri", tərif mətni; kotoba-ms export/import koduna (4-cü sahə).
- QAYDA: istifadəçiyə nə etməli olduğunu deyən ipucu mətnləri yazma – özü tapsın.
- NÖVBƏTİ: sertifikat təklifləri (istifadəçi seçəcək), sonra ikon/maskot; kanjilər üzərində tək-tək sürətli iş (mnemonika).
- v90: twbars sinifləri twt/twb (".top" qlobal sinif ilə toqquşurdu → ayarlarda üzən zolaq). Girişdə N5/N4 kurs quruluşu cümləsi istifadəçinin istəyi ilə QAYTARILDI (yalnız orada; check.js istisna edir). Gündəlik faktları vebdə yoxlandı (Takamatsu arkada, Xiroşima limon və s.).
- Sertifikat nümunələri: scratchpad/cert/certs.html (4 dizayn, sertifikatda N5/N4 YOX). Demo: out/"Kotoba no Tabi - demo (hamısı keçilib).html" – localStorage shim (yaddaşda), kotoba-n4mig və prefs.tourDone toxumlanır.
- v91: Girişdə yalnız "N5, N4 səviyyələrini əhatə edir" (dərs nömrəsi YOX). Goshuin dəftəri = xəritədə gizli dayanacaq suallarını cavablamaqla dolur (dərs bitirmək kifayət deyil) – bug deyil; demoya PF.hid toxumlandı. Sertifikat v2: scratchpad/cert/certs2.html (A akademik, B washi zolaq, C gecə-qızılı, D dalğa) – statistikasız.
- v92: spyfix.py – bölmə düymələri: sticky başlıq ofseti ilə scroll, klikdə dərhal aktiv + 1.4s kilid, scroll-spy IO əvəzinə mövqeyə görə (səhifə sonunda son bölmə).
- v93: stats .msg sinfi dialoq .msg ilə toqquşurdu (dialoqlar dar sütunlara bölünürdü) → .msgr. QAYDA: yeni CSS sinifləri unikal prefikslə (ms-, tw-, pp-) – mövcud siniflərlə (top, msg, s, box...) toqquşmasın. Qatar = irəliləyiş göstəricisi (curStop), kliklə hərəkət etmir – istifadəçiyə izah edildi.
- v94: gm.js gmTrain – qatar seçilmiş keçilmiş stansiyaya (RSEL.i<=curStop) gedir, geri gedəndə üzü çevrilir (GTR.rev), GTRP yaddaşda; keçilməmiş stansiyaya klikdə yerində qalır; TRK yalnız irəliləyiş üçün.
- v95: N4 tamamlama (sonnet agent): n4/ext_a.py, ext_b.py, ext_v.py, add/v1-10.txt – 24 qrammatika (L26-34), 364 söz, 41 test sualı; export.py bunları import edir. certpro.py – sertifikat: hanko, rəngli dairələr və bal qutusu çıxarıldı, serif şriftlər (TMin/TCrim), 4 stil rəng dəyişənləri --ca/--ct. QEYD: CSS-i həmişə İLK </style>-a vur (sonuncu JS sətrinin içindədir).
- v96: sertifikat yalnız Tuş/Qızılı; 'Sözlərin Səyahəti' və '1–35' çıxarıldı. N4 əlavələri sonnet agentlə ikinci oxunuşdan keçdi (~55 düzəliş). Səhnəsiz dərslər: 1,2,6,7,9,13,14,15,18,19,21,23.
- 2026-10-18: 12 yeni səhnə (sceneA/B/C.js: L1,2,6,7,9,13,14,15,18,19,21,23) bitdi, düzəldildi (top-level T→lazy, S kölgələnməsi→window.S, U23.no), sonnet korrektə etdi, L19 xüsusi isimlər (富士山/北海道) çıxarıldı. Artifact v97. Demo hələ yenilənməyib.
- v98: səhnələr 1,6,7,9,18,19,21,23 yenidən (sonnet), reset MS-i yaddaşda da sıfırlayır (stats.py).
- v99: sceneK.js – L35 keigo çeviricisi (scene4 əvəzinə), patch.py-də sceneC-dən sonra.
- v100: sceneD(26,27) E(28,29,30) F(31,32) G(33,34) yeni səhnələr; sceneK en/ru register + səhv birləşmə izahı. İkinci oxunuş (proofread) hələ edilməyib – istifadəçi agenti dayandırdı.
