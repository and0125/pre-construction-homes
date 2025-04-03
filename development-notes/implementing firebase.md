# Implementing Firebar

## Setup

dependencies:

`npm install firebase react-firebase-hooks`

## Firebase Google Account

Setup a project at `console.firebase.google.com`.

Add the environment variables to the project.

use the console to set up an authentication account.

## Project setup

Add the firebase.js file as in the project.

## Auth Context

Setup an Authentication context file, the wrap the body components in the root layout file with the Auth context.

## Pages

created:

- signup page
- login page
- user-dashboard
- admin-dashboard

## Additional Troubleshooting

There seems to be some difficulty with the firebase configuration values; not sure why. If you include the strings of the API Key and other values from the Firebase console directly into the `lib/firebase.js`, this works completely fine, but is **_UNSAFE_** and should not be done in any production application.

However, adding these values to the `.env.local` file continually produced the following error:

```text
FirebaseError: Firebase: Error (auth/invalid-api-key).

Call Stack30Show 11 ignore-listed frame(s)

[project]/lib/firebase.js [app-client] (ecmascript).next\static\chunks\_6d1f55ef._.js (48:235)

<unknown>.next\static\chunks\_be317ff2._.js (709:27)

runModuleExecutionHooks.next\static\chunks\_be317ff2._.js (755:9)

instantiateModule.next\static\chunks\_be317ff2._.js (707:9)

getOrInstantiateModuleFromParent.next\static\chunks\_be317ff2._.js (640:12)

esmImport.next\static\chunks\_be317ff2._.js (143:20)

[project]/contexts/AuthContext.js [app-client] (ecmascript).next\static\chunks\_6d1f55ef._.js (74:144)

<unknown>.next\static\chunks\_be317ff2._.js (709:27)

runModuleExecutionHooks.next\static\chunks\_be317ff2._.js (755:9)

instantiateModule.next\static\chunks\_be317ff2._.js (707:9)

getOrInstantiateModuleFromParent.next\static\chunks\_be317ff2._.js (640:12)

esmImport.next\static\chunks\_be317ff2._.js (143:20)

[project]/app/login/page.jsx [app-client] (ecmascript).next\static\chunks\_eb274146._.js (14:152)

<unknown>.next\static\chunks\_be317ff2._.js (709:27)

runModuleExecutionHooks.next\static\chunks\_be317ff2._.js (755:9)

instantiateModule.next\static\chunks\_be317ff2._.js (707:9)

getOrInstantiateModuleFromParent.next\static\chunks\_be317ff2._.js (640:12)

commonJsRequire.next\static\chunks\_be317ff2._.js (158:20)

RootLayout

rsc:/Server/C:%5CUsers%5CNew%20User%5CDocuments%5CDEV%5Cside-projects%5Cpre-construction-homes%5C.next%5Cserver%5Cchunks%5Cssr%5C%5Broot%20of%20the%20server%5D__5de3fee5._.js (698:282)
```

Which somehow saw the API Key and the other values as invalid, which wasn't the case.

### Solution

My current solution is to prefix the .env.local variable names with `NEXT_PUBLIC_` for the api key and the other firebase variables locally (for more information, I'll send these in slack, these will **NOT** be committed to the github under any circumstance).

Even though this doesn't protect these variables much either.

Going with this for the time being due to the project, but will talk with Edward about why this isn't working.
