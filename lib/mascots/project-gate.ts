export const ALLOWED_MASCOT_PROJECT_NAME = 'Sometimes Life is just...';

function normalizeProjectName(name: string) {
  return name.trim().toLowerCase();
}

export function isAllowedMascotProjectName(projectName: string | null | undefined) {
  if (!projectName) return false;
  return normalizeProjectName(projectName) === normalizeProjectName(ALLOWED_MASCOT_PROJECT_NAME);
}
