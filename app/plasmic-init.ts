import { initPlasmicLoader } from "@plasmicapp/loader-react";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "2UkQSvf75S4ATA9VdPo8FW",  // ID of a project you are using
      token: "ejYHqn7D0lt1Be8vDBi6qwRCWxwd3n9V6cXcQXrIKvvt9WoCc3I5quQx8yCCZR8fEp49lkCw5MJoeBi1c7A"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})