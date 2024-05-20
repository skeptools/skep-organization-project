import { ProjenProject } from '@rlmartin-projen/projen-project';
import { NpmAccess } from 'projen/lib/javascript';

const majorVersion = 0;
const project = new ProjenProject({
  author: 'Ryan Martin',
  authorAddress: 'rlmartin@gmail.com',
  defaultReleaseBranch: 'main',
  deps: ['@rlmartin-projen/cdktf-project@~4'],
  peerDeps: ['@rlmartin-projen/cdktf-project@~4'],
  devDeps: ['@rlmartin-projen/projen-project@~0'],
  name: '@skeptools/skep-organization-project',
  projenrcTs: true,
  repositoryUrl: 'git@github.com:skeptools/skep-organization-project.git',
  releaseToNpm: true,
  npmAccess: NpmAccess.PUBLIC,
  majorVersion,
  releaseBranches: {
    dev: { prerelease: 'dev', npmDistTag: 'dev', majorVersion },
  },
  depsUpgradeOptions: {
    workflowOptions: {
      branches: ['main'],
    },
  },

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();