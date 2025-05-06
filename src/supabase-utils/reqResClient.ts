/*
"If this was confusing, trust me, I can relate. Hopefully, Next.js will fix this architectural flaw soon.
Take your time to understand it or simply create the file and forget about it forever – we will never
have to look at it again once it’s been created."
*/

import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";
import { Database } from "./types";

export const getSupabaseReqResClient = ({
  request,
}: {
  request: NextRequest;
}) => {
  const response = {
    value: NextResponse.next({ request }),
  };

  const supabase = createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => {
            request.cookies.set(name, value);
          });

          response.value = NextResponse.next({ request });

          cookiesToSet.forEach(({ name, value, options }) => {
            response.value.cookies.set(name, value, options);
          });
        },
      },
    },
  );

  return { supabase, response };
};
