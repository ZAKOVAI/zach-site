export const SITE_URL = "https://zach.runs-on.dev";

export const SITE_NAME = "Zach Benhamou";

export const SITE_DESCRIPTION =
  "Founder of Zakov AI. I build AI agents and automation tools, and open-source the best of them.";

export const LOCATION = "Miami, FL";

export const GITHUB_LOGIN = "ZAKOVAI";

export const GITHUB_URL = "https://github.com/ZAKOVAI";

export const SOURCE_URL = "https://github.com/ZAKOVAI/zach-site";

export const LINKEDIN_URL = "https://www.linkedin.com/in/zachary-benhamou";

export const ZAKOV_AI_URL = "https://www.linkedin.com/company/zakov-ai/";

/**
 * TODO: set the public contact email when the zakov.ai alias is ready.
 * The contact section hides email until this is a non-empty address.
 */
export const EMAIL = "";

/**
 * Repository names that must never appear, even with the showcase topic.
 * Client projects stay off this page. Syftr is excluded by default.
 */
export const EXCLUDED_REPOS = ["syftr"] as const;

export function isConfiguredUrl(value: string): boolean {
  const trimmed = value.trim();
  return trimmed.startsWith("https://") || trimmed.startsWith("http://");
}

export function isConfiguredEmail(value: string): boolean {
  const trimmed = value.trim();
  return trimmed.includes("@") && !trimmed.includes(" ");
}
