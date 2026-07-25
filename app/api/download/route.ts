// Counts a download (no personal data, just a timestamped row) then hands over
// the file. Counting is best-effort: if it fails, the download still happens.

export const dynamic = "force-dynamic";

const FILE_PATH = "/RealisticGenetics_Beta_v2.9.74.zip";
const FILE_LABEL = "RealisticGenetics_Beta_v2.9.74";

export async function GET(request: Request) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;

  if (url && key) {
    try {
      await fetch(`${url}/rest/v1/sims_blog_downloads`, {
        method: "POST",
        headers: {
          apikey: key,
          Authorization: `Bearer ${key}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({ source: "foxmademods.com", file: FILE_LABEL }),
      });
    } catch (err) {
      console.error("download count failed (serving file anyway)", err);
    }
  }

  return Response.redirect(new URL(FILE_PATH, request.url), 302);
}
