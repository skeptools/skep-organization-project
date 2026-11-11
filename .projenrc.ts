import { ProjenProject } from '@rlmartin-projen/projen-project';
import { NpmAccess, NodePackageManager } from 'projen/lib/javascript';

const majorVersion = 0;
const project = new ProjenProject({
  author: 'Ryan Martin',
  authorAddress: 'rlmartin@gmail.com',
  defaultReleaseBranch: 'main',
  deps: ['@rlmartin-projen/cdktf-project@~8'],
  peerDeps: ['@rlmartin-projen/cdktf-project@~8'],
  devDeps: ['@rlmartin-projen/projen-project@~0'],
  name: '@skeptools/skep-organization-project',
  projenrcTs: true,
  repositoryUrl: 'git@github.com:skeptools/skep-organization-project.git',
  releaseToNpm: true,
  npmAccess: NpmAccess.PUBLIC,
  npmTrustedPublishing: true,
  majorVersion,
  packageManager: NodePackageManager.YARN_CLASSIC,
  typescriptVersion: '~5.9',
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

// ProjenProject uses application defaults for tsconfig. jsii needs declarations
// and must emit them alongside the JavaScript at the package's lib entry point.
project.tsconfig?.file.addOverride('compilerOptions.declaration', true);
project.tsconfig?.file.addOverride('compilerOptions.outDir', project.libdir);

project.synth();
