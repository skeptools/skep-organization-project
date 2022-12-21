import * as path from 'path';
import { CdktfProject, CdktfProjectOptions } from '@rlmartin-projen/cdktf-project';
import { addFiles, allCases, loadSettings, squashPackages } from '@rlmartin-projen/projen-project';

export interface SkepOrganizationProjectOptions extends CdktfProjectOptions {
  readonly organizationName: string;
}

const dependencies = [
  '@skeptools/skep@~0',
  'timezone-enum@~1',
];

export class SkepOrganizationProject extends CdktfProject {
  constructor(options: SkepOrganizationProjectOptions) {
    const tempOptions = {
      ...options,
      deps: squashPackages([...dependencies, ...(options.deps || [])]),
      _organizationName: allCases(options.organizationName),
    };
    const { options: projectOpts, files } = loadSettings(tempOptions, path.join(__dirname, '../files'), true);
    super(projectOpts);
    addFiles(this, files);
    // Add non-templated resources here
  }
}
