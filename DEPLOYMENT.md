# Windows deployment

Windows 10/11 x64. Default: `http://127.0.0.1:8767/`, local PC only. Data:
`%LOCALAPPDATA%\DeadlineDock\Workspace`. Keep the host running in the tray for
reminders. The installer adds no firewall rules, scheduled task or startup entry.
This preview is unsigned. Do not disable Windows or certificate protections.

## Shared use

Use one always-on Windows host under a dedicated Windows account. All clients
connect to the same host/database with their browsers. Separate default installs
do not share data. Never run two hosts on one data folder; never place the live
SQLite folder on SMB/UNC, mapped drives or a synchronised cloud folder.

IT must provision a DNS hostname and a valid trusted HTTPS PFX certificate with
its private key matching the hostname. Allow inbound access only from intended
internal networks. No public Internet exposure is needed. Network HTTP is refused.

```powershell
# Supply PFX password securely in DEADLINEDOCK_CERT_PASSWORD if required.
& '.\DeadlineDock.exe' --headless --data 'D:\DeadlineDockData' `
  --listen 'https://deadlines.example.lan:8767' --certificate 'D:\Certificates\deadlines.pfx'
```

Replace example values. Use the actual matching DNS hostname in URLs, not
`0.0.0.0`. Host/Origin checks are enforced. Reverse-proxy TLS termination is not
supported in this release without further design. Create the organisation by
visiting this HTTPS URL on the host itself with the private one-time code from
its `setup-code.txt`. Setup requires a loopback connection. Distribute individual
account credentials securely after setup. Protect workspace access with Windows
permissions; all clients should use the web API, not direct file access.

No Windows service installer is included. If IT supervises startup, use the same
Windows account so DPAPI keys remain available. Confirm client connectivity,
restart behaviour and backups before relying on the installation.

## CLI restore

Stop the old host; choose a new non-existent local directory:

```powershell
& '.\DeadlineDock.exe' --restore 'D:\Backups\organisation.ddbackup' `
  --data 'D:\DeadlineDock-restored'
& '.\DeadlineDock.exe' --data 'D:\DeadlineDock-restored'
```

CLI restore does not rewrite the default workspace preference. Continue with
`--data`, or use the host window's Restore action to save its new preference.
The original folder remains. Keep tested offline backups. Whole-database disk
encryption is the organisation's responsibility; backups are not encrypted.

Record access is enforced by assigned unit and role, including downloads, history
and CSV. See HIERARCHY-AND-ALERTS.md. No SSO, two-factor authentication, automated
retention, document classification labels or compliance certification is included. Test
the actual workload; 25 conflicting edits were tested, enterprise throughput
has not been established. Unlimited licence seats are not a capacity guarantee.


Version 0.2 uses schema 2. First startup against schema 1 creates a full
`before-upgrade-0.2.0-<id>.ddbackup` in the workspace and migrates transactionally.
The backup contains sensitive documents/password hashes. Keep it secure. Existing
browser sessions are invalidated once; organisation ID, licence and trial start
are retained. Do not run 0.1 against the upgraded database. For rollback, restore
the pre-upgrade backup to a NEW workspace with 0.1 and keep the upgraded workspace.
The installer refuses application downgrades. Separate machines still need one
central host; cross-host federation/synchronisation is not included.
