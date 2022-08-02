//this page will run all tests

// ---------------------------\\
//cleaner\\
//----------------------------\\

//appointments
import '../cleaner/appointments/appointments.cy'

//dashboard
import '../cleaner/dashboard/addAbsence.cy'
import '../cleaner/dashboard/availability.cy'

//invitations
import '../cleaner/invitations/invitations.cy'

//payslip
import '../cleaner/payslips/savingsSettings.cy'

//profile

// ---------------------------\\
//client\\
//----------------------------\\

//log in and Log out
import '../client/log-in-out/loginAndLogout.cy'

//appointments
import '../client/appointments/appointments.cy'

//dashboard
import '../client/dashboard/addAbsence.cy'

//hours
import '../client/hours/hours.cy'

//invoices
import '../client/invoices/invoices.cy'

//profile
import '../client/profile/archiveDeleteAccount.cy'
import '../client/profile/communicationPreference.cy'
import '../client/profile/editBillingAdress.cy'
import '../client/profile/editPersonalDetails.cy'
import '../client/profile/editPrimaryAdress.cy'
import '../client/profile/emailAddresses.cy'
import '../client/profile/insurance.cy'
import '../client/profile/paymentMethod.cy'
import '../client/profile/phoneNumbers.cy'

//requests
import '../client/requests/createAndDeleteRequest.cy'

//settings
import '../client/settings/settings.cy'

//workers
import '../client/workers/workers.cy'
