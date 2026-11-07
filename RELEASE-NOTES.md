<div align="justify">

# DeadlineDock 0.5.0 — visible reminder-processing health

Administrators now see reminder-check status, the last attempt and the last
successful completion. Failures are tracked instead of silently discarded.
Checks delayed for at least three minutes produce a warning; an unavailable
health response is reported separately. Retry check uses the same serialized
processing as the automatic one-minute timer and existing notice deduplication.

Health refreshes do not replace open forms. The health endpoint and detailed
status are restricted to administrators. Errors expose a stable generic code,
not raw exception messages, local paths, passwords or document contents.
Status covers the current host session. Successful processing is not proof that
a notification was read or an obligation completed. The host must remain running.

All status messages are available in the sixteen interface languages.
Existing data and licences remain compatible; no database migration is required.
Unsigned Windows x64 preview. Contact: FFFNewsNow@gmail.com.

</div>
