# Migrering: `tertiary` är borttaget ur @agronod/mui-components

Gäller från den version som innehåller `adminTheme` och `theme.palette.dataViz`
(första major efter 2.0.1). Färgskalan `theme.palette.tertiary` och
`Button color="tertiary"` finns inte längre. TypeScript flaggar alla kvarvarande
användningar vid uppgradering.

## Så använder du det här dokumentet i ett konsument-repo

Ge din Claude-instans (eller dig själv) uppdraget nedan, med rätt repo-avsnitt
inklistrat eller länkat:

> Uppgradera `@agronod/mui-components` till version `<X>`. Färgen `tertiary`
> är borttagen. Följ avsnittet för det här repot i
> `https://github.com/agronod/mui-components/blob/main/docs/migrations/remove-tertiary.md`
> exakt: byt varje instans enligt mappningen, inför inga nya hårdkodade hex,
> och utred de punkter som är markerade "UTRED FÖRST" innan du byter dem.
> Kör typkontroll och bygg innan du är klar, och rapportera varje instans du
> bytt samt varje avvikelse från mappningen.

## Ersättningar

| Gammalt | Nytt |
|---|---|
| `theme.palette.tertiary.<nyans>` i en admin-vy | `theme.palette.primary.<nyans>` under `<ThemeProvider options={adminTheme}>` |
| `theme.palette.tertiary.<nyans>` som diagram-/accentfärg | `theme.palette.dataViz.coral[600]` (main), `[700]` (mörkare), `[300]`–`[100]` (ljusare) |
| `<AgronodButton color="tertiary" variant="text">` | `color="secondary"` |
| `colorScheme="tertiary"` på `BarChart`/`StackedChart` | `colorScheme="coral"` |

`adminTheme` exporteras från paketet precis som `agronodTheme`. Det har den
gamla tertiary-skalan som `primary` (hint `#FBF6F5`, pastel `#F4E8E7`,
light `#DAC7C8`, main `#7E474B`, medium `#5B353A`, dark `#3A1E25`) och ärver
allt annat från Agronod-temat. `mainHover`/`mediumHover`/`darkHover` saknas i
skalan; komponentöverstyrningarna faller tillbaka till nästa mörkare steg.

Visualiseringspaletten `theme.palette.dataViz` har ramperna gold, green, blue,
brown, coral, purple med stegen 700 (mörkast) till 100 (ljusast), där 600 är
seriefärgen, samt `other` (`#A3A19F`) för restposten "Övrigt". Kategoriska
serier tilldelas i ordningen `dataVizCategoricalOrder` (gold, blue, brown,
coral, green, purple) och aldrig cykliskt. Max fyra serier per diagram; vik
resten till `other`.

## Mappning per repo

| Repo | Ersätts med | Kommentar |
|---|---|---|
| agrosphere-web (gris-delar) | Coral | Diagramfärger och accent i gris-resultatet |
| agrosphere-web (metodguide) | `info` | Ändras i Claude Design-projektet, inte i repot |
| datadelning-web | Admin-tema | Hela appen byter tema |
| fence-frontend | `secondary` | Undantag: "övriga användare" i UserItem/RemoveUserDialog → `info` |
| agrokoll – RequesterChip | `secondary` | |
| agrokoll – mottagarvyer | Admin-tema | Hela vyn wrappas i Admin-temat, primary-gult blir admin-lila |
| keycloak-b2b-theme | – | Inga instanser |

## Alla instanser

Radnummer gäller vid inventeringen (september 2026) och kan ha förskjutits;
sök på `tertiary` i varje repo för att bekräfta att inget missats.

### agrosphere-web (mui-components 1.28.0)

**Gris-delar → Coral (9 st via theme.palette)**
- `src/pages/resultat/components/TabContentGris.tsx`
  - rad 81–84: `tertiary.medium`, `.main`, `.light`, `.pastel` som diagramfärger
    → `dataViz.coral[700]`, `[600]`, `[400]`, `[200]`
  - rad 166: `tertiary.main` som textfärg → `dataViz.coral[700]` (600 ger under
    3:1 mot vit bakgrund; kontrollera kontrast för text)
  - rad 178: `tertiary.main` i useMemo-dependency
  - rad 520: `color={theme.palette.tertiary.main}`
- `src/pages/start/components/CreateBerakningModal.tsx`
  - rad 559: `tertiary.pastel` som bakgrund när gris är vald → `dataViz.coral[200]`
  - rad 586: `tertiary.light` som ikonbakgrund när gris är vald → `dataViz.coral[400]`

**Metodguiden → `info` (14 st CSS-variabler)**
- `public/metodguide/index.html` rad 225, 227, 228, 579, 596, 598, 599, 641–644:
  `var(--tertiary-main|pastel|light|medium)` → `var(--info-main|pastel|light|medium)`
  för "Stallgödsel"-etiketter och infoboxar
- `public/metodguide/_ds/agronod-web-*/styles.css` rad 39–45: definitionen av
  `--tertiary-*` tas bort när inget refererar den
- OBS: metodguiden synkas från Claude Design-projektet via skillen
  `sync-metodguide`. Gör ändringen i designprojektet och synka sedan,
  annars skrivs den över vid nästa synk.

**Dokumentation**
- `ai-docs/DESIGN_SYSTEM_FOUNDATIONS.md` rad 238–246: uppdatera eller ta bort

### datadelning-web (mui-components 1.20.4) → Admin-tema

Byt `agronodTheme` mot `adminTheme` i appens `ThemeProvider`. Alla 13
instanser går via `theme.palette.tertiary` och byts till
`theme.palette.primary.<samma nyans>`.

- `src/components/AsideNavigation/AsideNavigationView.tsx` rad 52, 105:
  `tertiary.main` som sidomenyns bakgrund (desktop och mobil)
- `src/components/AsideNavigation/components/NavigationItems.tsx`
  rad 65, 70, 74: `tertiary.dark` (hover, fokus) · rad 68: `tertiary.medium` (aktiv)
- `src/components/LogOut/LogOutView.tsx`
  rad 58: `tertiary.dark` (öppen) · rad 59: `tertiary.main` · rad 72, 75, 79:
  `tertiary.medium` (hover, fokus)
- `src/components/PortalHeader/PortalHeaderView.tsx` rad 13: `tertiary.main`
- `src/pages/NotFound/NotFoundPage.tsx` rad 25: `tertiary.light`

Inga `Button color="tertiary"` finns. Sidomenyns knappar är `Box component="button"`
och `ListItemButton` med egna sx-färger. Befintliga `color="primary"`-knappar
(2 st) blir automatiskt admin-lila med temabytet, vilket är avsett.

Förutsättning: repot måste uppgraderas från 1.20.4 till den version av
mui-components som innehåller Admin-temat.

### fence-frontend (mui-components 1.24.0)

**Button `color="tertiary"` → `color="secondary"` (7 st)**
- `src/pages/Registration/components/CreateAccountIntro.tsx` rad 30
- `src/pages/Registration/components/UserInfo.tsx` rad 113
- `src/pages/Registration/components/UserInvitedStep.tsx` rad 25
- `src/pages/Registration/components/RegisterFarmStep.tsx` rad 118, 265
- `src/pages/Registration/components/VerifyEmail.tsx` rad 115
- `src/pages/IndividualService/IndividualServicePage.tsx` rad 197

Alla är `variant="text"`-knappar "Tillbaka" med `ArrowBack`. Kontrollera att
`MuiButton-text.MuiButton-colorSecondary` ger samma uttryck som dagens
tertiary-override (`text.primary`, hover `text.secondary`).

**Användaravatar "övriga användare": `tertiary.main` → `info.main` (4 st)**
- `src/pages/User/components/UserItem.tsx` rad 126
- `src/pages/User/components/RemoveUserDialog.tsx` rad 144, 200, 281

Bakgrund: `UserItem.tsx` rad 122–127 använder `secondary.main` för inloggad
användare och `tertiary.main` för övriga. Skillnaden behålls genom att övriga
får `info.main`. Använd samma val på alla fyra ställen.

### agrokoll/frontend (mui-components 2.0.1)

**RequesterChip → secondary (3 hårdkodade)**
- `src/components/documents-library/RequesterChip.tsx`
  rad 44: `#F4E8E7` (tertiary.pastel) → `theme.palette.secondary.pastel`
  rad 45: `#5B353A` (tertiary.medium) → `theme.palette.secondary.medium`
  rad 46: `#7E474B` (tertiary.main) → `theme.palette.secondary.main`

Byt till theme-tokens istället för nya hårdkodade hex.

**Mottagarvyer → Admin-tema på hela vyn**

Wrappa `PublicSharePage` (och andra mottagarvyer där `variant="share"`
används) i `<ThemeProvider options={adminTheme}>`. Då blir allt som i dag är
primary-gult admin-lila, och alla tertiary-referenser byts till
`primary.<samma nyans>`.

Följd för `progressStyles.ts`: `ProgressFamily = 'primary' | 'tertiary'`
och `familyForVariant` behövs inte längre. Alla progressbarer använder
`theme.palette.primary` och får rätt färg från det aktiva temat. Ta bort
`variant="share"`-växlingen i `ControlProgressSummary.tsx` rad 34 och
förenkla `onSiteStripes` till att alltid läsa `primary`.

Token via theme (7 st) → `primary.<nyans>`:
- `src/components/controls/progressStyles.ts` rad 10, 14, 25–27
- `src/components/controls/ControlProgressSummary.tsx` rad 34
- `src/components/shares/PasswordInputDialog.tsx` rad 158: `'tertiary.main'` · rad 327: `bgcolor: 'tertiary.main'`
- `src/pages/PublicSharePage.tsx` rad 751: `"tertiary.hint"` · rad 1174: `'tertiary.main'`

Hårdkodade (11 st) – UTRED FÖRST varför de är hårdkodade:
- `src/components/shares/PasswordInputDialog.tsx`
  rad 268, 271, 276, 291: `#7D4A4A` (kommenterat "tertiary.main", men main är #7E474B)
  rad 330: `#5A3535` (kommenterat "Darker tertiary", matchar ingen token)
- `src/pages/PublicSharePage.tsx`
  rad 586: `tertiaryBase = '#7E474B'` (matchar main)
  rad 587: `tertiaryLight = '#C99497'` (finns inte i skalan), används rad 620, 623, 629, 634

Frågor att besvara innan byte: är `#7D4A4A`/`#5A3535` medvetna avvikelser,
till exempel för kontrast mot `!important`-overrides på rad 268–271, eller bara
gamla värden? Är `#C99497` en avsiktlig dekorativ mellanton för SVG-cirklarna?
Om inget skäl finns, ersätt med Admin-temats `primary.<nyans>`. Om `#C99497`
behövs som dekorativ mellanton, lägg till den som token i Admin-temat i
mui-components istället för att behålla hex i sidan.

### keycloak-b2b-theme (mui-components 1.28.0)
Inga instanser.

### mui-components (designsystemet självt)
Klart i denna version: skalan, Button-overrides, typningen och stories är
borttagna; `BarChart`/`StackedChart` tar `colorScheme="coral"`.

## Ordning

1. mui-components: Admin-tema och coral tillagda, tertiary borttaget, ny
   major-version släppt.
2. Uppgradera konsumenterna till den versionen (datadelning-web från 1.20.4,
   fence-frontend från 1.24.0, agrosphere-web från 1.28.0, agrokoll från 2.0.1).
3. Byt instanser enligt mappningen ovan.
4. Uppdatera metodguiden i Claude Design och synka med `sync-metodguide`.
