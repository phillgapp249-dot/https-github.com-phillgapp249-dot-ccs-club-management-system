# CCS Department Club Member Management System - Updates

Implemented from `improve in web.docx`:

- Removed My Profile from the left sidebar.
- Kept My Profile in the top account menu so the admin/adviser profile remains accessible.
- Removed Log out from the top account dropdown; sidebar Log out remains.
- Changed the web UI accent from purple/blue branding to red, black, and white.
- Changed BSIT department labels in the web UI to CCS Department.
- Improved the centered login page and removed the web Forgot Password link/routes.
- Web login is restricted to Admin and Adviser accounts; Member/Officer roles are denied web access.
- Removed Officer from the web User Management account creation/edit choices. Officer positions remain a member position/report concept.
- Improved User Management with a clear Edit action and working edit form for name, email, role, club assignment, and optional password change.
- Improved club edit/add modals and corrected department wording.
- Updated dashboard, applications, events, attendance, reports, and member accent colors to the red theme.

Notes:
- The mobile/API password reset endpoint was not removed because the document requests the web login flow to remove Forgot Password.
- Existing database records with role `officer` are not automatically deleted; they cannot access the web dashboard because `User::canAccessWeb()` allows only `admin` and `adviser`.
