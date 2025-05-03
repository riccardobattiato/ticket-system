import { getSupabaseReqResClient } from "@/supabase-utils/reqResClient";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const { response } = getSupabaseReqResClient({ request });

  return response.value;
}
