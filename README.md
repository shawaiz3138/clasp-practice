# Clasp + GitHub Actions Practice Repo

Use this to rehearse the exact workflow you'll need for the client's 3 apps.

## 1. Install & login
```bash
npm install -g @google/clasp
clasp login
```

## 2. Clone or create a test Apps Script project
```bash
clasp create --title "PracticeApp" --type standalone
# or, for an existing script:
clasp clone <scriptId>
```
This creates `.clasp.json` (scriptId) and `appsscript.json` (manifest).
**Never commit `.clasp.json`** — it's per-machine. Use `.clasp.json.example` instead.

## 3. Push/pull code
```bash
clasp push   # local -> Apps Script
clasp pull   # Apps Script -> local
```

## 4. Config separation (the client's exact problem)
Never hardcode API keys (Twilio, SQL) in `.gs` files. Use Script Properties:
```javascript
// Set once (manually or via a setup script)
PropertiesService.getScriptProperties().setProperty('TWILIO_SID', 'xxx');

// Read in code
const sid = PropertiesService.getScriptProperties().getProperty('TWILIO_SID');
```
This is what "config separated from code" means in Apps Script terms.

## 5. Deployments (dev vs prod)
```bash
clasp deploy --description "dev"
clasp deploy --description "prod"
clasp deployments   # list deployment IDs
```
Each environment gets its own deployment ID — this is how dev/prod separation works in Apps Script.

## 6. CI/CD (GitHub Actions)
See `.github/workflows/deploy.yml`. It pushes to Apps Script automatically on merge.
You'll need to add these as GitHub repo secrets (Settings → Secrets → Actions):
- `CLASPRC_JSON` — contents of your local `~/.clasprc.json` after `clasp login`
- `SCRIPT_ID` — the target script ID

## 7. Practice checklist
- [ ] Create a dummy Apps Script project and push a change via clasp
- [ ] Move one hardcoded value into PropertiesService
- [ ] Run the included GitHub Action successfully on a test repo
- [ ] Create two deployments (dev/prod) and confirm you can tell them apart
