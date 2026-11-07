<div align="justify">

# DeadlineDock 0.3.0 — password-protected backups

Create an optional password-protected backup in Settings. The new dialog starts
with password protection selected, asks for confirmation and warns that a lost
password cannot be recovered. Unprotected v1 copies remain available explicitly.

Encrypted backup v2 uses AES-256-GCM with authenticated bounded frames and a
PBKDF2-SHA256 password key. Documents, account hashes and ZIP entry names are
inside the encrypted content. Restoring asks for the password in a masked field
and supports cancellation. Command-line restores can read a password from stdin;
passwords are not accepted in command-line arguments or download URLs.

Existing unencrypted v1 backups still restore. Wrong passwords, tampering,
truncation, reordered frames and trailing bytes are rejected. Restoration keeps
the original workspace and creates a fresh folder only after validation. The
existing expanded-size, attachment, path and database checks remain in force.
Restoration temporarily decrypts on the local disk and removes its staging file;
the restored workspace remains ordinary local data, not encrypted-at-rest storage.
Older application versions cannot open encrypted v2 backups.

English plus ten additional languages; organization licence remains maximum
EUR 10, one payment, unlimited internal workstations. Contact: FFFNewsNow@gmail.com.
Unsigned Windows x64 preview. No accreditation or external audit is claimed.
Original application source and licence-signing key remain private.

</div>
