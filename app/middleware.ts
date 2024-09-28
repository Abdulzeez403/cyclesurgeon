// import { NextResponse } from "next/server";
// import { supabase } from "@/lib/supabaseClient";

// export async function middleware(req: any) {
//   const {
//     data: { session },
//   } = await supabase.auth.getSession();

//   const protectedRoutes = ["/dashboard", "/profile"]; // List of protected routes
//   const url = req.nextUrl.clone();

//   if (protectedRoutes.includes(url.pathname) && !session) {
//     url.pathname = "/login"; // Redirect to login if not authenticated
//     return NextResponse.redirect(url);
//   }

//   return NextResponse.next();
// }
