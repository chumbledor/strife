module.exports = [
"[project]/.next-internal/server/app/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
}),
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// 'use client'
// import Button from '@mui/material/Button';
// import Paper from '@mui/material/Paper';
// import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';
// import { ChangeEvent, useState } from 'react';
// import '@/services/account.service';
// import { AccountServiceServiceId } from '@/src/services/account.service.interface';
// import di from '@/DependencyInjection';
// export default function Home() {
//   const [ accessToken, setAccessToken ] = useState('');
//   const [ refreshToken, setRefreshToken ] = useState('');
//   const [ email, setEmail ] = useState('');
//   function onChangeEmail(event: ChangeEvent<HTMLInputElement>): void {
//     setEmail(event.target.value)
//   }
//   const [ password, setPassword ] = useState('');
//   function onChangePassword(event: ChangeEvent<HTMLInputElement>): void {
//     setPassword(event.target.value);
//   }
//   async function onSubmitLogin(event: React.FormEvent<HTMLFormElement>): Promise<void> {
//     event.preventDefault();
//     const accountService = await di.getAsync(AccountServiceServiceId);
//     const username = email;
//     const createAccountResponse = await accountService.createAccount({ email, username, password });
//     const loginResponse = await fetch(
//       'http://localhost:3000/authentication', 
//       {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           email,
//           password
//         })
//       }
//     );
//     const loginJson = await loginResponse.json();
//     setAccessToken(loginJson.accessToken);
//     setRefreshToken(loginJson.refreshToken);
//     const projectsResponse = await fetch(
//       'http://localhost:3000/projects', 
//       {
//         method: 'GET',
//         headers: { 
//           'Content-Type': 'application/json', 
//           'Authorization': `Bearer ${accessToken}` 
//         }
//       }
//     );
//     const projectsJson = await projectsResponse.json();
//     console.log(projectsJson);
//   }
//   return (
//     <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
//       <main className="row-start-2 items-center sm:items-start">
//         <Paper elevation={4}>
//           <form className="flex flex-col gap-[32px] p-8" onSubmit={onSubmitLogin}>
//             <Typography variant="h2" align="center">strife</Typography>
//             <div className="flex flex-col gap-[8px]">
//               <TextField name="email" type="email" value={email} onChange={onChangeEmail} placeholder="email" />
//               <TextField name="password" type="password" onChange={onChangePassword} placeholder="password" />
//               <Button type="submit">Login</Button>
//             </div>
//           </form>
//         </Paper>
//         {/* <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
//               app/page.tsx
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>
//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div> */}
//       </main>
//     </div>
//   );
// }
__turbopack_context__.s([]);
}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7f2aaf77._.js.map