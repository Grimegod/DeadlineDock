# Using DeadlineDock

Create the first administrator locally with a unique password. There is no
email password reset; keep a second trusted administrator to avoid lockout.

Administrators manage users, licences, organization settings and full backups.
Editors maintain records. Viewers read/download records and export CSV. Record visibility follows the account organization and role. Managers and leadership
see their subtree; editors/viewers see their own organization; administrators see all.
See HIERARCHY-AND-ALERTS.md for the role matrix and setup. The last administrator cannot be removed. Reassign open work before
deactivating its owner/deputy.

Add a deadline, responsible person and optional deputy, advance reminder days
(for example `30,7,1,0`), notes/reference and optional attachments. Files are
downloaded, not displayed inline; apply your organization's malware checks.
Stale concurrent edits are refused: reopen and review the latest version.

The host checks reminders every minute. Upcoming reminders are generated in
their advance window; overdue reminders daily. Acknowledgement records viewing,
not resolution. Complete the record separately. Completed/archived records stop
new notices. Changes remain in history. Organization time zone controls dates;
changing interface language never changes the stored deadline.

## CSV

Template: `wwwroot/CSV-TEMPLATE.csv`. UTF-8, comma or semicolon delimited, quoted
multiline fields allowed. English case-sensitive headers:
`title,category,dueDate,ownerUsername,deputyUsername,noticeDays,notes,reference`.
Dates: `yyyy-MM-dd`. Categories: `contract,insurance,certificate,permit,maintenance,other`.
Lead days use pipes: `30|7|1|0`. Usernames must already exist. All rows are checked
before insertion; an invalid row rejects the entire import. Imports create NEW
OPEN records: they do not restore old IDs/status/history or overwrite existing
records. Export neutralises spreadsheet formula prefixes. Use full backup for
an exact restoration.

## Backup and licence

Download `.ddbackup` in Settings while the host stays on. Keep secure copies on
separate storage. Backups are NOT encrypted and include documents/password
hashes. Restore from the host window: select a backup and parent folder. A new
workspace is verified/created, leaving the original intact. Restart the host;
use accounts from the backup. Previous sessions are invalidated.

Settings shows the organization ID. Request licence prepares an email to
FFFNewsNow@gmail.com without sending it. After order confirmation import the
signed `.ddlicense` supplied by the publisher. No online activation or workstation
counting occurs. It also covers restored copies of that organization's workspace.


CSV now also exports `unitId,unitName,priority,delayReason`. The optional import
columns `unitId,priority,delayReason` retain explicit ownership/priority/blocker;
`unitName` is descriptive only. Without unitId, the owner's assigned organization is used.
Imports cannot bypass the operator's access or assign an owner without access.
Historical notices keep their original title/date/reason and are marked as such;
only notices for the current open alert cycle count towards the unread badge.
