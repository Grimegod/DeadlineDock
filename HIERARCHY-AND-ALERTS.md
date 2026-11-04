# Organizations, escalation and leadership

The Organization field names a node in the internal hierarchy, such as a
department, branch or team. This label does not change licence scope: one
licence covers one legal entity and its internal workstations. Version 0.2.2
updates the labels without changing stored IDs or permissions.

## Setup order

1. Administrator: open **Organization structure**. Create organizations/departments with
   their parent organizations. The organization root cannot be reparented. Organizations are kept
   for history; destructive organization deletion is not offered.
2. Under **Team**, assign each account a organization and role.
3. Edit each organization and choose its supervisor/deputy. They must be active
   administrators, managers or leadership accounts whose scope covers that organization.
   Configure the root supervisor to deliver top-level alerts. A role alone does
   not subscribe the person to every alert.
4. Assign each deadline to its actual owning organization; choose responsible person,
   deputy, priority and any recorded delay reason. Assignees must have access.
5. Configure escalation in **Organization structure**. Use **Check reminders**
   as administrator, or wait for the next minute's scheduled check.

When dividing existing shared data into departments, use **Allocate accounts and
records** in Organization structure. Choose source/target, select the accounts
and their records together, then save. The entire move is atomic and checked
against the displayed account/record versions. Include owners/deputies whose
open responsibilities would otherwise lose access; invalid supervision or
incomplete allocation rejects the whole operation. Roles and passwords remain
unchanged. Affected account sessions are invalidated. One batch supports 1,000
accounts and 5,000 records from the selected source organization.

## Role matrix

| Role | Record visibility | Record changes | Leadership dashboard | Users, organizations, policy, backup |
|---|---|---|---|---|
| Administrator | Entire organization | Entire organization | Entire organization | Yes |
| Leadership | Assigned organization and descendants | No | Assigned subtree | No |
| Manager | Assigned organization and descendants | Assigned subtree | Assigned subtree | No |
| Editor | Assigned organization only | Assigned organization only | No | No |
| Viewer | Assigned organization only | No | No | No |

Authorised record visibility also applies to downloads, history, search data,
directory information, CSV and notifications. The server checks these rules;
hidden buttons are not the protection. Referenced responsible people/supervisors
can appear by name where necessary for an authorised record. This is organization-level
separation, not individual document classification or per-record secrecy labels.

Changing an account's role/organization invalidates its existing sessions. Tree changes
take effect on the next server request. Open responsibilities and supervisor
assignments must be reassigned before a change that would revoke needed access.
Reparenting a organization must preserve valid assignments or the entire change is refused.
Already downloaded documents cannot be recalled from a former authorised client.

## Escalation behaviour

The responsible person/deputy receive ordinary advance/daily-overdue reminders.
Supervisor escalations are additional, separately acknowledged in-app notices:

- Level 1: supervisors assigned to the record's own organization.
- Level 2: supervisors of its parent organization.
- Higher levels: continue towards the organization root.

Defaults: first escalation after 1 overdue calendar day, then 2 additional days
per higher level: day 1, 3, 5, 7... Organization time zone determines the day.
The optional critical rule alerts every assigned level on the first overdue day.
It does not interpret the content of a record; an authorised operator sets its
priority. Checks run once a minute while the host is running. No email/SMS is sent.

Missing supervisors are skipped without replacing them with an unauthorised
recipient. The dashboard highlights overdue work with no direct supervisor.
If the host was off, the next successful check generates eligible outstanding
stages once. There is no claim that a notice was delivered while the host was off.
Each recipient/stage/incident is deduplicated across checks and restarts.

Completion/archive stops escalation. Reopening or changing date/organization/priority
starts a new alert cycle. Editing notes/reasons does not create another incident.
Old notices remain historical and do not inflate the current unread badge.
Their snapshot retains the title, date and reason recorded when generated.
Acknowledgement records viewing confirmation; completion remains a separate action.

## Leadership dashboard

Shows only the user's authorised scope: open overdue cases, critical cases,
escalated cases and direct-supervisor gaps. Organization rows count direct ownership;
top totals include all permitted organizations without double counting. Drill into a
organization's register or an overdue record. Reasons, responsible people and action
history help explain the situation; lateness does not establish negligence.

The panel shows the response time and last successful reminder check. Its overdue
table shows the oldest 200 records; CSV/register retain the full authorised set.
The escalation table shows the latest 100 deliveries for current open incidents,
including who was notified, level and acknowledgement. These are in-app delivery
records, not proof of external email reception, reading or obligation resolution.

## Upgrade and limits

Existing schema-one data is backed up before automatic migration. Accounts and
records initially share the organization root. An administrator must assign
them to their real organizations to establish departmental separation. IDs, documents,
passwords, record history, organization licence and evaluation start are retained.
Old browser sessions are invalidated once. Keep the pre-upgrade backup secure.

Up to 4,096 organizations and 16 hierarchy levels. Existing record/file/backup processing
limits remain. Unlimited licence workstations do not certify unlimited capacity.
One central HTTPS host is required for shared use; separate installations do not
aggregate automatically. No security accreditation is claimed.
